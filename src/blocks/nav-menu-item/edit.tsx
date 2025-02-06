import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	RichText,
	__experimentalLinkControl as LinkControl,
	BlockControls,
} from "@wordpress/block-editor";
import { Popover, ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { link as linkIcon } from "@wordpress/icons";
import { useMemo, useState, useEffect } from "react";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 */
export function Edit({
	clientId,
	isSelected,
	attributes: { linkText, linkHref, linkTarget },
	setAttributes,
}: BlockEditProps) {
	const [shouldShowLinkPopover, setShouldShowLinkPopover] = useState(false);

	useEffect(() => {
		if (!isSelected) {
			setShouldShowLinkPopover(false);
		}
	}, [isSelected]);
	const blockProps = useBlockProps({
		className: "menu-group-list-item",
	});
	const memoizedLinkValue = useMemo(
		() => ({
			url: linkHref,
			opensInNewTab: linkTarget === "_blank",
			title: linkText,
		}),
		[linkHref, linkTarget, linkText],
	);

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
			</BlockControls>
			<li {...blockProps}>
				{linkHref ? (
					<RichText
						tagName="span"
						className="menu-group-list-item-link"
						onChange={(newLinkText) => {
							setAttributes({ linkText: newLinkText });
						}}
						allowedFormats={["core/bold", "core/italic"]}
						value={linkText}
						placeholder={"Add text..."}
					/>
				) : (
					<button
						onClick={() => setShouldShowLinkPopover(!shouldShowLinkPopover)}
					>
						Add link
					</button>
				)}
				{shouldShowLinkPopover ? (
					<Popover position={"bottom"} noArrow={false} shift={true} offset={10}>
						<LinkControl
							key={`${clientId}-link-edit`}
							value={memoizedLinkValue}
							showInitialSuggestions
							onChange={(nextValue) => {
								setAttributes({
									linkHref: nextValue.url,
									linkText: nextValue.title,
									linkTarget: nextValue.opensInNewTab ? "_blank" : "_self",
								});
								setShouldShowLinkPopover(false);
							}}
							onRemove={() => {
								setAttributes({
									linkHref: "",
									linkText: "",
								});
							}}
						/>
					</Popover>
				) : null}
			</li>
		</>
	);
}
Edit.displayName = "NavMenuItemEdit";
