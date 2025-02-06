import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/nav-menu-item",
	title: "Nav menu item",
	category: "theme",
	description: "A simple link for the navigation menu.",
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
