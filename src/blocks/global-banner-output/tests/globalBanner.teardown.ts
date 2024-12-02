import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as tearDown, expect } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";
import { contentPersistLocation } from "./index";

tearDown("Delete global banner content page and posts", async ({ page }) => {
	const adminHelper = new WordPressAdminInteraction(
		page,
		contentPersistLocation,
		CURRENT_WORDPRESS_VERSION,
	);
	await adminHelper.init();
	await adminHelper.cleanup();
	await page.goto("/wp/wp-admin/themes.php?page=global-banner");

	await page.getByRole("button", { name: "Update", exact: true }).click();
	await expect(page.getByText("Options Updated.")).toBeVisible();
});
