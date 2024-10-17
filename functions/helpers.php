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
