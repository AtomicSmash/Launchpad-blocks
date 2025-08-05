import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	align: {
		type: "string",
		default: "full",
	},
	text: {
		type: "string",
	},
	isDismissible: {
		type: "boolean",
		default: true,
	},
	backgroundColor: {
		type: "string",
		default: "elevation-high",
	},
	textColor: {
		type: "string",
		default: "black",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
