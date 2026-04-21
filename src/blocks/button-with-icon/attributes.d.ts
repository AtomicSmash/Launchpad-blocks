import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
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
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map