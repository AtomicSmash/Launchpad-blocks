import type { InterpretedAttributes, Attributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { Supports } from "./supports";
import type {
	BlockInstanceAsObject,
	CreateBlockEditProps,
} from "@atomicsmash/blocks-helpers";
import type { CSSProperties } from "react";
import {
	InspectorControls,
	useBlockProps,
	RichText,
	BlockControls,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { store as blocksStore } from "@wordpress/blocks";
import {
	Panel,
	PanelBody,
	ToolbarGroup,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import TokenList from "@wordpress/token-list";
import { ColourSelectControl, HeadingLevelSelect } from "../helpers.editor";
import { IconSelectControl, getIcons } from "../svgs.editor";
import { attributes as definedAttributeOptions } from "./attributes";
import blockMetaData from "./block.json";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ clientId, attributes, setAttributes }: BlockEditProps) {
	const { headerElement, headerContent, iconName, library, size, iconColour } =
		attributes;

	const { thisBlocksStyles } = useSelect((select) => {
		const { getBlockStyles } = select(blocksStore) as {
			getBlockStyles: (
				name: string,
			) => { name: string; label: string; isDefault?: boolean }[] | undefined;
		};
		return {
			thisBlocksStyles: getBlockStyles(blockMetaData.name),
		};
	}, []);

	const { activeStyle } = useSelect(
		(select) => {
			const { getBlock } = select(blockEditorStore) as {
				getBlock: (clientId: string) => BlockInstanceAsObject & {
					clientId: string;
					isValid: boolean;
					originalContent: string;
					validationIssues: unknown[];
				};
			};
			const className =
				(getBlock(clientId).attributes?.className as string | undefined) ?? "";

			for (const style of new TokenList(className).values()) {
				if (!style.includes("is-style-")) {
					continue;
				}

				const potentialStyleName = style.substring(9);
				const activeStyle = thisBlocksStyles?.find(
					({ name }) => name === potentialStyleName,
				);
				if (activeStyle) {
					return { activeStyle };
				}
			}
			return {
				activeStyle: thisBlocksStyles?.find((style) => style.isDefault),
			};
		},
		[clientId, thisBlocksStyles],
	);
	const blockProps = useBlockProps({
		style: {
			"--icon-size": size,
			"--icon-colour": iconColour,
		} as CSSProperties,
	});
	const iconLibraries = getIcons();

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
			<InspectorControls group="styles">
				<ColourSelectControl<Supports, Attributes>
					colours={[
						{
							attributeName: "iconColour",
							label: "Icon",
						},
					]}
					attributes={attributes}
					attributesDefinition={definedAttributeOptions}
					setAttributes={setAttributes}
				/>
			</InspectorControls>
			<div {...blockProps}>
				<div className="icon">
					{iconLibraries[library]?.renderIcon(iconName)}
				</div>
				<RichText
					tagName={headerElement}
					value={headerContent}
					onChange={(newHeaderContent) => {
						setAttributes({
							headerContent: newHeaderContent,
						});
					}}
					className={activeStyle ? `is-style-${activeStyle.name}` : undefined}
					placeholder={"Heading"}
				/>
			</div>
		</>
	);
}
Edit.displayName = "HeadingWithIconBlock";
