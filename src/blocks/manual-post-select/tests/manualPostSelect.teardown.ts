import { test as tearDown } from "@tests/playwright-utils";
import { WordPressAdminInteraction } from "@tests/wordpress-helper";
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
