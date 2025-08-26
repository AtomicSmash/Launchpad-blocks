import type { Supports } from "./supports";
import type {
	BlockAttributes,
	BlockInstanceAsObject,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const defaultTemplate: BlockInstanceAsObject[] = [
	{
		name: "launchpad-blocks/carousel-content-slide",
		innerBlocks: [
			{
				name: "launchpad-blocks/carousel-content-slide-content",
				innerBlocks: [
					{
						name: "core/heading",
						attributes: { placeholder: "Your template" },
						innerBlocks: [],
					},
					{
						name: "core/paragraph",
						attributes: {
							placeholder:
								'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.',
						},
						innerBlocks: [],
					},
				],
			},
		],
	},
];

export const attributes = {
	template: {
		type: "array",
		default: defaultTemplate,
	},
	tempInnerBlocksStorage: {
		type: "array",
		default: [] as BlockInstanceAsObject[],
	},
	shouldLockChildSlidesToTemplate: {
		type: "boolean",
		default: false,
	},
	hasDismissedVariationsSelector: {
		type: "boolean",
		default: false,
	},
	isInTemplateEditMode: {
		type: "boolean",
		default: false,
	},
	aspectRatio: {
		type: "string",
		default: "auto",
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
