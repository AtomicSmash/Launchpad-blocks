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

$block_wrapper_attributes = (
	get_block_wrapper_attributes(
		array_merge(
			\LaunchpadBlocks\Fix\default_attributes( $block, $attributes ),
			array(
				'data-navigation-nav-list' => true,
				...( ! $attributes['isNestedInAnotherNavLink'] ? array( 'aria-label' => $attributes['ariaLabel'] ) : array() ),
			),
		)
	)
);
if ( $attributes['isNestedInAnotherNavLink'] ) {
	echo '<div ' . wp_kses_data( $block_wrapper_attributes ) . '>';
} else {
	echo '<nav ' . wp_kses_data( $block_wrapper_attributes ) . '>';
}
?>


	<ul class="navigation-nav-list">
		<?php echo wp_kses_post( $content ); ?>
	</ul>
<?php
if ( $attributes['isNestedInAnotherNavLink'] ) {
	echo '</div>';
} else {
	echo '</nav>';
}
