import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly columnCount: {
        readonly type: "integer";
        readonly default: 1;
    };
    readonly type: {
        readonly type: "string";
        readonly enum: readonly ["ul", "ol"];
        readonly default: "ul";
    };
    readonly markerType: {
        readonly type: "string";
        readonly enum: readonly ["normal", "icon"];
        readonly default: "normal";
    };
    readonly markerColour: {
        readonly type: "string";
    };
    readonly markerInnerColour: {
        readonly type: "string";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map