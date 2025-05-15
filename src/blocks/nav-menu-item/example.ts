import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";

export const menuItemExample = {
	name: "launchpad-blocks/nav-menu-item",
	attributes: {
		linkText: "Menu link",
		linkHref: "#",
	},
};

export const example = {
	viewportWidth: 200,
	attributes: menuItemExample.attributes,
} satisfies BlockExample<InterpretedAttributes>;
