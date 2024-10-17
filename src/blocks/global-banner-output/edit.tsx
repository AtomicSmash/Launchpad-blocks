import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import { useBlockProps } from "@wordpress/block-editor";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

export function Edit() {
	const blockProps = useBlockProps();
	return (
		<>
			<div {...blockProps}>
				<p>Your global banners will appear here.</p>
			</div>
		</>
	);
}
Edit.displayName = "GlobalBannerOutputEdit";
