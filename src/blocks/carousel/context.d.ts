import type { InterpretedAttributes } from "./attributes";
import type { InterpretedProvidesContext as GalleryCarouselInterpretedProvidesContext } from "../gallery-carousel";
import type { InterpretProvidesContext, InterpretUsedContext } from "@atomicsmash/blocks-helpers";
export declare const providesContext: {
    readonly "launchpad-blocks/carouselImages": "images";
    readonly "launchpad-blocks/carouselSlides": "slides";
    readonly "launchpad-blocks/shouldLinkSlidesToLightbox": "shouldLinkSlidesToLightbox";
    readonly "launchpad-blocks/currentlySelectedSlide": "currentlySelectedSlide";
};
export type ProvidesContext = typeof providesContext;
export type InterpretedProvidesContext = InterpretProvidesContext<InterpretedAttributes, ProvidesContext>;
type OtherBlocksInterpretedProvidesContext = InterpretedProvidesContext | GalleryCarouselInterpretedProvidesContext;
export declare const usesContext: ["launchpad-blocks/carouselImages", "launchpad-blocks/carouselSlides"];
export type UsesContext = typeof usesContext;
export type InterpretedUsedContext = InterpretUsedContext<UsesContext, OtherBlocksInterpretedProvidesContext>;
export {};
//# sourceMappingURL=context.d.ts.map