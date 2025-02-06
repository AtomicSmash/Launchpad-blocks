import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	prevText: {
		type: "string",
		default: "Go to previous slide",
	},
	nextText: {
		type: "string",
		default: "Go to next slide",
	},
	prevVisualText: {
		type: "string",
		default: "Previous",
	},
	nextVisualText: {
		type: "string",
		default: "Next",
	},
	shouldShowTextVisually: {
		type: "boolean",
		default: true,
	},
	backgroundColour: {
		type: "string",
		default: "black",
	},
	iconColour: {
		type: "string",
		default: "white",
	},
	prevIcon: {
		type: "object",
		default: {
			iconName: "chevron-left" as string,
			library: "launchpad-blocks" as string,
		},
	},
	nextIcon: {
		type: "object",
		default: {
			iconName: "chevron-right" as string,
			library: "launchpad-blocks" as string,
		},
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
