import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	shouldUseAsFallback: {
		type: "boolean",
		default: false,
	},
	style: {
		type: "object",
		default: {
			margin: {
				top: "0",
				bottom: "0",
			},
		},
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
