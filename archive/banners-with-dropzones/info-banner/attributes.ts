import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	bannerId: {
		type: "string",
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
		default: "yellow",
	},
	textColor: {
		type: "string",
		default: "black",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
