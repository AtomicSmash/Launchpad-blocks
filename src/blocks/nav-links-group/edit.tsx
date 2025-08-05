import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	BlockControls,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { ToolbarGroup } from "@wordpress/components";
import { HeadingLevelSelect } from "@launchpadBlocks/helpers.editor";
import { attributes as definedAttributeOptions } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const { headerElement, headerContent } = attributes;
	const blockProps = useBlockProps();
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		template: [
			[
				"launchpad-blocks/nav-list",
				{ linkOrientation: "vertical" },
				[["launchpad-blocks/nav-menu-item"]],
			],
		],
		renderAppender: () => null,
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
				</ToolbarGroup>
			</BlockControls>
			<div {...innerBlocksProps}>
				<RichText
					tagName={headerElement}
					value={headerContent}
					onChange={(newHeaderContent) => {
						setAttributes({
							headerContent: newHeaderContent,
						});
					}}
					placeholder={"Add a title for this nav links group..."}
					className={"nav-links-group-heading is-style-t-5"}
				/>
				{children}
			</div>
		</>
	);
}
Edit.displayName = "NavLinksGroupEdit";
