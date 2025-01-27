import { test as tearDown } from "@playwright/test";
import { doTearDown } from "./index";

tearDown("Delete global banner content page and posts", async ({ page }) => {
	await doTearDown(page);
});
