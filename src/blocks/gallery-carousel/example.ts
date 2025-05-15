import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";
import { exampleSlides } from "../carousel/variations";

export const example = {
	attributes: {
		images: exampleSlides.map((slide) => ({
			id: slide.attributes.id,
			url: slide.attributes.url,
		})),
	},
	innerBlocks: [
		{
			name: "launchpad-blocks/carousel-slides",
			innerBlocks: exampleSlides,
		},
		{
			name: "launchpad-blocks/gallery-carousel-lightbox",
			innerBlocks: [
				{
					name: "launchpad-blocks/carousel",
					attributes: {
						images: exampleSlides.map((slide) => ({
							id: slide.attributes.id,
							url: slide.attributes.url,
						})),
					},
					innerBlocks: [
						{
							name: "launchpad-blocks/carousel-slides",
							attributes: {
								shouldPullImagesFromContext: true,
							},
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
			],
		},
	],
} satisfies BlockExample<InterpretedAttributes>;
