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

if ( isset( $attributes['templatePartSlug'] ) ) {
	$template_found = get_template_part( $attributes['templatePartSlug'], isset( $attributes['templatePartName'] ) && ! empty( $attributes['templatePartName'] ) ? $attributes['templatePartName'] : null, $args );
	if ( false === $template_found ) {
		echo 'Template not found. Please check the template slug in the sidebar.';
	}
} else {
	echo 'Please enter the template slug in the sidebar.';
}
