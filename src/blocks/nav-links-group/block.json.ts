import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { example } from "./example";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/nav-links-group",
	title: "Nav links group",
	category: "theme",
	description:
		"A simple list of links, often found in the footer or sidebar of a page.",
	allowedBlocks: ["launchpad-blocks/nav-list"],
	textdomain: "launchpad",
	editorScript: "file:./index.tsx",
	viewScript: "file:./view.ts",
	style: "file:./style.scss",
	editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	keywords: ["menu", "links"],
	attributes,
	providesContext,
	usesContext,
	supports,
	example,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
