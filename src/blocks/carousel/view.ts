import domReady from "@wordpress/dom-ready";
import { doAction, addAction } from "@wordpress/hooks";

/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */
class Carousel {
	public carousel: HTMLDivElement;
	public carouselSlides: HTMLDivElement;
	public slideWidth: number;
	public slideCount: number;
	public currentSlide: number;
	public loop: boolean;

	constructor(carousel: HTMLDivElement) {
		this.carousel = carousel;
		this.loop = this.carousel.dataset.loop === "true";
		this.currentSlide = 0;
		const slides = carousel.querySelector<HTMLDivElement>(
			"div[data-carousel-slides]",
		);
		if (!slides) {
			throw new Error("Carousels must have a slides element.");
		}
		this.carouselSlides = slides;
		this.slideCount = slides.querySelectorAll(".wp-block-image").length;
		const slideWidth =
			this.carouselSlides.querySelector(".wp-block-image")?.clientWidth;
		if (!slideWidth) {
			throw new Error("Unable to get the slide width for the carousel.");
		}
		this.slideWidth = slideWidth;
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
				}
			},
		);
	}

	goToSlide(slideNumber: number) {
		if (this.currentSlide === slideNumber) {
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
		const newScrollPosition = slideNumber * this.slideWidth;
		this.currentSlide = slideNumber;
		this.carouselSlides.scrollBy({
			left: newScrollPosition - currentScrollPosition,
		});
		doAction("launchpadBlocks.carousel.updateActiveSlide");
	}

	goToPreviousSlide() {
		let prevSlide = this.currentSlide - 1;
		console.log({ prevSlide });
		if (prevSlide < 0) {
			if (!this.loop) {
				return;
			}
			prevSlide = this.slideCount - 1;
		}
		console.log({ prevSlide });
		this.goToSlide(prevSlide);
	}

	goToNextSlide() {
		let nextSlide = this.currentSlide + 1;
		console.log({ nextSlide });
		if (nextSlide >= this.slideCount) {
			if (!this.loop) {
				return;
			}
			nextSlide = 0;
		}
		console.log({ nextSlide });
		this.goToSlide(nextSlide);
	}
}

export type CarouselInstance = InstanceType<typeof Carousel>;

function enableCarousels() {
	const carousels =
		document.querySelectorAll<HTMLDivElement>("[data-carousel]");
	for (const carousel of carousels) {
		new Carousel(carousel);
	}
}

domReady(() => {
	enableCarousels();
});
