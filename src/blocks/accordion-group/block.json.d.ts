export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    keywords: string[];
    editorScript: string;
    viewScript: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly isMultiple: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly accordionGroupId: {
            readonly type: "string";
            readonly default: "";
        };
        readonly headerElement: {
            readonly type: "string";
            readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
            readonly default: "h2";
        };
    };
    example: {
        attributes: {
            isMultiple: true;
            accordionGroupId: string;
            headerElement: "h3";
        };
        innerBlocks: {
            name: string;
            attributes: {
                isInitiallyOpen: boolean;
                accordionId: string;
                headerContent: string;
            };
            innerBlocks: {
                name: string;
                attributes: {
                    content: string;
                };
            }[];
        }[];
    };
    supports: {
        readonly color: true;
        readonly typography: {
            readonly fontSize: true;
            readonly lineHeight: true;
            readonly textAlign: true;
        };
        readonly shadow: true;
        readonly spacing: {
            readonly padding: true;
            readonly margin: true;
        };
    };
    providesContext: {
        readonly "launchpad-blocks/accordion-heading-level": "headerElement";
    };
    usesContext: [];
    allowedBlocks: string[];
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map