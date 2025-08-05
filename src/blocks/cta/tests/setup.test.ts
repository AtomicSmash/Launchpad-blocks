import { existsSync } from "node:fs";
import { slugify } from "@atomicsmash/test-utils";
import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as setup } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";
import { ctaBlocks } from "./fixture";
import { contentPersistLocation, doTearDown, blockName } from "./index";

// eslint-disable-next-line playwright/expect-expect -- We don't expect anything in setup
setup(`${blockName} test setup`, async ({ page }) => {
	setup.setTimeout(60000);
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
			postIdentifier: `${slugify(blockName)}-test-page`,
			title: `${blockName} tests`,
			postType: "page",
		},
	]);
	await adminHelper.addContentByFixture(
		`${slugify(blockName)}-test-page`,
		Object.values(ctaBlocks),
	);
});
