import type { BlockInstanceAsObject } from "@atomicsmash/blocks-helpers";

/**
 * Get the pixel number value from a string.
 * @param pixelValue A string which might contain a value like `8px`.
 * @return The raw int value of the pixel count.
 */
export function getPixelNumber(pixelValue: string | undefined) {
	if (pixelValue === undefined) {
		throw new Error(`Pixel value ${pixelValue} is undefined`);
	}
	if (!pixelValue.endsWith("px")) {
		throw new Error(`Pixel value ${pixelValue} is not a pixel value`);
	}
	if (pixelValue.includes(" ")) {
		throw new Error(`Pixel value ${pixelValue} contains multiple values`);
	}
	return Number(pixelValue.replace("px", ""));
}

export function slugifyHTML(HTMLStringToSlugify: string) {
	let innerText = "";
	const div = document.createElement("div");
	div.innerHTML = HTMLStringToSlugify;
	innerText = div.innerText;
	return slugify(innerText);
}

export function slugify(stringToSlugify: string) {
	// REGEX_1: Match any character that isn't alphanumeric, underscore, whitespace and underscore
	// REGEX_2: Match any character that is underscore, whitespace and underscore
	// REGEX_3: Match any hyphens at the start or the end of the string
	return stringToSlugify
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/[\s_-]+/g, "-")
		.replace(/^-+|(?<!-)-+$/g, "");
}

/**
 * Get the first parent element which matches a given condition.
 * @param node      The node to search for parents of.
 * @param condition The condition to match against.
 * @return The first matching parent element, or null.
 */
export function getParentElement(
	node: HTMLElement,
	condition: (parentNode: HTMLElement) => boolean = () => true,
) {
	const parentNode = node.parentElement;
	if (parentNode === null) {
		return null;
	}

	const hasPassedCondition = condition(parentNode);

	if (hasPassedCondition) {
		return parentNode;
	}
	return getParentElement(parentNode, condition);
}

/**
 * Get the millisecond count value of a time string.
 * @param time An animation time string, e.g. `100ms` or `0.2s`
 * @return The millisecond value as an integer.
 */
export function getTimeInMilliseconds(time: string) {
	if (new RegExp("ms$", "ig").test(time)) {
		return Number(time.substring(0, time.length - 2));
	}
	if (new RegExp("s$", "ig").test(time)) {
		return Number(time.substring(0, time.length - 1)) * 1000;
	}
	throw new Error(`Time didn't end with ms or s so was not correctly parsed.`);
}

/**
 * Get the user's operating system
 */
export function getUserOperatingSystem() {
	if (typeof document === "undefined") {
		return "unknown";
	}
	const userAgent = window.navigator.userAgent;
	let operatingSystem: "unknown" | "Windows" | "MacOS" | "UNIX" | "Linux" =
		"unknown";
	if (userAgent.search("Windows") !== -1) {
		operatingSystem = "Windows";
	} else if (userAgent.search("Mac") !== -1) {
		operatingSystem = "MacOS";
	} else if (
		userAgent.search("X11") !== -1 &&
		!(userAgent.search("Linux") !== -1)
	) {
		operatingSystem = "UNIX";
	} else if (
		userAgent.search("Linux") !== -1 &&
		userAgent.search("X11") !== -1
	) {
		operatingSystem = "Linux";
	}
	return operatingSystem;
}

export function objectArraysAreEqual(
	array1: Record<string, unknown>[] | undefined,
	array2: Record<string, unknown>[] | undefined,
) {
	if (array1 === undefined && array2 === undefined) {
		return true;
	}
	if (array1 === undefined || array2 === undefined) {
		return false;
	}
	if (array1.length !== array2.length) {
		return false;
	}
	for (let $i = 0; $i < array1.length; $i++) {
		const isObjectEqual = Object.entries(array1[$i]!).every(([key, value]) => {
			if (Array.isArray(value)) {
				return objectArraysAreEqual(
					value,
					array2[$i]?.[key] as Record<string, unknown>[],
				);
			}
			return array2[$i]?.[key] === value;
		});
		if (!isObjectEqual) {
			return false;
		}
	}
	return true;
}

export type UseSelectWithBlockEditorStore = {
	getBlockParentsByBlockName: (clientId: string, blockName: string) => string[];
	hasSelectedInnerBlock: (clientId: string, deep: boolean) => boolean;
	getBlockOrder: (rootClientId?: string) => string[];
	getBlocks: (
		clientId?: string,
	) => (BlockInstanceAsObject & { clientId: string })[];
};
