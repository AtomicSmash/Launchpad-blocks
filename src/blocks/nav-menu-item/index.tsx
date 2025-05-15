import type { Attributes } from "./attributes";
import type { Supports } from "./supports";
import { registerBlockType } from "@wordpress/blocks";
import { registerLaunchpadBlocksCollection } from "@launchpadBlocks/helpers.editor";
import { Icon } from "@launchpadBlocks/svgs";
import blockMetaData from "./block.json";
import { Edit } from "./edit";
import { save } from "./save";

registerBlockType<Supports, Attributes>(blockMetaData.name, {
	icon: <Icon iconName="nav-menu-item" />,
	edit: Edit,
	save: save({ hasInnerBlocks: false }),
});
registerLaunchpadBlocksCollection();
