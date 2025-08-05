import type { InterpretedAttributes } from "./attributes";
import type { BlockVariations } from "@atomicsmash/blocks-helpers";
import { Icon } from "@launchpadBlocks/svgs";

/**
 * Variations declared here should be registered in index.tsx
 */
export const variations = [
	{
		name: "media-and-text-just-text",
		title: "Just text",
		icon: <Icon isEditorMode={true} iconName="media-and-text-just-text" />,
		innerBlocks: [["core/paragraph", { placeholder: "Add text..." }]],
		isDefault: true,
		scope: ["block"],
		example: {
			viewportWidth: 1200,
			attributes: {
				imageId: 0,
				mediaPosition: "left",
				shouldBreakOutMedia: false,
				hasBackground: true,
				shouldChildBlocksBeLocked: true,
			},
			innerBlocks: [
				{
					name: "core/paragraph",
					attributes: {
						placeholder: "Example text",
					},
				},
			],
		},
	},
	{
		name: "media-and-text-heading-and-text",
		title: "Heading and text",
		icon: (
			<Icon isEditorMode={true} iconName="media-and-text-heading-and-text" />
		),
		innerBlocks: [
			["core/heading", { placeholder: "Add heading..." }],
			["core/paragraph", { placeholder: "Add text..." }],
		],
		isDefault: true,
		scope: ["block"],
		example: {
			viewportWidth: 1200,
			attributes: {
				imageId: 0,
				mediaPosition: "left",
				shouldBreakOutMedia: false,
				hasBackground: true,
				shouldChildBlocksBeLocked: true,
			},
			innerBlocks: [
				{
					name: "core/heading",
					attributes: {
						placeholder: "Example heading",
					},
				},
				{
					name: "core/paragraph",
					attributes: {
						placeholder: "Example text",
					},
				},
			],
		},
	},
	{
		name: "media-and-text-intro-heading-and-text",
		title: "Intro, heading and text",
		icon: (
			<Icon
				isEditorMode={true}
				iconName="media-and-text-intro-heading-and-text"
			/>
		),
		innerBlocks: [
			[
				"core/paragraph",
				{
					placeholder: "Intro",
					className: "wp-block-launchpad-blocks-media-and-text__intro",
				},
			],
			["core/heading", { placeholder: "Add heading..." }],
			["core/paragraph", { placeholder: "Add text..." }],
		],
		isDefault: true,
		scope: ["block"],
		example: {
			viewportWidth: 1200,
			attributes: {
				imageId: 0,
				mediaPosition: "left",
				shouldBreakOutMedia: false,
				hasBackground: true,
				shouldChildBlocksBeLocked: true,
			},
			innerBlocks: [
				{
					name: "core/heading",
					attributes: {
						placeholder: "Example heading",
					},
				},
				{
					name: "core/paragraph",
					attributes: {
						placeholder: "Example text",
					},
				},
			],
		},
	},
	{
		name: "media-and-text-heading-text-buttons",
		title: "Heading, text & buttons",
		icon: (
			<Icon
				isEditorMode={true}
				iconName="media-and-text-heading-text-buttons"
			/>
		),
		innerBlocks: [
			["core/heading", { placeholder: "Add heading..." }],
			["core/paragraph", { placeholder: "Add text..." }],
			["core/button", { placeholder: "Add button..." }],
		],
		isDefault: true,
		scope: ["block"],
		example: {
			viewportWidth: 1200,
			attributes: {
				imageId: 0,
				mediaPosition: "left",
				shouldBreakOutMedia: false,
				hasBackground: true,
				shouldChildBlocksBeLocked: true,
			},
			innerBlocks: [
				{
					name: "core/heading",
					attributes: {
						placeholder: "Example heading",
					},
				},
				{
					name: "core/paragraph",
					attributes: {
						placeholder: "Example text",
					},
				},
				{
					name: "core/button",
					attributes: {
						placeholder: "Example button",
					},
				},
			],
		},
	},
	{
		name: "media-and-text-intro-heading-text-buttons",
		title: "Intro, heading, text & buttons",
		icon: (
			<Icon
				isEditorMode={true}
				iconName="media-and-text-intro-heading-text-buttons"
			/>
		),
		innerBlocks: [
			[
				"core/paragraph",
				{
					placeholder: "Intro",
					className: "wp-block-launchpad-blocks-media-and-text__intro",
				},
			],
			["core/heading", { placeholder: "Add heading..." }],
			["core/paragraph", { placeholder: "Add text..." }],
			["core/button", { placeholder: "Add button..." }],
		],
		isDefault: true,
		scope: ["block"],
		example: {
			viewportWidth: 1200,
			attributes: {
				imageId: 0,
				mediaPosition: "left",
				shouldBreakOutMedia: false,
				hasBackground: true,
				shouldChildBlocksBeLocked: true,
			},
			innerBlocks: [
				{
					name: "core/heading",
					attributes: {
						placeholder: "Example heading",
					},
				},
				{
					name: "core/paragraph",
					attributes: {
						placeholder: "Example text",
					},
				},
				{
					name: "core/button",
					attributes: {
						placeholder: "Example button",
					},
				},
			],
		},
	},
] as const satisfies BlockVariations<InterpretedAttributes>;
