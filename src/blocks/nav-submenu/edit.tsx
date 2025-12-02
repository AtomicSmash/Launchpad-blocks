import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { UseSelectWithBlockEditorStore } from "../helpers";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import type { CSSProperties } from "react";
import {
	useBlockProps,
	RichText,
	useInnerBlocksProps,
	store as blockEditorStore,
	InspectorControls,
	InspectorAdvancedControls,
	BlockControls,
} from "@wordpress/block-editor";
import {
	BaseControl,
	Panel,
	PanelBody,
	RangeControl,
	Button,
	ToolbarGroup,
	ToolbarButton,
} from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { pullLeft, pullRight } from "@wordpress/icons";
import { useRef, useState, useEffect } from "react";
import { NumberInput } from "@launchpadBlocks/__components__/NumberInput";
import {
	useUniqueBlockId,
	useIframeResize,
} from "@launchpadBlocks/helpers.editor";
import { Icon } from "@launchpadBlocks/svgs";
import { IconSelectControl, getIcons } from "@launchpadBlocks/svgs.editor";
import { attributes as attributesDefinition } from "./attributes";

// Empty array constant is used to prevent practically the same but technically different arrays from causing re-rendering.
const EMPTY_ARRAY: never[] = [];

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 */
export function Edit({ clientId, attributes, setAttributes }: BlockEditProps) {
	const toggleRef = useRef<HTMLButtonElement>(null);
	const [isLightboxOpen, setIsLighthouseOpen] = useState(false);
	const {
		linkText,
		columnCount,
		columnWidth,
		subMenuId,
		isDropdownShown,
		iconLocation,
		icon,
	} = attributes;
	const blockProps = useBlockProps({
		className: "menu-group-list-item has-children",
		"data-state": isDropdownShown ? "open" : "collapsed",
	});
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "menu-group-list-item-submenu",
			hidden: isDropdownShown ? false : true,
			style: {
				"--column-count": `${columnCount}`,
				"--column-width": `${columnWidth}rem`,
			} as CSSProperties,
		},
		{
			template: [
				[
					"launchpad-blocks/nav-list",
					{ linkOrientation: "vertical" },
					[["launchpad-blocks/nav-menu-item"]],
				],
			],
		},
	);

	const isNestedInAnotherSubMenu = useSelect(
		(select) => {
			const { getBlockParentsByBlockName } = select(blockEditorStore) as {
				getBlockParentsByBlockName: (
					clientId: string,
					blockName: string,
				) => string[];
			};
			return (
				getBlockParentsByBlockName(clientId, "launchpad-blocks/nav-submenu")
					.length > 0
			);
		},
		[clientId],
	);

	const { subMenusToClose, childBlocks } = useSelect(
		(select) => {
			const { getBlockParentsByBlockName, getBlocks } = select(
				blockEditorStore,
			) as UseSelectWithBlockEditorStore;
			const childBlocks = getBlocks(clientId);
			if (isNestedInAnotherSubMenu) {
				return { subMenusToClose: EMPTY_ARRAY, childBlocks };
			}
			const parentNavListClientId = getBlockParentsByBlockName(
				clientId,
				"launchpad-blocks/nav-list",
			).at(-1);
			const subMenusToClose = getBlocks(parentNavListClientId)
				.filter(
					(block) =>
						block.name === "launchpad-blocks/nav-submenu" &&
						block.clientId !== clientId &&
						(block.attributes as InterpretedAttributes).isDropdownShown ===
							true,
				)
				.sort((a, b) => {
					const clientIdA = a.clientId.toUpperCase(); // ignore upper and lowercase
					const clientIdB = b.clientId.toUpperCase(); // ignore upper and lowercase
					if (clientIdA < clientIdB) {
						return -1;
					}
					if (clientIdA > clientIdB) {
						return 1;
					}

					// names must be equal
					return 0;
				})
				.map((block) => block.clientId);

			return {
				subMenusToClose:
					subMenusToClose.length === 0 ? EMPTY_ARRAY : subMenusToClose,
				childBlocks,
			};
		},
		[clientId, isNestedInAnotherSubMenu],
	);

	const { updateBlockAttributes } = useDispatch(
		blockEditorStore,
	) as unknown as {
		updateBlockAttributes: <
			Attributes extends Record<string, unknown> = Record<string, unknown>,
		>(
			clientIds: string | string[],
			attributes: Partial<Attributes>,
			uniqueByBlock?: boolean,
		) => void;
	};

	const SubMenuIdEditControl = useUniqueBlockId(
		attributes,
		"subMenuId",
		clientId,
		setAttributes,
		"launchpad-blocks/nav-submenu",
	);

	const resizeIframe = useIframeResize(
		() =>
			document
				.querySelector<HTMLIFrameElement>('iframe[name="editor-canvas"]')
				?.contentWindow?.document.querySelector<HTMLDivElement>(
					".submenu-lightbox-editor .menu-group-list-item-submenu",
				) ?? null,
	);

	useEffect(() => {
		if (childBlocks) {
			// Resize iframe on changes to children (opening nested submenus or adding/removing blocks)
			resizeIframe();
		}
	}, [childBlocks, resizeIframe]);

	const iconLibraries = getIcons();

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={pullLeft}
						title={__("Show icon on left", "launchpad-blocks")}
						isActive={iconLocation === "start"}
						onClick={() =>
							setAttributes({
								iconLocation: "start",
							})
						}
					/>
					<ToolbarButton
						icon={pullRight}
						title={__("Show icon on right", "launchpad-blocks")}
						isActive={iconLocation === "end"}
						onClick={() =>
							setAttributes({
								iconLocation: "end",
							})
						}
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<BaseControl
							id="columns-count-number-input"
							label="Column count"
							help="Select the number of columns to display."
							__nextHasNoMarginBottom
						>
							<NumberInput
								min={1}
								defaultValue={columnCount}
								onValidation={(newNumber) => {
									setAttributes({ columnCount: newNumber });
									resizeIframe();
								}}
								required
								allowMetaOrCtrlClick={false}
								allowShiftClick={false}
								allowAltClick={false}
							/>
						</BaseControl>
						<RangeControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							help="Please choose how wide you want your columns."
							label="Column width"
							max={20}
							min={10}
							withInputField={false}
							value={columnWidth}
							onChange={(newValue) => {
								setAttributes({ columnWidth: newValue });
								resizeIframe();
							}}
						/>
					</PanelBody>
				</Panel>
				<IconSelectControl
					iconSelectHeader="Icon"
					dataOnSelectedIcon={icon}
					onIconSelect={(dataOnSelectedIcon) => {
						setAttributes({
							icon: dataOnSelectedIcon,
						});
					}}
					onReset={() => {
						setAttributes({
							icon: attributesDefinition.icon.default,
						});
					}}
				/>
			</InspectorControls>
			<InspectorAdvancedControls>
				<SubMenuIdEditControl
					label="Unique sub menu identifier"
					help={(isValid) => (
						<>
							<span>
								This is used to differentiate the submenus from each other for
								JS and accessibility. Must be unique on a page.
							</span>
							{!isValid ? (
								<>
									<br />
									<span style={{ fontWeight: "bold", color: "red" }}>
										This value is used by another submenu on the page. Using
										this value: {subMenuId}{" "}
									</span>
								</>
							) : null}
						</>
					)}
					onValidChange={(newIdAttribute) => {
						setAttributes({
							subMenuId: newIdAttribute,
						});
					}}
					idAttribute={subMenuId}
				/>
			</InspectorAdvancedControls>
			<li {...blockProps}>
				<button
					className="reset menu-group-list-item-submenu-button"
					ref={toggleRef}
					onClick={() => {
						const isOpen = isDropdownShown;

						if (!isOpen) {
							updateBlockAttributes(subMenusToClose, {
								isDropdownShown: false,
							});
							setAttributes({ isDropdownShown: true });
						} else {
							setAttributes({ isDropdownShown: false });
						}
					}}
				>
					{iconLocation === "start"
						? iconLibraries[icon.library]?.renderIcon(icon.iconName, {
								className: "sub-menu-label-arrow",
							})
						: null}
					<RichText
						tagName="span"
						onChange={(newLinkText) => {
							setAttributes({ linkText: newLinkText });
						}}
						allowedFormats={["core/bold", "core/italic"]}
						value={linkText}
						placeholder={"Add text..."}
					/>
					{iconLocation === "end"
						? iconLibraries[icon.library]?.renderIcon(icon.iconName, {
								className: "sub-menu-label-arrow",
							})
						: null}
				</button>
				{isDropdownShown ? (
					isNestedInAnotherSubMenu ? (
						<div {...innerBlocksProps} />
					) : (
						<>
							<div className="submenu-open-edit-popover">
								<Button
									variant="primary"
									onClick={() => {
										setIsLighthouseOpen(true);
										resizeIframe();
									}}
								>
									Edit submenu
								</Button>
							</div>
							{isLightboxOpen ? (
								<div className="submenu-lightbox-editor">
									<button
										type="button"
										className="reset lightbox-close-button"
										data-lightbox-close-button
										onClick={() => {
											setIsLighthouseOpen(false);
											resizeIframe();
										}}
									>
										<Icon iconName="menu-close-icon" isEditorMode />
									</button>
									<div {...innerBlocksProps} />
								</div>
							) : null}
						</>
					)
				) : null}
			</li>
		</>
	);
}
Edit.displayName = "NavSubMenuEdit";
