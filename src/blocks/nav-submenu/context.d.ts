import type { InterpretedAttributes } from "./attributes";
import type { InterpretedProvidesContext as NavInterpretedProvidesContext } from "../navigation";
import type { InterpretProvidesContext, InterpretUsedContext } from "@atomicsmash/blocks-helpers";
export declare const providesContext: {
    readonly "launchpad-blocks/isInSubMenu": "isInSubMenu";
};
export type ProvidesContext = typeof providesContext;
export type InterpretedProvidesContext = InterpretProvidesContext<InterpretedAttributes, ProvidesContext>;
type OtherBlocksInterpretedProvidesContext = NavInterpretedProvidesContext;
export declare const usesContext: [];
export type UsesContext = typeof usesContext;
export type InterpretedUsedContext = InterpretUsedContext<UsesContext, OtherBlocksInterpretedProvidesContext>;
export {};
//# sourceMappingURL=context.d.ts.map