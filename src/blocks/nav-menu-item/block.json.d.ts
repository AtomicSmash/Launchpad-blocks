export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    parent: string[];
    textdomain: string;
    keywords: string[];
    editorScript: string;
    style: string;
    render: "file:./render.php";
    attributes: {
        readonly linkId: {
            readonly type: "number";
        };
        readonly linkKind: {
            readonly type: "string";
        };
        readonly linkType: {
            readonly type: "string";
        };
        readonly linkHref: {
            readonly type: "string";
        };
        readonly linkTarget: {
            readonly type: "string";
            readonly enum: readonly ["_self", "_blank"];
            readonly default: "_self";
        };
        readonly linkText: {
            readonly type: "string";
        };
    };
    supports: {};
    example: {
        viewportWidth: number;
        attributes: {
            linkText: string;
            linkHref: string;
        };
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map