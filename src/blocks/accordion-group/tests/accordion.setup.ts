import { existsSync } from "node:fs";
import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as setup } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";
import {
	accordionGroupV1,
	accordionGroupV2,
	accordionGroupV3,
} from "./fixture";
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
			postIdentifier: "accordion-v1-test-page",
			title: "Accordion v1 tests",
			postType: "page",
		},
		{
			postIdentifier: "accordion-v2-test-page",
			title: "Accordion v2 tests",
			postType: "page",
		},
		{
			postIdentifier: "accordion-v3-test-page",
			title: "Accordion v3 tests",
			postType: "page",
		},
	]);
	await adminHelper.addContentByFixture("accordion-v1-test-page", [
		accordionGroupV1.allowMultiple(baseURL ?? ""),
		accordionGroupV1.doesNotAllowMultiple(baseURL ?? ""),
	]);
	await adminHelper.addContentByFixture("accordion-v2-test-page", [
		accordionGroupV2.allowMultiple,
		accordionGroupV2.doesNotAllowMultiple,
	]);
	await adminHelper.addContentByFixture("accordion-v3-test-page", [
		accordionGroupV3.allowMultiple,
		accordionGroupV3.doesNotAllowMultiple,
	]);
});
