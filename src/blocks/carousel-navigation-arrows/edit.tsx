import type { Attributes, InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { Supports } from "./supports";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import type { CSSProperties } from "react";
import {
	useBlockProps,
	useInnerBlocksProps,
	RichText,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	TextControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { ColourSelectControl } from "../helpers.editor";
import { IconSelectControl, getIcons } from "../svgs.editor";
import { attributes as attributesDefinition } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const {
		prevText,
		nextText,
		prevVisualText,
		nextVisualText,
		shouldShowTextVisually,
		backgroundColour,
		iconColour,
		prevIcon,
		nextIcon,
		className,
	} = attributes;
	const blockProps = useBlockProps({
		style: {
			"--background-colour": backgroundColour,
			"--icon-colour": iconColour,
		} as CSSProperties,
	});
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		orientation: "horizontal",
		renderAppender: className?.includes("is-style-overlay")
			? () => null
			: InnerBlocks.ButtonBlockAppender,
	});
	const iconLibraries = getIcons();

	return (
		<>
			<InspectorControls group="styles">
				<ColourSelectControl<Supports, Attributes>
					colours={[
						{
							attributeName: "backgroundColour",
							label: "Background colour",
						},
						{
							attributeName: "iconColour",
							label: "Icon colour",
						},
					]}
					attributes={attributes}
					attributesDefinition={attributesDefinition}
					setAttributes={setAttributes}
				/>
			</InspectorControls>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<ToggleControl
							__nextHasNoMarginBottom
							label={"Show text labels in buttons"}
							onChange={(newChecked) => {
								setAttributes({
									shouldShowTextVisually: newChecked,
								});
							}}
							checked={shouldShowTextVisually}
						/>
					</PanelBody>
					<PanelBody title="Accessibility">
						<TextControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={"Previous button screen reader label"}
							onChange={(newText) => {
								setAttributes({
									prevText: newText,
								});
							}}
							value={prevText}
						/>
						<TextControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={"Next button screen reader label"}
							onChange={(newText) => {
								setAttributes({
									nextText: newText,
								});
							}}
							value={nextText}
						/>
					</PanelBody>
				</Panel>
				<IconSelectControl
					iconSelectHeader="Previous icon"
					dataOnSelectedIcon={prevIcon}
					onIconSelect={(dataOnSelectedIcon) => {
						setAttributes({
							prevIcon: dataOnSelectedIcon,
						});
					}}
					onReset={() => {
						setAttributes({
							prevIcon: attributesDefinition.prevIcon.default,
						});
					}}
				/>
				<IconSelectControl
					iconSelectHeader="Next icon"
					dataOnSelectedIcon={nextIcon}
					onIconSelect={(dataOnSelectedIcon) => {
						setAttributes({
							nextIcon: dataOnSelectedIcon,
						});
					}}
					onReset={() => {
						setAttributes({
							nextIcon: attributesDefinition.nextIcon.default,
						});
					}}
				/>
			</InspectorControls>
			<div {...innerBlocksProps}>
				<button className="carousel-navigation-button">
					{iconLibraries[prevIcon.library]?.renderIcon(prevIcon.iconName, {
						className: "carousel-navigation-button-icon",
					})}
					{shouldShowTextVisually ? (
						<RichText
							identifier="prevVisualText"
							tagName={"span"}
							onChange={(newTextContent) => {
								setAttributes({ prevVisualText: newTextContent });
							}}
							value={prevVisualText}
							placeholder={__("Previous", "launchpad-blocks")}
						/>
					) : null}
				</button>
				<div className="carousel-navigation-inner-area">{children}</div>
				<button className="carousel-navigation-button">
					{shouldShowTextVisually ? (
						<RichText
							identifier="nextVisualText"
							tagName={"span"}
							onChange={(newTextContent) => {
								setAttributes({ nextVisualText: newTextContent });
							}}
							value={nextVisualText}
							placeholder={__("Next", "launchpad-blocks")}
						/>
					) : null}
					{iconLibraries[nextIcon.library]?.renderIcon(nextIcon.iconName, {
						className: "carousel-navigation-button-icon",
					})}
				</button>
			</div>
		</>
	);
}
Edit.displayName = "CarouselNavigationArrowsEdit";
