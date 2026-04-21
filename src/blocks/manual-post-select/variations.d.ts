/**
 * Variations declared here should be registered in index.tsx
 */
export declare const variations: [{
    readonly name: "title-only";
    readonly title: "Title only";
    readonly innerBlocks: [["core/post-title"]];
    readonly isDefault: false;
    readonly icon: import("react").JSX.Element;
    readonly scope: ["block"];
}, {
    readonly name: "title-and-excerpt";
    readonly title: "Title and excerpt";
    readonly innerBlocks: [["core/post-title"], ["core/post-excerpt"]];
    readonly isDefault: false;
    readonly icon: import("react").JSX.Element;
    readonly scope: ["block"];
}, {
    readonly name: "simple-card";
    readonly title: "Simple card";
    readonly innerBlocks: [["core/post-featured-image"], ["core/post-title"], ["core/post-excerpt"]];
    readonly isDefault: false;
    readonly icon: import("react").JSX.Element;
    readonly scope: ["block"];
}];
//# sourceMappingURL=variations.d.ts.map