import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	Inserter,
} from "@wordpress/block-editor";
import {
	Button,
	ButtonGroup,
	CheckboxControl,
	Panel,
	PanelBody,
} from "@wordpress/components";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

export function Edit({ clientId, attributes, setAttributes }: BlockEditProps) {
	const { isMultiple } = attributes;
	const blockProps = useBlockProps();
	setAttributes({ accordionGroupId: clientId });

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title="Block settings">
						<CheckboxControl
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
				<InnerBlocks
					allowedBlocks={["launchpad-blocks/accordion"]}
					renderAppender={() => (
						<MyButtonBlockAppender rootClientId={clientId} />
					)}
				/>
			</div>
		</>
	);
}

function MyButtonBlockAppender({ rootClientId }: { rootClientId: string }) {
	return (
		<Inserter
			rootClientId={rootClientId}
			renderToggle={({ onToggle }: { onToggle: () => void }) => (
				<ButtonGroup>
					<Button
						className="accordion-inserter-button is-primary"
						onClick={onToggle}
					>
						Add an accordion
					</Button>
				</ButtonGroup>
			)}
			isAppender
		/>
	);
}
Edit.displayName = "AccordionGroupEdit";
