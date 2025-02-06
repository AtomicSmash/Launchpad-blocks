import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	selectedOutlineColour: {
		type: "string",
		default: "black",
	},
	lock: {
		type: "boolean",
		default: true,
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
