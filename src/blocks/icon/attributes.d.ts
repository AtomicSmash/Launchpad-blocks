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
        readonly default: "2rem";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map