import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import { RichText, useBlockProps } from "@wordpress/block-editor";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, setAttributes, context }: BlockEditProps) {
	const blockProps = useBlockProps();
	const { prefix, betweenText, suffix } = attributes;

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
				<span>1</span>{" "}
				<RichText
					tagName="span"
					placeholder="betweenText"
					identifier="betweenText"
					value={betweenText}
					onChange={(newText) => {
						setAttributes({ betweenText: newText });
					}}
				/>
				<span>{context["launchpad-blocks/carouselImages"].length}</span>
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
