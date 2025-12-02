import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { example } from "./example";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/navigation",
	title: "Navigation",
	category: "theme",
	description:
		"A collection of blocks that allow visitors to get around your site.",
	allowedBlocks: [
		"core/search",
		"core/social-links",
		"core/loginout",
		"core/buttons",
		"launchpad-blocks/nav-list",
	],
	textdomain: "launchpad-blocks",
	keywords: ["menu", "nav", "links"],
	editorScript: "file:./index.tsx",
	viewScript: "file:./view.tsx",
	style: "file:./style.scss",
	editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	attributes,
	supports,
	example,
	providesContext,
	usesContext,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
