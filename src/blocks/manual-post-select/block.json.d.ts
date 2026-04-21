export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    keywords: never[];
    editorScript: string;
    editorStyle: string;
    style: string;
    render: "file:./render.php";
    attributes: {
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
                taxonomies: Record<string, {
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
                by: Exclude<import("../helpers.editor").OrderByOptions, "relevance" | "include" | "include_slugs" | "parent">;
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
                taxonomies: Record<string, {
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
                by: Exclude<import("../helpers.editor").OrderByOptions, "relevance" | "include" | "include_slugs" | "parent">;
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
    providesContext: {};
    usesContext: ["postId"];
    supports: {
        readonly align: true;
        readonly layout: {
            readonly default: {
                readonly type: "default";
            };
            readonly allowSwitching: true;
            readonly allowEditing: true;
            readonly allowInheriting: true;
            readonly allowSizingOnChildren: true;
            readonly allowVerticalAlignment: true;
            readonly allowJustification: true;
            readonly allowOrientation: true;
            readonly allowCustomContentAndWideSize: true;
        };
        readonly color: true;
        readonly spacing: {
            readonly margin: true;
            readonly padding: true;
            readonly blockGap: true;
        };
        readonly typography: {
            readonly fontSize: true;
            readonly lineHeight: true;
        };
    };
    example: {
        viewportWidth: number;
        attributes: {
            namespace: string;
            shouldFillRemainingSpots: true;
            postsToShow: number;
            layout: {
                type: "grid";
                columnCount: number;
            };
        };
        innerBlocks: {
            name: string;
        }[];
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map