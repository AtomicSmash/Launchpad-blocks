<?php
/**
 * Block render file.
 *
 * This is the file which is used to render the block on the front end.
 */

/**
 * Attributes
 *
 * @var array $attributes The array of attributes for this block.
 */
$attributes = $attributes;
/**
 * Content
 *
 * @var string $content Rendered block output from the Save component. e.g. <InnerBlocks.Content />.
 */
$content = $content;
/**
 * WP_Block
 *
 * @var WP_Block $block The instance of the WP_Block class that represents the block being rendered.
 */
$block = $block;

$all_palettes = array();
foreach ( array(
	wp_get_global_settings()['color']['palette']['default'] ?? array(),
	wp_get_global_settings()['color']['palette']['theme'] ?? array(),
	wp_get_global_settings()['color']['palette']['user'] ?? array(),
) as $palette ) {
	foreach ( $palette as $colour ) {
		$all_palettes[ $colour['slug'] ] = array(
			'name' => $colour['name'],
			'color' => $colour['color'],
		);
	}
}

$wrapper_style = array();
$wrapper_classes = array();

if ( isset( $attributes['style'] ) ) {
	if ( $attributes['style']['background'] ) {
		if ( $attributes['style']['background']['backgroundImage'] ) {
			$wrapper_classes[] = 'has-bg-image';
			$wrapper_style['background-image'] = 'url(' . ( isset( $attributes['style']['background']['backgroundImage']['id'] ) ? wp_get_attachment_image_src( $attributes['style']['background']['backgroundImage']['id'], 'full' )[0] : $attributes['style']['background']['backgroundImage']['url'] ) . ');';
			if ( isset( $attributes['overlayOpacity'] ) ) {
				$wrapper_style['--overlay-opacity'] = $attributes['overlayOpacity'] . '%';
			}
		}
	}
}

if ( isset( $attributes['backgroundOrOverlayColour'] ) ) {
	$background_or_overlay_slug = array_find_key(
		$all_palettes,
		function ( $value ) use ( $attributes ) {
			return $value['color'] === $attributes['backgroundOrOverlayColour'];
		}
	);

	if ( $background_or_overlay_slug ) {
		$wrapper_classes[] = 'has-background-color has-' . $background_or_overlay_slug . '-background-color';
	}
}

?>
<li
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			'style' => \LaunchpadBlocks\Helpers\convert_style_array_to_string( $wrapper_style ),
			'class' => join( ' ', $wrapper_classes ),
		)
	)
);
?>
>
	<?php echo wp_kses_post( $content ); ?>
</li>
