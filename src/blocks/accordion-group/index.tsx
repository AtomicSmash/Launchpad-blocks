import type { InterpretedAttributes } from "./attributes";
import { registerBlockType } from "@atomicsmash/blocks-helpers";
import { registerLaunchpadBlocksCollection } from "@plugin/blocks/helpers.editor";
import { Icon } from "@plugin/blocks/svgs";
import blockMetaData from "./block.json";
import { Edit } from "./edit";
import { Save } from "./save";

registerBlockType<InterpretedAttributes>(blockMetaData.name, {
	icon: <Icon iconName="accordion-group" />,
	edit: Edit,
	save: Save,
});
registerLaunchpadBlocksCollection();
