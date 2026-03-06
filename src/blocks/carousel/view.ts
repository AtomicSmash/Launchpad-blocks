import domReady from "@wordpress/dom-ready";
import { doAction, addAction, applyFilters } from "@wordpress/hooks";
import { getPixelNumber } from "@launchpadBlocks/helpers";

addAction(
	"launchpadBlocks.carousel.resize",
	"launchpadBlocks.carousel.defaultResizeActions",
	(Carousel: CarouselInstance) => {
		Carousel.carouselSlides.style.width = ""; // Reset width for next line
		Carousel.carouselSlides.style.width = `${Carousel.carouselSlides.clientWidth}px`; // Fix subpixel rendering issue
		const { slideCount, slideWidth, slideGap, fullSlidesShownInViewport } =
			Carousel.getSlideInfo();
		Carousel.slideCount = slideCount;
		Carousel.slideGap = slideGap;
		Carousel.slideWidth = slideWidth;
		Carousel.fullSlidesShownInViewport = fullSlidesShownInViewport;
		Carousel.goToSlide(Carousel.currentSlide, true, true);
	},
	10,
);
addAction(
	"launchpadBlocks.carousel.resize",
	"launchpadBlocks.carousel.hideControlsIfNotNeeded",
	(Carousel: CarouselInstance) => {
		Carousel.showOrHideControls();
	},
	70, // Run this action after most other actions
);

/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */
export class Carousel {
	public carousel: HTMLDivElement;
	public carouselLiveRegion: HTMLDivElement;
	public carouselSlides: HTMLUListElement;
	public slideWidth: number;
	public slideGap: number;
	public slideCount: number;
	public fullSlidesShownInViewport: number;
	public currentSlide: number;
	public loop: boolean;
	private debounceResizeTimeout: undefined | ReturnType<typeof setTimeout> =
		undefined;
	public controls: HTMLElement[] = [];

	constructor(carousel: HTMLDivElement) {
		this.carousel = carousel;
		this.loop = this.carousel.dataset.loop === "true";
		this.currentSlide = 0;
		const carouselLiveRegion = carousel.querySelector<HTMLDivElement>(
			"div[data-carousel-live-region]",
		);
		if (!carouselLiveRegion) {
			throw new Error("Carousels must have a live region for accessibility.");
		}
		this.carouselLiveRegion = carouselLiveRegion;
		const slides = carousel.querySelector<HTMLUListElement>(
			"ul[data-carousel-slides]",
		);
		if (!slides) {
			throw new Error("Carousels must have a slides element.");
		}
		this.carouselSlides = slides;
		this.carouselSlides.style.width = `${this.carouselSlides.clientWidth}px`; // Fix subpixel rendering issue
		const { slideCount, slideWidth, slideGap, fullSlidesShownInViewport } =
			this.getSlideInfo();
		this.slideCount = slideCount;
		this.slideGap = slideGap;
		this.slideWidth = slideWidth;
		this.fullSlidesShownInViewport = fullSlidesShownInViewport;
		// Do actions already registered at this point
		doAction("launchpadBlocks.carousel.registerFunctionality", this);
		// Do new actions as they get registered
		addAction(
			"hookAdded",
			"launchpadBlocks.carousel",
			(
				hookName: string,
				_functionName: string,
				callback: (carousel: CarouselInstance) => void,
				_priority: number,
			) => {
				if (hookName === "launchpadBlocks.carousel.registerFunctionality") {
					callback(this);
					this.showOrHideControls();
				}
			},
		);
		this.showOrHideControls();
		window.addEventListener("resize", () => {
			clearTimeout(this.debounceResizeTimeout);
			this.debounceResizeTimeout = setTimeout(() => {
				doAction("launchpadBlocks.carousel.resize", this);
			}, 100);
		});
		const touchPointCache: Touch[] = [];
		let actionToTake: "prev-slide" | "next-slide" | null = null;
		// Add touch swiping functionality
		this.carouselSlides.addEventListener("touchstart", (event) => {
			// If the user makes simultaneous touches, the browser will fire a
			// separate touchstart event for each touch point. Thus if there are
			// three simultaneous touches, the first touchstart event will have
			// targetTouches length of one, the second event will have a length
			// of two, and so on.
			event.preventDefault();

			// Only process if it's a single finger swipe
			if (event.targetTouches.length === 1) {
				touchPointCache.push(event.targetTouches[0]!);
			}
		});
		this.carouselSlides.addEventListener("touchmove", (event) => {
			// If the user makes simultaneous touches, the browser will fire a
			// separate touchstart event for each touch point. Thus if there are
			// three simultaneous touches, the first touchstart event will have
			// targetTouches length of one, the second event will have a length
			// of two, and so on.
			event.preventDefault();

			if (
				event.targetTouches.length === 1 &&
				event.changedTouches.length === 1
			) {
				const touchPointOriginalPosition = touchPointCache[0];
				if (!touchPointOriginalPosition) {
					console.error("Failed to get original touch position.");
					return;
				}
				const touchPointNewPosition = event.changedTouches.item(0);
				if (!touchPointNewPosition) {
					console.error("Failed to get new touch position.");
					return;
				}

				const SWIPE_THRESHOLD = this.slideWidth / 10;
				const difference =
					touchPointOriginalPosition.clientX - touchPointNewPosition.clientX;
				if (difference < -1 * SWIPE_THRESHOLD) {
					// Swiped left to right more than threshold
					actionToTake = "prev-slide";
					if (this.currentSlide === 0) {
						// first carousel image can't scroll because there's nothing to scroll to.
						(this.carouselSlides.children[0] as HTMLLIElement).style.transform =
							`translateX(${SWIPE_THRESHOLD}px)`;
					} else {
						this.carouselSlides.scrollTo({
							left: this.currentSlide * this.slideWidth - SWIPE_THRESHOLD,
						});
					}
				} else if (difference > SWIPE_THRESHOLD) {
					// Swiped right to left more than threshold
					actionToTake = "next-slide";
					if (this.currentSlide === this.slideCount - 1) {
						// Final carousel image can't scroll because there's nothing to scroll to.
						(
							this.carouselSlides.children[this.slideCount - 1] as HTMLLIElement
						).style.transform = `translateX(-${SWIPE_THRESHOLD}px)`;
						this.carouselSlides.scrollTo({
							left: this.carouselSlides.scrollWidth,
						});
					} else {
						this.carouselSlides.scrollTo({
							left: this.currentSlide * this.slideWidth + SWIPE_THRESHOLD,
						});
					}
				} else {
					// Swiped less than threshold
					actionToTake = null;
					(this.carouselSlides.children[0] as HTMLLIElement).style.transform =
						"";
					(
						this.carouselSlides.children[this.slideCount - 1] as HTMLLIElement
					).style.transform = "";
					this.carouselSlides.scrollTo({
						left: this.currentSlide * this.slideWidth,
					});
				}
			}
		});
		this.carouselSlides.addEventListener("touchend", (event) => {
			// If the user makes simultaneous touches, the browser will fire a
			// separate touchstart event for each touch point. Thus if there are
			// three simultaneous touches, the first touchstart event will have
			// targetTouches length of one, the second event will have a length
			// of two, and so on.
			event.preventDefault();

			if (event.targetTouches.length === 0) {
				touchPointCache.length = 0;

				if (actionToTake === "prev-slide") {
					this.goToPreviousSlide();
				}
				if (actionToTake === "next-slide") {
					this.goToNextSlide();
				}
			}
		});
	}

	showOrHideControls() {
		for (const control of this.controls) {
			const shouldHideControl = applyFilters(
				"launchpadBlocks.carousel.shouldHideControl",
				this.slideCount <= this.fullSlidesShownInViewport,
				this,
				control,
			);
			if (typeof shouldHideControl !== "boolean") {
				throw new Error(
					`Returned value of launchpadBlocks.carousel.shouldHideControl filter should be boolean, received ${typeof shouldHideControl}`,
				);
			}
			control.hidden = shouldHideControl;
		}
	}

	getSlideInfo() {
		const slideCount =
			this.carouselSlides.querySelectorAll(":scope > *").length;
		const slideWidth =
			this.carouselSlides.querySelector(":scope > *")?.clientWidth;
		const slideGapPx = window
			.getComputedStyle(this.carouselSlides)
			.getPropertyValue("column-gap");
		const slideGap = getPixelNumber(
			!slideGapPx.endsWith("px") ? "0px" : slideGapPx,
		);
		if (!slideWidth) {
			throw new Error("Unable to get the slide width for the carousel.");
		}
		const fullSlidesShownInViewport = Math.floor(
			this.carouselSlides.clientWidth / slideWidth,
		);
		return { slideCount, slideWidth, slideGap, fullSlidesShownInViewport };
	}

	goToSlide(slideNumber: number, instant = false, force = false) {
		if (this.currentSlide === slideNumber && !force) {
			return;
		}
		if (slideNumber < 0) {
			throw new Error("The slide number must be more than zero.");
		}
		if (slideNumber > this.slideCount) {
			throw new Error(
				"The slide number must less than the total number of slides.",
			);
		}
		const currentScrollPosition = this.carouselSlides.scrollLeft;
		const newScrollPosition = slideNumber * (this.slideWidth + this.slideGap);
		this.currentSlide = slideNumber;
		this.carouselSlides.scrollBy({
			left: newScrollPosition - currentScrollPosition,
			behavior: instant ? "instant" : "auto",
		});
		this.carouselLiveRegion.textContent = `Slide ${this.currentSlide + 1} of ${this.slideCount}`;
		doAction("launchpadBlocks.carousel.updateActiveSlide");
	}

	goToPreviousSlide(instant = false) {
		let prevSlide = this.currentSlide - 1;
		if (prevSlide < 0) {
			if (!this.loop) {
				return;
			}
			prevSlide = this.slideCount - (this.fullSlidesShownInViewport - 1) - 1;
		}
		this.goToSlide(prevSlide, instant);
	}

	goToNextSlide(instant = false) {
		let nextSlide = this.currentSlide + 1;
		if (nextSlide >= this.slideCount - (this.fullSlidesShownInViewport - 1)) {
			if (!this.loop) {
				return;
			}
			nextSlide = 0;
		}
		this.goToSlide(nextSlide, instant);
	}
}

export type CarouselInstance = InstanceType<typeof Carousel>;

domReady(() => {
	const carousels = document.querySelectorAll<HTMLDivElement>(
		"[data-launchpad-carousel]",
	);
	for (const carousel of carousels) {
		if (carousel.parentElement?.dataset.lightbox === "") {
			// Don't try and initialise carousels in lightboxes, they're hidden on load so it won't work.
			continue;
		}
		new Carousel(carousel);
	}
});
