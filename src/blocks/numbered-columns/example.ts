import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";

export const example = {
	attributes: {
		columns: [
			{ id: 1, heading: "Step one", text: "Build the numbered columns block." },
			{
				id: 2,
				heading: "Step two",
				text: "Add automated tests for the numbered columns block to make sure it doesn't break.",
			},
			{
				id: 3,
				heading: "Step three",
				text: "Add example content for the numbered columns block so it shows a nice preview.",
			},
		],
	},
	viewportWidth: 900,
} satisfies BlockExample<InterpretedAttributes>;
