import type { InterpretedAttributes } from "./attributes";
import type { InterpretProvidesContext, InterpretUsedContext } from "@atomicsmash/blocks-helpers";
import type { InterpretedProvidesContext as TabsInterpretedProvidesContext } from "@launchpadBlocks/tabs";
export declare const providesContext: {};
export type ProvidesContext = typeof providesContext;
export type InterpretedProvidesContext = InterpretProvidesContext<InterpretedAttributes, ProvidesContext>;
type OtherBlocksInterpretedProvidesContext = TabsInterpretedProvidesContext;
export declare const usesContext: ["launchpad/tabsGroupId", "launchpad/initiallySelectedTab"];
export type UsesContext = typeof usesContext;
export type InterpretedUsedContext = InterpretUsedContext<UsesContext, OtherBlocksInterpretedProvidesContext>;
export {};
//# sourceMappingURL=context.d.ts.map