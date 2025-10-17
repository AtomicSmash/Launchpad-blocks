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
 * @param string                    $icon_name Icon name.
 * @param array<string,string|bool> $attributes The HTML attributes to add to the SVG element.
 */
function icon( string $icon_name, array $attributes = array() ): string {
	$assets = new \LaunchpadBlocks\Assets();
	$icon_sprite = $assets->get_cached_asset( 'icons/sprite.svg' );
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

	$result = '<svg xmlns="http://www.w3.org/2000/svg" ' . $attrs . '><use href="' . $icon_sprite['source'] . '#' . $icon_name . '"></use></svg>';
	return $result;
}

/**
 * Check if an array is correct by checking a subset of its parameters.
 *
 * @param array<mixed> $array_to_match The array to check.
 * @param array<mixed> $partial_array_search The partial array of values to check in the main array.
 *
 * @return bool True if array matches all the values in the partial array, otherwise false.
 */
function match_partial_array( array $array_to_match, array $partial_array_search ): bool {
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
 * @param array<mixed> $blocks_to_search The blocks to search.
 * @param array<mixed> $block_attributes_to_match The block attribute used to determine if the block is the one you're searching for.
 *
 * @return array<mixed>|null The block if found, otherwise null
 */
function find_block_in_inner_blocks( array $blocks_to_search, array $block_attributes_to_match ): ?array {
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

/**
 * Convert an array of style declarations into a valid style string
 *
 * @param array<string,string> $style_array an array of style declarations, where the key is the property and the value is the css value or keyword.
 */
function convert_style_array_to_string( array $style_array ): string {
	$style_string = '';
	foreach ( $style_array as $property => $value ) {
		if ( strlen( $style_string ) !== 0 ) {
			$style_string .= ';';
		}
		$style_string .= $property . ':' . $value;
	}
	return $style_string;
}


/**
 * Get all the available icon renderers from the registered libraries.
 *
 * @return array<string,function>
 */
function get_icon_renderers(): array {
	$icon_renderers = apply_filters(
		'launchpad_blocks_icon_renderers',
		array(
			'launchpad-blocks' => function ( string $icon_name, array $attributes = array() ) {
				return \LaunchpadBlocks\Helpers\icon( $icon_name, $attributes );
			},
		)
	);
	return $icon_renderers;
}
