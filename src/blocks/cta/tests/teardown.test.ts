import { test as tearDown } from "@playwright/test";
import { doTearDown, blockName } from "./index";

// eslint-disable-next-line playwright/expect-expect -- We don't expect anything in tearDown
tearDown(`Delete ${blockName} content page`, async ({ page }) => {
	await doTearDown(page);
});
