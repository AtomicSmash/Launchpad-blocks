/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */

import domReady from "@wordpress/dom-ready";

function scrollToPromise<T extends HTMLElement>(
	element: T,
	options: ScrollToOptions & { timeout?: number },
) {
	const { timeout, ...scrollByOptions } = { timeout: 10000, ...options };
	return new Promise<void>((resolve, reject) => {
		const listenerCallback = () => {
			element.removeEventListener("scrollend", listenerCallback);
			resolve();
		};
		element.scrollTo(scrollByOptions);
		element.addEventListener("scrollend", listenerCallback);
		setTimeout(() => {
			element.removeEventListener("scrollend", listenerCallback);
			reject(new Error("Scroll to event timed out."));
		}, timeout);
	});
}

class ScrollingLogoBanner {
	private userPrefersReducedMotion = true;
	private banner: HTMLDivElement;
	private imagesContainer: HTMLDivElement;
	private initiallyVisibleItems: Element[] = [];
	private scrollbarWidth: number;
	private initiallyVisibleImagesObserver: IntersectionObserver | null = null;
	private debounceResizeTimeout: undefined | ReturnType<typeof setTimeout> =
		undefined;
	private currentScrollPosition = 0;
	private scrollOffset = 0;
	private scrollInterval: undefined | ReturnType<typeof setInterval> =
		undefined;

	constructor(banner: HTMLDivElement) {
		this._setUserPrefersReducedMotion(this._getUserPrefersReducedMotion());
		this._attachPrefersReducedMotionListener();
		this.banner = banner;
		this.imagesContainer = this.banner.querySelector<HTMLDivElement>(
			":scope > div.images",
		)!;
		this.scrollbarWidth = this.banner.offsetHeight - this.banner.clientHeight;

		if (document.readyState === "complete") {
			this.initialiseBanner().catch(() => {
				throw new Error("Failed to initialise banner.");
			});
		} else {
			document.addEventListener("readystatechange", () => {
				if (document.readyState === "complete") {
					this.initialiseBanner().catch(() => {
						throw new Error("Failed to initialise banner.");
					});
				}
			});
		}
		window.addEventListener("resize", () => {
			clearTimeout(this.debounceResizeTimeout);
			this.debounceResizeTimeout = setTimeout(() => {
				this.reinitialiseBanner();
			}, 100);
		});
	}
	_attachPrefersReducedMotionListener() {
		window
			.matchMedia("(prefers-reduced-motion: reduce)")
			.addEventListener("change", () => {
				this._setUserPrefersReducedMotion(this._getUserPrefersReducedMotion());
			});
	}
	_getUserPrefersReducedMotion() {
		return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	}
	_setUserPrefersReducedMotion(userPrefersReducedMotion: boolean) {
		this.userPrefersReducedMotion = userPrefersReducedMotion;
	}

	async initialiseBanner() {
		const scrollbarWidth =
			this.imagesContainer.offsetHeight - this.imagesContainer.clientHeight;
		this.imagesContainer.style.marginBlockEnd = `-${scrollbarWidth}px`;
		await this.getInitiallyVisibleImages().then(() => {
			this.imagesContainer.append(...this.initiallyVisibleItems);
			this.scrollOffset = this.imagesContainer.offsetLeft;
			this.scrollInterval = setInterval(() => {
				const scrollToElement =
					this.imagesContainer.querySelectorAll<HTMLDivElement>(
						".wp-block-image",
					)[this.currentScrollPosition + 1];
				if (!scrollToElement) {
					clearInterval(this.scrollInterval);
					throw new Error("Expected element, but received undefined.");
				}
				scrollToPromise(this.imagesContainer, {
					left: scrollToElement.offsetLeft - this.scrollOffset,
					behavior: this.userPrefersReducedMotion ? "instant" : "smooth",
					timeout: 2000,
				})
					.then(() => {
						++this.currentScrollPosition;
						if (
							this.imagesContainer
								.querySelectorAll<HTMLDivElement>(".wp-block-image")
								[
									this.currentScrollPosition
								]!.classList.contains("overflow-item")
						) {
							this.imagesContainer.scrollTo({ left: 0, behavior: "instant" });
							this.currentScrollPosition = 0;
						}
					})
					.catch(() => {
						clearInterval(this.scrollInterval);
						throw new Error("Scroll by timed out.");
					});
			}, 3000);
		});
	}

	cleanupBanner() {
		this.resetGallery();
		this.scrollOffset = 0;
		this.currentScrollPosition = 0;
		this.initiallyVisibleImagesObserver?.disconnect();
		this.initiallyVisibleImagesObserver = null;
		clearInterval(this.scrollInterval);
	}

	reinitialiseBanner() {
		this.cleanupBanner();
		this.initialiseBanner().catch(() => {
			throw new Error("Failed to re-initialise banner.");
		});
	}

	async getInitiallyVisibleImages() {
		return new Promise<Element[]>((resolve) => {
			const imageBlocks =
				this.imagesContainer.querySelectorAll(".wp-block-image");
			const initiallyVisibleItems: Element[] = [];
			if (!this.initiallyVisibleImagesObserver) {
				this.initiallyVisibleImagesObserver = new IntersectionObserver(
					(entries, _observer) => {
						if (imageBlocks.length !== entries.length) {
							return;
						}
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								initiallyVisibleItems.push(entry.target);
							}
						});
						// Disconnect after getting the items.
						this.initiallyVisibleImagesObserver!.disconnect();
						resolve(initiallyVisibleItems);
					},
					{
						root: this.imagesContainer,
					},
				);
			}

			for (const imageBlock of imageBlocks) {
				this.initiallyVisibleImagesObserver.observe(imageBlock);
			}
		}).then((initiallyVisibleItems) => {
			this.initiallyVisibleItems = initiallyVisibleItems.map((imageBlock) => {
				imageBlock = imageBlock.cloneNode(true) as typeof imageBlock;
				imageBlock.classList.add("overflow-item");
				return imageBlock;
			});
		});
	}

	resetGallery() {
		this.initiallyVisibleItems = [];
		this.imagesContainer.replaceChildren(
			...this.imagesContainer.querySelectorAll(
				".wp-block-image:not(.overflow-item)",
			),
		);
	}
}

domReady(() => {
	const scrollingBanners = document.querySelectorAll<HTMLDivElement>(
		'[data-launchpad-logo-banner][data-is-scrolling="true"]',
	);
	for (const banner of scrollingBanners) {
		new ScrollingLogoBanner(banner);
	}
});
