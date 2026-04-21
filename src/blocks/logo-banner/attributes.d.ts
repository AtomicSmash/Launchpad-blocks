import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly isScrolling: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly shouldAlignBottomRowToLeft: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly allowResize: {
        readonly type: "boolean";
        readonly default: false;
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map