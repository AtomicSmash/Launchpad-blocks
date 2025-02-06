import { test as tearDown } from "@playwright/test";
import { doTearDown } from "./index";

tearDown("Delete navigation content page", async ({ page }) => {
	await doTearDown(page);
});
