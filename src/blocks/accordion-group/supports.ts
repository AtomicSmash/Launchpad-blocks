import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	color: true,
	typography: {
		fontSize: true,
		lineHeight: true,
		textAlign: true,
	},
	shadow: true,
	spacing: {
		padding: true,
		margin: true,
	},
} as const satisfies BlockSupports;
export type Supports = typeof supports;
