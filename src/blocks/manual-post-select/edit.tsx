import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type {
	CreateBlockEditProps,
	BlockInstanceAsObject,
} from "@atomicsmash/blocks-helpers";
import type { TaxonomyTerm } from "@launchpadBlocks/helpers.editor";
import type { Post, Page, User, Taxonomy } from "@wordpress/core-data";
import type { ComponentPropsWithoutRef, Reducer } from "react";
import { DatePHP } from "@atomicsmash/date-php";
import {
	store as blockEditorStore,
	useBlockProps,
	InspectorControls,
	useInnerBlocksProps,
	BlockContextProvider,
	__experimentalUseBlockPreview as useBlockPreview,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	SearchControl,
	BaseControl,
	ToggleControl,
	SelectControl,
	FormTokenField,
	Flex,
	FlexItem,
} from "@wordpress/components";
import { useInstanceId } from "@wordpress/compose";
import { store as coreStore } from "@wordpress/core-data";
import { useSelect, useSuspenseSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { useReducer, useState, useEffect, Suspense } from "react";
import {
	usePostTypes,
	CustomMultipleSelectList,
	useLayoutStyles,
	WPMenuIcon,
	orderByValues as allOrderByValues,
	useHasChildren,
	VariationSelect,
} from "@launchpadBlocks/helpers.editor";
import { Icon } from "@launchpadBlocks/svgs";
import { NumberInput } from "../__components__/NumberInput";
import blockJson from "./block.json";
import { supports } from "./supports";
import { variations } from "./variations";

// eslint-disable-next-line @typescript-eslint/naming-convention -- Keys defined by WP.
const { include, include_slugs, relevance, parent, ...orderByValues } =
	allOrderByValues;

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return Element to render.
 */
export function Edit({
	clientId,
	attributes,
	setAttributes,
	context,
}: BlockEditProps) {
	const {
		selectedPosts,
		selectedPostTypesManualSelectSearch,
		selectedPostTypesAutoPostsQuery,
		searchInputManualSelectSearch,
		taxonomyAndTermInfoManualSelectSearch,
		orderManualSelectSearch,
		searchInputAutoPostsQuery,
		taxonomyAndTermInfoAutoPostsQuery,
		orderAutoPostsQuery,
		postsToShow,
		shouldFillRemainingSpots,
		shouldInheritFromAutoPostsQuery,
		layout,
		shouldExcludeCurrentPost,
		hasDismissedVariationsSelector,
	} = attributes;

	let timeout: NodeJS.Timeout;

	useEffect(() => {
		if (
			layout?.type === "grid" &&
			layout.minimumColumnWidth === undefined &&
			layout.columnCount === undefined
		) {
			setAttributes({
				layout: {
					type: "grid",
					minimumColumnWidth: "12rem",
				},
			});
		}
	}, [layout, setAttributes]);

	useTaxonomyResetOnPostTypeChange({
		attributes,
		setAttributes,
		type: "ManualSelectSearch",
	});
	useTaxonomyResetOnPostTypeChange({
		attributes,
		setAttributes,
		type: "AutoPostsQuery",
	});

	function updateSelectedPosts(
		type: "add" | "remove" | "update_list",
		listOrItem:
			| InterpretedAttributes["selectedPosts"]
			| InterpretedAttributes["selectedPosts"][number],
	): void {
		if (type === "add") {
			if (Array.isArray(listOrItem)) {
				throw new Error(`You can't pass an array if your type is ${type}`);
			}
			setAttributes({
				selectedPosts: [
					...selectedPosts,
					{ postType: listOrItem.postType, id: listOrItem.id },
				],
			});
		}
		if (type === "remove") {
			if (Array.isArray(listOrItem)) {
				throw new Error(`You can't pass an array if your type is ${type}`);
			}
			setAttributes({
				selectedPosts: selectedPosts.filter((filterListItem) => {
					return filterListItem.id !== listOrItem.id;
				}),
			});
		}
		if (type === "update_list") {
			if (!Array.isArray(listOrItem)) {
				throw new Error(`You must pass an array if your type is ${type}`);
			}
			setAttributes({
				selectedPosts: listOrItem,
			});
		}
	}

	const hasChildren = useHasChildren(clientId);

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title="Output">
						<BaseControl
							id="posts-to-show-number-input"
							label="Posts to show"
							help="Select the number of posts to display on the page."
						>
							<NumberInput
								min={1}
								defaultValue={postsToShow}
								onValidation={(newNumber) => {
									clearTimeout(timeout);
									timeout = setTimeout(() => {
										setAttributes({
											postsToShow: newNumber,
										});
									}, 250);
								}}
								required
								allowAltClick={false}
							/>
						</BaseControl>
						<ToggleControl
							checked={shouldFillRemainingSpots}
							label={"Fill remaining slots automatically"}
							onChange={(newShouldFillRemainingSpots) => {
								setAttributes({
									shouldFillRemainingSpots: newShouldFillRemainingSpots,
								});
							}}
						/>
					</PanelBody>
				</Panel>
				<Panel>
					<PanelBody title="Select posts">
						{shouldFillRemainingSpots ? (
							<ToggleControl
								checked={shouldInheritFromAutoPostsQuery}
								label={"Use same query as the Query section"}
								onChange={(newShouldInheritFromAutoPostsQuery) => {
									setAttributes({
										shouldInheritFromAutoPostsQuery:
											newShouldInheritFromAutoPostsQuery,
									});
								}}
							/>
						) : null}
						{!shouldFillRemainingSpots || !shouldInheritFromAutoPostsQuery ? (
							<QueryChangeControls
								attributes={attributes}
								setAttributes={setAttributes}
								type={"ManualSelectSearch"}
							/>
						) : null}
						<BaseControl
							id={useInstanceId(BaseControl, "custom-multiple-select-list-id-")}
							label={"Search results"}
						>
							<Suspense fallback={<p>Loading...</p>}>
								{shouldFillRemainingSpots && shouldInheritFromAutoPostsQuery ? (
									<PostSearchResults
										searchInput={searchInputAutoPostsQuery}
										taxonomyAndTermInfo={taxonomyAndTermInfoAutoPostsQuery}
										selectedPostTypes={selectedPostTypesAutoPostsQuery}
										selectedPosts={selectedPosts}
										updateSelectedPosts={updateSelectedPosts}
										order={orderAutoPostsQuery}
									/>
								) : (
									<PostSearchResults
										searchInput={searchInputManualSelectSearch}
										taxonomyAndTermInfo={taxonomyAndTermInfoManualSelectSearch}
										selectedPostTypes={selectedPostTypesManualSelectSearch}
										selectedPosts={selectedPosts}
										updateSelectedPosts={updateSelectedPosts}
										order={orderManualSelectSearch}
									/>
								)}
							</Suspense>
						</BaseControl>
						<BaseControl
							id={useInstanceId(BaseControl, "draggable-list-id-")}
							label={"Selected posts"}
							help={
								selectedPosts.length > 0
									? "You can drag and drop the posts above to change the order that they appear in."
									: "Use the filters above to select the posts you would like to show in this block."
							}
						>
							<Suspense fallback="Loading...">
								<SelectedPostsList
									attributes={attributes}
									updateSelectedPosts={updateSelectedPosts}
								/>
							</Suspense>
						</BaseControl>
					</PanelBody>
				</Panel>
				{shouldFillRemainingSpots ? (
					<Panel>
						<PanelBody title="Query">
							<ToggleControl
								checked={shouldExcludeCurrentPost}
								label={"Exclude current post from query"}
								onChange={(newShouldExcludeCurrentPost) => {
									setAttributes({
										shouldExcludeCurrentPost: newShouldExcludeCurrentPost,
									});
								}}
							/>
							<QueryChangeControls
								attributes={attributes}
								setAttributes={setAttributes}
								type={"AutoPostsQuery"}
							/>
						</PanelBody>
					</Panel>
				) : null}
			</InspectorControls>
			{hasChildren || hasDismissedVariationsSelector ? (
				<Suspense fallback="Loading...">
					<PostsInnerBlocks
						clientId={clientId}
						attributes={attributes}
						context={context}
					/>
				</Suspense>
			) : (
				<div {...blockProps}>
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
Edit.displayName = "ManualPostSelectEdit";

function SelectedPostsList({
	attributes,
	updateSelectedPosts,
}: {
	attributes: BlockEditProps["attributes"];
	updateSelectedPosts: UpdateListCallback<{
		postType: string;
		id: string;
	}>;
}) {
	const { selectedPosts } = attributes;
	const { filteredPostTypes } = usePostTypes();

	const selectedPostsData = useSuspenseSelect(
		(select) => {
			const selectedPostsObjects: (Page<"view"> | Post<"view">)[] = [];
			for (const selectedPost of selectedPosts) {
				const postData = select(coreStore).getEntityRecord<
					Page<"view"> | Post<"view">
				>("postType", selectedPost.postType, selectedPost.id);
				if (postData !== undefined) {
					selectedPostsObjects.push(postData);
				}
			}

			return selectedPostsObjects;
		},
		[selectedPosts],
	);

	return (
		<DraggableList
			list={selectedPosts.map((selectedPost) => ({
				...selectedPost,
				title:
					selectedPostsData.find(
						(foundPost) => foundPost.id === Number(selectedPost.id),
					)?.title.rendered ?? "",
				icon:
					filteredPostTypes?.find(
						(postType) => postType.slug === selectedPost.postType,
					)?.icon ?? undefined,
			}))}
			updateListCallback={updateSelectedPosts}
		/>
	);
}
type PostStatus = "publish" | "future" | "draft" | "pending" | "private";
function useInefficientlyGetPostsByQuery({
	status = "publish",
	postTypes,
	postCountToRetrieve,
	exclude,
	search,
	order,
	taxonomyAndTermInfo,
}: {
	status?: PostStatus | PostStatus[];
	postTypes: string[];
	postCountToRetrieve: number;
	exclude?: number[];
	search: string;
	order: InterpretedAttributes["orderAutoPostsQuery"];
	taxonomyAndTermInfo: InterpretedAttributes["taxonomyAndTermInfoAutoPostsQuery"];
}) {
	const { filteredPostTypes } = usePostTypes();

	postTypes = postTypes.includes("any")
		? (filteredPostTypes ?? []).map((postType) => postType.slug)
		: postTypes;

	const queriedPostsDataResult = useSuspenseSelect(
		(select) => {
			const queriedPostsData: ({
				authorName: string;
			} & Pick<
				Post<"view"> | Page<"view">,
				| "id"
				| "title"
				| "date"
				| "date_gmt"
				| "author"
				| "link"
				| "modified"
				| "modified_gmt"
				| "slug"
				| "status"
				| "type"
			>)[] = [];

			if (postCountToRetrieve === 0) {
				return [];
			}

			const authors = (
				select(coreStore) as unknown as {
					getUsers: <Context extends "view" | "embed" | "edit">(args: {
						context?: Context;
						page?: number;
						per_page?: number;
						search?: string;
						exclude?: number[];
						include?: number[];
						offset?: number;
						order?: "asc" | "desc";
						orderby?:
							| "id"
							| "include"
							| "name"
							| "registered_date"
							| "slug"
							| "include_slugs"
							| "email"
							| "url";
						slug?: string;
						roles?: string;
						capabilities?: string;
						who?: "authors";
						has_published_posts?: boolean;
					}) => User<Context>[];
				}
			).getUsers({
				context: "view",
				who: "authors",
				has_published_posts: true,
			});

			for (const postType of postTypes) {
				const postData = select(coreStore)
					.getEntityRecords<Page<"view"> | Post<"view">>("postType", postType, {
						context: "view",
						status,
						per_page: postCountToRetrieve,
						exclude,
						search: search ? search : undefined,
						orderby: search ? "relevance" : order.by,
						order: search ? "asc" : order.direction,
						tax_relation: taxonomyAndTermInfo.relationship,
						...Object.values(taxonomyAndTermInfo.taxonomies).reduce<
							Record<
								string,
								| {
										operator: InterpretedAttributes["taxonomyAndTermInfoAutoPostsQuery"]["taxonomies"][number]["operator"];
										terms: number[];
								  }
								| undefined
							>
						>((taxonomiesOutput, taxonomyAndTermInfoSingle) => {
							const { operator, restBase, terms } = taxonomyAndTermInfoSingle;
							taxonomiesOutput[restBase] = {
								operator,
								terms: terms.map((term) => term.id),
							};
							return taxonomiesOutput;
						}, {}),
					})
					?.map((post) => {
						return {
							id: post.id,
							title: post.title,
							date: post.date,
							date_gmt: post.date_gmt,
							link: post.link,
							modified: post.modified,
							modified_gmt: post.modified_gmt,
							slug: post.slug,
							status: post.status,
							type: post.type,
							author: post.author,
							authorName:
								authors.find((author) => author.id === post.author)?.name ??
								"Unknown",
						};
					});
				if (postData) {
					queriedPostsData.push(...postData);
				}
			}

			const sortedQueriedPostsData = queriedPostsData.sort((a, b) => {
				switch (order.by) {
					case "author": {
						return a.author - b.author;
						// Below is for sorting by author name, falling back to title.
						// Not currently supported on the PHP side.
						//
						// if (a.author === 0 || b.author === 0) {
						// 	// Force posts without an author to the top to match WP_Query.
						// 	return a.author - b.author;
						// }
						// const AuthorADisplayName = a.authorName?.toUpperCase();
						// const AuthorBDisplayName = b.authorName?.toUpperCase();

						// if (
						// 	AuthorADisplayName === undefined ||
						// 	AuthorBDisplayName === undefined
						// ) {
						// 	throw new Error("Error getting the author name.");
						// }

						// if (AuthorADisplayName < AuthorBDisplayName) {
						// 	return -1;
						// }
						// if (AuthorADisplayName > AuthorBDisplayName) {
						// 	return 1;
						// }

						// // If names are equal, order by title
						// const titleA = a.title.rendered.toUpperCase(); // ignore upper and lowercase
						// const titleB = b.title.rendered.toUpperCase(); // ignore upper and lowercase
						// if (titleA < titleB) {
						// 	return -1;
						// }
						// if (titleA > titleB) {
						// 	return 1;
						// }

						// // names must be equal
						// return 0;
					}

					case "title": {
						const titleA = a.title.rendered.toUpperCase(); // ignore upper and lowercase
						const titleB = b.title.rendered.toUpperCase(); // ignore upper and lowercase
						if (titleA < titleB) {
							return -1;
						}
						if (titleA > titleB) {
							return 1;
						}

						// names must be equal
						return 0;
					}
					case "slug": {
						const slugA = a.slug.toUpperCase(); // ignore upper and lowercase
						const slugB = b.slug.toUpperCase(); // ignore upper and lowercase
						if (slugA < slugB) {
							return -1;
						}
						if (slugA > slugB) {
							return 1;
						}

						// names must be equal
						return 0;
					}

					case "id":
						return a.id - b.id;

					case "date": {
						if (a.date_gmt === null || b.date_gmt === null) {
							throw new Error("Error getting the published date.");
						}
						const dateTimeA = DatePHP.parseString(
							a.date_gmt,
							"ISO-8601",
						).getTime();
						const dateTimeB = DatePHP.parseString(
							b.date_gmt,
							"ISO-8601",
						).getTime();
						if (dateTimeA < dateTimeB) {
							return -1;
						}
						if (dateTimeA > dateTimeB) {
							return 1;
						}
						return 0;
					}
					case "modified": {
						if (a.modified_gmt === null || b.modified_gmt === null) {
							throw new Error("Error getting the published date.");
						}
						const dateTimeA = DatePHP.parseString(
							a.modified_gmt,
							"ISO-8601",
						).getTime();
						const dateTimeB = DatePHP.parseString(
							b.modified_gmt,
							"ISO-8601",
						).getTime();
						if (dateTimeA < dateTimeB) {
							return -1;
						}
						if (dateTimeA > dateTimeB) {
							return 1;
						}
						return 0;
					}
					default:
						throw new Error(
							`Order by value not supported. Value: ${order.by as string}`,
						);
				}
			});

			return order.direction === "asc"
				? sortedQueriedPostsData
				: sortedQueriedPostsData.reverse();
		},
		[
			postCountToRetrieve,
			order.direction,
			order.by,
			postTypes,
			status,
			exclude,
			search,
			taxonomyAndTermInfo,
		],
	);

	return queriedPostsDataResult;
}

function QueryChangeControls({
	attributes,
	setAttributes,
	type,
}: {
	attributes: BlockEditProps["attributes"];
	setAttributes: BlockEditProps["setAttributes"];
	type: "ManualSelectSearch" | "AutoPostsQuery";
}) {
	let timeout: NodeJS.Timeout;
	const { filteredPostTypes } = usePostTypes();
	const {
		[`selectedPostTypes${type}` as const]: selectedPostTypes,
		[`searchInput${type}` as const]: searchInput,
		[`order${type}` as const]: order,
	} = attributes;
	return (
		<>
			{filteredPostTypes !== undefined ? (
				<BaseControl
					label={"Post Type"}
					id={`custom-multiple-select-list-post-types-${type === "ManualSelectSearch" ? "manual-select-search" : "auto-posts-query"}`}
				>
					<CustomMultipleSelectList
						list={[
							{
								id: "any",
								title: "Show all",
								isSelected: selectedPostTypes.includes("any"),
								icon: "dashicons-image-filter",
							},
							...filteredPostTypes.map((postType) => {
								return {
									id: postType.slug,
									title: postType.name,
									isSelected: selectedPostTypes.includes(postType.slug),
									icon: postType.icon,
								};
							}),
						]}
						renderItem={({ listItem, buttonProps }) => {
							return (
								<button
									key={listItem.id}
									{...buttonProps}
									onClick={(event) => {
										event.preventDefault();
										if (listItem.id === "any") {
											setAttributes({
												[`selectedPostTypes${type}` as const]: ["any"],
											});
										} else if (selectedPostTypes.includes(listItem.id)) {
											const remainingPostTypes = selectedPostTypes.filter(
												(value) => value !== listItem.id,
											);
											if (remainingPostTypes.length === 0) {
												setAttributes({
													[`selectedPostTypes${type}` as const]: ["any"],
												});
											} else {
												setAttributes({
													[`selectedPostTypes${type}` as const]:
														selectedPostTypes.filter(
															(value) => value !== listItem.id,
														),
												});
											}
										} else {
											setAttributes({
												[`selectedPostTypes${type}` as const]: [
													...selectedPostTypes,
													listItem.id,
												].filter((value) => value !== "any"),
											});
										}
									}}
								>
									<WPMenuIcon iconString={listItem.icon} />
									<span className="custom-multiple-select-list-item-label">
										{listItem.title}
									</span>
									{listItem.isSelected ? (
										<svg
											width="14"
											height="11"
											viewBox="0 0 14 11"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											focusable={false}
											role="presentation"
										>
											<path
												d="M1 5L5 9L13 1"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
											/>
										</svg>
									) : null}
								</button>
							);
						}}
					/>
				</BaseControl>
			) : null}
			<TaxonomySelect
				attributes={attributes}
				setAttributes={setAttributes}
				type={type}
			/>
			<SearchControl
				label="Search"
				hideLabelFromVision={false}
				help="Type your search term in the box above"
				value={searchInput}
				onChange={(value) => {
					clearTimeout(timeout);
					timeout = setTimeout(() => {
						setAttributes({ [`searchInput${type}` as const]: value });
					}, 250);
				}}
			/>
			<BaseControl
				id={`order-select-${type === "ManualSelectSearch" ? "manual-select-search" : "auto-posts-query"}`}
				label={`Order ${type === "ManualSelectSearch" ? "of search results" : "of posts"}`}
			>
				<p
					style={{
						fontSize: "12px",
						fontStyle: "normal",
						color: "rgb(117, 117, 117)",
					}}
				>
					Set the order that the{" "}
					{type === "ManualSelectSearch"
						? "search results box below"
						: "queried posts"}{" "}
					will appear in.
				</p>
				{searchInput ? (
					<p>
						When you&apos;ve defined a search term, the order is always by
						relevance from Most relevant -&gt; least relevant
					</p>
				) : (
					<>
						<SelectControl
							label="Order by"
							value={order.by}
							options={(
								Object.entries(orderByValues) as [
									keyof typeof orderByValues,
									(typeof orderByValues)[keyof typeof orderByValues],
								][]
							).map(([value, label]) => {
								return { value, label };
							})}
							onChange={(newOrderByValue) => {
								setAttributes({
									[`order${type}` as const]: { ...order, by: newOrderByValue },
								});
							}}
						/>
						<div style={{ marginTop: "-1rem" }}>
							<SelectControl
								label="Direction"
								multiple={false}
								value={order.direction}
								options={[
									{
										label: ["title", "slug"].includes(order.by)
											? "A -> Z"
											: ["date", "modified"].includes(order.by)
												? "Oldest -> Newest"
												: ["id", "parent", "author"].includes(order.by)
													? "0,1,2,3..."
													: "Ascending",
										value: "asc",
									},
									{
										label: ["title", "slug"].includes(order.by)
											? "Z -> A"
											: ["date", "modified"].includes(order.by)
												? "Newest -> Oldest"
												: ["id", "parent", "author"].includes(order.by)
													? "3,2,1,0..."
													: "Descending",
										value: "desc",
									},
								]}
								onChange={(newOrderDirectionValue) => {
									setAttributes({
										[`order${type}` as const]: {
											...order,
											direction: newOrderDirectionValue,
										},
									});
								}}
							/>
						</div>
					</>
				)}
			</BaseControl>
		</>
	);
}

function TaxonomySelect({
	attributes,
	setAttributes,
	type,
}: {
	attributes: BlockEditProps["attributes"];
	setAttributes: BlockEditProps["setAttributes"];
	type: "ManualSelectSearch" | "AutoPostsQuery";
}) {
	const {
		[`selectedPostTypes${type}` as const]: selectedPostTypes,
		[`taxonomyAndTermInfo${type}` as const]: taxonomyAndTermInfo,
	} = attributes;

	const { mappedTaxonomies } = usePostTypes();
	if (mappedTaxonomies === undefined || selectedPostTypes === undefined) {
		return null;
	}
	const timesToLoop =
		(selectedPostTypes[0] === "any"
			? Object.keys(mappedTaxonomies)
			: selectedPostTypes
		).length - 1;

	let duplicates = Object.entries(mappedTaxonomies)
		.reduce(
			(collection, [postType, value]) => {
				if (selectedPostTypes.includes(postType)) {
					collection.push(value);
				}
				return collection;
			},
			[] as (typeof mappedTaxonomies)[keyof typeof mappedTaxonomies][],
		)
		.flat();

	// Loop over mapped taxonomies, filter out any first occurrences of taxonomies in the array so you're left only with the ones in every array at the end.
	for (let $i = 0; $i < timesToLoop; $i++) {
		duplicates = duplicates.filter(
			(item, index) => duplicates.indexOf(item) !== index,
		);
	}

	const taxonomiesToShow = duplicates
		.filter((item) => item !== undefined)
		.filter(
			(
				item,
			): item is Taxonomy<"edit"> & {
				terms: TaxonomyTerm[];
			} => !!(item.terms && item.terms.length > 0),
		);

	const activeTaxonomyFilters = taxonomiesToShow
		.filter(
			(taxonomyToShow) =>
				Object.entries(taxonomyAndTermInfo.taxonomies)
					// If no terms can be selected, filter is hidden.
					.filter(([, selectedTaxonomy]) => selectedTaxonomy.terms.length > 0)
					// If no terms are selected, filter is ignored.
					.findIndex(
						([taxonomySlug]) => taxonomySlug === taxonomyToShow.slug,
					) !== -1,
		)
		.map((taxonomyToShow) => taxonomyToShow.name);

	return (
		<>
			{taxonomiesToShow && taxonomiesToShow.length > 0 ? (
				<>
					<ToggleControl
						__nextHasNoMarginBottom
						style={{ marginTop: "0.5rem" }}
						checked={taxonomyAndTermInfo.relationship === "AND"}
						label={`Only show posts that match all taxonomy conditions`}
						help={
							activeTaxonomyFilters.length === 0
								? `Currently selected options mean you're showing all posts.`
								: activeTaxonomyFilters.length === 1
									? `Currently selected options mean you're showing all posts that pass the ${activeTaxonomyFilters[0]} filter.`
									: `Currently selected options mean you're showing all posts that pass ${
											taxonomyAndTermInfo.relationship === "OR"
												? "either"
												: "both"
										} the ${activeTaxonomyFilters.join(
											` ${taxonomyAndTermInfo.relationship} `,
										)} filter${taxonomyAndTermInfo.relationship === "OR" ? "" : "s"}.`
						}
						onChange={(newTaxRelationship) => {
							setAttributes({
								[`taxonomyAndTermInfo${type}` as const]: {
									relationship: newTaxRelationship ? "AND" : "OR",
									taxonomies: taxonomyAndTermInfo.taxonomies,
								},
							});
						}}
					/>
					{taxonomiesToShow.map((taxonomy) => {
						const selectedTaxonomy =
							taxonomyAndTermInfo.taxonomies[taxonomy.slug];
						const selectedTerms = selectedTaxonomy?.terms ?? [];

						const activeTermFilters = taxonomy.terms
							.filter(
								(term) =>
									selectedTerms.findIndex(
										(selectedTerm) => selectedTerm.id === term.id,
									) !== -1,
							)
							.map((term) => term.name);

						return (
							<fieldset key={taxonomy.slug}>
								<Flex direction="column" gap={"0.5rem"}>
									<FlexItem>
										<FormTokenField
											__nextHasNoMarginBottom
											__next40pxDefaultSize
											__experimentalExpandOnFocus
											label={taxonomy.name}
											suggestions={taxonomy.terms.map((term) => {
												return term.id.toString();
											})}
											displayTransform={(token) => {
												return (
													taxonomy.terms?.find(
														(term) => term.id.toString() === token,
													)?.name ?? "Unknown"
												);
											}}
											value={selectedTerms.map((selectedTerm) => {
												return {
													value: selectedTerm.id.toString(),
													label: taxonomy.terms?.find(
														(term) => term.id === selectedTerm.id,
													)?.name,
												};
											})}
											onChange={(values) => {
												setAttributes({
													[`taxonomyAndTermInfo${type}` as const]: {
														...taxonomyAndTermInfo,
														taxonomies: {
															...taxonomyAndTermInfo.taxonomies,
															[taxonomy.slug]: {
																operator:
																	taxonomyAndTermInfo.taxonomies[taxonomy.slug]
																		?.operator ?? "AND",
																restBase: taxonomy.rest_base,
																terms: values
																	.map((value) => {
																		let foundTerm: TaxonomyTerm | undefined;
																		if (typeof value === "string") {
																			foundTerm = taxonomy.terms?.find(
																				(term) => term.id.toString() === value,
																			);
																		} else {
																			foundTerm = taxonomy.terms?.find(
																				(term) =>
																					term.id.toString() === value.value,
																			);
																		}
																		if (!foundTerm) {
																			console.error(
																				`Didn't find the term associated with the value ${typeof value === "string" ? value : (value.title ?? value.value)}`,
																			);
																			return null;
																		}
																		return {
																			id: foundTerm.id,
																			slug: foundTerm.slug,
																		};
																	})
																	.filter((value) => !!value),
															},
														},
													},
												});
											}}
										/>
									</FlexItem>
									<FlexItem>
										<ToggleControl
											__nextHasNoMarginBottom
											style={{ marginTop: "0.5rem" }}
											checked={selectedTaxonomy?.operator !== "OR"}
											label={`Only show posts with ${taxonomy.name} attached`}
											help={
												activeTermFilters.length === 0
													? `Currently selected options mean posts are not being filtered by ${taxonomy.name}.`
													: activeTermFilters.length === 1
														? `Currently selected options mean you're showing all posts with the ${activeTermFilters[0]} ${taxonomy.labels.singular_name}.`
														: `Currently selected options mean you're showing all posts with ${
																selectedTaxonomy?.operator === "OR"
																	? "either"
																	: "both"
															} the ${activeTermFilters.join(
																` ${selectedTaxonomy?.operator ?? "AND"} `,
															)} ${selectedTaxonomy?.operator === "OR" ? taxonomy.labels.singular_name : taxonomy.name}.`
											}
											onChange={(newTaxOperator) => {
												setAttributes({
													[`taxonomyAndTermInfo${type}` as const]: {
														...taxonomyAndTermInfo,
														taxonomies: {
															...taxonomyAndTermInfo.taxonomies,
															[taxonomy.slug]: {
																restBase: taxonomy.rest_base,
																operator: newTaxOperator ? "AND" : "OR",
																terms:
																	taxonomyAndTermInfo.taxonomies[taxonomy.slug]
																		?.terms ?? [],
															},
														},
													},
												});
											}}
										/>
									</FlexItem>
									<FlexItem>
										<hr style={{ marginTop: 0 }} />
									</FlexItem>
								</Flex>
							</fieldset>
						);
					})}
				</>
			) : null}
		</>
	);
}

function BlockPreview({
	onClick,
	onKeyDown,
	blocks,
}: {
	onClick: ComponentPropsWithoutRef<"div">["onClick"];
	onKeyDown: ComponentPropsWithoutRef<"div">["onKeyDown"];
	blocks: BlockInstanceAsObject[];
}) {
	/*
	 TODO: When clicking a preview, currently it takes two clicks
	 for you to edit a specific block, one to select the preview
	 and swap it out for the real blocks, and a second to select
	 the sub-block that you were trying to click. We should try
	 and improve this so it only takes 1 click without introducing
	 the issues associated with loading raw inner blocks multiple
	 times.
	*/
	const previewProps = useBlockPreview({
		blocks,
		props: {},
	});
	return (
		<div
			role="button"
			onClick={onClick}
			onKeyDown={onKeyDown}
			tabIndex={0}
			{...previewProps}
		></div>
	);
}

function PostsInnerBlocks({
	clientId,
	attributes,
	context,
}: {
	clientId: string;
	attributes: BlockEditProps["attributes"];
	context: BlockEditProps["context"];
}) {
	const {
		selectedPosts,
		selectedPostTypesAutoPostsQuery,
		searchInputAutoPostsQuery,
		taxonomyAndTermInfoAutoPostsQuery,
		orderAutoPostsQuery,
		layout,
		style,
		postsToShow,
		shouldFillRemainingSpots,
		shouldExcludeCurrentPost,
	} = attributes;
	const { className: layoutClassName, style: layoutStyle } = useLayoutStyles(
		layout,
		supports,
		style,
	);
	const blockProps = useBlockProps({
		className: layoutClassName,
		style: layoutStyle,
	});
	const selectedPostsData = useSuspenseSelect(
		(select) => {
			const selectedPostsObjects: (Page<"view"> | Post<"view">)[] = [];
			for (const selectedPost of selectedPosts) {
				const postData = select(coreStore).getEntityRecord<
					Page<"view"> | Post<"view">
				>("postType", selectedPost.postType, selectedPost.id);
				if (postData !== undefined) {
					selectedPostsObjects.push(postData);
				}
			}

			return selectedPostsObjects;
		},
		[selectedPosts],
	);

	const queriedPostsData = useInefficientlyGetPostsByQuery({
		postTypes: selectedPostTypesAutoPostsQuery,
		postCountToRetrieve: postsToShow - selectedPostsData.length,
		exclude: [
			...selectedPostsData.map((post) => post.id),
			...(shouldExcludeCurrentPost ? [context.postId] : []),
		],
		search: searchInputAutoPostsQuery,
		order: orderAutoPostsQuery,
		taxonomyAndTermInfo: taxonomyAndTermInfoAutoPostsQuery,
	});

	const selectedAndQueriedPostsData = [
		...selectedPostsData,
		...(shouldFillRemainingSpots ? queriedPostsData : []),
	].slice(0, postsToShow);

	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		{},
		{
			__unstableDisableLayoutClassNames: true,
		},
	);
	const [activeBlockContextId, setActiveBlockContextId] = useState<
		number | undefined
	>();

	const { blocks } = useSelect(
		(select) => {
			const { getBlocks } = select(blockEditorStore) as {
				getBlocks: (rootClientId?: string) => BlockInstanceAsObject[];
			};

			return { blocks: getBlocks(clientId) };
		},
		[clientId],
	);

	const shouldWrapInList = selectedAndQueriedPostsData.length > 1;
	const WrapperTagName = shouldWrapInList ? "ul" : "div";

	return (
		<WrapperTagName {...blockProps}>
			{selectedAndQueriedPostsData.length > 0 ? (
				selectedAndQueriedPostsData.map((selectedOrQueriedPost) => {
					return (
						<BlockContextProvider
							key={selectedOrQueriedPost.id}
							value={{
								postId: selectedOrQueriedPost.id,
								postType: selectedOrQueriedPost.type,
							}}
						>
							{selectedOrQueriedPost.id ===
							(activeBlockContextId ?? selectedAndQueriedPostsData[0]?.id) ? (
								shouldWrapInList ? (
									<li {...innerBlocksProps}>{children}</li>
								) : (
									<div {...innerBlocksProps}>{children}</div>
								)
							) : null}
							{shouldWrapInList ? (
								<li
									style={{
										display:
											selectedOrQueriedPost.id ===
											(activeBlockContextId ??
												selectedAndQueriedPostsData[0]?.id)
												? "none"
												: undefined,
									}}
								>
									<BlockPreview
										onClick={() => {
											setActiveBlockContextId(selectedOrQueriedPost.id);
										}}
										onKeyDown={() => {
											// TODO: Keyboard accessibility is not a priority in the admin/editor, so leaving this for later due to time constraints.
										}}
										blocks={blocks}
									/>
								</li>
							) : // If the previewed block is not wrapped in a list, it's only got one item so no preview is needed.
							null}
						</BlockContextProvider>
					);
				})
			) : (
				<div>Use the sidebar to select the posts you want to show.</div>
			)}
		</WrapperTagName>
	);
}

function PostSearchResults({
	searchInput,
	taxonomyAndTermInfo,
	selectedPostTypes,
	selectedPosts,
	updateSelectedPosts,
	order,
}: {
	searchInput: InterpretedAttributes["searchInputManualSelectSearch"];
	taxonomyAndTermInfo: InterpretedAttributes["taxonomyAndTermInfoManualSelectSearch"];
	selectedPostTypes: InterpretedAttributes["selectedPostTypesManualSelectSearch"];
	selectedPosts: InterpretedAttributes["selectedPosts"];
	updateSelectedPosts: UpdateListCallback<{
		postType: string;
		id: string;
	}>;
	order: InterpretedAttributes["orderManualSelectSearch"];
}) {
	const { filteredPostTypes } = usePostTypes();
	const posts = useInefficientlyGetPostsByQuery({
		postTypes: selectedPostTypes,
		postCountToRetrieve: -1,
		search: searchInput,
		order,
		taxonomyAndTermInfo,
	});

	if (posts.length === 0) {
		return <p>No results found.</p>;
	}

	return (
		<CustomMultipleSelectList
			list={
				posts.map((searchedPost) => ({
					post: searchedPost,
					id: `${searchedPost.id}`,
					title: searchedPost.title.rendered,
					postType: searchedPost.type,
					icon: filteredPostTypes?.find(
						(postType) => postType.slug === searchedPost.type,
					)?.icon,
					itemLabel:
						filteredPostTypes?.find(
							(postType) => postType.slug === searchedPost.type,
						)?.labels.singular_name ?? undefined,
					isSelected: !!selectedPosts.find((selectedPost) => {
						return `${searchedPost.id}` === selectedPost.id;
					}),
				})) ?? []
			}
			renderItem={({ listItem, buttonProps }) => {
				if (listItem.isSelected) return null;
				return (
					<button
						{...buttonProps}
						key={listItem.id}
						onClick={() => {
							updateSelectedPosts("add", listItem);
						}}
					>
						<WPMenuIcon iconString={listItem.icon} />
						<span
							className="custom-multiple-select-list-item-label"
							dangerouslySetInnerHTML={{
								__html: `${listItem.title === "" ? "(no title)" : listItem.title}${order.by === "title" ? "" : order.by === "author" ? ` - ${listItem.post.authorName}` : order.by === "date" ? ` - ${DatePHP.parseString(listItem.post.date ?? "1970-01-01T00:00:00", "ISO-8601").format("jS F Y H:i:s")}` : order.by === "modified" ? ` - ${DatePHP.parseString(listItem.post.modified ?? "1970-01-01T00:00:00", "ISO-8601").format("jS F Y H:i:s")}` : ` - ${listItem.post[order.by]}`}`,
							}}
						></span>
					</button>
				);
			}}
		/>
	);
}

function useTaxonomyResetOnPostTypeChange({
	attributes,
	setAttributes,
	type,
}: {
	attributes: BlockEditProps["attributes"];
	setAttributes: BlockEditProps["setAttributes"];
	type: "ManualSelectSearch" | "AutoPostsQuery";
}) {
	const { mappedTaxonomies } = usePostTypes();
	const {
		[`selectedPostTypes${type}` as const]: selectedPostTypes,
		[`taxonomyAndTermInfo${type}` as const]: taxonomyAndTermInfo,
	} = attributes;

	useEffect(() => {
		if (!mappedTaxonomies) {
			return;
		}
		const newTaxonomyAndTermInfoTerms = { ...taxonomyAndTermInfo.taxonomies };
		Object.keys(taxonomyAndTermInfo.taxonomies).forEach((taxonomySlug) => {
			if (
				selectedPostTypes.some((selectedPostType) => {
					return (
						mappedTaxonomies[selectedPostType]?.find(
							(taxonomy) => taxonomy.slug === taxonomySlug,
						) === undefined
					);
				})
			) {
				delete newTaxonomyAndTermInfoTerms[taxonomySlug];
			}
		});
		if (
			Object.keys(taxonomyAndTermInfo.taxonomies).length >
			Object.keys(newTaxonomyAndTermInfoTerms).length
		) {
			setAttributes({
				[`taxonomyAndTermInfo${type}` as const]: {
					relationship: taxonomyAndTermInfo.relationship,
					taxonomies: newTaxonomyAndTermInfoTerms,
				},
			});
		}
	}, [
		selectedPostTypes,
		mappedTaxonomies,
		taxonomyAndTermInfo,
		setAttributes,
		type,
	]);
}

type UpdateListCallback<ListItem> = (
	type: "add" | "remove" | "update_list",
	listOrItem: ListItem[] | ListItem,
) => void;

/**
 * Draggable list React component
 */
type ListState<ListItem> = {
	listItemBeingDragged: string | null;
	draggedItemOriginalPosition: number | null;
	draggedItemFalseOrder: number | null;
	list: ListItem[];
};
type DragAction<ListItem> =
	| {
			type: "start_being_dragged";
			itemId: string;
			itemIndex: number;
	  }
	| {
			type: "temporarily_rearrange_items";
			newOrder: number;
	  }
	| {
			type: "end_being_dragged";
			falseOrder: number | null;
			updateListCallback: (type: "update_list", listOrItem: ListItem[]) => void;
	  }
	| {
			type: "remove_from_list";
			updateListCallback: (
				type: "add" | "remove",
				listOrItem: ListItem,
			) => void;
			itemId: string;
	  }
	| {
			type: "update_list_from_props";
			newList: ListItem[];
	  };

function isSomethingBeingDragged<ListItem>(
	state: ListState<ListItem>,
): state is {
	listItemBeingDragged: string;
	draggedItemOriginalPosition: number;
	draggedItemFalseOrder: number;
	list: ListState<ListItem>["list"];
} {
	return !(
		state.listItemBeingDragged === null ||
		state.draggedItemOriginalPosition === null
	);
}

function DraggableList<
	ListItem extends { id: string; title: string; icon?: string },
>({
	list,
	updateListCallback,
	containerClassName,
	itemClassName,
	...divProps
}: {
	list: ListItem[];
	updateListCallback: UpdateListCallback<ListItem>;
	containerClassName?: string;
	itemClassName?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "className">) {
	useEffect(() => {
		setListState({
			type: "update_list_from_props",
			newList: list,
		});
	}, [list]);
	function dragReducer(
		state: ListState<ListItem>,
		action: DragAction<ListItem>,
	) {
		const currentState = state;
		let newState: ListState<ListItem>;
		switch (action.type) {
			case "start_being_dragged": {
				newState = {
					listItemBeingDragged: action.itemId,
					draggedItemOriginalPosition: action.itemIndex,
					draggedItemFalseOrder: action.itemIndex + 1,
					list: currentState.list,
				};
				break;
			}
			case "temporarily_rearrange_items": {
				if (!isSomethingBeingDragged(currentState)) {
					newState = currentState;
					break;
				}
				newState = {
					listItemBeingDragged: currentState.listItemBeingDragged,
					draggedItemOriginalPosition: currentState.draggedItemOriginalPosition,
					draggedItemFalseOrder: action.newOrder,
					list: currentState.list,
				};
				break;
			}
			case "end_being_dragged": {
				if (action.falseOrder === null) {
					return currentState;
				}
				const doubledUpArray: (ListItem | null)[] = [];
				doubledUpArray[0] = null;
				currentState.list.forEach((listItem) => {
					doubledUpArray.push(listItem);
					doubledUpArray.push(null);
				});
				const movedItem = currentState.list.find(
					(listItem) => listItem.id === currentState.listItemBeingDragged,
				);
				if (!movedItem) throw new Error("Failed to find moved item in list.");
				const movedItemIndex = doubledUpArray.indexOf(movedItem);
				doubledUpArray[action.falseOrder + 1] = movedItem;
				if (movedItemIndex !== action.falseOrder + 1) {
					doubledUpArray[movedItemIndex] = null;
				}
				const newList = doubledUpArray.filter(
					(value): value is ListItem => value !== null,
				);
				newState = {
					listItemBeingDragged: null,
					draggedItemOriginalPosition: null,
					draggedItemFalseOrder: null,
					list: currentState.list, // This will get updated on rerender triggered by the below update callback.
				};
				action.updateListCallback("update_list", newList);
				break;
			}
			case "remove_from_list": {
				newState = currentState; // This will get updated on rerender triggered by the below update callback.
				const removedItem = currentState.list.find(
					(listItem) => listItem.id === action.itemId,
				);
				if (!removedItem) {
					break;
				}
				action.updateListCallback("remove", removedItem);
				break;
			}
			case "update_list_from_props": {
				newState = {
					...currentState,
					list: action.newList,
				};
				break;
			}
		}
		return newState;
	}
	const [listState, setListState] = useReducer<
		Reducer<ListState<ListItem>, DragAction<ListItem>>
	>(dragReducer, {
		listItemBeingDragged: null,
		draggedItemOriginalPosition: null,
		draggedItemFalseOrder: null,
		list,
	});

	return (
		<div
			{...divProps}
			className={`draggable-list${
				isSomethingBeingDragged(listState) ? " is-dragging" : ""
			}${
				containerClassName !== undefined && containerClassName !== ""
					? ` ${containerClassName}`
					: ""
			}`}
		>
			{listState.list.map((listItem, index) => {
				return (
					<div
						key={listItem.id}
						className={`draggable-list-item${
							listState.listItemBeingDragged === listItem.id
								? " being-dragged"
								: ""
						}${typeof itemClassName === "string" ? ` ${itemClassName}` : ""}`}
						style={{
							order:
								listState.listItemBeingDragged === listItem.id
									? (listState.draggedItemFalseOrder ?? index * 2)
									: index * 2,
						}}
					>
						<div
							className="drag-zone-top"
							onDragOver={(event) => {
								event.preventDefault();
								if (listState.listItemBeingDragged === listItem.id) {
									return;
								}
								setListState({
									type: "temporarily_rearrange_items",
									newOrder: index * 2 - 1,
								});
							}}
						></div>
						<div
							className="drag-handle"
							onDragStart={() =>
								setTimeout(() => {
									setListState({
										type: "start_being_dragged",
										itemId: listItem.id,
										itemIndex: index,
									});
								}, 10)
							}
							onDragEnd={() =>
								setListState({
									type: "end_being_dragged",
									falseOrder: listState.draggedItemFalseOrder,
									updateListCallback,
								})
							}
							draggable
						>
							<svg
								width="9"
								height="21"
								viewBox="0 0 9 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
								<circle cx="7.5" cy="1.5" r="1.5" fill="currentColor" />
								<circle cx="1.5" cy="7.5" r="1.5" fill="currentColor" />
								<circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
								<circle cx="1.5" cy="13.5" r="1.5" fill="currentColor" />
								<circle cx="7.5" cy="13.5" r="1.5" fill="currentColor" />
								<circle cx="1.5" cy="19.5" r="1.5" fill="currentColor" />
								<circle cx="7.5" cy="19.5" r="1.5" fill="currentColor" />
							</svg>
						</div>
						<div className="draggable-list-item-content">
							<WPMenuIcon iconString={listItem.icon} />
							<span
								className="draggable-list-item-text"
								dangerouslySetInnerHTML={{
									__html: listItem.title === "" ? "(no title)" : listItem.title,
								}}
							></span>
							<button
								className="remove-button"
								onClick={() => {
									setListState({
										type: "remove_from_list",
										itemId: listItem.id,
										updateListCallback,
									});
								}}
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill="currentColor"
										d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M11,10.3c0.2,0.2,0.2,0.5,0,0.7s-0.5,0.2-0.7,0L8,8.7
		L5.7,11c-0.2,0.2-0.5,0.2-0.7,0s-0.2-0.5,0-0.7L7.3,8L5,5.7C4.8,5.5,4.8,5.2,5,5c0.2-0.2,0.5-0.2,0.7,0L8,7.3L10.3,5
		c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7L8.7,8L11,10.3z"
									/>
								</svg>
							</button>
						</div>
						<div
							className="drag-zone-bottom"
							onDragOver={(event) => {
								event.preventDefault();
								if (listState.listItemBeingDragged === listItem.id) {
									return;
								}
								setListState({
									type: "temporarily_rearrange_items",
									newOrder: index * 2 + 1,
								});
							}}
						></div>
					</div>
				);
			})}
		</div>
	);
}
