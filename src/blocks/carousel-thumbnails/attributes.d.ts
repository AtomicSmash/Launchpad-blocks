import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly selectedOutlineColour: {
        readonly type: "string";
        readonly default: "black";
    };
    readonly lock: {
        readonly type: "boolean";
        readonly default: true;
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map