export declare const blockJson: {
    apiVersion: 3;
    name: string;
    allowedBlocks: string[];
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    keywords: string[];
    editorScript: string;
    viewScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly images: {
            readonly type: "array";
            readonly default: {
                id: number;
                url: string;
            }[];
        };
        readonly columnCount: {
            readonly type: "integer";
            readonly default: 4;
        };
        readonly shouldLinkSlidesToLightbox: {
            readonly type: "boolean";
            readonly default: true;
        };
        readonly slides: {
            readonly type: "array";
            readonly default: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
        };
    };
    providesContext: {
        readonly "launchpad-blocks/carouselImages": "images";
        readonly "launchpad-blocks/carouselSlides": "slides";
        readonly "launchpad-blocks/shouldLinkSlidesToLightbox": "shouldLinkSlidesToLightbox";
    };
    usesContext: [];
    example: {
        attributes: {
            images: {
                id: number;
                url: string;
            }[];
        };
        innerBlocks: ({
            name: string;
            innerBlocks: {
                name: string;
                attributes: {
                    id: number;
                    url: string;
                };
            }[];
        } | {
            name: string;
            innerBlocks: {
                name: string;
                attributes: {
                    images: {
                        id: number;
                        url: string;
                    }[];
                };
                innerBlocks: ({
                    name: string;
                    attributes: {
                        shouldPullImagesFromContext: boolean;
                        shouldShowTextVisually?: undefined;
                        className?: undefined;
                    };
                } | {
                    name: string;
                    attributes: {
                        shouldShowTextVisually: boolean;
                        className: string;
                        shouldPullImagesFromContext?: undefined;
                    };
                })[];
            }[];
        })[];
    };
    supports: {};
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map