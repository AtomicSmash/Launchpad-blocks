<?php
/**
 * PHP related to this block.
 */

namespace LaunchpadBlocks\Blocks\Custom\NavigationSubMenu;

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
 * Search nav submenus for menu items which represent the page the user is currently on.
 *
 * @param \WP_Block $block The sub menu block to search.
 * @param string    $current_url The current url.
 *
 * @return bool Whether the submenu has a current menu item within it.
 */
function has_current_menu_item_as_child( \WP_Block $block, string $current_url ): bool {
	$result = false;

	foreach ( $block->inner_blocks as $inner_block ) {
		if ( array_search( $inner_block->parsed_block['blockName'], array( 'launchpad-blocks/nav-submenu', 'launchpad-blocks/nav-list' ), true ) !== false ) {
			$result = has_current_menu_item_as_child( $inner_block, $current_url );
		} elseif ( array_search( $inner_block->parsed_block['blockName'], array( 'launchpad-blocks/nav-menu-item' ), true ) !== false ) {
			$result = \LaunchpadBlocks\Blocks\Custom\NavigationMenuItem\is_active( $inner_block->parsed_block['attrs'] );
		}
		if ( $result ) {
			break;
		}
	}
	return $result;
}

/**
 * A function to determine if the block produces any output.
 *
 * @param array<string,mixed> $attributes The link's attributes.
 */
function is_shown( array $attributes ): bool {
	if ( ( $attributes['linkText'] ?? '' ) === '' ) {
		return false;
	}
	return true;
}
