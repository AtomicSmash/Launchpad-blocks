import type { InterpretedAttributes } from "./attributes";
import type { InterpretProvidesContext, InterpretUsedContext } from "@atomicsmash/blocks-helpers";
export declare const providesContext: {
    readonly allowResize: "allowResize";
};
export type ProvidesContext = typeof providesContext;
export type InterpretedProvidesContext = InterpretProvidesContext<InterpretedAttributes, ProvidesContext>;
type OtherBlocksInterpretedProvidesContext = Record<string, never>;
export declare const usesContext: [];
export type UsesContext = typeof usesContext;
export type InterpretedUsedContext = InterpretUsedContext<UsesContext, OtherBlocksInterpretedProvidesContext>;
export {};
//# sourceMappingURL=context.d.ts.map