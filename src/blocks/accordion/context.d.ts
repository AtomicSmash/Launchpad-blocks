import type { InterpretedAttributes } from "./attributes";
import type { InterpretedProvidesContext as AccordionGroupInterpretedProvidesContext } from "../accordion-group";
import type { InterpretProvidesContext, InterpretUsedContext } from "@atomicsmash/blocks-helpers";
export declare const providesContext: {};
export type ProvidesContext = typeof providesContext;
export type InterpretedProvidesContext = InterpretProvidesContext<InterpretedAttributes, ProvidesContext>;
type OtherBlocksInterpretedProvidesContext = AccordionGroupInterpretedProvidesContext;
export declare const usesContext: ["launchpad-blocks/accordion-heading-level"];
export type UsesContext = typeof usesContext;
export type InterpretedUsedContext = InterpretUsedContext<UsesContext, OtherBlocksInterpretedProvidesContext>;
export {};
//# sourceMappingURL=context.d.ts.map