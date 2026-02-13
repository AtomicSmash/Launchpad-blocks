import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
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
	SelectControl,
	ToolbarGroup,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { HeadingLevelSelect } from "../helpers.editor";
import { IconSelectControl, getIcons } from "../svgs.editor";
import { attributes as definedAttributeOptions } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const { headerElement, headerContent, headerStyle, iconName, library, size } =
		attributes;
	const blockProps = useBlockProps({
		style: {
			"--icon-size": size,
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
					<PanelBody title="Heading style">
						<SelectControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label="Heading style"
							help="Override default heading style"
							value={headerStyle}
							onChange={(newHeaderStyle) => {
								setAttributes({
									headerStyle: newHeaderStyle,
								});
							}}
							options={[
								{ value: "", label: "Default" },
								{ value: "t-1", label: "T1" },
								{ value: "t-2", label: "T2" },
								{ value: "t-3", label: "T3" },
								{ value: "t-4", label: "T4" },
								{ value: "t-5", label: "T5" },
								{ value: "t-6", label: "T6" },
							]}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
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
					className={headerStyle && `is-style-${headerStyle}`}
				/>
			</div>
		</>
	);
}
Edit.displayName = "HeadingWithIconBlock";
