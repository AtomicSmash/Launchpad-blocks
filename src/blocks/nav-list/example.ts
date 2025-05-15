import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";
import { menuItemExample } from "../nav-menu-item/example";
import { subMenuItemExample } from "../nav-submenu/example";

export const navListExample = {
	name: "launchpad-blocks/nav-list",
	attributes: {
		isNestedInAnotherNavLink: false,
	},
	innerBlocks: [
		subMenuItemExample,
		subMenuItemExample,
		menuItemExample,
		menuItemExample,
	],
};

export const example = {
	viewportWidth: 400,
	attributes: navListExample.attributes,
	innerBlocks: navListExample.innerBlocks,
} satisfies BlockExample<InterpretedAttributes>;
