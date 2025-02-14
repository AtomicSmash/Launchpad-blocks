import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";
import { CheckboxControl, Panel, PanelBody } from "@wordpress/components";
import { useUniqueBlockId } from "../helpers.editor";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

export function Edit({ clientId, attributes, setAttributes }: BlockEditProps) {
	const { isMultiple } = attributes;
	const blockProps = useBlockProps();

	useUniqueBlockId(
		attributes,
		"accordionGroupId",
		clientId,
		setAttributes,
		"launchpad-blocks/accordion-group",
	);

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title="Block settings">
						<CheckboxControl
							__nextHasNoMarginBottom
							label="Multiple open accordions"
							help="Allow multiple accordions in the same group to be open at the same time."
							checked={isMultiple}
							onChange={(isInputChecked) => {
								setAttributes({ isMultiple: isInputChecked });
							}}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...blockProps}>
				<InnerBlocks allowedBlocks={["launchpad-blocks/accordion"]} />
			</div>
		</>
	);
}
Edit.displayName = "AccordionGroupEdit";
