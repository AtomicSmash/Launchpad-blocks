import type { InterpretedAttributes } from "./attributes";
import { registerBlockType } from "@atomicsmash/blocks-helpers";
import { navigation } from "@wordpress/icons";
import { registerLaunchpadBlocksCollection } from "@launchpadBlocks/helpers.editor";
import blockMetaData from "./block.json";
import { Edit } from "./edit";
import { save } from "./save";

registerBlockType<InterpretedAttributes>(blockMetaData.name, {
	icon: navigation,
	edit: Edit,
	save: save({ hasInnerBlocks: false }),
});
registerLaunchpadBlocksCollection();
