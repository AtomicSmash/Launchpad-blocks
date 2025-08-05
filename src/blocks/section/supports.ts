import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	layout: { default: { type: "constrained" } },
	spacing: {
		padding: ["vertical"],
	},
} as const satisfies BlockSupports;
export type Supports = typeof supports;
