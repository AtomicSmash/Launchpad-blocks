import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	Inserter,
	store as blockEditorStore,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import {
	CheckboxControl,
	Panel,
	PanelBody,
	ButtonGroup,
	Button,
	ToolbarGroup,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { blockDefault } from "@wordpress/icons";
import { useUniqueBlockId, HeadingLevelSelect } from "../helpers.editor";
import { attributes as definedAttributeOptions } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

export function Edit({
	clientId,
	attributes,
	setAttributes,
	isSelected,
}: BlockEditProps) {
	const { isMultiple, headerElement } = attributes;
	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps(blockProps, {
		template: [
			[
				"launchpad-blocks/accordion",
				{},
				[
					[
						"core/paragraph",
						{
							placeholder:
								"Add accordion content here. Type / to choose a block.",
						},
					],
				],
			],
		],
		renderAppender: () => (
			<Inserter
				rootClientId={clientId}
				renderToggle={({ onToggle }: { onToggle: () => void }) => {
					if (!isSelected && !isInnerBlockSelected) {
						return null;
					}
					return (
						<ButtonGroup>
							<Button
								className="accordion-inserter-button is-primary"
								onClick={onToggle}
							>
								{blockDefault} Add new accordion to this group
							</Button>
						</ButtonGroup>
					);
				}}
				isAppender
			/>
		),
	});

	useUniqueBlockId(
		attributes,
		"accordionGroupId",
		clientId,
		setAttributes,
		"launchpad-blocks/accordion-group",
	);

	const isInnerBlockSelected = useSelect(
		(select) =>
			(
				select(blockEditorStore) as {
					hasSelectedInnerBlock: (clientId: string, deep: boolean) => boolean;
				}
			).hasSelectedInnerBlock(clientId, true),
		[clientId],
	);

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title="Block settings">
						<CheckboxControl
							__nextHasNoMarginBottom
							label="Multiple open accordions"
							help="Allow multiple accordions in the same group to be open at the same time."
							checked={isMultiple}
							onChange={(isInputChecked) => {
								setAttributes({ isMultiple: isInputChecked });
							}}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<BlockControls>
				<ToolbarGroup>
					<HeadingLevelSelect
						levelOptions={definedAttributeOptions.headerElement.enum}
						selectedLevel={headerElement}
						setSelectedHeadingLevel={(newHeadingLevel) => {
							setAttributes({ headerElement: newHeadingLevel });
						}}
					/>
				</ToolbarGroup>
			</BlockControls>
			<div {...innerBlockProps} />
		</>
	);
}
Edit.displayName = "AccordionGroupEdit";
