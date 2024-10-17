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

/**
 * The selected banners.
 *
 * @var \WP_Post[] An array of post objects.
 */
$selected_banners = get_field( 'selected_global_banners', 'option' );
$selected_banners = is_array( $selected_banners ) ? $selected_banners : array();

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes( \LaunchpadBlocks\Fix\default_attributes( $block, $attributes ) ) ); ?>>
	<?php
	foreach ( $selected_banners as $selected_banner ) {
		$banner_id = get_post_meta( $selected_banner->ID, '_banner_id', true ) ?? '';
		echo wp_kses_post( str_replace( 'data-global-banner="true"', 'data-global-banner="true" data-banner-id="' . $banner_id . '"', do_blocks( $selected_banner->post_content ) ) );
	}
	?>
</div>
