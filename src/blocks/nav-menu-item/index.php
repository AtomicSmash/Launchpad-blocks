<?php
/**
 * PHP related to this block.
 */

namespace LaunchpadBlocks\Blocks\Custom\NavigationMenuItem;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function register_block(): void {
	\register_block_type( __DIR__ . '/block.json' );
}
\add_action( 'init', __NAMESPACE__ . '\\register_block' );

/**
 * Determine if a link is currently active based on it's attributes.
 *
 * @param array<string,mixed> $attributes The link's attributes.
 */
function is_active( array $attributes ): bool {
	$kind = empty( $attributes['linkKind'] ) ? 'post_type' : str_replace( '-', '_', $attributes['linkKind'] );
	$is_active = ! empty( $attributes['linkId'] ) && get_queried_object_id() === (int) $attributes['linkId'] && ! empty( get_queried_object()->$kind );
	if ( is_post_type_archive() && ! empty( $attributes['linkHref'] ) ) {
		$queried_archive_link = get_post_type_archive_link( get_queried_object()->name );
		if ( $attributes['linkHref'] === $queried_archive_link ) {
			$is_active = true;
		}
	}

	if ( '/' === $attributes['linkHref'] && is_home() ) {
		$is_active = true;
	}

	/**
	 * Filters if a nav menu item is active or not.
	 *
	 * @param bool $is_active Whether the menu item is determined as active or not.
	 * @param array<string,mixed> $attributes The link's attributes.
	 */
	return apply_filters( 'launchpad_blocks_nav_menu_item_is_active', $is_active, $attributes );
}
