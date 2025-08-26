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

$wrapper_style = array();

if ( isset( $attributes['aspectRatio'] ) ) {
	$wrapper_style['--slide-aspect-ratio'] = $attributes['aspectRatio'];
}

$default_attributes = \LaunchpadBlocks\Fix\default_attributes( $block, $attributes );

?>
<ul
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			...$default_attributes,
			'data-carousel-slides' => '',
			'style' => \LaunchpadBlocks\Helpers\convert_style_array_to_string( $wrapper_style ),
			'class' => ( 'auto' !== $attributes['aspectRatio'] ? 'has-aspect-ratio ' : '' ) . $default_attributes['class'],
		)
	)
);
?>
>
	<?php echo wp_kses_post( $content ); ?>
</ul>
