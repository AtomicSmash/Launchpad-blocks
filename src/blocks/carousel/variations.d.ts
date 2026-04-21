import type { InterpretedAttributes } from "./attributes";
import type { BlockVariations } from "@atomicsmash/blocks-helpers";
export declare const exampleSlides: {
    name: string;
    attributes: {
        id: number;
        url: string;
    };
}[];
export type FunctionalityVariationsType = {
    name: string;
    title: string;
    icon: JSX.Element;
    description: string;
    attributes: BlockVariations<InterpretedAttributes>[number]["attributes"] | null;
    baseInnerBlocks: NonNullable<BlockVariations<InterpretedAttributes>[number]["innerBlocks"]>;
    addFunctionalInnerBlocks: null | ((existingInnerBlocks: NonNullable<BlockVariations<InterpretedAttributes>[number]["innerBlocks"]>) => NonNullable<BlockVariations<InterpretedAttributes>[number]["innerBlocks"]>);
}[];
export declare const functionalityVariations: [{
    readonly name: "basic";
    readonly title: "Simple carousel";
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly description: "A basic carousel for viewing images.";
    readonly attributes: null;
    readonly baseInnerBlocks: [["launchpad-blocks/carousel-slides"]];
    readonly addFunctionalInnerBlocks: null;
}, {
    readonly name: "image-pop-up";
    readonly title: "Expandable image carousel";
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly description: "A carousel which opens in a full screen pop-up on click.";
    readonly attributes: {
        readonly shouldLinkSlidesToLightbox: true;
    };
    readonly baseInnerBlocks: [["launchpad-blocks/carousel-slides"]];
    readonly addFunctionalInnerBlocks: (baseTemplate: import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, [string, (Record<string, unknown> | undefined)?, (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, any[]>[] | undefined)?][]>[]) => (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, [string, (Record<string, unknown> | undefined)?, (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, any[]>[] | undefined)?][]> | [string, {}, [string, {
        lock: {
            move: boolean;
            remove: boolean;
        };
    }, ([string, {
        shouldPullImagesFromContext: boolean;
        lock: {
            move: boolean;
            remove: boolean;
        };
    }] | [string, {
        className: string;
        shouldShowTextVisually: boolean;
        lock: {
            move: boolean;
            remove: boolean;
        };
    }])[]][]])[];
}, {
    readonly name: "block-slides";
    readonly title: "Block based slides";
    readonly icon: import("react").JSX.Element;
    readonly description: "Advanced users only. Create slides out of blocks.";
    readonly attributes: null;
    readonly baseInnerBlocks: [["launchpad-blocks/carousel-content-slides", {
        readonly aspectRatio: "16/9";
    }, [["launchpad-blocks/carousel-content-slide", {
        readonly backgroundOrOverlayColour: "rgb(0 0 0)";
        readonly style: {
            readonly background: {
                readonly backgroundImage: {
                    readonly url: "https://picsum.photos/id/237/1600/900";
                };
                readonly backgroundSize: "cover";
            };
        };
    }, [["launchpad-blocks/carousel-content-slide-content", {}, [readonly ["core/heading", {
        readonly placeholder: "Your template";
    }], readonly ["core/paragraph", {
        readonly placeholder: "To change this template, select the Carousel Content Slides block and click \"Edit Template\" in the sidebar.";
    }]]]]]]]];
    readonly addFunctionalInnerBlocks: null;
}];
export type FunctionalityVariationNames = (typeof functionalityVariations)[number]["name"];
export declare const navigationVariations: [{
    readonly name: "skip";
    readonly title: "This variation is set when you hit skip. this title is not seen.";
    readonly icon: null;
    readonly addNavigationInnerBlocks: (baseTemplate: import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, [string, (Record<string, unknown> | undefined)?, (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, any[]>[] | undefined)?][]>[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, [string, (Record<string, unknown> | undefined)?, (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, any[]>[] | undefined)?][]>[];
}, {
    readonly name: "overlay";
    readonly title: "Overlaid arrows";
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly addNavigationInnerBlocks: (baseTemplate: import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, [string, (Record<string, unknown> | undefined)?, (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, any[]>[] | undefined)?][]>[]) => (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, [string, (Record<string, unknown> | undefined)?, (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, any[]>[] | undefined)?][]> | [string, {
        shouldShowTextVisually: boolean;
        className: string;
    }])[];
}, {
    readonly name: "with-dots";
    readonly title: "Arrows and dots";
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly addNavigationInnerBlocks: (baseTemplate: import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, [string, (Record<string, unknown> | undefined)?, (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, any[]>[] | undefined)?][]>[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, [string, (Record<string, unknown> | undefined)?, (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, any[]>[] | undefined)?][]>[];
}, {
    readonly name: "with-slide-count";
    readonly title: "Arrows and slide count";
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly addNavigationInnerBlocks: (baseTemplate: import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, [string, (Record<string, unknown> | undefined)?, (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, any[]>[] | undefined)?][]>[]) => (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, [string, (Record<string, unknown> | undefined)?, (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, any[]>[] | undefined)?][]> | [string, {}, [string, {
        layout: {
            type: string;
            flexWrap: string;
            justifyContent: string;
        };
    }][]])[];
}, {
    readonly name: "with-thumbnails";
    readonly title: "Arrows and thumbnails";
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly addNavigationInnerBlocks: (baseTemplate: import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, [string, (Record<string, unknown> | undefined)?, (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, any[]>[] | undefined)?][]>[]) => (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, [string, (Record<string, unknown> | undefined)?, (import("@atomicsmash/blocks-helpers").BlockInstanceAsArray<Record<string, unknown>, any[]>[] | undefined)?][]> | [string, {}, [string][]])[];
}];
export type NavigationVariationNames = (typeof navigationVariations)[number]["name"];
/**
 * Variations declared here should be registered in index.tsx
 */
export declare const variations: ({
    name: `${FunctionalityVariationNames}-${NavigationVariationNames}`;
} & {
    name: string;
    title: string;
    description?: string;
    category?: import("@atomicsmash/blocks-helpers").BlockCategory;
    icon?: string | JSX.Element;
    isDefault?: boolean;
    attributes?: {
        readonly images?: (number | (() => string) | {
            (): string;
            (locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
        } | (() => {
            id: number;
            url: string;
        } | undefined) | ((...items: {
            id: number;
            url: string;
        }[]) => number) | {
            (...items: ConcatArray<{
                id: number;
                url: string;
            }>[]): {
                id: number;
                url: string;
            }[];
            (...items: ({
                id: number;
                url: string;
            } | ConcatArray<{
                id: number;
                url: string;
            }>)[]): {
                id: number;
                url: string;
            }[];
        } | ((separator?: string) => string) | (() => {
            id: number;
            url: string;
        }[]) | (() => {
            id: number;
            url: string;
        } | undefined) | ((start?: number, end?: number) => {
            id: number;
            url: string;
        }[]) | ((compareFn?: ((a: {
            id: number;
            url: string;
        }, b: {
            id: number;
            url: string;
        }) => number) | undefined) => {
            id: number;
            url: string;
        }[]) | {
            (start: number, deleteCount?: number): {
                id: number;
                url: string;
            }[];
            (start: number, deleteCount: number, ...items: {
                id: number;
                url: string;
            }[]): {
                id: number;
                url: string;
            }[];
        } | ((...items: {
            id: number;
            url: string;
        }[]) => number) | ((searchElement: {
            id: number;
            url: string;
        }, fromIndex?: number) => number) | ((searchElement: {
            id: number;
            url: string;
        }, fromIndex?: number) => number) | {
            <S extends {
                id: number;
                url: string;
            }>(predicate: (value: {
                id: number;
                url: string;
            }, index: number, array: {
                id: number;
                url: string;
            }[]) => value is S, thisArg?: any): this is S[];
            (predicate: (value: {
                id: number;
                url: string;
            }, index: number, array: {
                id: number;
                url: string;
            }[]) => unknown, thisArg?: any): boolean;
        } | ((predicate: (value: {
            id: number;
            url: string;
        }, index: number, array: {
            id: number;
            url: string;
        }[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: {
            id: number;
            url: string;
        }, index: number, array: {
            id: number;
            url: string;
        }[]) => void, thisArg?: any) => void) | (<U>(callbackfn: (value: {
            id: number;
            url: string;
        }, index: number, array: {
            id: number;
            url: string;
        }[]) => U, thisArg?: any) => U[]) | {
            <S extends {
                id: number;
                url: string;
            }>(predicate: (value: {
                id: number;
                url: string;
            }, index: number, array: {
                id: number;
                url: string;
            }[]) => value is S, thisArg?: any): S[];
            (predicate: (value: {
                id: number;
                url: string;
            }, index: number, array: {
                id: number;
                url: string;
            }[]) => unknown, thisArg?: any): {
                id: number;
                url: string;
            }[];
        } | {
            (callbackfn: (previousValue: {
                id: number;
                url: string;
            }, currentValue: {
                id: number;
                url: string;
            }, currentIndex: number, array: {
                id: number;
                url: string;
            }[]) => {
                id: number;
                url: string;
            }): {
                id: number;
                url: string;
            };
            (callbackfn: (previousValue: {
                id: number;
                url: string;
            }, currentValue: {
                id: number;
                url: string;
            }, currentIndex: number, array: {
                id: number;
                url: string;
            }[]) => {
                id: number;
                url: string;
            }, initialValue: {
                id: number;
                url: string;
            }): {
                id: number;
                url: string;
            };
            <U>(callbackfn: (previousValue: U, currentValue: {
                id: number;
                url: string;
            }, currentIndex: number, array: {
                id: number;
                url: string;
            }[]) => U, initialValue: U): U;
        } | {
            (callbackfn: (previousValue: {
                id: number;
                url: string;
            }, currentValue: {
                id: number;
                url: string;
            }, currentIndex: number, array: {
                id: number;
                url: string;
            }[]) => {
                id: number;
                url: string;
            }): {
                id: number;
                url: string;
            };
            (callbackfn: (previousValue: {
                id: number;
                url: string;
            }, currentValue: {
                id: number;
                url: string;
            }, currentIndex: number, array: {
                id: number;
                url: string;
            }[]) => {
                id: number;
                url: string;
            }, initialValue: {
                id: number;
                url: string;
            }): {
                id: number;
                url: string;
            };
            <U>(callbackfn: (previousValue: U, currentValue: {
                id: number;
                url: string;
            }, currentIndex: number, array: {
                id: number;
                url: string;
            }[]) => U, initialValue: U): U;
        } | {
            <S extends {
                id: number;
                url: string;
            }>(predicate: (value: {
                id: number;
                url: string;
            }, index: number, obj: {
                id: number;
                url: string;
            }[]) => value is S, thisArg?: any): S | undefined;
            (predicate: (value: {
                id: number;
                url: string;
            }, index: number, obj: {
                id: number;
                url: string;
            }[]) => unknown, thisArg?: any): {
                id: number;
                url: string;
            } | undefined;
        } | ((predicate: (value: {
            id: number;
            url: string;
        }, index: number, obj: {
            id: number;
            url: string;
        }[]) => unknown, thisArg?: any) => number) | ((value: {
            id: number;
            url: string;
        }, start?: number, end?: number) => {
            id: number;
            url: string;
        }[]) | ((target: number, start: number, end?: number) => {
            id: number;
            url: string;
        }[]) | (() => ArrayIterator<[number, {
            id: number;
            url: string;
        }]>) | (() => ArrayIterator<number>) | (() => ArrayIterator<{
            id: number;
            url: string;
        }>) | ((searchElement: {
            id: number;
            url: string;
        }, fromIndex?: number) => boolean) | (<U, This = undefined>(callback: (this: This, value: {
            id: number;
            url: string;
        }, index: number, array: {
            id: number;
            url: string;
        }[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | ((index: number) => {
            id: number;
            url: string;
        } | undefined) | (() => ArrayIterator<{
            id: number;
            url: string;
        }>) | {
            id?: number | undefined;
            url?: string | undefined;
        } | {
            [x: number]: boolean | undefined;
            length?: boolean | undefined;
            toString?: boolean | undefined;
            toLocaleString?: boolean | undefined;
            pop?: boolean | undefined;
            push?: boolean | undefined;
            concat?: boolean | undefined;
            join?: boolean | undefined;
            reverse?: boolean | undefined;
            shift?: boolean | undefined;
            slice?: boolean | undefined;
            sort?: boolean | undefined;
            splice?: boolean | undefined;
            unshift?: boolean | undefined;
            indexOf?: boolean | undefined;
            lastIndexOf?: boolean | undefined;
            every?: boolean | undefined;
            some?: boolean | undefined;
            forEach?: boolean | undefined;
            map?: boolean | undefined;
            filter?: boolean | undefined;
            reduce?: boolean | undefined;
            reduceRight?: boolean | undefined;
            find?: boolean | undefined;
            findIndex?: boolean | undefined;
            fill?: boolean | undefined;
            copyWithin?: boolean | undefined;
            entries?: boolean | undefined;
            keys?: boolean | undefined;
            values?: boolean | undefined;
            includes?: boolean | undefined;
            flatMap?: boolean | undefined;
            flat?: boolean | undefined;
            at?: boolean | undefined;
            [Symbol.iterator]?: boolean | undefined;
            readonly [Symbol.unscopables]?: boolean | undefined;
        })[] | undefined;
        readonly shouldLoop?: boolean | undefined;
        readonly shouldLinkSlidesToLightbox?: boolean | undefined;
        readonly slides?: (number | {
            <S extends import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>(predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, obj: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => value is S, thisArg?: any): S | undefined;
            (predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, obj: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => unknown, thisArg?: any): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject | undefined;
        } | (() => string) | {
            (): string;
            (locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
        } | (() => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject | undefined) | ((...items: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => number) | {
            (...items: ConcatArray<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>[]): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            (...items: (import("@atomicsmash/blocks-helpers").BlockInstanceAsObject | ConcatArray<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>)[]): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
        } | ((separator?: string) => string) | (() => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) | (() => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject | undefined) | ((start?: number, end?: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) | ((compareFn?: ((a: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, b: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject) => number) | undefined) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) | {
            (start: number, deleteCount?: number): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            (start: number, deleteCount: number, ...items: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
        } | ((...items: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => number) | ((searchElement: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, fromIndex?: number) => number) | ((searchElement: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, fromIndex?: number) => number) | {
            <S extends import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>(predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => value is S, thisArg?: any): this is S[];
            (predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => unknown, thisArg?: any): boolean;
        } | ((predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => void, thisArg?: any) => void) | (<U>(callbackfn: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => U, thisArg?: any) => U[]) | {
            <S extends import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>(predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => value is S, thisArg?: any): S[];
            (predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => unknown, thisArg?: any): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
        } | {
            (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject;
            (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, initialValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject;
            <U>(callbackfn: (previousValue: U, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => U, initialValue: U): U;
        } | {
            (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject;
            (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, initialValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject;
            <U>(callbackfn: (previousValue: U, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => U, initialValue: U): U;
        } | ((predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, obj: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => unknown, thisArg?: any) => number) | ((value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, start?: number, end?: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) | ((target: number, start: number, end?: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) | (() => ArrayIterator<[number, import("@atomicsmash/blocks-helpers").BlockInstanceAsObject]>) | (() => ArrayIterator<number>) | (() => ArrayIterator<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>) | ((searchElement: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, fromIndex?: number) => boolean) | (<U, This = undefined>(callback: (this: This, value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | ((index: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject | undefined) | (() => ArrayIterator<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>) | {
            name?: string | undefined;
            attributes?: {
                [x: string]: unknown;
            } | undefined;
            innerBlocks?: (number | (<U>(callbackfn: (value: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, index: number, array: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => U, thisArg?: any) => U[]) | (() => ArrayIterator<{
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }>) | ((value: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, start?: number, end?: number) => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) | {
                <S extends {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }>(predicate: (value: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, index: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => value is S, thisArg?: any): S[];
                (predicate: (value: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, index: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => unknown, thisArg?: any): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[];
            } | (() => ArrayIterator<{
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }>) | {
                (...items: ConcatArray<{
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }>[]): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[];
                (...items: ({
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                } | ConcatArray<{
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }>)[]): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[];
            } | ((searchElement: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, fromIndex?: number) => number) | ((searchElement: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, fromIndex?: number) => number) | ((start?: number, end?: number) => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) | ((searchElement: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, fromIndex?: number) => boolean) | ((index: number) => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            } | undefined) | {
                (): string;
                (locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
            } | ((compareFn?: ((a: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, b: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }) => number) | undefined) => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) | (() => string) | (() => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            } | undefined) | ((...items: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => number) | ((separator?: string) => string) | (() => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) | (() => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            } | undefined) | {
                (start: number, deleteCount?: number): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[];
                (start: number, deleteCount: number, ...items: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[];
            } | ((...items: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => number) | {
                <S extends {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }>(predicate: (value: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, index: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => value is S, thisArg?: any): this is S[];
                (predicate: (value: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, index: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => unknown, thisArg?: any): boolean;
            } | ((predicate: (value: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, index: number, array: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, index: number, array: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => void, thisArg?: any) => void) | {
                (callbackfn: (previousValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentIndex: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                };
                (callbackfn: (previousValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentIndex: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, initialValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                };
                <U>(callbackfn: (previousValue: U, currentValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentIndex: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => U, initialValue: U): U;
            } | {
                (callbackfn: (previousValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentIndex: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                };
                (callbackfn: (previousValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentIndex: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, initialValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                };
                <U>(callbackfn: (previousValue: U, currentValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentIndex: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => U, initialValue: U): U;
            } | {
                <S extends {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }>(predicate: (value: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, index: number, obj: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => value is S, thisArg?: any): S | undefined;
                (predicate: (value: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, index: number, obj: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => unknown, thisArg?: any): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                } | undefined;
            } | ((predicate: (value: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, index: number, obj: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => unknown, thisArg?: any) => number) | ((target: number, start: number, end?: number) => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) | (() => ArrayIterator<[number, {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }]>) | (() => ArrayIterator<number>) | (<U, This = undefined>(callback: (this: This, value: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, index: number, array: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | {
                name?: string | undefined;
                attributes?: {
                    [x: string]: unknown;
                } | undefined;
                innerBlocks?: (number | ((index: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]> | undefined) | (() => ArrayIterator<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>>) | ((value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, start?: number, end?: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) | {
                    <S extends import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>>(predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => value is S, thisArg?: any): S[];
                    (predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => unknown, thisArg?: any): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[];
                } | (() => ArrayIterator<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>>) | {
                    (...items: ConcatArray<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>>[]): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[];
                    (...items: (import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]> | ConcatArray<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>>)[]): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[];
                } | ((searchElement: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, fromIndex?: number) => number) | ((searchElement: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, fromIndex?: number) => number) | ((start?: number, end?: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) | ((searchElement: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, fromIndex?: number) => boolean) | {
                    (): string;
                    (locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
                } | (<U>(callbackfn: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => U, thisArg?: any) => U[]) | ((compareFn?: ((a: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, b: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>) => number) | undefined) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) | (() => string) | (() => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]> | undefined) | ((...items: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => number) | ((separator?: string) => string) | (() => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) | (() => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]> | undefined) | {
                    (start: number, deleteCount?: number): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[];
                    (start: number, deleteCount: number, ...items: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[];
                } | ((...items: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => number) | {
                    <S extends import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>>(predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => value is S, thisArg?: any): this is S[];
                    (predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => unknown, thisArg?: any): boolean;
                } | ((predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => void, thisArg?: any) => void) | {
                    (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>;
                    (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, initialValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>;
                    <U>(callbackfn: (previousValue: U, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => U, initialValue: U): U;
                } | {
                    (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>;
                    (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, initialValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>;
                    <U>(callbackfn: (previousValue: U, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => U, initialValue: U): U;
                } | {
                    <S extends import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>>(predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, index: number, obj: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => value is S, thisArg?: any): S | undefined;
                    (predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, index: number, obj: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => unknown, thisArg?: any): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]> | undefined;
                } | ((predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, index: number, obj: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => unknown, thisArg?: any) => number) | ((target: number, start: number, end?: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) | (() => ArrayIterator<[number, import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>]>) | (() => ArrayIterator<number>) | (<U, This = undefined>(callback: (this: This, value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | {
                    name?: string | undefined;
                    attributes?: {
                        [x: string]: unknown;
                    } | undefined;
                    innerBlocks?: (number | (<U>(callbackfn: (value: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, index: number, array: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => U, thisArg?: any) => U[]) | (() => ArrayIterator<{
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }>) | ((value: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, start?: number, end?: number) => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) | {
                        <S extends {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }>(predicate: (value: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, index: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => value is S, thisArg?: any): S[];
                        (predicate: (value: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, index: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => unknown, thisArg?: any): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[];
                    } | (() => ArrayIterator<{
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }>) | {
                        (...items: ConcatArray<{
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }>[]): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[];
                        (...items: ({
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        } | ConcatArray<{
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }>)[]): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[];
                    } | ((searchElement: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, fromIndex?: number) => number) | ((searchElement: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, fromIndex?: number) => number) | ((start?: number, end?: number) => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) | ((searchElement: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, fromIndex?: number) => boolean) | ((index: number) => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    } | undefined) | {
                        (): string;
                        (locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
                    } | ((compareFn?: ((a: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, b: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }) => number) | undefined) => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) | (() => string) | (() => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    } | undefined) | ((...items: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => number) | ((separator?: string) => string) | (() => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) | (() => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    } | undefined) | {
                        (start: number, deleteCount?: number): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[];
                        (start: number, deleteCount: number, ...items: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[];
                    } | ((...items: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => number) | {
                        <S extends {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }>(predicate: (value: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, index: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => value is S, thisArg?: any): this is S[];
                        (predicate: (value: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, index: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => unknown, thisArg?: any): boolean;
                    } | ((predicate: (value: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, index: number, array: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, index: number, array: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => void, thisArg?: any) => void) | {
                        (callbackfn: (previousValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentIndex: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        };
                        (callbackfn: (previousValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentIndex: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, initialValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        };
                        <U>(callbackfn: (previousValue: U, currentValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentIndex: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => U, initialValue: U): U;
                    } | {
                        (callbackfn: (previousValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentIndex: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        };
                        (callbackfn: (previousValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentIndex: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, initialValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        };
                        <U>(callbackfn: (previousValue: U, currentValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentIndex: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => U, initialValue: U): U;
                    } | {
                        <S extends {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }>(predicate: (value: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, index: number, obj: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => value is S, thisArg?: any): S | undefined;
                        (predicate: (value: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, index: number, obj: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => unknown, thisArg?: any): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        } | undefined;
                    } | ((predicate: (value: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, index: number, obj: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => unknown, thisArg?: any) => number) | ((target: number, start: number, end?: number) => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) | (() => ArrayIterator<[number, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }]>) | (() => ArrayIterator<number>) | (<U, This = undefined>(callback: (this: This, value: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, index: number, array: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | /*elided*/ any | {
                        [x: number]: boolean | undefined;
                        length?: boolean | undefined;
                        toString?: boolean | undefined;
                        toLocaleString?: boolean | undefined;
                        pop?: boolean | undefined;
                        push?: boolean | undefined;
                        concat?: boolean | undefined;
                        join?: boolean | undefined;
                        reverse?: boolean | undefined;
                        shift?: boolean | undefined;
                        slice?: boolean | undefined;
                        sort?: boolean | undefined;
                        splice?: boolean | undefined;
                        unshift?: boolean | undefined;
                        indexOf?: boolean | undefined;
                        lastIndexOf?: boolean | undefined;
                        every?: boolean | undefined;
                        some?: boolean | undefined;
                        forEach?: boolean | undefined;
                        map?: boolean | undefined;
                        filter?: boolean | undefined;
                        reduce?: boolean | undefined;
                        reduceRight?: boolean | undefined;
                        find?: boolean | undefined;
                        findIndex?: boolean | undefined;
                        fill?: boolean | undefined;
                        copyWithin?: boolean | undefined;
                        entries?: boolean | undefined;
                        keys?: boolean | undefined;
                        values?: boolean | undefined;
                        includes?: boolean | undefined;
                        flatMap?: boolean | undefined;
                        flat?: boolean | undefined;
                        at?: boolean | undefined;
                        [Symbol.iterator]?: boolean | undefined;
                        readonly [Symbol.unscopables]?: boolean | undefined;
                    })[] | undefined;
                } | {
                    [x: number]: boolean | undefined;
                    length?: boolean | undefined;
                    toString?: boolean | undefined;
                    toLocaleString?: boolean | undefined;
                    pop?: boolean | undefined;
                    push?: boolean | undefined;
                    concat?: boolean | undefined;
                    join?: boolean | undefined;
                    reverse?: boolean | undefined;
                    shift?: boolean | undefined;
                    slice?: boolean | undefined;
                    sort?: boolean | undefined;
                    splice?: boolean | undefined;
                    unshift?: boolean | undefined;
                    indexOf?: boolean | undefined;
                    lastIndexOf?: boolean | undefined;
                    every?: boolean | undefined;
                    some?: boolean | undefined;
                    forEach?: boolean | undefined;
                    map?: boolean | undefined;
                    filter?: boolean | undefined;
                    reduce?: boolean | undefined;
                    reduceRight?: boolean | undefined;
                    find?: boolean | undefined;
                    findIndex?: boolean | undefined;
                    fill?: boolean | undefined;
                    copyWithin?: boolean | undefined;
                    entries?: boolean | undefined;
                    keys?: boolean | undefined;
                    values?: boolean | undefined;
                    includes?: boolean | undefined;
                    flatMap?: boolean | undefined;
                    flat?: boolean | undefined;
                    at?: boolean | undefined;
                    [Symbol.iterator]?: boolean | undefined;
                    readonly [Symbol.unscopables]?: boolean | undefined;
                })[] | undefined;
            } | {
                [x: number]: boolean | undefined;
                length?: boolean | undefined;
                toString?: boolean | undefined;
                toLocaleString?: boolean | undefined;
                pop?: boolean | undefined;
                push?: boolean | undefined;
                concat?: boolean | undefined;
                join?: boolean | undefined;
                reverse?: boolean | undefined;
                shift?: boolean | undefined;
                slice?: boolean | undefined;
                sort?: boolean | undefined;
                splice?: boolean | undefined;
                unshift?: boolean | undefined;
                indexOf?: boolean | undefined;
                lastIndexOf?: boolean | undefined;
                every?: boolean | undefined;
                some?: boolean | undefined;
                forEach?: boolean | undefined;
                map?: boolean | undefined;
                filter?: boolean | undefined;
                reduce?: boolean | undefined;
                reduceRight?: boolean | undefined;
                find?: boolean | undefined;
                findIndex?: boolean | undefined;
                fill?: boolean | undefined;
                copyWithin?: boolean | undefined;
                entries?: boolean | undefined;
                keys?: boolean | undefined;
                values?: boolean | undefined;
                includes?: boolean | undefined;
                flatMap?: boolean | undefined;
                flat?: boolean | undefined;
                at?: boolean | undefined;
                [Symbol.iterator]?: boolean | undefined;
                readonly [Symbol.unscopables]?: boolean | undefined;
            })[] | undefined;
        } | {
            [x: number]: boolean | undefined;
            length?: boolean | undefined;
            toString?: boolean | undefined;
            toLocaleString?: boolean | undefined;
            pop?: boolean | undefined;
            push?: boolean | undefined;
            concat?: boolean | undefined;
            join?: boolean | undefined;
            reverse?: boolean | undefined;
            shift?: boolean | undefined;
            slice?: boolean | undefined;
            sort?: boolean | undefined;
            splice?: boolean | undefined;
            unshift?: boolean | undefined;
            indexOf?: boolean | undefined;
            lastIndexOf?: boolean | undefined;
            every?: boolean | undefined;
            some?: boolean | undefined;
            forEach?: boolean | undefined;
            map?: boolean | undefined;
            filter?: boolean | undefined;
            reduce?: boolean | undefined;
            reduceRight?: boolean | undefined;
            find?: boolean | undefined;
            findIndex?: boolean | undefined;
            fill?: boolean | undefined;
            copyWithin?: boolean | undefined;
            entries?: boolean | undefined;
            keys?: boolean | undefined;
            values?: boolean | undefined;
            includes?: boolean | undefined;
            flatMap?: boolean | undefined;
            flat?: boolean | undefined;
            at?: boolean | undefined;
            [Symbol.iterator]?: boolean | undefined;
            readonly [Symbol.unscopables]?: boolean | undefined;
        })[] | undefined;
        readonly currentlySelectedSlide?: number | undefined;
        align?: (("center" | "right" | "left") | ("full" | "wide")) | undefined;
        className?: string | undefined;
        layout?: {
            type?: "default" | undefined;
        } | {
            type?: "flex" | undefined;
            flexWrap?: "wrap" | "nowrap" | undefined;
            orientation?: "horizontal" | undefined;
            justifyContent?: "left" | "center" | "right" | "space-between" | undefined;
            verticalAlignment?: "top" | "center" | "bottom" | "stretch" | undefined;
        } | {
            type?: "flex" | undefined;
            flexWrap?: "wrap" | "nowrap" | undefined;
            orientation?: "vertical" | undefined;
            justifyContent?: "left" | "center" | "right" | "stretch" | undefined;
            verticalAlignment?: "top" | "center" | "bottom" | "space-between" | undefined;
        } | {
            type?: "grid" | undefined;
            minimumColumnWidth?: string | undefined;
            columnCount?: never | undefined;
        } | {
            type?: "grid" | undefined;
            minimumColumnWidth?: never | undefined;
            columnCount?: number | undefined;
        } | {
            type?: "constrained" | undefined;
            justifyContent?: "left" | "center" | "right" | undefined;
            contentSize?: string | undefined;
            wideSize?: string | undefined;
        } | undefined;
        lock?: {
            move?: boolean | undefined;
            remove?: boolean | undefined;
        } | undefined;
        metadata?: {
            name?: string | undefined;
        } | undefined;
        style?: {
            background?: {
                backgroundImage?: {
                    url?: string | undefined;
                    id?: number | undefined;
                    source?: string | undefined;
                    title?: string | undefined;
                } | undefined;
                backgroundPosition?: string | undefined;
            } | undefined;
            spacing?: {
                margin?: {
                    bottom?: string | undefined;
                    left?: string | undefined;
                    right?: string | undefined;
                    top?: string | undefined;
                } | undefined;
                padding?: {
                    bottom?: string | undefined;
                    left?: string | undefined;
                    right?: string | undefined;
                    top?: string | undefined;
                } | undefined;
                blockGap?: string | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsArray[];
    example?: import("@atomicsmash/blocks-helpers").BlockExample<InterpretedAttributes> | undefined;
    scope?: ("inserter" | "block" | "transform")[];
    keywords?: string[];
    isActive?: string[] | ((blockAttributes: InterpretedAttributes, variationAttributes: {
        readonly images?: (number | (() => string) | {
            (): string;
            (locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
        } | (() => {
            id: number;
            url: string;
        } | undefined) | ((...items: {
            id: number;
            url: string;
        }[]) => number) | {
            (...items: ConcatArray<{
                id: number;
                url: string;
            }>[]): {
                id: number;
                url: string;
            }[];
            (...items: ({
                id: number;
                url: string;
            } | ConcatArray<{
                id: number;
                url: string;
            }>)[]): {
                id: number;
                url: string;
            }[];
        } | ((separator?: string) => string) | (() => {
            id: number;
            url: string;
        }[]) | (() => {
            id: number;
            url: string;
        } | undefined) | ((start?: number, end?: number) => {
            id: number;
            url: string;
        }[]) | ((compareFn?: ((a: {
            id: number;
            url: string;
        }, b: {
            id: number;
            url: string;
        }) => number) | undefined) => {
            id: number;
            url: string;
        }[]) | {
            (start: number, deleteCount?: number): {
                id: number;
                url: string;
            }[];
            (start: number, deleteCount: number, ...items: {
                id: number;
                url: string;
            }[]): {
                id: number;
                url: string;
            }[];
        } | ((...items: {
            id: number;
            url: string;
        }[]) => number) | ((searchElement: {
            id: number;
            url: string;
        }, fromIndex?: number) => number) | ((searchElement: {
            id: number;
            url: string;
        }, fromIndex?: number) => number) | {
            <S extends {
                id: number;
                url: string;
            }>(predicate: (value: {
                id: number;
                url: string;
            }, index: number, array: {
                id: number;
                url: string;
            }[]) => value is S, thisArg?: any): this is S[];
            (predicate: (value: {
                id: number;
                url: string;
            }, index: number, array: {
                id: number;
                url: string;
            }[]) => unknown, thisArg?: any): boolean;
        } | ((predicate: (value: {
            id: number;
            url: string;
        }, index: number, array: {
            id: number;
            url: string;
        }[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: {
            id: number;
            url: string;
        }, index: number, array: {
            id: number;
            url: string;
        }[]) => void, thisArg?: any) => void) | (<U>(callbackfn: (value: {
            id: number;
            url: string;
        }, index: number, array: {
            id: number;
            url: string;
        }[]) => U, thisArg?: any) => U[]) | {
            <S extends {
                id: number;
                url: string;
            }>(predicate: (value: {
                id: number;
                url: string;
            }, index: number, array: {
                id: number;
                url: string;
            }[]) => value is S, thisArg?: any): S[];
            (predicate: (value: {
                id: number;
                url: string;
            }, index: number, array: {
                id: number;
                url: string;
            }[]) => unknown, thisArg?: any): {
                id: number;
                url: string;
            }[];
        } | {
            (callbackfn: (previousValue: {
                id: number;
                url: string;
            }, currentValue: {
                id: number;
                url: string;
            }, currentIndex: number, array: {
                id: number;
                url: string;
            }[]) => {
                id: number;
                url: string;
            }): {
                id: number;
                url: string;
            };
            (callbackfn: (previousValue: {
                id: number;
                url: string;
            }, currentValue: {
                id: number;
                url: string;
            }, currentIndex: number, array: {
                id: number;
                url: string;
            }[]) => {
                id: number;
                url: string;
            }, initialValue: {
                id: number;
                url: string;
            }): {
                id: number;
                url: string;
            };
            <U>(callbackfn: (previousValue: U, currentValue: {
                id: number;
                url: string;
            }, currentIndex: number, array: {
                id: number;
                url: string;
            }[]) => U, initialValue: U): U;
        } | {
            (callbackfn: (previousValue: {
                id: number;
                url: string;
            }, currentValue: {
                id: number;
                url: string;
            }, currentIndex: number, array: {
                id: number;
                url: string;
            }[]) => {
                id: number;
                url: string;
            }): {
                id: number;
                url: string;
            };
            (callbackfn: (previousValue: {
                id: number;
                url: string;
            }, currentValue: {
                id: number;
                url: string;
            }, currentIndex: number, array: {
                id: number;
                url: string;
            }[]) => {
                id: number;
                url: string;
            }, initialValue: {
                id: number;
                url: string;
            }): {
                id: number;
                url: string;
            };
            <U>(callbackfn: (previousValue: U, currentValue: {
                id: number;
                url: string;
            }, currentIndex: number, array: {
                id: number;
                url: string;
            }[]) => U, initialValue: U): U;
        } | {
            <S extends {
                id: number;
                url: string;
            }>(predicate: (value: {
                id: number;
                url: string;
            }, index: number, obj: {
                id: number;
                url: string;
            }[]) => value is S, thisArg?: any): S | undefined;
            (predicate: (value: {
                id: number;
                url: string;
            }, index: number, obj: {
                id: number;
                url: string;
            }[]) => unknown, thisArg?: any): {
                id: number;
                url: string;
            } | undefined;
        } | ((predicate: (value: {
            id: number;
            url: string;
        }, index: number, obj: {
            id: number;
            url: string;
        }[]) => unknown, thisArg?: any) => number) | ((value: {
            id: number;
            url: string;
        }, start?: number, end?: number) => {
            id: number;
            url: string;
        }[]) | ((target: number, start: number, end?: number) => {
            id: number;
            url: string;
        }[]) | (() => ArrayIterator<[number, {
            id: number;
            url: string;
        }]>) | (() => ArrayIterator<number>) | (() => ArrayIterator<{
            id: number;
            url: string;
        }>) | ((searchElement: {
            id: number;
            url: string;
        }, fromIndex?: number) => boolean) | (<U, This = undefined>(callback: (this: This, value: {
            id: number;
            url: string;
        }, index: number, array: {
            id: number;
            url: string;
        }[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | ((index: number) => {
            id: number;
            url: string;
        } | undefined) | (() => ArrayIterator<{
            id: number;
            url: string;
        }>) | {
            id?: number | undefined;
            url?: string | undefined;
        } | {
            [x: number]: boolean | undefined;
            length?: boolean | undefined;
            toString?: boolean | undefined;
            toLocaleString?: boolean | undefined;
            pop?: boolean | undefined;
            push?: boolean | undefined;
            concat?: boolean | undefined;
            join?: boolean | undefined;
            reverse?: boolean | undefined;
            shift?: boolean | undefined;
            slice?: boolean | undefined;
            sort?: boolean | undefined;
            splice?: boolean | undefined;
            unshift?: boolean | undefined;
            indexOf?: boolean | undefined;
            lastIndexOf?: boolean | undefined;
            every?: boolean | undefined;
            some?: boolean | undefined;
            forEach?: boolean | undefined;
            map?: boolean | undefined;
            filter?: boolean | undefined;
            reduce?: boolean | undefined;
            reduceRight?: boolean | undefined;
            find?: boolean | undefined;
            findIndex?: boolean | undefined;
            fill?: boolean | undefined;
            copyWithin?: boolean | undefined;
            entries?: boolean | undefined;
            keys?: boolean | undefined;
            values?: boolean | undefined;
            includes?: boolean | undefined;
            flatMap?: boolean | undefined;
            flat?: boolean | undefined;
            at?: boolean | undefined;
            [Symbol.iterator]?: boolean | undefined;
            readonly [Symbol.unscopables]?: boolean | undefined;
        })[] | undefined;
        readonly shouldLoop?: boolean | undefined;
        readonly shouldLinkSlidesToLightbox?: boolean | undefined;
        readonly slides?: (number | {
            <S extends import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>(predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, obj: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => value is S, thisArg?: any): S | undefined;
            (predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, obj: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => unknown, thisArg?: any): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject | undefined;
        } | (() => string) | {
            (): string;
            (locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
        } | (() => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject | undefined) | ((...items: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => number) | {
            (...items: ConcatArray<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>[]): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            (...items: (import("@atomicsmash/blocks-helpers").BlockInstanceAsObject | ConcatArray<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>)[]): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
        } | ((separator?: string) => string) | (() => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) | (() => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject | undefined) | ((start?: number, end?: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) | ((compareFn?: ((a: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, b: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject) => number) | undefined) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) | {
            (start: number, deleteCount?: number): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            (start: number, deleteCount: number, ...items: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
        } | ((...items: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => number) | ((searchElement: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, fromIndex?: number) => number) | ((searchElement: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, fromIndex?: number) => number) | {
            <S extends import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>(predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => value is S, thisArg?: any): this is S[];
            (predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => unknown, thisArg?: any): boolean;
        } | ((predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => void, thisArg?: any) => void) | (<U>(callbackfn: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => U, thisArg?: any) => U[]) | {
            <S extends import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>(predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => value is S, thisArg?: any): S[];
            (predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => unknown, thisArg?: any): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
        } | {
            (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject;
            (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, initialValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject;
            <U>(callbackfn: (previousValue: U, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => U, initialValue: U): U;
        } | {
            (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject;
            (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, initialValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject;
            <U>(callbackfn: (previousValue: U, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => U, initialValue: U): U;
        } | ((predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, obj: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => unknown, thisArg?: any) => number) | ((value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, start?: number, end?: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) | ((target: number, start: number, end?: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) | (() => ArrayIterator<[number, import("@atomicsmash/blocks-helpers").BlockInstanceAsObject]>) | (() => ArrayIterator<number>) | (() => ArrayIterator<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>) | ((searchElement: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, fromIndex?: number) => boolean) | (<U, This = undefined>(callback: (this: This, value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | ((index: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject | undefined) | (() => ArrayIterator<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject>) | {
            name?: string | undefined;
            attributes?: {
                [x: string]: unknown;
            } | undefined;
            innerBlocks?: (number | (<U>(callbackfn: (value: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, index: number, array: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => U, thisArg?: any) => U[]) | (() => ArrayIterator<{
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }>) | ((value: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, start?: number, end?: number) => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) | {
                <S extends {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }>(predicate: (value: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, index: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => value is S, thisArg?: any): S[];
                (predicate: (value: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, index: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => unknown, thisArg?: any): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[];
            } | (() => ArrayIterator<{
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }>) | {
                (...items: ConcatArray<{
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }>[]): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[];
                (...items: ({
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                } | ConcatArray<{
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }>)[]): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[];
            } | ((searchElement: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, fromIndex?: number) => number) | ((searchElement: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, fromIndex?: number) => number) | ((start?: number, end?: number) => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) | ((searchElement: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, fromIndex?: number) => boolean) | ((index: number) => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            } | undefined) | {
                (): string;
                (locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
            } | ((compareFn?: ((a: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, b: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }) => number) | undefined) => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) | (() => string) | (() => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            } | undefined) | ((...items: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => number) | ((separator?: string) => string) | (() => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) | (() => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            } | undefined) | {
                (start: number, deleteCount?: number): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[];
                (start: number, deleteCount: number, ...items: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[];
            } | ((...items: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => number) | {
                <S extends {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }>(predicate: (value: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, index: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => value is S, thisArg?: any): this is S[];
                (predicate: (value: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, index: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => unknown, thisArg?: any): boolean;
            } | ((predicate: (value: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, index: number, array: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, index: number, array: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => void, thisArg?: any) => void) | {
                (callbackfn: (previousValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentIndex: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                };
                (callbackfn: (previousValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentIndex: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, initialValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                };
                <U>(callbackfn: (previousValue: U, currentValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentIndex: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => U, initialValue: U): U;
            } | {
                (callbackfn: (previousValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentIndex: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                };
                (callbackfn: (previousValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentIndex: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, initialValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                };
                <U>(callbackfn: (previousValue: U, currentValue: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, currentIndex: number, array: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => U, initialValue: U): U;
            } | {
                <S extends {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }>(predicate: (value: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, index: number, obj: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => value is S, thisArg?: any): S | undefined;
                (predicate: (value: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }, index: number, obj: {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]) => unknown, thisArg?: any): {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                } | undefined;
            } | ((predicate: (value: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, index: number, obj: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => unknown, thisArg?: any) => number) | ((target: number, start: number, end?: number) => {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) | (() => ArrayIterator<[number, {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }]>) | (() => ArrayIterator<number>) | (<U, This = undefined>(callback: (this: This, value: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }, index: number, array: {
                name: string;
                attributes?: Record<string, unknown> | undefined;
                innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
            }[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | {
                name?: string | undefined;
                attributes?: {
                    [x: string]: unknown;
                } | undefined;
                innerBlocks?: (number | ((index: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]> | undefined) | (() => ArrayIterator<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>>) | ((value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, start?: number, end?: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) | {
                    <S extends import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>>(predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => value is S, thisArg?: any): S[];
                    (predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => unknown, thisArg?: any): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[];
                } | (() => ArrayIterator<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>>) | {
                    (...items: ConcatArray<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>>[]): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[];
                    (...items: (import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]> | ConcatArray<import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>>)[]): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[];
                } | ((searchElement: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, fromIndex?: number) => number) | ((searchElement: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, fromIndex?: number) => number) | ((start?: number, end?: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) | ((searchElement: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, fromIndex?: number) => boolean) | {
                    (): string;
                    (locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
                } | (<U>(callbackfn: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => U, thisArg?: any) => U[]) | ((compareFn?: ((a: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, b: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>) => number) | undefined) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) | (() => string) | (() => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]> | undefined) | ((...items: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => number) | ((separator?: string) => string) | (() => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) | (() => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]> | undefined) | {
                    (start: number, deleteCount?: number): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[];
                    (start: number, deleteCount: number, ...items: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[];
                } | ((...items: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => number) | {
                    <S extends import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>>(predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => value is S, thisArg?: any): this is S[];
                    (predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => unknown, thisArg?: any): boolean;
                } | ((predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => void, thisArg?: any) => void) | {
                    (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>;
                    (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, initialValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>;
                    <U>(callbackfn: (previousValue: U, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => U, initialValue: U): U;
                } | {
                    (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>;
                    (callbackfn: (previousValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, initialValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>;
                    <U>(callbackfn: (previousValue: U, currentValue: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, currentIndex: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => U, initialValue: U): U;
                } | {
                    <S extends import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>>(predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, index: number, obj: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => value is S, thisArg?: any): S | undefined;
                    (predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>, index: number, obj: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]>[]) => unknown, thisArg?: any): import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]> | undefined;
                } | ((predicate: (value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, index: number, obj: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => unknown, thisArg?: any) => number) | ((target: number, start: number, end?: number) => import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) | (() => ArrayIterator<[number, import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>]>) | (() => ArrayIterator<number>) | (<U, This = undefined>(callback: (this: This, value: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>, index: number, array: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                }[]>[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | {
                    name?: string | undefined;
                    attributes?: {
                        [x: string]: unknown;
                    } | undefined;
                    innerBlocks?: (number | (<U>(callbackfn: (value: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, index: number, array: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => U, thisArg?: any) => U[]) | (() => ArrayIterator<{
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }>) | ((value: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, start?: number, end?: number) => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) | {
                        <S extends {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }>(predicate: (value: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, index: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => value is S, thisArg?: any): S[];
                        (predicate: (value: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, index: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => unknown, thisArg?: any): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[];
                    } | (() => ArrayIterator<{
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }>) | {
                        (...items: ConcatArray<{
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }>[]): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[];
                        (...items: ({
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        } | ConcatArray<{
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }>)[]): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[];
                    } | ((searchElement: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, fromIndex?: number) => number) | ((searchElement: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, fromIndex?: number) => number) | ((start?: number, end?: number) => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) | ((searchElement: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, fromIndex?: number) => boolean) | ((index: number) => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    } | undefined) | {
                        (): string;
                        (locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
                    } | ((compareFn?: ((a: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, b: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }) => number) | undefined) => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) | (() => string) | (() => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    } | undefined) | ((...items: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => number) | ((separator?: string) => string) | (() => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) | (() => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    } | undefined) | {
                        (start: number, deleteCount?: number): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[];
                        (start: number, deleteCount: number, ...items: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[];
                    } | ((...items: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => number) | {
                        <S extends {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }>(predicate: (value: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, index: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => value is S, thisArg?: any): this is S[];
                        (predicate: (value: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, index: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => unknown, thisArg?: any): boolean;
                    } | ((predicate: (value: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, index: number, array: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, index: number, array: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => void, thisArg?: any) => void) | {
                        (callbackfn: (previousValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentIndex: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        };
                        (callbackfn: (previousValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentIndex: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, initialValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        };
                        <U>(callbackfn: (previousValue: U, currentValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentIndex: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => U, initialValue: U): U;
                    } | {
                        (callbackfn: (previousValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentIndex: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        };
                        (callbackfn: (previousValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentIndex: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, initialValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        };
                        <U>(callbackfn: (previousValue: U, currentValue: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, currentIndex: number, array: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => U, initialValue: U): U;
                    } | {
                        <S extends {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }>(predicate: (value: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, index: number, obj: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => value is S, thisArg?: any): S | undefined;
                        (predicate: (value: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }, index: number, obj: {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        }[]) => unknown, thisArg?: any): {
                            name: string;
                            attributes?: Record<string, unknown> | undefined;
                            innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                        } | undefined;
                    } | ((predicate: (value: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, index: number, obj: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => unknown, thisArg?: any) => number) | ((target: number, start: number, end?: number) => {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) | (() => ArrayIterator<[number, {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }]>) | (() => ArrayIterator<number>) | (<U, This = undefined>(callback: (this: This, value: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }, index: number, array: {
                        name: string;
                        attributes?: Record<string, unknown> | undefined;
                        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
                    }[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | /*elided*/ any | {
                        [x: number]: boolean | undefined;
                        length?: boolean | undefined;
                        toString?: boolean | undefined;
                        toLocaleString?: boolean | undefined;
                        pop?: boolean | undefined;
                        push?: boolean | undefined;
                        concat?: boolean | undefined;
                        join?: boolean | undefined;
                        reverse?: boolean | undefined;
                        shift?: boolean | undefined;
                        slice?: boolean | undefined;
                        sort?: boolean | undefined;
                        splice?: boolean | undefined;
                        unshift?: boolean | undefined;
                        indexOf?: boolean | undefined;
                        lastIndexOf?: boolean | undefined;
                        every?: boolean | undefined;
                        some?: boolean | undefined;
                        forEach?: boolean | undefined;
                        map?: boolean | undefined;
                        filter?: boolean | undefined;
                        reduce?: boolean | undefined;
                        reduceRight?: boolean | undefined;
                        find?: boolean | undefined;
                        findIndex?: boolean | undefined;
                        fill?: boolean | undefined;
                        copyWithin?: boolean | undefined;
                        entries?: boolean | undefined;
                        keys?: boolean | undefined;
                        values?: boolean | undefined;
                        includes?: boolean | undefined;
                        flatMap?: boolean | undefined;
                        flat?: boolean | undefined;
                        at?: boolean | undefined;
                        [Symbol.iterator]?: boolean | undefined;
                        readonly [Symbol.unscopables]?: boolean | undefined;
                    })[] | undefined;
                } | {
                    [x: number]: boolean | undefined;
                    length?: boolean | undefined;
                    toString?: boolean | undefined;
                    toLocaleString?: boolean | undefined;
                    pop?: boolean | undefined;
                    push?: boolean | undefined;
                    concat?: boolean | undefined;
                    join?: boolean | undefined;
                    reverse?: boolean | undefined;
                    shift?: boolean | undefined;
                    slice?: boolean | undefined;
                    sort?: boolean | undefined;
                    splice?: boolean | undefined;
                    unshift?: boolean | undefined;
                    indexOf?: boolean | undefined;
                    lastIndexOf?: boolean | undefined;
                    every?: boolean | undefined;
                    some?: boolean | undefined;
                    forEach?: boolean | undefined;
                    map?: boolean | undefined;
                    filter?: boolean | undefined;
                    reduce?: boolean | undefined;
                    reduceRight?: boolean | undefined;
                    find?: boolean | undefined;
                    findIndex?: boolean | undefined;
                    fill?: boolean | undefined;
                    copyWithin?: boolean | undefined;
                    entries?: boolean | undefined;
                    keys?: boolean | undefined;
                    values?: boolean | undefined;
                    includes?: boolean | undefined;
                    flatMap?: boolean | undefined;
                    flat?: boolean | undefined;
                    at?: boolean | undefined;
                    [Symbol.iterator]?: boolean | undefined;
                    readonly [Symbol.unscopables]?: boolean | undefined;
                })[] | undefined;
            } | {
                [x: number]: boolean | undefined;
                length?: boolean | undefined;
                toString?: boolean | undefined;
                toLocaleString?: boolean | undefined;
                pop?: boolean | undefined;
                push?: boolean | undefined;
                concat?: boolean | undefined;
                join?: boolean | undefined;
                reverse?: boolean | undefined;
                shift?: boolean | undefined;
                slice?: boolean | undefined;
                sort?: boolean | undefined;
                splice?: boolean | undefined;
                unshift?: boolean | undefined;
                indexOf?: boolean | undefined;
                lastIndexOf?: boolean | undefined;
                every?: boolean | undefined;
                some?: boolean | undefined;
                forEach?: boolean | undefined;
                map?: boolean | undefined;
                filter?: boolean | undefined;
                reduce?: boolean | undefined;
                reduceRight?: boolean | undefined;
                find?: boolean | undefined;
                findIndex?: boolean | undefined;
                fill?: boolean | undefined;
                copyWithin?: boolean | undefined;
                entries?: boolean | undefined;
                keys?: boolean | undefined;
                values?: boolean | undefined;
                includes?: boolean | undefined;
                flatMap?: boolean | undefined;
                flat?: boolean | undefined;
                at?: boolean | undefined;
                [Symbol.iterator]?: boolean | undefined;
                readonly [Symbol.unscopables]?: boolean | undefined;
            })[] | undefined;
        } | {
            [x: number]: boolean | undefined;
            length?: boolean | undefined;
            toString?: boolean | undefined;
            toLocaleString?: boolean | undefined;
            pop?: boolean | undefined;
            push?: boolean | undefined;
            concat?: boolean | undefined;
            join?: boolean | undefined;
            reverse?: boolean | undefined;
            shift?: boolean | undefined;
            slice?: boolean | undefined;
            sort?: boolean | undefined;
            splice?: boolean | undefined;
            unshift?: boolean | undefined;
            indexOf?: boolean | undefined;
            lastIndexOf?: boolean | undefined;
            every?: boolean | undefined;
            some?: boolean | undefined;
            forEach?: boolean | undefined;
            map?: boolean | undefined;
            filter?: boolean | undefined;
            reduce?: boolean | undefined;
            reduceRight?: boolean | undefined;
            find?: boolean | undefined;
            findIndex?: boolean | undefined;
            fill?: boolean | undefined;
            copyWithin?: boolean | undefined;
            entries?: boolean | undefined;
            keys?: boolean | undefined;
            values?: boolean | undefined;
            includes?: boolean | undefined;
            flatMap?: boolean | undefined;
            flat?: boolean | undefined;
            at?: boolean | undefined;
            [Symbol.iterator]?: boolean | undefined;
            readonly [Symbol.unscopables]?: boolean | undefined;
        })[] | undefined;
        readonly currentlySelectedSlide?: number | undefined;
        align?: (("center" | "right" | "left") | ("full" | "wide")) | undefined;
        className?: string | undefined;
        layout?: {
            type?: "default" | undefined;
        } | {
            type?: "flex" | undefined;
            flexWrap?: "wrap" | "nowrap" | undefined;
            orientation?: "horizontal" | undefined;
            justifyContent?: "left" | "center" | "right" | "space-between" | undefined;
            verticalAlignment?: "top" | "center" | "bottom" | "stretch" | undefined;
        } | {
            type?: "flex" | undefined;
            flexWrap?: "wrap" | "nowrap" | undefined;
            orientation?: "vertical" | undefined;
            justifyContent?: "left" | "center" | "right" | "stretch" | undefined;
            verticalAlignment?: "top" | "center" | "bottom" | "space-between" | undefined;
        } | {
            type?: "grid" | undefined;
            minimumColumnWidth?: string | undefined;
            columnCount?: never | undefined;
        } | {
            type?: "grid" | undefined;
            minimumColumnWidth?: never | undefined;
            columnCount?: number | undefined;
        } | {
            type?: "constrained" | undefined;
            justifyContent?: "left" | "center" | "right" | undefined;
            contentSize?: string | undefined;
            wideSize?: string | undefined;
        } | undefined;
        lock?: {
            move?: boolean | undefined;
            remove?: boolean | undefined;
        } | undefined;
        metadata?: {
            name?: string | undefined;
        } | undefined;
        style?: {
            background?: {
                backgroundImage?: {
                    url?: string | undefined;
                    id?: number | undefined;
                    source?: string | undefined;
                    title?: string | undefined;
                } | undefined;
                backgroundPosition?: string | undefined;
            } | undefined;
            spacing?: {
                margin?: {
                    bottom?: string | undefined;
                    left?: string | undefined;
                    right?: string | undefined;
                    top?: string | undefined;
                } | undefined;
                padding?: {
                    bottom?: string | undefined;
                    left?: string | undefined;
                    right?: string | undefined;
                    top?: string | undefined;
                } | undefined;
                blockGap?: string | undefined;
            } | undefined;
        } | undefined;
    }) => boolean) | undefined;
})[];
//# sourceMappingURL=variations.d.ts.map