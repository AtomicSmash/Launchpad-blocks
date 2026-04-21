export declare const blockJson: {
    apiVersion: 3;
    name: string;
    title: string;
    category: "theme";
    description: string;
    textdomain: string;
    keywords: never[];
    parent: string[];
    editorScript: string;
    viewScript: string;
    style: string;
    editorStyle: string;
    render: "file:./render.php";
    attributes: {};
    providesContext: {};
    usesContext: ["launchpad-blocks/template", "launchpad-blocks/shouldLockChildSlidesToTemplate", "launchpad-blocks/currentlySelectedSlide", "launchpad-blocks/isInTemplateEditMode"];
    supports: {
        readonly layout: {
            readonly default: {
                readonly type: "constrained";
            };
            readonly allowCustomContentAndWideSize: false;
            readonly allowJustification: false;
        };
        readonly spacing: {
            readonly padding: ["left", "right"];
        };
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map