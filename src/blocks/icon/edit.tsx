import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { Panel, PanelBody } from "@wordpress/components";
import { IconSelectControl, getIcons } from "../svgs.editor";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const { iconName, library } = attributes;
	const blockProps = useBlockProps();
	const iconLibraries = getIcons();

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<IconSelectControl
							dataOnSelectedIcon={{ iconName, library }}
							onIconSelect={(dataOnSelectedIcon) => {
								setAttributes({
									iconName: dataOnSelectedIcon.iconName,
									library: dataOnSelectedIcon.library,
								});
							}}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...blockProps}>{iconLibraries[library]?.renderIcon(iconName)}</div>
		</>
	);
}
Edit.displayName = "IconEdit";
