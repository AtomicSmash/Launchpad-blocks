import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	id: {
		type: "string",
		default: "",
	},
	tab: {
		type: "object",
		default: {
			id: "",
			label: "",
		} as {
			id: string;
			label: string;
		},
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<
	Supports,
	Attributes
> & {
	metadata: Record<string, unknown> & { name?: string };
};
