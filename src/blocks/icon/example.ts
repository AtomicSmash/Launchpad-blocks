import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";
import { iconMetaData } from "../svgs.editor";

export const example = {
	viewportWidth: 48,
	attributes: {
		library: "launchpad-blocks",
		iconName: Object.entries(iconMetaData)[0]?.[0],
		size: "2rem",
	},
} satisfies BlockExample<InterpretedAttributes>;
