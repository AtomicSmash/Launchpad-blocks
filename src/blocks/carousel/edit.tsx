import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { Panel, PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const { shouldLoop } = attributes;
	const blockProps = useBlockProps({
		"data-carousel": "",
		"data-loop": shouldLoop ? "true" : "false",
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [["launchpad-blocks/carousel-slides"]],
	});
	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<ToggleControl
							__nextHasNoMarginBottom
							checked={shouldLoop}
							label={
								"Should your carousel loop round if you are at the end and you navigate the slide again."
							}
							onChange={(newChecked) => {
								setAttributes({ shouldLoop: newChecked });
							}}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...innerBlocksProps}></div>
		</>
	);
}
Edit.displayName = "CarouselEdit";
