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
<div 
<?php
echo wp_kses_data(
	get_block_wrapper_attributes(
		array_merge(
			\LaunchpadBlocks\Fix\default_attributes( $block, $attributes ),
			array(
				'class' => 'menu-js-loading',
				'data-navigation' => true,
				'data-state' => 'closed',
				'data-nav-id' => esc_attr( $attributes['navId'] ),
			)
		)
	)
);
?>
>
	<button
		class="navigation-content-toggle"
		data-navigation-content-toggle
		aria-haspopup="true"
		aria-expanded="false"
		aria-controls="<?php echo esc_attr( $attributes['navId'] ); ?>-navigation-content"
		data-state="closed"
	>
		<span class="text-to-open-menu">
			Menu
			<?php echo wp_kses_data( \LaunchpadBlocks\Helpers\icon( 'menu-open-icon', array( 'class' => 'navigation-content-toggle-icon navigation-content-toggle-icon--open' ) ) ); ?>
		</span>
		<span class="text-to-close-menu">
			Close
			<?php echo wp_kses_data( \LaunchpadBlocks\Helpers\icon( 'menu-close-icon', array( 'class' => 'navigation-content-toggle-icon navigation-content-toggle-icon--close' ) ) ); ?>
		</span>
	</button>
	<div class="navigation-content" id="<?php echo esc_attr( $attributes['navId'] ); ?>-navigation-content" data-navigation-content data-state="closed">
		<?php echo wp_kses_post( $content ); ?>
	</div>
</div>
