import type { Attributes, InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { Supports } from "./supports";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import type { CSSProperties } from "react";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { ColourSelectControl } from "../helpers.editor";
import { attributes as attributesDefinition } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, setAttributes, context }: BlockEditProps) {
	const { selectedOutlineColour } = attributes;
	const blockProps = useBlockProps({
		style: {
			"--selected-outline-colour": selectedOutlineColour,
		} as CSSProperties,
	});

	return (
		<>
			<InspectorControls group="styles">
				<ColourSelectControl<Supports, Attributes>
					colours={[
						{
							attributeName: "selectedOutlineColour",
							label: "Selected outline colour",
						},
					]}
					attributes={attributes}
					attributesDefinition={attributesDefinition}
					setAttributes={setAttributes}
				/>
			</InspectorControls>
			<div {...blockProps}>
				{context["launchpad-blocks/carouselImages"].map(
					({ id, url }, index) => {
						return (
							<button
								key={id}
								type="button"
								className={`reset carousel-thumbnail-button${index === 1 || (index === 0 && context["launchpad-blocks/carouselImages"].length === 1) ? " is-selected" : ""}`}
								data-carousel-slide={index}
							>
								<img
									width={190}
									height={132}
									src={url}
									alt=""
									draggable={false}
									className={`carousel-thumbnail`}
								/>
							</button>
						);
					},
				)}
			</div>
		</>
	);
}
Edit.displayName = "CarouselThumbnailsEdit";
