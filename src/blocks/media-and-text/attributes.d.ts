import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly mediaPosition: {
        readonly type: "string";
        readonly enum: readonly ["left", "right"];
        readonly default: "left";
    };
    readonly imageId: {
        readonly type: "integer";
        readonly default: 0;
    };
    readonly shouldBreakOutMedia: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly hasBackground: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly shouldChildBlocksBeLocked: {
        readonly type: "boolean";
        readonly default: true;
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map