import type { InterpretedAttributes } from "./attributes";
import { registerBlockType } from "@atomicsmash/blocks-helpers";
import { registerLaunchpadBlocksCollection } from "@plugin/blocks/helpers.editor";
import { Icon } from "@plugin/blocks/svgs";
import blockMetaData from "./block.json";
import { deprecated } from "./deprecation";
import { Edit } from "./edit";
import { save } from "./save";

registerBlockType<InterpretedAttributes>(blockMetaData.name, {
	icon: <Icon iconName="accordion-single" />,
	edit: Edit,
	save: save({ hasInnerBlocks: true }),
	deprecated,
});
registerLaunchpadBlocksCollection();
