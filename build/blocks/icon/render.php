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

$icon_renderers = apply_filters(
	'launchpad_blocks_icon_renderers',
	array(
		'launchpad-blocks' => function ( string $icon_name, array $attributes = array() ) {
			return \LaunchpadBlocks\Helpers\icon( $icon_name, $attributes );
		},
	)
);
?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes( \LaunchpadBlocks\Fix\default_attributes( $block, $attributes ) ) ); ?>>
	<?php
		echo wp_kses_post( $icon_renderers[ $attributes['library'] ]( $attributes['iconName'] ) );
	?>
</div>
