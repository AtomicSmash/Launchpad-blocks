import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/nav-list",
	title: "Nav list",
	category: "theme",
	description: "The collection of the actual menu items for your navigation.",
	allowedBlocks: [
		"launchpad-blocks/nav-submenu",
		"launchpad-blocks/nav-menu-item",
	],
	parent: ["launchpad-blocks/navigation", "launchpad-blocks/nav-submenu"],
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
