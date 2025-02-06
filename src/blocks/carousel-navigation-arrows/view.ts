import type { CarouselInstance } from "../carousel/view";
import { addAction } from "@wordpress/hooks";

addAction(
	"launchpadBlocks.carousel.registerFunctionality",
	"launchpadBlocks.carousel.navigationArrows",
	(Carousel: CarouselInstance) => {
		const carouselElement = Carousel.carousel;
		const navigationArrows = carouselElement.querySelector<HTMLDivElement>(
			"div[data-carousel-navigation-arrows]",
		);

		// Note: This must not throw an error if arrows are not present. If there are
		// multiple carousels on the page, it may run against a carousel that doesn't
		// have arrows as well as the one with
		if (navigationArrows) {
			const prevButton = navigationArrows.querySelector<HTMLButtonElement>(
				"button[data-carousel-prev-slide]",
			);
			if (!prevButton) {
				throw new Error("Unable to find the previous slide button.");
			}
			const nextButton = navigationArrows.querySelector<HTMLButtonElement>(
				"button[data-carousel-next-slide]",
			);
			if (!nextButton) {
				throw new Error("Unable to find the next slide button.");
			}
			prevButton.addEventListener("click", () => {
				Carousel.goToPreviousSlide();
			});
			nextButton.addEventListener("click", () => {
				Carousel.goToNextSlide();
			});
		}
	},
);
