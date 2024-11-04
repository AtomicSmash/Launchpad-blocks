/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */
import domReady from "@wordpress/dom-ready";
import { getTimeInMilliseconds } from "@plugin/blocks/helpers";

class GlobalBanner {
	globalBanner: HTMLDivElement;
	isDismissible: boolean;
	bannerId: string | undefined;

	constructor(globalBanner: HTMLDivElement) {
		this.globalBanner = globalBanner;
		this.isDismissible = this.globalBanner.dataset.isDismissible === "true";
		this.bannerId = this.globalBanner.dataset.bannerId;

		if (!this.bannerId) {
			return;
		}

		if (this.isDismissible) {
			const dismissButton = this.globalBanner.querySelector<HTMLButtonElement>(
				"button.dismiss-button",
			);
			if (dismissButton) {
				dismissButton.addEventListener("click", (event) => {
					event.preventDefault();
					this.dismissBanner();
				});
			}
		}
		this.initialiseBanner();
	}

	initialiseBanner() {
		if (!localStorage.getItem(`as-banner-${this.bannerId}`)) {
			this.globalBanner.style.display = "";
			const scrollHeight = this.globalBanner.scrollHeight;
			this.globalBanner.style.overflow = "hidden";
			this.globalBanner.style.height = `${scrollHeight}px`;
		}
	}

	dismissBanner() {
		const bannerShowHideTiming = getTimeInMilliseconds(
			getComputedStyle(this.globalBanner).getPropertyValue(
				"--launchpad-banner-show-hide-timing",
			),
		);
		this.globalBanner.style.height = "0px";
		setTimeout(() => {
			this.globalBanner.style.display = "none";
		}, bannerShowHideTiming);
		localStorage.setItem(`as-banner-${this.bannerId}`, "true");
	}
}

domReady(() => {
	const globalBanners = document.querySelectorAll<HTMLDivElement>(
		"[data-global-banner]",
	);
	for (const globalBanner of globalBanners) {
		new GlobalBanner(globalBanner);
	}
});
