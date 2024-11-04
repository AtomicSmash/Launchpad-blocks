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

$selected_post_ids = array();
$selected_post_types = array();
foreach ( $attributes['selectedPosts'] as $selected_post ) {
	$selected_post_ids[] = $selected_post['id'];
	$selected_post_types[] = $selected_post['postType'];
}
if ( ! empty( $selected_post_ids ) ) {
	$selected_posts_query = new WP_Query(
		array(
			'post_status' => 'publish',
			'orderby' => 'post__in',
			'post_type' => $selected_post_types,
			'post__in' => $selected_post_ids,
			'posts_per_page' => $attributes['postsToShow'],
		)
	);
}

$posts_to_fill = $attributes['postsToShow'] - ( isset( $selected_posts_query ) ? $selected_posts_query->found_posts : 0 );

$should_fill_posts = $attributes['shouldFillRemainingSpots'] && $posts_to_fill > 0;

if ( $should_fill_posts ) {
	$tax_query_array = array(
		'relation' => $attributes['taxonomyAndTermInfoAutoPostsQuery']['relationship'],
	);

	foreach ( $attributes['taxonomyAndTermInfoAutoPostsQuery']['taxonomies'] as $selected_taxonomy_slug => $selected_taxonomy_value ) {
		$tax_query_array[ $selected_taxonomy_slug ] = array(
			'taxonomy' => $selected_taxonomy_slug,
			'operator' => 'AND' === $selected_taxonomy_value['operator'] ? 'AND' : 'IN',
			'field'    => 'id',
			'terms' => array_reduce(
				$selected_taxonomy_value['terms'],
				function ( $previous_value, $current_value ) {
					$previous_value[] = $current_value['id'];
					return $previous_value;
				},
				array(),
			),
		);
	}
	
	$autofill_posts_query = new WP_Query(
		array(
			'post_status' => 'publish',
			'orderby' => 'slug' === $attributes['orderAutoPostsQuery']['by'] ? 'name' : ( 'id' === $attributes['orderAutoPostsQuery']['by'] ? 'ID' : $attributes['orderAutoPostsQuery']['by'] ),
			'order' => strtoupper( $attributes['orderAutoPostsQuery']['direction'] ),
			'post_type' => $attributes['selectedPostTypesAutoPostsQuery'],
			'search' => $attributes['searchInputAutoPostsQuery'],
			'post__not_in' => array_merge( $selected_post_ids, $attributes['shouldExcludeCurrentPost'] ? array( get_the_ID() ) : array() ),
			'posts_per_page' => $posts_to_fill,
			// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query -- We need to allow this as an option to match Query Loop
			'tax_query' => $tax_query_array,
		)
	);
}
if ( $should_fill_posts ) {
	$selected_post_count = isset( $selected_posts_query ) ? $selected_posts_query->found_posts : 0;
	$autofill_post_count = isset( $autofill_posts_query ) ? $autofill_posts_query->found_posts : 0;
	$total_posts = (int) min( $selected_post_count + $autofill_post_count, (int) $attributes['postsToShow'] );
} else {
	$total_posts = isset( $selected_posts_query ) ? $selected_posts_query->found_posts : 0;
}
$should_wrap_in_list = $total_posts > 1;


if ( $should_wrap_in_list ) :
	?>
	<ul <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<?php
else :
	?>
	<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<?php
endif;

foreach ( array( $selected_posts_query ?? null, $should_fill_posts ? $autofill_posts_query : null ) as $post_query ) :
	if ( null === $post_query ) {
		continue;
	}
	if ( $post_query->have_posts() ) :
		while ( $post_query->have_posts() ) :
			$post_query->the_post();

			// The code below was modelled after how the Post Template block renders its inner blocks.

			// Get an instance of the current Post Template block.
			$block_instance = $block->parsed_block;

			// Set the block name to one that does not correspond to an existing registered block.
			// This ensures that for the inner instances of the Manual Post Select block, we do not render any block supports.
			$block_instance['blockName'] = 'core/null';

			// Swap in the correct context values for rendering content.
			$context_post_id              = get_the_ID();
			$context_post_type            = get_post_type();
			$filter_block_context = static function ( $context ) use ( $context_post_id, $context_post_type ) {
				$context['postId']   = $context_post_id;
				$context['postType'] = $context_post_type;
				return $context;
			};

			// Use an early priority to so that other 'render_block_context' filters have access to the values.
			add_filter( 'render_block_context', $filter_block_context, 1 );
			// Render the inner blocks with `dynamic` set to `false` to prevent calling
			// `render_callback` and ensure that no wrapper markup is included.
			$block_content = ( new WP_Block( $block_instance ) )->render( array( 'dynamic' => false ) );
			remove_filter( 'render_block_context', $filter_block_context, 1 );
			if ( $should_wrap_in_list ) :
				?>
			<li><?php echo wp_kses_post( $block_content ); ?></li>
				<?php
			else :
				echo wp_kses_post( $block_content );
			endif;
		endwhile;
		wp_reset_postdata();
	endif;
endforeach;

if ( $should_wrap_in_list ) :
	?>
	</ul>
	<?php
else :
	?>
	</div>
	<?php
endif;
