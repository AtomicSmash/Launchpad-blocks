import type { CarouselInstance } from "../carousel/view";
/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */
export declare class Lightbox {
    lightbox: HTMLDialogElement;
    carousel: CarouselInstance | null;
    constructor(lightbox: HTMLDialogElement);
    initCarousel(): void;
    open(): void;
    close(): void;
}
//# sourceMappingURL=view.d.ts.map