/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */
import {
	autoUpdate,
	computePosition,
	shift,
	limitShift,
	offset,
} from "@floating-ui/dom";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import {
	getPixelNumber,
	getTimeInMilliseconds,
} from "@launchpadBlocks/helpers";
import { Icon } from "@launchpadBlocks/svgs";

class Navigation {
	private navigation: HTMLElementTagNameMap["nav"];
	private subMenus: NavigationSubMenu[] = [];
	private navigationParent: HTMLElement;
	private trigger: HTMLButtonElement;
	public navigationContent: HTMLDivElement;
	public overlay: HTMLDivElement;
	private closeTimeout: NodeJS.Timeout | null = null;
	private fullMenuWidth = 0;
	private debounceResizeTimeout: undefined | ReturnType<typeof setTimeout> =
		undefined;
	public hasOpenSubMenu = false;
	public navListHeight = 0;

	constructor() {
		const navigation = document.querySelector<HTMLDivElement>(
			"[data-launchpad-navigation]",
		);
		if (!navigation) {
			throw new Error("Unable to find the navigation element.");
		}
		this.navigation = navigation;
		if (
			this.navigation.parentElement!.classList.contains(
				"wp-block-template-part",
			)
		) {
			this.navigation.parentElement!.replaceWith(this.navigation);
		}
		const navigationParent = this.navigation.parentElement;
		if (!navigationParent) {
			throw new Error(
				"Unable to find the element which contains the navigation block.",
			);
		}
		this.navigationParent = navigationParent;
		const trigger = this.navigation.querySelector<HTMLButtonElement>(
			`button[data-navigation-content-toggle]`,
		);
		if (!trigger) {
			throw new Error("Unable to determine the menu's trigger button.");
		}
		this.trigger = trigger;
		const navigationContent = this.navigation.querySelector<HTMLDivElement>(
			`[data-navigation-content]`,
		);
		if (!navigationContent) {
			throw new Error("Unable to determine the navigations content element.");
		}
		this.navigationContent = navigationContent;

		if (!document.querySelector("div.site-overlay")) {
			const overlay = document.createElement("div");
			overlay.classList.add("site-overlay");
			overlay.hidden = true;
			document.body.insertBefore(overlay, document.body.firstChild);
		}

		this.overlay = document.querySelector("div.site-overlay") as HTMLDivElement; // Will definitely exist because we just created it if it didn't.

		if (document.readyState === "complete") {
			this.initialiseMenu();
		} else {
			document.addEventListener("readystatechange", () => {
				if (document.readyState === "complete") {
					this.initialiseMenu();
				}
			});
		}
		window.addEventListener("resize", () => {
			clearTimeout(this.debounceResizeTimeout);
			this.debounceResizeTimeout = setTimeout(() => {
				this.closeAllSubMenus();
				this.recalculateIfContentIsCollapsed();
			}, 100);
		});
		this.trigger.addEventListener("click", () => {
			this.toggleCollapsedMenu();
		});
		this.overlay.addEventListener("click", () => {
			if (!this.isMenuCollapsed()) {
				this.closeAllSubMenus();
			}
		});
	}
	private initialiseMenu() {
		this.fullMenuWidth = this.navigationContent.scrollWidth;
		this.recalculateIfContentIsCollapsed();
		const subMenus = this.navigation.querySelectorAll<HTMLLIElement>(
			"li[data-navigation-sub-menu]",
		);
		for (const subMenu of subMenus) {
			this.subMenus.push(new NavigationSubMenu(subMenu, this));
		}
		this.navigation.classList.remove("menu-js-loading");
	}
	public isMenuCollapsed() {
		return this.navigation.dataset.isMenuCollapsed === "collapsed";
	}
	public isMenuOpen() {
		return this.navigation.dataset.state === "open";
	}

	public openCollapsedMenu() {
		if (!this.isMenuCollapsed() || this.isMenuOpen()) {
			return;
		}

		if (this.closeTimeout) {
			clearTimeout(this.closeTimeout);
		}
		this.navigationContent.hidden = false;
		this.overlay.hidden = false;
		// Set timeout is used to push these changes to the next tick so the transition occurs as expected.
		setTimeout(() => {
			this.navigation.dataset.state = "open";
			this.trigger.dataset.state = "open";
			this.trigger.setAttribute("aria-expanded", "true");
			this.navigationContent.dataset.state = "open";
			document.body.classList.add("menu-is-open");
			const navList = this.navigationContent.querySelector<HTMLElement>(
				":scope > .wp-block-launchpad-blocks-nav-list",
			)!;
			navList.style.height = `${navList.clientHeight}px`;
			this.navListHeight = navList.clientHeight;
		}, 1);
	}
	public closeCollapsedMenu() {
		if (!this.isMenuCollapsed() || !this.isMenuOpen()) {
			return;
		}
		this.closeAllSubMenus();
		document.body.classList.remove("menu-is-open");

		this.navigation.dataset.state = "closed";
		this.trigger.dataset.state = "closed";
		this.trigger.setAttribute("aria-expanded", "false");
		this.navigationContent.dataset.state = "closed";

		const navigationMenuOpenCloseTiming = getTimeInMilliseconds(
			getComputedStyle(this.navigation).getPropertyValue(
				"--navigation-menu-open-close-timing",
			),
		);
		this.closeTimeout = setTimeout(() => {
			if (this.isMenuCollapsed()) {
				this.navigationContent.hidden = true;
			}
			this.overlay.hidden = true;
		}, navigationMenuOpenCloseTiming);
	}
	public toggleCollapsedMenu() {
		if (this.isMenuOpen()) {
			this.closeCollapsedMenu();
		} else {
			this.openCollapsedMenu();
		}
	}
	public getAvailableMenuSpace() {
		const isCurrentlyCollapsed = this.isMenuCollapsed();
		this.navigation.dataset.isMenuCollapsed = "expanded";
		let otherElementsCount = 0;
		let otherElementsWidths = 0;
		for (const element of this.navigationParent.children) {
			if (element === this.navigation) {
				continue;
			}
			otherElementsWidths += element.clientWidth;
			otherElementsCount++;
		}
		const availableSpace =
			this.navigationParent.clientWidth -
			(getPixelNumber(
				getComputedStyle(this.navigationParent).getPropertyValue(
					"padding-left",
				),
			) +
				getPixelNumber(
					getComputedStyle(this.navigationParent).getPropertyValue(
						"padding-right",
					),
				) +
				getPixelNumber(
					getComputedStyle(this.navigationParent).getPropertyValue(
						"column-gap",
					),
				) *
					otherElementsCount +
				otherElementsWidths);
		this.navigation.style.flexGrow = "";
		if (isCurrentlyCollapsed) {
			this.navigation.dataset.isMenuCollapsed = "collapsed";
		}
		return availableSpace;
	}
	public recalculateIfContentIsCollapsed() {
		this.closeCollapsedMenu();
		this.navigation.classList.add("menu-js-loading");
		const availableMenuSpace = this.getAvailableMenuSpace();
		const shouldCollapseMenu = this.fullMenuWidth >= availableMenuSpace;
		this.navigation.dataset.isMenuCollapsed = shouldCollapseMenu
			? "collapsed"
			: "expanded";
		this.navigationContent.hidden = shouldCollapseMenu;
		this.resetSubMenus();

		const navList = this.navigationContent.querySelector<HTMLElement>(
			":scope > .wp-block-launchpad-blocks-nav-list",
		)!;
		navList.style.height = "";

		this.navigation.classList.remove("menu-js-loading");
		document.body.style.setProperty(
			"--header-height",
			`${document.querySelector(".site-header")!.clientHeight}px`,
		);
	}
	public closeAllSubMenus(switching = false) {
		for (const subMenu of this.subMenus) {
			if (subMenu.isSubMenuShown()) {
				subMenu.closeSubMenu(switching);
			}
		}
	}
	public resetSubMenus() {
		for (const subMenu of this.subMenus) {
			subMenu.reset();
		}
	}
}

class NavigationSubMenu {
	private parentNavigation: Navigation;
	private subMenu: HTMLLIElement;
	private subMenuIsChild: boolean;
	private trigger: HTMLButtonElement;
	private subMenuContent: HTMLDivElement;
	private backButton: HTMLButtonElement | null = null;
	private closeTimeout: NodeJS.Timeout | null = null;
	private cleanup: (() => void) | null = null;
	public parentSubMenuHeight = 0;

	constructor(subMenu: HTMLLIElement, parentNavigation: Navigation) {
		this.subMenu = subMenu;
		this.parentNavigation = parentNavigation;

		this.subMenuIsChild =
			this.subMenu.closest(".menu-group-list-item-submenu") !== null;

		const trigger = this.subMenu.querySelector<HTMLButtonElement>(
			`button[data-navigation-sub-menu-toggle]`,
		);
		if (!trigger) {
			throw new Error("Unable to determine the sub menu's trigger button.");
		}
		this.trigger = trigger;
		const subMenuContent = this.subMenu.querySelector<HTMLDivElement>(
			`div[data-navigation-sub-menu-content]`,
		);
		if (!subMenuContent) {
			throw new Error("Unable to determine the sub menu's content.");
		}
		this.subMenuContent = subMenuContent;

		this.maybeAddBackButton();

		this.trigger.addEventListener("click", () => {
			this.toggleSubMenu();
		});

		document.addEventListener("keyup", (event) => {
			if (this.isSubMenuShown() && event.key === "Escape") {
				this.parentNavigation.closeAllSubMenus();
			}
		});
	}
	private maybeAddBackButton() {
		if (this.subMenuIsChild || this.parentNavigation.isMenuCollapsed()) {
			const backButton = document.createElement("button");
			backButton.type = "button";
			backButton.classList.add("reset", "back-button");
			backButton.addEventListener("click", () => {
				this.closeSubMenu(true);
			});
			const div = document.createElement("div");
			const root = createRoot(div);
			flushSync(() => {
				root.render(<Icon iconName="back-arrow" />);
			});
			const iconAsHTML = div.innerHTML;
			backButton.innerHTML = `${iconAsHTML} Back`;
			this.subMenuContent.insertBefore(
				backButton,
				this.subMenuContent.firstChild,
			);
			this.backButton = backButton;
		}
	}
	public reset() {
		this.backButton?.remove();
		this.backButton = null;
		if (this.cleanup) {
			this.cleanup();
		}
		this.maybeAddBackButton();
	}
	public isSubMenuShown() {
		return this.subMenu.dataset.state === "open";
	}
	public toggleSubMenu() {
		if (this.isSubMenuShown()) {
			this.closeSubMenu();
		} else {
			this.openSubMenu();
		}
	}
	public closeSubMenu(switching = false) {
		if (!this.isSubMenuShown()) {
			return;
		}
		if (!this.parentNavigation.isMenuCollapsed() && !switching) {
			this.parentNavigation.hasOpenSubMenu = false;
			document.body.classList.remove("sub-menu-is-open");
		}

		this.subMenu.dataset.state = "closed";
		this.trigger.dataset.state = "closed";
		this.trigger.setAttribute("aria-expanded", "false");
		this.subMenuContent.dataset.state = "closed";
		if (this.subMenuIsChild) {
			const parentSubMenu = this.subMenu.closest<HTMLElement>(
				".menu-group-list-item-submenu",
			)!;
			parentSubMenu.style.height = `${this.parentSubMenuHeight}px`;
			if (this.parentNavigation.isMenuCollapsed()) {
				this.parentNavigation.navigationContent.querySelector<HTMLElement>(
					":scope > .wp-block-launchpad-blocks-nav-list",
				)!.style.height = `${this.parentSubMenuHeight}px`;
			}
		}
		if (this.parentNavigation.isMenuCollapsed() && !this.subMenuIsChild) {
			this.parentNavigation.navigationContent.querySelector<HTMLElement>(
				":scope > .wp-block-launchpad-blocks-nav-list",
			)!.style.height = `${this.parentNavigation.navListHeight}px`;
		}

		const navigationMenuOpenCloseTiming = getTimeInMilliseconds(
			getComputedStyle(this.subMenu).getPropertyValue(
				"--navigation-menu-open-close-timing",
			),
		);
		this.closeTimeout = setTimeout(() => {
			this.subMenuContent.hidden = true;
			if (!this.parentNavigation.isMenuCollapsed() && !switching) {
				this.parentNavigation.overlay.hidden = true;
			}
			if (this.cleanup) {
				this.cleanup();
			}
		}, navigationMenuOpenCloseTiming);
	}
	public openSubMenu() {
		if (this.isSubMenuShown()) {
			return;
		}
		if (
			this.parentNavigation.hasOpenSubMenu &&
			!this.parentNavigation.isMenuCollapsed() &&
			!this.subMenuIsChild // Don't close the parent sub-menu of a child sub-menu
		) {
			this.parentNavigation.closeAllSubMenus(true);
		}
		if (this.closeTimeout) {
			clearTimeout(this.closeTimeout);
		}
		this.subMenuContent.hidden = false;
		if (
			!this.parentNavigation.isMenuCollapsed() &&
			!this.parentNavigation.hasOpenSubMenu
		) {
			this.parentNavigation.overlay.hidden = false;
		}
		if (!this.parentNavigation.hasOpenSubMenu) {
			this.parentNavigation.hasOpenSubMenu = true;
		}
		// Set timeout is used to push these changes to the next tick so the transition occurs as expected.
		setTimeout(() => {
			this.subMenu.dataset.state = "open";
			this.trigger.dataset.state = "open";
			this.trigger.setAttribute("aria-expanded", "true");
			this.subMenuContent.dataset.state = "open";
			if (!this.parentNavigation.isMenuCollapsed()) {
				document.body.classList.add("sub-menu-is-open");
			}
			if (this.subMenuIsChild) {
				const parentSubMenu = this.subMenu.closest<HTMLElement>(
					".menu-group-list-item-submenu",
				)!;
				this.parentSubMenuHeight = parentSubMenu.clientHeight;
				parentSubMenu.style.height = `${this.subMenuContent.clientHeight}px`;
			}
			if (this.parentNavigation.isMenuCollapsed()) {
				this.parentNavigation.navigationContent.querySelector<HTMLElement>(
					":scope > .wp-block-launchpad-blocks-nav-list",
				)!.style.height = `${this.subMenuContent.clientHeight}px`;
			}
		}, 1);
		if (!this.parentNavigation.isMenuCollapsed() && !this.subMenuIsChild) {
			const stopAutoUpdating = autoUpdate(
				this.trigger,
				this.subMenuContent,
				() => this.updatePopOutPosition(),
			);
			this.cleanup = () => {
				stopAutoUpdating();
				this.subMenuContent.style.left = "";
				this.subMenuContent.style.top = "";
				this.subMenuContent.style.bottom = "";
				this.subMenuContent.style.right = "";
			};
		}
	}
	public updatePopOutPosition() {
		computePosition(this.trigger, this.subMenuContent, {
			placement: "bottom-start",
			middleware: [
				offset(16),
				shift({
					limiter: limitShift(),
				}),
			],
		})
			.then(({ x, y, placement }) => {
				if (!placement) {
					throw new Error("Error finding placement or middleware data.");
				}
				this.subMenuContent.style.left = `${x}px`;
				this.subMenuContent.style.top = `${y}px`;
			})
			.catch(() => this.closeSubMenu());
	}
}

/**
 * Check if an element exists
 *
 * This function is used to initialise JS faster than using the standard dom-ready method.
 * It checks for the element once every 0.1s until the element is found or the timeout is reached.
 * @param element The element selector to search for.
 * @param timeout The timeout value in seconds
 * @returns A promise that resolves to whether the element was found or not
 */
async function checkElementExists(element: string, timeout = Infinity) {
	const startTime = Date.now();
	return new Promise((resolve) => {
		const intervalId = setInterval(() => {
			if (document.querySelector(element)) {
				clearInterval(intervalId);
				resolve(true);
			} else if (Date.now() - startTime >= timeout * 1000) {
				clearInterval(intervalId);
				resolve(false);
			}
		}, 100);
	});
}

checkElementExists("[data-launchpad-navigation]", 1)
	.then((result) => {
		if (result) {
			new Navigation();
		} else {
			console.log("The element does not exist after 1 second(s)");
		}
	})
	.catch((err) => {
		console.error(err);
	});
