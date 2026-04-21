export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    keywords: never[];
    editorScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly headerElement: {
            readonly type: "string";
            readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
            readonly default: "h2";
        };
        readonly headerContent: {
            readonly type: "string";
        };
        readonly style: {
            readonly type: "object";
            readonly default: {
                readonly padding: {
                    readonly top: "var:preset|spacing|10";
                    readonly bottom: "var:preset|spacing|10";
                };
            };
        };
        readonly textAlign: {
            readonly type: "string";
            readonly enum: readonly ["left", "center", "right"];
            readonly default: "left";
        };
        readonly stretchTitle: {
            readonly type: "string";
            readonly enum: readonly ["none", "wide", "full"];
            readonly default: "none";
        };
    };
    providesContext: {};
    usesContext: [];
    example: {
        viewportWidth: number;
        attributes: {
            headerContent: string;
        };
        innerBlocks: {
            name: string;
            attributes: {
                id: number;
                url: string;
            };
        }[];
    };
    supports: {
        readonly align: false;
        readonly layout: {
            readonly default: {
                readonly type: "constrained";
            };
        };
        readonly spacing: {
            readonly padding: ["vertical"];
        };
        readonly color: {
            readonly text: false;
        };
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map