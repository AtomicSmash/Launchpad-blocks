import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/tab-panel",
	parent: ["launchpad-blocks/tab-panel-group"],
	title: "Tab panel",
	category: "theme",
	description: "The panel of content associated with a tab in a Tabs block.",
	textdomain: "launchpad",
	editorScript: "file:./index.tsx",
	render: "file:./render.php",
	attributes,
	providesContext,
	usesContext,
	supports,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
