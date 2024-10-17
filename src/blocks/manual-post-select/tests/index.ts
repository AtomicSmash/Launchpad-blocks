import type { TestFunctionType } from "@tests/playwright-utils";
import { WordPressAdminInteraction } from "@tests/wordpress-helper";

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
