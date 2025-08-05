import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	columns: {
		type: "array",
		default: [
			{
				id: 1,
				heading: "",
				text: "",
			},
		] as { id: number; heading: string; text: string }[],
	},
	headerElement: {
		type: "string",
		enum: ["h2", "h3", "h4", "h5", "h6", "p"],
		default: "h2",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
