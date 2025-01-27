import { existsSync } from "node:fs";
import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as setup } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";
import { accordionGroup } from "./fixture";
import { contentPersistLocation, doTearDown } from "./index";

setup("Accordion test setup", async ({ page, baseURL }) => {
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
			postIdentifier: "accordion-test-page",
			title: "Accordion tests",
			postType: "page",
		},
	]);
	await adminHelper.addContentByFixture("accordion-test-page", [
		accordionGroup.allowMultiple(baseURL ?? ""),
		accordionGroup.doesNotAllowMultiple(baseURL ?? ""),
	]);
});
