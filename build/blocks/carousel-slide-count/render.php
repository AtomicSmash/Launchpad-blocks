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

$slides = array();
if ( isset( $block->context['launchpad-blocks/carouselSlides'] ) && count( $block->context['launchpad-blocks/carouselSlides'] ) > 0 ) {
	$slides = $block->context['launchpad-blocks/carouselSlides'];
} else {
	$slides = $block->context['launchpad-blocks/carouselImages'];
}

?>
<div
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			...\LaunchpadBlocks\Fix\default_attributes( $block, $attributes ),
			'data-carousel-slide-count' => '',
		)
	)
);
?>
>
	<?php
	if ( isset( $attributes['prefix'] ) && ! empty( $attributes['prefix'] ) ) :
		?>
		<span><?php echo wp_kses_post( $attributes['prefix'] ); ?></span>
		<?php
	endif;
	?>
	<span data-current-slide-number>1</span>
	<?php
	if ( isset( $attributes['betweenText'] ) && ! empty( $attributes['betweenText'] ) ) :
		?>
		<span><?php echo wp_kses_post( $attributes['betweenText'] ); ?></span>
		<?php
	else :
		?>
		<span>/</span>
		<?php
	endif;
	?>
	<?php echo esc_html( count( $slides ) ); ?>
	<?php
	if ( isset( $attributes['suffix'] ) && ! empty( $attributes['suffix'] ) ) :
		?>
		<span><?php echo wp_kses_post( $attributes['suffix'] ); ?></span>
		<?php
	endif;
	?>
</div>
