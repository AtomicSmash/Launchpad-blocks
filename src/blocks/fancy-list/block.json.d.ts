export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    allowedBlocks: string[];
    textdomain: string;
    keywords: never[];
    editorScript: string;
    viewScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly columnCount: {
            readonly type: "integer";
            readonly default: 1;
        };
        readonly type: {
            readonly type: "string";
            readonly enum: readonly ["ul", "ol"];
            readonly default: "ul";
        };
        readonly markerType: {
            readonly type: "string";
            readonly enum: readonly ["normal", "icon"];
            readonly default: "normal";
        };
        readonly markerColour: {
            readonly type: "string";
        };
        readonly markerInnerColour: {
            readonly type: "string";
        };
    };
    providesContext: {
        readonly "launchpad-blocks/fancyListType": "type";
        readonly "launchpad-blocks/fancyListMarkerType": "markerType";
    };
    usesContext: [];
    supports: {
        readonly typography: {
            readonly fontSize: true;
        };
    };
    example: {
        attributes: {
            columnCount: number;
            type: "ul";
            markerType: "normal";
            markerInnerColour: string;
            markerColour: string;
        };
        innerBlocks: {
            name: string;
            attributes: {
                textContent: string;
            };
        }[];
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map