import { getParentElement, getTimeInMilliseconds } from "@blocks/helpers";
import domReady from "@wordpress/dom-ready";

/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */
class BannerZones {
	bannerZones: HTMLElement[];
	fallbackBannerZone: HTMLElement | undefined;

	constructor() {
		this.bannerZones = [
			...document.querySelectorAll<HTMLElement>("[data-banner-zone]"),
		];
		const fallbackBannerZones = this.bannerZones.filter(
			(zone) => zone.dataset.isFallback === "true",
		);
		if (fallbackBannerZones.length === 0) {
			console.error(
				"No fallback banner zone found. If your banner doesn't have a parent zone, it will not be displayed.",
			);
		} else {
			if (fallbackBannerZones.length > 1) {
				console.error(
					"Found more than one fallback banner zone. Using the first one found.",
				);
			}
			this.fallbackBannerZone = fallbackBannerZones[0] as HTMLElement;
		}
	}
}

class InfoBanner {
	infoBanner: HTMLDivElement;
	bannerZones: HTMLElement[];
	fallbackBannerZone: HTMLElement | undefined;
	isDismissible: boolean;
	bannerId: string | undefined;

	constructor(infoBanner: HTMLDivElement, bannerZonesClass: BannerZones) {
		this.infoBanner = infoBanner;
		this.bannerZones = bannerZonesClass.bannerZones;
		this.fallbackBannerZone = bannerZonesClass.fallbackBannerZone;
		this.isDismissible = this.infoBanner.dataset.isDismissible === "true";
		this.bannerId = this.infoBanner.dataset.bannerId;

		if (!this.bannerId) {
			console.error("Banner has no unique id, so it's been skipped.");
			return;
		}

		if (this.isDismissible) {
			const dismissButton = this.infoBanner.querySelector<HTMLButtonElement>(
				"button.dismiss-button",
			);
			if (!dismissButton) {
				console.error(
					"Failed to find dismiss button for a dismissible banner.",
				);
			} else {
				dismissButton.addEventListener("click", (event) => {
					event.preventDefault();
					this.dismissBanner();
				});
			}
		}
		this.initialiseBanner();
	}

	initialiseBanner() {
		const nearestParentOfBannerZone = getParentElement(
			this.infoBanner,
			(node) =>
				[...node.children].some(
					(element) =>
						element instanceof HTMLElement &&
						this.bannerZones.includes(element),
				),
		);
		const nearestBannerZone =
			([...(nearestParentOfBannerZone?.children ?? [])].find(
				(element) =>
					element instanceof HTMLElement && this.bannerZones.includes(element),
			) as HTMLElement | undefined) ?? this.fallbackBannerZone;
		if (!nearestBannerZone) {
			return;
		}
		nearestBannerZone.append(this.infoBanner);
		if (!localStorage.getItem(`as-banner-${this.bannerId}`)) {
			this.infoBanner.style.display = "";
			const scrollHeight = this.infoBanner.scrollHeight;
			this.infoBanner.style.overflow = "hidden";
			this.infoBanner.style.height = `${scrollHeight}px`;
		}
	}

	dismissBanner() {
		const bannerShowHideTiming = getTimeInMilliseconds(
			getComputedStyle(this.infoBanner).getPropertyValue(
				"--cloudcall-banner-show-hide-timing",
			),
		);
		this.infoBanner.style.height = "0px";
		setTimeout(() => {
			this.infoBanner.style.display = "none";
		}, bannerShowHideTiming);
		// localStorage.setItem(`as-banner-${this.bannerId}`, "true");
	}
}

domReady(() => {
	const bannerZones = new BannerZones();
	const infoBanners =
		document.querySelectorAll<HTMLDivElement>("[data-info-banner]");
	for (const infoBanner of infoBanners) {
		new InfoBanner(infoBanner, bannerZones);
	}
});
