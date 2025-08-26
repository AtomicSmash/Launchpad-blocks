import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	prefix: {
		type: "string",
		role: "content",
	},
	betweenText: {
		type: "string",
		default: "/",
		role: "content",
	},
	suffix: {
		type: "string",
		role: "content",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
