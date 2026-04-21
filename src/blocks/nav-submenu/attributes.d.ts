import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly linkText: {
        readonly type: "string";
    };
    readonly subMenuId: {
        readonly type: "string";
        readonly default: "";
    };
    readonly columnCount: {
        readonly type: "number";
        readonly default: 1;
    };
    readonly columnWidth: {
        readonly type: "number";
        readonly default: 14;
    };
    readonly isInSubMenu: {
        readonly type: "boolean";
        readonly default: true;
    };
    readonly isDropdownShown: {
        readonly type: "boolean";
        readonly default: false;
        readonly role: "local";
    };
    readonly icon: {
        readonly type: "object";
        readonly default: {
            readonly iconName: string;
            readonly library: string;
        };
    };
    readonly iconLocation: {
        readonly type: "string";
        readonly default: "end";
        readonly enum: readonly ["start", "end"];
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map