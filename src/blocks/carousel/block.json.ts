import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/carousel",
	title: "Carousel",
	category: "theme",
	description: "",
	textdomain: "launchpad-blocks",
	allowedBlocks: [
		"launchpad-blocks/carousel-slides",
		"launchpad-blocks/carousel-content-slides",
		"launchpad-blocks/carousel-thumbnails",
		"launchpad-blocks/carousel-navigation-arrows",
		"launchpad-blocks/carousel-dots",
		"launchpad-blocks/carousel-slide-count",
	],
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
	// Examples added in variations.ts
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
