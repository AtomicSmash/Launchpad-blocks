import type { Attributes, InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { Supports } from "./supports";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
	InspectorControls,
	useSettings,
} from "@wordpress/block-editor";
import { RangeControl, Panel, PanelBody } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { useEffect } from "react";
import { ColourSelectControl } from "@launchpadBlocks/helpers.editor";
import { attributes as attributesDefinition } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;
type Colours = { name: string; slug: string; color: string }[];

export function Edit({
	clientId,
	isSelected,
	context,
	attributes,
	setAttributes,
}: BlockEditProps) {
	const { style, backgroundOrOverlayColour, overlayOpacity } = attributes;
	const hasBackgroundImage = style?.background?.backgroundImage?.url;
	const isInTemplateEditMode = context["launchpad-blocks/isInTemplateEditMode"];
	const innerBlocksTemplate = context["launchpad-blocks/template"];
	const currentlySelectedSlide =
		context["launchpad-blocks/currentlySelectedSlide"];

	const {
		isInnerBlockSelected,
		currentSlideOrderNumber,
		parentCarouselClientId,
	} = useSelect(
		(select) => {
			const {
				hasSelectedInnerBlock,
				getBlockParentsByBlockName,
				getBlockOrder,
			} = select(blockEditorStore) as {
				getBlockParentsByBlockName: (
					clientId: string,
					blockName: string,
				) => string[];
				hasSelectedInnerBlock: (clientId: string, deep: boolean) => boolean;
				getBlockOrder: (rootClientId?: string) => string[];
			};
			const parentSlidesClientId = getBlockParentsByBlockName(
				clientId,
				"launchpad-blocks/carousel-content-slides",
			).at(-1);
			const parentCarouselClientId = getBlockParentsByBlockName(
				clientId,
				"launchpad-blocks/carousel",
			).at(-1);
			const slideOrder = parentSlidesClientId
				? getBlockOrder(parentSlidesClientId)
				: [];
			const currentSlideOrderNumber = slideOrder.findIndex(
				(orderClientId) => clientId === orderClientId,
			);
			return {
				isInnerBlockSelected: hasSelectedInnerBlock(clientId, true),
				currentSlideOrderNumber,
				parentCarouselClientId,
			};
		},
		[clientId],
	);

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

	const [userPalette, themePalette, defaultPalette, shouldShowDefaultPalette] =
		useSettings(
			"color.palette.custom",
			"color.palette.theme",
			"color.palette.default",
			"color.defaultPalette",
		) as [
			Colours | undefined,
			Colours | undefined,
			Colours | undefined,
			boolean,
			boolean,
		];
	const allPalettes: Record<
		Colours[number]["slug"],
		{ name: Colours[number]["name"]; color: Colours[number]["color"] }
	> = {};
	if (shouldShowDefaultPalette && defaultPalette && defaultPalette.length > 0) {
		for (const color of defaultPalette) {
			allPalettes[color.slug] = {
				color: color.color,
				name: color.name,
			};
		}
	}
	if (themePalette && themePalette?.length > 0) {
		for (const color of themePalette) {
			allPalettes[color.slug] = {
				color: color.color,
				name: color.name,
			};
		}
	}

	if (userPalette && userPalette?.length > 0) {
		for (const color of userPalette) {
			allPalettes[color.slug] = {
				color: color.color,
				name: color.name,
			};
		}
	}

	const backgroundOrOverlaySlug = Object.keys(allPalettes).find(
		(paletteSlug) =>
			allPalettes[paletteSlug]!.color === backgroundOrOverlayColour,
	);

	const blockProps = useBlockProps({
		className: `${
			currentlySelectedSlide === currentSlideOrderNumber
				? "show-slide-in-editor"
				: ""
		} ${hasBackgroundImage ? "has-bg-image" : ""} ${backgroundOrOverlaySlug ? `has-background-color has-${backgroundOrOverlaySlug}-background-color` : ""}`,
		style: {
			...(hasBackgroundImage
				? { "--overlay-opacity": `${overlayOpacity}%` }
				: {}),
		},
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["launchpad-blocks/carousel-content-slide-content"],
		template: [["launchpad-blocks/carousel-content-slide-content"]],
		templateLock: "all",
	});

	useEffect(() => {
		if (
			!isInTemplateEditMode &&
			innerBlocksTemplate.length === 1 &&
			innerBlocksTemplate[0]!.name ===
				"launchpad-blocks/carousel-content-slide" &&
			innerBlocksTemplate[0]!.attributes
		) {
			const templateAttributes = {
				...attributes,
				...innerBlocksTemplate[0]!.attributes,
			};
			if (
				(
					Object.entries(attributes) as [
						keyof typeof attributes,
						(typeof attributes)[keyof typeof attributes],
					][]
				).every(([key, value]) => {
					return templateAttributes[key] === value;
				})
			) {
				setAttributes(templateAttributes);
			}
		}
	}, [innerBlocksTemplate, setAttributes, isInTemplateEditMode, attributes]);

	useEffect(() => {
		if (
			parentCarouselClientId &&
			(isSelected || isInnerBlockSelected) &&
			currentlySelectedSlide !== currentSlideOrderNumber
		) {
			updateBlockAttributes(parentCarouselClientId, {
				currentlySelectedSlide: currentSlideOrderNumber,
			});
		}
	}, [
		isSelected,
		isInnerBlockSelected,
		currentSlideOrderNumber,
		parentCarouselClientId,
		currentlySelectedSlide,
		updateBlockAttributes,
	]);

	return (
		<>
			<InspectorControls group="styles">
				<ColourSelectControl<Supports, Attributes>
					colours={[
						{
							attributeName: "backgroundOrOverlayColour",
							label: hasBackgroundImage ? "Overlay" : "Background",
						},
					]}
					attributes={attributes}
					attributesDefinition={attributesDefinition}
					setAttributes={setAttributes}
				/>
				{hasBackgroundImage && backgroundOrOverlayColour ? (
					<Panel>
						<PanelBody>
							<RangeControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								help="Please select how transparent you would like the overlay."
								label="Overlay opacity"
								max={100}
								min={0}
								value={overlayOpacity}
								onChange={(newValue) => {
									setAttributes({ overlayOpacity: newValue });
								}}
							/>
						</PanelBody>
					</Panel>
				) : null}
			</InspectorControls>
			<div {...innerBlocksProps} />
		</>
	);
}
Edit.displayName = "CarouselContentSlideEdit";
