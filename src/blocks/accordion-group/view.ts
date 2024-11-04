/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */
import domReady from "@wordpress/dom-ready";
import {
	getParentElement,
	getPixelNumber,
	getTimeInMilliseconds,
} from "../helpers";

class AccordionGroup {
	private id: string;
	private accordionGroup: HTMLDivElement;
	public allowMultipleOpenAccordions: boolean;
	public childAccordions: Accordion[] = [];
	public scrollParent: HTMLElement;

	constructor(accordionGroup: HTMLDivElement) {
		this.accordionGroup = accordionGroup;
		const accordionGroupId = accordionGroup.id;
		if (accordionGroupId === undefined || accordionGroupId === "") {
			throw new Error("Failed to get ID of accordion.");
		}
		this.id = accordionGroupId;
		this.allowMultipleOpenAccordions =
			accordionGroup.dataset.isMultiple === "true";
		this.initialiseAccordions();
		this.scrollParent =
			getParentElement(
				this.accordionGroup,
				(node) => node.scrollHeight > node.clientHeight,
			) ?? document.body;
	}
	public getId() {
		return this.id;
	}
	public closeAllAccordions() {
		for (const accordion of this.childAccordions) {
			accordion.close();
		}
	}
	private initialiseAccordions() {
		const accordionsInGroup = document.querySelectorAll<HTMLElement>(
			`[id='${this.accordionGroup.id}'] > [data-accordion]`,
		);
		let isFirstInitiallyOpenAccordion = true;
		for (const accordionElement of accordionsInGroup) {
			const shouldTryToRemainOpen =
				accordionElement.dataset.isInitiallyOpen === "true";
			let isInitiallyOpen: boolean;
			if (this.allowMultipleOpenAccordions) {
				isInitiallyOpen = shouldTryToRemainOpen;
			} else if (isFirstInitiallyOpenAccordion && shouldTryToRemainOpen) {
				isInitiallyOpen = true;
				isFirstInitiallyOpenAccordion = false;
			} else {
				isInitiallyOpen = false;
			}
			const accordion = new Accordion(accordionElement, this);
			if (!isInitiallyOpen) {
				accordion.close();
			}
			this.childAccordions.push(accordion);
		}
	}
}

class Accordion {
	private id: string;
	private state: "open" | "collapsed";
	private accordionGroup: AccordionGroup;
	public trigger: HTMLButtonElement;
	public panel: HTMLDivElement;
	private closeTimeout: NodeJS.Timeout | null = null;

	constructor(accordion: HTMLElement, accordionGroup: AccordionGroup) {
		const accordionId = accordion.id;
		if (accordionId === undefined || accordionId === "") {
			throw new Error("Failed to get ID of accordion.");
		}
		this.id = accordionId;
		this.state = "open";
		const trigger = document.getElementById(
			`${accordionId}-trigger`,
		) as HTMLButtonElement | null;
		if (!trigger) {
			throw new Error("Unable to determine the accordions trigger button.");
		}
		this.trigger = trigger;
		const panel = document.getElementById(
			`${accordionId}-panel`,
		) as HTMLDivElement | null;
		if (!panel) {
			throw new Error("Unable to determine the accordions content panel.");
		}
		this.panel = panel;
		this.accordionGroup = accordionGroup;
		this.trigger.addEventListener("click", () => {
			this.toggle();
		});

		this.panel.style.height = getComputedStyle(this.panel).getPropertyValue(
			"height",
		);
	}
	public getId() {
		return this.id;
	}
	public getState() {
		return this.state;
	}
	public open() {
		if (!this.accordionGroup.allowMultipleOpenAccordions) {
			const thisAccordionIndex = this.accordionGroup.childAccordions.findIndex(
				(accordion) => accordion === this,
			);
			const currentlyOpenAccordionIndex =
				this.accordionGroup.childAccordions.findIndex(
					(accordion) => accordion.state === "open",
				);
			const isOpenAccordionAboveThisOne =
				thisAccordionIndex > currentlyOpenAccordionIndex &&
				currentlyOpenAccordionIndex !== -1;
			if (isOpenAccordionAboveThisOne) {
				let heightValue: number;
				try {
					heightValue = getPixelNumber(
						document.querySelector<HTMLDivElement>(
							`.accordion-panel[data-state="open"]`,
						)?.style.height,
					);
				} catch {
					heightValue = 0;
				}
				const scrollOffset = -1 * heightValue;
				this.accordionGroup.childAccordions[currentlyOpenAccordionIndex]!.close(
					{ instant: true },
				);
				this.accordionGroup.scrollParent.scrollBy({
					top: scrollOffset,
					behavior: "instant",
				});
			} else {
				this.accordionGroup.closeAllAccordions();
			}
			if (this.closeTimeout) {
				clearTimeout(this.closeTimeout);
			}
		}
		this.panel.style.display = "";
		// Set timeout is used to push these changes to the next tick so the transition occurs as expected.
		setTimeout(() => {
			this.state = "open";
			this.panel.removeAttribute("aria-hidden");
			this.panel.setAttribute("data-state", "open");
			this.trigger.setAttribute("aria-expanded", "true");
			this.trigger.setAttribute("data-state", "open");
		}, 1);
	}
	public close({ instant } = { instant: false }) {
		if (instant) {
			this.panel.style.display = "none";
			this.state = "collapsed";
			this.panel.setAttribute("aria-hidden", "true");
			this.panel.setAttribute("data-state", "collapsed");
			this.trigger.setAttribute("aria-expanded", "false");
			this.trigger.setAttribute("data-state", "collapsed");
		} else {
			const accordionOpenCloseTiming = getTimeInMilliseconds(
				getComputedStyle(this.panel).getPropertyValue(
					"--launchpad-accordion-open-close-timing",
				),
			);
			this.state = "collapsed";
			this.panel.setAttribute("aria-hidden", "true");
			this.panel.setAttribute("data-state", "collapsed");
			this.trigger.setAttribute("aria-expanded", "false");
			this.trigger.setAttribute("data-state", "collapsed");
			this.closeTimeout = setTimeout(() => {
				this.panel.style.display = "none";
			}, accordionOpenCloseTiming);
		}
	}
	public toggle() {
		if (this.state === "open") {
			this.close();
		} else {
			this.open();
		}
	}
	public debug() {
		console.log({
			id: this.id,
			state: this.state,
			groupId: this.accordionGroup.getId(),
			isInitiallyOpen:
				this.panel.parentElement?.dataset.isInitiallyOpen === "true",
		});
	}
}

function enableAccordionFunctionality() {
	const accordionGroups = document.querySelectorAll<HTMLDivElement>(
		"[data-accordion-group]",
	);
	for (const accordionGroupElement of accordionGroups) {
		new AccordionGroup(accordionGroupElement);
	}
}

domReady(() => {
	enableAccordionFunctionality();
});
