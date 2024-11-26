import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as setup } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";
import { globalBanner, globalBannerOutput } from "./fixture";
import { contentPersistLocation } from "./index";

setup("Global banner test setup", async ({ page }) => {
	setup.setTimeout(60000);
	const adminHelper = new WordPressAdminInteraction(
		page,
		contentPersistLocation,
		CURRENT_WORDPRESS_VERSION,
	);
	await adminHelper.init();
	await adminHelper.createPostsViaBlocksEditor([
		{
			postIdentifier: "test-page",
			title: "Global banner tests",
			postType: "page",
		},
		{
			postIdentifier: "banner-1",
			title: "Global banner 1",
			postType: "global-banner",
			options: {
				hasFrontEnd: false,
				makeTitleUnique: false,
			},
		},
		{
			postIdentifier: "banner-2",
			title: "Global banner 2",
			postType: "global-banner",
			options: {
				hasFrontEnd: false,
				makeTitleUnique: false,
			},
		},
		{
			postIdentifier: "banner-3",
			title: "Global banner 3",
			postType: "global-banner",
			options: {
				hasFrontEnd: false,
				makeTitleUnique: false,
			},
		},
	]);
	await adminHelper.addContentByFixture(
		"banner-1",
		[globalBanner.dismissable],
		{
			replace: true,
		},
	);
	await adminHelper.addContentByFixture(
		"banner-2",
		[globalBanner.nonDismissable],
		{
			replace: true,
		},
	);
	await adminHelper.addContentByFixture("banner-3", [globalBanner.withButton], {
		replace: true,
	});
	await adminHelper.addContentByFixture("test-page", [globalBannerOutput]);

	await page.goto("/wp/wp-admin/themes.php?page=global-banner");

	// This will only appear if no global banners have already been selected
	const inputField = page.getByPlaceholder("Select");

	await inputField.click();

	// Wait for the list of actual results to appear (li elements without the "loading-results" class)
	await page.waitForSelector(
		".select2-results__options li:not(.loading-results)",
		{
			state: "visible", // Wait for these elements to be visible
		},
	);

	const resultsList = page.locator(".select2-results__options");

	const itemCount = await resultsList.count();

	if (itemCount < 1) {
		throw new Error("Did not find any global banners to add");
	}

	// Click the first item to select it
	await resultsList.getByText("GENERATED Global banner 1").click();

	// When a selection has been made, the input changes to a span with this class
	const selectionBox = page.locator(".select2-selection__rendered");

	await selectionBox.click();
	await resultsList.getByText("GENERATED Global banner 2").click();
	await selectionBox.click();
	await resultsList.getByText("GENERATED Global banner 3").click();

	await page.getByRole("button", { name: "Update", exact: true }).click();
});
