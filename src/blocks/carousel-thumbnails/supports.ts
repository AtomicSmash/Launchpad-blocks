import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	lock: false,
} as const satisfies BlockSupports;
export type Supports = typeof supports;
