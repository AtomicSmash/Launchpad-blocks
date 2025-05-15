import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { example } from "./example";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/manual-post-select",
	title: "Manual post select",
	category: "theme",
	description: "A block to manually select and display a group of posts.",
	textdomain: "launchpad",
	keywords: [],
	editorScript: "file:./index.tsx",
	editorStyle: "file:./editor-style.scss",
	style: "file:./style.scss",
	render: "file:./render.php",
	attributes,
	providesContext,
	usesContext,
	supports,
	example,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
