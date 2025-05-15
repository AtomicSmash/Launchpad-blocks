import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";

export const example = {
	attributes: {
		columnCount: 1,
		type: "ul",
		markerType: "normal",
		markerInnerColour: "#ff0000",
		markerColour: "#ff0000",
	},
	innerBlocks: [
		{
			name: "launchpad-blocks/fancy-list-item",
			attributes: {
				textContent: "Alice.",
			},
		},
		{
			name: "launchpad-blocks/fancy-list-item",
			attributes: {
				textContent: "The White Rabbit.",
			},
		},
		{
			name: "launchpad-blocks/fancy-list-item",
			attributes: {
				textContent: "The Cheshire Cat.",
			},
		},
		{
			name: "launchpad-blocks/fancy-list-item",
			attributes: {
				textContent: "The Mad Hatter.",
			},
		},
		{
			name: "launchpad-blocks/fancy-list-item",
			attributes: {
				textContent: "The Queen of Hearts.",
			},
		},
	],
} satisfies BlockExample<InterpretedAttributes>;
