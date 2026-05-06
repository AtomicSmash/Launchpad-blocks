import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { example } from "./example";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/heading-with-icon",
	title: "Heading with icon",
	category: "theme",
	description: "Select an icon to display inline with a heading",
	textdomain: "launchpad-blocks",
	keywords: [],
	editorScript: "file:./index.tsx",
	// viewScript: "file:./view.ts",
	style: "file:./style.scss",
	// editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	attributes,
	providesContext,
	usesContext,
	example,
	supports,
	styles: [
		{
			name: "default",
			label: "Default",
			isDefault: true,
		},
		{
			name: "t-1",
			label: "T1",
		},
		{
			name: "t-2",
			label: "T2",
		},
		{
			name: "t-3",
			label: "T3",
		},
		{
			name: "t-4",
			label: "T4",
		},
		{
			name: "t-5",
			label: "T5",
		},
		{
			name: "t-6",
			label: "T6",
		},
	],
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
