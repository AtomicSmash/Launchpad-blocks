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

$parsed_content = new WP_HTML_Tag_Processor( $content );
$parsed_content->next_tag();
if ( $parsed_content->get_attribute( 'data-accordion-group' ) !== null ) {
	// Content is the same as the static block, so we need to strip out the code and only show the correct inner blocks.
	$new_content = '';
	$inner_blocks = $block->inner_blocks;
	foreach ( $inner_blocks as $inner_block ) {
		$new_content .= render_block( $inner_block->parsed_block );
	}
	$content = $new_content;
}

?>
<div 
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			...\LaunchpadBlocks\Fix\default_attributes( $block, $attributes ),
			'id' => $attributes['accordionGroupId'],
			'data-accordion-group' => '',
			'data-is-multiple' => $attributes['isMultiple'] ? 'true' : 'false',
		)
	)
);
?>
>
	<?php echo wp_kses_post( $content ); ?>
</div>
