import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly iconName: {
        readonly type: "string";
        readonly role: "content";
        readonly default: "menu-close-icon";
    };
    readonly library: {
        readonly type: "string";
        readonly role: "content";
        readonly default: "launchpad-blocks";
    };
    readonly backgroundColor: {
        readonly type: "string";
        readonly default: "white";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map