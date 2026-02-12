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

$args = \LaunchpadBlocks\Blocks\Custom\PHPTemplatePart\translate_object_with_field_types( $attributes['args'] );

$template_part_slug = $attributes['templatePartSlug'];
$template_part_name = isset( $attributes['templatePartName'] ) && ! empty( $attributes['templatePartName'] ) ? $attributes['templatePartName'] : null;

if ( isset( $attributes['supportedDynamicTags'] ) && count( $attributes['supportedDynamicTags'] ) ) {
	$supported_dynamic_tags = apply_filters( 'launchpad_blocks_php_template_part_block_supported_dynamic_tags', $attributes['supportedDynamicTags'] );
	foreach ( $supported_dynamic_tags as $dynamic_tag_info ) {
		$dynamic_tag = $dynamic_tag_info['tag'];
		$value = $dynamic_tag_info['value'];
		$template_part_slug = str_replace( $dynamic_tag, $value, $template_part_slug );
		if ( $template_part_name ) {
			$template_part_name = str_replace( $dynamic_tag, $value, $template_part_name );
		}
	}
}

if ( isset( $template_part_slug ) ) {
	$template_found = get_template_part( $template_part_slug, $template_part_name, $args );
	if ( false === $template_found ) {
		echo 'Template not found. Please check the template slug in the sidebar.';
	}
} else {
	echo 'Please enter the template slug in the sidebar.';
}
