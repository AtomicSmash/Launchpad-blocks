import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";
import { navListExample } from "../nav-list/example";

export const example = {
	viewportWidth: 500,
	innerBlocks: [
		navListExample,
		{
			name: "core/buttons",
			innerBlocks: [
				{ name: "core/button", attributes: { text: "Example button" } },
			],
		},
	],
} satisfies BlockExample<InterpretedAttributes>;
