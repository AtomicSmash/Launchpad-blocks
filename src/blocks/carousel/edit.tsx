import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type {
	CreateBlockEditProps,
	BlockInstanceAsObject,
} from "@atomicsmash/blocks-helpers";
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { Panel, PanelBody, ToggleControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { useEffect } from "react";
import { objectArraysAreEqual } from "../helpers";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({
	clientId,
	attributes,
	setAttributes,
	context,
}: BlockEditProps) {
	const { shouldLoop, images } = attributes;
	const blockProps = useBlockProps({
		"data-carousel": "",
		"data-loop": shouldLoop ? "true" : "false",
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [["launchpad-blocks/carousel-slides"]],
	});

	const { shouldGetSlidesFromContext } = useSelect(
		(select) => {
			const { getBlocks } = select(blockEditorStore) as {
				getBlocks: (rootClientId?: string) => BlockInstanceAsObject[];
			};

			const innerBlocks = getBlocks(clientId);
			const slidesBlock = innerBlocks.find((block) => {
				return block.name === "launchpad-blocks/carousel-slides";
			});

			return {
				shouldGetSlidesFromContext:
					(slidesBlock?.attributes?.shouldPullImagesFromContext as
						| boolean
						| undefined) ?? false,
			};
		},
		[clientId],
	);

	useEffect(() => {
		if (
			shouldGetSlidesFromContext &&
			context["launchpad-blocks/carouselImages"] !== undefined &&
			!objectArraysAreEqual(context["launchpad-blocks/carouselImages"], images)
		) {
			setAttributes({
				images: context["launchpad-blocks/carouselImages"],
			});
		}
	}, [context, images, setAttributes, shouldGetSlidesFromContext]);

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
