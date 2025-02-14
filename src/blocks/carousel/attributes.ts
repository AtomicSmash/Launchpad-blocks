import type { Supports } from "./supports";
import type {
	BlockAttributes,
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
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
