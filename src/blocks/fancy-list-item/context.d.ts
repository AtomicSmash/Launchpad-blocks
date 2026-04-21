import type { InterpretedAttributes } from "./attributes";
import type { InterpretedProvidesContext as FancyListInterpretedProvidesContext } from "../fancy-list";
import type { InterpretProvidesContext, InterpretUsedContext } from "@atomicsmash/blocks-helpers";
export declare const providesContext: {};
export type ProvidesContext = typeof providesContext;
export type InterpretedProvidesContext = InterpretProvidesContext<InterpretedAttributes, ProvidesContext>;
type OtherBlocksInterpretedProvidesContext = FancyListInterpretedProvidesContext;
export declare const usesContext: ["launchpad-blocks/fancyListType", "launchpad-blocks/fancyListMarkerType"];
export type UsesContext = typeof usesContext;
export type InterpretedUsedContext = InterpretUsedContext<UsesContext, OtherBlocksInterpretedProvidesContext>;
export {};
//# sourceMappingURL=context.d.ts.map