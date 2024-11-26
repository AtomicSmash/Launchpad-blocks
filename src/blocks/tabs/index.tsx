import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import { registerBlockType } from "@atomicsmash/blocks-helpers";
import { registerLaunchpadBlocksCollection } from "@plugin/blocks/helpers.editor";
import { Icon } from "@plugin/blocks/svgs";
import blockMetaData from "./block.json";
import { Edit } from "./edit";
import { save } from "./save";

export { type InterpretedProvidesContext } from "./context";

registerBlockType<InterpretedAttributes, InterpretedUsedContext>(
	blockMetaData.name,
	{
		icon: <Icon iconName="tab-group" />,
		edit: Edit,
		save: save({ hasInnerBlocks: true }),
	},
);
registerLaunchpadBlocksCollection();
