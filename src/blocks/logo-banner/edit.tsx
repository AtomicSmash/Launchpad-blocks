import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type {
	CreateBlockEditProps,
	BlockInstanceAsObject,
} from "@atomicsmash/blocks-helpers";
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
	MediaPlaceholder,
	MediaReplaceFlow,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { createBlock } from "@wordpress/blocks";
import { Panel, PanelBody, ToggleControl } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { gallery } from "@wordpress/icons";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ clientId, attributes, setAttributes }: BlockEditProps) {
	const { isScrolling } = attributes;
	const blockProps = useBlockProps({
		"data-launchpad-logo-banner": true,
		"data-is-scrolling": isScrolling ? "true" : "false",
		className: `${isScrolling ? "is-scrolling" : ""}`,
	});
	const { hasChildren, innerBlockImages } = useSelect(
		(select) => {
			const { getBlocks } = select(blockEditorStore) as {
				getBlocks: (rootClientId?: string) => (BlockInstanceAsObject & {
					clientId: string;
					isValid: boolean;
					originalContent: string;
					validationIssues: unknown[];
				})[];
			};

			const innerBlocks = getBlocks(clientId);

			return {
				hasChildren: innerBlocks.length > 0,
				innerBlockImages: innerBlocks,
			};
		},
		[clientId],
	);
	const { replaceInnerBlocks, selectBlock } = useDispatch(
		blockEditorStore,
	) as unknown as {
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
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps);
	return (
		<>
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
			<InspectorControls>
				<Panel>
					<PanelBody>
						<ToggleControl
							__nextHasNoMarginBottom
							label={"Scroll through the logos automatically."}
							onChange={(newChecked) => {
								setAttributes({
									isScrolling: newChecked,
								});
							}}
							checked={isScrolling}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...innerBlocksProps}>
				{hasChildren ? (
					<div className="images">
						{children}
						<div className="push-flex-children-to-start"></div>
					</div>
				) : (
					<MediaPlaceholder
						icon={gallery}
						labels={{
							title: __("Logos", "launchpad-blocks"),
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
Edit.displayName = "LogoBannerEdit";
