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
import { __ } from "@wordpress/i18n";
import { alignNone, stretchWide, stretchFullWidth } from "@wordpress/icons";
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
	const { headerElement, headerContent, textAlign, stretchTitle } = attributes;

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
					<AlignmentControl
						value={stretchTitle}
						onChange={(nextStretch: typeof stretchTitle) => {
							setAttributes({ stretchTitle: nextStretch });
						}}
						alignmentControls={[
							{
								icon: alignNone,
								title: __("Don't stretch title", "launchpad-blocks"),
								align: "none",
							},
							{
								icon: stretchWide,
								title: __("Stretch title wide", "launchpad-blocks"),
								align: "wide",
							},
							{
								icon: stretchFullWidth,
								title: __("Stretch title full", "launchpad-blocks"),
								align: "full",
							},
						]}
						label={__("Stretch title", "launchpad-blocks")}
						description={__("Change title stretching", "launchpad-blocks")}
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
					className={`${stretchTitle !== "none" ? `align${stretchTitle}` : ""} has-text-align-${textAlign}`}
				/>
				{children}
			</section>
		</>
	);
}
Edit.displayName = "SectionEdit";
