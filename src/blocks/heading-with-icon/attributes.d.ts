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
    readonly headerElement: {
        readonly type: "string";
        readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
        readonly default: "h2";
    };
    readonly headerContent: {
        readonly type: "string";
    };
    readonly iconColour: {
        readonly type: "string";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map