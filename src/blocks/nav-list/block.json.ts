import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { example } from "./example";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/nav-list",
	title: "Nav list",
	category: "theme",
	description: "The collection of the actual menu items for your navigation.",
	parent: [
		"launchpad-blocks/navigation",
		"launchpad-blocks/nav-submenu",
		"launchpad-blocks/nav-links-group",
	],
	allowedBlocks: [
		"launchpad-blocks/nav-submenu",
		"launchpad-blocks/nav-menu-item",
	],
	textdomain: "launchpad-blocks",
	keywords: ["menu", "links"],
	editorScript: "file:./index.tsx",
	style: "file:./style.scss",
	editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	attributes,
	supports,
	example,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
