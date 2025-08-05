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

$image = '<figure class="wp-block-launchpad-blocks-cta-image">' . wp_get_attachment_image( $attributes['imageId'], 'full' ) . '</figure>';

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => $attributes['shouldShowImage'] ? 'has-image has-image-' . $attributes['imagePosition'] : '' ) ) ); ?>>
	<?php
	if ( $attributes['shouldShowImage'] && 'left' === $attributes['imagePosition'] ) {
		echo wp_kses_post( $image );
	}
	?>
	<div class="wp-block-launchpad-blocks-cta-inner-content">
		<<?php echo esc_html( $attributes['headerElement'] ); ?> class="cta-heading"><?php echo wp_kses_post( $attributes['headerContent'] ); ?></<?php echo esc_html( $attributes['headerElement'] ); ?>>
		<p class="cta-subtitle"><?php echo wp_kses_post( $attributes['textContent'] ); ?></p>
		<div class="cta-button-group">
			<?php
			foreach ( $attributes['buttons'] as $button ) :
				?>
				<a class="cta-button" href="<?php echo wp_kses_post( $button['href'] ); ?>" target="<?php echo wp_kses_post( $button['target'] ); ?>"><?php echo wp_kses_post( $button['label'] ); ?></a>
				<?php
			endforeach;
			?>
		</div>
	</div>
	<?php
	if ( $attributes['shouldShowImage'] && 'right' === $attributes['imagePosition'] ) {
		echo wp_kses_post( $image );
	}
	?>
</div>
