<?php
/**
 * PHP related to this block.
 */

namespace LaunchpadBlocks\Blocks\Custom\NavLinksGroup;

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
 * A function to determine if the block produces any output.
 *
 * @param \WP_Block $block The block object.
 */
function is_shown( \WP_Block $block ): bool {
	$inner_blocks = $block->inner_blocks;
	foreach ( $inner_blocks as $inner_block ) {
		if ( \LaunchpadBlocks\Blocks\Custom\NavigationList\is_shown( $inner_block ) ) {
			return true;
		}
	}
	return false;
}
