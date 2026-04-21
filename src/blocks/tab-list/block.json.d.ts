export declare const blockJson: {
    apiVersion: 3;
    name: string;
    ancestor: string[];
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    keywords: never[];
    editorScript: string;
    render: "file:./render.php";
    attributes: {
        readonly selectedTab: {
            readonly type: "string";
            readonly default: "";
        };
    };
    providesContext: {};
    usesContext: ["launchpad/tabsGroupId", "launchpad/initiallySelectedTab", "launchpad/shouldShowTabSectionTitle", "launchpad/title"];
    supports: {
        readonly align: true;
        readonly alignWide: true;
        readonly layout: {
            readonly default: {
                readonly type: "flex";
            };
        };
        readonly spacing: {
            readonly blockGap: true;
        };
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map