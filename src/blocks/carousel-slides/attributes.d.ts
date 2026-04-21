import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly allowResize: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly aspectRatio: {
        readonly type: "string";
        readonly default: "auto";
    };
    readonly imageFit: {
        readonly type: "string";
        readonly enum: readonly ["cover", "contain"];
        readonly default: "cover";
    };
    readonly shouldPullImagesFromContext: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly captionBackground: {
        readonly type: "string";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map