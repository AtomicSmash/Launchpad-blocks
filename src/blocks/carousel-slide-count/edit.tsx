import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { useLayoutStyles } from "@launchpadBlocks/helpers.editor";
import { supports } from "./supports";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, setAttributes, context }: BlockEditProps) {
	const { prefix, betweenText, suffix, layout, style } = attributes;
	const { className: layoutClassName, style: layoutStyle } = useLayoutStyles(
		layout,
		supports,
		style,
	);
	const blockProps = useBlockProps({
		className: layoutClassName,
		style: layoutStyle,
	});
	const currentlySelectedSlide =
		context["launchpad-blocks/currentlySelectedSlide"];

	const slides =
		context["launchpad-blocks/carouselSlides"] !== undefined &&
		context["launchpad-blocks/carouselSlides"].length > 0
			? context["launchpad-blocks/carouselSlides"].map((slide, index) => ({
					id: (slide.attributes?.id as number | undefined) ?? index,
				}))
			: context["launchpad-blocks/carouselImages"].map((image) => ({
					id: image.id,
				}));
	return (
		<>
			<div {...blockProps}>
				<RichText
					tagName="span"
					placeholder="prefix"
					value={prefix}
					identifier="prefix"
					onChange={(newText) => {
						setAttributes({ prefix: newText });
					}}
				/>
				<span>{currentlySelectedSlide + 1}</span>{" "}
				<RichText
					tagName="span"
					placeholder="betweenText"
					identifier="betweenText"
					value={betweenText}
					onChange={(newText) => {
						setAttributes({ betweenText: newText });
					}}
				/>
				<span>{slides.length}</span>
				<RichText
					tagName="span"
					placeholder="suffix"
					identifier="suffix"
					value={suffix}
					onChange={(newText) => {
						setAttributes({ suffix: newText });
					}}
				/>
			</div>
		</>
	);
}
Edit.displayName = "CarouselSlideCountEdit";
