import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockSaveProps } from "@atomicsmash/blocks-helpers";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import { Icon } from "@plugin/blocks/svgs";

type BlockSaveProps = CreateBlockSaveProps<InterpretedAttributes>;

export function Save({ attributes }: BlockSaveProps) {
	const { isInitiallyOpen, accordionId, headerContent, headerElement } =
		attributes;
	const HeaderElement = headerElement;
	const blockProps = useBlockProps.save({
		"data-accordion": "",
		"data-is-initially-open": isInitiallyOpen,
		id: accordionId,
	});
	return (
		<div {...blockProps}>
			<HeaderElement>
				<button
					aria-expanded={"true"}
					aria-controls={`${accordionId}-panel`}
					data-state={"open"}
					id={`${accordionId}-trigger`}
					className="accordion-header-button"
				>
					<RichText.Content
						tagName={"span"}
						className={"accordion-header-button-text"}
						value={headerContent}
					/>
					<Icon
						iconName="accordion-arrow"
						className={"accordion-header-button-icon"}
						isEditorMode={true}
						size="32"
					/>
				</button>
			</HeaderElement>
			<div
				role="region"
				data-state="open"
				aria-labelledby={`${accordionId}-trigger`}
				id={`${accordionId}-panel`}
				className={"accordion-panel"}
			>
				<div className="accordion-panel-inner-wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
