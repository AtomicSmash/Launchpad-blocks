import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { Panel, PanelBody, RangeControl } from "@wordpress/components";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const { columnCount } = attributes;
	const blockProps = useBlockProps({
		"data-gallery-carousel": "",
		style: {
			"--column-count": columnCount,
		},
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [
			["launchpad-blocks/carousel-slides", { aspectRatio: "1" }],
			["launchpad-blocks/gallery-carousel-lightbox"],
		],
	});
	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<RangeControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							help="Please select the number of images to show on a single row."
							initialPosition={4}
							label="Columns"
							max={10}
							min={1}
							onChange={(newColumnCount) => {
								setAttributes({ columnCount: newColumnCount });
							}}
							allowReset
							value={columnCount}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...innerBlocksProps} />
		</>
	);
}
Edit.displayName = "GalleryCarouselWrapperEdit";
