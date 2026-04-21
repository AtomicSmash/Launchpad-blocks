import type { BlockAttributes, BlockSupports, CreateBlockEditProps, InterpretAttributes, BlockVariations, BlockInstanceAsObject, BlockInstanceAsArray } from "@atomicsmash/blocks-helpers";
import type { Taxonomy } from "@wordpress/core-data";
import type { ComponentProps, ComponentPropsWithoutRef, CSSProperties } from "react";
import { Dashicon as DashIcon, TextControl } from "@wordpress/components";
export type CoreStoreType = {
    getEntityRecord: <EntityRecord>(kind: string, name: string, key?: string | number, query?: Record<string, unknown>) => EntityRecord | undefined;
    getEntityRecords: <EntityRecord>(kind: string, name: string, query?: Record<string, unknown>) => EntityRecord[] | null;
};
export type NoticesStoreType = {
    createNotice: (status: string | undefined, content: string, options?: {
        context?: string;
        id?: string;
        isDismissible?: boolean;
        type?: string;
        speak?: boolean;
        actions?: {
            label: string;
            url?: string;
            onClick?: () => void;
        }[];
        icon?: string;
        explicitDismiss?: boolean;
        onDismiss?: () => void;
    }) => Promise<void>;
    removeNotice: (id: string, context?: string) => Promise<void>;
};
export declare function registerLaunchpadBlocksCollection(): void;
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
export declare function useLayoutStyles<const Supports extends BlockSupports>(layout: InterpretAttributes<Supports, Record<string, never>>["layout"], supports: Supports, style: InterpretAttributes<Supports, Record<string, never>>["style"]): {
    className: string;
    style: CSSProperties;
};
type BlockInstance = {
    clientId: string;
    name: string;
    attributes: Record<string, unknown>;
    innerBlocks: BlockInstance[];
    isValid: boolean;
    originalContent: string;
    validationIssues: unknown[];
};
export declare function getInnerBlocksByName(blocks: BlockInstance[], blockName: string): BlockInstance[];
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
        collection: {
            href: string;
        };
        curies: {
            name: string;
            href: string;
            templated: boolean;
        };
        "wp:items": {
            href: string;
        };
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
        about: {
            href: string;
        };
        collection: {
            href: string;
        };
        curies: {
            name: string;
            href: string;
            templated: boolean;
        };
        self: {
            href: string;
        };
        "wp:post_type": {
            href: string;
        };
    };
};
/**
 * UsePostTypes hook
 */
export declare const usePostTypes: () => {
    postTypes: PostType[] | undefined;
    taxonomies: undefined;
    filteredPostTypes?: undefined;
    mappedTaxonomies?: undefined;
} | {
    filteredPostTypes: PostType[];
    mappedTaxonomies: Record<string, (Taxonomy<"edit"> & {
        terms: TaxonomyTerm[] | null;
    })[] | undefined> | undefined;
    postTypes?: undefined;
    taxonomies?: undefined;
};
/**
 * Custom multiple select list component
 */
export declare function CustomMultipleSelectList<ListItem extends {
    id: string;
    title: string;
    itemLabel?: string;
    isSelected: boolean;
}>({ list, containerClassName, renderItem, }: {
    list: ListItem[];
    containerClassName?: string;
    renderItem: ({ listItem, buttonProps, }: {
        listItem: ListItem;
        buttonProps: ComponentPropsWithoutRef<"button">;
    }) => React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function WPMenuIcon({ iconString, }: {
    iconString: undefined | null | "none" | "div" | `data:image/svg+xml,${string}` | `https://${string}` | `http://${string}` | `dashicons-${ComponentPropsWithoutRef<typeof DashIcon>["icon"]}` | (string & Record<never, never>);
}): import("react/jsx-runtime").JSX.Element | null;
export declare const orderByValues: {
    readonly author: "Author Id";
    readonly date: "Date";
    readonly id: "Id";
    readonly include: "Included posts by Id";
    readonly modified: "Date Modified";
    readonly parent: "Parent by Id";
    readonly relevance: "Relevance";
    readonly slug: "Post slug";
    readonly include_slugs: "Included posts by slug";
    readonly title: "Title";
};
export type OrderByOptions = keyof typeof orderByValues;
type Colours = {
    name: string;
    slug: string;
    color: string;
}[];
export declare function useColourPalette(): {
    userPalette: Colours | undefined;
    themePalette: Colours | undefined;
    defaultPalette: Colours | undefined;
    allPalettes: Record<string, {
        name: Colours[number]["name"];
        color: Colours[number]["color"];
    }>;
};
export declare function ColourSelectControl<const Supports extends BlockSupports, const Attributes extends BlockAttributes>({ colours, attributesDefinition, attributes, setAttributes, }: {
    colours: {
        attributeName: keyof Attributes;
        label: string;
    }[];
    attributesDefinition: Attributes;
    attributes: InterpretAttributes<Supports, Attributes>;
    setAttributes: CreateBlockEditProps<InterpretAttributes<Supports, Attributes>>["setAttributes"];
}): import("react/jsx-runtime").JSX.Element;
export declare function AspectRatioSelector({ ratioValue, ratioOnChange, imageFitValue, imageFitOnChange, }: {
    ratioValue: string;
    ratioOnChange: (newAspectRatio: string) => void;
    imageFitValue?: "contain" | "cover";
    imageFitOnChange?: (newImageFitValue: "contain" | "cover") => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function useUniqueBlockId<IDAttributeName extends string, InterpretedAttributes extends Record<IDAttributeName, string>>(attributes: InterpretedAttributes, idAttributeName: IDAttributeName, clientId: string, setAttributes: CreateBlockEditProps<InterpretedAttributes, never>["setAttributes"], blockName: string): ({ label, help, onValidChange, idAttribute, }: {
    label: ComponentProps<typeof TextControl>["label"];
    help: ComponentProps<typeof TextControl>["help"] | ((isValid: boolean) => ComponentProps<typeof TextControl>["help"]);
    onValidChange: (newValue: string) => void;
    idAttribute: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare function HeadingLevelSelect<const HeadingLevelOptions extends readonly ("h2" | "h3" | "h4" | "h5" | "h6" | "p")[]>({ levelOptions, selectedLevel, setSelectedHeadingLevel, }: {
    levelOptions: HeadingLevelOptions;
    selectedLevel: HeadingLevelOptions[number];
    setSelectedHeadingLevel: (newHeadingLevel: HeadingLevelOptions[number]) => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function useHasChildren(clientId: string): boolean;
export declare function VariationSelect<InterpretedAttributes extends Record<string, unknown>>({ clientId, blockInfo, variations, allowSkip, }: {
    clientId: string;
    blockInfo: {
        name: string;
        icon: JSX.Element;
    };
    variations: BlockVariations<InterpretedAttributes>;
    allowSkip?: boolean;
}): import("react/jsx-runtime").JSX.Element;
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
export declare function AttachmentImage({ imageId, className, size, }: {
    imageId: number;
    className?: string;
    size?: string;
}): import("react/jsx-runtime").JSX.Element | null;
export declare function convertBlockObjectToArray(innerBlocksTemplateObject: BlockInstanceAsObject): BlockInstanceAsArray;
export declare function useIframeResize(getElementToResizeItTo: () => HTMLElement | null): () => void;
export {};
//# sourceMappingURL=helpers.editor.d.ts.map