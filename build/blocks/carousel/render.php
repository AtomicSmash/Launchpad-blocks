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

$is_externally_controlled_carousel = ( $block->context['launchpad-blocks/externallyControlledCarousel'] ?? false ) || ( $attributes['externallyControlledCarousel'] ?? false );

?>
<div
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			...\Launchpad\Blocks\Fix\default_attributes( $block, $attributes ),
			'data-launchpad-carousel' => '',
			'data-loop' => $attributes['shouldLoop'] ? 'true' : 'false',
			'data-has-lightbox' => $attributes['shouldLinkSlidesToLightbox'] ? 'true' : 'false',
			'data-externally-controlled-carousel' => $is_externally_controlled_carousel ? 'true' : 'false',
		)
	)
);
?>
>
	<div aria-live="polite" aria-atomic="true" class="screen-reader-text" data-carousel-live-region></div>
	<?php echo wp_kses_post( $content ); ?>
</div>
