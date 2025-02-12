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

$wrapper_style = array();

if ( isset( $attributes['backgroundColour'] ) ) {
	$wrapper_style['--background-colour'] = $attributes['backgroundColour'];
}

if ( isset( $attributes['iconColour'] ) ) {
	$wrapper_style['--icon-colour'] = $attributes['iconColour'];
}

$has_prev_icon = isset( $attributes['prevIcon'] ) && $attributes['prevIcon']['iconName'] && $attributes['prevIcon']['library'];
$has_next_icon = isset( $attributes['nextIcon'] ) && $attributes['nextIcon']['iconName'] && $attributes['nextIcon']['library'];

$icon_renderers = apply_filters(
	'launchpad_blocks_icon_renderers',
	array(
		'launchpad-blocks' => function ( string $icon_name, array $attributes = array() ) {
			return \LaunchpadBlocks\Helpers\icon( $icon_name, $attributes );
		},
	)
);

?>
<div 
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			...\LaunchpadBlocks\Fix\default_attributes( $block, $attributes ),
			'data-carousel-navigation-arrows' => '',
			'style' => \LaunchpadBlocks\Helpers\convert_style_array_to_string( $wrapper_style ),
		)
	)
);
?>
>
	<button class="carousel-navigation-button" data-carousel-prev-slide>
		<?php
		echo $has_prev_icon ? wp_kses_post( $icon_renderers[ $attributes['prevIcon']['library'] ]( $attributes['prevIcon']['iconName'], array( 'class' => 'carousel-navigation-button-icon' ) ) ) : '';
		if ( $attributes['shouldShowTextVisually'] ) {
			echo wp_kses_post( $attributes['prevVisualText'] );
		}
		?>
	</button>
	<div class="carousel-navigation-inner-area">
		<?php echo wp_kses_post( $content ); ?>
	</div>
	<button class="carousel-navigation-button" data-carousel-next-slide>
		<?php
		if ( $attributes['shouldShowTextVisually'] ) {
			echo wp_kses_post( $attributes['nextVisualText'] );
		}
		echo $has_next_icon ? wp_kses_post( $icon_renderers[ $attributes['nextIcon']['library'] ]( $attributes['nextIcon']['iconName'], array( 'class' => 'carousel-navigation-button-icon' ) ) ) : '';
		?>
	</button>
</div>
