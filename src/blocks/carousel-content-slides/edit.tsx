import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { InterpretedAttributes as CarouselInterpretedAttributes } from "../carousel/attributes";
import type {
	BlockInstanceAsObject,
	CreateBlockEditProps,
} from "@atomicsmash/blocks-helpers";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { createBlocksFromInnerBlocksTemplate } from "@wordpress/blocks";
import {
	Panel,
	PanelBody,
	ToggleControl,
	Button,
	__experimentalConfirmDialog as ConfirmDialog,
	Flex,
	FlexItem,
} from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { store as editorStore } from "@wordpress/editor";
import { addFilter, hasFilter, removeFilter } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";
import { store as noticesStore } from "@wordpress/notices";
import { useCallback, useEffect, useState } from "react";
import { objectArraysAreEqual } from "@launchpadBlocks/helpers";
import {
	AspectRatioSelector,
	convertBlockObjectToArray,
	VariationSelect,
} from "@launchpadBlocks/helpers.editor";
import { Icon } from "@launchpadBlocks/svgs";
import blockJson from "./block.json";
import { variations } from "./variations";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ clientId, attributes, setAttributes }: BlockEditProps) {
	const {
		template,
		shouldLockChildSlidesToTemplate,
		hasDismissedVariationsSelector,
		tempInnerBlocksStorage,
		isInTemplateEditMode,
		aspectRatio,
	} = attributes;
	const [isShowingTemplateEditingWarning, setIsShowingTemplateEditingWarning] =
		useState(false);
	const {
		lockPostSaving,
		lockPostAutosaving,
		unlockPostSaving,
		unlockPostAutosaving,
	} = useDispatch(editorStore) as unknown as {
		lockPostSaving: (lockName: string) => void;
		lockPostAutosaving: (lockName: string) => void;
		unlockPostSaving: (lockName: string) => void;
		unlockPostAutosaving: (lockName: string) => void;
	};
	const { createNotice, removeNotice } = useDispatch(noticesStore);
	const { replaceInnerBlocks, updateBlockAttributes } = useDispatch(
		blockEditorStore,
	) as unknown as {
		replaceInnerBlocks: (
			rootClientId: string,
			blocks: BlockInstanceAsObject[],
			updateSelection?: boolean,
			initialPosition?: 0 | -1 | null,
		) => void;
		updateBlockAttributes: <
			Attributes extends Record<string, unknown> = Record<string, unknown>,
		>(
			clientIds: string | string[],
			attributes: Partial<Attributes>,
			uniqueByBlock?: boolean,
		) => void;
	};
	const { hasChildren, innerBlocks, parentCarousel } = useSelect(
		(select) => {
			const { getBlock, getBlocks, getBlockParentsByBlockName } = select(
				blockEditorStore,
			) as {
				getBlock: (clientId: string) => BlockInstanceAsObject & {
					clientId: string;
					isValid: boolean;
					originalContent: string;
					validationIssues: unknown[];
				};
				getBlocks: (rootClientId?: string) => (BlockInstanceAsObject & {
					clientId: string;
					isValid: boolean;
					originalContent: string;
					validationIssues: unknown[];
				})[];
				getBlockParentsByBlockName: (
					clientId: string,
					blockName: string | string[],
				) => string[];
			};

			const parentCarouselClientId = getBlockParentsByBlockName(clientId, [
				"launchpad-blocks/carousel",
			])[0]!;
			const parentCarousel = getBlock(parentCarouselClientId);

			const innerBlocks = getBlocks(clientId);
			return {
				hasChildren: innerBlocks.length > 0,
				innerBlocks,
				parentCarousel,
			};
		},
		[clientId],
	);

	const blockProps = useBlockProps({
		className: aspectRatio !== "auto" ? "has-aspect-ratio" : "",
		style: {
			"--slide-aspect-ratio": aspectRatio,
		},
	});
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["launchpad-blocks/carousel-content-slide"],
		renderAppender:
			isInTemplateEditMode && innerBlocks.length > 0 ? () => null : undefined,
	});

	function preventSavingWhileEditingTemplate() {
		lockPostSaving(`templateEditingMode-${clientId}`);
		lockPostAutosaving(`templateEditingMode-${clientId}`);
		createNotice(
			"info",
			`Currently editing the template of the ${blockJson.title}. Save the template using the sidebar block settings of the ${blockJson.title} block to save the content.`,
			{
				id: "template-editing-mode",
				isDismissible: false,
			},
		).catch(() => {
			/* Do nothing */
		});
	}

	function enableSavingWhileEditingTemplate() {
		unlockPostSaving(`templateEditingMode-${clientId}`);
		unlockPostAutosaving(`templateEditingMode-${clientId}`);
		removeNotice("template-editing-mode").catch(() => {
			/* Do nothing */
		});
	}

	useEffect(() => {
		if (isInTemplateEditMode) {
			addFilter(
				"editor.preSavePost",
				"launchpadBlocks/carouselContentSlides/preventSaveInEditMode",
				() => {
					throw new Error(
						"You can't save the post while you're still editing the carousel template. Please save or discard the template first.",
					);
				},
			);
		} else {
			if (
				hasFilter(
					"editor.preSavePost",
					"launchpadBlocks/carouselContentSlides/preventSaveInEditMode",
				)
			) {
				removeFilter(
					"editor.preSavePost",
					"launchpadBlocks/carouselContentSlides/preventSaveInEditMode",
				);
			}
		}
	}, [isInTemplateEditMode]);

	const removeUnnecessaryAttributes = useCallback(
		(
			innerBlocks: (BlockInstanceAsObject & {
				clientId: string;
				isValid: boolean;
				originalContent: string;
				validationIssues: unknown[];
			})[],
		): BlockInstanceAsObject[] => {
			return innerBlocks.map((block) => ({
				name: block.name,
				attributes: block.attributes,
				innerBlocks: block.innerBlocks
					? removeUnnecessaryAttributes(
							block.innerBlocks as (BlockInstanceAsObject & {
								clientId: string;
								isValid: boolean;
								originalContent: string;
								validationIssues: unknown[];
							})[],
						)
					: [],
			}));
		},
		[],
	);

	const reducedInnerBlocks = removeUnnecessaryAttributes(innerBlocks);
	useEffect(() => {
		if (
			!objectArraysAreEqual(
				parentCarousel.attributes
					?.slides as CarouselInterpretedAttributes["slides"],
				reducedInnerBlocks,
			)
		) {
			updateBlockAttributes<CarouselInterpretedAttributes>(
				parentCarousel.clientId,
				{
					slides: reducedInnerBlocks,
				},
			);
		}
	}, [
		reducedInnerBlocks,
		parentCarousel,
		updateBlockAttributes,
		removeUnnecessaryAttributes,
	]);

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title="Template settings">
						<AspectRatioSelector
							ratioValue={aspectRatio}
							ratioOnChange={(newAspectRatio) => {
								setAttributes({ aspectRatio: newAspectRatio });
							}}
						/>
						<ToggleControl
							__nextHasNoMarginBottom
							checked={shouldLockChildSlidesToTemplate}
							label={"Lock slides to template"}
							onChange={(newChecked) => {
								setAttributes({ shouldLockChildSlidesToTemplate: newChecked });
							}}
						/>
						{isInTemplateEditMode ? (
							<Flex>
								<FlexItem>
									<Button
										type="button"
										variant="secondary"
										isDestructive
										onClick={() => {
											console.log({ tempInnerBlocksStorage });
											replaceInnerBlocks(
												clientId,
												createBlocksFromInnerBlocksTemplate(
													tempInnerBlocksStorage.map((blockObject) =>
														convertBlockObjectToArray(blockObject),
													),
												),
											);
											setAttributes({ isInTemplateEditMode: false });
											enableSavingWhileEditingTemplate();
										}}
									>
										Discard changes
									</Button>
								</FlexItem>
								<FlexItem>
									<Button
										type="button"
										variant="primary"
										onClick={() => {
											setAttributes({
												template: reducedInnerBlocks,
											});
											replaceInnerBlocks(
												clientId,
												createBlocksFromInnerBlocksTemplate(
													tempInnerBlocksStorage.map((blockObject) =>
														convertBlockObjectToArray(blockObject),
													),
												),
											);
											setAttributes({ isInTemplateEditMode: false });
											enableSavingWhileEditingTemplate();
										}}
									>
										Save template
									</Button>
								</FlexItem>
							</Flex>
						) : (
							<Button
								type="button"
								variant="primary"
								isDestructive
								onClick={() => {
									setIsShowingTemplateEditingWarning(true);
								}}
							>
								Edit template
							</Button>
						)}
					</PanelBody>
				</Panel>
			</InspectorControls>
			<ConfirmDialog
				isOpen={isShowingTemplateEditingWarning}
				cancelButtonText="No thank you"
				confirmButtonText="Yes please"
				onConfirm={() => {
					setIsShowingTemplateEditingWarning(false);
					preventSavingWhileEditingTemplate();
					setAttributes({ tempInnerBlocksStorage: reducedInnerBlocks });
					replaceInnerBlocks(
						clientId,
						createBlocksFromInnerBlocksTemplate(
							template.map((blockObject) =>
								convertBlockObjectToArray(blockObject),
							),
						),
					);
					setAttributes({ isInTemplateEditMode: true });
				}}
				onCancel={() => {
					setIsShowingTemplateEditingWarning(false);
				}}
			>
				WARNING: Editing the template may result in loss of content on the
				existing slides.
				<br />
				<br />
				If you need to keep the content, you can duplicate or copy this block
				before <br />
				you make any changes to ensure you don&apos;t lose any content,
				<br />
				then you can copy content over once you have your new template set up.
				<br />
				<br />
				<strong>Are you sure you want to proceed?</strong>
			</ConfirmDialog>

			{hasChildren ||
			hasDismissedVariationsSelector ||
			!isInTemplateEditMode ? (
				<ul {...innerBlocksProps}>{children}</ul>
			) : (
				<div {...innerBlocksProps}>
					<VariationSelect
						clientId={clientId}
						blockInfo={{
							name: blockJson.title,
							icon: <Icon isEditorMode={true} iconName="manual-post-select" />,
						}}
						variations={variations}
						allowSkip={true}
					/>
				</div>
			)}
		</>
	);
}
Edit.displayName = "CarouselContentSlidesEdit";
