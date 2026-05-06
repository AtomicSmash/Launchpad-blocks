export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    keywords: never[];
    editorScript: string;
    style: string;
    render: "file:./render.php";
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
            readonly default: "2rem";
        };
        readonly headerElement: {
            readonly type: "string";
            readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
            readonly default: "h2";
        };
        readonly headerContent: {
            readonly type: "string";
        };
        readonly iconColour: {
            readonly type: "string";
        };
    };
    providesContext: {};
    usesContext: [];
    example: {
        viewportWidth: number;
        attributes: {
            library: string;
            iconName: string;
            size: string;
            headerContent: string;
        };
    };
    supports: {};
    styles: ({
        name: string;
        label: string;
        isDefault: true;
    } | {
        name: string;
        label: string;
        isDefault?: undefined;
    })[];
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map