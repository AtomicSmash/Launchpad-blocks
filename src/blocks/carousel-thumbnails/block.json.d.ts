export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    keywords: never[];
    parent: string[];
    editorScript: string;
    viewScript: string;
    style: string;
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
        readonly selectedOutlineColour: {
            readonly type: "string";
            readonly default: "black";
        };
        readonly lock: {
            readonly type: "boolean";
            readonly default: true;
        };
    };
    providesContext: {};
    usesContext: ["launchpad-blocks/carouselImages"];
    example: {
        viewportWidth: number;
    };
    supports: {
        readonly lock: false;
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