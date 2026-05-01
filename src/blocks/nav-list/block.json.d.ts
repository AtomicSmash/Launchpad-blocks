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
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly isNestedInAnotherNavLink: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly ariaLabel: {
            readonly type: "string";
            readonly default: "";
        };
        readonly linkOrientation: {
            readonly type: "string";
            readonly enum: readonly ["horizontal", "vertical"];
            readonly default: "horizontal";
        };
    };
    supports: {};
    example: {
        viewportWidth: number;
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
    };
    providesContext: {};
    usesContext: ["launchpad-blocks/isInSubMenu", "launchpad-blocks/navListContext", "launchpad-blocks/navListContextLabelledBy"];
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map