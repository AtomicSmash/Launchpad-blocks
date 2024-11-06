import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as tearDown } from "@playwright/test";
import { contentPersistLocation } from "./index";

tearDown("Delete global banner content page and posts", async ({ page }) => {
	const adminHelper = new WordPressAdminInteraction(
		page,
		contentPersistLocation,
	);
	await adminHelper.init();
	await adminHelper.cleanup();
	await page.goto("/wp/wp-admin/themes.php?page=global-banner");

	const bannersList = page.locator(
		".select2-selection__rendered .select2-selection__choice",
	);

	const itemCount = await bannersList.count();

	for (let i = 0; i < itemCount; i++) {
		const removeButton = bannersList
			.first()
			.locator(".select2-selection__choice__remove");
		await removeButton.click();
	}

	await page.getByRole("button", { name: "Update", exact: true }).click();
});
