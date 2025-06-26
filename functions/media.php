<?php
/**
 * Media
 */

namespace LaunchpadBlocks\Media;

/**
 * Add custom image sizes
 */
function add_custom_image_size(): void {
	add_image_size( 'carousel_thumbnail', 190, 132, false );
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\\add_custom_image_size' );
