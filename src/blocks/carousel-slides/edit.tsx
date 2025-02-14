import type { Attributes, InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { Supports } from "./supports";
import type { InterpretedAttributes as CarouselInterpretedAttributes } from "../carousel/attributes";
import type { InterpretedAttributes as GalleryCarouselInterpretedAttributes } from "../gallery-carousel/attributes";
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
	MediaReplaceFlow,
	BlockControls,
} from "@wordpress/block-editor";
import { createBlock } from "@wordpress/blocks";
import { Button, Panel, PanelBody } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { gallery } from "@wordpress/icons";
import { useEffect } from "react";
import { objectArraysAreEqual } from "../helpers";
import { AspectRatioSelector, ColourSelectControl } from "../helpers.editor";
import { attributes as attributesDefinition } from "./attributes";

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
	const {
		aspectRatio,
		imageFit,
		shouldPullImagesFromContext,
		captionBackground,
	} = attributes;
	const blockProps = useBlockProps({
		className: aspectRatio !== "auto" ? "has-aspect-ratio" : "",
		style: {
			"--slide-aspect-ratio": aspectRatio,
			"--slide-image-fit": aspectRatio !== "auto" ? imageFit : undefined,
			"--caption-background": captionBackground,
		},
	});

	const shouldLinkSlidesToLightbox =
		context["launchpad-blocks/shouldLinkSlidesToLightbox"];

	const {
		hasChildren,
		innerBlockImages,
		parentCarousel,
		associatedLightboxBlockId,
	} = useSelect(
		(select) => {
			const { getBlock, getBlocks, getBlockParentsByBlockName } = select(
				blockEditorStore,
			) as {
				getBlock: (clientId: string) => BlockInstanceAsObject & {
					clientId: string;
					isValid: boolean;
					originalContent: string;
					validationIssues: unknown[];
				};
				getBlocks: (rootClientId?: string) => (BlockInstanceAsObject & {
					clientId: string;
					isValid: boolean;
					originalContent: string;
					validationIssues: unknown[];
				})[];
				getBlockParentsByBlockName: (
					clientId: string,
					blockName: string | string[],
				) => string[];
			};

			const innerBlocks = getBlocks(clientId);

			const parentCarouselClientId = getBlockParentsByBlockName(clientId, [
				"launchpad-blocks/carousel",
				"launchpad-blocks/gallery-carousel",
			])[0]!;
			const parentCarousel = getBlock(parentCarouselClientId);

			function getBlockChildrenByBlockName(
				blocks: ReturnType<typeof getBlocks>,
				blockNames: string | string[],
			) {
				const blockChildrenIds: string[] = [];
				blockNames = Array.isArray(blockNames) ? blockNames : [blockNames];
				for (const block of blocks) {
					if (blockNames.includes(block.name)) {
						blockChildrenIds.push(block.clientId);
					}
					if (block.innerBlocks && block.innerBlocks.length > 0) {
						blockChildrenIds.push(
							...getBlockChildrenByBlockName(
								block.innerBlocks as ReturnType<typeof getBlocks>,
								blockNames,
							),
						);
					}
				}
				return blockChildrenIds;
			}

			return {
				hasChildren: innerBlocks.length > 0,
				innerBlockImages: innerBlocks,
				parentCarousel,
				associatedLightboxBlockId: shouldLinkSlidesToLightbox
					? (getBlockChildrenByBlockName(
							getBlocks(parentCarouselClientId),
							"launchpad-blocks/gallery-carousel-lightbox",
						)[0] ?? null)
					: null,
			};
		},
		[clientId, shouldLinkSlidesToLightbox],
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

	function convertImageBlocksToImagesAttribute(
		imageBlocks: (BlockInstanceAsObject & {
			clientId: string;
		})[],
	) {
		return imageBlocks.map((imageBlock) => {
			return {
				id: imageBlock.attributes!.id as number,
				url: imageBlock.attributes!.url as string,
			};
		});
	}

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
			.map((block) => {
				const { validationIssues, originalContent, ...existingBlock } = block;
				return existingBlock;
			})
			.concat(newBlocks)
			.sort(
				(a, b) =>
					newOrderMap[a.attributes?.id as number]! -
					newOrderMap[b.attributes?.id as number]!,
			);

		replaceInnerBlocks(clientId, newBlocksFullReplacement);

		// Select the first block to scroll into view when new blocks are added.
		if (newBlocks?.length > 0) {
			selectBlock(newBlocks[0]!.clientId);
		}
	}

	useEffect(() => {
		if (shouldPullImagesFromContext) {
			return;
		}
		const imageAttribute =
			convertImageBlocksToImagesAttribute(innerBlockImages);
		if (
			!objectArraysAreEqual(
				parentCarousel.attributes?.images as
					| CarouselInterpretedAttributes["images"]
					| GalleryCarouselInterpretedAttributes["images"],
				imageAttribute,
			)
		) {
			updateBlockAttributes<
				CarouselInterpretedAttributes | GalleryCarouselInterpretedAttributes
			>(parentCarousel.clientId, {
				images: imageAttribute,
			});
		}
	}, [
		innerBlockImages,
		parentCarousel,
		shouldPullImagesFromContext,
		updateBlockAttributes,
	]);

	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps);

	return (
		<>
			{!shouldPullImagesFromContext ? (
				<BlockControls group="other">
					<MediaReplaceFlow
						allowedTypes={["image"]}
						accept="image/*"
						onSelect={updateImages}
						name={__("Add", "launchpad-blocks")}
						multiple
						mediaIds={convertImageBlocksToImagesAttribute(innerBlockImages)
							.filter((image) => image.id)
							.map((image) => image.id)}
						addToGallery={innerBlockImages.length > 0}
					/>
				</BlockControls>
			) : null}
			<InspectorControls group="styles">
				<ColourSelectControl<Supports, Attributes>
					colours={[
						{
							attributeName: "captionBackground",
							label: "Caption background colour",
						},
					]}
					attributes={attributes}
					attributesDefinition={attributesDefinition}
					setAttributes={setAttributes}
				/>
			</InspectorControls>
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
				{shouldLinkSlidesToLightbox && associatedLightboxBlockId ? (
					<Panel>
						<PanelBody>
							<Button
								type="button"
								variant="primary"
								onClick={() => {
									selectBlock(associatedLightboxBlockId);
								}}
							>
								Edit lightbox
							</Button>
						</PanelBody>
					</Panel>
				) : null}
			</InspectorControls>
			<div {...innerBlocksProps}>
				{hasChildren ? (
					children
				) : shouldPullImagesFromContext ? (
					context["launchpad-blocks/carouselImages"].length ? (
						context["launchpad-blocks/carouselImages"].map(({ id, url }) => {
							return (
								<figure key={id} className="wp-block-image">
									<img src={url} alt="" />
								</figure>
							);
						})
					) : (
						<figure className="wp-block-image">
							<img src={`https://picsum.photos/id/237/2000/1600`} alt="" />
						</figure>
					)
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
