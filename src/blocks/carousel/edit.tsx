import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { FunctionalityVariationsType } from "./variations";
import type {
	CreateBlockEditProps,
	BlockInstanceAsObject,
} from "@atomicsmash/blocks-helpers";
import type { BlockInstance as WordPressBlockInstance } from "@wordpress/blocks";
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { createBlocksFromInnerBlocksTemplate } from "@wordpress/blocks";
import {
	Button,
	Panel,
	PanelBody,
	Placeholder,
	ToggleControl,
} from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { applyFilters } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "react";
import { objectArraysAreEqual } from "@launchpadBlocks/helpers";
import { useHasChildren, WPMenuIcon } from "@launchpadBlocks/helpers.editor";
import { Icon } from "@launchpadBlocks/svgs";
import { functionalityVariations, variations } from "./variations";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

// addFilter(
// 	"launchpadBlocks.carouselFunctionalityVariations",
// 	"launchpadBlocks.testContentCarouselDisable",
// 	(variations: FunctionalityVariationsType) => {
// 		return variations.filter((variation) => {
// 			return variation.name !== "block-slides";
// 		});
// 	},
// );

// addFilter(
// 	"launchpadBlocks.carouselFunctionalityVariations",
// 	"launchpadBlocks.testIncorrectFormatReturned",
// 	() => {
// 		return "Break stuff";
// 	},
// );

export function Edit({
	clientId,
	attributes,
	setAttributes,
	context,
}: BlockEditProps) {
	const { shouldLoop, images, slides, shouldLinkSlidesToLightbox } = attributes;
	const blockProps = useBlockProps({
		"data-launchpad-carousel": "",
		"data-loop": shouldLoop ? "true" : "false",
		"data-has-lightbox": shouldLinkSlidesToLightbox ? "true" : "false",
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
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

	const { replaceInnerBlocks, updateBlockAttributes } = useDispatch(
		blockEditorStore,
	) as unknown as {
		replaceInnerBlocks: (
			clientId: string,
			blocksToReplaceWith: WordPressBlockInstance[],
			updateSelection?: boolean,
		) => void;
		updateBlockAttributes: <
			Attributes extends Record<string, unknown> = Record<string, unknown>,
		>(
			clientIds: string | string[],
			attributes: Partial<Attributes>,
			uniqueByBlock?: boolean,
		) => void;
	};

	useEffect(() => {
		if (shouldGetSlidesFromContext) {
			if (
				context["launchpad-blocks/carouselImages"] !== undefined &&
				!objectArraysAreEqual(
					context["launchpad-blocks/carouselImages"],
					images,
				)
			) {
				setAttributes({
					images: context["launchpad-blocks/carouselImages"],
				});
			}
			if (
				context["launchpad-blocks/carouselSlides"] !== undefined &&
				!objectArraysAreEqual(
					context["launchpad-blocks/carouselSlides"],
					slides,
				)
			) {
				setAttributes({
					slides: context["launchpad-blocks/carouselSlides"],
				});
			}
		}
	}, [context, images, slides, setAttributes, shouldGetSlidesFromContext]);

	const filteredFunctionalityVariations = applyFilters(
		"launchpadBlocks.carouselFunctionalityVariations",
		functionalityVariations,
	);

	if (!validateFunctionalityVariations(filteredFunctionalityVariations)) {
		throw new Error(
			"Filtering of functionality variations has broken the variations. Please fix the filters to continue.",
		);
	}

	const [initialVariationChoice, setInitialVariationChoice] = useState<
		string | null
	>(null);

	const hasChildren = useHasChildren(clientId);

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
			<div {...innerBlocksProps}>
				{hasChildren ? (
					children
				) : initialVariationChoice === null ? (
					<Placeholder
						icon={<Icon isEditorMode={true} iconName="carousel" />}
						label={"Carousel - Pick functionality"}
						instructions="Please choose the core functionality of the carousel."
					>
						{/*
						 * Disable reason: The `list` ARIA role is redundant but
						 * Safari+VoiceOver won't announce the list otherwise.
						 */
						/* eslint-disable jsx-a11y/no-redundant-roles -- see above */}
						<ul
							className="block-editor-block-variation-picker__variations"
							role="list"
							aria-label={__(
								"Carousel functionality variations",
								"launchpad-blocks",
							)}
						>
							{/* eslint-enable jsx-a11y/no-redundant-roles */}
							{filteredFunctionalityVariations.map((variation) => {
								return (
									<li key={variation.name}>
										<Button
											__next40pxDefaultSize
											variant="tertiary"
											className="block-editor-block-variation-picker__variation block-editor-block-variation-picker__variation--wide"
											icon={variation.icon}
											iconSize={48}
											onClick={() => {
												setInitialVariationChoice(variation.name);
											}}
										>
											<div className="block-editor-block-variation-picker__variation-text-group">
												<span className="block-editor-block-variation-picker__variation-label">
													<strong>{variation.title}</strong>
												</span>
												<span className="block-editor-block-variation-picker__variation-label">
													{variation.description}
												</span>
											</div>
										</Button>
									</li>
								);
							})}
						</ul>
					</Placeholder>
				) : (
					<Placeholder
						icon={<Icon isEditorMode={true} iconName="carousel" />}
						label={"Carousel - Pick navigation"}
						instructions="Please choose how you'd like to navigate between different slides."
					>
						{/*
						 * Disable reason: The `list` ARIA role is redundant but
						 * Safari+VoiceOver won't announce the list otherwise.
						 */
						/* eslint-disable jsx-a11y/no-redundant-roles -- see above */}
						<ul
							className="block-editor-block-variation-picker__variations"
							role="list"
							aria-label={__("Block variations")}
						>
							{/* eslint-enable jsx-a11y/no-redundant-roles */}
							{variations
								.filter((variation) => {
									return (
										// Only get sub variations of the initial choice
										variation.name.startsWith(initialVariationChoice) &&
										// Don't display the variation used for skip
										!variation.name.endsWith("skip")
									);
								})
								.map((variation) => {
									return (
										<li key={variation.name}>
											<Button
												__next40pxDefaultSize
												variant="tertiary"
												className="block-editor-block-variation-picker__variation"
												icon={
													"string" === typeof variation.icon ? (
														<WPMenuIcon iconString={variation.icon} />
													) : (
														variation.icon
													)
												}
												iconSize={48}
												onClick={() => {
													if (variation.attributes) {
														updateBlockAttributes(
															clientId,
															variation.attributes,
														);
													}
													if (variation.innerBlocks) {
														replaceInnerBlocks(
															clientId,
															createBlocksFromInnerBlocksTemplate(
																variation.innerBlocks,
															),
															false,
														);
													}
												}}
											></Button>
											<span className="block-editor-block-variation-picker__variation-label">
												{variation.title.split(" - ").at(-1)}
											</span>
										</li>
									);
								})}
						</ul>
						<div className="block-editor-block-variation-picker__skip">
							<Button
								__next40pxDefaultSize
								variant="link"
								onClick={() => {
									const variation = variations.find(
										(variation) =>
											variation.name === `${initialVariationChoice}-skip`,
									);
									if (variation?.attributes) {
										updateBlockAttributes(clientId, variation.attributes);
									}
									if (variation?.innerBlocks) {
										replaceInnerBlocks(
											clientId,
											createBlocksFromInnerBlocksTemplate(
												variation.innerBlocks,
											),
											false,
										);
									}
								}}
							>
								{__("Skip")}
							</Button>
						</div>
					</Placeholder>
				)}
			</div>
		</>
	);
}
Edit.displayName = "CarouselEdit";

function validateFunctionalityVariations(
	variations: unknown,
): variations is FunctionalityVariationsType {
	return (
		Array.isArray(variations) &&
		variations.every((variation) => {
			return (
				// TODO: Do more specific validation of values, but this works for now.
				typeof variation === "object" &&
				variation !== null &&
				"name" in variation &&
				"title" in variation &&
				"icon" in variation &&
				"description" in variation &&
				"attributes" in variation &&
				"baseInnerBlocks" in variation &&
				"addFunctionalInnerBlocks" in variation
			);
		})
	);
}
