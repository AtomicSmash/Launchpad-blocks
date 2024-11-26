import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as setup } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";
import { TEMPLATE } from "./fixture";
import { contentPersistLocation } from "./index";

setup("TEMPLATE test setup", async ({ page }) => {
	setup.setTimeout(60000);
	const adminHelper = new WordPressAdminInteraction(
		page,
		contentPersistLocation,
		CURRENT_WORDPRESS_VERSION,
	);
	await adminHelper.init();
	await adminHelper.createPostsViaBlocksEditor([
		{
			postIdentifier: "TEMPLATE-test-page",
			title: "TEMPLATE tests",
			postType: "page",
		},
	]);
	await adminHelper.addContentByFixture("TEMPLATE-test-page", [TEMPLATE]);
});
