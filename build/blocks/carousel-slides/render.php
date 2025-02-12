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

if ( isset( $attributes['aspectRatio'] ) && 'auto' !== $attributes['aspectRatio'] && isset( $attributes['imageFit'] ) ) {
	$wrapper_style['--slide-image-fit'] = $attributes['imageFit'];
}

if ( isset( $attributes['captionBackground'] ) ) {
	$wrapper_style['--caption-background'] = $attributes['captionBackground'];
}

?>
<div 
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			...\LaunchpadBlocks\Fix\default_attributes( $block, $attributes ),
			'data-carousel-slides' => '',
			'style' => \LaunchpadBlocks\Helpers\convert_style_array_to_string( $wrapper_style ),
			'class' => 'auto' !== $attributes['aspectRatio'] ? 'has-aspect-ratio' : '',
		)
	)
);
?>
>
<?php
if ( $attributes['shouldPullImagesFromContext'] ) :
	$carousel_images = $block->context['launchpad-blocks/carouselImages'];
	foreach ( $carousel_images as $carousel_image ) :
		?>
		<figure class="wp-block-image size-full">
			<?php echo wp_get_attachment_image( $carousel_image['id'], 'full' ); ?>
		</figure>
		<?php
	endforeach;
else :
	echo wp_kses_post( $content );
endif;
?>
</div>
