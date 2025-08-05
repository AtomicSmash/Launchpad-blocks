import { existsSync } from "node:fs";
import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as setup } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";
import { sections } from "./fixture";
import { contentPersistLocation, doTearDown } from "./index";

setup("section test setup", async ({ page }) => {
	setup.setTimeout(60000);
	if (existsSync(contentPersistLocation)) {
		await doTearDown(page);
	}
	const adminHelper = new WordPressAdminInteraction(
		page,
		contentPersistLocation,
		CURRENT_WORDPRESS_VERSION,
	);
	await adminHelper.init();
	await adminHelper.createPostsViaBlocksEditor([
		{
			postIdentifier: "section-test-page",
			title: "Section tests",
			postType: "page",
		},
	]);
	await adminHelper.addContentByFixture("section-test-page", [sections]);
});
