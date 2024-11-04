<?php
/**
 * PHP related to this block.
 */

namespace LaunchpadBlocks\Custom\GlobalBanner;

use WP_Block_Type_Registry;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function register_block() {
	\register_block_type( __DIR__ . '/block.json' );
}
\add_action( 'init', __NAMESPACE__ . '\\register_block' );

/**
 * We only want to use this block on a single post type, so we need to
 * hide it for all other post types.
 *
 * @param array                    $allowed_block_types The currently allowed block types.
 * @param \WP_Block_Editor_Context $editor_context The current block editor context.
 */
function disable_this_block_for_most_post_types( $allowed_block_types, $editor_context ) {
	if ( isset( $editor_context->post ) && 'global-banner' === $editor_context->post->post_type ) {
		return $allowed_block_types;
	}

	$allowed_block_types = ( true === $allowed_block_types ) ? array_keys(
		WP_Block_Type_Registry::get_instance()->get_all_registered()
	) : $allowed_block_types;

	$new_allowed_block_types = array();
	foreach ( $allowed_block_types as $block_name ) {

		if ( 'launchpad-blocks/global-banner' === $block_name ) {
			continue;
		}
		$new_allowed_block_types[] = $block_name;
	}

	return $new_allowed_block_types;
}
add_filter( 'allowed_block_types_all', __NAMESPACE__ . '\\disable_this_block_for_most_post_types', 15, 2 );

/**
 * Our code requires generating a unique ID for every banner.
 *
 * This code generates an id on save post if one doesn't exist, and also re-generates the id
 * if the "reset cookie" toggle is selected.
 * Note: cookie_reset field requires using acf/save_post hook.
 *
 * @param int $post_id Post ID.
 */
function generate_banner_id( $post_id ) {
	if ( wp_is_post_autosave( $post_id ) || wp_is_post_revision( $post_id ) || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
		return;
	}
	$banner_id = get_post_meta( $post_id, '_banner_id', true );
	$should_reset = get_field( 'cookie_reset', $post_id );

	if ( ( is_string( $banner_id ) && '' !== $banner_id && false === $should_reset ) ) {
		return;
	}

	if ( true === $should_reset ) {
		$banner_id = '';
		update_field( 'cookie_reset', 0, $post_id );
	}

	$bytes = random_bytes( 20 );
	$banner_id = bin2hex( $bytes );

	update_post_meta( $post_id, '_banner_id', $banner_id );
}
add_action( 'acf/save_post', __NAMESPACE__ . '\\generate_banner_id', 99, 2 );
