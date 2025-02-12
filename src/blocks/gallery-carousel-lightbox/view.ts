import type { CarouselInstance } from "../carousel/view";
import { Carousel } from "../carousel/view";

/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */
export class Lightbox {
	public lightbox: HTMLDialogElement;
	public carousel: CarouselInstance | null = null;

	constructor(lightbox: HTMLDialogElement) {
		this.lightbox = lightbox;
		const lightboxCloseButton = this.lightbox.querySelector<HTMLButtonElement>(
			"button[data-lightbox-close-button]",
		);
		if (!lightboxCloseButton) {
			throw new Error("The lightbox must have a close button.");
		}
		lightboxCloseButton.addEventListener("click", () => {
			this.close();
		});
	}

	initCarousel() {
		this.lightbox.style.opacity = "0";
		const carousel =
			this.lightbox.querySelector<HTMLDivElement>("div[data-carousel]");
		if (!carousel) {
			throw new Error(
				"Expected to initialise a carousel in the gallery lightbox, but one wasn't found.",
			);
		}
		this.carousel = new Carousel(carousel);
		this.lightbox.style.opacity = "";
	}

	open() {
		this.lightbox.showModal();
	}
	close() {
		this.lightbox.close();
	}
}
