import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/accordion",
	parent: ["launchpad-blocks/accordion-group"],
	title: "Accordion",
	category: "theme",
	description: "A block which has a header and collapsible content.",
	textdomain: "launchpad-blocks",
	keywords: ["accordion"],
	editorScript: "file:./index.tsx",
	style: "file:./style.scss",
	editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	attributes,
	supports,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
