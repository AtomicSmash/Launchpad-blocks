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

global $wp;
$current_url = trailingslashit( home_url( $wp->request ) );

$nav_submenu_dropdown_icon_function = apply_filters(
	'launchpad_blocks_nav_submenu_dropdown_icon',
	function ( $attributes ) {
		return \LaunchpadBlocks\Helpers\icon( 'accordion-arrow', $attributes );
	}
);

$has_current_menu_item_as_child = \LaunchpadBlocks\Blocks\Custom\NavigationSubMenu\has_current_menu_item_as_child( $block, $current_url );

?>
<li 
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			'class' => 'navigation-list-item' . ( $has_current_menu_item_as_child ? ' has-current-menu-item-as-child' : '' ),
			'data-navigation-sub-menu' => '',
		)
	)
);
?>
>
	<button class="reset menu-group-list-item-submenu-button" data-state="closed" data-navigation-sub-menu-toggle aria-expanded="false" aria-controls="<?php echo esc_attr( $attributes['subMenuId'] ); ?>">
		<?php
		echo wp_kses_post( $attributes['linkText'] ?? '' );
		echo wp_kses_post( $nav_submenu_dropdown_icon_function( array( 'class' => 'sub-menu-label-arrow' ) ) );
		?>
	</button>
	<div class="menu-group-list-item-submenu" data-navigation-sub-menu-content hidden id="<?php echo esc_attr( $attributes['subMenuId'] ); ?>">
		<?php echo wp_kses_post( $content ); ?>
	</div>
</li>
