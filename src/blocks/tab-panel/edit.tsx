import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { useDispatch, useSelect } from "@wordpress/data";
import { useEffect } from "react";
import { slugifyHTML } from "@plugin/blocks/helpers";
import { getInnerBlocksByName } from "@plugin/blocks/helpers.editor";
import { Tab } from "@plugin/blocks/tabs/edit";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

type BlockInstance = {
	clientId: string;
	name: string;
	attributes: Record<string, unknown>;
	innerBlocks: BlockInstance[];
	isValid: boolean;
	originalContent: string;
	validationIssues: unknown[];
};

export function Edit({
	clientId,
	isSelected,
	attributes: { id, tab, metadata },
	context,
	setAttributes,
}: BlockEditProps) {
	const { tabList, isAssociatedTabSelected, tabPanelOrderIndex } =
		useTabPanelInfo(clientId, id);

	const blockProps = useBlockProps({
		className: `tab-panel${isAssociatedTabSelected ? " show-tab-in-editor" : ""}`,
		"data-panel-id": id,
		"data-tab-id": `${id}_trigger`,
	});
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		templateLock: false,
	});

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

	const isInnerBlockSelected = useSelect(
		(select) =>
			(
				select(blockEditorStore) as {
					hasSelectedInnerBlock: (clientId: string, deep: boolean) => boolean;
				}
			).hasSelectedInnerBlock(clientId, true),
		[clientId],
	);

	useEffect(() => {
		if (tabList && (isSelected || isInnerBlockSelected)) {
			updateBlockAttributes(tabList.clientId, { selectedTab: id });
		}
	}, [isSelected, isInnerBlockSelected, tabList, updateBlockAttributes, id]);

	return (
		<>
			<Tab
				id={id}
				label={tab.label}
				tabsGroupId={context["launchpad/tabsGroupId"]}
				tabOrder={tabPanelOrderIndex}
				onChange={(newLabel) => {
					setAttributes({
						id: slugifyHTML(newLabel),
						tab: {
							id: `${slugifyHTML(newLabel)}_trigger`,
							label: newLabel,
						},
						metadata: {
							...metadata,
							name: `Tab panel: ${newLabel}`,
						},
					});
				}}
			/>
			<section {...innerBlocksProps}>{children}</section>
		</>
	);
}
Edit.displayName = "TabPanelEdit";

function useTabPanelInfo(panelClientId: string, tabId: string) {
	const { tabList, currentTabOrder } = useSelect(
		(select) => {
			const { getBlockParentsByBlockName, getBlock, getBlockOrder } = select(
				blockEditorStore,
			) as {
				getBlockParentsByBlockName: (
					clientId: string,
					blockName: string,
				) => string[];
				getBlock: (clientId: string) => BlockInstance;
				getMultiSelectedBlocks: () => BlockInstance[] | null;
				getSelectedBlock: () => BlockInstance | null;
				getBlockOrder: (rootClientId?: string) => string[];
			};
			const parentBlockClientId = getBlockParentsByBlockName(
				panelClientId,
				"launchpad-blocks/tabs",
			)[0]!;

			const parentBlockInnerBlocks = getBlock(parentBlockClientId).innerBlocks;
			const tabListBlocks = getInnerBlocksByName(
				parentBlockInnerBlocks,
				"launchpad-blocks/tab-list",
			);
			const tabPanelGroupBlocks = getInnerBlocksByName(
				parentBlockInnerBlocks,
				"launchpad-blocks/tab-panel-group",
			);
			const tabList = tabListBlocks ? (tabListBlocks[0] ?? null) : null;
			const tabPanelGroup = tabPanelGroupBlocks
				? (tabPanelGroupBlocks[0] ?? null)
				: null;
			const tabOrder = tabPanelGroup
				? getBlockOrder(tabPanelGroup.clientId)
				: [];
			const currentTabOrder = tabOrder.findIndex(
				(clientId) => clientId === panelClientId,
			);

			return {
				tabList,
				currentTabOrder,
			};
		},
		[panelClientId],
	);
	return {
		tabList,
		isAssociatedTabSelected: tabList?.attributes.selectedTab === tabId,
		tabPanelOrderIndex: currentTabOrder + 1, // Avoid -1 value and mixing "index is zero" and "no order value"
	};
}
