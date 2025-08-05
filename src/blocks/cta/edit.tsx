import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import type { LegacyRef } from "react";
import {
	useBlockProps,
	BlockControls,
	RichText,
	__experimentalLinkControl as LinkControl,
	InspectorControls,
	MediaPlaceholder,
	MediaReplaceFlow,
} from "@wordpress/block-editor";
import {
	BaseControl,
	Panel,
	PanelBody,
	Popover,
	ToggleControl,
	ToolbarButton,
	ToolbarGroup,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
	link as linkIcon,
	image as imageIcon,
	pullLeft as pullLeftIcon,
	pullRight as pullRightIcon,
} from "@wordpress/icons";
import { useState, useEffect, useRef } from "react";
import { NumberInput } from "../__components__/NumberInput";
import { AttachmentImage, HeadingLevelSelect } from "../helpers.editor";
import { attributes as definedAttributeOptions } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

type Media = {
	url: string;
	alt: string;
	id: number;
	link: string;
	caption: string;
	sizes: Record<
		string,
		{
			height: number;
			width: number;
			orientation: "portrait" | "landscape";
			url: string;
		}
	>;
	mime: string;
	subtype: string;
	type: string;
};

export function Edit({
	clientId,
	attributes,
	isSelected,
	setAttributes,
}: BlockEditProps) {
	const {
		shouldShowImage,
		imageId,
		imagePosition,
		headerElement,
		headerContent,
		textContent,
		buttons,
	} = attributes;
	const blockProps = useBlockProps({
		className: shouldShowImage ? `has-image has-image-${imagePosition}` : "",
	});

	const [selectedRichText, setSelectedRichText] = useState<
		"headerContent" | "textContent" | `buttonLabel${number}` | false
	>(false);
	const [shouldShowLinkPopover, setShouldShowLinkPopover] = useState<
		number | false
	>(false);

	const timeout = useRef<NodeJS.Timeout | undefined>();
	const [buttonsToShow, setButtonsToShow] = useState(buttons.length);

	useEffect(() => {
		if (!isSelected) {
			setShouldShowLinkPopover(false);
		}
	}, [isSelected]);

	useEffect(() => {
		clearTimeout(timeout.current);
		timeout.current = setTimeout(() => {
			if (buttons.length === buttonsToShow) {
				return;
			}
			if (buttons.length < buttonsToShow) {
				setAttributes({
					buttons: [
						...buttons,
						{
							id: 2,
							label: "",
							href: "",
							target: "_self",
						},
					],
				});
			}
			if (buttons.length > buttonsToShow) {
				setAttributes({
					buttons: [...buttons.slice(0, buttonsToShow)],
				});
			}
		}, 250);
	}, [buttons, buttonsToShow, setAttributes]);

	function updateImage(selectedImage: Media) {
		setAttributes({
			imageId: selectedImage.id,
		});
	}

	return (
		<>
			{shouldShowImage ? (
				<BlockControls group="other">
					<ToolbarButton
						icon={pullLeftIcon}
						title={__("Show media on left", "launchpad-blocks")}
						isActive={imagePosition === "left"}
						onClick={() =>
							setAttributes({
								imagePosition: "left",
							})
						}
					/>
					<ToolbarButton
						icon={pullRightIcon}
						title={__("Show media on right", "launchpad-blocks")}
						isActive={imagePosition === "right"}
						onClick={() =>
							setAttributes({
								imagePosition: "right",
							})
						}
					/>
					<MediaReplaceFlow
						allowedTypes={["image"]}
						accept="image/*"
						onSelect={updateImage}
						name={
							imageId === 0
								? __("Add", "launchpad-blocks")
								: __("Replace", "launchpad-blocks")
						}
						mediaId={imageId}
						addToGallery={false}
					/>
				</BlockControls>
			) : null}
			<BlockControls>
				{selectedRichText === "headerContent" ? (
					<ToolbarGroup>
						<HeadingLevelSelect
							levelOptions={definedAttributeOptions.headerElement.enum}
							selectedLevel={headerElement}
							setSelectedHeadingLevel={(newHeadingLevel) => {
								setAttributes({ headerElement: newHeadingLevel });
							}}
						/>
					</ToolbarGroup>
				) : null}
				{buttons.map(({ id }) => {
					return selectedRichText === `buttonLabel${id}` ? (
						<ToolbarGroup key={id}>
							<ToolbarButton
								icon={linkIcon}
								label={__("Link")}
								isPressed={shouldShowLinkPopover === id}
								onClick={() => {
									if (shouldShowLinkPopover === id) {
										setShouldShowLinkPopover(false);
									} else {
										setShouldShowLinkPopover(id);
									}
								}}
							/>
						</ToolbarGroup>
					) : null;
				})}
			</BlockControls>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<ToggleControl
							checked={shouldShowImage}
							label={"Should this CTA have an image?"}
							onChange={(newChecked) => {
								setAttributes({ shouldShowImage: newChecked });
							}}
						/>
						<BaseControl
							id="buttons-to-show-number-input"
							label="Buttons to show"
							help="Select the number of buttons to display in the CTA."
							__nextHasNoMarginBottom
						>
							<NumberInput
								min={1}
								max={2}
								defaultValue={buttonsToShow}
								onValidation={(newNumber) => {
									setButtonsToShow(newNumber);
								}}
								required
								allowMetaOrCtrlClick={false}
								allowShiftClick={false}
								allowAltClick={false}
							/>
						</BaseControl>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...blockProps}>
				{shouldShowImage && imagePosition === "left" ? (
					<CTAImageEdit imageId={imageId} updateImage={updateImage} />
				) : null}
				<div className="wp-block-launchpad-blocks-cta-inner-content">
					<RichText
						tagName={headerElement}
						placeholder="Add a heading for the cta..."
						value={headerContent}
						identifier="headerContent"
						className="cta-heading"
						onChange={(newHeaderContent) => {
							setAttributes({ headerContent: newHeaderContent });
						}}
						onFocus={() => {
							setSelectedRichText("headerContent");
						}}
					/>
					<RichText
						tagName="p"
						placeholder="Add text for the notice..."
						value={textContent}
						identifier="textContent"
						className="cta-subtitle"
						onChange={(newTextContent) => {
							setAttributes({ textContent: newTextContent });
						}}
						onFocus={() => {
							setSelectedRichText("textContent");
						}}
					/>
					<div className="cta-button-group">
						{buttons.map((button) => {
							return (
								<CTAButtonEdit
									key={button.id}
									{...button}
									clientId={clientId}
									attributes={attributes}
									setAttributes={setAttributes}
									shouldShowLinkPopover={shouldShowLinkPopover}
									setShouldShowLinkPopover={setShouldShowLinkPopover}
									setSelectedRichText={setSelectedRichText}
								/>
							);
						})}
					</div>
				</div>
				{shouldShowImage && imagePosition === "right" ? (
					<CTAImageEdit imageId={imageId} updateImage={updateImage} />
				) : null}
			</div>
		</>
	);
}
Edit.displayName = "CTAEdit";

function CTAImageEdit({
	imageId,
	updateImage,
}: {
	imageId: number;
	updateImage: (image: Media) => void;
}) {
	return (
		<figure className="wp-block-launchpad-blocks-cta-image">
			{imageId !== 0 ? (
				<AttachmentImage imageId={imageId} />
			) : (
				<MediaPlaceholder
					icon={imageIcon}
					labels={{
						title: __("Media area", "launchpad-blocks"),
						instructions: __(
							"Drag and drop an image, upload, or choose from your library.",
							"launchpad-blocks",
						),
					}}
					onSelect={updateImage}
					accept="image/*"
					allowedTypes={["image"]}
					addToGallery={false}
				/>
			)}
		</figure>
	);
}

function CTAButtonEdit({
	label,
	id,
	href,
	target,
	clientId,
	attributes,
	setAttributes,
	shouldShowLinkPopover,
	setShouldShowLinkPopover,
	setSelectedRichText,
}: InterpretedAttributes["buttons"][number] & {
	clientId: BlockEditProps["clientId"];
	attributes: BlockEditProps["attributes"];
	setAttributes: BlockEditProps["setAttributes"];
	shouldShowLinkPopover: number | false;
	setShouldShowLinkPopover: React.Dispatch<
		React.SetStateAction<false | number>
	>;
	setSelectedRichText: React.Dispatch<
		React.SetStateAction<
			false | "headerContent" | "textContent" | `buttonLabel${number}`
		>
	>;
}) {
	const { buttons } = attributes;
	const anchor = useRef<HTMLAnchorElement>(null);

	return (
		<>
			<RichText
				ref={anchor as unknown as LegacyRef<"a">}
				tagName="a"
				placeholder="Add text for the button..."
				value={label}
				className="cta-button"
				allowedFormats={[
					"core/bold",
					"core/code",
					"core/italic",
					"core/keyboard",
					"core/strikethrough",
					"core/subscript",
					"core/superscript",
					"core/underline",
				]}
				onChange={(newButtonLabel) => {
					setAttributes({
						buttons: buttons.map((button) => {
							if (button.id === id) {
								return { ...button, label: newButtonLabel };
							}
							return button;
						}),
					});
				}}
				onFocus={() => {
					setSelectedRichText(`buttonLabel${id}`);
					if (shouldShowLinkPopover !== false) {
						setShouldShowLinkPopover(id);
					}
				}}
			/>
			{shouldShowLinkPopover === id ? (
				<Popover
					key={`${clientId}-link-edit`}
					position={"bottom"}
					noArrow={false}
					shift={true}
					offset={10}
					anchor={anchor.current}
				>
					<LinkControl
						value={{
							title: label,
							url: href,
							opensInNewTab: target === "_blank",
						}}
						showInitialSuggestions
						onChange={(nextValue) => {
							setAttributes({
								buttons: buttons.map((button) => {
									if (button.id === id) {
										return {
											...button,
											href: nextValue.url,
											label: nextValue.title ?? button.label,
											target: nextValue.opensInNewTab ? "_blank" : "_self",
										};
									}
									return button;
								}),
							});
							setShouldShowLinkPopover(false);
						}}
					/>
				</Popover>
			) : null}
		</>
	);
}
