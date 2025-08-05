import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";

export const example = {
	attributes: {
		mediaPosition: "left",
		imageId: 0,
		shouldBreakOutMedia: true,
		hasBackground: true,
		shouldChildBlocksBeLocked: true,
	},
	innerBlocks: [
		{
			name: "core/paragraph",
			attributes: {
				className: "wp-block-launchpad-blocks-media-and-text__intro",
				content: "Part 6",
			},
		},
		{
			name: "core/heading",
			attributes: {
				content: "The Hunchback Trout",
			},
		},
		{
			name: "core/paragraph",
			attributes: {
				content:
					"The creek was made narrow by little green trees that grew too close together. The creek was like 12, 845 telephone booths in a row with high Victorian ceilings and all the doors taken off and all the backs of the booths knocked out. Sometimes when I went fishing in there, I felt just like a telephone repairman, even though I did not look like one. I was only a kid covered with fishing tackle, but in some strange way by going in there and catching a few trout, I kept the telephones in service. I was an asset to society.",
			},
		},
		{
			name: "core/button",
			attributes: {
				text: "Read more",
			},
		},
	],
} satisfies BlockExample<InterpretedAttributes>;
