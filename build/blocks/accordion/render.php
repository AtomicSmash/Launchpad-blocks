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

$accordion_icon_function = apply_filters(
	'launchpad_blocks_accordion_icon',
	function ( $attributes ) {
		return \LaunchpadBlocks\Helpers\icon( 'accordion-arrow', $attributes );
	}
);

$parsed_content = new WP_HTML_Tag_Processor( $content );
$parsed_content->next_tag();
if ( $parsed_content->get_attribute( 'data-accordion' ) !== null ) {
	// Content is the same as the static block, so we need to strip out the code and only show the correct inner blocks.
	$new_content = '';
	$inner_blocks = $block->inner_blocks;
	foreach ( $inner_blocks as $inner_block ) {
		$new_content .= render_block( $inner_block->parsed_block );
	}
	$content = $new_content;
}

$heading_level = isset( $block->context['launchpad-blocks/accordion-heading-level'] ) ? $block->context['launchpad-blocks/accordion-heading-level'] : ( isset( $block->parsed_block['attrs']['headerElement'] ) ? $block->parsed_block['attrs']['headerElement'] : 'h2' );
?>
<div 
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			...\LaunchpadBlocks\Fix\default_attributes( $block, $attributes ),
			'data-launchpad-accordion' => '',
			'data-is-initially-open' => $attributes['isInitiallyOpen'] ? 'true' : 'false',
			'id' => $attributes['accordionId'],
		)
	)
);
?>
>
	<<?php echo esc_html( $heading_level ); ?>>
		<button aria-expanded="true" aria-controls="<?php echo esc_html( $attributes['accordionId'] ); ?>-panel" data-state="open" id="<?php echo esc_html( $attributes['accordionId'] ); ?>-trigger" class="accordion-header-button">
			<span class="accordion-header-button-text"><?php echo wp_kses_post( $attributes['headerContent'] ); ?></span>
			<div class="accordion-header-button-icon-wrapper"><?php echo wp_kses_post( $accordion_icon_function( array( 'class' => 'accordion-header-button-icon' ) ) ); ?></div>
		</button>
	</<?php echo esc_html( $heading_level ); ?>>
	<div role="region" data-state="open" aria-labelledby="<?php echo esc_html( $attributes['accordionId'] ); ?>-trigger" id="<?php echo esc_html( $attributes['accordionId'] ); ?>-panel" class="accordion-panel">
		<div class="accordion-panel-inner-wrapper">
			<?php echo wp_kses_post( $content ); ?>
		</div>
	</div>
</div>
