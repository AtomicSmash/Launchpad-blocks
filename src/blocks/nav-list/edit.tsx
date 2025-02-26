import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
	InspectorAdvancedControls,
} from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { useEffect } from "react";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

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
	},
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
	});
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "navigation-nav-list",
		},
		{
			orientation: isNestedInAnotherNavLink ? "vertical" : "horizontal",
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

	if (isNestedInAnotherNavLink) {
		return (
			<div {...blockProps}>
				<ul {...innerBlocksProps}></ul>
			</div>
		);
	}
	return (
		<>
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
			<nav {...blockProps}>
				<ul {...innerBlocksProps}></ul>
			</nav>
		</>
	);
}
Edit.displayName = "NavListEdit";
