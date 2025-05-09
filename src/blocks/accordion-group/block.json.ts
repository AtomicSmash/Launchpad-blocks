import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { example } from "./example";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/accordion-group",
	title: "Accordion group",
	category: "theme",
	description: "A group of accordions.",
	textdomain: "launchpad-blocks",
	keywords: ["accordion"],
	editorScript: "file:./index.tsx",
	viewScript: "file:./view.ts",
	editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	attributes,
	example,
	supports,
	providesContext,
	usesContext,
	allowedBlocks: ["launchpad-blocks/accordion"],
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
