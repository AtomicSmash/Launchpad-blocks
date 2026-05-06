export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    keywords: never[];
    editorScript: string;
    viewScript: string;
    style: string;
    render: "file:./render.php";
    attributes: {
        readonly shouldShowImage: {
            readonly type: "boolean";
            readonly default: true;
        };
        readonly imageId: {
            readonly type: "integer";
            readonly default: 0;
        };
        readonly imagePosition: {
            readonly type: "string";
            readonly enum: readonly ["left", "right"];
            readonly default: "left";
        };
        readonly headerElement: {
            readonly type: "string";
            readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
            readonly default: "h2";
        };
        readonly headerContent: {
            readonly type: "string";
            readonly default: "";
        };
        readonly textContent: {
            readonly type: "string";
            readonly default: "";
        };
        readonly buttons: {
            readonly type: "array";
            readonly default: {
                id: number;
                label: string;
                href: string;
                target: "_self" | "_blank";
            }[];
        };
    };
    providesContext: {};
    usesContext: [];
    example: {};
    supports: {
        readonly align: ["wide"];
        readonly color: true;
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map