import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
	InspectorControls,
} from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { useRef, useEffect } from "react";
import { getIcons, IconSelectControl } from "@launchpadBlocks/svgs.editor";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({
	clientId,
	isSelected,
	attributes,
	setAttributes,
}: BlockEditProps) {
	const iconLibraries = getIcons();
	const { iconName, library } = attributes;

	const isInnerBlockSelected = useSelect(
		(select) =>
			(
				select(blockEditorStore) as {
					hasSelectedInnerBlock: (clientId: string, deep: boolean) => boolean;
				}
			).hasSelectedInnerBlock(clientId, true),
		[clientId],
	);

	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (isSelected || isInnerBlockSelected) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [isSelected, isInnerBlockSelected]);

	const blockProps = useBlockProps({
		ref: dialogRef,
		"data-launchpad-lightbox": "",
	});
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps);

	return (
		<>
			<InspectorControls>
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
			<dialog {...innerBlocksProps}>
				<button
					type="button"
					className="reset lightbox-close-button"
					data-lightbox-close-button
					onClick={() => {
						dialogRef.current?.close();
					}}
				>
					{iconLibraries[library]?.renderIcon(iconName)}
				</button>
				{children}
			</dialog>
		</>
	);
}
Edit.displayName = "LightboxEdit";
