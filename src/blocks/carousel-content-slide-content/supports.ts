import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	layout: {
		default: { type: "constrained" },
		allowCustomContentAndWideSize: false,
		allowJustification: false,
	},
	spacing: {
		padding: ["left", "right"],
	},
} as const satisfies BlockSupports;
export type Supports = typeof supports;
