import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	anchor: true,
	splitting: true,
} as const satisfies BlockSupports;
export type Supports = typeof supports;
