import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { providesContext, usesContext } from "./context";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/tab-list",
	ancestor: ["launchpad-blocks/tabs"],
	title: "Tab list",
	category: "theme",
	description: "The tab list associated with a Tabs block.",
	textdomain: "launchpad",
	keywords: [],
	editorScript: "file:./index.tsx",
	render: "file:./render.php",
	attributes,
	providesContext,
	usesContext,
	supports,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;