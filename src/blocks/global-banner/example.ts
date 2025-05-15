import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";

export const example = {
	attributes: {
		text: "This is a banner",
		isDismissible: true,
	},
} satisfies BlockExample<InterpretedAttributes>;
