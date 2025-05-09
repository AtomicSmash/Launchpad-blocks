import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	RichText,
	useInnerBlocksProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { Popover } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { applyFilters } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "react";
import { useUniqueBlockId } from "../helpers.editor";
import { Icon } from "../svgs";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 */
export function Edit({
	clientId,
	attributes,
	isSelected,
	setAttributes,
}: BlockEditProps) {
	const { linkText } = attributes;
	const [isDropdownShown, setIsDropdownShown] = useState(false);
	const blockProps = useBlockProps({
		className: "menu-group-list-item has-children",
		"data-state": isDropdownShown ? "open" : "collapsed",
	});
	const innerBlocksProps = useInnerBlocksProps({
		className: "menu-group-list-item-submenu",
		hidden: isDropdownShown ? false : true,
	});

	const isInnerBlockSelected = useSelect(
		(select) =>
			(
				select(blockEditorStore) as {
					hasSelectedInnerBlock: (clientId: string, deep: boolean) => boolean;
				}
			).hasSelectedInnerBlock(clientId, true),
		[clientId],
	);

	useEffect(() => {
		setIsDropdownShown(isSelected || isInnerBlockSelected);
	}, [isSelected, isInnerBlockSelected]);

	useUniqueBlockId(
		attributes,
		"subMenuId",
		clientId,
		setAttributes,
		"launchpad-blocks/nav-submenu",
	);

	const NavSubMenuDropdownIcon = applyFilters(
		"launchpadBlocks.navSubMenuDropdownIcon",
		(props: { className?: string; isEditorMode: boolean }) => (
			<Icon iconName="accordion-arrow" {...props} />
		),
	) as (props: { className?: string; isEditorMode: boolean }) => JSX.Element;

	return (
		<>
			<li {...blockProps}>
				<button className="reset menu-group-list-item-submenu-button">
					<RichText
						tagName="span"
						onChange={(newLinkText) => {
							setAttributes({ linkText: newLinkText });
						}}
						allowedFormats={["core/bold", "core/italic"]}
						value={linkText}
						placeholder={"Add text..."}
					/>
					<NavSubMenuDropdownIcon
						isEditorMode
						className="sub-menu-label-arrow"
					/>
				</button>
				{isDropdownShown ? (
					<Popover
						placement={"bottom-start"}
						flip={false}
						offset={8}
						resize={false}
						shift={true}
						focusOnMount={false}
					>
						<div {...innerBlocksProps} />
					</Popover>
				) : null}
			</li>
		</>
	);
}
Edit.displayName = "NavSubMenuEdit";
