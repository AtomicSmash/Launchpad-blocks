import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";

export const example = {
	attributes: {
		isInitiallyOpen: false,
		accordionId: "123",
		headerElement: "h2",
		headerContent: "Joke 1",
	},
	innerBlocks: [
		{
			name: "core/paragraph",
			attributes: {
				content:
					"I was going to sail around the globe in the world’s smallest ship but I bottled it.",
			},
		},
	],
} satisfies BlockExample<InterpretedAttributes>;
