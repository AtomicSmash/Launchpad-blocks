import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";

export const subMenuItemExample = {
	name: "launchpad-blocks/nav-submenu",
	attributes: {
		linkText: "Sub menu",
		isPreview: true,
	},
	innerBlocks: [
		{
			name: "launchpad-blocks/nav-list",
			attributes: {
				isNestedInAnotherNavLink: true,
			},
			innerBlocks: [],
		},
	],
};

export const example = {
	viewportWidth: 200,
	attributes: subMenuItemExample.attributes,
	innerBlocks: subMenuItemExample.innerBlocks,
} satisfies BlockExample<InterpretedAttributes>;
