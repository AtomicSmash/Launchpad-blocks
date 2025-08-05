import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	mediaPosition: {
		type: "string",
		enum: ["left", "right"],
		default: "left",
	},
	imageId: {
		type: "integer",
		default: 0,
	},
	shouldBreakOutMedia: {
		type: "boolean",
		default: false,
	},
	hasBackground: {
		type: "boolean",
		default: false,
	},
	shouldChildBlocksBeLocked: {
		type: "boolean",
		default: true,
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
