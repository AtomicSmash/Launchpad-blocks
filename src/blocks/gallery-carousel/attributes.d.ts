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
    readonly columnCount: {
        readonly type: "integer";
        readonly default: 4;
    };
    readonly shouldLinkSlidesToLightbox: {
        readonly type: "boolean";
        readonly default: true;
    };
    readonly slides: {
        readonly type: "array";
        readonly default: BlockInstanceAsObject[];
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map