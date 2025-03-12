import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	InnerBlocks,
	RichText,
} from "@wordpress/block-editor";
import {
	CheckboxControl,
	Panel,
	PanelBody,
	ToolbarGroup,
	ToolbarDropdownMenu,
} from "@wordpress/components";
import { applyFilters } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";
import {
	headingLevel2,
	headingLevel3,
	headingLevel4,
	headingLevel5,
	headingLevel6,
	paragraph,
} from "@wordpress/icons";
import { Icon } from "@launchpadBlocks/svgs";
import { useUniqueBlockId } from "../helpers.editor";
import { attributes as definedAttributeOptions } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return Element to render.
 */
// eslint-disable-next-line react/prop-types -- This is a false positive triggered by `applyFilters`.
export function Edit({ clientId, attributes, setAttributes }: BlockEditProps) {
	// eslint-disable-next-line react/prop-types -- This is a false positive triggered by `applyFilters`.
	const { isInitiallyOpen, headerContent, headerElement } = attributes;
	const HeaderElement = headerElement;
	const blockProps = useBlockProps();
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
			<BlockControls>
				<ToolbarGroup>
					<ToolbarDropdownMenu
						label={__("Change title heading element", "launchpad-blocks")}
						icon={getHeadingElementIcon(headerElement)}
						controls={definedAttributeOptions.headerElement.enum.map(
							(targetLevel) => {
								{
									const isActive = targetLevel === headerElement;

									return {
										icon: getHeadingElementIcon(targetLevel),
										title: getHumanNameOfElement(targetLevel),
										isDisabled: isActive,
										onClick: () =>
											setAttributes({ headerElement: targetLevel }),
									};
								}
							},
						)}
					/>
				</ToolbarGroup>
			</BlockControls>
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
					<div className="accordion-panel-inner-wrapper">
						<InnerBlocks />
					</div>
				</div>
			</div>
		</>
	);
}
Edit.displayName = "AccordionEdit";

function getHumanNameOfElement(
	element: InterpretedAttributes["headerElement"],
) {
	switch (element) {
		case "h2":
			return __("Heading 2", "launchpad-blocks");
		case "h3":
			return __("Heading 3", "launchpad-blocks");
		case "h4":
			return __("Heading 4", "launchpad-blocks");
		case "h5":
			return __("Heading 5", "launchpad-blocks");
		case "h6":
			return __("Heading 6", "launchpad-blocks");
		case "p":
			return __("Paragraph", "launchpad-blocks");
	}
}

function getHeadingElementIcon(
	elementType: InterpretedAttributes["headerElement"],
) {
	switch (elementType) {
		case "h2":
			return headingLevel2;
		case "h3":
			return headingLevel3;
		case "h4":
			return headingLevel4;
		case "h5":
			return headingLevel5;
		case "h6":
			return headingLevel6;
		case "p":
			return paragraph;
		default:
			return null;
	}
}
