import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	linkText: {
		type: "string",
	},
	subMenuId: {
		type: "string",
		default: "",
	},
	columnCount: {
		type: "number",
		default: 1,
	},
	columnWidth: {
		type: "number",
		default: 14,
	},
	isInSubMenu: {
		type: "boolean",
		default: true,
	},
	isDropdownShown: {
		type: "boolean",
		default: false,
		role: "local",
	},
	icon: {
		type: "object",
		default: {
			iconName: "chevron-down" as string,
			library: "launchpad-blocks" as string,
		},
	},
	iconLocation: {
		type: "string",
		default: "end",
		enum: ["start", "end"],
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
