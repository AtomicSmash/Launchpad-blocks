import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	navId: {
		type: "string",
	},
	navListContext: {
		type: "string",
		default: "Primary navigation",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
