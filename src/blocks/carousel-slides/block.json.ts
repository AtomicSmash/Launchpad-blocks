import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/carousel-slides",
	title: "Carousel slides",
	category: "theme",
	description: "",
	textdomain: "launchpad-blocks",
	keywords: [],
	parent: ["launchpad-blocks/carousel", "launchpad-blocks/gallery-carousel"],
	allowedBlocks: ["core/image"],
	editorScript: "file:./index.tsx",
	viewScript: "file:./view.ts",
	style: "file:./style.scss",
	editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	attributes,
	providesContext,
	usesContext,
	supports,
	// Example not possible while this block relies on context
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
