import type { CarouselInstance } from "../carousel/view";
import { addAction } from "@wordpress/hooks";

addAction(
	"launchpadBlocks.carousel.registerFunctionality",
	"launchpadBlocks.carousel.thumbnails",
	(Carousel: CarouselInstance) => {
		const carouselElement = Carousel.carousel;
		const thumbnailsContainer = carouselElement.querySelector<HTMLDivElement>(
			"div[data-carousel-thumbnails]",
		);

		// Note: This must not throw an error if a thumbnails container is not present.
		// If there are multiple carousels on the page, it may run against a carousel
		// that doesn't have a thumbnails container as well as the one with one.
		if (thumbnailsContainer) {
			const thumbnails =
				thumbnailsContainer.querySelectorAll<HTMLButtonElement>(
					"button[data-carousel-slide]",
				);
			if (thumbnails.length < 0) {
				throw new Error(
					"Unable to find the thumbnails in your thumbnails container.",
				);
			}
			const thumbnailWidth = thumbnails[0]!.offsetWidth;
			const thumbnailInlineGap =
				(thumbnailsContainer.scrollWidth - thumbnailWidth * thumbnails.length) /
				(thumbnails.length - 1);

			for (const thumbnail of thumbnails) {
				const slideNumber = thumbnail.dataset.carouselSlide;
				if (
					!slideNumber ||
					Number(slideNumber) > Carousel.slideCount ||
					Number(slideNumber) < 0
				) {
					throw new Error("Invalid slide number on thumbnail.");
				}
				thumbnail.addEventListener("click", () => {
					Carousel.goToSlide(Number(slideNumber));
				});
			}
			addAction(
				"launchpadBlocks.carousel.updateActiveSlide",
				"launchpadBlocks.carousel.thumbnails",
				() => {
					makeNotSelected(
						[...thumbnails].find((thumbnail) =>
							thumbnail.classList.contains("is-selected"),
						),
					);
					const newlySelectedSlideThumbnail = [...thumbnails].find(
						(thumbnail) =>
							Number(thumbnail.dataset.carouselSlide) === Carousel.currentSlide,
					);
					if (!newlySelectedSlideThumbnail) {
						throw new Error("Unable to find the selected slide's thumbnail.");
					}
					makeSelected(newlySelectedSlideThumbnail);
					// scroll thumbnail into view
					// Note: do not use scrollIntoView because it also scrolls vertically.
					const newThumbnailIndex = Number(
						newlySelectedSlideThumbnail.dataset.carouselSlide,
					);

					const newScrollPositionAtCenter =
						newThumbnailIndex * (thumbnailWidth + thumbnailInlineGap) +
						thumbnailWidth / 2;

					thumbnailsContainer.scrollTo({
						left:
							newScrollPositionAtCenter - thumbnailsContainer.clientWidth / 2,
					});
				},
			);
		}
	},
);

function makeNotSelected(thumbnail: HTMLButtonElement | undefined) {
	if (!thumbnail) {
		return;
	}
	thumbnail.classList.remove("is-selected");
}

function makeSelected(thumbnail: HTMLButtonElement) {
	thumbnail.classList.add("is-selected");
}
