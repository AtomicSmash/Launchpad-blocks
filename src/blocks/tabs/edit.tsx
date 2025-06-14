import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import type { InterpretedAttributes as TabPanelInterpretedAttributes } from "@launchpadBlocks/tab-panel/attributes";
import {
	store as blockEditorStore,
	InspectorControls,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	RadioControl,
	SelectControl,
	ToggleControl,
	Fill,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { useState } from "react";
import { slugifyHTML } from "@launchpadBlocks/helpers";
import {
	getInnerBlocksByName,
	useUniqueBlockId,
} from "@launchpadBlocks/helpers.editor";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export type FillProps = {
	selectedTab: string | undefined;
	setSelectedTab: (newValue: string) => void;
	initiallySelectedTab: string | undefined;
	setInitiallySelectedTab: (newValue: string) => void;
};

export function Tab({
	tabsGroupId,
	id,
	label,
	onChange,
	tabOrder,
}: {
	tabsGroupId: string;
	id: string;
	label: string;
	onChange: (newLabel: string) => void;
	tabOrder: number;
}) {
	return (
		<Fill name={`${tabsGroupId}TabList`}>
			{(fillProps) => {
				const {
					selectedTab,
					setSelectedTab,
					initiallySelectedTab,
					setInitiallySelectedTab,
				} = fillProps as FillProps;
				return (
					<RichText
						tagName="div"
						className={`tab${selectedTab === id ? " show-tab-in-editor" : ""}`}
						style={{
							order: tabOrder,
						}}
						id={`${id}_trigger`}
						value={label}
						onChange={(newLabel) => {
							onChange(newLabel);
							setSelectedTab(slugifyHTML(newLabel));
							if (initiallySelectedTab === id) {
								setInitiallySelectedTab(slugifyHTML(newLabel));
							}
						}}
						placeholder="Label"
						onClick={() => {
							setSelectedTab(id);
						}}
					/>
				);
			}}
		</Fill>
	);
}

type BlockInstance = {
	clientId: string;
	name: string;
	attributes: Record<string, unknown>;
	innerBlocks: BlockInstance[];
	isValid: boolean;
	originalContent: string;
	validationIssues: unknown[];
};

export function Edit({ clientId, attributes, setAttributes }: BlockEditProps) {
	const {
		tabsGroupId,
		title,
		titleLevel,
		shouldShowTabSectionTitle,
		initiallySelectedTab,
	} = attributes;
	const [selectedTitleLevel, setSelectedTitleLevel] = useState(titleLevel);
	const childTabPanelBlocks = useSelect(
		(select) => {
			return getInnerBlocksByName(
				(
					select(blockEditorStore) as {
						getBlock: (clientId: string) => BlockInstance;
					}
				).getBlock(clientId).innerBlocks,
				"launchpad-blocks/tab-panel",
			);
		},
		[clientId],
	);

	const TabGroupIdEditControl = useUniqueBlockId(
		attributes,
		"tabsGroupId",
		clientId,
		setAttributes,
		"launchpad-blocks/tabs",
	);

	const blockProps = useBlockProps({
		"data-launchpad-tabs-group": "true",
	});
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps);

	const TitleTag = `h${titleLevel}` as const;

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<TabGroupIdEditControl
							label="Unique tab identifier"
							help={(isValid) => (
								<>
									<span>
										This will appear in the url when you interact with the tabs.
										Must be unique on a page.
									</span>
									{!isValid ? (
										<>
											<br />
											<span style={{ fontWeight: "bold", color: "red" }}>
												This value is used by another tab group on the page.
												Using this value: {tabsGroupId}{" "}
											</span>
										</>
									) : null}
								</>
							)}
							onValidChange={(newIdAttribute) => {
								setAttributes({
									tabsGroupId: newIdAttribute,
								});
							}}
							idAttribute={tabsGroupId}
						/>
						<SelectControl
							label="Initially selected tab"
							help="If there's no url parameter, which tab should be open when a page is loaded? Defaults to the first tab."
							value={initiallySelectedTab}
							onChange={(newInitiallySelectedTab: string) => {
								setAttributes({
									initiallySelectedTab: newInitiallySelectedTab,
								});
							}}
							options={[
								{ value: "", label: "Default" },
								...childTabPanelBlocks.map((innerBlock) => {
									const innerBlockAttributes =
										innerBlock.attributes as TabPanelInterpretedAttributes;
									return {
										value: innerBlockAttributes.id,
										label: innerBlockAttributes.tab.label,
									};
								}),
							]}
						/>
						<ToggleControl
							checked={shouldShowTabSectionTitle}
							label={"Show tabs section title visually"}
							help={
								"If not shown visually, the title is used as helper text for screen reader users, so a title still needs to be added."
							}
							onChange={(newChecked) => {
								setAttributes({ shouldShowTabSectionTitle: newChecked });
							}}
						/>
						{shouldShowTabSectionTitle ? (
							<RadioControl
								label="Title heading level"
								selected={selectedTitleLevel}
								onChange={(newTitleLevel: string) => {
									if (!["1", "2", "3", "4", "5", "6"].includes(newTitleLevel)) {
										return;
									}
									setSelectedTitleLevel(
										newTitleLevel as "1" | "2" | "3" | "4" | "5" | "6",
									);
									setAttributes({
										titleLevel: newTitleLevel as
											| "1"
											| "2"
											| "3"
											| "4"
											| "5"
											| "6",
									});
								}}
								options={[
									{
										value: "1",
										label: "Use a H1",
									},
									{
										value: "2",
										label: "Use a H2",
									},
									{
										value: "3",
										label: "Use a H3",
									},
									{
										value: "4",
										label: "Use a H4",
									},
									{
										value: "5",
										label: "Use a H5",
									},
									{
										value: "6",
										label: "Use a H6",
									},
								]}
							/>
						) : null}
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...innerBlocksProps}>
				<RichText
					tagName={shouldShowTabSectionTitle ? TitleTag : "p"}
					className={`tabs_title${shouldShowTabSectionTitle ? "" : " is-style-screen-reader-only"}`}
					id={`${tabsGroupId}_title`}
					value={title}
					onChange={(newTitle) => {
						setAttributes({
							title: newTitle,
						});
					}}
					placeholder={
						shouldShowTabSectionTitle
							? "Add a title for this tabs group..."
							: "Add a label for screen readers for this tabs group..."
					}
				/>
				{children}
			</div>
		</>
	);
}
Edit.displayName = "TabsEdit";
