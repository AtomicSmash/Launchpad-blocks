import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test } from "@playwright/test";

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
