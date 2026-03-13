import type { InterpretedAttributes, Attributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { Supports } from "./supports";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import type { CSSProperties } from "react";
import {
	InspectorControls,
	useBlockProps,
	RichText,
	BlockControls,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	ToolbarGroup,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { ColourSelectControl, HeadingLevelSelect } from "../helpers.editor";
import { IconSelectControl, getIcons } from "../svgs.editor";
import { attributes as definedAttributeOptions } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const { headerElement, headerContent, iconName, library, size, iconColour } =
		attributes;

	const blockProps = useBlockProps({
		style: {
			"--icon-size": size,
			"--icon-colour": iconColour,
		} as CSSProperties,
	});
	const iconLibraries = getIcons();

	return (
		<>
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
			<InspectorControls>
				<Panel>
					<PanelBody>
						<UnitControl
							__next40pxDefaultSize
							label={"Icon size"}
							value={size}
							onChange={(newSize) => {
								setAttributes({
									size: newSize,
								});
							}}
						/>
					</PanelBody>
				</Panel>
				<IconSelectControl
					dataOnSelectedIcon={{ iconName, library }}
					onIconSelect={(dataOnSelectedIcon) => {
						setAttributes({
							iconName: dataOnSelectedIcon.iconName,
							library: dataOnSelectedIcon.library,
						});
					}}
				/>
			</InspectorControls>
			<InspectorControls group="styles">
				<ColourSelectControl<Supports, Attributes>
					colours={[
						{
							attributeName: "iconColour",
							label: "Icon",
						},
					]}
					attributes={attributes}
					attributesDefinition={definedAttributeOptions}
					setAttributes={setAttributes}
				/>
			</InspectorControls>
			<div {...blockProps}>
				<div className="icon">
					{iconLibraries[library]?.renderIcon(iconName)}
				</div>
				<RichText
					tagName={headerElement}
					value={headerContent}
					onChange={(newHeaderContent) => {
						setAttributes({
							headerContent: newHeaderContent,
						});
					}}
					placeholder={"Heading"}
				/>
			</div>
		</>
	);
}
Edit.displayName = "HeadingWithIconBlock";
