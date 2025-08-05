import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/gallery-carousel-lightbox",
	title: "Lightbox",
	category: "theme",
	description: "",
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
	parent: ["launchpad-blocks/gallery-carousel"],
	// Example not possible while this block relies on context
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
