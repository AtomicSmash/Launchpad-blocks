import type { InterpretedAttributes } from "./attributes";
import type { InterpretedProvidesContext as CarouselInterpretedProvidesContext } from "../carousel";
import type { InterpretedProvidesContext as GalleryCarouselInterpretedProvidesContext } from "../gallery-carousel";
import type { InterpretProvidesContext, InterpretUsedContext } from "@atomicsmash/blocks-helpers";
export declare const providesContext: {
    readonly allowResize: "allowResize";
};
export type ProvidesContext = typeof providesContext;
export type InterpretedProvidesContext = InterpretProvidesContext<InterpretedAttributes, ProvidesContext>;
type OtherBlocksInterpretedProvidesContext = CarouselInterpretedProvidesContext & GalleryCarouselInterpretedProvidesContext;
export declare const usesContext: ["launchpad-blocks/carouselImages", "launchpad-blocks/shouldLinkSlidesToLightbox"];
export type UsesContext = typeof usesContext;
export type InterpretedUsedContext = InterpretUsedContext<UsesContext, OtherBlocksInterpretedProvidesContext>;
export {};
//# sourceMappingURL=context.d.ts.map