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
    editorStyle: string;
    render: "file:./render.php";
    attributes: {
        readonly backgroundOrOverlayColour: {
            readonly type: "string";
        };
        readonly overlayOpacity: {
            readonly type: "number";
            readonly default: 50;
        };
    };
    providesContext: {};
    usesContext: ["launchpad-blocks/template", "launchpad-blocks/shouldLockChildSlidesToTemplate", "launchpad-blocks/currentlySelectedSlide", "launchpad-blocks/isInTemplateEditMode"];
    supports: {
        readonly background: {
            readonly backgroundImage: true;
            readonly backgroundSize: true;
        };
        readonly spacing: {
            readonly padding: ["vertical"];
        };
        readonly layout: {
            readonly default: {
                readonly type: "flex";
                readonly justifyContent: "center";
            };
            readonly allowCustomContentAndWideSize: false;
            readonly allowOrientation: false;
            readonly allowJustification: false;
        };
    };
};
export default blockJson;
//# sourceMappingURL=block.json.d.ts.map