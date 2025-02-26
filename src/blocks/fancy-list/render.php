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

// Check for empty list items and return early if there's no content
$list_block_is_empty = true;
foreach ( $block->inner_blocks as $inner_block ) {
	if ( isset( $inner_block->parsed_block['attrs']['textContent'] ) && ! empty( $inner_block->parsed_block['attrs']['textContent'] ) ) {
		$list_block_is_empty = false;
		break;
	}
}
if ( $list_block_is_empty ) {
	return;
}

$is_marker_type = 'ul' === $attributes['type'] && 'normal' === $attributes['markerType'];
$has_marker_colour = isset( $attributes['markerColour'] ) && $attributes['markerColour'];
$has_marker_inner_colour = isset( $attributes['markerInnerColour'] ) && $attributes['markerInnerColour'] && ! $is_marker_type;

$should_have_icon = 'ul' === $attributes['type'] && 'icon' === $attributes['markerType'];

$wrapper_class = array();
$wrapper_style = array(
	'--column-count' => isset( $attributes['columnCount'] ) ? $attributes['columnCount'] : 1,
);


if ( $has_marker_colour ) {
	$wrapper_class[] = 'has-marker-colour';
	$wrapper_style['--marker-colour'] = $attributes['markerColour'];
}

if ( $has_marker_inner_colour ) {
	$wrapper_class[] = 'has-marker-inner-colour';
	$wrapper_style['--marker-inner-colour'] = $attributes['markerInnerColour'];
}

if ( $should_have_icon ) {
	$wrapper_class[] = 'should-have-icon';
}


$block_wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => join( ' ', $wrapper_class ),
		'style' => \LaunchpadBlocks\Helpers\convert_style_array_to_string( $wrapper_style ),
	)
);
?>
<<?php echo 'ul' === $attributes['type'] ? 'ul' : 'ol'; ?> <?php echo wp_kses_data( $block_wrapper_attributes ); ?>>
	<?php echo wp_kses_post( $content ); ?>
</<?php echo 'ul' === $attributes['type'] ? 'ul' : 'ol'; ?>>
