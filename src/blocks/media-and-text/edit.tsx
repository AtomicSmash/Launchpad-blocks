import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	BlockControls,
	MediaPlaceholder,
	MediaReplaceFlow,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
	background as iconBackground,
	image as iconImage,
	mediaAndText as iconMediaAndText,
	pullLeft as iconPullLeft,
	pullRight as iconPullRight,
} from "@wordpress/icons";
import {
	AttachmentImage,
	useHasChildren,
	VariationSelect,
} from "@launchpadBlocks/helpers.editor";
import { Icon } from "@launchpadBlocks/svgs";
import blockJson from "./block.json";
import { variations } from "./variations";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, clientId, setAttributes }: BlockEditProps) {
	const {
		mediaPosition,
		imageId,
		shouldBreakOutMedia,
		hasBackground,
		shouldChildBlocksBeLocked,
	} = attributes;
	const blockProps = useBlockProps({
		className: `alignfull${hasBackground ? " has-background" : ""}${shouldBreakOutMedia ? " is-breakout is-breakout-" + mediaPosition : ""}`,
	});
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		templateLock: shouldChildBlocksBeLocked ? "contentOnly" : false,
	});
	const hasChildren = useHasChildren(clientId);

	function updateImage(selectedImage: {
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
	}) {
		setAttributes({
			imageId: selectedImage.id,
		});
	}

	if (!hasChildren) {
		return (
			<div {...blockProps}>
				<VariationSelect
					clientId={clientId}
					blockInfo={{
						name: blockJson.title,
						icon: iconMediaAndText,
					}}
					variations={variations}
					allowSkip={false}
				/>
			</div>
		);
	}

	return (
		<>
			<BlockControls group="other">
				<ToolbarButton
					icon={iconPullLeft}
					title={__("Show media on left", "launchpad-blocks")}
					isActive={mediaPosition === "left"}
					onClick={() =>
						setAttributes({
							mediaPosition: "left",
						})
					}
				/>
				<ToolbarButton
					icon={iconPullRight}
					title={__("Show media on right", "launchpad-blocks")}
					isActive={mediaPosition === "right"}
					onClick={() =>
						setAttributes({
							mediaPosition: "right",
						})
					}
				/>
				<ToolbarButton
					icon={
						<Icon
							isEditorMode={true}
							iconName="break-image-out"
							transform={mediaPosition === "left" ? "rotate(180)" : undefined}
						/>
					}
					title={__("Break media out of container", "launchpad-blocks")}
					isActive={shouldBreakOutMedia}
					onClick={() =>
						setAttributes({
							shouldBreakOutMedia: !shouldBreakOutMedia,
						})
					}
				/>
				<ToolbarButton
					icon={iconBackground}
					title={__("Add background to block", "launchpad-blocks")}
					isActive={hasBackground}
					onClick={() =>
						setAttributes({
							hasBackground: !hasBackground,
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
					addToGallery={imageId !== 0}
				/>
			</BlockControls>
			<div {...innerBlocksProps}>
				<div className="wp-block-launchpad-blocks-media-and-text__wrapper">
					{mediaPosition === "right" ? (
						<div className="wp-block-launchpad-blocks-media-and-text__content">
							{children}
						</div>
					) : null}
					<figure>
						{imageId !== 0 ? (
							<AttachmentImage
								imageId={imageId}
								className="wp-block-launchpad-blocks-media-and-text__image"
							/>
						) : (
							<MediaPlaceholder
								icon={iconImage}
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
					{mediaPosition === "left" ? (
						<div className="wp-block-launchpad-blocks-media-and-text__content">
							{children}
						</div>
					) : null}
				</div>
			</div>
		</>
	);
}
Edit.displayName = "MediaAndTextEdit";
