import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly templatePartSlug: {
        readonly type: "string";
    };
    readonly templatePartName: {
        readonly type: "string";
    };
    readonly args: {
        readonly type: "object";
        readonly default: Record<string, AllValuesWithTypes>;
    };
    readonly supportedDynamicTags: {
        readonly type: "array";
        readonly default: [{
            readonly label: "Post type";
            readonly tag: "{{postType}}";
        }];
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
export type AllValuesWithTypes = {
    type: "string";
    value: string;
} | {
    type: "boolean";
    value: string;
} | {
    type: "number";
    value: string;
} | {
    type: "array";
    value: AllValuesWithTypes[];
} | {
    type: "object";
    value: Record<string, AllValuesWithTypes>;
};
//# sourceMappingURL=attributes.d.ts.map