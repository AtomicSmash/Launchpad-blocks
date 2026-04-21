export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    allowedBlocks: string[];
    parent: string[];
    ancestor: string[];
    textdomain: string;
    keywords: string[];
    editorScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly linkText: {
            readonly type: "string";
        };
        readonly subMenuId: {
            readonly type: "string";
            readonly default: "";
        };
        readonly columnCount: {
            readonly type: "number";
            readonly default: 1;
        };
        readonly columnWidth: {
            readonly type: "number";
            readonly default: 14;
        };
        readonly isInSubMenu: {
            readonly type: "boolean";
            readonly default: true;
        };
        readonly isDropdownShown: {
            readonly type: "boolean";
            readonly default: false;
            readonly role: "local";
        };
        readonly icon: {
            readonly type: "object";
            readonly default: {
                readonly iconName: string;
                readonly library: string;
            };
        };
        readonly iconLocation: {
            readonly type: "string";
            readonly default: "end";
            readonly enum: readonly ["start", "end"];
        };
    };
    supports: {};
    example: {
        viewportWidth: number;
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
    };
    providesContext: {
        readonly "launchpad-blocks/isInSubMenu": "isInSubMenu";
    };
    usesContext: [];
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map