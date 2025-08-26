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
			'data-carousel-dots' => '',
		)
	)
);
?>
>
	<?php
	foreach ( $slides as $index => $slide ) {
		$is_selected = 0 === $index;
		?>
		<button type="button" class="reset carousel-dot-button<?php echo esc_attr( $is_selected ? ' is-selected' : '' ); ?>" data-carousel-slide="<?php echo esc_html( $index ); ?>" aria-label="Jump to slide <?php echo esc_html( $index + 1 ); ?>">
		</button>
		<?php
	}
	?>
</div>
