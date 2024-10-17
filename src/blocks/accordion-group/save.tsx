import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockSaveProps } from "@atomicsmash/blocks-helpers";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

type BlockSaveProps = CreateBlockSaveProps<InterpretedAttributes>;

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return Markup to be saved to the database.
 */
export function Save({ attributes }: BlockSaveProps) {
	const { isMultiple, accordionGroupId } = attributes;
	const blockProps = useBlockProps.save({
		id: accordionGroupId,
		"data-accordion-group": "",
		"data-is-multiple": String(isMultiple),
	});
	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
