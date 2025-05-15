import type { Attributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { Supports } from "./supports";
import { registerBlockType } from "@wordpress/blocks";
import { registerLaunchpadBlocksCollection } from "@launchpadBlocks/helpers.editor";
import { Icon } from "@launchpadBlocks/svgs";
import blockMetaData from "./block.json";
import { deprecated } from "./deprecation";
import { Edit } from "./edit";
import { save } from "./save";

export { type InterpretedProvidesContext } from "./context";

registerBlockType<Supports, Attributes, InterpretedUsedContext>(
	blockMetaData.name,
	{
		icon: <Icon iconName="accordion-group" />,
		edit: Edit,
		save: save({ hasInnerBlocks: true }),
		deprecated,
	},
);
registerLaunchpadBlocksCollection();
