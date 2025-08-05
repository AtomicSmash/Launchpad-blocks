import { existsSync } from "node:fs";
import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as setup } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";
import { MEDIA_AND_TEXT } from "./fixture";
import { contentPersistLocation, doTearDown } from "./index";

setup("Media and text test setup", async ({ page }) => {
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
			postIdentifier: "media-and-text-test-page",
			title: "Media and text tests",
			postType: "page",
		},
	]);
	await adminHelper.addContentByFixture(
		"media-and-text-test-page",
		MEDIA_AND_TEXT,
	);
});
