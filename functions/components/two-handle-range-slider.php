<?php
/**
 * Two handle range slider component
 */

namespace Launchpad\Blocks\Components\TwoHandleRangeSlider;

use Error;

/**
 * Add styles and script registrations for use later.
 *
 * @throws Error If there's an issue loading the asset.
 */
function register_styles_and_scripts_for_later(): void {
	$assets = new \Launchpad\Blocks\Assets();

	$two_handle_range_slider_stylesheet = $assets->get_cached_asset( 'styles/two-handle-range-slider.scss' );
	if ( null === $two_handle_range_slider_stylesheet ) {
		throw new Error( 'Failed to load stylesheet: styles/two-handle-range-slider.scss' );
	}
	wp_register_style( 'lp-blocks-components-two-handle-range-slider', $two_handle_range_slider_stylesheet['source'], $two_handle_range_slider_stylesheet['dependencies'], $two_handle_range_slider_stylesheet['version'] );

	$two_handle_range_slider_script = $assets->get_cached_asset( 'scripts/components/two-handle-range-slider.ts' );
	if ( null === ( $two_handle_range_slider_script ) ) {
		throw new Error( 'Failed to load script: scripts/components/two-handle-range-slider.ts' );
	}
	wp_register_script(
		'lp-blocks-components-two-handle-range-slider',
		$two_handle_range_slider_script['source'],
		$two_handle_range_slider_script['dependencies'],
		$two_handle_range_slider_script['version'],
		array( 'strategy' => 'defer' )
	);
}
add_action( 'enqueue_block_assets', __NAMESPACE__ . '\\register_styles_and_scripts_for_later', 0 );

/**
 * A function used to get the markup for a two handle range slider.
 *
 * When using this function, be sure to enqueue the related stylesheet and script.
 *
 * @param array<mixed>        $options The options for the range input.
 * @param array<string|mixed> $wrapper_attributes The HTML attributes to add to the fieldset.
 */
function get( array $options, array $wrapper_attributes = array() ): string {
	$provided_classes = $wrapper_attributes['class'] ?? ''; // use '' if class not set

	$wrapper_attributes['class'] = trim( 'two-handle-range-slider ' . $provided_classes );
	$attrs = join(
		' ',
		array_map(
			function ( $key ) use ( $wrapper_attributes ) {
				$value = $wrapper_attributes[ $key ];
				if ( is_bool( $value ) ) {
					return $value ? $key : '';
				}
				return $key . '="' . esc_attr( $value ) . '"';
			},
			array_keys( $wrapper_attributes )
		)
	);
	ob_start();
	?>
	<fieldset <?php echo wp_kses_data( $attrs ); ?>>
		<legend class="two-handle-range-slider-legend"><?php echo esc_html( $options['label'] ); ?></legend>
		<div class="aria-output <?php echo esc_html( $options['screen-reader-class'] ?? 'screen-reader-text' ); ?>" aria-live="polite"></div>
		<input class="slider slider-1" type="range" name="<?php echo esc_attr( $options['minName'] ); ?>" value="<?php echo esc_attr( $options['minValue'] ?? $options['min'] ?? '0' ); ?>" min="<?php echo esc_attr( $options['min'] ?? '0' ); ?>" max="<?php echo esc_attr( $options['max'] ?? '100' ); ?>" step="<?php echo esc_attr( $options['step'] ?? '1' ); ?>" aria-label="<?php echo esc_attr( $options['minHandleLabel'] ?? 'Range handle 1' ); ?>">
		<input class="slider slider-2" type="range" name="<?php echo esc_attr( $options['maxName'] ); ?>" value="<?php echo esc_attr( $options['maxValue'] ?? $options['max'] ?? '100' ); ?>" min="<?php echo esc_attr( $options['min'] ?? '0' ); ?>" max="<?php echo esc_attr( $options['max'] ?? '100' ); ?>" step="<?php echo esc_attr( $options['step'] ?? '1' ); ?>" aria-label="<?php echo esc_attr( $options['maxHandleLabel'] ?? 'Range handle 2' ); ?>">
	</fieldset>
	<?php
	$component = ob_get_contents();
	ob_clean();
	return $component;
}

/**
 * A function used to render the markup for a two handle range slider.
 *
 * @param array<mixed>        $options The options for the range input.
 * @param array<string|mixed> $wrapper_attributes The HTML attributes to add to the fieldset.
 */
function render( array $options, array $wrapper_attributes = array() ): void {
	echo wp_kses_post( get( $options, $wrapper_attributes ) );
}
