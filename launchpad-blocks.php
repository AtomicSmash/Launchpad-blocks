<?php
/**
 * Plugin Name:       Launchpad blocks
 * Description:       This is a block library created by Atomic Smash.
 * Requires at least: 6.8
 * Requires PHP:      8.2
 * Version:           2.1.1
 * Author:            Atomic Smash
 * Author URI:        https://www.atomicsmash.co.uk/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       launchpad-blocks
 */

namespace Launchpad\Blocks;

define( 'LAUNCHPAD_BLOCKS_VERSION', '2.1.1' );

// Require autoloader.
require __DIR__ . '/vendor/autoload.php';

define( 'LAUNCHPAD_BLOCKS_BUILD_DIR', plugin_dir_path( __FILE__ ) . 'build/' );
define( 'LAUNCHPAD_BLOCKS_BLOCKS_DIR', LAUNCHPAD_BLOCKS_BUILD_DIR . 'blocks/' );

if ( ! is_dir( LAUNCHPAD_BLOCKS_BLOCKS_DIR ) ) {
	if ( is_admin() ) {
		if ( wp_get_environment_type() === 'development' || wp_get_environment_type() === 'local' ) {
			wp_die( 'Blocks directory missing in launchpad blocks plugin. You may need to run `npm run build` or `npm run dev`' );
		} else {
			// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
			error_log( 'Blocks directory missing in launchpad blocks plugin.' );
			wp_die( 'There was a fatal error with the launchpad blocks plugin. Please install a previous version and inform the Atomic Smash team.' );
		}
	} else {
		return;
	}
}
$build_directory = scandir( LAUNCHPAD_BLOCKS_BLOCKS_DIR );

$blocks_folders = array_filter(
	array_diff( $build_directory, array( '..', '.' ) ),
	function ( $file_or_directory ) {
		return is_dir( LAUNCHPAD_BLOCKS_BLOCKS_DIR . $file_or_directory );
	}
);

define( 'LAUNCHPAD_BLOCKS', $blocks_folders );

foreach ( LAUNCHPAD_BLOCKS as $block ) {
	include_once LAUNCHPAD_BLOCKS_BLOCKS_DIR . $block . '/index.php';
}

require_once plugin_dir_path( __FILE__ ) . 'functions/blocks-in-php.php';
require_once plugin_dir_path( __FILE__ ) . 'functions/fix-block-defaults.php';
require_once plugin_dir_path( __FILE__ ) . 'functions/helpers.php';
require_once plugin_dir_path( __FILE__ ) . 'functions/media.php';
require_once plugin_dir_path( __FILE__ ) . 'functions/sanitisation.php';
