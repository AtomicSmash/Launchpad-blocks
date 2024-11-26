import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

export function Edit() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps);
	return (
		<>
			<div {...innerBlocksProps} />
		</>
	);
}
Edit.displayName = "TabPanelGroupEdit";
