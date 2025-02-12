import domReady from "@wordpress/dom-ready";
import { Lightbox } from "../gallery-carousel-lightbox/view";

/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */
class GalleryCarousel {
	public carousel: HTMLDivElement;
	public carouselSlides: HTMLDivElement | null = null;
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
		const slides = carousel.querySelector<HTMLDivElement>(
			"div[data-carousel-slides]",
		);
		if (!slides) {
			throw new Error("Carousels must have a slides element.");
		}
		this.carouselSlides = slides;
		const images = this.carouselSlides.querySelectorAll(".wp-block-image");
		let index = 0;
		for (const image of images) {
			const button = document.createElement("button");
			button.classList.add("reset");
			button.dataset.lightboxOpenButton = "";
			button.dataset.jumpToSlide = `${index}`;
			button.appendChild(image);
			this.carouselSlides.appendChild(button);
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
			index++;
		}
	}
}

domReady(() => {
	const galleryCarousels = document.querySelectorAll<HTMLDivElement>(
		"[data-gallery-carousel]",
	);
	for (const carousel of galleryCarousels) {
		new GalleryCarousel(carousel);
	}
});
