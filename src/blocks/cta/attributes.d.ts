import type { Supports } from "./supports";
import type { InterpretAttributes } from "@atomicsmash/blocks-helpers";
export declare const attributes: {
    readonly shouldShowImage: {
        readonly type: "boolean";
        readonly default: true;
    };
    readonly imageId: {
        readonly type: "integer";
        readonly default: 0;
    };
    readonly imagePosition: {
        readonly type: "string";
        readonly enum: readonly ["left", "right"];
        readonly default: "left";
    };
    readonly headerElement: {
        readonly type: "string";
        readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
        readonly default: "h2";
    };
    readonly headerContent: {
        readonly type: "string";
        readonly default: "";
    };
    readonly textContent: {
        readonly type: "string";
        readonly default: "";
    };
    readonly buttons: {
        readonly type: "array";
        readonly default: {
            id: number;
            label: string;
            href: string;
            target: "_self" | "_blank";
        }[];
    };
};
export type Attributes = typeof attributes;
export type InterpretedAttributes = InterpretAttributes<Supports, Attributes>;
//# sourceMappingURL=attributes.d.ts.map