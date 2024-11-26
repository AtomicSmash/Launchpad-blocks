/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */
import domReady from "@wordpress/dom-ready";

/**
 * JS Enhancement for the tabs block.
 *
 * The block is intended to work without any JS, but this improves accessibility and functionality when loaded.
 */
class Tabs {
	tabsGroupId: string;
	tabsGroup: HTMLDivElement;
	tabsList: HTMLDivElement;
	tabTriggers: HTMLAnchorElement[];
	tabPanels: HTMLElement[];

	constructor(tabsGroup: HTMLDivElement) {
		this.tabsGroup = tabsGroup;
		const tabsGroupId = this.tabsGroup.dataset.tabsGroupId;
		if (!tabsGroupId) {
			throw new Error("Unable to find the tabs group id for the tabs group.");
		}
		this.tabsGroupId = tabsGroupId;
		const tabsList = this.tabsGroup.querySelector<HTMLDivElement>(
			'div[role="tablist"]',
		);
		if (!tabsList) {
			throw new Error("Unable to find the tabs list element in a tabs group.");
		}
		this.tabsList = tabsList;
		const tabTriggers =
			this.tabsList.querySelectorAll<HTMLAnchorElement>('a[role="tab"]');
		if (!tabTriggers) {
			throw new Error(
				"Unable to find the tab trigger elements in a tabs group.",
			);
		}
		this.tabTriggers = Array.from(tabTriggers);
		const tabPanels = this.tabsGroup.querySelectorAll<HTMLElement>(
			'section[role="tabpanel"]',
		);
		if (!tabPanels) {
			throw new Error("Unable to find the tab panel elements in a tabs group.");
		}
		this.tabPanels = Array.from(tabPanels);

		this.initialiseTabGroup();
	}

	initialiseTabGroup() {
		this.improveKeyboardNavigationOfTabs();
		this.preventPageReloadOnTabSelection();
	}

	improveKeyboardNavigationOfTabs() {
		this.tabTriggers.forEach((tabTrigger, tabIndex) => {
			if (tabTrigger.ariaSelected?.toLowerCase() !== "true") {
				tabTrigger.tabIndex = -1;
			}

			tabTrigger.addEventListener("keydown", (event) => {
				switch (event.key) {
					case "ArrowLeft": {
						if (tabIndex === 0) {
							this.tabTriggers.at(-1)?.focus();
						} else {
							this.tabTriggers.at(tabIndex - 1)?.focus();
						}
						break;
					}
					case "ArrowRight": {
						if (tabIndex === this.tabTriggers.length - 1) {
							this.tabTriggers.at(0)?.focus();
						} else {
							this.tabTriggers.at(tabIndex + 1)?.focus();
						}
						break;
					}
					case " ": {
						event.preventDefault();
						this.clickTab(tabTrigger);
					}
				}
			});
		});
	}

	clickTab(tabTrigger: HTMLAnchorElement) {
		const clickedTabPanelId = tabTrigger.getAttribute("aria-controls");
		if (!clickedTabPanelId) {
			throw new Error("Can't find the ID of the panel to switch to.");
		}
		this.swapActiveTab(clickedTabPanelId);
		this.swapActivePanel(clickedTabPanelId);
		this.updateUrlBar(clickedTabPanelId);
	}

	preventPageReloadOnTabSelection() {
		this.tabTriggers.forEach((tabTrigger) => {
			tabTrigger.addEventListener("click", (event) => {
				event.preventDefault();
				this.clickTab(tabTrigger);
			});
		});
	}

	swapActiveTab(panelId: string) {
		const currentlyActiveTab = this.tabTriggers.find(
			(tabTrigger) => tabTrigger.ariaSelected === "true",
		);

		const toBeActiveTab = this.tabTriggers.find(
			(tabTrigger) => tabTrigger.getAttribute("aria-controls") === panelId,
		);
		if (!toBeActiveTab) {
			throw new Error("Failed to find the tab to be activated.");
		}
		if (currentlyActiveTab) {
			currentlyActiveTab.ariaSelected = "false";
			currentlyActiveTab.tabIndex = -1;
		}

		toBeActiveTab.ariaSelected = "true";
		toBeActiveTab.removeAttribute("tabindex");
	}

	swapActivePanel(panelId: string) {
		const currentlyActivePanel = this.tabPanels.find((tabPanel) =>
			tabPanel.classList.contains("is-selected"),
		);
		const toBeActivePanel = this.tabPanels.find(
			(tabPanel) => tabPanel.id === panelId,
		);
		if (!toBeActivePanel) {
			throw new Error("Failed to find the panel to be activated.");
		}
		if (currentlyActivePanel) {
			currentlyActivePanel.classList.remove("is-selected");
		}
		toBeActivePanel.classList.add("is-selected");
	}

	updateUrlBar(panelId: string) {
		const currentUrl = new URL(window.location.href);
		currentUrl.searchParams.set(`tabs_${this.tabsGroupId}`, panelId);
		window.history.replaceState(
			window.history.state,
			"",
			`${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`,
		);
	}
}

domReady(() => {
	const tabsGroups =
		document.querySelectorAll<HTMLDivElement>("[data-tabs-group]");
	for (const tabsGroup of tabsGroups) {
		new Tabs(tabsGroup);
	}
});
