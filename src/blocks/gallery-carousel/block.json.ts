import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { example } from "./example";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/gallery-carousel",
	allowedBlocks: [
		"launchpad-blocks/gallery-carousel-lightbox",
		"launchpad-blocks/carousel-slides",
	],
	title: "Gallery carousel",
	category: "theme",
	description: "",
	textdomain: "launchpad-blocks",
	keywords: ["lightbox"],
	editorScript: "file:./index.tsx",
	viewScript: "file:./view.ts",
	style: "file:./style.scss",
	editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	attributes,
	providesContext,
	usesContext,
	example,
	supports,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
