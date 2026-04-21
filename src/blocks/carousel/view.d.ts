/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */
export declare class Carousel {
    carousel: HTMLDivElement;
    carouselLiveRegion: HTMLDivElement;
    carouselSlides: HTMLUListElement;
    slideWidth: number;
    slideGap: number;
    slideCount: number;
    fullSlidesShownInViewport: number;
    currentSlide: number;
    loop: boolean;
    hasLightbox: boolean;
    private debounceResizeTimeout;
    controls: HTMLElement[];
    private touchPointCache;
    private touchActionToTake;
    constructor(carousel: HTMLDivElement);
    addOrRemoveTouchEvents(): void;
    handleTouchStart(event: TouchEvent): void;
    handleTouchMove(event: TouchEvent): void;
    handleTouchEnd(event: TouchEvent): void;
    showOrHideControls(): void;
    getSlideInfo(): {
        slideCount: number;
        slideWidth: number;
        slideGap: number;
        fullSlidesShownInViewport: number;
    };
    goToSlide(slideNumber: number, instant?: boolean, force?: boolean): void;
    goToPreviousSlide(instant?: boolean): void;
    goToNextSlide(instant?: boolean): void;
    initLightbox(): void;
}
export type CarouselInstance = InstanceType<typeof Carousel>;
//# sourceMappingURL=view.d.ts.map