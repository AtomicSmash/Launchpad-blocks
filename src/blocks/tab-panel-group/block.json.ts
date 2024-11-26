import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/tab-panel-group",
	ancestor: ["launchpad-blocks/tabs"],
	allowedBlocks: ["launchpad-blocks/tab-panel"],
	title: "Tab panel group",
	category: "theme",
	description: "A container block for individual tab panels.",
	textdomain: "launchpad",
	editorScript: "file:./index.tsx",
	render: "file:./render.php",
	attributes,
	supports,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
