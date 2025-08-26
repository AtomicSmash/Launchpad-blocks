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
	columnCount: {
		type: "integer",
		default: 4,
	},
	shouldLinkSlidesToLightbox: {
		type: "boolean",
		default: true,
	},
	slides: {
		type: "array",
		default: [] as BlockInstanceAsObject[],
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
