import type { Attributes, InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { Supports } from "./supports";
import { registerBlockType, registerBlockVariation } from "@wordpress/blocks";
import { registerLaunchpadBlocksCollection } from "@launchpadBlocks/helpers.editor";
import { Icon } from "@launchpadBlocks/svgs";
import blockMetaData from "./block.json";
import { Edit } from "./edit";
import { save } from "./save";
import { variations } from "./variations";

export { type InterpretedProvidesContext } from "./context";

registerBlockType<Supports, Attributes, InterpretedUsedContext>(
	blockMetaData.name,
	{
		icon: <Icon iconName="tabs" />,
		edit: Edit,
		save: save({ hasInnerBlocks: true }),
	},
);
registerLaunchpadBlocksCollection();

/**
 * Register block variations
 *
 * We register block registrations using the JS function so we can support JSX for icons and functions for isActive.
 */
variations.forEach((variation) => {
	registerBlockVariation<InterpretedAttributes>(blockMetaData.name, variation);
});
