import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly isMultiple: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly accordionGroupId: {
        readonly type: "string";
        readonly default: "";
    };
    readonly headerElement: {
        readonly type: "string";
        readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
        readonly default: "h2";
    };
    readonly loadPrioritisation: {
        readonly type: "string";
        readonly enum: readonly ["cls", "bot-traffic"];
        readonly default: "cls";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map