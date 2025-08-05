import type { CarouselInstance } from "../carousel/view";
import { addAction } from "@wordpress/hooks";

addAction(
	"launchpadBlocks.carousel.registerFunctionality",
	"launchpadBlocks.carousel.dots",
	(Carousel: CarouselInstance) => {
		const carouselElement = Carousel.carousel;
		const dotsContainer = carouselElement.querySelector<HTMLDivElement>(
			"div[data-carousel-dots]",
		);

		// Note: This must not throw an error if a thumbnails container is not present.
		// If there are multiple carousels on the page, it may run against a carousel
		// that doesn't have a thumbnails container as well as the one with one.
		if (dotsContainer) {
			const dots = dotsContainer.querySelectorAll<HTMLButtonElement>(
				"button[data-carousel-slide]",
			);
			if (dots.length < 0) {
				throw new Error("Unable to find the dots in your dots container.");
			}
			for (const dot of dots) {
				const slideNumber = dot.dataset.carouselSlide;
				if (
					!slideNumber ||
					Number(slideNumber) > Carousel.slideCount ||
					Number(slideNumber) < 0
				) {
					throw new Error("Invalid slide number on dot.");
				}
				dot.addEventListener("click", () => {
					Carousel.goToSlide(Number(slideNumber));
				});
			}
			addAction(
				"launchpadBlocks.carousel.updateActiveSlide",
				"launchpadBlocks.carousel.dots",
				() => {
					makeNotSelected(
						[...dots].find((dot) => dot.classList.contains("is-selected")),
					);
					const newlySelectedSlideDot = [...dots].find(
						(dot) =>
							Number(dot.dataset.carouselSlide) === Carousel.currentSlide,
					);
					if (!newlySelectedSlideDot) {
						throw new Error("Unable to find the selected slide's thumbnail.");
					}
					makeSelected(newlySelectedSlideDot);
				},
			);
		}
	},
);

function makeNotSelected(dot: HTMLButtonElement | undefined) {
	if (!dot) {
		return;
	}
	dot.classList.remove("is-selected");
}

function makeSelected(dot: HTMLButtonElement) {
	dot.classList.add("is-selected");
}
