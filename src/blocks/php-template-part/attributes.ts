import type { Supports } from "./supports";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	templatePartSlug: {
		type: "string",
	},
	templatePartName: {
		type: "string",
	},
	args: {
		type: "object",
		default: {} as Record<string, AllValuesWithTypes>,
	},
	supportedDynamicTags: {
		type: "array",
		default: [{ label: "Post type", tag: "{{postType}}" }],
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
export type AllValuesWithTypes =
	| { type: "string"; value: string }
	| { type: "boolean"; value: string }
	| { type: "number"; value: string }
	| { type: "array"; value: AllValuesWithTypes[] }
	| { type: "object"; value: Record<string, AllValuesWithTypes> };
