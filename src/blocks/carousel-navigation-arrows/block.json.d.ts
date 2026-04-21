export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    allowedBlocks: string[];
    parent: string[];
    keywords: never[];
    editorScript: string;
    viewScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    styles: ({
        name: string;
        label: string;
        isDefault: true;
    } | {
        name: string;
        label: string;
        isDefault?: undefined;
    })[];
    attributes: {
        readonly prevText: {
            readonly type: "string";
            readonly default: "Go to previous slide";
        };
        readonly nextText: {
            readonly type: "string";
            readonly default: "Go to next slide";
        };
        readonly prevVisualText: {
            readonly type: "string";
            readonly default: "Previous";
        };
        readonly nextVisualText: {
            readonly type: "string";
            readonly default: "Next";
        };
        readonly shouldShowTextVisually: {
            readonly type: "boolean";
            readonly default: true;
        };
        readonly backgroundColour: {
            readonly type: "string";
            readonly default: "black";
        };
        readonly iconColour: {
            readonly type: "string";
            readonly default: "white";
        };
        readonly prevIcon: {
            readonly type: "object";
            readonly default: {
                readonly iconName: string;
                readonly library: string;
            };
        };
        readonly nextIcon: {
            readonly type: "object";
            readonly default: {
                readonly iconName: string;
                readonly library: string;
            };
        };
    };
    providesContext: {};
    usesContext: ["launchpad-blocks/currentlySelectedSlide", "launchpad-blocks/carouselSlides", "launchpad-blocks/carouselImages"];
    example: {};
    supports: {
        readonly align: true;
        readonly layout: {
            readonly default: {
                readonly type: "constrained";
            };
            readonly allowCustomContentAndWideSize: false;
        };
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map