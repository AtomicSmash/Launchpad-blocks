import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	color: {
		background: true,
		text: false,
	},
} as const satisfies BlockSupports;
export type Supports = typeof supports;
