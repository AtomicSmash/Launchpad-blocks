<?php
/**
 * Block helpers
 */

namespace LaunchpadBlocks\Helpers;

/**
 * Icon function
 *
 * This function generates an SVG from an icon name and allows custom attributes to be passed in
 *
 * @param string $icon_name Icon name.
 * @param array  $attributes The HTML attributes to add to the SVG element.
 */
function icon( string $icon_name, array $attributes = array() ) {
	$attrs = join(
		' ',
		array_map(
			function ( $key ) use ( $attributes ) {
				if ( is_bool( $attributes[ $key ] ) ) {
					return $attributes[ $key ] ? $key : '';
				}
				return $key . '="' . $attributes[ $key ] . '"';
			},
			array_keys( $attributes )
		)
	);

	$result = '<svg xmlns="http://www.w3.org/2000/svg" ' . $attrs . '><use href="' . get_home_url() . '/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#' . $icon_name . '"></use></svg>';
	return $result;
}

/**
 * Check if an array is correct by checking a subset of its parameters.
 *
 * @param array $array_to_match The array to check.
 * @param array $partial_array_search The partial array of values to check in the main array.
 *
 * @return boolean True if array matches all the values in the partial array, otherwise false.
 */
function match_partial_array( array $array_to_match, array $partial_array_search ) {
	foreach ( $partial_array_search as $partial_array_key => $partial_array_value ) {
		if ( is_array( $partial_array_value ) ) {
			$sub_array_matched = match_partial_array( $array_to_match[ $partial_array_key ], $partial_array_value );
			if ( ! $sub_array_matched ) {
				return false;
			}
		} else {
			$value_matched = $array_to_match[ $partial_array_key ] === $partial_array_value;
			if ( ! $value_matched ) {
				return false;
			}
		}
	}
	return true;
}

/**
 * Find a specific block in an array of blocks, including searching innerBlocks.
 *
 * @param array $blocks_to_search The blocks to search.
 * @param array $block_attributes_to_match The block attribute used to determine if the block is the one you're searching for.
 *
 * @return array|null The block if found, otherwise null
 */
function find_block_in_inner_blocks( array $blocks_to_search, array $block_attributes_to_match ) {
	foreach ( $blocks_to_search as $search_block ) {
		if ( match_partial_array( $search_block, $block_attributes_to_match ) ) {
			return $search_block;
		}
		if ( ! empty( $search_block['innerBlocks'] ) ) {
			$searched_inner_blocks = find_block_in_inner_blocks( $search_block['innerBlocks'], $block_attributes_to_match );
			if ( null !== $searched_inner_blocks ) {
				return $searched_inner_blocks;
			}
		}
	}
	return null;
}
