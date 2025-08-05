import type { InterpretedAttributes } from "./attributes";
import type { BlockVariations } from "@atomicsmash/blocks-helpers";
import { Icon } from "@launchpadBlocks/svgs";

/**
 * Variations declared here should be registered in index.tsx
 */
export const variations = [
	{
		name: "horizontal-tabs",
		title: "Horizontal tabs",
		attributes: {
			className: "wp-block-launchpad-blocks-tabs--horizontal",
		},
		innerBlocks: [
			["launchpad-blocks/tab-list", { selectedTab: "tab-1" }],
			[
				"launchpad-blocks/tab-panel-group",
				{},
				[
					[
						"launchpad-blocks/tab-panel",
						{ id: "tab-1", tab: { id: "tab-1_trigger", label: "" } },
						[["core/paragraph", { placeholder: "Enter tab content here..." }]],
					],
					[
						"launchpad-blocks/tab-panel",
						{ id: "tab-2", tab: { id: "tab-2_trigger", label: "" } },
						[["core/paragraph", { placeholder: "Enter tab content here..." }]],
					],
					[
						"launchpad-blocks/tab-panel",
						{ id: "tab-3", tab: { id: "tab-3_trigger", label: "" } },
						[["core/paragraph", { placeholder: "Enter tab content here..." }]],
					],
				],
			],
		],
		icon: <Icon isEditorMode={true} iconName="tabs" />,
	},
	{
		name: "vertical-tabs",
		title: "Vertical tabs",
		attributes: {
			className: "wp-block-launchpad-blocks-tabs--vertical",
		},
		innerBlocks: [
			[
				"launchpad-blocks/tab-list",
				{
					selectedTab: "tab-1",
					layout: {
						type: "flex",
						orientation: "vertical",
						verticalAlignment: "top",
						justifyContent: "left",
						flexWrap: "wrap",
					},
				},
			],
			[
				"launchpad-blocks/tab-panel-group",
				{},
				[
					[
						"launchpad-blocks/tab-panel",
						{ id: "tab-1", tab: { id: "tab-1_trigger", label: "" } },
						[["core/paragraph", { placeholder: "Enter tab content here..." }]],
					],
					[
						"launchpad-blocks/tab-panel",
						{ id: "tab-2", tab: { id: "tab-2_trigger", label: "" } },
						[["core/paragraph", { placeholder: "Enter tab content here..." }]],
					],
					[
						"launchpad-blocks/tab-panel",
						{ id: "tab-3", tab: { id: "tab-3_trigger", label: "" } },
						[["core/paragraph", { placeholder: "Enter tab content here..." }]],
					],
				],
			],
		],
		isDefault: false,
		icon: <Icon isEditorMode={true} iconName="vertical-tabs" />,
		example: {
			attributes: {
				tabsGroupId: "455684d7",
				title: "Tabs group heading",
				initiallySelectedTab: "tab_1",
				className: "wp-block-launchpad-blocks-tabs--vertical",
			},
			innerBlocks: [
				{
					name: "launchpad-blocks/tab-list",
					attributes: {
						selectedTab: "tab_1",
						layout: {
							type: "flex",
							orientation: "vertical",
							verticalAlignment: "top",
							justifyContent: "left",
							flexWrap: "wrap",
						},
					},
				},
				{
					name: "launchpad-blocks/tab-panel-group",
					innerBlocks: [
						{
							name: "launchpad-blocks/tab-panel",
							attributes: {
								id: "tab_1",
								tab: {
									id: "tab_1_trigger",
									label: "Tab 1",
								},
							},
							innerBlocks: [
								{
									name: "core/paragraph",
									attributes: {
										content:
											"Pippin pressed forward as they passed under the lamp beneath the gate-arch, and when he saw the pale face of Faramir he caught his breath. It was the face of one who has been assailed by a great fear or anguish, but has mastered it and now is quiet. Proud and grave he stood for a moment as he spoke to the guard, and Pippin gazing at him saw how closely he resembled his brother Boromir – whom Pippin had liked from the first, admiring the great man's lordly but kindly manner. Yet suddenly for Faramir his heart was strangely moved with a feeling that he had not known before. Here was one with an air of high nobility such as Aragorn at times revealed, less high perhaps, yet also less incalculable and remote: one of the Kings of Men born into a later time, but touched with the wisdom and sadness of the Elder Race. He knew now why Beregond spoke his name with love. He was a captain that men would follow, that he would follow, even under the shadow of the black wings.",
									},
								},
							],
						},
						{
							name: "launchpad-blocks/tab-panel",
							attributes: {
								id: "tab_2",
								tab: {
									id: "tab_2_trigger",
									label: "Tab 2",
								},
							},
							innerBlocks: [],
						},
						{
							name: "launchpad-blocks/tab-panel",
							attributes: {
								id: "tab_3",
								tab: {
									id: "tab_3_trigger",
									label: "Tab 3",
								},
							},
							innerBlocks: [],
						},
					],
				},
			],
		},
	},
] as const satisfies BlockVariations<InterpretedAttributes>;
