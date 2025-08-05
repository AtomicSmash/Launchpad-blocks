import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test, type Page } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";

export const contentPersistLocation = `${process.cwd()}/tests/.tmp/gallery-carousel-page-info.json`;

const galleryCarouselTests = async function ({ page }) {
	// Go to gallery carousel testing page
	await page.goto(
		await WordPressAdminInteraction.getFrontEndURL(
			contentPersistLocation,
			"gallery-carousel-test-page",
		),
	);

	// Do tests here
} satisfies Parameters<typeof test>[2];

export const blockTestInfo = {
	blockName: "Gallery with lightbox",
	tests: galleryCarouselTests,
	contentPersistLocation,
	lighthouseTestsPage: "gallery-carousel-test-page",
	visualTestsPage: "gallery-carousel-test-page",
};

export async function doTearDown(page: Page) {
	const adminHelper = new WordPressAdminInteraction(
		page,
		contentPersistLocation,
		CURRENT_WORDPRESS_VERSION,
	);
	await adminHelper.init();
	await adminHelper.cleanup();
}
