import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly navId: {
        readonly type: "string";
    };
    readonly navListContext: {
        readonly type: "string";
        readonly default: "Primary navigation";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map