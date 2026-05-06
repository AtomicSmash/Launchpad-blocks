export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    parent: string[];
    allowedBlocks: string[];
    textdomain: string;
    keywords: never[];
    editorScript: string;
    style: string;
    render: "file:./render.php";
    attributes: {
        readonly iconName: {
            readonly type: "string";
        };
        readonly library: {
            readonly type: "string";
        };
        readonly textContent: {
            readonly type: "string";
        };
    };
    providesContext: {};
    usesContext: ["launchpad-blocks/fancyListType", "launchpad-blocks/fancyListMarkerType"];
    supports: {
        readonly splitting: true;
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map