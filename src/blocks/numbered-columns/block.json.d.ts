export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    keywords: string[];
    editorScript: string;
    style: string;
    render: "file:./render.php";
    attributes: {
        readonly columns: {
            readonly type: "array";
            readonly default: {
                id: number;
                heading: string;
                text: string;
            }[];
        };
        readonly headerElement: {
            readonly type: "string";
            readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
            readonly default: "h2";
        };
    };
    providesContext: {};
    usesContext: [];
    example: {
        attributes: {
            columns: {
                id: number;
                heading: string;
                text: string;
            }[];
        };
        viewportWidth: number;
    };
    supports: {};
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map