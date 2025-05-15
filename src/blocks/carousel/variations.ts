import type { InterpretedAttributes } from "./attributes";
import type { BlockVariations } from "@atomicsmash/blocks-helpers";

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

/**
 * Variations declared here should be registered in index.tsx
 */
export const variations = [
	{
		name: "carousel-simple",
		title: "Carousel",
		innerBlocks: [
			["launchpad-blocks/carousel-slides"],
			[
				"launchpad-blocks/carousel-navigation-arrows",
				{ shouldShowTextVisually: false, className: "is-style-overlay" },
			],
		],
		isDefault: true,
		example: {
			viewportWidth: 1200,
			attributes: {
				images: exampleSlides.map((slide) => ({
					id: slide.attributes.id,
					url: slide.attributes.url,
				})),
				shouldLoop: true,
				shouldLinkSlidesToLightbox: false,
			},
			innerBlocks: [
				{
					name: "launchpad-blocks/carousel-slides",
					innerBlocks: exampleSlides,
				},
				{
					name: "launchpad-blocks/carousel-navigation-arrows",
					attributes: {
						shouldShowTextVisually: false,
						className: "is-style-overlay",
					},
				},
			],
		},
	},
	{
		name: "carousel-thumbnail",
		title: "Carousel with thumbnail navigation",
		innerBlocks: [
			["launchpad-blocks/carousel-slides"],
			[
				"launchpad-blocks/carousel-navigation-arrows",
				{},
				[["launchpad-blocks/carousel-thumbnails"]],
			],
		],
		example: {
			viewportWidth: 1200,
			attributes: {
				images: exampleSlides.map((slide) => ({
					id: slide.attributes.id,
					url: slide.attributes.url,
				})),
				shouldLoop: true,
				shouldLinkSlidesToLightbox: false,
			},
			innerBlocks: [
				{
					name: "launchpad-blocks/carousel-slides",
					innerBlocks: exampleSlides,
				},
				{
					name: "launchpad-blocks/carousel-navigation-arrows",
					innerBlocks: [{ name: "launchpad-blocks/carousel-thumbnails" }],
				},
			],
		},
	},
] as const satisfies BlockVariations<InterpretedAttributes>;
