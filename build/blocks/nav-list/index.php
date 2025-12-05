<?php
/**
 * PHP related to this block.
 */

namespace LaunchpadBlocks\Blocks\Custom\NavigationList;

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
		switch ( $inner_block->parsed_block['blockName'] ) {
			case 'launchpad-blocks/nav-menu-item':
				if ( \LaunchpadBlocks\Blocks\Custom\NavigationMenuItem\is_shown( $inner_block->parsed_block['attrs'] ) ) {
					return true;
				}
				break;
			case 'launchpad-blocks/nav-submenu':
				if ( \LaunchpadBlocks\Blocks\Custom\NavigationSubMenu\is_shown( $inner_block->parsed_block['attrs'] ) ) {
					return true;
				}
				break;
			case 'launchpad-blocks/nav-links-group':
				if ( \LaunchpadBlocks\Blocks\Custom\NavLinksGroup\is_shown( $inner_block ) ) {
					return true;
				}
				break;
		}
	}
	return false;
}
