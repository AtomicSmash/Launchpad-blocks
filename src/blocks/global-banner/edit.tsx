import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	store as blockEditorStore,
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { Panel, PanelBody, ToggleControl } from "@wordpress/components";
import { store as coreStore } from "@wordpress/core-data";
import { useDispatch, useSelect } from "@wordpress/data";
import { applyFilters } from "@wordpress/hooks";
import { useLayoutStyles } from "@launchpadBlocks/helpers.editor";
import { Icon } from "@launchpadBlocks/svgs";
import { supports } from "./supports";

export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const { isDismissible, layout, style } = attributes;
	const { className: layoutClassName, style: layoutStyle } = useLayoutStyles(
		layout,
		supports,
		style,
	);
	const blockProps = useBlockProps({
		className: layoutClassName,
		style: layoutStyle,
	});
	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		{
			className: "info-banner-inner-content",
		},
		{
			orientation: "horizontal",
			__unstableDisableLayoutClassNames: true,
			allowedBlocks: ["core/buttons", "core/button", "core/paragraph"],
			template: [
				[
					"core/paragraph",
					{
						placeholder: "Add some text here...",
						style: { layout: { selfStretch: "fill", flexSize: null } },
					},
				],
			],
			templateLock: false,
		},
	);

	/**
	 * Due to a known issue with innerBlocks template-lock: false,
	 * We must override the returned template validity to avoid
	 * editor warnings.
	 *
	 * @see https://github.com/WordPress/gutenberg/issues/11681
	 */
	const { setTemplateValidity } = useDispatch(blockEditorStore);
	if (setTemplateValidity) {
		setTemplateValidity(true).catch(() => {
			/* do nothing */
		});
	}

	const BannerDismissIcon = applyFilters(
		"launchpadBlocks.globalBannerDismissIcon",
		(props: { className?: string; isEditorMode: boolean }) => (
			<Icon iconName="menu-close-icon" {...props} />
		),
	) as (props: { className?: string; isEditorMode: boolean }) => JSX.Element;

	const siteURL = useSelect(
		(select) =>
			(
				select(coreStore) as unknown as {
					getSite: () => { url: string } | undefined;
				}
			).getSite()?.url,
		[],
	);
	const globalBannerLink = `${siteURL ?? ""}/wp-admin/themes.php?page=global-banner`;

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
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...blockProps}>
				<div {...innerBlocksProps}>
					{children}
					{isDismissible ? (
						<button className="dismiss-button">
							<BannerDismissIcon isEditorMode={true} />
						</button>
					) : null}
				</div>
			</div>
			<div className="global-banner-edit-instructions">
				<p>
					After saving your changes,{" "}
					<a href={globalBannerLink} target="_blank" rel="noreferrer">
						click here to select which banners appear globally.
					</a>
				</p>
				<p>
					You can select these banners at a later point in the WordPress
					backend, from the sidebar, under the &quot;Appearance&quot; menu in
					the &quot;Global Banner&quot; section.
				</p>
			</div>
		</>
	);
}
Edit.displayName = "GlobalBannerEdit";
