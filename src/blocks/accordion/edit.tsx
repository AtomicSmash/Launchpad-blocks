import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	InnerBlocks,
	RichText,
	Inserter,
} from "@wordpress/block-editor";
import {
	CheckboxControl,
	Panel,
	PanelBody,
	DropdownMenu,
	ToolbarGroup,
	ButtonGroup,
	Button,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
	headingLevel2,
	headingLevel3,
	headingLevel4,
	headingLevel5,
	headingLevel6,
	paragraph,
} from "@wordpress/icons";
import { Icon } from "@plugin/blocks/svgs";
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
export function Edit({ clientId, attributes, setAttributes }: BlockEditProps) {
	const { isInitiallyOpen, headerContent, headerElement } = attributes;
	const HeaderElement = headerElement;
	const blockProps = useBlockProps();
	setAttributes({ accordionId: clientId });

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title="Block settings">
						<CheckboxControl
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
					<DropdownMenu
						popoverProps={{ className: "accordion-heading-element-dropdown" }}
						icon={<HeadingElementIcon elementType={headerElement} />}
						label={__("Change title heading element", "launchpad-blocks")}
						controls={definedAttributeOptions.headerElement.enum.map(
							(targetLevel) => {
								{
									const isActive = targetLevel === headerElement;

									return {
										icon: <HeadingElementIcon elementType={targetLevel} />,
										title: getHumanNameOfElement(targetLevel),
										isDisabled: isActive,
										onClick: () =>
											setAttributes({ headerElement: targetLevel }),
										role: "menuitemradio",
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
						<Icon
							iconName="accordion-arrow"
							className={"accordion-header-button-icon"}
							isEditorMode={true}
							size="32"
						/>
					</div>
				</HeaderElement>
				<div className={"accordion-panel"}>
					<div className="accordion-panel-inner-wrapper">
						<InnerBlocks
							renderAppender={() => (
								<MyButtonBlockAppender rootClientId={clientId} />
							)}
						/>
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

function HeadingElementIcon({
	elementType,
}: {
	elementType: InterpretedAttributes["headerElement"];
}) {
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

function MyButtonBlockAppender({ rootClientId }: { rootClientId: string }) {
	return (
		<Inserter
			rootClientId={rootClientId}
			renderToggle={({ onToggle }: { onToggle: () => void }) => (
				<ButtonGroup>
					<Button
						className="accordion-inserter-button is-primary"
						onClick={onToggle}
					>
						Add a new block
					</Button>
				</ButtonGroup>
			)}
			isAppender
		/>
	);
}
