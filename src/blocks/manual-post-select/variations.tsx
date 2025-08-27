import type { InterpretedAttributes } from "./attributes";
import type { BlockVariations } from "@atomicsmash/blocks-helpers";
import { title, postExcerpt, postFeaturedImage } from "@wordpress/icons";

/**
 * Variations declared here should be registered in index.tsx
 */
export const variations = [
	{
		name: "title-only",
		title: "Title only",
		innerBlocks: [["core/post-title"]],
		isDefault: false,
		icon: title,
		scope: ["block"],
	},
	{
		name: "title-and-excerpt",
		title: "Title and excerpt",
		innerBlocks: [["core/post-title"], ["core/post-excerpt"]],
		isDefault: false,
		icon: postExcerpt,
		scope: ["block"],
	},
	{
		name: "simple-card",
		title: "Simple card",
		innerBlocks: [
			["core/post-featured-image"],
			["core/post-title"],
			["core/post-excerpt"],
		],
		isDefault: false,
		icon: postFeaturedImage,
		scope: ["block"],
	},
] as const satisfies BlockVariations<InterpretedAttributes>;
