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

?>
<div
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array_merge(
			\CloudCall\Blocks\Fix\default_attributes( $block, $attributes ),
			array(
				'data-info-banner' => 'true',
				'data-banner-id' => $attributes['bannerId'],
				'data-is-dismissible' => $attributes['isDismissible'] ? 'true' : 'false',
				'style' => 'height: 0; overflow: auto; display: none;',
			)
		)
	)
);
?>
>
	<div class="info-banner-inner-content">
		<p><?php echo wp_kses_post( $attributes['text'] ); ?></p>
		<?php if ( $attributes['isDismissible'] ) : ?>
			<button type="button" aria-label="Dismiss banner" class="dismiss-button"><?php echo wp_kses_post( \CloudCall\Helpers\icon( 'menu-close-icon' ) ); ?></button>
		<?php endif; ?>
	</div>
</div>
