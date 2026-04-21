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
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly templatePartSlug: {
            readonly type: "string";
        };
        readonly templatePartName: {
            readonly type: "string";
        };
        readonly args: {
            readonly type: "object";
            readonly default: Record<string, import("./attributes").AllValuesWithTypes>;
        };
        readonly supportedDynamicTags: {
            readonly type: "array";
            readonly default: [{
                readonly label: "Post type";
                readonly tag: "{{postType}}";
            }];
        };
    };
    providesContext: {};
    usesContext: ["postId"];
    example: {};
    supports: {
        readonly align: ["wide", "full"];
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map