import type { InterpretedAttributes } from "./attributes";
export declare const transforms: {
    from: {
        type: "block";
        blocks: string[];
        transform: (attributes: Record<string, unknown>) => import("@wordpress/blocks").BlockInstance<{
            linkHref: unknown;
            linkText: unknown;
            linkTarget: unknown;
            className: unknown;
        }>;
    }[];
    to: {
        type: "block";
        blocks: string[];
        transform: (attributes: InterpretedAttributes) => import("@wordpress/blocks").BlockInstance<{
            url: string;
            text: string;
            linkTarget: "_self" | "_blank";
            className: string;
        }>;
    }[];
};
//# sourceMappingURL=transforms.d.ts.map