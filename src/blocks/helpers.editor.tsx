import type {
	BlockAttributes,
	BlockSupports,
	CreateBlockEditProps,
	InterpretAttributes,
	BlockVariations,
	BlockInstanceAsObject,
	BlockInstanceAsArray,
} from "@atomicsmash/blocks-helpers";
import type { BlockInstance as WordPressBlockInstance } from "@wordpress/blocks";
import type { Taxonomy } from "@wordpress/core-data";
import type {
	ComponentProps,
	ComponentPropsWithoutRef,
	CSSProperties,
} from "react";
import {
	useSettings,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import {
	registerBlockCollection,
	createBlocksFromInnerBlocksTemplate,
} from "@wordpress/blocks";
import {
	ColorIndicator,
	ColorPalette,
	// spellchecker: disable-next-line
	Dashicon as DashIcon,
	Dropdown,
	__experimentalDropdownContentWrapper as DropdownContentWrapper,
	Button,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
	SelectControl,
	TextControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	ToolbarDropdownMenu,
	Placeholder,
} from "@wordpress/components";
import { store as coreStore } from "@wordpress/core-data";
import { useSelect, select, useDispatch } from "@wordpress/data";
import { __, _x } from "@wordpress/i18n";
import {
	headingLevel2,
	headingLevel3,
	headingLevel4,
	headingLevel5,
	headingLevel6,
	paragraph,
} from "@wordpress/icons";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { ASCircleLogo } from "@launchpadBlocks/svgs";

export type CoreStoreType = {
	getEntityRecord: <EntityRecord>(
		kind: string,
		name: string,
		key?: string | number,
		query?: Record<string, unknown>,
	) => EntityRecord | undefined;
	getEntityRecords: <EntityRecord>(
		kind: string,
		name: string,
		query?: Record<string, unknown>,
	) => EntityRecord[] | null;
};

export type NoticesStoreType = {
	createNotice: (
		status: string | undefined,
		content: string,
		options?: {
			context?: string;
			id?: string;
			isDismissible?: boolean;
			type?: string;
			speak?: boolean;
			actions?: { label: string; url?: string; onClick?: () => void }[];
			icon?: string;
			explicitDismiss?: boolean;
			onDismiss?: () => void;
		},
	) => Promise<void>;
	removeNotice: (id: string, context?: string) => Promise<void>;
};

export function registerLaunchpadBlocksCollection() {
	registerBlockCollection("launchpad-blocks", {
		title: "Launchpad blocks",
		icon: ASCircleLogo,
	});
}

function translateBlockGapProperty(
	value: string | { left: string } | { top: string } | undefined,
	direction: "both" | "horizontal" | "vertical" | "none",
): string | undefined {
	if (value === undefined) {
		return value;
	}

	let stringValue: string;
	if (direction === "both") {
		stringValue = value as string;
	} else if (direction === "horizontal") {
		stringValue = (value as { left: string }).left;
	} else if (direction === "vertical") {
		stringValue = (value as { top: string }).top;
	} else {
		return undefined;
	}
	if (!stringValue.startsWith("var:")) {
		return stringValue;
	}
	const valueParts = stringValue.replace("var:", "").split("|");
	return `var(--wp--${valueParts.join("--")})`;
}

/**
 * Get layout className and style attributes
 *
 * Theoretically WordPress should be generating these for us,
 * but it seems to be buggy in the edit function in some cases,
 * so this works as a good fallback if it's needed.
 * @param layout   The layout attribute of the block.
 * @param supports The supports attribute of the block.
 * @param style    The style attribute of the block.
 * @return An object containing a className string and a style attribute.
 */
export function useLayoutStyles<const Supports extends BlockSupports>(
	layout: InterpretAttributes<Supports, Record<string, never>>["layout"],
	supports: Supports,
	style: InterpretAttributes<Supports, Record<string, never>>["style"],
): {
	className: string;
	style: CSSProperties;
} {
	const blockGap = supports.spacing?.blockGap;

	let gapDirection = "none";

	if (blockGap === true) {
		gapDirection = "both";
	} else if (Array.isArray(blockGap)) {
		const hasHorizontal = blockGap.includes("horizontal");
		const hasVertical = blockGap.includes("vertical");

		if (hasHorizontal && hasVertical) {
			gapDirection = "both";
		} else if (hasHorizontal) {
			gapDirection = "horizontal";
		} else if (hasVertical) {
			gapDirection = "vertical";
		}
	}

	const blockGapStyle = {
		columnGap:
			gapDirection === "both" || gapDirection === "horizontal"
				? translateBlockGapProperty(style?.spacing?.blockGap, gapDirection)
				: undefined,
		rowGap:
			gapDirection === "both" || gapDirection === "vertical"
				? translateBlockGapProperty(style?.spacing?.blockGap, gapDirection)
				: undefined,
	};
	if (
		layout === undefined &&
		typeof supports.layout === "object" &&
		supports?.layout?.default
	) {
		// @ts-expect-error -- This is actually fine
		layout = supports.layout.default;
	}
	if (!layout) {
		return {
			className: "",
			style: blockGapStyle,
		};
	}
	switch (layout.type) {
		case "grid": {
			// Determine gridTemplateColumns based on the presence of minimumColumnWidth and columnCount
			let gridTemplateColumns = "";

			if (layout.minimumColumnWidth) {
				gridTemplateColumns = `repeat(auto-fill, minmax(min(${layout.minimumColumnWidth}, 100%), 1fr))`;
			} else if (layout.columnCount) {
				gridTemplateColumns = `repeat(${layout.columnCount}, minmax(0, 1fr))`;
			}

			// Build the className based on columnCount
			const className = `is-layout-${layout.type}${layout.columnCount ? ` columns-${layout.columnCount}` : ""}`;

			// Return the final object with className and style
			return {
				className,
				style: {
					gridTemplateColumns,
					...blockGapStyle,
				},
			};
		}
		case "flex": {
			return {
				className: `is-layout-${layout.type} is-${layout.orientation ?? "horizontal"}${layout.justifyContent ? ` is-content-justification-${layout.justifyContent}` : ""}${layout.flexWrap === "nowrap" ? " is-nowrap" : ""}`,
				style: {
					flexDirection: layout.orientation === "vertical" ? "column" : "row",
					alignItems:
						layout.orientation === "vertical"
							? layout.justifyContent === "left" ||
								layout.justifyContent === undefined
								? "flex-start"
								: layout.justifyContent === "right"
									? "flex-end"
									: layout.justifyContent
							: layout.verticalAlignment === "top"
								? "flex-start"
								: layout.verticalAlignment === "bottom"
									? "flex-end"
									: layout.verticalAlignment,
					justifyContent:
						layout.orientation === "vertical"
							? layout.verticalAlignment === "top"
								? "flex-start"
								: layout.verticalAlignment === "bottom"
									? "flex-end"
									: (layout.verticalAlignment ?? "center")
							: layout.justifyContent === "left"
								? "flex-start"
								: layout.justifyContent === "right"
									? "flex-end"
									: layout.justifyContent,
					flexWrap: layout.flexWrap ?? "wrap",
					...blockGapStyle,
				},
			};
		}
		case "constrained": {
			return {
				className: `is-layout-${layout.type}${layout.justifyContent ? ` is-content-justification-${layout.justifyContent}` : ""}`,
				style: { ...blockGapStyle },
			};
		}
		default: {
			return {
				className: `is-layout-${layout.type}`,
				style: { ...blockGapStyle },
			};
		}
	}
}

type BlockInstance = {
	clientId: string;
	name: string;
	attributes: Record<string, unknown>;
	innerBlocks: BlockInstance[];
	isValid: boolean;
	originalContent: string;
	validationIssues: unknown[];
};

export function getInnerBlocksByName(
	blocks: BlockInstance[],
	blockName: string,
) {
	return blocks.reduce((reducedBlocks, currentBlock) => {
		if (currentBlock.name === blockName) {
			reducedBlocks.push(currentBlock);
		} else if (currentBlock.innerBlocks) {
			const matchingInnerBlocks = getInnerBlocksByName(
				currentBlock.innerBlocks,
				blockName,
			);
			if (matchingInnerBlocks) {
				reducedBlocks.push(...matchingInnerBlocks);
			}
		}
		return reducedBlocks;
	}, [] as BlockInstance[]);
}

type PostType = {
	capabilities: Record<string, string>;
	description: string;
	has_archive: boolean;
	hierarchical: boolean;
	icon: string | null;
	labels: Record<string, string | null>;
	name: string;
	rest_base: string;
	rest_namespace: string;
	slug: string;
	supports: Record<string, boolean>;
	taxonomies: string[];
	viewable: boolean;
	visibility: {
		public: boolean;
		publicly_queryable: boolean;
		show_admin_column: boolean;
		show_in_nav_menus: boolean;
		show_in_quick_edit: boolean;
		show_ui: boolean;
	};
	_links: {
		collection: { href: string };
		curies: { name: string; href: string; templated: boolean };
		"wp:items": { href: string };
	};
};
export type TaxonomyTerm = {
	count: number;
	description: string;
	id: number;
	link: string;
	meta: never[];
	name: string;
	parent: number;
	slug: string;
	taxonomy: string;
	_links: {
		about: { href: string };
		collection: { href: string };
		curies: { name: string; href: string; templated: boolean };
		self: { href: string };
		"wp:post_type": { href: string };
	};
};

/**
 * UsePostTypes hook
 */
export const usePostTypes = () => {
	const query1 = useMemo(
		() => ({
			per_page: -1,
		}),
		[],
	);
	const query2 = useMemo(
		() => ({ per_page: -1, orderby: "name", context: "edit" }),
		[],
	);
	// This object must be created outside of the useSelect to avoid re-render issues.
	const taxonomyTerms = useMemo(
		() => ({}) as Record<string, TaxonomyTerm[] | null>,
		[],
	);
	const { postTypes, taxonomies } = useSelect(
		(select) => {
			const { getEntityRecords } = select(coreStore) as CoreStoreType;
			const postTypes = getEntityRecords<PostType>("root", "postType", query1);
			const taxonomies = getEntityRecords<Taxonomy<"edit">>(
				"root",
				"taxonomy",
				query2,
			);
			if (!taxonomies) {
				return { postTypes, taxonomies };
			}
			for (const taxonomy of taxonomies) {
				taxonomyTerms[taxonomy.slug] = getEntityRecords<TaxonomyTerm>(
					"taxonomy",
					taxonomy.slug,
				);
			}
			return { postTypes, taxonomies };
		},
		[query1, query2, taxonomyTerms],
	);

	const excludedPostTypes = ["attachment"];
	const excludedTaxonomies: string[] = [];
	const filteredPostTypes = postTypes?.filter(
		({ viewable, slug }) => viewable && !excludedPostTypes.includes(slug),
	);
	if (!filteredPostTypes || filteredPostTypes.length === 0) {
		return { postTypes: filteredPostTypes, taxonomies: undefined };
	}
	const mappedTaxonomies: Record<
		PostType["slug"],
		(Taxonomy<"edit"> & { terms: TaxonomyTerm[] | null })[] | undefined
	> = {};
	for (const postType of filteredPostTypes) {
		const filteredTaxonomies = taxonomies?.filter(
			({ types, slug }) =>
				types.includes(postType.slug) && !excludedTaxonomies.includes(slug),
		);
		if (!filteredTaxonomies) continue;
		mappedTaxonomies[postType.slug] = filteredTaxonomies.map((taxonomy) => {
			const filteredTaxonomyTerms = taxonomyTerms?.[taxonomy.slug] ?? null;
			return { ...taxonomy, terms: filteredTaxonomyTerms };
		});
	}
	return {
		filteredPostTypes: filteredPostTypes,
		mappedTaxonomies:
			mappedTaxonomies === undefined ||
			Object.values(mappedTaxonomies).length === 0
				? undefined
				: mappedTaxonomies,
	};
};

/**
 * Custom multiple select list component
 */
export function CustomMultipleSelectList<
	ListItem extends {
		id: string;
		title: string;
		itemLabel?: string;
		isSelected: boolean;
	},
>({
	list,
	containerClassName,
	renderItem,
}: {
	list: ListItem[];
	containerClassName?: string;
	renderItem: ({
		listItem,
		buttonProps,
	}: {
		listItem: ListItem;
		buttonProps: ComponentPropsWithoutRef<"button">;
	}) => React.ReactNode;
}) {
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: `.draggable-list {
	border-top: 1px solid #d7d7d7;
	display: flex;
	flex-direction: column;
}

.draggable-list-item {
	align-items: center;
	border-bottom: 1px solid #d7d7d7;
	color: #6a6a6a;
	display: flex;
	padding: 0.5rem 0;
	position: relative;
	user-select: none;
}

.draggable-list-item-content {
	align-items: center;
	background: #f5f5f6;
	border-radius: 3px;
	display: flex;
	flex: 1;
	padding: 0.5rem;
}

.draggable-list-item-text {
	color: #1e1e1e;
	flex: 1;
}

.draggable-list-item .menu-icon {
	flex: 0 0 2rem;
	font-size: 1.5rem;
	height: 2rem;
	line-height: 1;
	padding: 0.25rem;
	width: 2rem;
}

.draggable-list-item .drag-handle,
.draggable-list-item .remove-button {
	flex: 0 0 2rem;
	height: 2.5rem;
	line-height: 0;
	padding: 0.5rem;
}

.draggable-list-item .drag-handle {
	cursor: grab;
}

.draggable-list-item .drag-handle:hover {
	background: #fafafb;
}

.draggable-list-item .remove-button {
	background: none;
	border: none;
	color: inherit;
	cursor: pointer;
}

.draggable-list-item .remove-button:hover {
	color: #da2121;
}

.draggable-list-item .drag-handle svg {
	height: 1.5rem;
	object-fit: cover;
	width: 1rem;
}

.draggable-list-item .remove-button svg {
	height: 1rem;
	object-fit: cover;
	width: 1rem;
}

.draggable-list-item .drag-handle:active {
	cursor: grabbing;
}

.draggable-list-item.being-dragged {
	background: #eee;
	color: #3d3d3d;
	opacity: 0.5;
}

.drag-zone-top,
.drag-zone-bottom {
	display: none;
	height: 50%;
	position: absolute;
	width: 100%;
}

.drag-zone-top {
	top: 0;
}

.drag-zone-bottom {
	bottom: 0;
}

.is-dragging .drag-zone-top,
.is-dragging .drag-zone-bottom {
	display: block;
}

.draggable-list-item:first-child .drag-zone-top {
	height: 150%;
	top: -100%;
}

.draggable-list-item:last-child .drag-zone-bottom {
	bottom: -100%;
	height: 150%;
}

.custom-multiple-select-list-item .menu-icon {
	color: #707070;
}

.custom-multiple-select-list-item.is-selected .menu-icon {
	color: currentcolor;
}

.custom-multiple-select-list-item .chip,
.draggable-list-item .chip {
	background: #cdcdcd;
	display: inline-block;
	font-weight: 700;
	padding: 0.25rem;
}

.custom-multiple-select-list {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	max-height: 15rem;
	overflow-y: scroll;
}

.custom-multiple-select-list-item {
	align-items: center;
	background-color: #f5f5f6;
	border: 1px solid #d7d7d7;
	border-radius: 3px;
	box-shadow: 0 3px 4px rgb(0 0 0 / 7%);
	color: #1e1e1e;
	cursor: pointer;
	display: flex;
	font-size: 13px;
	gap: 0.5rem;
	line-height: 16px;
	margin-right: 0.25rem;
	padding: 0.5rem;
	width: calc(100% - 0.25rem);
}

.custom-multiple-select-list-item.is-selected {
	color: #337bb5;
}

.custom-multiple-select-list-item-label {
	flex: 1;
	text-align: left;
}`,
				}}
			></style>
			<section
				className={`custom-multiple-select-list${
					containerClassName !== undefined && containerClassName !== ""
						? ` ${containerClassName}`
						: ""
				}`}
			>
				{list.map((listItem) => {
					return renderItem({
						listItem,
						buttonProps: {
							type: "button",
							className: `custom-multiple-select-list-item${listItem.isSelected ? " is-selected" : ""}`,
						},
					});
				})}
			</section>
		</>
	);
}

function isSVGData(string: string): string is `data:image/svg+xml;${string}` {
	return 0 === string.indexOf("data:image/svg+xml;");
}
function isSRCLink(
	string: string,
): string is `https://${string}` | `http://${string}` {
	return 0 === string.indexOf("https://") || 0 === string.indexOf("http://");
}
function isDashIcon(
	string: string,
): string is `dashicons-${ComponentPropsWithoutRef<typeof DashIcon>["icon"]}` {
	return 0 === string.indexOf("dashicons-");
}

export function WPMenuIcon({
	iconString,
}: {
	iconString:
		| undefined
		| null
		| "none"
		| "div"
		| `data:image/svg+xml;${string}`
		| `https://${string}`
		| `http://${string}`
		| `dashicons-${ComponentPropsWithoutRef<typeof DashIcon>["icon"]}`
		| (string & Record<never, never>); // Allow strings and autocomplete
}) {
	if (typeof iconString !== "string") {
		return null;
	}
	if (iconString === "none" || iconString === "div") {
		return (
			<div className="menu-icon" aria-hidden="true">
				<br />
			</div>
		);
	}
	if (isSVGData(iconString)) {
		return (
			<div
				className="menu-icon svg"
				style={{ backgroundImage: `url('${iconString}')` }}
				aria-hidden="true"
			>
				<br />
			</div>
		);
	}
	// spellchecker: disable-next-line
	if (isSRCLink(iconString)) {
		return <img src={new URL(iconString).toString()} alt="" />;
	}
	if (isDashIcon(iconString)) {
		const dashIconName = iconString.replace(
			"dashicons-",
			"",
		) as ComponentPropsWithoutRef<typeof DashIcon>["icon"];
		return <DashIcon icon={dashIconName} className="menu-icon" />;
	}
	throw new Error("The icon string provided is not any of the valid formats.");
}

export const orderByValues = {
	author: "Author Id",
	date: "Date",
	id: "Id",
	include: "Included posts by Id",
	modified: "Date Modified",
	parent: "Parent by Id",
	relevance: "Relevance",
	slug: "Post slug",
	include_slugs: "Included posts by slug",
	title: "Title",
} as const;
export type OrderByOptions = keyof typeof orderByValues;

type Colours = { name: string; slug: string; color: string }[];
export function ColourSelectControl<
	const Supports extends BlockSupports,
	const Attributes extends BlockAttributes,
>({
	colours,
	attributesDefinition,
	attributes,
	setAttributes,
}: {
	colours: { attributeName: keyof Attributes; label: string }[];
	attributesDefinition: Attributes;
	attributes: InterpretAttributes<Supports, Attributes>;
	setAttributes: CreateBlockEditProps<
		InterpretAttributes<Supports, Attributes>
	>["setAttributes"];
}) {
	return (
		<ToolsPanel
			label={__("Custom colours", "launchpad")}
			resetAll={(resetAllFilters) => {
				if (!resetAllFilters) {
					return;
				}
				for (const resetAllFilter of resetAllFilters) {
					resetAllFilter();
				}
			}}
		>
			<div
				className="color-block-support-panel__inner-wrapper"
				style={{ gridColumn: "1 / -1" }}
			>
				{colours.map((colour) => {
					return (
						<SingleColourPickControl
							key={colour.attributeName as string}
							colour={colour}
							attributesDefinition={attributesDefinition}
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					);
				})}
			</div>
		</ToolsPanel>
	);
}

function SingleColourPickControl<
	const Supports extends BlockSupports,
	const Attributes extends BlockAttributes,
>({
	colour,
	attributesDefinition,
	attributes,
	setAttributes,
}: {
	colour: { attributeName: keyof Attributes; label: string };
	attributesDefinition: Attributes;
	attributes: InterpretAttributes<Supports, Attributes>;
	setAttributes: CreateBlockEditProps<
		InterpretAttributes<Supports, Attributes>
	>["setAttributes"];
}) {
	const [
		userPalette,
		themePalette,
		defaultPalette,
		shouldShowDefaultPalette,
		shouldAllowCustomColours,
	] = useSettings(
		"color.palette.custom",
		"color.palette.theme",
		"color.palette.default",
		"color.defaultPalette",
		"color.custom",
	) as [
		Colours | undefined,
		Colours | undefined,
		Colours | undefined,
		boolean,
		boolean,
	];
	const hasValue = () =>
		attributesDefinition[colour.attributeName]?.default !==
		attributes[colour.attributeName];
	const resetValue = () => {
		// @ts-expect-error -- We can't know the individual attribute types here.
		setAttributes({
			[colour.attributeName]:
				attributesDefinition[colour.attributeName]?.default ?? undefined,
		});
	};
	const colorDropdownButtonRef = useRef<HTMLButtonElement>(null);
	return (
		<ToolsPanelItem
			className="block-editor-tools-panel-color-gradient-settings__item"
			style={{ marginBlockStart: "0" }}
			resetAllFilter={resetValue}
			key={colour.attributeName as string}
			hasValue={hasValue}
			onDeselect={resetValue}
			label={colour.label}
			isShownByDefault
		>
			<Dropdown
				className="block-editor-tools-panel-color-gradient-settings__dropdown"
				popoverProps={{
					placement: "left-start",
					offset: 36,
					shift: true,
				}}
				renderToggle={({ isOpen, onToggle }) => {
					return (
						<>
							<Button
								ref={colorDropdownButtonRef}
								__next40pxDefaultSize
								onClick={onToggle}
								aria-expanded={isOpen}
								className={`block-editor-panel-color-gradient-settings__dropdown${isOpen ? " is-open" : ""}`}
							>
								<div
									style={{
										display: "flex",
										justifyContent: "flex-start",
										alignItems: "center",
										gap: "8px",
									}}
								>
									<ColorIndicator
										colorValue={attributes[colour.attributeName] as string}
									/>{" "}
									<span>{colour.label}</span>
								</div>
							</Button>
						</>
					);
				}}
				renderContent={() => {
					return (
						<DropdownContentWrapper paddingSize="none">
							<div className="block-editor-panel-color-gradient-settings__dropdown-content">
								<div className="block-editor-color-gradient-control__panel">
									<ColorPalette
										colors={[
											...(userPalette && userPalette?.length > 0
												? [
														{
															name: "User",
															colors: userPalette,
														},
													]
												: []),
											...(themePalette && themePalette?.length > 0
												? [
														{
															name: "Theme",
															colors: themePalette,
														},
													]
												: []),
											...(shouldShowDefaultPalette &&
											defaultPalette &&
											defaultPalette.length > 0
												? [
														{
															name: "Default",
															colors: defaultPalette,
														},
													]
												: []),
										]}
										value={
											attributes[colour.attributeName] as string | undefined
										}
										onChange={(newColour) => {
											// @ts-expect-error -- We can't know the individual attribute types here.
											setAttributes({
												[colour.attributeName]: newColour,
											});
										}}
										disableCustomColors={!shouldAllowCustomColours}
									/>
								</div>
							</div>
						</DropdownContentWrapper>
					);
				}}
			/>
		</ToolsPanelItem>
	);
}

export function AspectRatioSelector({
	ratioValue,
	ratioOnChange,
	imageFitValue,
	imageFitOnChange,
}: {
	ratioValue: string;
	ratioOnChange: (newAspectRatio: string) => void;
	imageFitValue?: "contain" | "cover";
	imageFitOnChange?: (newImageFitValue: "contain" | "cover") => void;
}) {
	const [defaultRatios, themeRatios, shouldShowDefaultRatios] = useSettings(
		"dimensions.aspectRatios.default",
		"dimensions.aspectRatios.theme",
		"dimensions.defaultAspectRatios",
	) as [
		{ name: string; slug: string; ratio: string }[] | undefined,
		{ name: string; slug: string; ratio: string }[] | undefined,
		boolean,
	];

	const themeOptions =
		themeRatios?.map(({ name, ratio }) => ({
			label: name,
			value: ratio,
		})) ?? [];

	const defaultOptions =
		defaultRatios?.map(({ name, ratio }) => ({
			label: name,
			value: ratio,
		})) ?? [];

	const aspectRatioOptions = [
		{
			label: _x(
				"Original",
				"Aspect ratio option for dimensions control",
				"launchpad-blocks",
			),
			value: "auto",
		},
		...(shouldShowDefaultRatios ? defaultOptions : []),
		...(themeOptions ? themeOptions : []),
		{
			label: _x(
				"Custom",
				"Aspect ratio option for dimensions control",
				"launchpad-blocks",
			),
			value: "custom",
		},
	];

	const [aspectRatioSelectValue, setAspectRatioSelectValue] = useState(
		aspectRatioOptions.map((option) => option.value).includes(ratioValue)
			? ratioValue
			: "custom",
	);

	return (
		<>
			<SelectControl
				__nextHasNoMarginBottom
				__next40pxDefaultSize
				label={__("Aspect ratio", "launchpad-blocks")}
				options={aspectRatioOptions}
				value={aspectRatioSelectValue}
				onChange={(selectedValue) => {
					setAspectRatioSelectValue(selectedValue);
					if (selectedValue !== "custom") {
						ratioOnChange(selectedValue);
					}
				}}
			/>
			{aspectRatioSelectValue === "custom" ? (
				<TextControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					label={__("Custom aspect ratio", "launchpad-blocks")}
					help={__(
						"Please enter a custom aspect ratio in the format `width/height`.",
					)}
					onChange={ratioOnChange}
					value={ratioValue}
				/>
			) : null}
			{ratioValue !== "auto" && imageFitOnChange !== undefined ? (
				<ToggleGroupControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					isBlock
					label="Image fit"
					help={__(
						"If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).",
						"launchpad-blocks",
					)}
					onChange={(newValue) => {
						if (
							typeof newValue === "string" &&
							["contain", "cover"].includes(newValue)
						) {
							imageFitOnChange(newValue as "contain" | "cover");
						}
					}}
					value={imageFitValue}
				>
					<ToggleGroupControlOption label="Cover" value="cover" />
					<ToggleGroupControlOption label="Contain" value="contain" />
				</ToggleGroupControl>
			) : null}
		</>
	);
}

const isBlockIdReservedFactory = (
	clientId: string,
	idAttribute: string,
	idAttributeName: string,
	blockName: string,
) => {
	const { getBlocksByName, getBlockAttributes, getBlockParentsByBlockName } =
		select(blockEditorStore) as {
			getBlocksByName: (blockNames: string | string[]) => string[];
			getBlockAttributes: (clientId: string) => BlockInstance["attributes"];
			getBlockParentsByBlockName: (
				clientId: string,
				blockNames: string | string[],
				ascending: boolean,
			) => string[];
		};
	const tabsBlocksClientIds = getBlocksByName(blockName);
	return tabsBlocksClientIds.some((_clientId) => {
		if (
			getBlockParentsByBlockName(_clientId, "core/template-part", true).length
		) {
			// Prevent infinite loop if blocks are within template parts.
			return false;
		}
		const { [idAttributeName]: _idAttribute } = getBlockAttributes(_clientId);
		return clientId !== _clientId && idAttribute === _idAttribute;
	});
};

export function useUniqueBlockId<
	IDAttributeName extends string,
	InterpretedAttributes extends Record<IDAttributeName, string>,
>(
	attributes: InterpretedAttributes,
	idAttributeName: IDAttributeName,
	clientId: string,
	setAttributes: CreateBlockEditProps<
		InterpretedAttributes,
		never
	>["setAttributes"],
	blockName: string,
) {
	const { [idAttributeName]: idAttribute } = attributes;

	const isBlockIdReserved = useCallback(
		(idAttribute: string) =>
			isBlockIdReservedFactory(
				clientId,
				idAttribute,
				idAttributeName,
				blockName,
			),
		[clientId, idAttributeName, blockName],
	);

	useEffect(() => {
		if (idAttribute === "") {
			const newIdAttribute = clientId.slice(0, clientId.indexOf("-"));
			setAttributes({
				[idAttributeName]: newIdAttribute,
			} as Partial<InterpretedAttributes>);
		}
		if (isBlockIdReserved(idAttribute)) {
			const newIdAttribute = clientId.slice(0, clientId.indexOf("-"));
			console.log(
				`Regenerated ${idAttributeName} to make it unique. Old value: ${idAttribute}. New value: ${newIdAttribute}`,
			);
			setAttributes({
				[idAttributeName]: newIdAttribute,
			} as Partial<InterpretedAttributes>);
		}
	}, [
		idAttribute,
		clientId,
		setAttributes,
		isBlockIdReserved,
		idAttributeName,
	]);

	const AttributeIdEditControl = useMemo(
		() =>
			function AttributeIdEditControl({
				label,
				help,
				onValidChange,
				idAttribute,
			}: {
				label: ComponentProps<typeof TextControl>["label"];
				help:
					| ComponentProps<typeof TextControl>["help"]
					| ((isValid: boolean) => ComponentProps<typeof TextControl>["help"]);
				onValidChange: (newValue: string) => void;
				idAttribute: string;
			}) {
				const [idAttributeFieldValue, setIdAttributeFieldValue] =
					useState<string>(idAttribute);
				return (
					<TextControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						label={label}
						help={
							typeof help === "function"
								? help(!isBlockIdReserved(idAttributeFieldValue))
								: help
						}
						value={idAttributeFieldValue}
						onChange={(newIdAttribute) => {
							setIdAttributeFieldValue(newIdAttribute);
							if (!isBlockIdReserved(newIdAttribute)) {
								onValidChange(newIdAttribute);
							}
						}}
					/>
				);
			},
		[isBlockIdReserved],
	);

	return AttributeIdEditControl;
}

export function HeadingLevelSelect<
	const HeadingLevelOptions extends readonly (
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "p"
	)[],
>({
	levelOptions,
	selectedLevel,
	setSelectedHeadingLevel,
}: {
	levelOptions: HeadingLevelOptions;
	selectedLevel: HeadingLevelOptions[number];
	setSelectedHeadingLevel: (
		newHeadingLevel: HeadingLevelOptions[number],
	) => void;
}) {
	return (
		<ToolbarDropdownMenu
			label={__("Change title heading element", "launchpad-blocks")}
			icon={getHeadingElementIcon(selectedLevel)}
			controls={levelOptions.map((targetLevel) => {
				{
					const isActive = targetLevel === selectedLevel;

					return {
						icon: getHeadingElementIcon(targetLevel),
						title: getHumanNameOfElement(targetLevel),
						isDisabled: isActive,
						onClick: () => setSelectedHeadingLevel(targetLevel),
					};
				}
			})}
		/>
	);
}

function getHumanNameOfElement(
	element: "h2" | "h3" | "h4" | "h5" | "h6" | "p",
) {
	switch (element) {
		case "h2":
			return __("Heading 2", "launchpad-blocks");
		case "h3":
			return __("Heading 3", "launchpad-blocks");
		case "h4":
			return __("Heading 4", "launchpad-blocks");
		case "h5":
			return __("Heading 5", "launchpad-blocks");
		case "h6":
			return __("Heading 6", "launchpad-blocks");
		case "p":
			return __("Paragraph", "launchpad-blocks");
	}
}

function getHeadingElementIcon(
	elementType: "h2" | "h3" | "h4" | "h5" | "h6" | "p",
) {
	switch (elementType) {
		case "h2":
			return headingLevel2;
		case "h3":
			return headingLevel3;
		case "h4":
			return headingLevel4;
		case "h5":
			return headingLevel5;
		case "h6":
			return headingLevel6;
		case "p":
			return paragraph;
	}
}

export function useHasChildren(clientId: string) {
	const { hasChildren } = useSelect(
		(select) => {
			const { getBlocks } = select(blockEditorStore) as {
				getBlocks: (rootClientId?: string) => (BlockInstanceAsObject & {
					clientId: string;
					isValid: boolean;
					originalContent: string;
					validationIssues: unknown[];
				})[];
			};

			const innerBlocks = getBlocks(clientId);

			return {
				hasChildren: innerBlocks.length > 0,
			};
		},
		[clientId],
	);
	return hasChildren;
}

export function VariationSelect<
	InterpretedAttributes extends Record<string, unknown>,
>({
	clientId,
	blockInfo,
	variations,
	allowSkip,
}: {
	clientId: string;
	blockInfo: { name: string; icon: JSX.Element };
	variations: BlockVariations<InterpretedAttributes>;
	allowSkip?: boolean;
}) {
	const { replaceInnerBlocks, updateBlockAttributes } = useDispatch(
		blockEditorStore,
	) as unknown as {
		replaceInnerBlocks: (
			clientId: string,
			blocksToReplaceWith: WordPressBlockInstance[],
			updateSelection?: boolean,
		) => void;
		updateBlockAttributes: <
			Attributes extends Record<string, unknown> = Record<string, unknown>,
		>(
			clientIds: string | string[],
			attributes: Partial<Attributes>,
			uniqueByBlock?: boolean,
		) => void;
	};

	return (
		<Placeholder
			icon={blockInfo.icon}
			label={blockInfo.name}
			instructions="Please choose a variation to start with:"
		>
			{/*
			 * Disable reason: The `list` ARIA role is redundant but
			 * Safari+VoiceOver won't announce the list otherwise.
			 */
			/* eslint-disable jsx-a11y/no-redundant-roles -- see above */}
			<ul
				className="block-editor-block-variation-picker__variations"
				role="list"
				aria-label={__("Block variations")}
			>
				{/* eslint-enable jsx-a11y/no-redundant-roles */}
				{variations.map((variation) => {
					return (
						<li key={variation.name}>
							<Button
								__next40pxDefaultSize
								variant="tertiary"
								className="block-editor-block-variation-picker__variation"
								icon={
									"string" === typeof variation.icon ? (
										<WPMenuIcon iconString={variation.icon} />
									) : (
										variation.icon
									)
								}
								iconSize={48}
								onClick={() => {
									if (variation.attributes) {
										updateBlockAttributes(clientId, variation.attributes);
									}
									if (variation.innerBlocks) {
										replaceInnerBlocks(
											clientId,
											createBlocksFromInnerBlocksTemplate(
												variation.innerBlocks,
											),
											false,
										);
									}
								}}
							></Button>
							<span className="block-editor-block-variation-picker__variation-label">
								{variation.title}
							</span>
						</li>
					);
				})}
			</ul>
			{allowSkip && (
				<div className="block-editor-block-variation-picker__skip">
					<Button
						__next40pxDefaultSize
						variant="link"
						onClick={() => {
							replaceInnerBlocks(clientId, [], false);
							updateBlockAttributes(clientId, {
								hasDismissedVariationsSelector: true,
							});
						}}
					>
						{__("Skip")}
					</Button>
				</div>
			)}
		</Placeholder>
	);
}

/**
 * AttachmentImage
 *
 * This component is used to display an image from the media library.
 * It's meant as a JS companion to the PHP function `wp_get_attachment_image()`.
 *
 * @link https://www.briancoords.com/getting-wordpress-media-library-images-in-javascript/
 *
 * @param {object} props
 * @param {number} props.imageId The ID of the image to display.
 * @param {string} props.className Optional class name to apply to the image.
 * @param {string} props.size The size of the image to display. Defaults to 'full'.
 * @returns {*} React JSX
 */
export function AttachmentImage({
	imageId,
	className = "",
	size = "full",
}: {
	imageId: number;
	className?: string;
	size?: string;
}) {
	type WPImage = {
		id: number;
		source_url: string;
		alt_text: string;
		author: number;
		caption: {
			raw: string;
			rendered: string;
		};
		class_list: string[];
		media_details: {
			width: number;
			height: number;
			sizes?: Record<
				string,
				{
					source_url: string;
					width: number;
					height: number;
				}
			>;
		};
	};

	const image = useSelect(
		(
			select: (store: typeof coreStore) => {
				getEntityRecord: (
					kind: "postType",
					name: "attachment",
					id: number,
				) => WPImage | undefined;
			},
		) =>
			typeof imageId === "number" && imageId > 0
				? select(coreStore).getEntityRecord?.("postType", "attachment", imageId)
				: undefined,
		[imageId],
	);

	if (!image) {
		return null;
	}

	const imageAttributes = () => {
		const attributes = {
			src: image.source_url,
			className: `attachment-${size} size-${size} ${className}`,
			width: image.media_details.width,
			height: image.media_details.height,
			srcSet: "",
		};
		if (image.media_details?.sizes?.[size]) {
			attributes.src = image.media_details.sizes[size].source_url;
			attributes.width = image.media_details.sizes[size].width;
			attributes.height = image.media_details.sizes[size].height;
		}

		attributes.srcSet = Object.entries(image.media_details.sizes ?? {})
			.map(([_key, value]) => {
				return `${value.source_url} ${value.width}w`;
			})
			.join(", ");

		return attributes;
	};

	return (
		<>
			<img {...imageAttributes()} alt={image.alt_text || ""} />
		</>
	);
}

export function convertBlockObjectToArray(
	innerBlocksTemplateObject: BlockInstanceAsObject,
) {
	const templateAsArray: BlockInstanceAsArray = [
		innerBlocksTemplateObject.name,
	];
	if (innerBlocksTemplateObject.attributes) {
		templateAsArray.push(innerBlocksTemplateObject.attributes);
	} else {
		templateAsArray.push({});
	}
	if (innerBlocksTemplateObject.innerBlocks) {
		templateAsArray.push(
			innerBlocksTemplateObject.innerBlocks.map((innerBlocksTemplateObject) => {
				return convertBlockObjectToArray(innerBlocksTemplateObject);
			}),
		);
	} else {
		templateAsArray.push([]);
	}
	return templateAsArray;
}

export function useIframeResize(
	getElementToResizeItTo: () => HTMLElement | null,
) {
	const editorRoot = useRef<HTMLDivElement | null>(null);
	editorRoot.current =
		document
			.querySelector<HTMLIFrameElement>('iframe[name="editor-canvas"]')
			?.contentWindow?.document.querySelector<HTMLDivElement>(
				".is-root-container",
			) ?? null;

	return function resizeIframe() {
		setTimeout(() => {
			if (editorRoot.current) {
				const elementToResizeItTo = getElementToResizeItTo();
				const elementHeight = elementToResizeItTo?.scrollHeight ?? 0;
				if (elementHeight) {
					const currentStyle = editorRoot.current.style;
					currentStyle.minHeight = "";
					editorRoot.current.setAttribute(
						"style",
						`${currentStyle.cssText}min-height: ${elementHeight}px !important`,
					);
				} else {
					editorRoot.current.style.minHeight = "";
				}
			}
		}, 1);
	};
}
