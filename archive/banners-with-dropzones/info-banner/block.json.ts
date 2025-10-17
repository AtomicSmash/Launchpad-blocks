import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "cloudcall-blocks/info-banner",
	version: "",
	title: "Global info banner",
	category: "theme",
	description:
		"Add a banner that will be moved to the nearest banner zone. If no relevant banner zones are available, it is not shown.",
	textdomain: "cloudcall",
	keywords: [],
	editorScript: "file:./index.tsx",
	viewScript: "file:./view.ts",
	style: "file:./style.scss",
	render: "file:./render.php",
	attributes,
	supports,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
