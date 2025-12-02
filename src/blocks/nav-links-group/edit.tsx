import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	BlockControls,
	LinkControl,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { Popover, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { link } from "@wordpress/icons";
import { useMemo, useState } from "react";
import { HeadingLevelSelect } from "@launchpadBlocks/helpers.editor";
import { attributes as definedAttributeOptions } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, setAttributes, clientId }: BlockEditProps) {
	const { linkHref, linkTarget, headerElement, headerContent } = attributes;
	const [shouldShowLinkPopover, setShouldShowLinkPopover] = useState(false);
	const blockProps = useBlockProps();
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		template: [
			[
				"launchpad-blocks/nav-list",
				{ linkOrientation: "vertical" },
				[["launchpad-blocks/nav-menu-item"]],
			],
		],
		renderAppender: () => null,
	});

	const memoizedLinkValue = useMemo(
		() => ({
			url: linkHref,
			opensInNewTab: linkTarget === "_blank",
			title: headerContent,
		}),
		[linkHref, linkTarget, headerContent],
	);

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<HeadingLevelSelect
						levelOptions={definedAttributeOptions.headerElement.enum}
						selectedLevel={headerElement}
						setSelectedHeadingLevel={(newHeadingLevel) => {
							setAttributes({ headerElement: newHeadingLevel });
						}}
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						icon={link}
						label="Edit"
						onClick={() => setShouldShowLinkPopover(!shouldShowLinkPopover)}
					/>
					{shouldShowLinkPopover ? (
						<Popover
							position={"bottom"}
							noArrow={false}
							shift={true}
							offset={10}
						>
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
										linkTarget: nextValue.opensInNewTab ? "_blank" : "_self",
										headerContent: nextValue.title,
									});
									setShouldShowLinkPopover(false);
								}}
								onRemove={() => {
									setAttributes({
										linkId: undefined,
										linkKind: undefined,
										linkType: undefined,
										linkHref: undefined,
									});
								}}
							/>
						</Popover>
					) : null}
				</ToolbarGroup>
			</BlockControls>
			<div {...innerBlocksProps}>
				<RichText
					tagName={headerElement}
					value={headerContent}
					onChange={(newHeaderContent) => {
						setAttributes({
							headerContent: newHeaderContent,
						});
					}}
					allowedFormats={["core/bold", "core/italic"]}
					placeholder={"Add a title for this nav links group..."}
					className={`nav-links-group-heading is-style-reset${linkHref ? ` hyperlink` : ""}`}
				/>
				{children}
			</div>
		</>
	);
}
Edit.displayName = "NavLinksGroupEdit";
