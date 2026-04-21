export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "formatting";
    description: string;
    textdomain: string;
    keywords: string[];
    editorScript: string;
    viewScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly mediaPosition: {
            readonly type: "string";
            readonly enum: readonly ["left", "right"];
            readonly default: "left";
        };
        readonly imageId: {
            readonly type: "integer";
            readonly default: 0;
        };
        readonly shouldBreakOutMedia: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly hasBackground: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly shouldChildBlocksBeLocked: {
            readonly type: "boolean";
            readonly default: true;
        };
    };
    providesContext: {};
    usesContext: [];
    example: {
        attributes: {
            mediaPosition: "left";
            imageId: number;
            shouldBreakOutMedia: true;
            hasBackground: true;
            shouldChildBlocksBeLocked: true;
        };
        innerBlocks: ({
            name: string;
            attributes: {
                className: string;
                content: string;
                text?: undefined;
            };
        } | {
            name: string;
            attributes: {
                content: string;
                className?: undefined;
                text?: undefined;
            };
        } | {
            name: string;
            attributes: {
                text: string;
                className?: undefined;
                content?: undefined;
            };
        })[];
    };
    supports: {};
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map