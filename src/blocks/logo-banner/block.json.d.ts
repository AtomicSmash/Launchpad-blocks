export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "media";
    description: string;
    textdomain: string;
    keywords: never[];
    editorScript: string;
    viewScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly isScrolling: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly shouldAlignBottomRowToLeft: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly allowResize: {
            readonly type: "boolean";
            readonly default: false;
        };
    };
    providesContext: {
        readonly allowResize: "allowResize";
    };
    usesContext: [];
    example: {};
    supports: {
        readonly align: ["wide", "full"];
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map