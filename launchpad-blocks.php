<?php
/**
 * Plugin Name:       Launchpad blocks
 * Description:       This is a block library created by Atomic Smash.
 * Requires at least: 6.7
 * Requires PHP:      8.2
 * Version:           1.0.0-beta.35
 * Author:            Atomic Smash
 * Author URI:        https://www.atomicsmash.co.uk/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       launchpad-blocks
 */

namespace Launchpad\Blocks;

define( 'LAUNCHPAD_BLOCKS_VERSION', '1.0.0-beta.35' );

// Require autoloader.
require __DIR__ . '/vendor/autoload.php';

define( 'LAUNCHPAD_BLOCKS_DIR', plugin_dir_path( __FILE__ ) . 'build/blocks/' );

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

foreach ( LAUNCHPAD_BLOCKS as $block ) {
	include_once LAUNCHPAD_BLOCKS_DIR . $block . '/index.php';
}

require_once plugin_dir_path( __FILE__ ) . 'functions/blocks-in-php.php';
require_once plugin_dir_path( __FILE__ ) . 'functions/fix-block-defaults.php';
require_once plugin_dir_path( __FILE__ ) . 'functions/helpers.php';
require_once plugin_dir_path( __FILE__ ) . 'functions/sanitisation.php';

/**
 * Get all root file scripts and map them with data.
 */
function get_mapped_scripts() {
	$root_asset_files = array_filter(
		array_diff( scandir( LAUNCHPAD_BLOCKS_DIR ), array( '..', '.' ) ),
		function ( $file_or_directory ) {
			return ! is_dir( LAUNCHPAD_BLOCKS_DIR . $file_or_directory ) && pathinfo( $file_or_directory, PATHINFO_EXTENSION ) === 'php';
		}
	);
	
	$scripts = array();
	foreach ( $root_asset_files as $root_asset_file ) {
		$asset = require LAUNCHPAD_BLOCKS_DIR . $root_asset_file;
		$script_name = explode( '.', pathinfo( $root_asset_file, PATHINFO_FILENAME ) )[0];
		$scripts[] = array(
			'name' => $script_name,
			'source' => plugin_dir_url( __FILE__ ) . 'build/blocks/' . str_replace( '.asset.php', '', $root_asset_file ) . '.js',
			'dependencies' => $asset['dependencies'],
			'version' => $asset['version'],
			'args' => array( 'strategy' => 'defer' ),
			'type' => 'frontend',
		);
	}
	
	$mapped_scripts = array_map(
		function ( $script ) {
			// Make any adjustments needed to wp_enqueue_script parameters here.
			return $script;
		},
		$scripts
	);
	return $mapped_scripts;
}

/**
 * Enqueue all frontend root files from the blocks folder.
 */
function enqueue_frontend_root_file_scripts() {
	foreach ( get_mapped_scripts() as $script ) {
		if ( 'frontend' === $script['type'] ) {
			wp_enqueue_script( $script['name'], $script['source'], $script['dependencies'], $script['version'], $script['args'] );
		}
	}
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_frontend_root_file_scripts' );

/**
 * Enqueue all admin root files from the blocks folder.
 */
function enqueue_admin_root_file_scripts() {
	foreach ( get_mapped_scripts() as $script ) {
		if ( 'admin' === $script['type'] ) {
			wp_enqueue_script( $script['name'], $script['source'], $script['dependencies'], $script['version'], $script['args'] );
		}
	}
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_admin_root_file_scripts' );
