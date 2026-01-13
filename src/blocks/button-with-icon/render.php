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

$is_link = isset( $attributes['linkHref'] );

$is_active = $is_link ? \LaunchpadBlocks\Blocks\Custom\NavigationMenuItem\is_active( $attributes ) : false;

$wrapper_style = array(
	'--icon-size' => isset( $attributes['size'] ) ? $attributes['size'] : '1rem',
);

$icon_renderers = LaunchpadBlocks\Helpers\get_icon_renderers();

$default_attributes = \LaunchpadBlocks\Fix\default_attributes( $block, $attributes );

$icon_html = '';
if ( isset( $attributes['library'], $attributes['iconName'] ) ) {
	$icon_html = '<div class="icon">' .
		wp_kses_post( $icon_renderers[ $attributes['library'] ]( $attributes['iconName'] ) ) .
	'</div>';
}
$block_wrapper_attributes = get_block_wrapper_attributes(
	array(
		...$default_attributes,
		'class' => ( ! empty( $default_attributes['class'] ) ? $default_attributes['class'] : '' ) . ( $is_active ? ' is-active' : '' ),
		'style' => \LaunchpadBlocks\Helpers\convert_style_array_to_string( $wrapper_style ),
		'id' => $attributes['anchor'] ?? null,
	)
);
?>
<?php if ( $is_link ) : ?>
<a
	<?php
	echo wp_kses_data(
		$block_wrapper_attributes
	);
	?>
		href="<?php echo esc_attr( $attributes['linkHref'] ?? '' ); ?>"
		target="<?php echo esc_attr( $attributes['linkTarget'] ); ?>"
		rel="<?php echo esc_attr( str_starts_with( $attributes['linkHref'] ?? '', get_site_url() ) ? 'noopener' : 'noopener noreferrer' ); ?>"
		aria-current="<?php echo $is_active ? 'true' : 'false'; ?>"
>
	<?php if ( 'start' === $attributes['iconPosition'] ) : ?>
		<?php echo wp_kses_post( $icon_html ); ?>
	<?php endif; ?>
	<?php
	echo wp_kses_post( $attributes['linkText'] ?? '' );
	if ( '_blank' === $attributes['linkTarget'] ) :
		?>
		<span class="screen-reader-text"> (opens in new tab)</span>
		<?php
	endif;
	?>
	<?php if ( 'end' === $attributes['iconPosition'] ) : ?>
		<?php echo wp_kses_post( $icon_html ); ?>
	<?php endif; ?>
</a>

<?php else : ?>

<button
	<?php
	echo wp_kses_data(
		$block_wrapper_attributes
	);
	?>
			>
	<?php if ( 'start' === $attributes['iconPosition'] ) : ?>
		<?php echo wp_kses_post( $icon_html ); ?>
	<?php endif; ?>
	<?php echo wp_kses_post( $attributes['linkText'] ?? '' ); ?>
	<?php if ( 'end' === $attributes['iconPosition'] ) : ?>
		<?php echo wp_kses_post( $icon_html ); ?>
	<?php endif; ?>
</button>

<?php endif; ?>
