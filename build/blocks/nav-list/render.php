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

if ( ! \LaunchpadBlocks\Blocks\Custom\NavigationList\is_shown( $block ) ) {
	return;
}

$aria_attributes = array();
if ( ! $attributes['isNestedInAnotherNavLink'] ) {
	if ( isset( $attributes['ariaLabel'] ) && ! empty( $attributes['ariaLabel'] ) ) {
		$aria_attributes['aria-label'] = $attributes['ariaLabel'];
	} elseif ( isset( $block->context['launchpad-blocks/navListContext'] ) && ! empty( $block->context['launchpad-blocks/navListContext'] ) ) {
		$aria_attributes['aria-label'] = $block->context['launchpad-blocks/navListContext'];
	} elseif ( isset( $block->context['launchpad-blocks/navListContextLabelledBy'] ) && ! empty( $block->context['launchpad-blocks/navListContextLabelledBy'] ) ) {
		$aria_attributes['aria-labelledby'] = $block->context['launchpad-blocks/navListContextLabelledBy'];
	}
}

$block_wrapper_attributes = (
	get_block_wrapper_attributes(
		array_merge(
			\LaunchpadBlocks\Fix\default_attributes( $block, $attributes ),
			array(
				'data-navigation-nav-list' => true,
				...$aria_attributes,
				'class' => 'horizontal' === $attributes['linkOrientation'] ? 'is-horizontal' : 'is-vertical',
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
