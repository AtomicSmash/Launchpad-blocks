import type { Supports } from "./supports";
import type { OrderByOptions } from "../helpers.editor";
import type {
	BlockAttributes,
	InterpretAttributes,
} from "@atomicsmash/blocks-helpers";

export const attributes = {
	namespace: {
		type: "string",
	},
	selectedPosts: {
		type: "array",
		default: [] as { postType: string; id: string }[],
	},
	selectedPostTypesManualSelectSearch: {
		type: "array",
		default: ["any"] as string[],
	},
	searchInputManualSelectSearch: {
		type: "string",
		default: "",
	},
	taxonomyAndTermInfoManualSelectSearch: {
		type: "object",
		default: { relationship: "AND", taxonomies: {} } as {
			relationship: "AND" | "OR";
			taxonomies: Record<
				string, // tax slug
				{
					restBase: string;
					operator: "AND" | "OR";
					terms: {
						slug: string;
						id: number;
					}[];
				}
			>;
		},
	},
	orderManualSelectSearch: {
		type: "object",
		default: {
			by: "date",
			direction: "desc",
		} as {
			by: Exclude<
				OrderByOptions,
				"relevance" | "include" | "include_slugs" | "parent"
			>;
			direction: "asc" | "desc";
		},
	},
	selectedPostTypesAutoPostsQuery: {
		type: "array",
		default: ["any"] as string[],
	},
	searchInputAutoPostsQuery: {
		type: "string",
		default: "",
	},
	taxonomyAndTermInfoAutoPostsQuery: {
		type: "object",
		default: { relationship: "AND", taxonomies: {} } as {
			relationship: "AND" | "OR";
			taxonomies: Record<
				string, // tax slug
				{
					restBase: string;
					operator: "AND" | "OR";
					terms: {
						slug: string;
						id: number;
					}[];
				}
			>;
		},
	},
	orderAutoPostsQuery: {
		type: "object",
		default: {
			by: "date",
			direction: "desc",
		} as {
			by: Exclude<
				OrderByOptions,
				"relevance" | "include" | "include_slugs" | "parent"
			>;
			direction: "asc" | "desc";
		},
	},
	shouldFillRemainingSpots: {
		type: "boolean",
		default: false,
	},
	shouldInheritFromAutoPostsQuery: {
		type: "boolean",
		default: true,
	},
	postsToShow: {
		type: "integer",
		default: 1,
	},
	shouldExcludeCurrentPost: {
		type: "boolean",
		default: true,
	},
} as const satisfies BlockAttributes;
export type Attributes = typeof attributes;
export type InterpretedAttributes = Omit<
	InterpretAttributes<Supports, Attributes>,
	| "selectedPosts"
	| "selectedPostTypesManualSelectSearch"
	| "selectedPostTypesAutoPostsQuery"
	| "taxonomyAndTermInfoManualSelectSearch"
	| "orderManualSelectSearch"
	| "taxonomyAndTermInfoAutoPostsQuery"
	| "orderAutoPostsQuery"
> & {
	selectedPosts: { postType: string; id: string }[];
	selectedPostTypesManualSelectSearch: string[];
	selectedPostTypesAutoPostsQuery: string[];
	taxonomyAndTermInfoManualSelectSearch: {
		relationship: "AND" | "OR";
		taxonomies: Record<
			string, // tax slug
			{
				restBase: string;
				operator: "AND" | "OR";
				terms: {
					slug: string;
					id: number;
				}[];
			}
		>;
	};
	orderManualSelectSearch: {
		by: Exclude<
			OrderByOptions,
			"relevance" | "include" | "include_slugs" | "parent"
		>;
		direction: "asc" | "desc";
	};
	taxonomyAndTermInfoAutoPostsQuery: {
		relationship: "AND" | "OR";
		taxonomies: Record<
			string, // tax slug
			{
				restBase: string;
				operator: "AND" | "OR";
				terms: {
					slug: string;
					id: number;
				}[];
			}
		>;
	};
	orderAutoPostsQuery: {
		by: Exclude<
			OrderByOptions,
			"relevance" | "include" | "include_slugs" | "parent"
		>;
		direction: "asc" | "desc";
	};
};
