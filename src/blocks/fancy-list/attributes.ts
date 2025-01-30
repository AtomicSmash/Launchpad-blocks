import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	columnCount: {
		type: "integer",
		default: 1,
	},
	type: {
		type: "string",
		enum: ["ul", "ol"],
		default: "ul",
	},
	markerType: {
		type: "string",
		enum: ["normal", "icon"],
		default: "normal",
	},
	markerColour: {
		type: "string",
	},
	markerInnerColour: {
		type: "string",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
