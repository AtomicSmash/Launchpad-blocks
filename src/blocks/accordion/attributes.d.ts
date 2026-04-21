import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly isInitiallyOpen: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly accordionId: {
        readonly type: "string";
        readonly default: "";
    };
    readonly headerContent: {
        readonly type: "string";
    };
    readonly headerElement: {
        readonly type: "string";
        readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
        readonly default: "h2";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map