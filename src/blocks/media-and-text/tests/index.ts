import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test, type Page } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";

export const contentPersistLocation = `${process.cwd()}/tests/.tmp/media-and-text-page-info.json`;

const mediaAndTextTests = async function ({ page }) {
	// Go to media-and-text testing page
	await page.goto(
		await WordPressAdminInteraction.getFrontEndURL(
			contentPersistLocation,
			"media-and-text-test-page",
		),
	);

	// Do tests here
} satisfies Parameters<typeof test>[2];

export const blockTestInfo = {
	blockName: "Breakout media and text",
	tests: mediaAndTextTests,
	contentPersistLocation,
	lighthouseTestsPage: "media-and-text-test-page",
	visualTestsPage: "media-and-text-test-page",
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
