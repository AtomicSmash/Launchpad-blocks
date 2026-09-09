<?php
/**
 * Enqueue global assets
 */

namespace Launchpad\Blocks\Enqueue;

use Error;

/**
 * Enqueue scripts in the editor.
 *
 * @throws Error If there's an issue loading the asset.
 */
function editor_scripts(): void {
	$assets = new \Launchpad\Blocks\Assets();
	$block_editor_script = $assets->get_cached_asset( 'scripts/block-editor.tsx' );
	if ( null === $block_editor_script ) {
		throw new Error( 'Failed to load script: scripts/block-editor.tsx' );
	}
	wp_enqueue_script(
		'launchpad-blocks-block-editor',
		$block_editor_script['source'],
		$block_editor_script['dependencies'],
		$block_editor_script['version'],
		array( 'strategy' => 'defer' )
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\editor_scripts', 10 );

/**
 * Add styles which are used to style editor controls
 *
 * Note that this function is hooked into the enqueue_block_editor_assets hook
 *
 * @throws Error If there's an issue loading the asset.
 */
function add_editor_control_styles(): void {
	$assets = new \Launchpad\Blocks\Assets();

	$editor_controls_stylesheet = $assets->get_cached_asset( 'styles/editor-controls.scss' );
	if ( null === $editor_controls_stylesheet ) {
		throw new Error( 'Failed to load stylesheet: styles/editor-controls.scss' );
	}
	wp_enqueue_style( 'launchpad-blocks-editor-controls', $editor_controls_stylesheet['source'], $editor_controls_stylesheet['dependencies'], $editor_controls_stylesheet['version'] );
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\add_editor_control_styles' );
