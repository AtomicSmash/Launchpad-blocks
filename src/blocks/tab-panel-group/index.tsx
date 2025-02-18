import type { InterpretedAttributes } from "./attributes";
import { registerBlockType } from "@atomicsmash/blocks-helpers";
import { registerLaunchpadBlocksCollection } from "@launchpadBlocks/helpers.editor";
import { Icon } from "@launchpadBlocks/svgs";
import blockMetaData from "./block.json";
import { Edit } from "./edit";
import { save } from "./save";

registerBlockType<InterpretedAttributes>(blockMetaData.name, {
	icon: <Icon iconName="tab-panel-group" />,
	edit: Edit,
	save: save({ hasInnerBlocks: true }),
});
registerLaunchpadBlocksCollection();
