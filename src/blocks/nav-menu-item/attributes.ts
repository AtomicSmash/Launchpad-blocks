import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
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
