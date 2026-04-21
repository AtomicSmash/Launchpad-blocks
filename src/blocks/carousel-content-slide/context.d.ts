import type { InterpretedAttributes } from "./attributes";
import type { InterpretedProvidesContext as CarouselInterpretedProvidesContext } from "../carousel";
import type { InterpretedProvidesContext as CarouselContentSlidesInterpretedProvidesContext } from "../carousel-content-slides";
import type { InterpretProvidesContext, InterpretUsedContext } from "@atomicsmash/blocks-helpers";
export declare const providesContext: {};
export type ProvidesContext = typeof providesContext;
export type InterpretedProvidesContext = InterpretProvidesContext<InterpretedAttributes, ProvidesContext>;
type OtherBlocksInterpretedProvidesContext = CarouselContentSlidesInterpretedProvidesContext & CarouselInterpretedProvidesContext;
export declare const usesContext: ["launchpad-blocks/template", "launchpad-blocks/shouldLockChildSlidesToTemplate", "launchpad-blocks/currentlySelectedSlide", "launchpad-blocks/isInTemplateEditMode"];
export type UsesContext = typeof usesContext;
export type InterpretedUsedContext = InterpretUsedContext<UsesContext, OtherBlocksInterpretedProvidesContext>;
export {};
//# sourceMappingURL=context.d.ts.map