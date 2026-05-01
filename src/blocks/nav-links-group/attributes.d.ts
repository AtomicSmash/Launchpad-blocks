import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly headerElement: {
        readonly type: "string";
        readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
        readonly default: "h2";
    };
    readonly headerContent: {
        readonly type: "string";
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
    readonly navListContextLabelledBy: {
        readonly type: "string";
        readonly default: "";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map