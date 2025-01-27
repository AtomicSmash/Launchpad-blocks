import { test as tearDown } from "@playwright/test";
import { doTearDown } from "./index";

tearDown(
	"Delete Manual post select test content page and posts",
	async ({ page }) => {
		await doTearDown(page);
	},
);
