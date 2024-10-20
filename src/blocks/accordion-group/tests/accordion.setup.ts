import { test as setup } from "@tests/playwright-utils";
import { WordPressAdminInteraction } from "@tests/wordpress-helper";
import { accordionGroup } from "./fixture";
import { contentPersistLocation } from "./index";

setup("Accordion test setup", async ({ authenticatedPage: page, baseURL }) => {
	setup.setTimeout(120000);
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
