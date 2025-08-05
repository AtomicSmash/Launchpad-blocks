import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	headerElement: {
		type: "string",
		enum: ["h2", "h3", "h4", "h5", "h6", "p"],
		default: "h2",
	},
	headerContent: {
		type: "string",
	},
	style: {
		type: "object",
		default: {
			padding: {
				top: "var:preset|spacing|10",
				bottom: "var:preset|spacing|10",
			},
		},
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
