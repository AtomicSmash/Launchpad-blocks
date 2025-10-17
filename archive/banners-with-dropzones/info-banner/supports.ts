import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	color: true,
	layout: {
		default: { type: "constrained" },
	},
	spacing: {
		padding: true,
	},
} as const satisfies BlockSupports;
export type Supports = typeof supports;
