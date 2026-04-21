import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly tabsGroupId: {
        readonly type: "string";
        readonly default: "";
    };
    readonly shouldShowTabSectionTitle: {
        readonly type: "boolean";
        readonly default: true;
    };
    readonly titleLevel: {
        readonly type: "string";
        readonly enum: readonly ["1", "2", "3", "4", "5", "6"];
        readonly default: "2";
    };
    readonly title: {
        readonly type: "string";
        readonly default: "";
    };
    readonly initiallySelectedTab: {
        readonly type: "string";
        readonly default: "";
    };
    readonly hasDismissedVariationsSelector: {
        readonly type: "boolean";
        readonly default: false;
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map