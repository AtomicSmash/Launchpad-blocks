export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    allowedBlocks: string[];
    textdomain: string;
    keywords: string[];
    editorScript: string;
    viewScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly navId: {
            readonly type: "string";
        };
    };
    supports: {};
    example: {
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
    providesContext: {};
    usesContext: [];
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map