import { test as tearDown } from "@playwright/test";
import { doTearDown } from "./index";

tearDown("Delete Media and text content page", async ({ page }) => {
	await doTearDown(page);
});
