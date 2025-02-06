import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { example } from "./example";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/carousel-navigation-arrows",
	title: "Carousel navigation arrows",
	category: "theme",
	description: "",
	textdomain: "launchpad-blocks",
	allowedBlocks: ["launchpad-blocks/carousel-thumbnails"],
	parent: ["launchpad-blocks/carousel"],
	keywords: [],
	editorScript: "file:./index.tsx",
	viewScript: "file:./view.ts",
	style: "file:./style.scss",
	editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	styles: [
		{
			name: "normal",
			label: "Normal",
			isDefault: true,
		},
		{
			name: "overlay",
			label: "Overlay",
		},
	],
	attributes,
	providesContext,
	usesContext,
	example,
	supports,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
