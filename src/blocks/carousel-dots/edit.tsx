import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { useDispatch, useSelect } from "@wordpress/data";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ clientId, context }: BlockEditProps) {
	const blockProps = useBlockProps();

	const currentlySelectedSlide =
		context["launchpad-blocks/currentlySelectedSlide"];

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
				{slides.map(({ id }, index) => {
					return (
						<button
							key={id}
							type="button"
							className={`reset carousel-dot-button${index === currentlySelectedSlide ? " is-selected" : ""}`}
							data-carousel-slide={index}
							aria-label={`Go to slide ${index + 1} of ${context["launchpad-blocks/carouselImages"].length}`}
							onClick={() => {
								if (parentCarouselClientId) {
									updateBlockAttributes(parentCarouselClientId, {
										currentlySelectedSlide: index,
									});
								}
							}}
						></button>
					);
				})}
			</div>
		</>
	);
}
Edit.displayName = "CarouselDotsEdit";
