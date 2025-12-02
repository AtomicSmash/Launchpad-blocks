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

if ( ! \LaunchpadBlocks\Blocks\Custom\NavigationSubMenu\is_shown( $attributes ) ) {
	return;
}

global $wp;
$current_url = trailingslashit( home_url( $wp->request ) );

$icon_renderers = LaunchpadBlocks\Helpers\get_icon_renderers();

$has_current_menu_item_as_child = \LaunchpadBlocks\Blocks\Custom\NavigationSubMenu\has_current_menu_item_as_child( $block, $current_url );

$inner_blocks_count = count( $block->inner_blocks );

$wrapper_style = array(
	'--column-count' => min( $attributes['columnCount'], $inner_blocks_count ) ?? '1',
	'--column-width' => ( $attributes['columnWidth'] ?? '14' ) . 'rem',
);

$submenu_icon = $icon_renderers[ $attributes['icon']['library'] ]( $attributes['icon']['iconName'], array( 'class' => 'sub-menu-label-arrow' ) );

?>
<li
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array(
			'class' => 'navigation-list-item' . ( $has_current_menu_item_as_child ? ' has-current-menu-item-as-child' : '' ),
			'data-navigation-sub-menu' => '',
			'style' => \LaunchpadBlocks\Helpers\convert_style_array_to_string( $wrapper_style ),
		)
	)
);
?>
>
	<button class="reset menu-group-list-item-submenu-button" data-state="closed" data-navigation-sub-menu-toggle aria-expanded="false" aria-controls="<?php echo esc_attr( $attributes['subMenuId'] ); ?>">
		<?php
		if ( 'start' === $attributes['iconLocation'] ) {
			echo wp_kses_post( $submenu_icon );
		}
		echo wp_kses_post( $attributes['linkText'] ?? '' );
		if ( 'end' === $attributes['iconLocation'] ) {
			echo wp_kses_post( $submenu_icon );
		}
		?>
	</button>
	<div class="menu-group-list-item-submenu" data-navigation-sub-menu-content hidden id="<?php echo esc_attr( $attributes['subMenuId'] ); ?>">
		<?php echo wp_kses_post( $content ); ?>
		<div class="submenu-arrow" data-navigation-sub-menu-arrow></div>
	</div>
</li>
