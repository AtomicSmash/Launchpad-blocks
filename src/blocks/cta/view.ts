/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */

import domReady from "@wordpress/dom-ready";
import { getPixelNumber } from "@launchpadBlocks/helpers";

domReady(() => {
	if (CSS.supports("reading-flow: grid-rows")) {
		console.log("reading flow is supported, js fallback not run.");
		return;
	}

	const ctaBlocksWithImageAfterContent =
		document.querySelectorAll<HTMLDivElement>(
			".wp-block-launchpad-blocks-cta.has-image-right",
		);

	for (const ctaBlock of ctaBlocksWithImageAfterContent) {
		let containerElement: HTMLElement | null = null;
		let parentElement = ctaBlock.parentElement;
		while (parentElement !== null) {
			if (
				window.getComputedStyle(parentElement).containerType === "inline-size"
			) {
				containerElement = parentElement;
				break;
			}
			parentElement = parentElement.parentElement;
		}

		if (containerElement) {
			let debounceResizeTimeout: NodeJS.Timeout | undefined = undefined;
			window.addEventListener("resize", () => {
				clearTimeout(debounceResizeTimeout);
				debounceResizeTimeout = setTimeout(() => {
					const containerWidth =
						containerElement.offsetWidth -
						getPixelNumber(
							window.getComputedStyle(containerElement).paddingInlineStart,
						) -
						getPixelNumber(
							window.getComputedStyle(containerElement).paddingInlineEnd,
						);

					const image = ctaBlock.querySelector(
						".wp-block-launchpad-blocks-cta-image",
					);
					const innerContent = ctaBlock.querySelector(
						".wp-block-launchpad-blocks-cta-inner-content",
					);
					if (!image || !innerContent) {
						throw new Error(
							"Failed to get children of CTA block for re-ordering.",
						);
					}

					// This width is used in CSS too, if changing here, change it there too.
					if (containerWidth <= 578 && image === ctaBlock.children[1]) {
						ctaBlock.replaceChildren(image, innerContent);
					} else if (containerWidth > 578 && image === ctaBlock.children[0]) {
						ctaBlock.replaceChildren(innerContent, image);
					}
				}, 100);
			});
		}
	}
});
