import type { InterpretedAttributes } from "./attributes";
import type { BlockVariations } from "@atomicsmash/blocks-helpers";

/**
 * Variations declared here should be registered in index.tsx
 */
export const variations = [
	{
		name: "carousel-simple",
		title: "Carousel",
		innerBlocks: [
			["launchpad-blocks/carousel-slides"],
			["launchpad-blocks/carousel-navigation-arrows"],
		],
		isDefault: true,
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
	},
] as const satisfies BlockVariations<InterpretedAttributes>;
