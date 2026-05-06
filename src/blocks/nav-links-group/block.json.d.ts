export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    allowedBlocks: string[];
    textdomain: string;
    editorScript: string;
    style: string;
    render: "file:./render.php";
    keywords: string[];
    attributes: {
        readonly headerElement: {
            readonly type: "string";
            readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
            readonly default: "h2";
        };
        readonly headerContent: {
            readonly type: "string";
        };
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
        readonly navListContextLabelledBy: {
            readonly type: "string";
            readonly default: "";
        };
    };
    providesContext: {
        readonly "launchpad-blocks/navListContextLabelledBy": "navListContextLabelledBy";
    };
    usesContext: [];
    supports: {};
    example: {};
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map