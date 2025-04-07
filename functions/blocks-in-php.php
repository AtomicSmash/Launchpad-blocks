<?php
/**
 * Fix block defaults.
 */

namespace LaunchpadBlocks\Blocks\ToPHP;

use WP_Block;

/**
 * Interpret ACF fields into block attributes
 *
 * @param array $attributes The block data to use to render the block.
 * @param array $field_map  A field map of field names to field keys.
 */
function interpret_acf_fields_array( array $attributes, array $field_map ) {
	$new_array = array();
	foreach ( $attributes as $attributes_key => $attributes_value ) {
		if ( 'array' === gettype( $attributes_value ) ) {
			if ( array_is_list( $attributes_value ) ) {
				$new_array[ $field_map[ $attributes_key ]['id'] ] = array();
				foreach ( $attributes_value as $index => $attributes_subvalue ) {
					$new_array[ $field_map[ $attributes_key ]['id'] ][ "$index" ] = interpret_acf_fields_array( $attributes_subvalue, $field_map[ $attributes_key ]['children'] );
				}
			} else {
				$new_array[ $field_map[ $attributes_key ] ] = interpret_acf_fields_array( $attributes_value, $field_map[ $attributes_key ] );
			}
		} else {
			$new_array[ $field_map[ $attributes_key ] ] = $attributes_value;
		}
	}
	return $new_array;
}

/**
 * Generate the block comment for a block from data.
 *
 * This block should not be used directly. Instead, each block should export a wrapper function which validates the data passed in as attributes, and if ACF provides the field map for the block.
 *
 * @param string $name The block to render.
 * @param array  $attributes The block data to use to render the block.
 * @param array  $inner_blocks An array of strings for the inner blocks. Each array item should be an instance of this function.
 * @param array  $field_map If the block is an ACF block, a field map must be passed in to correctly render the block.
 */
function get_block_comment( string $name, $attributes = array(), $inner_blocks = array(), $field_map = array(), ) {
	if ( str_starts_with( $name, 'acf/' ) && count( $attributes ) ) {
		$data_attribute = interpret_acf_fields_array( $attributes, $field_map );
		$attributes = array(
			'name' => $name,
			'data' => $data_attribute,
		);
	}
	
	$output = apply_filters(
		'launchpad_blocks_block_comment_markup',
		array(
			'attributes' => $attributes,
			'block_markup' => null,
		),
		$name,
		$inner_blocks
	);
	$serialised_attributes = serialize_block_attributes( $output['attributes'] );
	
	return sprintf( $output['block_markup'], $name, $serialised_attributes );
}

/**
 * Generate the block comment markup for blocks
 *
 * @param array{attributes:array, block_markup:string} $output The block attributes and block markup to use to generate the block comment.
 * @param string                                       $name The name of the block.
 * @param string[]                                     $inner_blocks The inner blocks to output for this block.
 *
 * @return array{attributes:array, block_markup:string}
 */
function handle_default_block_comment_generation( array $output, string $name, array $inner_blocks ): array {
	$block_comment = $output['block_markup'];
	if ( null !== $block_comment ) {
		// The markup for this block was already provided.
		return $output;
	}
	$attributes = $output['attributes'];
	$has_inner_blocks = count( $inner_blocks );

	switch ( $name ) {
		case 'image':
			// TODO: Improve image block markup generation.
			$attributes['sizeSlug'] = $attributes['sizeSlug'] ?? 'large';
			$block_comment_string = '<!-- wp:%1$s %2$s -->';
			$block_comment_string .= '<figure class="wp-block-image size-' . $attributes['sizeSlug'] . '"><img src="' . $attributes['url'] . '" alt="' . $attributes['alt'] . '" class="wp-image-' . $attributes['id'] . '"/></figure>';
			$block_comment_string .= '<!-- /wp:%1$s -->';
			$attributes = array(
				'id' => $attributes['id'],
				'sizeSlug' => $attributes['sizeSlug'],
			);
			break;
		case 'embed':
				// TODO: Improve embed block markup generation.
				$block_comment_string = '<!-- wp:%1$s %2$s -->';
				$block_comment_string .= '<figure class="wp-block-embed is-type-' . $attributes['type'] . ' is-provider-' . $attributes['providerNameSlug'] . ' wp-block-embed-' . $attributes['providerNameSlug'] . '">';
				$block_comment_string .= join(
					"\n",
					array(
						'<div class="wp-block-embed__wrapper">',
						$attributes['url'], // The url must be on its own line.
						'</div>',
					)
				);
				$block_comment_string .= '</figure>';
				$block_comment_string .= '<!-- /wp:%1$s -->';
			break;
		default:
			$block_comment_string = '<!-- wp:%1$s ' . ( count( $attributes ) ? '%2$s ' : '' ) . ( $has_inner_blocks ? '-->' : '/-->' );
			if ( $has_inner_blocks ) {
				$block_comment_string .= join( '', $inner_blocks );
				$block_comment_string .= '<!-- /wp:%1$s -->';
			}
	}
	return array(
		'attributes' => $attributes,
		'block_markup' => $block_comment_string,
	);
}
add_filter( 'launchpad_blocks_block_comment_markup', __NAMESPACE__ . '\\handle_default_block_comment_generation', 50, 3 ); // Priority is 50 so a user can both override blocks handled here completely, or adjust the generated block comments after we generate them.

/**
 * Render a block from an array of attributes.
 *
 * This block should not be used directly. Instead, each block should export a wrapper function which validates the data passed in as attributes, and if ACF provides the field map for the block.
 *
 * @param string $name The block to render.
 * @param array  $attributes The block data to use to render the block.
 * @param array  $inner_blocks An array of strings for the inner blocks. Each array item should be an instance of this function.
 * @param array  $field_map If the block is an ACF block, a field map must be passed in to correctly render the block.
 */
function render_block( string $name, $attributes = array(), $inner_blocks = array(), $field_map = array(), ) {
	$block_comment = get_block_comment( $name, $attributes, $inner_blocks, $field_map );
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- We want the core filter.
	return do_blocks( apply_filters( 'the_content', $block_comment ) );
}
