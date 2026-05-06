export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    keywords: never[];
    parent: string[];
    allowedBlocks: string[];
    editorScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly allowResize: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly aspectRatio: {
            readonly type: "string";
            readonly default: "auto";
        };
        readonly imageFit: {
            readonly type: "string";
            readonly enum: readonly ["cover", "contain"];
            readonly default: "cover";
        };
        readonly shouldPullImagesFromContext: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly captionBackground: {
            readonly type: "string";
        };
    };
    providesContext: {
        readonly allowResize: "allowResize";
    };
    usesContext: ["launchpad-blocks/carouselImages", "launchpad-blocks/shouldLinkSlidesToLightbox"];
    supports: {
        readonly color: {
            readonly link: true;
        };
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map