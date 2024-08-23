<?php
/**
 * Plugin Name:       Launchpad blocks
 * Description:       This is a block library created by Atomic Smash.
 * Requires at least: 5.9
 * Requires PHP:      8.0
 * Version:           1.0.0-beta.0
 * Author:            Atomic Smash
 * Author URI:        https://www.atomicsmash.co.uk/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       launchpad-blocks
 */

define( 'LAUNCHPAD_BLOCKS_VERSION', '1.0.0-beta.0' );

define( 'LAUNCHPAD_BLOCKS_DIR', plugin_dir_path( __FILE__ ) . 'build/' );

if ( ! is_dir( LAUNCHPAD_BLOCKS_DIR ) ) {
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
$build_directory = scandir( LAUNCHPAD_BLOCKS_DIR );

$blocks_folders = array_filter(
	array_diff( $build_directory, array( '..', '.' ) ),
	function ( $file_or_directory ) {
		return is_dir( LAUNCHPAD_BLOCKS_DIR . $file_or_directory );
	}
);

define( 'LAUNCHPAD_BLOCKS', $blocks_folders );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function launchpad_blocks_init() {
	launchpad_register_block_assets_by_block_name();
	foreach ( LAUNCHPAD_BLOCKS as $block ) {
		register_block_type( __DIR__ . '/build/' . $block . '/block.json' );
	}
}
add_action( 'init', 'launchpad_blocks_init' );

/**
 * Here we register all our JS and CSS files ready to be enqueued.
 * The block names are then referenced in and enqueued from the block.json files of the block.
 */
function launchpad_register_block_assets_by_block_name() {
	$assets = include plugin_dir_path( __FILE__ ) . 'build/assets.php';
	$registered_block_styles = array();

	foreach ( $assets as $block_path => $asset ) {
		$block_name = false;
		foreach ( LAUNCHPAD_BLOCKS as $temp_block_name ) {
			if ( str_starts_with( $block_path, $temp_block_name . '/' ) ) {
				$block_name = $temp_block_name;
				break;
			}
		}
		if ( false === $block_name ) {
			continue;
		}
		$filename = str_replace( $block_name . '/', '', $block_path );
		list($script_name) = explode( '.', $filename );
		if ( 'index' === $script_name ) {
			$script_handle = $block_name . '-script';
		} elseif ( 'editor' === $script_name ) {
			$script_handle = $block_name . '-editor-script';
		} elseif ( 'view' === $script_name ) {
			$script_handle = $block_name . '-view-script';
		} else {
			$script_handle = $script_name;
		}
		wp_register_script( $script_handle, plugins_url( 'build/' . $block_path, __FILE__ ), $asset['dependencies'], $asset['version'], false );
		if ( ! in_array( $block_name, $registered_block_styles, true ) ) {

			$directory_files = array_diff( scandir( LAUNCHPAD_BLOCKS_DIR . $block_name ), array( '..', '.', $filename ) );
			foreach ( $directory_files as $file ) {
				if ( ! str_ends_with( $file, '.css' ) ) {
					continue;
				}
				$stylesheet_name = explode( '.', $file )[0];
				if ( 'style' === $stylesheet_name ) {
					$stylesheet_handle = $block_name . '-styles';
				} elseif ( 'editor-styles' === $stylesheet_name ) {
					$stylesheet_handle = $block_name . '-editor-styles';
				} else {
					$stylesheet_handle = $stylesheet_name;
				}
				// Our file names are cache fingerprinted, so we don't need to add a version the traditional WP way.
				// phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion
				wp_register_style( $stylesheet_handle, plugins_url( 'build/' . $block_name . '/' . $file, __FILE__ ), array(), null, false );
			}
			$registered_block_styles[] = $block_name;
		}
	}
}
