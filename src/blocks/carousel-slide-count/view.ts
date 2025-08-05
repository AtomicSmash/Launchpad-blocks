import type { CarouselInstance } from "../carousel/view";
import { addAction } from "@wordpress/hooks";

addAction(
	"launchpadBlocks.carousel.registerFunctionality",
	"launchpadBlocks.carousel.slideCount",
	(Carousel: CarouselInstance) => {
		const carouselElement = Carousel.carousel;
		const slideCountContainer = carouselElement.querySelector<HTMLDivElement>(
			"div[data-carousel-slide-count]",
		);

		// Note: This must not throw an error if a thumbnails container is not present.
		// If there are multiple carousels on the page, it may run against a carousel
		// that doesn't have a thumbnails container as well as the one with one.
		if (slideCountContainer) {
			addAction(
				"launchpadBlocks.carousel.updateActiveSlide",
				"launchpadBlocks.carousel.slideCount",
				() => {
					const currentSlideSpan = slideCountContainer.querySelector(
						"[data-current-slide-number]",
					);
					if (!currentSlideSpan) {
						throw new Error(
							"Unable to find the current slide number for slide count.",
						);
					}
					currentSlideSpan.innerHTML = `${Carousel.currentSlide + 1}`;
				},
			);
		}
	},
);
