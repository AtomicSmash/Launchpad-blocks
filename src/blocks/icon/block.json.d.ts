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
        readonly iconName: {
            readonly type: "string";
            readonly role: "content";
        };
        readonly library: {
            readonly type: "string";
            readonly role: "content";
        };
        readonly size: {
            readonly type: "string";
            readonly default: "2rem";
        };
    };
    supports: {};
    example: {
        viewportWidth: number;
        attributes: {
            library: string;
            iconName: string | undefined;
            size: string;
        };
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map