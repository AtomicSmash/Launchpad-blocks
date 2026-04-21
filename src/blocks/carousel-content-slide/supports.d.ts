export declare const supports: {
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
export type Supports = typeof supports;
//# sourceMappingURL=supports.d.ts.map