import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test, type Page } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";

export const contentPersistLocation = `${process.cwd()}/tests/.tmp/icons-page-info.json`;

const iconsTests = async function ({ page }) {
	// Go to icons testing page
	await page.goto(
		await WordPressAdminInteraction.getFrontEndURL(
			contentPersistLocation,
			"icons-test-page",
		),
	);

	// Do tests here
} satisfies Parameters<typeof test>[2];

export const blockTestInfo = {
	blockName: "Icon",
	tests: iconsTests,
	contentPersistLocation,
	lighthouseTestsPage: "icons-test-page",
	visualTestsPage: "icons-test-page",
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
