import {
	lighthouseTest,
	doLighthouseTest,
	slugify,
} from "@atomicsmash/test-utils";
import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test, expect } from "@playwright/test";
import { blockName, contentPersistLocation } from "./index";

test(`${blockName} functional tests`, async ({ page }) => {
	// Do tests here
	for (const version of ["v1", "v2", "v3"]) {
		// Go to accordion v1 testing page
		await page.goto(
			await WordPressAdminInteraction.getFrontEndURL(
				contentPersistLocation,
				`${slugify(blockName)}-${version}-test-page`,
			),
		);

		const accordionGroups = page.locator(
			"css=[data-launchpad-accordion-group]",
		);

		await expect(accordionGroups).toHaveCount(2);

		for (const accordionGroup of await accordionGroups.all()) {
			const shouldAllowMultiple =
				(await accordionGroup.getAttribute("data-is-multiple")) === "true";

			const firstAccordionTrigger = accordionGroup.getByRole("button", {
				name: "Accordion that is open by default",
				exact: true,
			});

			const firstAccordionPanel = accordionGroup.getByRole("region", {
				name: "Accordion that is open by default",
				exact: true,
			});

			const secondAccordionTrigger = accordionGroup.getByRole("button", {
				name: "Accordion that is open by default if multiple accordions allowed",
				exact: true,
			});

			const secondAccordionPanel = accordionGroup.getByRole("region", {
				name: "Accordion that is open by default if multiple accordions allowed",
				exact: true,
			});

			const thirdAccordionPanel = accordionGroup.getByRole("region", {
				name: "Accordion that is closed by default",
				exact: true,
			});

			// Check initial state
			await expect(firstAccordionPanel).toBeVisible();

			await expect(secondAccordionPanel).toBeVisible({
				visible: shouldAllowMultiple,
			});

			await expect(thirdAccordionPanel).toBeHidden();

			// Check clicking accordions opens/closes them.

			await firstAccordionTrigger.click({
				noWaitAfter: true,
			});
			// Without these delays after clicks, this test will occasionally fail
			// This is likely due to click events happening too fast, or the animation
			// interfering with the test.
			// eslint-disable-next-line playwright/no-wait-for-timeout -- see above
			await page.waitForTimeout(500);
			await expect(firstAccordionPanel).toBeHidden();

			await firstAccordionTrigger.click({
				noWaitAfter: true,
			});
			// eslint-disable-next-line playwright/no-wait-for-timeout -- see above
			await page.waitForTimeout(500);
			await expect(firstAccordionPanel).toBeVisible();

			// Check multiple accordions is applying correctly.

			await secondAccordionTrigger.click({
				noWaitAfter: true,
			});
			// eslint-disable-next-line playwright/no-wait-for-timeout -- see above
			await page.waitForTimeout(500);

			await expect(secondAccordionPanel).toBeVisible({
				visible: !shouldAllowMultiple,
			});
			await expect(firstAccordionPanel).toBeVisible({
				visible: shouldAllowMultiple,
			});
		}
	}
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
					`${slugify(blockName)}-v3-test-page`,
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
					`${slugify(blockName)}-v3-test-page`,
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
			`${slugify(blockName)}-v3-test-page`,
		),
	);

	await expect(page).toHaveScreenshot(
		[
			"blocks",
			blockName,
			`visual-comparison-tests-${slugify(testInfo.project.name)}.png`,
		],
		{
			stylePath: "tests/e2e/blocks-visual-testing-style-overrides.css",
			fullPage: true,
			maxDiffPixelRatio: 0.02,
		},
	);
});
