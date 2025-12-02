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

$wrapper_style = array(
	'--icon-size' => isset( $attributes['size'] ) ? $attributes['size'] : '2rem',
);

$icon_renderers = LaunchpadBlocks\Helpers\get_icon_renderers();

$header_style = '';

if ( $attributes['headerStyle'] ) {
	$header_style = 'is-style-' . $attributes['headerStyle'];
}

?>
<div
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			...\LaunchpadBlocks\Fix\default_attributes( $block, $attributes ),
			'style' => \LaunchpadBlocks\Helpers\convert_style_array_to_string( $wrapper_style ),
		)
	)
);
?>
>
	<div class="icon">
		<?php
		if ( isset( $attributes['library'] ) && isset( $attributes['iconName'] ) ) {
			echo wp_kses_post( $icon_renderers[ $attributes['library'] ]( $attributes['iconName'] ) );
		}
		?>
	</div>
	<<?php echo esc_html( $attributes['headerElement'] ); ?> class="<?php echo esc_html( $header_style ); ?>">
	<?php echo wp_kses_post( $attributes['headerContent'] ); ?></<?php echo esc_html( $attributes['headerElement'] ); ?>>
	<?php echo wp_kses_post( $content ); ?>
</div>
