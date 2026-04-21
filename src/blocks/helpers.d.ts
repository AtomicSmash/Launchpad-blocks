import type { BlockInstanceAsObject } from "@atomicsmash/blocks-helpers";
/**
 * Get the pixel number value from a string.
 * @param pixelValue A string which might contain a value like `8px`.
 * @return The raw int value of the pixel count.
 */
export declare function getPixelNumber(pixelValue: string | undefined): number;
export declare function slugifyHTML(HTMLStringToSlugify: string): string;
export declare function slugify(stringToSlugify: string): string;
/**
 * Get the first parent element which matches a given condition.
 * @param node      The node to search for parents of.
 * @param condition The condition to match against.
 * @return The first matching parent element, or null.
 */
export declare function getParentElement(node: HTMLElement, condition?: (parentNode: HTMLElement) => boolean): HTMLElement | null;
/**
 * Get the millisecond count value of a time string.
 * @param time An animation time string, e.g. `100ms` or `0.2s`
 * @return The millisecond value as an integer.
 */
export declare function getTimeInMilliseconds(time: string): number;
/**
 * Get the user's operating system
 */
export declare function getUserOperatingSystem(): "unknown" | "Windows" | "MacOS" | "UNIX" | "Linux";
export declare function objectArraysAreEqual(array1: Record<string, unknown>[] | undefined, array2: Record<string, unknown>[] | undefined): boolean;
export type UseSelectWithBlockEditorStore = {
    getBlockParentsByBlockName: (clientId: string, blockName: string) => string[];
    hasSelectedInnerBlock: (clientId: string, deep: boolean) => boolean;
    getBlockOrder: (rootClientId?: string) => string[];
    getBlocks: (clientId?: string) => (BlockInstanceAsObject & {
        clientId: string;
    })[];
};
//# sourceMappingURL=helpers.d.ts.map