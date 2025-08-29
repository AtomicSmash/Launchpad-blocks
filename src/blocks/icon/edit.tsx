import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import type { CSSProperties } from "react";
import {
	InspectorControls,
	useBlockProps,
	// @ts-expect-error -- Outdated types
	useBlockEditingMode,
	BlockControls,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	ToolbarButton,
	Dropdown,
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

	const blockEditingMode = (
		useBlockEditingMode as () => "disabled" | "contentOnly" | false
	)();

	return (
		<>
			{blockEditingMode === "contentOnly" ? (
				<BlockControls group="other">
					<Dropdown
						popoverProps={{ position: "bottom" }}
						renderToggle={({ isOpen, onToggle }) => (
							<ToolbarButton
								onClick={onToggle}
								aria-haspopup="true"
								aria-expanded={isOpen}
								onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => {
									if (!isOpen && event.key === "ArrowDown") {
										event.preventDefault();
										onToggle();
									}
								}}
							>
								Edit icon
							</ToolbarButton>
						)}
						renderContent={() => (
							<div className="sidebar_width">
								<IconSelectControl
									dataOnSelectedIcon={{ iconName, library }}
									onIconSelect={(dataOnSelectedIcon) => {
										setAttributes({
											iconName: dataOnSelectedIcon.iconName,
											library: dataOnSelectedIcon.library,
										});
									}}
								/>
							</div>
						)}
					/>
				</BlockControls>
			) : null}
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
