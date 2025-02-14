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

global $wp;
$current_url = trailingslashit( home_url( $wp->request ) );
?>
<li <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'navigation-list-item' ) ) ); ?>>
	<a
		href="<?php echo esc_attr( $attributes['linkHref'] ?? '' ); ?>"
		target="<?php echo esc_attr( $attributes['linkTarget'] ); ?>"
		class="navigation-list-item-link"
		rel="<?php echo esc_attr( str_starts_with( $attributes['linkHref'] ?? '', get_site_url() ) ? 'noopener' : 'noopener noreferrer' ); ?>"
		aria-current="<?php echo $current_url === $attributes['linkHref'] ? 'true' : 'false'; ?>"
	>
		<?php
		echo wp_kses_post( $attributes['linkText'] ?? '' );
		if ( '_blank' === $attributes['linkTarget'] ) :
			?>
			<span class="screen-reader-text"> (opens in new tab)</span>
			<?php
		endif;
		?>
	</a>
</li>
