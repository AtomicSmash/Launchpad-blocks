import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/nav-submenu",
	title: "Nav sub menu",
	category: "theme",
	description: "A sub menu dropdown for the navigation block.",
	allowedBlocks: ["launchpad-blocks/nav-list"],
	parent: ["launchpad-blocks/nav-list"],
	textdomain: "launchpad-blocks",
	keywords: ["menu", "nav", "links"],
	editorScript: "file:./index.tsx",
	style: "file:./style.scss",
	editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	attributes,
	supports,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
