import type { TestFunctionType } from "@tests/playwright-utils";
// import { expect } from "@tests/playwright-utils";
import { WordPressAdminInteraction } from "@tests/wordpress-helper";

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
