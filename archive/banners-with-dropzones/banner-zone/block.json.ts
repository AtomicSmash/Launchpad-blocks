import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "cloudcall-blocks/banner-zone",
	version: "",
	title: "Banner zone",
	category: "theme",
	description: "",
	textdomain: "cloudcall",
	keywords: [],
	editorScript: "file:./index.tsx",
	editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	attributes,
	supports,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
