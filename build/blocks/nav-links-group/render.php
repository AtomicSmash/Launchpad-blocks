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

if ( ! \LaunchpadBlocks\Blocks\Custom\NavLinksGroup\is_shown( $block ) ) {
	return;
}

$has_linked_title = isset( $attributes['linkHref'] );
if ( $has_linked_title ) {
	$is_title_link_active = \LaunchpadBlocks\Blocks\Custom\NavigationMenuItem\is_active( $attributes );
}

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<?php
	if ( $has_linked_title && ( $attributes['headerContent'] ?? '' ) !== '' ) :
		?>
		<a
			href="<?php echo esc_attr( $attributes['linkHref'] ?? '' ); ?>"
			target="<?php echo esc_attr( $attributes['linkTarget'] ); ?>"
			class="navigation-list-item-link nav-links-group-heading-link<?php echo $is_title_link_active ? ' current-menu-item' : ''; ?>"
			rel="<?php echo esc_attr( str_starts_with( $attributes['linkHref'] ?? '', get_site_url() ) ? 'noopener' : 'noopener noreferrer' ); ?>"
			aria-current="<?php echo $is_title_link_active ? 'true' : 'false'; ?>"
		>
		<?php
	endif;
	if ( ( $attributes['headerContent'] ?? '' ) !== '' ) :
		?>
		<<?php echo esc_html( $attributes['headerElement'] ); ?> class="nav-links-group-heading is-style-reset">
			<?php
			echo wp_kses_post( $attributes['headerContent'] );
			if ( $has_linked_title && '_blank' === $attributes['linkTarget'] ) :
				?>
				<span class="screen-reader-text"> (opens in new tab)</span>
				<?php
			endif;
			?>
		</<?php echo esc_html( $attributes['headerElement'] ); ?>>
		<?php
	endif;
	if ( $has_linked_title ) :
		?>
		</a>
		<?php
	endif;
	echo wp_kses_post( $content );
	?>
</div>
