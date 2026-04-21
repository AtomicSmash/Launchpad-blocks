export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    allowedBlocks: string[];
    keywords: never[];
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
        readonly shouldLoop: {
            readonly type: "boolean";
            readonly default: true;
        };
        readonly shouldLinkSlidesToLightbox: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly slides: {
            readonly type: "array";
            readonly default: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
        };
        readonly currentlySelectedSlide: {
            readonly type: "number";
            readonly default: 0;
            readonly role: "local";
        };
    };
    providesContext: {
        readonly "launchpad-blocks/carouselImages": "images";
        readonly "launchpad-blocks/carouselSlides": "slides";
        readonly "launchpad-blocks/shouldLinkSlidesToLightbox": "shouldLinkSlidesToLightbox";
        readonly "launchpad-blocks/currentlySelectedSlide": "currentlySelectedSlide";
    };
    usesContext: ["launchpad-blocks/carouselImages", "launchpad-blocks/carouselSlides"];
    supports: {
        readonly align: true;
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map