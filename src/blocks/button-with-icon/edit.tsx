import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	RichText,
	LinkControl,
	BlockControls,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	Popover,
	ToolbarGroup,
	ToolbarButton,
	Panel,
	PanelBody,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
	link as linkIcon,
	pullLeft as pullLeftIcon,
	pullRight as pullRightIcon,
} from "@wordpress/icons";
import { useMemo, useState, useEffect, type CSSProperties } from "react";
import { getIcons, IconSelectControl } from "@launchpadBlocks/svgs.editor";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({
	clientId,
	isSelected,
	attributes: {
		linkText,
		linkHref,
		linkTarget,
		iconName,
		library,
		size,
		iconPosition,
	},
	setAttributes,
}: BlockEditProps) {
	const [shouldShowLinkPopover, setShouldShowLinkPopover] = useState(false);

	useEffect(() => {
		if (!isSelected) {
			setShouldShowLinkPopover(false);
		}
	}, [isSelected]);
	const blockProps = useBlockProps({
		style: {
			"--icon-size": size,
		} as CSSProperties,
	});
	const memoizedLinkValue = useMemo(
		() => ({
			url: linkHref,
			opensInNewTab: linkTarget === "_blank",
			title: linkText,
		}),
		[linkHref, linkTarget, linkText],
	);

	const iconLibraries = getIcons();

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={linkIcon}
						label={__("Link")}
						isPressed={shouldShowLinkPopover}
						onClick={() => {
							setShouldShowLinkPopover(!shouldShowLinkPopover);
						}}
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						icon={pullLeftIcon}
						title={__("Show icon on left", "launchpad-blocks")}
						isActive={iconPosition === "start"}
						onClick={() =>
							setAttributes({
								iconPosition: "start",
							})
						}
					/>
					<ToolbarButton
						icon={pullRightIcon}
						title={__("Show icon on right", "launchpad-blocks")}
						isActive={iconPosition === "end"}
						onClick={() =>
							setAttributes({
								iconPosition: "end",
							})
						}
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<UnitControl
							__next40pxDefaultSize
							label={"Icon size"}
							value={size}
							onChange={(newSize) => {
								setAttributes({
									size: newSize,
								});
							}}
						/>
					</PanelBody>
				</Panel>
				<IconSelectControl
					dataOnSelectedIcon={{ iconName, library }}
					onIconSelect={(dataOnSelectedIcon) => {
						setAttributes({
							iconName: dataOnSelectedIcon.iconName,
							library: dataOnSelectedIcon.library,
						});
					}}
				/>
			</InspectorControls>
			<button {...blockProps}>
				{iconPosition === "start" && (
					<div className="icon">
						{iconLibraries[library]?.renderIcon(iconName)}
					</div>
				)}
				<RichText
					tagName="span"
					onChange={(newLinkText) => {
						setAttributes({ linkText: newLinkText });
					}}
					allowedFormats={["core/bold", "core/italic"]}
					value={linkText}
					placeholder={"Add text..."}
				/>
				{iconPosition === "end" && (
					<div className="icon">
						{iconLibraries[library]?.renderIcon(iconName)}
					</div>
				)}
				{shouldShowLinkPopover ? (
					<Popover position={"bottom"} noArrow={false} shift={true} offset={10}>
						<LinkControl
							key={`${clientId}-link-edit`}
							value={memoizedLinkValue}
							showInitialSuggestions
							onChange={(nextValue) => {
								setAttributes({
									linkId: nextValue.id,
									linkKind: nextValue.kind,
									linkType: nextValue.type,
									linkHref: nextValue.url,
									linkText: nextValue.title,
									linkTarget: nextValue.opensInNewTab ? "_blank" : "_self",
								});
								setShouldShowLinkPopover(false);
							}}
							onRemove={() => {
								setAttributes({
									linkId: undefined,
									linkKind: undefined,
									linkType: undefined,
									linkHref: undefined,
									linkText: undefined,
								});
							}}
						/>
					</Popover>
				) : null}
			</button>
		</>
	);
}
Edit.displayName = "ButtonWithIcon";
