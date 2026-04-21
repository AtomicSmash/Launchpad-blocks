import type { Supports } from "./supports";
import type { BlockInstanceAsObject, InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const defaultTemplate: BlockInstanceAsObject[];
export declare const attributes: {
    readonly template: {
        readonly type: "array";
        readonly default: BlockInstanceAsObject[];
    };
    readonly tempInnerBlocksStorage: {
        readonly type: "array";
        readonly default: BlockInstanceAsObject[];
    };
    readonly shouldLockChildSlidesToTemplate: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly hasDismissedVariationsSelector: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly isInTemplateEditMode: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly aspectRatio: {
        readonly type: "string";
        readonly default: "auto";
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map