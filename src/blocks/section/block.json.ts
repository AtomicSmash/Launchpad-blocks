import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { example } from "./example";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/section",
	title: "Section",
	category: "theme",
	description: "This is a layout block used to set a section of a page.",
	textdomain: "launchpad-blocks",
	keywords: [],
	editorScript: "file:./index.tsx",
	// viewScript: "file:./view.ts",
	style: "file:./style.scss",
	editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	styles: [
		{
			name: "primary",
			label: "Primary",
		},
		{
			name: "secondary",
			label: "Secondary",
		},
		{
			name: "accent",
			label: "Accent",
		},
	],
	attributes,
	providesContext,
	usesContext,
	example,
	supports,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
