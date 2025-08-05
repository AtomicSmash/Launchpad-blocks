import { test as tearDown } from "@playwright/test";
import { doTearDown } from "./index";

tearDown("Delete section content page", async ({ page }) => {
	await doTearDown(page);
});
