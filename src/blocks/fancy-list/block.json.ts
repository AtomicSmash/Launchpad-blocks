import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { example } from "./example";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/fancy-list",
	title: "Fancy list",
	category: "theme",
	description: "A block to display a semantic list of content.",
	allowedBlocks: ["launchpad-blocks/fancy-list-item"],
	textdomain: "launchpad-blocks",
	keywords: [],
	editorScript: "file:./index.tsx",
	viewScript: "file:./view.ts",
	style: "file:./style.scss",
	editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	attributes,
	providesContext,
	usesContext,
	supports,
	example,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
