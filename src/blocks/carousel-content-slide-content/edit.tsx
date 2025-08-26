import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type {
	BlockInstanceAsObject,
	CreateBlockEditProps,
} from "@atomicsmash/blocks-helpers";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { convertBlockObjectToArray } from "@launchpadBlocks/helpers.editor";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ context }: BlockEditProps) {
	const shouldLockChildSlidesToTemplate =
		context["launchpad-blocks/shouldLockChildSlidesToTemplate"];
	const innerBlocksTemplate = context["launchpad-blocks/template"];
	const innerBlocksTemplateLock =
		shouldLockChildSlidesToTemplate &&
		!context["launchpad-blocks/isInTemplateEditMode"]
			? "contentOnly"
			: false;
	const template: BlockInstanceAsObject[] = [];
	if (
		innerBlocksTemplate.length === 1 &&
		innerBlocksTemplate[0]!.name ===
			"launchpad-blocks/carousel-content-slide" &&
		innerBlocksTemplate[0]!.innerBlocks?.length === 1 &&
		innerBlocksTemplate[0]!.innerBlocks[0]!.name ===
			"launchpad-blocks/carousel-content-slide-content" &&
		innerBlocksTemplate[0]!.innerBlocks[0]!.innerBlocks
	) {
		template.push(...innerBlocksTemplate[0]!.innerBlocks[0]!.innerBlocks);
	} else {
		template.push(...innerBlocksTemplate);
	}
	const templateAsArray = template.map((innerBlocksTemplateObject) =>
		convertBlockObjectToArray(innerBlocksTemplateObject),
	);

	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: templateAsArray,
		templateLock: innerBlocksTemplateLock,
	});

	return (
		<>
			<div {...innerBlocksProps} />
		</>
	);
}
Edit.displayName = "CarouselContentSlideContentEdit";
