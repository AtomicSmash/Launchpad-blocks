export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    textdomain: string;
    editorScript: string;
    viewScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly align: {
            readonly type: "string";
            readonly default: "full";
        };
        readonly text: {
            readonly type: "string";
        };
        readonly isDismissible: {
            readonly type: "boolean";
            readonly default: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly default: "elevation-high";
        };
        readonly textColor: {
            readonly type: "string";
            readonly default: "black";
        };
    };
    supports: {
        readonly align: ["full"];
        readonly color: true;
        readonly layout: {
            readonly default: {
                readonly type: "constrained";
            };
        };
    };
    example: {
        attributes: {
            text: string;
            isDismissible: true;
        };
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map