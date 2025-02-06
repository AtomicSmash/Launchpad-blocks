import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	color: {
		link: true,
	},
} as const satisfies BlockSupports;
export type Supports = typeof supports;
