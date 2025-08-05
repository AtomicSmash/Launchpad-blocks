import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	shouldShowImage: {
		type: "boolean",
		default: true,
	},
	imageId: {
		type: "integer",
		default: 0,
	},
	imagePosition: {
		type: "string",
		enum: ["left", "right"],
		default: "left",
	},
	headerElement: {
		type: "string",
		enum: ["h2", "h3", "h4", "h5", "h6", "p"],
		default: "h2",
	},
	headerContent: {
		type: "string",
		default: "",
	},
	textContent: {
		type: "string",
		default: "",
	},
	buttons: {
		type: "array",
		default: [
			{
				id: 1,
				label: "",
				href: "",
				target: "_self",
			},
		] as {
			id: number;
			label: string;
			href: string;
			target: "_self" | "_blank";
		}[],
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
