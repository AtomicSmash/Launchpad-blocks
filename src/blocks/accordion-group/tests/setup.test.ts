import { existsSync } from "node:fs";
import { slugify } from "@atomicsmash/test-utils";
import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as setup, expect } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";
import {
	accordionGroupV1,
	accordionGroupV2,
	accordionGroupV3,
} from "./fixture";
import { contentPersistLocation, doTearDown, blockName } from "./index";

// eslint-disable-next-line playwright/expect-expect -- We don't expect anything in setup
setup(`${blockName} test setup`, async ({ page, baseURL }) => {
	setup.setTimeout(90000);
	// eslint-disable-next-line playwright/no-conditional-in-test -- This is fine because it can't be a test on its own.
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
			postIdentifier: `${slugify(blockName)}-v1-test-page`,
			title: `${blockName} v1 tests`,
			postType: "page",
		},
		{
			postIdentifier: `${slugify(blockName)}-v2-test-page`,
			title: `${blockName} v2 tests`,
			postType: "page",
		},
		{
			postIdentifier: `${slugify(blockName)}-v3-test-page`,
			title: `${blockName} v3 tests`,
			postType: "page",
		},
	]);
	await adminHelper.addContentByFixture(`${slugify(blockName)}-v1-test-page`, [
		accordionGroupV1.allowMultiple(baseURL ?? ""),
		accordionGroupV1.doesNotAllowMultiple(baseURL ?? ""),
	]);
	await adminHelper.addContentByFixture(`${slugify(blockName)}-v2-test-page`, [
		accordionGroupV2.allowMultiple,
		accordionGroupV2.doesNotAllowMultiple,
	]);
	await adminHelper.addContentByFixture(`${slugify(blockName)}-v3-test-page`, [
		accordionGroupV3.allowMultiple,
		accordionGroupV3.doesNotAllowMultiple,
	]);
});
