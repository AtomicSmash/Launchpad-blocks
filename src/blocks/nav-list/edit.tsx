import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
	InspectorAdvancedControls,
	BlockControls,
	InnerBlocks,
} from "@wordpress/block-editor";
import {
	TextControl,
	ToolbarButton,
	ToolbarGroup,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { lineDashed, alignJustify } from "@wordpress/icons";
import { useEffect } from "react";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 */
export function Edit({
	clientId,
	attributes: {
		isNestedInAnotherNavLink: isNestedInAnotherNavLinkAttribute,
		ariaLabel,
		linkOrientation,
	},
	context: { "launchpad-blocks/isInSubMenu": isInSubMenu },
	setAttributes,
}: BlockEditProps) {
	const isNestedInAnotherNavLink = useSelect(
		(select) => {
			const { getBlockParentsByBlockName } = select(blockEditorStore) as {
				getBlockParentsByBlockName: (
					clientId: string,
					blockName: string,
				) => string[];
			};
			return (
				getBlockParentsByBlockName(clientId, "launchpad-blocks/nav-list")
					.length > 0
			);
		},
		[clientId],
	);

	const blockProps = useBlockProps({
		"data-navigation-nav-list": true,
		className:
			linkOrientation === "horizontal" ? "is-horizontal" : "is-vertical",
	});
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "navigation-nav-list",
		},
		{
			orientation: isNestedInAnotherNavLink ? "vertical" : "horizontal",
			templateLock: false,
			renderAppender: isInSubMenu ? undefined : InnerBlocks.ButtonBlockAppender,
		},
	);
	useEffect(() => {
		if (isNestedInAnotherNavLinkAttribute !== isNestedInAnotherNavLink) {
			setAttributes({ isNestedInAnotherNavLink });
		}
	}, [
		clientId,
		isNestedInAnotherNavLinkAttribute,
		isNestedInAnotherNavLink,
		setAttributes,
	]);

	useEffect(() => {
		if (isInSubMenu && linkOrientation !== "vertical") {
			setAttributes({ linkOrientation: "vertical" });
		}
	}, [clientId, isInSubMenu, linkOrientation, setAttributes]);

	const NavListElement = isNestedInAnotherNavLink ? "div" : "nav";

	return (
		<>
			<BlockControls>
				{!isInSubMenu ? (
					<ToolbarGroup>
						<ToolbarButton
							icon={lineDashed}
							label={__("Align links horizontally", "launchpad-blocks")}
							isPressed={linkOrientation === "horizontal"}
							onClick={() => {
								setAttributes({
									linkOrientation: "horizontal",
								});
							}}
						/>
						<ToolbarButton
							icon={alignJustify}
							label={__("Align links vertically", "launchpad-blocks")}
							isPressed={linkOrientation === "vertical"}
							onClick={() => {
								setAttributes({
									linkOrientation: "vertical",
								});
							}}
						/>
					</ToolbarGroup>
				) : null}
			</BlockControls>
			<InspectorAdvancedControls>
				<TextControl
					label="Screen reader label"
					help={
						"Define how this navigation block will be described for users who can't see."
					}
					value={ariaLabel}
					onChange={(newAriaLabel) => {
						setAttributes({
							ariaLabel: newAriaLabel,
						});
					}}
				/>
			</InspectorAdvancedControls>
			<NavListElement {...blockProps}>
				<ul {...innerBlocksProps} />
			</NavListElement>
		</>
	);
}
Edit.displayName = "NavListEdit";
