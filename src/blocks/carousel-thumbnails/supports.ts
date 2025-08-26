import type { BlockSupports } from "@atomicsmash/blocks-helpers";

export const supports = {
	lock: false,
	layout: {
		default: { type: "constrained" },
		allowCustomContentAndWideSize: false,
	},
} as const satisfies BlockSupports;
export type Supports = Omit<typeof supports, "lock">; // There's a bug with the lock block support type.
