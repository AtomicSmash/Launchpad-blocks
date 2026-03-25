/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */

export class Lightbox {
	public lightbox: HTMLDialogElement;
	public linkedInstances: Record<
		string,
		InstanceType<abstract new (...args: unknown[]) => unknown>
	> = {};

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

	open() {
		this.lightbox.showModal();
	}
	close() {
		this.lightbox.close();
	}
}
