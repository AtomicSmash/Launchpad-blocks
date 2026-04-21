import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly prefix: {
        readonly type: "string";
        readonly role: "content";
    };
    readonly betweenText: {
        readonly type: "string";
        readonly default: "/";
        readonly role: "content";
    };
    readonly suffix: {
        readonly type: "string";
        readonly role: "content";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map