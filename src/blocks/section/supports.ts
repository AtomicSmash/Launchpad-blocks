import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	align: false, // Section block is always alignfull
	layout: { default: { type: "constrained" } },
	spacing: {
		padding: ["vertical"],
	},
	color: {
		text: false,
	},
} as const satisfies BlockSupports;
export type Supports = typeof supports;
