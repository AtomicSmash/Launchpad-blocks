import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	isNestedInAnotherNavLink: {
		type: "boolean",
		default: false,
	},
	ariaLabel: {
		type: "string",
		default: "Primary navigation",
	},
	linkOrientation: {
		type: "string",
		enum: ["horizontal", "vertical"],
		default: "horizontal",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
