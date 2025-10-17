import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { Panel, PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const { shouldUseAsFallback } = attributes;
	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title="Banner settings">
						<ToggleControl
							checked={shouldUseAsFallback}
							label={"Should this banner be used if no other banner is found?"}
							onChange={(newChecked) => {
								setAttributes({ shouldUseAsFallback: newChecked });
							}}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...blockProps}>
				<p>Your info banners will appear here.</p>
			</div>
		</>
	);
}
Edit.displayName = "BannerZoneEdit";
