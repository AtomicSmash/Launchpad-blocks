export declare const example: {
    viewportWidth: number;
    innerBlocks: ({
        name: string;
        attributes: {
            isNestedInAnotherNavLink: boolean;
        };
        innerBlocks: ({
            name: string;
            attributes: {
                linkText: string;
                linkHref: string;
            };
        } | {
            name: string;
            attributes: {
                linkText: string;
                isPreview: boolean;
            };
            innerBlocks: {
                name: string;
                attributes: {
                    isNestedInAnotherNavLink: boolean;
                };
                innerBlocks: never[];
            }[];
        })[];
    } | {
        name: string;
        innerBlocks: {
            name: string;
            attributes: {
                text: string;
            };
        }[];
    })[];
};
//# sourceMappingURL=example.d.ts.map