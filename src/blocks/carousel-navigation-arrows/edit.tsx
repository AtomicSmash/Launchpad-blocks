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
	store as blockEditorStore,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	TextControl,
	ToggleControl,
} from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { ColourSelectControl } from "../helpers.editor";
import { IconSelectControl, getIcons } from "../svgs.editor";
import { attributes as attributesDefinition } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({
	clientId,
	attributes,
	setAttributes,
	context,
}: BlockEditProps) {
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
	const currentlySelectedSlide =
		context["launchpad-blocks/currentlySelectedSlide"];
	const slideCount =
		context["launchpad-blocks/carouselSlides"] !== undefined &&
		context["launchpad-blocks/carouselSlides"].length > 0
			? context["launchpad-blocks/carouselSlides"].length
			: context["launchpad-blocks/carouselImages"].length;

	const { updateBlockAttributes } = useDispatch(
		blockEditorStore,
	) as unknown as {
		updateBlockAttributes: <
			Attributes extends Record<string, unknown> = Record<string, unknown>,
		>(
			clientIds: string | string[],
			attributes: Partial<Attributes>,
			uniqueByBlock?: boolean,
		) => void;
	};

	const { parentCarouselClientId } = useSelect(
		(select) => {
			const { getBlockParentsByBlockName } = select(blockEditorStore) as {
				getBlockParentsByBlockName: (
					clientId: string,
					blockName: string,
				) => string[];
				hasSelectedInnerBlock: (clientId: string, deep: boolean) => boolean;
				getBlockOrder: (rootClientId?: string) => string[];
			};

			const parentCarouselClientId = getBlockParentsByBlockName(
				clientId,
				"launchpad-blocks/carousel",
			).at(-1);
			return {
				parentCarouselClientId,
			};
		},
		[clientId],
	);

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
				<div className="carousel-navigation-arrows-container">
					<button
						className={`carousel-navigation-button${shouldShowTextVisually ? " has-text" : ""}`}
						onClick={() => {
							if (parentCarouselClientId) {
								updateBlockAttributes(parentCarouselClientId, {
									currentlySelectedSlide:
										currentlySelectedSlide > 0
											? currentlySelectedSlide - 1
											: slideCount - 1,
								});
							}
						}}
					>
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
					<button
						className={`carousel-navigation-button${shouldShowTextVisually ? " has-text" : ""}`}
						onClick={() => {
							if (parentCarouselClientId) {
								updateBlockAttributes(parentCarouselClientId, {
									currentlySelectedSlide:
										currentlySelectedSlide < slideCount - 1
											? currentlySelectedSlide + 1
											: 0,
								});
							}
						}}
					>
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
			</div>
		</>
	);
}
Edit.displayName = "CarouselNavigationArrowsEdit";
