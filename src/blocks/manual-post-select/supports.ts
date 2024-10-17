import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	align: true,
	layout: {
		default: { type: "default" },
		allowSwitching: true,
		allowEditing: true,
		allowInheriting: true,
		allowSizingOnChildren: true,
		allowVerticalAlignment: true,
		allowJustification: true,
		allowOrientation: true,
		allowCustomContentAndWideSize: true,
	},
	color: true,
	spacing: {
		margin: true,
		padding: true,
		blockGap: true,
	},
	typography: {
		fontSize: true,
		lineHeight: true,
	},
} as const satisfies BlockSupports;
export type Supports = typeof supports;
