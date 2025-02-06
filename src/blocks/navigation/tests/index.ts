import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test, type Page } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";

export const contentPersistLocation = `${process.cwd()}/tests/.tmp/navigation-page-info.json`;

const navigationTests = async function ({ page }) {
	// Go to navigation testing page
	await page.goto(
		await WordPressAdminInteraction.getFrontEndURL(
			contentPersistLocation,
			"navigation-test-page",
		),
	);

	// Do tests here
} satisfies Parameters<typeof test>[2];

export const blockTestInfo = {
	blockName: "navigation",
	tests: navigationTests,
	contentPersistLocation,
	lighthouseTestsPage: "navigation-test-page",
	visualTestsPage: "navigation-test-page",
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
