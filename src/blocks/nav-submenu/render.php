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
?>
<li 
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			'class' => 'navigation-list-item',
			'data-navigation-sub-menu' => '',
		)
	)
);
?>
>
	<button class="menu-group-list-item-submenu-button" data-state="closed" data-navigation-sub-menu-toggle>
		<?php
		echo wp_kses_post( $attributes['linkText'] ?? '' );
		echo wp_kses_data( \LaunchpadBlocks\Helpers\icon( 'accordion-arrow', array( 'class' => 'sub-menu-label-arrow' ) ) );
		?>
	</button>
	<div class="menu-group-list-item-submenu" data-navigation-sub-menu-content hidden>
		<?php echo wp_kses_post( $content ); ?>
	</div>
</li>
