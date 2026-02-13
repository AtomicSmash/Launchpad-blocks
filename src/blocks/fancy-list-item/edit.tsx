import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import type { LegacyRef } from "react";
import {
	InspectorControls,
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { store as richTextStore } from "@wordpress/rich-text";
// import { split } from "@wordpress/rich-text";
import { useRef } from "react";
import { IconSelectControl, getIcons } from "../svgs.editor";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({
	attributes,
	context,
	setAttributes,
	mergeBlocks,
	onReplace,
	onRemove,
}: BlockEditProps) {
	const { textContent, iconName, library } = attributes;
	const shouldHaveIcon =
		context["launchpad-blocks/fancyListType"] === "ul" &&
		context["launchpad-blocks/fancyListMarkerType"] === "icon";
	const hasIcon = shouldHaveIcon && iconName && library;
	const blockProps = useBlockProps({
		className: `${hasIcon ? "has-icon" : ""}`,
	});
	const iconLibraries = getIcons();
	const listItemTextContentRef = useRef<HTMLSpanElement>(null);

	const allFormatTypes = useSelect(
		(select) =>
			(
				select(richTextStore) as {
					getFormatTypes: () => { name: string }[]; // there's more to this type, but name is all we need.
				}
			).getFormatTypes(),
		[],
	).map((formatType) => formatType.name);

	return (
		<>
			<InspectorControls>
				{shouldHaveIcon ? (
					<IconSelectControl
						dataOnSelectedIcon={{ iconName, library }}
						onIconSelect={(dataOnSelectedIcon) => {
							setAttributes({
								iconName: dataOnSelectedIcon.iconName,
								library: dataOnSelectedIcon.library,
							});
						}}
						onReset={() => {
							setAttributes({
								iconName: undefined,
								library: undefined,
							});
						}}
					/>
				) : null}
			</InspectorControls>
			<li {...blockProps}>
				{hasIcon
					? iconLibraries[library]?.renderIcon(iconName, {
							className: "list-item-icon",
						})
					: null}
				<RichText
					identifier="textContent"
					// The type for ref incorrectly is set to legacy ref only, but accepts modern ref.
					ref={listItemTextContentRef as unknown as LegacyRef<"span">}
					tagName={"span"}
					onChange={(newTextContent) => {
						setAttributes({ textContent: newTextContent });
					}}
					onMerge={mergeBlocks}
					onReplace={onReplace}
					onRemove={onRemove}
					value={textContent}
					placeholder={__(
						"Write your list item content...",
						"launchpad-blocks",
					)}
					allowedFormats={[
						...allFormatTypes.filter((format) => {
							return format !== "core/footnote" && format !== "core/image";
						}),
					]}
				/>
			</li>
		</>
	);
}
Edit.displayName = "FancyListItemEdit";
