import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";

export const example = {
	attributes: {
		isMultiple: true,
		accordionGroupId: "group-123",
		headerElement: "h3",
	},
	innerBlocks: [
		{
			name: "launchpad-blocks/accordion",
			attributes: {
				isInitiallyOpen: true,
				accordionId: "single-123",
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
		},
		{
			name: "launchpad-blocks/accordion",
			attributes: {
				isInitiallyOpen: true,
				accordionId: "single-456",
				headerContent: "Joke 2",
			},
			innerBlocks: [
				{
					name: "core/paragraph",
					attributes: {
						content:
							"I sailed through my driving test. That’s why I failed it.",
					},
				},
			],
		},
		{
			name: "launchpad-blocks/accordion",
			attributes: {
				isInitiallyOpen: true,
				accordionId: "single-789",
				headerContent: "Joke 3",
			},
			innerBlocks: [
				{
					name: "core/paragraph",
					attributes: {
						content:
							"I love the Olympics. My friend and I invented a new type of relay baton: well, he came up with the idea, I ran with it.",
					},
				},
			],
		},
	],
} satisfies BlockExample<InterpretedAttributes>;
