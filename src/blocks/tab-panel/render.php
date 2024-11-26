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

parse_str( isset( $_SERVER['QUERY_STRING'] ) ? sanitize_text_field( wp_unslash( $_SERVER['QUERY_STRING'] ) ) : '', $query_parameters );
$selected_panel = $query_parameters[ 'tabs_' . $block->context['launchpad/tabsGroupId'] ] ?? $block->context['launchpad/initiallySelectedTab'];
$is_selected_panel = $selected_panel === $attributes['id'];

?>
<section
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			'id' => $attributes['id'],
			'role' => 'tabpanel',
			'aria-labelledby' => $attributes['tab']['id'],
			'class' => $is_selected_panel ? 'is-selected' : '',
			'data-tabs-group-id' => $block->context['launchpad/tabsGroupId'],
			'tabindex' => '0',
		)
	)
);
?>
>
	<?php echo wp_kses_post( $content ); ?>
</section>
