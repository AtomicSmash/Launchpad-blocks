import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	align: ["wide", "full"],
} as const satisfies BlockSupports;
export type Supports = typeof supports;
