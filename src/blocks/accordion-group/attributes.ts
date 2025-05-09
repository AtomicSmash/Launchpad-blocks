import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	isMultiple: {
		type: "boolean",
		default: false,
	},
	accordionGroupId: {
		type: "string",
		default: "",
	},
	headerElement: {
		type: "string",
		enum: ["h2", "h3", "h4", "h5", "h6", "p"],
		default: "h2",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
