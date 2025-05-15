import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";

export const example = {
	viewportWidth: 1200,
	attributes: {
		namespace: "preview",
		shouldFillRemainingSpots: true,
		postsToShow: 3,
		layout: { type: "grid", columnCount: 3 },
	},
	innerBlocks: [
		{ name: "core/post-featured-image" },
		{ name: "core/post-title" },
		{ name: "core/post-excerpt" },
		{ name: "core/read-more" },
	],
} satisfies BlockExample<InterpretedAttributes>;
