export declare const blockJson: {
    apiVersion: 3;
    name: string;
    parent: string[];
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    editorScript: string;
    render: "file:./render.php";
    attributes: {
        readonly id: {
            readonly type: "string";
            readonly default: "";
        };
        readonly tab: {
            readonly type: "object";
            readonly default: {
                id: string;
                label: string;
            };
        };
    };
    providesContext: {};
    usesContext: ["launchpad/tabsGroupId", "launchpad/initiallySelectedTab"];
    supports: {
        readonly align: true;
        readonly anchor: false;
        readonly color: true;
        readonly layout: {
            readonly default: {
                readonly type: "default";
            };
        };
        readonly spacing: {
            readonly blockGap: true;
        };
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map