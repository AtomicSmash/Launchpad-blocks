import { test as tearDown } from "@playwright/test";
import { doTearDown, blockName } from "./index";

// eslint-disable-next-line playwright/expect-expect -- // eslint-disable-next-line playwright/no-conditional-in-test -- We don't expect anything in teardown
tearDown(`Delete ${blockName} content page`, async ({ page }) => {
	tearDown.setTimeout(45000);
	await doTearDown(page);
});
