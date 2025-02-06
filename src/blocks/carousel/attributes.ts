import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	images: {
		type: "array",
		default: [] as { id: number }[],
	},
	shouldLoop: {
		type: "boolean",
		default: true,
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
