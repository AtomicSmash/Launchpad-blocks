import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	iconName: {
		type: "string",
		role: "content",
		default: "menu-close-icon",
	},
	library: {
		type: "string",
		role: "content",
		default: "launchpad-blocks",
	},
	backgroundColor: {
		type: "string",
		default: "white",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
