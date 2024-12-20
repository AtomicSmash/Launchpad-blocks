import type {
	BlockSupports,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";
import type { Taxonomy } from "@wordpress/core-data";
import type { ComponentPropsWithoutRef, CSSProperties } from "react";
import { registerBlockCollection } from "@wordpress/blocks";
import {
	// spellchecker: disable-next-line
	Dashicon as DashIcon,
} from "@wordpress/components";
import { store as coreStore } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import { ASCircleLogo } from "@plugin/blocks/svgs";

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
		supports.layout !== null &&
		supports.layout?.default
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
	const { postTypes, taxonomies } = useSelect((select) => {
		const { getEntityRecords } = select(coreStore);
		const excludedPostTypes = ["attachment"];
		const filteredPostTypes = getEntityRecords<PostType>("root", "postType", {
			per_page: -1,
		})?.filter(
			({ viewable, slug }) => viewable && !excludedPostTypes.includes(slug),
		);
		if (!filteredPostTypes || filteredPostTypes.length === 0) {
			return { postTypes: filteredPostTypes, taxonomies: undefined };
		}
		const mappedTaxonomies: Record<
			PostType["slug"],
			(Taxonomy<"edit"> & { terms: TaxonomyTerm[] | null })[] | undefined
		> = {};
		const excludedTaxonomies: string[] = [];
		for (const postType of filteredPostTypes) {
			const filteredTaxonomies = getEntityRecords<Taxonomy<"edit">>(
				"root",
				"taxonomy",
				{ per_page: -1, orderby: "name", context: "edit" },
			)?.filter(
				({ types, slug }) =>
					types.includes(postType.slug) && !excludedTaxonomies.includes(slug),
			);
			if (!filteredTaxonomies) continue;
			mappedTaxonomies[postType.slug] = filteredTaxonomies.map((taxonomy) => {
				const filteredTaxonomyTerms = getEntityRecords<TaxonomyTerm>(
					"taxonomy",
					taxonomy.slug,
				);
				return { ...taxonomy, terms: filteredTaxonomyTerms };
			});
		}

		return { postTypes: filteredPostTypes, taxonomies: mappedTaxonomies };
	}, []);

	return {
		filteredPostTypes: postTypes,
		mappedTaxonomies:
			taxonomies === undefined || Object.values(taxonomies).length === 0
				? undefined
				: taxonomies,
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
