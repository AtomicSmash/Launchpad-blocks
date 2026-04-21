import type { Supports } from "./supports";
import type { OrderByOptions } from "../helpers.editor";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly hasDismissedVariationsSelector: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly namespace: {
        readonly type: "string";
    };
    readonly selectedPosts: {
        readonly type: "array";
        readonly default: {
            postType: string;
            id: string;
        }[];
    };
    readonly selectedPostTypesManualSelectSearch: {
        readonly type: "array";
        readonly default: string[];
    };
    readonly searchInputManualSelectSearch: {
        readonly type: "string";
        readonly default: "";
    };
    readonly taxonomyAndTermInfoManualSelectSearch: {
        readonly type: "object";
        readonly default: {
            relationship: "AND" | "OR";
            taxonomies: Record<string, // tax slug
            {
                restBase: string;
                operator: "AND" | "OR";
                terms: {
                    slug: string;
                    id: number;
                }[];
            }>;
        };
    };
    readonly orderManualSelectSearch: {
        readonly type: "object";
        readonly default: {
            by: Exclude<OrderByOptions, "relevance" | "include" | "include_slugs" | "parent">;
            direction: "asc" | "desc";
        };
    };
    readonly selectedPostTypesAutoPostsQuery: {
        readonly type: "array";
        readonly default: string[];
    };
    readonly searchInputAutoPostsQuery: {
        readonly type: "string";
        readonly default: "";
    };
    readonly taxonomyAndTermInfoAutoPostsQuery: {
        readonly type: "object";
        readonly default: {
            relationship: "AND" | "OR";
            taxonomies: Record<string, // tax slug
            {
                restBase: string;
                operator: "AND" | "OR";
                terms: {
                    slug: string;
                    id: number;
                }[];
            }>;
        };
    };
    readonly orderAutoPostsQuery: {
        readonly type: "object";
        readonly default: {
            by: Exclude<OrderByOptions, "relevance" | "include" | "include_slugs" | "parent">;
            direction: "asc" | "desc";
        };
    };
    readonly shouldFillRemainingSpots: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly shouldInheritFromAutoPostsQuery: {
        readonly type: "boolean";
        readonly default: true;
    };
    readonly postsToShow: {
        readonly type: "integer";
        readonly default: 1;
    };
    readonly shouldExcludeCurrentPost: {
        readonly type: "boolean";
        readonly default: true;
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = Omit<InterpretAttributes<Supports, Attributes>, "selectedPosts" | "selectedPostTypesManualSelectSearch" | "selectedPostTypesAutoPostsQuery" | "taxonomyAndTermInfoManualSelectSearch" | "orderManualSelectSearch" | "taxonomyAndTermInfoAutoPostsQuery" | "orderAutoPostsQuery"> & {
    selectedPosts: {
        postType: string;
        id: string;
    }[];
    selectedPostTypesManualSelectSearch: string[];
    selectedPostTypesAutoPostsQuery: string[];
    taxonomyAndTermInfoManualSelectSearch: {
        relationship: "AND" | "OR";
        taxonomies: Record<string, // tax slug
        {
            restBase: string;
            operator: "AND" | "OR";
            terms: {
                slug: string;
                id: number;
            }[];
        }>;
    };
    orderManualSelectSearch: {
        by: Exclude<OrderByOptions, "relevance" | "include" | "include_slugs" | "parent">;
        direction: "asc" | "desc";
    };
    taxonomyAndTermInfoAutoPostsQuery: {
        relationship: "AND" | "OR";
        taxonomies: Record<string, // tax slug
        {
            restBase: string;
            operator: "AND" | "OR";
            terms: {
                slug: string;
                id: number;
            }[];
        }>;
    };
    orderAutoPostsQuery: {
        by: Exclude<OrderByOptions, "relevance" | "include" | "include_slugs" | "parent">;
        direction: "asc" | "desc";
    };
};
//# sourceMappingURL=attributes.d.ts.map