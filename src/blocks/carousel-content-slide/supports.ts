import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	background: {
		backgroundImage: true,
		backgroundSize: true,
	},
	spacing: {
		padding: ["vertical"],
	},
	layout: {
		default: { type: "flex", justifyContent: "center" },
		allowCustomContentAndWideSize: false,
		allowOrientation: false,
		allowJustification: false,
	},
} as const satisfies BlockSupports;
export type Supports = typeof supports;
