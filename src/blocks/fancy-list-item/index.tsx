import type { Attributes, InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { Supports } from "./supports";
import { registerBlockType } from "@wordpress/blocks";
import { registerLaunchpadBlocksCollection } from "@launchpadBlocks/helpers.editor";
import { Icon } from "@launchpadBlocks/svgs";
import blockMetaData from "./block.json";
import { Edit } from "./edit";
import { save } from "./save";

registerBlockType<Supports, Attributes, InterpretedUsedContext>(
	blockMetaData.name,
	{
		icon: <Icon iconName="list-item" />,
		edit: Edit,
		save: save({ hasInnerBlocks: true }),
		merge: (
			attributes: InterpretedAttributes,
			attributesToMerge: InterpretedAttributes,
		) => {
			return {
				...attributes,
				textContent:
					(attributes.textContent ?? "") +
					(attributesToMerge.textContent ?? ""),
			};
		},
	},
);
registerLaunchpadBlocksCollection();
