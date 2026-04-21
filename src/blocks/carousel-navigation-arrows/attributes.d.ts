import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly prevText: {
        readonly type: "string";
        readonly default: "Go to previous slide";
    };
    readonly nextText: {
        readonly type: "string";
        readonly default: "Go to next slide";
    };
    readonly prevVisualText: {
        readonly type: "string";
        readonly default: "Previous";
    };
    readonly nextVisualText: {
        readonly type: "string";
        readonly default: "Next";
    };
    readonly shouldShowTextVisually: {
        readonly type: "boolean";
        readonly default: true;
    };
    readonly backgroundColour: {
        readonly type: "string";
        readonly default: "black";
    };
    readonly iconColour: {
        readonly type: "string";
        readonly default: "white";
    };
    readonly prevIcon: {
        readonly type: "object";
        readonly default: {
            readonly iconName: string;
            readonly library: string;
        };
    };
    readonly nextIcon: {
        readonly type: "object";
        readonly default: {
            readonly iconName: string;
            readonly library: string;
        };
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map