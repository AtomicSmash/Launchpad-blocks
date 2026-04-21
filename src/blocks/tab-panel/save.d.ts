/**
 * For dynamic blocks, you generally want 1 of two save functions,
 * depending if your block has or doesn't have inner blocks.
 * If you need a custom Save function, you can delete these and
 * export it from this file instead.
 */
/**
 * Gets the correct generic save function based on if the block has inner blocks or not.
 * @param hasInnerBlocks Whether the block has innerBlocks or not.
 * @return The Save react component needed by WP.
 */
export declare function save({ hasInnerBlocks }: {
    hasInnerBlocks: boolean;
}): typeof Save2 | typeof Save1;
declare function Save1(): null;
declare function Save2(): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=save.d.ts.map