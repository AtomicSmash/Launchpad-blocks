import type { InterpretedAttributes } from "./attributes";
import type { BlockVariations } from "@atomicsmash/blocks-helpers";
import { title } from "@wordpress/icons";

/**
 * Variations declared here should be registered in index.tsx
 */
export const variations = [
	{
		name: "heading-and-paragraph",
		title: "Heading and paragraph",
		icon: title,
		innerBlocks: [
			[
				"launchpad-blocks/carousel-content-slide",
				{},
				[
					[
						"launchpad-blocks/carousel-content-slide-content",
						{},
						[
							["core/heading", { placeholder: "Your template" }],
							[
								"core/paragraph",
								{
									placeholder:
										'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.',
								},
							],
						],
					],
				],
			],
		],
	},
] as const satisfies BlockVariations<InterpretedAttributes>;
