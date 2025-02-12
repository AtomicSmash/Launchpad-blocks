import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	allowResize: {
		type: "boolean",
		default: false,
	},
	aspectRatio: {
		type: "string",
		default: "auto",
	},
	imageFit: {
		type: "string",
		enum: ["cover", "contain"],
		default: "cover",
	},
	shouldPullImagesFromContext: {
		type: "boolean",
		default: false,
	},
	captionBackground: {
		type: "string",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
