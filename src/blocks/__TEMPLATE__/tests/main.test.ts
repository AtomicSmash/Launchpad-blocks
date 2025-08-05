import {
	lighthouseTest,
	doLighthouseTest,
	slugify,
} from "@atomicsmash/test-utils";
import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test, expect } from "@playwright/test";
import { blockName, contentPersistLocation } from "./index";

test(`${blockName} functional tests`, async ({ page }) => {
	await page.goto(
		await WordPressAdminInteraction.getFrontEndURL(
			contentPersistLocation,
			`${slugify(blockName)}-test-page`,
		),
	);

	// Do tests here
	expect(1).toBe(1);
});

lighthouseTest(
	`${blockName} Lighthouse test`,
	{
		tag: ["@desktop", "@lighthouse"],
	},
	doLighthouseTest(
		{
			name: `Block: ${blockName}`,
			url: async () =>
				await WordPressAdminInteraction.getFrontEndURL(
					contentPersistLocation,
					`${slugify(blockName)}-test-page`,
				),
		},
		"desktop",
		true,
	),
);
lighthouseTest(
	`${blockName} Mobile Lighthouse test`,
	{
		tag: ["@mobile", "@lighthouse"],
	},
	doLighthouseTest(
		{
			name: `Block: ${blockName}`,
			url: async () =>
				await WordPressAdminInteraction.getFrontEndURL(
					contentPersistLocation,
					`${slugify(blockName)}-test-page`,
				),
		},
		"mobile",
		true,
	),
);
test(`${blockName} visual comparison tests`, async ({ page }, testInfo) => {
	// Go to accordion testing page
	await page.goto(
		await WordPressAdminInteraction.getFrontEndURL(
			contentPersistLocation,
			`${slugify(blockName)}-test-page`,
		),
	);

	await expect(page).toHaveScreenshot(
		[
			"blocks",
			slugify(blockName),
			`visual-comparison-tests-${slugify(testInfo.project.name)}.png`,
		],
		{
			stylePath: "tests/e2e/blocks-visual-testing-style-overrides.css",
			fullPage: true,
			maxDiffPixelRatio: 0.02,
		},
	);
});
