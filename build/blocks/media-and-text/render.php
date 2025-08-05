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
			\LaunchpadBlocks\Fix\default_attributes( $block, $attributes ),
			array(
				'class' => 'alignfull' . ( $attributes['hasBackground'] ? ' has-background' : '' ) . ( $attributes['shouldBreakOutMedia'] ? ' is-breakout is-breakout-' . $attributes['mediaPosition'] : '' ),
			)
		)
	)
);
?>
	>
	<div class="wp-block-launchpad-blocks-media-and-text__wrapper">
		<?php if ( 'right' === $attributes['mediaPosition'] ) : ?>
			<div class="wp-block-launchpad-blocks-media-and-text__content">
				<?php echo wp_kses_post( $content ); ?>
			</div>
		<?php endif; ?>

		<figure>
			<?php if ( 0 !== $attributes['imageId'] ) : ?>
				<?php echo wp_get_attachment_image( $attributes['imageId'], 'full', false, array( 'class' => 'wp-block-launchpad-blocks-media-and-text__image' ) ); ?>
			<?php endif; ?>
		</figure>

		<?php if ( 'left' === $attributes['mediaPosition'] ) : ?>
			<div class="wp-block-launchpad-blocks-media-and-text__content">
				<?php echo wp_kses_post( $content ); ?>
			</div>
		<?php endif; ?>
	</div>
</div>
