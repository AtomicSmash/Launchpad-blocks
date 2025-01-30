import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	typography: {
		fontSize: true,
	},
} as const satisfies BlockSupports;
export type Supports = typeof supports;
