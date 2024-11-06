import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as setup } from "@playwright/test";
import { accordionGroup } from "./fixture";
import { contentPersistLocation } from "./index";

setup("Accordion test setup", async ({ page, baseURL }) => {
	setup.setTimeout(60000);
	const adminHelper = new WordPressAdminInteraction(
		page,
		contentPersistLocation,
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
