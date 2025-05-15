import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import type { BlockMetaData } from "@atomicsmash/blocks-helpers";
import { attributes } from "./attributes";
import { example } from "./example";
import { supports } from "./supports";

export const blockJson = {
	apiVersion: 3,
	name: "launchpad-blocks/global-banner-output",
	title: "Global banner output",
	category: "theme",
	description: "An output block for the selected global banners.",
	textdomain: "launchpad",
	editorScript: "file:./index.tsx",
	editorStyle: "file:./editor-style.scss",
	render: "file:./render.php",
	attributes,
	supports,
	example,
} satisfies BlockMetaData<Supports, Attributes>;
export default blockJson;
