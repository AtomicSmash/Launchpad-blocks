import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { useState, useEffect } from "react";
import { Icon } from "@plugin/blocks/svgs";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ clientId, isSelected }: BlockEditProps) {
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
		setIsLightboxOpen(isSelected || isInnerBlockSelected);
	}, [isSelected, isInnerBlockSelected]);

	const blockProps = useBlockProps({
		hidden: !isLightboxOpen,
		"data-lightbox": "",
	});
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		template: [
			[
				"launchpad-blocks/carousel",
				{ lock: { move: true, remove: true } },
				[
					[
						"launchpad-blocks/carousel-slides",
						{
							shouldPullImagesFromContext: true,
							lock: { move: true, remove: true },
						},
					],
					[
						"launchpad-blocks/carousel-navigation-arrows",
						{
							className: "is-style-overlay",
							lock: { move: false, remove: true },
						},
					],
				],
			],
		],
		templateLock: "insert",
	});
	return (
		<>
			<div {...innerBlocksProps}>
				<button
					type="button"
					className="reset lightbox-close-button"
					data-lightbox-close-button
					onClick={() => {
						setIsLightboxOpen(false);
					}}
				>
					<Icon iconName="menu-close-icon" isEditorMode />
				</button>
				{children}
			</div>
		</>
	);
}
Edit.displayName = "GalleryCarouselLightboxEdit";
