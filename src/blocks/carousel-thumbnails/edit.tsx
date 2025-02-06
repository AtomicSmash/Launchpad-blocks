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

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const { selectedOutlineColour } = attributes;
	const blockProps = useBlockProps({
		style: {
			"--selected-outline-colour": selectedOutlineColour,
		} as CSSProperties,
	});

	return (
		<>
			<InspectorControls>
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
				{[237, 433, 582, 593, 943, 1024].map((imageId, index) => {
					return (
						<button
							key={imageId}
							type="button"
							className={`reset carousel-thumbnail-button${index === 1 ? " is-selected" : ""}`}
							data-carousel-slide={index}
						>
							{/* Just like with pagination block, we need to show the controls at all times,
									so we should show random photos instead of gallery items so this is always
									the case. Otherwise we could end up not showing anything. */}
							<img
								width={260}
								height={180}
								src={`https://picsum.photos/id/${imageId}/260/180`}
								alt=""
								draggable={false}
								className={`carousel-thumbnail`}
							/>
						</button>
					);
				})}
			</div>
		</>
	);
}
Edit.displayName = "CarouselThumbnailsEdit";
