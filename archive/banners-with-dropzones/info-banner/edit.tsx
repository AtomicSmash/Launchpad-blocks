import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import { useLayoutStyles } from "@blocks/helpers.editor";
import { Icon } from "@blocks/svgs";
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	TextControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { supports } from "./supports";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const { bannerId, text, isDismissible, layout, style } = attributes;
	const { className: layoutClassName, style: layoutStyle } = useLayoutStyles(
		supports,
		layout,
		style,
	);
	const blockProps = useBlockProps({
		className: layoutClassName,
		style: layoutStyle,
	});
	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title="Banner settings">
						<ToggleControl
							checked={isDismissible}
							label={"Should the banner be dismissible?"}
							onChange={(newChecked) => {
								setAttributes({ isDismissible: newChecked });
							}}
						/>
						<TextControl
							label="Unique banner identifier"
							help={
								<>
									<span>
										Must be unique across the whole site, including past
										banners. If it is not unique, some users may not see the
										banner. This id is used for the local storage value that
										saves whether the banner is dismissed or not.
									</span>
								</>
							}
							value={bannerId}
							onChange={(newBannerId) => {
								setAttributes({
									bannerId: newBannerId,
								});
							}}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...blockProps}>
				<div className="info-banner-inner-content">
					<RichText
						tagName="p"
						placeholder="Add text for the notice..."
						value={text}
						onChange={(newText) => {
							setAttributes({ text: newText });
						}}
					/>
					{isDismissible ? (
						<button className="dismiss-button">
							<Icon iconName="menu-close-icon" isEditorMode={true} />
						</button>
					) : null}
				</div>
			</div>
		</>
	);
}
Edit.displayName = "InfoBannerEdit";
