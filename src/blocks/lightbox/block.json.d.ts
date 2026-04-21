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
            readonly default: "menu-close-icon";
        };
        readonly library: {
            readonly type: "string";
            readonly role: "content";
            readonly default: "launchpad-blocks";
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly default: "white";
        };
    };
    providesContext: {};
    usesContext: [];
    supports: {
        readonly color: {
            readonly background: true;
            readonly text: false;
        };
    };
    parent: string[];
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map