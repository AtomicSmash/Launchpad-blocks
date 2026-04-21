import type { InterpretedAttributes } from "./attributes";
import type { InterpretedProvidesContext as CarouselInterpretedProvidesContext } from "../carousel";
import type { InterpretProvidesContext, InterpretUsedContext } from "@atomicsmash/blocks-helpers";
export declare const providesContext: {};
export type ProvidesContext = typeof providesContext;
export type InterpretedProvidesContext = InterpretProvidesContext<InterpretedAttributes, ProvidesContext>;
type OtherBlocksInterpretedProvidesContext = CarouselInterpretedProvidesContext;
export declare const usesContext: ["launchpad-blocks/currentlySelectedSlide", "launchpad-blocks/carouselSlides", "launchpad-blocks/carouselImages"];
export type UsesContext = typeof usesContext;
export type InterpretedUsedContext = InterpretUsedContext<UsesContext, OtherBlocksInterpretedProvidesContext>;
export {};
//# sourceMappingURL=context.d.ts.map