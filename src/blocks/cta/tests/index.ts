import type { Page, PlaywrightTestConfig } from "@playwright/test";
import {
	generateProjectsForAllBrowsers,
	slugify,
} from "@atomicsmash/test-utils";
import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { devices } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";

export const contentPersistLocation = `${process.cwd()}/tests/.tmp/cta-blocks-page-info.json`;
export const blockName = "CTA";
export const projects = [
	{
		name: `${blockName} setup`,
		testDir: import.meta.dirname,
		testMatch: /setup\.test\.ts/,
		teardown: `${blockName} teardown`,
		use: {
			...devices["Desktop Chrome"],
			// Use prepared auth state.
			storageState: "tests/.tmp/admin.auth.json",
		},
		dependencies: ["Admin login"],
	},
	{
		name: `${blockName} teardown`,
		testDir: import.meta.dirname,
		testMatch: /teardown\.test\.ts/,
		use: {
			...devices["Desktop Chrome"],
			// Use prepared auth state.
			storageState: "tests/.tmp/admin.auth.json",
		},
	},
	...generateProjectsForAllBrowsers({
		name: `${slugify(blockName)}_tests`,
		testDir: import.meta.dirname,
		testMatch: /main\.test\.ts/,
		dependencies: [`${blockName} setup`],
	}),
] satisfies PlaywrightTestConfig["projects"];

export async function doTearDown(page: Page) {
	const adminHelper = new WordPressAdminInteraction(
		page,
		contentPersistLocation,
		CURRENT_WORDPRESS_VERSION,
	);
	await adminHelper.init();
	await adminHelper.cleanup();
}
