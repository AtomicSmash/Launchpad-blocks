import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import { registerBlockType } from "@atomicsmash/blocks-helpers";
import { registerLaunchpadBlocksCollection } from "@plugin/blocks/helpers.editor";
// import { Icon } from "@blocks/svgs";
import blockMetaData from "./block.json";
import { Edit } from "./edit";
import { save } from "./save";

registerBlockType<InterpretedAttributes, InterpretedUsedContext>(
	blockMetaData.name,
	{
		// icon: <Icon iconName="" />,
		edit: Edit,
		save: save({ hasInnerBlocks: true }),
		// @ts-expect-error -- Undocumented property, need to add type to helpers.
		merge: (
			attributes: InterpretedAttributes,
			attributesToMerge: InterpretedAttributes,
		) => {
			return {
				textContent:
					(attributes.textContent || "") +
					(attributesToMerge.textContent || ""),
			};
		},
	},
);
registerLaunchpadBlocksCollection();
