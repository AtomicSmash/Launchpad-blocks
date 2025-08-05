import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import { useBlockProps } from "@wordpress/block-editor";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ context }: BlockEditProps) {
	const blockProps = useBlockProps();

	return (
		<>
			<div {...blockProps}>
				{context["launchpad-blocks/carouselImages"].map(({ id }, index) => {
					return (
						<button
							key={id}
							type="button"
							className={`reset carousel-dot-button${index === 0 ? " is-selected" : ""}`}
							data-carousel-slide={index}
							aria-label={`Go to slide ${index + 1} of ${context["launchpad-blocks/carouselImages"].length}`}
						></button>
					);
				})}
			</div>
		</>
	);
}
Edit.displayName = "CarouselDotsEdit";
