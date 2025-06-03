import domReady from "@wordpress/dom-ready";
import { Lightbox } from "../gallery-carousel-lightbox/view";

/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */
class GalleryCarousel {
	public carousel: HTMLDivElement;
	public carouselSlides: HTMLUListElement | null = null;
	public lightbox: Lightbox | null = null;

	constructor(carousel: HTMLDivElement) {
		this.carousel = carousel;

		const lightbox = carousel.querySelector<HTMLDialogElement>(
			"dialog[data-lightbox]",
		);
		if (!lightbox) {
			return;
		}
		this.lightbox = new Lightbox(lightbox);
		const slides = carousel.querySelector<HTMLUListElement>(
			"ul[data-carousel-slides]",
		);
		if (!slides) {
			throw new Error("Carousels must have a slides element.");
		}
		this.carouselSlides = slides;
		const imageButtons =
			this.carouselSlides.querySelectorAll<HTMLButtonElement>(
				"button[data-lightbox-open-button]",
			);
		for (const button of imageButtons) {
			button.addEventListener("click", () => {
				if (this.lightbox) {
					this.lightbox.open();
					if (!this.lightbox.carousel) {
						this.lightbox.initCarousel();
					}
					this.lightbox.carousel!.goToSlide(
						Number(button.dataset.jumpToSlide),
						true,
					);
				}
			});
		}
	}
}

domReady(() => {
	const galleryCarousels = document.querySelectorAll<HTMLDivElement>(
		"[data-launchpad-gallery-carousel]",
	);
	for (const carousel of galleryCarousels) {
		new GalleryCarousel(carousel);
	}
});
