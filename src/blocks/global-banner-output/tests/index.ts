import type { Page } from "@playwright/test";
import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { expect } from "@playwright/test";
import {
	CURRENT_WORDPRESS_VERSION,
	type TestFunctionType,
} from "@tests/playwright-utils";

export const contentPersistLocation = `${process.cwd()}/tests/.tmp/global-banner-page-info.json`;

const globalBannerTests = async function ({ page }) {
	// Go to global banner testing page
	await page.goto(
		await WordPressAdminInteraction.getFrontEndURL(
			contentPersistLocation,
			"test-page",
		),
	);
} satisfies TestFunctionType;

export const blockTestInfo = {
	blockName: "Global Banner",
	tests: globalBannerTests,
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
	await page.goto("/wp/wp-admin/themes.php?page=global-banner");

	await page.getByRole("button", { name: "Update", exact: true }).click();
	await expect(page.getByText("Options Updated.")).toBeVisible();
}
