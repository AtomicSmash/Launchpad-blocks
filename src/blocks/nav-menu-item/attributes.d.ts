import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
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
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map