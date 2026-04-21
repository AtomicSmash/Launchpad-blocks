import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly headerElement: {
        readonly type: "string";
        readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
        readonly default: "h2";
    };
    readonly headerContent: {
        readonly type: "string";
    };
    readonly style: {
        readonly type: "object";
        readonly default: {
            readonly padding: {
                readonly top: "var:preset|spacing|10";
                readonly bottom: "var:preset|spacing|10";
            };
        };
    };
    readonly textAlign: {
        readonly type: "string";
        readonly enum: readonly ["left", "center", "right"];
        readonly default: "left";
    };
    readonly stretchTitle: {
        readonly type: "string";
        readonly enum: readonly ["none", "wide", "full"];
        readonly default: "none";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map