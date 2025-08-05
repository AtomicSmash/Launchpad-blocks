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
<ol <?php echo wp_kses_data( get_block_wrapper_attributes( \LaunchpadBlocks\Fix\default_attributes( $block, $attributes ) ) ); ?>>
	<?php foreach ( $attributes['columns'] as $column ) : ?>
		<li class="numbered-columns-list-item">
			<<?php echo esc_html( $attributes['headerElement'] ); ?> class="numbered-columns-list-item-heading is-style-t-5"><?php echo wp_kses_post( $column['heading'] ); ?></<?php echo esc_html( $attributes['headerElement'] ); ?>>
			<p class="numbered-columns-list-item-text"><?php echo wp_kses_post( $column['text'] ); ?></p>
		</li>
	<?php endforeach; ?>
</ol>
