export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    keywords: never[];
    ancestor: string[];
    editorScript: string;
    viewScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly prefix: {
            readonly type: "string";
            readonly role: "content";
        };
        readonly betweenText: {
            readonly type: "string";
            readonly default: "/";
            readonly role: "content";
        };
        readonly suffix: {
            readonly type: "string";
            readonly role: "content";
        };
    };
    providesContext: {};
    usesContext: ["launchpad-blocks/carouselImages", "launchpad-blocks/carouselSlides", "launchpad-blocks/currentlySelectedSlide"];
    example: {
        viewportWidth: number;
    };
    supports: {
        readonly align: true;
        readonly layout: {
            readonly default: {
                readonly type: "flex";
                readonly flexWrap: "wrap";
                readonly justifyContent: "left";
            };
            readonly allowOrientation: false;
        };
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map