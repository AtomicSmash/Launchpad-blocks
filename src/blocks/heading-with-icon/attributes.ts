import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	iconName: {
		type: "string",
		role: "content",
	},
	library: {
		type: "string",
		role: "content",
	},
	size: {
		type: "string",
		default: "2rem",
	},
	headerElement: {
		type: "string",
		enum: ["h2", "h3", "h4", "h5", "h6", "p"],
		default: "h2",
	},
	headerContent: {
		type: "string",
	},
	headerStyle: {
		type: "string",
		enum: ["", "t-1", "t-2", "t-3", "t-4", "t-5", "t-6"],
		default: "",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
