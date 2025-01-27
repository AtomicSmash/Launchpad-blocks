import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test, expect, type Page } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";

export const contentPersistLocation = `${process.cwd()}/tests/.tmp/accordions-page-info.json`;

const accordionTests = async function ({ page }) {
	// Go to accordion testing page
	await page.goto(
		await WordPressAdminInteraction.getFrontEndURL(
			contentPersistLocation,
			"accordion-test-page",
		),
	);

	const accordionGroups = page.locator("css=[data-accordion-group]");

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

		await expect(thirdAccordionPanel).not.toBeVisible();

		// Check clicking accordions opens/closes them.

		await firstAccordionTrigger.click({
			noWaitAfter: true,
		});
		// Without these delays after clicks, this test will occasionally fail
		// This is likely due to click events happening too fast, or the animation
		// interfering with the test.
		await page.waitForTimeout(500);
		await expect(firstAccordionPanel).not.toBeVisible();

		await firstAccordionTrigger.click({
			noWaitAfter: true,
		});
		await page.waitForTimeout(500);
		await expect(firstAccordionPanel).toBeVisible();

		// Check multiple accordions is applying correctly.

		await secondAccordionTrigger.click({
			noWaitAfter: true,
		});
		await page.waitForTimeout(500);

		await expect(secondAccordionPanel).toBeVisible({
			visible: !shouldAllowMultiple,
		});
		await expect(firstAccordionPanel).toBeVisible({
			visible: shouldAllowMultiple,
		});
	}
} satisfies Parameters<typeof test>[2];

export const blockTestInfo = {
	blockName: "Accordion",
	tests: accordionTests,
	contentPersistLocation,
	lighthouseTestsPage: "accordion-test-page",
	visualTestsPage: "accordion-test-page",
};

export async function doTearDown(page: Page) {
	const adminHelper = new WordPressAdminInteraction(
		page,
		contentPersistLocation,
		CURRENT_WORDPRESS_VERSION,
	);
	await adminHelper.init();
	await adminHelper.cleanup();
}
