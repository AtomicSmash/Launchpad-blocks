import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	InspectorControls,
	useInnerBlocksProps,
	RichText,
	Inserter,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import {
	CheckboxControl,
	Panel,
	PanelBody,
	ButtonGroup,
	Button,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { applyFilters } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";
import { plusCircle } from "@wordpress/icons";
import { Icon } from "@launchpadBlocks/svgs";
import { useUniqueBlockId } from "../helpers.editor";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return Element to render.
 */
export function Edit({
	clientId,
	attributes,
	setAttributes,
	isSelected,
	context,
}: BlockEditProps) {
	const { isInitiallyOpen, headerContent } = attributes;
	const HeaderElement = context["launchpad-blocks/accordion-heading-level"];
	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps(
		{ className: "accordion-panel-inner-wrapper" },
		{
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
									{plusCircle} Add block inside the accordion
								</Button>
							</ButtonGroup>
						);
					}}
					isAppender
				/>
			),
		},
	);
	useUniqueBlockId(
		attributes,
		"accordionId",
		clientId,
		setAttributes,
		"launchpad-blocks/accordion",
	);

	const AccordionIcon = applyFilters(
		"launchpadBlocks.accordionIcon",
		(props: { className: string; isEditorMode: boolean }) => (
			<Icon iconName="accordion-arrow" {...props} />
		),
	) as (props: { className: string; isEditorMode: boolean }) => JSX.Element;

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
							label="Is accordion open by default?"
							help={`Allows you to set the initial state for the accordion. If only one accordion is allowed to be open at a time in the group, this setting will only apply to the first accordion with this setting enabled.`}
							checked={isInitiallyOpen}
							onChange={(isInputChecked) => {
								setAttributes({ isInitiallyOpen: isInputChecked });
							}}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div {...blockProps}>
				<HeaderElement>
					<div className="accordion-header-button">
						<RichText
							tagName={"span"}
							className={"accordion-header-button-text"}
							onChange={(newHeaderContent) => {
								setAttributes({ headerContent: newHeaderContent });
							}}
							value={headerContent}
							allowedFormats={[
								"core/bold",
								"core/code",
								"core/italic",
								"core/keyboard",
								"core/strikethrough",
								"core/subscript",
								"core/superscript",
								"core/underline",
							]}
							placeholder={__(
								"Write your accordion header…",
								"launchpad-blocks",
							)}
						/>
						<div className="accordion-header-button-icon-wrapper">
							<AccordionIcon
								className="accordion-header-button-icon"
								isEditorMode
							/>
						</div>
					</div>
				</HeaderElement>
				<div className={"accordion-panel"}>
					<div {...innerBlockProps} />
				</div>
			</div>
		</>
	);
}
Edit.displayName = "AccordionEdit";
