import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	align: true,
	alignWide: true,
	layout: {
		default: {
			type: "flex",
		},
	},
	spacing: {
		blockGap: true,
	},
} as const satisfies BlockSupports;
export type Supports = typeof supports;
