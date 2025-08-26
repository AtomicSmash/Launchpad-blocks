import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type {
	BlockInstanceAsObject,
	CreateBlockEditProps,
} from "@atomicsmash/blocks-helpers";
import type { ComponentType } from "react";
import {
	useBlockProps,
	BlockControls,
	useInnerBlocksProps,
	RichText,
	store as blockEditorStore,
	InnerBlocks,
	// @ts-expect-error -- missing type in package
	AlignmentControl,
} from "@wordpress/block-editor";
import { ToolbarGroup } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { useRef } from "react";
import { HeadingLevelSelect } from "../helpers.editor";
import { attributes as definedAttributeOptions } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ clientId, attributes, setAttributes }: BlockEditProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const blockProps = useBlockProps({
		ref,
		className: "alignfull has-background",
	});
	const { headerElement, headerContent, textAlign } = attributes;

	const { hasInnerBlocks } = useSelect(
		(select) => {
			const { getBlock } = select(blockEditorStore) as {
				getBlock: (rootClientId?: string) => BlockInstanceAsObject;
			};
			const block = getBlock(clientId);
			return {
				hasInnerBlocks: !!block?.innerBlocks?.length,
			};
		},
		[clientId],
	);

	// Default to the regular appender being rendered.
	let renderAppender: ComponentType | undefined;
	if (!hasInnerBlocks) {
		// When the block is empty, use the larger button appender.
		renderAppender = InnerBlocks.ButtonBlockAppender;
	}

	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		dropZoneElement: ref.current ?? undefined,
		renderAppender,
	});

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
					<AlignmentControl
						value={textAlign}
						onChange={(nextAlign: typeof textAlign) => {
							setAttributes({ textAlign: nextAlign });
						}}
					/>
				</ToolbarGroup>
			</BlockControls>
			<section {...innerBlocksProps}>
				<RichText
					tagName={headerElement}
					onChange={(newHeaderContent) => {
						setAttributes({ headerContent: newHeaderContent });
					}}
					value={headerContent}
					placeholder={"Add section heading..."}
					className={`has-text-align-${textAlign}`}
				/>
				{children}
			</section>
		</>
	);
}
Edit.displayName = "SectionEdit";
