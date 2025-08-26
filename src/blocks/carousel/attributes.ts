import type { Supports } from "./supports";
import type {
	BlockAttributes,
	BlockInstanceAsObject,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	images: {
		type: "array",
		default: [] as { id: number; url: string }[],
	},
	shouldLoop: {
		type: "boolean",
		default: true,
	},
	shouldLinkSlidesToLightbox: {
		type: "boolean",
		default: false,
	},
	slides: {
		type: "array",
		default: [] as BlockInstanceAsObject[],
	},
	currentlySelectedSlide: {
		type: "number",
		default: 0,
		role: "local",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
