<?php
/**
 * Fix block defaults.
 */

namespace LaunchpadBlocks\Fix;

/**
 * Fix block supports with default attributes.
 *
 * Realistically this should be handled by WP so this may not be needed in the future.
 *
 * @param \WP_Block $block The instance of the WP_Block class that represents the block being rendered.
 * @param array     $attributes The array of attributes for this block.
 */
function default_attributes( \WP_Block $block, array $attributes ) {
	$block_attributes_definition = $block->block_type->attributes;
	$block_supports_definition = $block->block_type->supports;
	$fixed_attributes = array(
		'class' => array(),
	);

	$color_support = isset( $block_supports_definition['color'] ) ? $block_supports_definition['color'] : false;
	$supports_text_colour = true === $color_support || ( isset( $color_support['text'] ) && $color_support['text'] ) || ( is_array( $color_support ) && ! isset( $color_support['text'] ) );
	if ( $supports_text_colour && ( $attributes['textColor'] ?? null ) && ( $block_attributes_definition['textColor']['default'] ?? null ) === $attributes['textColor'] && ! isset( $block->parsed_block['textColor'] ) ) {
		$fixed_attributes['class'][] = 'has-text-color';
		$fixed_attributes['class'][] = 'has-' . $attributes['textColor'] . '-color';
	}
	$supports_background_colour = true === $color_support || ( isset( $color_support['background'] ) && $color_support['background'] ) || ( is_array( $color_support ) && ! isset( $color_support['background'] ) );
	if ( $supports_background_colour && ( $attributes['backgroundColor'] ?? null ) && ( $block_attributes_definition['backgroundColor']['default'] ?? null ) === $attributes['backgroundColor'] && ! isset( $block->parsed_block['backgroundColor'] ) ) {
		$fixed_attributes['class'][] = 'has-background';
		$fixed_attributes['class'][] = 'has-' . $attributes['backgroundColor'] . '-background-color';
	}

	$fixed_attributes['class'] = join( ' ', $fixed_attributes['class'] );
	return $fixed_attributes;
}
