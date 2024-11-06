import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as tearDown } from "@playwright/test";
import { contentPersistLocation } from "./index";

tearDown(
	"Delete Manual post select test content page and posts",
	async ({ page }) => {
		const adminHelper = new WordPressAdminInteraction(
			page,
			contentPersistLocation,
		);
		await adminHelper.init();
		await adminHelper.cleanup();
	},
);
