import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as tearDown } from "@tests/playwright-utils";
import { contentPersistLocation } from "./index";

tearDown("Delete accordion content page", async ({ page }) => {
	const adminHelper = new WordPressAdminInteraction(
		page,
		contentPersistLocation,
	);
	await adminHelper.init();
	await adminHelper.cleanup();
});
