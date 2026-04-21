export declare const blockJson: {
    apiVersion: 3;
    name: string;
    parent: string[];
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    keywords: string[];
    editorScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly isInitiallyOpen: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly accordionId: {
            readonly type: "string";
            readonly default: "";
        };
        readonly headerContent: {
            readonly type: "string";
        };
        readonly headerElement: {
            readonly type: "string";
            readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
            readonly default: "h2";
        };
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
    providesContext: {};
    usesContext: ["launchpad-blocks/accordion-heading-level"];
    example: {
        attributes: {
            isInitiallyOpen: false;
            accordionId: string;
            headerElement: "h2";
            headerContent: string;
        };
        innerBlocks: {
            name: string;
            attributes: {
                content: string;
            };
        }[];
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map