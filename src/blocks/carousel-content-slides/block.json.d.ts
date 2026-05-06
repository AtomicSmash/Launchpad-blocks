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
    style: string;
    render: "file:./render.php";
    attributes: {
        readonly template: {
            readonly type: "array";
            readonly default: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
        };
        readonly tempInnerBlocksStorage: {
            readonly type: "array";
            readonly default: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
        };
        readonly shouldLockChildSlidesToTemplate: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly hasDismissedVariationsSelector: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly isInTemplateEditMode: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly aspectRatio: {
            readonly type: "string";
            readonly default: "auto";
        };
    };
    providesContext: {
        readonly "launchpad-blocks/template": "template";
        readonly "launchpad-blocks/isInTemplateEditMode": "isInTemplateEditMode";
        readonly "launchpad-blocks/shouldLockChildSlidesToTemplate": "shouldLockChildSlidesToTemplate";
    };
    usesContext: [];
    supports: {
        readonly color: {
            readonly link: true;
        };
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map