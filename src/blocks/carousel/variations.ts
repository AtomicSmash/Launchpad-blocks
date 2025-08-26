import type { InterpretedAttributes } from "./attributes";
import type { BlockVariations } from "@atomicsmash/blocks-helpers";
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

/**
 * Variations declared here should be registered in index.tsx
 */
export const variations = [
	{
		name: "carousel-simple",
		title: "Simple image carousel",
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
		title: "Image carousel with thumbnail navigation",
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
	{
		name: "carousel-content-simple",
		title: "Simple content carousel",
		innerBlocks: [
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
			[
				"launchpad-blocks/carousel-navigation-arrows",
				{ shouldShowTextVisually: false, className: "is-style-overlay" },
			],
		],
	},
	{
		name: "carousel-content-arrows-and-dots",
		title: "Content carousel - Arrows and dots",
		innerBlocks: [
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
			[
				"launchpad-blocks/carousel-navigation-arrows",
				{},
				[["launchpad-blocks/carousel-dots"]],
			],
		],
	},
] as const satisfies BlockVariations<InterpretedAttributes>;
