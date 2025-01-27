import type { Page } from "@playwright/test";
import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import {
	CURRENT_WORDPRESS_VERSION,
	type TestFunctionType,
} from "@tests/playwright-utils";

export const contentPersistLocation = `${process.cwd()}/tests/.tmp/manual-post-select-info.json`;

const manualPostSelectTests = async function ({ page }) {
	// Go to manual post select testing page
	await page.goto(
		await WordPressAdminInteraction.getFrontEndURL(
			contentPersistLocation,
			"test-page",
		),
	);
} satisfies TestFunctionType;

export const blockTestInfo = {
	blockName: "Manual post select",
	tests: manualPostSelectTests,
	contentPersistLocation,
	lighthouseTestsPage: "test-page",
	visualTestsPage: "test-page",
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
