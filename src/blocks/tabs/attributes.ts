import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	tabsGroupId: {
		type: "string",
		default: "",
	},
	shouldShowTabSectionTitle: {
		type: "boolean",
		default: true,
	},
	titleLevel: {
		type: "string",
		enum: ["1", "2", "3", "4", "5", "6"],
		default: "2",
	},
	title: {
		type: "string",
		default: "",
	},
	initiallySelectedTab: {
		type: "string",
		default: "",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
