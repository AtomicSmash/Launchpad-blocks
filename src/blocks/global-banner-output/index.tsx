import type { InterpretedAttributes } from "./attributes";
import { registerBlockType } from "@atomicsmash/blocks-helpers";
import { registerLaunchpadBlocksCollection } from "@plugin/blocks/helpers.editor";
// import { Icon } from "@blocks/svgs";
import blockMetaData from "./block.json";
import { Edit } from "./edit";
import { save } from "./save";

registerBlockType<InterpretedAttributes>(blockMetaData.name, {
	// icon: <Icon iconName="" />,
	edit: Edit,
	save: save({ hasInnerBlocks: false }),
});
registerLaunchpadBlocksCollection();
