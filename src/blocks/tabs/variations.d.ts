/**
 * Variations declared here should be registered in index.tsx
 */
export declare const variations: [{
    readonly name: "horizontal-tabs";
    readonly title: "Horizontal tabs";
    readonly attributes: {
        readonly className: "wp-block-launchpad-blocks-tabs--horizontal";
    };
    readonly innerBlocks: [["launchpad-blocks/tab-list", {
        readonly selectedTab: "tab-1";
    }], ["launchpad-blocks/tab-panel-group", {}, [["launchpad-blocks/tab-panel", {
        readonly id: "tab-1";
        readonly tab: {
            readonly id: "tab-1_trigger";
            readonly label: "";
        };
    }, [["core/paragraph", {
        readonly placeholder: "Enter tab content here...";
    }]]], ["launchpad-blocks/tab-panel", {
        readonly id: "tab-2";
        readonly tab: {
            readonly id: "tab-2_trigger";
            readonly label: "";
        };
    }, [["core/paragraph", {
        readonly placeholder: "Enter tab content here...";
    }]]], ["launchpad-blocks/tab-panel", {
        readonly id: "tab-3";
        readonly tab: {
            readonly id: "tab-3_trigger";
            readonly label: "";
        };
    }, [["core/paragraph", {
        readonly placeholder: "Enter tab content here...";
    }]]]]]];
    readonly icon: import("react/jsx-runtime").JSX.Element;
}, {
    readonly name: "vertical-tabs";
    readonly title: "Vertical tabs";
    readonly attributes: {
        readonly className: "wp-block-launchpad-blocks-tabs--vertical";
    };
    readonly innerBlocks: [["launchpad-blocks/tab-list", {
        readonly selectedTab: "tab-1";
        readonly layout: {
            readonly type: "flex";
            readonly orientation: "vertical";
            readonly verticalAlignment: "top";
            readonly justifyContent: "left";
            readonly flexWrap: "wrap";
        };
    }], ["launchpad-blocks/tab-panel-group", {}, [["launchpad-blocks/tab-panel", {
        readonly id: "tab-1";
        readonly tab: {
            readonly id: "tab-1_trigger";
            readonly label: "";
        };
    }, [["core/paragraph", {
        readonly placeholder: "Enter tab content here...";
    }]]], ["launchpad-blocks/tab-panel", {
        readonly id: "tab-2";
        readonly tab: {
            readonly id: "tab-2_trigger";
            readonly label: "";
        };
    }, [["core/paragraph", {
        readonly placeholder: "Enter tab content here...";
    }]]], ["launchpad-blocks/tab-panel", {
        readonly id: "tab-3";
        readonly tab: {
            readonly id: "tab-3_trigger";
            readonly label: "";
        };
    }, [["core/paragraph", {
        readonly placeholder: "Enter tab content here...";
    }]]]]]];
    readonly isDefault: false;
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly example: {
        readonly attributes: {
            readonly tabsGroupId: "455684d7";
            readonly title: "Tabs group heading";
            readonly initiallySelectedTab: "tab_1";
            readonly className: "wp-block-launchpad-blocks-tabs--vertical";
        };
        readonly innerBlocks: [{
            readonly name: "launchpad-blocks/tab-list";
            readonly attributes: {
                readonly selectedTab: "tab_1";
                readonly layout: {
                    readonly type: "flex";
                    readonly orientation: "vertical";
                    readonly verticalAlignment: "top";
                    readonly justifyContent: "left";
                    readonly flexWrap: "wrap";
                };
            };
        }, {
            readonly name: "launchpad-blocks/tab-panel-group";
            readonly innerBlocks: [{
                readonly name: "launchpad-blocks/tab-panel";
                readonly attributes: {
                    readonly id: "tab_1";
                    readonly tab: {
                        readonly id: "tab_1_trigger";
                        readonly label: "Tab 1";
                    };
                };
                readonly innerBlocks: [{
                    readonly name: "core/paragraph";
                    readonly attributes: {
                        readonly content: "Pippin pressed forward as they passed under the lamp beneath the gate-arch, and when he saw the pale face of Faramir he caught his breath. It was the face of one who has been assailed by a great fear or anguish, but has mastered it and now is quiet. Proud and grave he stood for a moment as he spoke to the guard, and Pippin gazing at him saw how closely he resembled his brother Boromir – whom Pippin had liked from the first, admiring the great man's lordly but kindly manner. Yet suddenly for Faramir his heart was strangely moved with a feeling that he had not known before. Here was one with an air of high nobility such as Aragorn at times revealed, less high perhaps, yet also less incalculable and remote: one of the Kings of Men born into a later time, but touched with the wisdom and sadness of the Elder Race. He knew now why Beregond spoke his name with love. He was a captain that men would follow, that he would follow, even under the shadow of the black wings.";
                    };
                }];
            }, {
                readonly name: "launchpad-blocks/tab-panel";
                readonly attributes: {
                    readonly id: "tab_2";
                    readonly tab: {
                        readonly id: "tab_2_trigger";
                        readonly label: "Tab 2";
                    };
                };
                readonly innerBlocks: [];
            }, {
                readonly name: "launchpad-blocks/tab-panel";
                readonly attributes: {
                    readonly id: "tab_3";
                    readonly tab: {
                        readonly id: "tab_3_trigger";
                        readonly label: "Tab 3";
                    };
                };
                readonly innerBlocks: [];
            }];
        }];
    };
}];
//# sourceMappingURL=variations.d.ts.map