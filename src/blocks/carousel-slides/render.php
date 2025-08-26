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
<ul
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
if ( $attributes['shouldPullImagesFromContext'] ) {
	$context_images = $block->context['launchpad-blocks/carouselImages'];
	$carousel_images = array();
	foreach ( $context_images as $context_image ) {
		// There's no PHP function to recreate the figure structure of the image block, so we have to manually recreate it.
		$carousel_images[] = '<figure class=\"wp-block-image size-full\">' . wp_get_attachment_image( $context_image['id'], 'full' ) . '</figure>';
	}
} else {
	$carousel_slide_inner_blocks = $block->inner_blocks;
	$carousel_images = array();
	foreach ( $carousel_slide_inner_blocks as $carousel_slide_inner_block ) {
		$carousel_images[] = render_block( $carousel_slide_inner_block->parsed_block );
	}
}
$i = 0;
foreach ( $carousel_images as $carousel_image ) :
	?>
	<li>
		<?php
		if ( $block->context['launchpad-blocks/shouldLinkSlidesToLightbox'] ) {
			echo wp_kses_post( '<button type="button" class="reset" data-lightbox-open-button data-jump-to-slide="' . $i . '" aria-label="Open lightbox at slide ' . ( $i + 1 ) . '">' . $carousel_image . '</button>' );
		} else {
			echo wp_kses_post( $carousel_image );
		}
		++$i;
		?>
	</li>
	<?php
endforeach;
?>
</ul>
