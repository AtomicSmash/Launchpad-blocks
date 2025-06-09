import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	isScrolling: {
		type: "boolean",
		default: false,
	},
	shouldAlignBottomRowToLeft: {
		type: "boolean",
		default: false,
	},
	allowResize: {
		type: "boolean",
		default: false,
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
