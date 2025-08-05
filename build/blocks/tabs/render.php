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

$title_level = $attributes['titleLevel'];
$title_tag = '0' !== $title_level ? 'h' . $title_level : 'p';
$title_id = $attributes['tabsGroupId'] . '_tabs_title';

?>
<div
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			'data-launchpad-tabs-group' => 'true',
			'data-tabs-group-id' => $attributes['tabsGroupId'],
		)
	)
);
?>
>
	<?php
	if ( $attributes['shouldShowTabSectionTitle'] ) {
		echo wp_kses_post( sprintf( '<' . $title_tag . ' id="' . $title_id . '" class="tab-title">%s</' . $title_tag . '>', $attributes['title'] ) );
	}
	?>
	<div class="wp-block-launchpad-blocks-tabs-content-wrapper">
		<?php echo wp_kses_post( $content ); ?>
	</div>
</div>
