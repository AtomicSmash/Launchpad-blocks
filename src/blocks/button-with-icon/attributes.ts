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
		default: "1rem",
	},
	iconPosition: {
		type: "string",
		enum: ["start", "end"],
		default: "start",
	},
	linkId: {
		type: "number",
	},
	linkKind: {
		type: "string",
	},
	linkType: {
		type: "string",
	},
	linkHref: {
		type: "string",
	},
	linkTarget: {
		type: "string",
		enum: ["_self", "_blank"],
		default: "_self",
	},
	linkText: {
		type: "string",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
