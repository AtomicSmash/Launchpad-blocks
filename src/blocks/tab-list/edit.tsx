import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import type { InterpretedAttributes as TabPanelInterpretedAttributes } from "@launchpadBlocks/tab-panel/attributes";
import type { FillProps } from "@launchpadBlocks/tabs/edit";
import {
	useBlockProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { Slot } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { useEffect } from "react";
import {
	getInnerBlocksByName,
	useLayoutStyles,
} from "@launchpadBlocks/helpers.editor";
import { supports } from "./supports";

type BlockInstance = {
	clientId: string;
	name: string;
	attributes: Record<string, unknown>;
	innerBlocks: BlockInstance[];
	isValid: boolean;
	originalContent: string;
	validationIssues: unknown[];
};

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({
	clientId,
	context,
	attributes,
	attributes: { selectedTab },
	setAttributes,
}: BlockEditProps) {
	const { layout, style } = attributes;
	const { className: layoutClassName, style: layoutStyle } = useLayoutStyles(
		layout,
		supports,
		style,
	);

	const blockProps = useBlockProps({
		className: layoutClassName,
		style: layoutStyle,
	});

	const { tabGroupClientId, tabPanelGroup } = useSelect(
		(select) => {
			const { getBlockParentsByBlockName, getBlock } = select(
				blockEditorStore,
			) as {
				getBlockParentsByBlockName: (
					clientId: string,
					blockName: string,
				) => string[];
				getBlock: (clientId: string) => BlockInstance;
			};
			const parentBlockClientId = getBlockParentsByBlockName(
				clientId,
				"launchpad-blocks/tabs",
			)[0]!;
			const parentBlockInnerBlocks = getBlock(parentBlockClientId).innerBlocks;
			const tabPanelGroupBlocks = getInnerBlocksByName(
				parentBlockInnerBlocks,
				"launchpad-blocks/tab-panel-group",
			);
			const tabPanelGroup = tabPanelGroupBlocks
				? (tabPanelGroupBlocks[0] ?? null)
				: null;

			return {
				tabGroupClientId: parentBlockClientId,
				tabPanelGroup,
			};
		},
		[clientId],
	);

	const { updateBlockAttributes } = useDispatch(
		blockEditorStore,
	) as unknown as {
		updateBlockAttributes: (
			clientIds: string | string[],
			attributes: Record<string, unknown>,
			uniqueByBlock?: boolean,
		) => {
			type: "UPDATE_BLOCK_ATTRIBUTES";
			clientIds: string[];
			attributes: Record<string, unknown>;
			uniqueByBlock: boolean;
		};
	};

	useEffect(() => {
		if (selectedTab === "") {
			const newSelectedTab =
				context["launchpad/initiallySelectedTab"] === ""
					? context["launchpad/initiallySelectedTab"]
					: (tabPanelGroup?.innerBlocks[0]?.attributes.id as
							| TabPanelInterpretedAttributes["id"]
							| undefined);
			if (newSelectedTab && newSelectedTab !== "") {
				setAttributes({
					selectedTab: newSelectedTab,
				});
			}
		}
	}, [selectedTab, context, setAttributes, tabPanelGroup?.innerBlocks]);

	return (
		<>
			<div {...blockProps}>
				<Slot
					name={`${context["launchpad/tabsGroupId"]}TabList`}
					fillProps={
						{
							selectedTab,
							initiallySelectedTab: context["launchpad/initiallySelectedTab"],
							setSelectedTab: (newValue: string) => {
								setAttributes({
									selectedTab: newValue,
								});
							},
							setInitiallySelectedTab: (newValue: string) => {
								updateBlockAttributes([tabGroupClientId], {
									initiallySelectedTab: newValue,
								});
							},
						} satisfies FillProps
					}
				/>
			</div>
		</>
	);
}
Edit.displayName = "TabListEdit";
