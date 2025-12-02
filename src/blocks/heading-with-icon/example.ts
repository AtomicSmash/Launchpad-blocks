import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";

export const example = {
	viewportWidth: 280,
	attributes: {
		library: "launchpad-blocks",
		iconName: "heading-with-icon",
		size: "2rem",
		headerContent: "Heading",
		headerElement: "h2",
		headerStyle: "",
	},
} satisfies BlockExample<InterpretedAttributes>;
