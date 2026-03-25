import type { InterpretedAttributes } from "./attributes";
import type { BlockVariations } from "@atomicsmash/blocks-helpers";
import { gallery } from "@wordpress/icons";
import { Icon } from "@launchpadBlocks/svgs";
// import { defaultTemplate } from "../carousel-content-slides/attributes";

export const exampleSlides = [
	{
		name: "core/image",
		attributes: {
			id: 237,
			url: "https://picsum.photos/id/237/260/180",
		},
	},
	{
		name: "core/image",
		attributes: {
			id: 433,
			url: "https://picsum.photos/id/433/260/180",
		},
	},
	{
		name: "core/image",
		attributes: {
			id: 582,
			url: "https://picsum.photos/id/582/260/180",
		},
	},
	{
		name: "core/image",
		attributes: {
			id: 593,
			url: "https://picsum.photos/id/593/260/180",
		},
	},
	{
		name: "core/image",
		attributes: {
			id: 943,
			url: "https://picsum.photos/id/943/260/180",
		},
	},
	{
		name: "core/image",
		attributes: {
			id: 1024,
			url: "https://picsum.photos/id/1024/260/180",
		},
	},
];

export type FunctionalityVariationsType = {
	name: string;
	title: string;
	icon: JSX.Element;
	description: string;
	attributes:
		| BlockVariations<InterpretedAttributes>[number]["attributes"]
		| null;
	baseInnerBlocks: NonNullable<
		BlockVariations<InterpretedAttributes>[number]["innerBlocks"]
	>;
	addFunctionalInnerBlocks:
		| null
		| ((
				existingInnerBlocks: NonNullable<
					BlockVariations<InterpretedAttributes>[number]["innerBlocks"]
				>,
		  ) => NonNullable<
				BlockVariations<InterpretedAttributes>[number]["innerBlocks"]
		  >);
}[];
export const functionalityVariations = [
	{
		name: "basic",
		title: "Simple carousel",
		icon: <Icon isEditorMode={true} iconName="carousel" />,
		description: "A basic carousel for viewing images.",
		attributes: null,
		baseInnerBlocks: [["launchpad-blocks/carousel-slides"]],
		addFunctionalInnerBlocks: null,
	},
	{
		name: "image-pop-up",
		title: "Expandable image carousel",
		icon: <Icon isEditorMode={true} iconName="lightbox" />,
		description: "A carousel which opens in a full screen pop-up on click.",
		attributes: {
			shouldLinkSlidesToLightbox: true,
		},
		baseInnerBlocks: [["launchpad-blocks/carousel-slides"]],
		addFunctionalInnerBlocks: (baseTemplate) => {
			return [
				...baseTemplate,
				[
					"launchpad-blocks/lightbox",
					{},
					[
						[
							"launchpad-blocks/carousel",
							{ lock: { move: true, remove: true } },
							[
								[
									"launchpad-blocks/carousel-slides",
									{
										shouldPullImagesFromContext: true,
										lock: { move: true, remove: true },
									},
								],
								[
									"launchpad-blocks/carousel-navigation-arrows",
									{
										className: "is-style-overlay",
										shouldShowTextVisually: false,
										lock: { move: false, remove: true },
									},
								],
							],
						],
					],
				],
			];
		},
	},
	{
		name: "block-slides",
		title: "Block based slides",
		icon: gallery,
		description: "Advanced users only. Create slides out of blocks.",
		attributes: null,
		baseInnerBlocks: [
			[
				"launchpad-blocks/carousel-content-slides",
				{
					aspectRatio: "16/9",
				},
				[
					[
						"launchpad-blocks/carousel-content-slide",
						{
							backgroundOrOverlayColour: "rgb(0 0 0)",
							style: {
								background: {
									backgroundImage: {
										url: "https://picsum.photos/id/237/1600/900",
									},
									backgroundSize: "cover",
								},
							},
						},
						[
							[
								"launchpad-blocks/carousel-content-slide-content",
								{},
								[
									["core/heading", { placeholder: "Your template" }],
									[
										"core/paragraph",
										{
											placeholder:
												'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.',
										},
									],
								],
							],
						],
					],
				],
			],
		],
		addFunctionalInnerBlocks: null,
	},
] as const satisfies FunctionalityVariationsType;
export type FunctionalityVariationNames =
	(typeof functionalityVariations)[number]["name"];

export const navigationVariations = [
	{
		// Selected if the user skips the navigation variation selector.
		name: "skip",
		title: "This variation is set when you hit skip. this title is not seen.",
		icon: null,
		addNavigationInnerBlocks: (baseTemplate) => {
			return [...baseTemplate, ["launchpad-blocks/carousel-navigation-arrows"]];
		},
	},
	{
		name: "overlay",
		title: "Overlaid arrows",
		icon: <Icon isEditorMode={true} iconName="carousel-navigation-arrows" />,
		addNavigationInnerBlocks: (baseTemplate) => {
			return [
				...baseTemplate,
				[
					"launchpad-blocks/carousel-navigation-arrows",
					{ shouldShowTextVisually: false, className: "is-style-overlay" },
				],
			];
		},
	},
	{
		name: "with-dots",
		title: "Arrows and dots",
		icon: <Icon isEditorMode={true} iconName="carousel-dots" />,
		addNavigationInnerBlocks: (baseTemplate) => {
			return [
				...baseTemplate,
				[
					"launchpad-blocks/carousel-navigation-arrows",
					{},
					[["launchpad-blocks/carousel-dots"]],
				],
			];
		},
	},
	{
		name: "with-slide-count",
		title: "Arrows and slide count",
		icon: <Icon isEditorMode={true} iconName="carousel-slide-count" />,
		addNavigationInnerBlocks: (baseTemplate) => {
			return [
				...baseTemplate,
				[
					"launchpad-blocks/carousel-navigation-arrows",
					{},
					[
						[
							"launchpad-blocks/carousel-slide-count",
							{
								layout: {
									type: "flex",
									flexWrap: "wrap",
									justifyContent: "center",
								},
							},
						],
					],
				],
			];
		},
	},
	{
		name: "with-thumbnails",
		title: "Arrows and thumbnails",
		icon: <Icon isEditorMode={true} iconName="carousel-thumbnails" />,
		addNavigationInnerBlocks: (baseTemplate) => {
			return [
				...baseTemplate,
				[
					"launchpad-blocks/carousel-navigation-arrows",
					{},
					[["launchpad-blocks/carousel-thumbnails"]],
				],
			];
		},
	},
] as const satisfies {
	name: string;
	title: string;
	icon: JSX.Element | null;
	addNavigationInnerBlocks: (
		existingInnerBlocks: NonNullable<
			BlockVariations<InterpretedAttributes>[number]["innerBlocks"]
		>,
	) => NonNullable<
		BlockVariations<InterpretedAttributes>[number]["innerBlocks"]
	>;
}[];
export type NavigationVariationNames =
	(typeof navigationVariations)[number]["name"];

/**
 * Variations declared here should be registered in index.tsx
 */
export const variations = [
	...functionalityVariations
		.map((functionalityVariation) => {
			const subVariationArray: ({
				name: `${FunctionalityVariationNames}-${NavigationVariationNames}`; // Stricter name type
			} & BlockVariations<InterpretedAttributes>[number])[] = [];
			for (const navigationVariation of navigationVariations) {
				let innerBlocks = navigationVariation.addNavigationInnerBlocks(
					functionalityVariation.baseInnerBlocks,
				);
				if (functionalityVariation.addFunctionalInnerBlocks) {
					innerBlocks =
						functionalityVariation.addFunctionalInnerBlocks(innerBlocks);
				}
				const variation: (typeof subVariationArray)[number] = {
					name: `${functionalityVariation.name}-${navigationVariation.name}`,
					title: `${functionalityVariation.title} - ${navigationVariation.title}`,
					icon: navigationVariation.icon ?? undefined,
					scope: [], // Remove all scopes as we use a custom variation selector
					innerBlocks,
				};
				if (functionalityVariation.attributes) {
					variation.attributes = functionalityVariation.attributes;
				}
				subVariationArray.push(variation);
			}
			return subVariationArray;
		})
		.flat(),
] as const satisfies ({
	name: `${FunctionalityVariationNames}-${NavigationVariationNames}`; // Stricter name type
} & BlockVariations<InterpretedAttributes>[number])[];
