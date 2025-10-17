import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	InspectorControls,
	useBlockProps,
	BlockContextProvider,
} from "@wordpress/block-editor";
import { Panel, PanelBody, TextControl } from "@wordpress/components";
import ServerSideRender from "@wordpress/server-side-render";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, setAttributes, context }: BlockEditProps) {
	const blockProps = useBlockProps();
	const { templatePartSlug, templatePartName } = attributes;

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<TextControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={"Slug"}
							help={"The slug name for the generic template."}
							onChange={(newText) => {
								setAttributes({
									templatePartSlug: newText,
								});
							}}
							value={templatePartSlug}
						/>
						<TextControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={"Name"}
							help={"The name of the specialized template."}
							onChange={(newText) => {
								setAttributes({
									templatePartName: newText,
								});
							}}
							value={templatePartName}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...blockProps}>
				<BlockContextProvider
					value={{
						postId: context.postId,
					}}
				>
					<ServerSideRender
						block="launchpad-blocks/php-template-part"
						attributes={attributes}
						urlQueryArgs={{ post_id: context.postId }}
					/>
				</BlockContextProvider>
			</div>
		</>
	);
}
Edit.displayName = "PHPTemplatePartEdit";
