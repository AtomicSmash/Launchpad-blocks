import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	align: true,
	layout: {
		default: { type: "constrained" },
		allowCustomContentAndWideSize: false,
	},
} as const satisfies BlockSupports;
export type Supports = typeof supports;
