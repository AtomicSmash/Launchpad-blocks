export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    ancestor: string[];
    category: "theme";
    description: string;
    textdomain: string;
    keywords: string[];
    editorScript: string;
    viewScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    styles: ({
        name: string;
        label: string;
        isDefault: true;
    } | {
        name: string;
        label: string;
        isDefault?: undefined;
    })[];
    attributes: {
        readonly iconName: {
            readonly type: "string";
            readonly role: "content";
        };
        readonly library: {
            readonly type: "string";
            readonly role: "content";
        };
        readonly size: {
            readonly type: "string";
            readonly default: "1rem";
        };
        readonly iconPosition: {
            readonly type: "string";
            readonly enum: readonly ["start", "end"];
            readonly default: "start";
        };
        readonly linkId: {
            readonly type: "number";
        };
        readonly linkKind: {
            readonly type: "string";
        };
        readonly linkType: {
            readonly type: "string";
        };
        readonly linkHref: {
            readonly type: "string";
        };
        readonly linkTarget: {
            readonly type: "string";
            readonly enum: readonly ["_self", "_blank"];
            readonly default: "_self";
        };
        readonly linkText: {
            readonly type: "string";
        };
        readonly anchor: {
            readonly type: "string";
        };
    };
    providesContext: {};
    usesContext: [];
    example: {
        attributes: {
            library: string;
            iconName: string;
            size: string;
            iconPosition: "start";
            linkText: string;
        };
    };
    supports: {
        readonly anchor: true;
        readonly splitting: true;
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map