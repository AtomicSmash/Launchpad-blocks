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

if ( isset( $attributes['selectedOutlineColour'] ) ) {
	$wrapper_style['--selected-outline-colour'] = $attributes['selectedOutlineColour'];
}

?>
<div 
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			...\LaunchpadBlocks\Fix\default_attributes( $block, $attributes ),
			'data-carousel-thumbnails' => '',
			'style' => \LaunchpadBlocks\Helpers\convert_style_array_to_string( $wrapper_style ),
		)
	)
);
?>
>
	<?php
	foreach ( $block->context['launchpad-blocks/carouselImages'] as $index => $image ) {
		$is_selected = 0 === $index;
		?>
		<button type="button" class="reset carousel-thumbnail-button<?php echo esc_attr( $is_selected ? ' is-selected' : '' ); ?>" data-carousel-slide="<?php echo esc_html( $index ); ?>">
			<?php
			echo wp_get_attachment_image(
				$image['id'],
				apply_filters( 'launchpad_blocks_carousel_thumbnails_size', array( 190, 132 ) ),
				false,
				array(
					'class' => 'carousel-thumbnail',
					'alt' => '',
					'draggable' => 'false',
				)
			);
			?>
		</button>
		<?php
	}
	?>
</div>
