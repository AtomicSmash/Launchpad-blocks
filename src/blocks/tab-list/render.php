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
$title_id = $block->context['launchpad/tabsGroupId'] . '_tabs_title';

global $post;
$blocks = parse_blocks( $post->post_content );
$tab_group_block = \LaunchpadBlocks\Helpers\find_block_in_inner_blocks(
	$blocks,
	array(
		'blockName' => 'launchpad-blocks/tabs',
		'attrs' => array(
			'tabsGroupId' => $block->context['launchpad/tabsGroupId'],
		),
	)
);
if ( null === $tab_group_block ) :
	// This should never happen due to WP block json ancestor settings.
	$wp_error = new WP_Error( 'invalid', 'Tab list must only be used inside a Tabs block.' );
	echo esc_html( $wp_error->get_error_message() );
else :
	$tab_panel_group_block = \LaunchpadBlocks\Helpers\find_block_in_inner_blocks( $tab_group_block['innerBlocks'], array( 'blockName' => 'launchpad-blocks/tab-panel-group' ) );
	if ( null === $tab_panel_group_block ) :
		$wp_error = new WP_Error( 'invalid', 'Tab list must be accompanied by a Tab panel group block' );
		echo esc_html( $wp_error->get_error_message() );
	else :
		$tab_panels = $tab_panel_group_block['innerBlocks'];
		?>
		<div
		<?php
		echo wp_kses_data(
			get_block_wrapper_attributes(
				array_merge(
					array(
						'role' => 'tablist',
					),
					$block->context['launchpad/shouldShowTabSectionTitle'] ? array( 'aria-labelledby' => $title_id ) : array( 'aria-label' => $block->context['launchpad/title'] )
				)
			)
		);
		?>
		>
			<?php
			$i = 0;
			foreach ( $tab_panels as $tab_panel ) :
				$tab_href_params = $query_parameters;
				$tab_href_params[ 'tabs_' . $block->context['launchpad/tabsGroupId'] ] = rawurlencode( $tab_panel['attrs']['id'] );
				?>
				<a
					role="tab"
					class="tab"
					id="<?php echo wp_kses_data( $tab_panel['attrs']['tab']['id'] ); ?>"
					href="?<?php echo wp_kses_data( http_build_query( $tab_href_params ) ); ?>"
					aria-selected="<?php echo ( ( $selected_panel === $tab_panel['attrs']['id'] || ( 0 === $i && '' === $selected_panel ) ) ? 'true' : 'false' ); ?>"
					aria-controls="<?php echo wp_kses_data( $tab_panel['attrs']['id'] ); ?>"
					>
					<?php echo wp_kses_post( $tab_panel['attrs']['tab']['label'] ); ?>
				</a>
				<?php
				++$i;
			endforeach;
			?>
		</div>
		<?php
	endif;
endif;
