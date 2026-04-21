export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    editorScript: string;
    viewScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly tabsGroupId: {
            readonly type: "string";
            readonly default: "";
        };
        readonly shouldShowTabSectionTitle: {
            readonly type: "boolean";
            readonly default: true;
        };
        readonly titleLevel: {
            readonly type: "string";
            readonly enum: readonly ["1", "2", "3", "4", "5", "6"];
            readonly default: "2";
        };
        readonly title: {
            readonly type: "string";
            readonly default: "";
        };
        readonly initiallySelectedTab: {
            readonly type: "string";
            readonly default: "";
        };
        readonly hasDismissedVariationsSelector: {
            readonly type: "boolean";
            readonly default: false;
        };
    };
    providesContext: {
        readonly "launchpad/tabsGroupId": "tabsGroupId";
        readonly "launchpad/initiallySelectedTab": "initiallySelectedTab";
        readonly "launchpad/shouldShowTabSectionTitle": "shouldShowTabSectionTitle";
        readonly "launchpad/title": "title";
    };
    usesContext: [];
    supports: {
        readonly align: true;
    };
    example: {
        attributes: {
            tabsGroupId: string;
            title: string;
            initiallySelectedTab: string;
        };
        innerBlocks: ({
            name: string;
            attributes: {
                selectedTab: string;
            };
            innerBlocks?: undefined;
        } | {
            name: string;
            innerBlocks: {
                name: string;
                attributes: {
                    id: string;
                    tab: {
                        id: string;
                        label: string;
                    };
                };
                innerBlocks: {
                    name: string;
                    attributes: {
                        content: string;
                    };
                }[];
            }[];
            attributes?: undefined;
        })[];
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map