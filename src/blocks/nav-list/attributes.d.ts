import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly isNestedInAnotherNavLink: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly ariaLabel: {
        readonly type: "string";
        readonly default: "";
    };
    readonly linkOrientation: {
        readonly type: "string";
        readonly enum: readonly ["horizontal", "vertical"];
        readonly default: "horizontal";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map