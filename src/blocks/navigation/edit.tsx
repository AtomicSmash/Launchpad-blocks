import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
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
	attributes: { navId: navIdAttribute },
	setAttributes,
}: BlockEditProps) {
	const navId = navIdAttribute ?? `nav-${clientId}`;
	const blockProps = useBlockProps({
		"data-navigation": true,
		"data-nav-id": navId,
		"data-state": "closed",
	});
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "navigation-content",
			"data-navigation-content": true,
			"data-state": "closed",
		},
		{
			orientation: "horizontal",
		},
	);
	useEffect(() => {
		if (navIdAttribute !== navId) {
			setAttributes({ navId: `nav-${clientId}` });
		}
	}, [clientId, navIdAttribute, navId, setAttributes]);
	return (
		<div {...blockProps}>
			<div {...innerBlocksProps}></div>
		</div>
	);
}
Edit.displayName = "NavigationEdit";
