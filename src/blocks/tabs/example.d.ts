export declare const example: {
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
//# sourceMappingURL=example.d.ts.map