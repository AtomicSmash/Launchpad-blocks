import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import type { CSSProperties } from "react";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { IconSelectControl, getIcons } from "../svgs.editor";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const { iconName, library, size } = attributes;
	const blockProps = useBlockProps({
		style: {
			"--icon-size": size,
		} as CSSProperties,
	});
	const iconLibraries = getIcons();

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<UnitControl
							__next40pxDefaultSize
							label={"Icon size"}
							value={size}
							onChange={(newSize) => {
								setAttributes({
									size: newSize,
								});
							}}
						/>
					</PanelBody>
				</Panel>
				<IconSelectControl
					dataOnSelectedIcon={{ iconName, library }}
					onIconSelect={(dataOnSelectedIcon) => {
						setAttributes({
							iconName: dataOnSelectedIcon.iconName,
							library: dataOnSelectedIcon.library,
						});
					}}
				/>
			</InspectorControls>
			<div {...blockProps}>{iconLibraries[library]?.renderIcon(iconName)}</div>
		</>
	);
}
Edit.displayName = "IconEdit";
