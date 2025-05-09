import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test, type Page } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";

export const contentPersistLocation = `${process.cwd()}/tests/.tmp/TEMPLATE-page-info.json`;

const templateTests = async function ({ page }) {
	// Go to TEMPLATE testing page
	await page.goto(
		await WordPressAdminInteraction.getFrontEndURL(
			contentPersistLocation,
			"TEMPLATE-test-page",
		),
	);

	// Do tests here
} satisfies Parameters<typeof test>[2];

export const blockTestInfo = {
	blockName: "TEMPLATE",
	tests: templateTests,
	contentPersistLocation,
	lighthouseTestsPage: "TEMPLATE-test-page",
	visualTestsPage: "TEMPLATE-test-page",
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
