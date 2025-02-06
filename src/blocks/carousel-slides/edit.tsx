import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { InterpretedAttributes as CarouselInterpretedAttributes } from "../carousel/attributes";
import type {
	CreateBlockEditProps,
	BlockInstanceAsObject,
} from "@atomicsmash/blocks-helpers";
import {
	MediaPlaceholder,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
	InspectorControls,
} from "@wordpress/block-editor";
import { createBlock } from "@wordpress/blocks";
import { Panel, PanelBody } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { gallery } from "@wordpress/icons";
import { AspectRatioSelector } from "../helpers.editor";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ clientId, attributes, setAttributes }: BlockEditProps) {
	const { aspectRatio, imageFit } = attributes;
	const blockProps = useBlockProps({
		className: aspectRatio !== "auto" ? "has-aspect-ratio" : "",
		style: {
			"--slide-aspect-ratio": aspectRatio,
			"--slide-image-fit": aspectRatio !== "auto" ? imageFit : undefined,
		},
	});

	const { hasChildren, innerBlockImages, parentCarouselClientId } = useSelect(
		(select) => {
			const { getBlocks, getBlockParentsByBlockName } = select(
				blockEditorStore,
			) as {
				getBlocks: (rootClientId?: string) => BlockInstanceAsObject[];
				getBlockParentsByBlockName: (
					clientId: string,
					blockName: string,
				) => string[];
			};

			const innerBlocks = getBlocks(clientId);

			return {
				hasChildren: innerBlocks.length > 0,
				innerBlockImages: innerBlocks,
				parentCarouselClientId: getBlockParentsByBlockName(
					clientId,
					"launchpad-blocks/carousel",
				)[0]!,
			};
		},
		[clientId],
	);

	const { replaceInnerBlocks, selectBlock, updateBlockAttributes } =
		useDispatch(blockEditorStore) as unknown as {
			replaceInnerBlocks: (
				rootClientId: string,
				blocks: BlockInstanceAsObject[],
				updateSelection?: boolean,
				initialPosition?: 0 | -1 | null,
			) => void;
			selectBlock: (clientId: string, initialPosition?: 0 | -1 | null) => void;
			updateBlockAttributes: <
				Attributes extends Record<string, unknown> = Record<string, unknown>,
			>(
				clientIds: string | string[],
				attributes: Partial<Attributes>,
				uniqueByBlock?: boolean,
			) => void;
		};

	function updateImages(
		selectedImages: {
			url: string;
			alt: string;
			id: number;
			link: string;
			caption: string;
			sizes: Record<
				string,
				{
					height: number;
					width: number;
					orientation: "portrait" | "landscape";
					url: string;
				}
			>;
			mime: string;
			subtype: string;
			type: string;
		}[],
	) {
		// Because we are reusing existing innerImage blocks any reordering
		// done in the media library will be lost so we need to reapply that ordering
		// once the new image blocks are merged in with existing.
		const newOrderMap = selectedImages.reduce(
			(result, image, index) => ((result[image.id] = index), result),
			{} as Record<number, number>,
		);

		const existingImageBlocks = innerBlockImages.filter((block) =>
			selectedImages.find((img) => img.id === block.attributes?.id),
		);

		const newImageList = selectedImages.filter(
			(img) =>
				!existingImageBlocks.find(
					(existingImg) => img.id === existingImg.attributes?.id,
				),
		);

		const newBlocks = newImageList.map((image) => {
			return createBlock("core/image", {
				id: image.id,
				url: image.url,
				caption: image.caption,
				alt: image.alt,
				sizeSlug: "full",
			});
		});

		const newBlocksFullReplacement = existingImageBlocks
			.concat(newBlocks)
			.sort(
				(a, b) =>
					newOrderMap[a.attributes?.id as number]! -
					newOrderMap[b.attributes?.id as number]!,
			);

		replaceInnerBlocks(clientId, newBlocksFullReplacement);

		updateBlockAttributes<CarouselInterpretedAttributes>(
			parentCarouselClientId,
			{
				images: newBlocksFullReplacement.map((imageBlock) => {
					return { id: imageBlock.attributes!.id as number };
				}),
			},
		);

		// Select the first block to scroll into view when new blocks are added.
		if (newBlocks?.length > 0) {
			selectBlock(newBlocks[0]!.clientId);
		}
	}

	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps);

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<AspectRatioSelector
							ratioValue={aspectRatio}
							ratioOnChange={(newAspectRatio) => {
								setAttributes({ aspectRatio: newAspectRatio });
							}}
							imageFitValue={imageFit}
							imageFitOnChange={(newImageFit) => {
								setAttributes({ imageFit: newImageFit });
							}}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...innerBlocksProps}>
				{hasChildren ? (
					children
				) : (
					<MediaPlaceholder
						icon={gallery}
						labels={{
							title: __("Carousel slides", "launchpad-blocks"),
							instructions: __(
								"Drag and drop images, upload, or choose from your library.",
								"launchpad-blocks",
							),
						}}
						onSelect={updateImages}
						accept="image/*"
						allowedTypes={["image"]}
						multiple
						addToGallery={false}
					/>
				)}
			</div>
		</>
	);
}
Edit.displayName = "CarouselSlidesEdit";
