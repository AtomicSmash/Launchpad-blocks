import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly align: {
        readonly type: "string";
        readonly default: "full";
    };
    readonly text: {
        readonly type: "string";
    };
    readonly isDismissible: {
        readonly type: "boolean";
        readonly default: true;
    };
    readonly backgroundColor: {
        readonly type: "string";
        readonly default: "elevation-high";
    };
    readonly textColor: {
        readonly type: "string";
        readonly default: "black";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map