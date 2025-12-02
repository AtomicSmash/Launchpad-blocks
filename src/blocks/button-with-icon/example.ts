import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";

export const example = {
	attributes: {
		library: "launchpad-blocks",
		iconName: "button-with-icon",
		size: "1rem",
		iconPosition: "start",
		linkText: "button",
	},
} satisfies BlockExample<InterpretedAttributes>;
