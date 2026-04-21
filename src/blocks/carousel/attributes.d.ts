import type { Supports } from "./supports";
import type { BlockInstanceAsObject, InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly images: {
        readonly type: "array";
        readonly default: {
            id: number;
            url: string;
        }[];
    };
    readonly shouldLoop: {
        readonly type: "boolean";
        readonly default: true;
    };
    readonly shouldLinkSlidesToLightbox: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly slides: {
        readonly type: "array";
        readonly default: BlockInstanceAsObject[];
    };
    readonly currentlySelectedSlide: {
        readonly type: "number";
        readonly default: 0;
        readonly role: "local";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map