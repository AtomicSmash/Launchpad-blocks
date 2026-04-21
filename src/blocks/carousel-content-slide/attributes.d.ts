import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly backgroundOrOverlayColour: {
        readonly type: "string";
    };
    readonly overlayOpacity: {
        readonly type: "number";
        readonly default: 50;
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map