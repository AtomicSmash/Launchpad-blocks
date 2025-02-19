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

$lightbox_close_icon_function = apply_filters(
	'launchpad_blocks_lightbox_close_icon',
	function ( $attributes ) {
		return \LaunchpadBlocks\Helpers\icon( 'menu-close-icon', $attributes );
	}
);

?>
<dialog 
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			...\LaunchpadBlocks\Fix\default_attributes( $block, $attributes ),
			'data-lightbox' => '',
		)
	)
);
?>
>
	<button
		type="button"
		class="reset lightbox-close-button"
		data-lightbox-close-button
		autofocus
		aria-label="Close lightbox"
	>
		<?php echo wp_kses_post( $lightbox_close_icon_function( array() ) ); ?>
	</button>
	<?php echo wp_kses_post( $content ); ?>
</dialog>
