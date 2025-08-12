<?php
/**
 * Fix block defaults.
 */

namespace LaunchpadBlocks\Blocks\ToPHP;

use Error;

/**
 * Convert block markup attributes array into a HTML string.
 *
 * @param array<string,mixed> $attributes The array of attributes to convert.
 */
function get_block_markup_attributes_as_string( array $attributes ): string {
	$classes = array(
		...explode( ' ', $attributes['class'] ?? '' ),
	);
	if ( isset( $attributes['align'] ) ) {
		$classes[] = 'align' . $attributes['align'];
	}
	unset( $attributes['align'] );

	if ( isset( $attributes['className'] ) ) {
		$classes[] = $attributes['className'];
	}
	unset( $attributes['className'] );

	if ( count( $classes ) ) {
		$attributes['class'] = join( ' ', $classes );
	}
	return join(
		' ',
		array_map(
			function ( $key ) use ( $attributes ) {
				if ( is_bool( $attributes[ $key ] ) ) {
					return $attributes[ $key ] ? $key : '';
				}
				return $key . '="' . $attributes[ $key ] . '"';
			},
			array_keys( $attributes )
		)
	);
}


/**
 * Check array to see if it's a link array.
 *
 * @param array<mixed> $array_to_check The array to check.
 */
function is_link_field( array $array_to_check ): bool {
	return array_key_exists( 'title', $array_to_check ) && array_key_exists( 'url', $array_to_check ) && array_key_exists( 'target', $array_to_check );
}

/**
 * Check array to see if it's an image array.
 *
 * @param array<mixed> $array_to_check The array to check.
 */
function is_image_array_field( array $array_to_check ): bool {
	return array_key_exists( 'id', $array_to_check )
		&& array_key_exists( 'url', $array_to_check )
		&& array_key_exists( 'title', $array_to_check )
		&& array_key_exists( 'alt', $array_to_check )
		&& array_key_exists( 'sizes', $array_to_check );
}

/**
 * Interpret ACF fields into block attributes
 *
 * @param array<string,mixed> $attributes The block data to use to render the block.
 * @param array<string,mixed> $field_map  A field map of field names to field keys.
 *
 * @throws Error If a child of an acf array attribute is not handled.
 * @return array{data:array<string,mixed>,remaining_attributes:array<string,mixed>}
 */
function interpret_acf_fields_array( array $attributes, array $field_map ): array {
	$remaining_attributes = array();
	$data_array = array();
	foreach ( $attributes as $attributes_key => $attributes_value ) {
		if ( ! isset( $field_map[ $attributes_key ] ) ) {
			$remaining_attributes[ $attributes_key ] = $attributes_value;
		} elseif ( 'array' === gettype( $attributes_value ) ) {
			if ( array_is_list( $attributes_value ) ) {
				$data_array[ $field_map[ $attributes_key ]['id'] ] = array();
				foreach ( $attributes_value as $index => $attributes_subvalue ) {
					list('data' => $data, 'remaining_attributes' => $remaining_attributes) = interpret_acf_fields_array( $attributes_subvalue, $field_map[ $attributes_key ]['children'] );
					if ( count( $remaining_attributes ) ) {
						throw new Error( 'Your field map is missing a child key for ' . esc_html( join( ', ', array_keys( $remaining_attributes ) ) ) . ' in ' . esc_html( $field_map[ $attributes_key ]['id'] ) );
					}
					$data_array[ $field_map[ $attributes_key ]['id'] ][ "$index" ] = $data;
				}
			} elseif ( is_link_field( $attributes_value ) ) {
				$data_array[ $field_map[ $attributes_key ] ] = $attributes_value;
			} elseif ( is_image_array_field( $attributes_value ) ) {
				$data_array[ $field_map[ $attributes_key ] ] = $attributes_value['id'];
			} else {
				// Group fields (field map uses same format as repeater)
				list('data' => $data, 'remaining_attributes' => $remaining_attributes) = interpret_acf_fields_array( $attributes_value, $field_map[ $attributes_key ]['children'] );
				if ( count( $remaining_attributes ) ) {
					throw new Error( 'Your field map is missing a child key for ' . esc_html( join( ', ', array_keys( $remaining_attributes ) ) ) . ' in ' . esc_html( $field_map[ $attributes_key ]['id'] ) );
				}
				$data_array[ $field_map[ $attributes_key ]['id'] ] = $data;
			}
		} else {
			$data_array[ $field_map[ $attributes_key ] ] = $attributes_value;
		}
	}
	return array(
		'data' => $data_array,
		'remaining_attributes' => $remaining_attributes,
	);
}

/**
 * Generate the block comment for a block from data.
 *
 * This block should not be used directly. Instead, each block should export a wrapper function which validates the data passed in as attributes, and if ACF provides the field map for the block.
 *
 * @param string              $name The block to render.
 * @param array<mixed>        $attributes The block data to use to render the block.
 * @param array<string>       $inner_blocks An array of strings for the inner blocks. Each array item should be an instance of this function.
 * @param array<string,mixed> $field_map If the block is an ACF block, a field map must be passed in to correctly render the block.
 */
function get_block_comment( string $name, array $attributes = array(), array $inner_blocks = array(), array $field_map = array(), ): string {
	if ( str_starts_with( $name, 'acf/' ) && count( $attributes ) ) {
		list('data' => $data, 'remaining_attributes' => $remaining_attributes) = interpret_acf_fields_array( $attributes, $field_map );
		$attributes = array(
			'name' => $name,
			'data' => $data,
			...$remaining_attributes,
		);
	}

	$output = apply_filters(
		'launchpad_blocks_block_comment_markup',
		array(
			'attributes' => $attributes,
			'block_markup' => null,
		),
		str_starts_with( $name, 'core/' ) ? substr( $name, 5 ) : $name,
		$inner_blocks
	);
	if ( count( $output['attributes'] ) ) {
		$serialised_attributes = serialize_block_attributes( $output['attributes'] );
	} else {
		$serialised_attributes = '';
	}

	return sprintf( $output['block_markup'], $name, $serialised_attributes );
}

/**
 * Generate the block comment markup for blocks
 *
 * @param array{attributes:array<mixed>,block_markup:string} $output The block attributes and block markup to use to generate the block comment.
 * @param string                                             $name The name of the block.
 * @param string[]                                           $inner_blocks The inner blocks to output for this block.
 *
 * @return array{attributes:array<mixed>,block_markup:string}
 *
 * @throws Error If missing required block attributes.
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
			$markup_attributes = array();
			$markup_attributes['class'] = 'wp-block-image size-' . $attributes['sizeSlug'];
			$attributes['sizeSlug'] = $attributes['sizeSlug'] ?? 'large';
			$block_comment = '<!-- wp:%1$s %2$s -->';
			$block_comment .= '<figure ' . get_block_markup_attributes_as_string( $markup_attributes ) . '><img src="' . $attributes['url'] . '" alt="' . $attributes['alt'] . '" class="wp-image-' . $attributes['id'] . '"/></figure>';
			$block_comment .= '<!-- /wp:%1$s -->';
			$attributes = array(
				'id' => $attributes['id'],
				'sizeSlug' => $attributes['sizeSlug'],
			);
			break;
		case 'embed':
				$markup_attributes = $attributes;
				$markup_attributes['class'] = 'wp-block-embed is-type-' . $attributes['type'] . ' is-provider-' . $attributes['providerNameSlug'] . ' wp-block-embed-' . $attributes['providerNameSlug'];
				unset( $markup_attributes['type'] );
				unset( $markup_attributes['providerNameSlug'] );
				$block_comment = '<!-- wp:%1$s %2$s -->';
				$block_comment .= '<figure ' . get_block_markup_attributes_as_string( $markup_attributes ) . '>';
				$block_comment .= join(
					"\n",
					array(
						'<div class="wp-block-embed__wrapper">',
						$attributes['url'], // The url must be on its own line.
						'</div>',
					)
				);
				$block_comment .= '</figure>';
				$block_comment .= '<!-- /wp:%1$s -->';
			break;
		case 'paragraph':
			$markup_attributes = $attributes;
			unset( $markup_attributes['content'] );
			$block_comment = '<!-- wp:%1$s --><p ' . get_block_markup_attributes_as_string( $markup_attributes ) . '>' . $attributes['content'] . '</p><!-- /wp:%1$s -->';
			if ( isset( $attributes['className'] ) ) {
				$attributes = array(
					'className' => $attributes['className'],
				);
			} else {
				$attributes = array();
			}
			break;
		case 'heading':
			$markup_attributes = $attributes;
			unset( $markup_attributes['level'] );
			unset( $markup_attributes['content'] );
			$block_comment = '<!-- wp:%1$s %2$s --><h' . $attributes['level'] . ' ' . get_block_markup_attributes_as_string( $markup_attributes ) . '>' . $attributes['content'] . '</h' . $attributes['level'] . '><!-- /wp:%1$s -->';
			if ( isset( $attributes['className'] ) ) {
				$attributes = array(
					'level' => $attributes['level'],
					'className' => $attributes['className'],
				);
			} else {
				$attributes = array(
					'level' => $attributes['level'],
				);
			}
			break;
		case 'quote':
			$markup_attributes = $attributes;
			unset( $markup_attributes['citation'] );
			$markup_attributes['class'] = 'wp-block-quote';

			$block_comment = '<!-- wp:%1$s %2$s --><blockquote ' . get_block_markup_attributes_as_string( $markup_attributes ) . '>';
			$block_comment .= join( '', $inner_blocks );
			$block_comment .= isset( $attributes['citation'] ) ? '<cite>' . $attributes['citation'] . '</cite>' : '';
			$block_comment .= '</blockquote><!-- /wp:%1$s -->';
			if ( isset( $attributes['className'] ) ) {
				$attributes = array(
					'className' => $attributes['className'],
				);
			} else {
				$attributes = array();
			}
			break;
		case 'list':
			$markup_attributes = $attributes;
			$markup_attributes['class'] = 'wp-block-list';
			$is_ordered_list = $attributes['ordered'] ?? false;
			if ( ! $is_ordered_list ) {
				unset( $attributes['start'] );
				unset( $attributes['reversed'] );
				unset( $attributes['ordered'] );
			}
			$block_comment = '<!-- wp:%1$s %2$s -->';
			$block_comment .= ( $is_ordered_list ? '<ol ' : '<ul ' ) . get_block_markup_attributes_as_string( $markup_attributes ) . '>';
			$block_comment .= join( '', $inner_blocks );
			$block_comment .= $is_ordered_list ? '</ol>' : '</ul>';
			$block_comment .= '<!-- /wp:%1$s -->';
			if ( $is_ordered_list ) {
				$attributes = array(
					'ordered' => $attributes['ordered'] ?? null,
					'start' => $attributes['start'] ?? null,
					'reversed' => $attributes['reversed'] ?? null,
				);
			} else {
				$attributes = array();
			}
			break;
		case 'list-item':
			$markup_attributes = $attributes;
			unset( $markup_attributes['content'] );
			$block_comment = '<!-- wp:%1$s %2$s --><li ' . get_block_markup_attributes_as_string( $markup_attributes ) . '>' . ( $attributes['content'] ?? '' );
			$block_comment .= join( '', $inner_blocks );
			$block_comment .= '</li><!-- /wp:%1$s -->';
			break;
		case 'pullquote':
			$markup_attributes = $attributes;
			unset( $markup_attributes['citation'] );
			$markup_attributes['class'] = 'wp-block-pullquote';
			$block_comment = '<!-- wp:%1$s %2$s --><figure ' . get_block_markup_attributes_as_string( $markup_attributes ) . '><blockquote>' . ( $attributes['content'] ?? '' );
			$block_comment .= isset( $attributes['citation'] ) ? '<cite>' . $attributes['citation'] . '</cite>' : '';
			$block_comment .= '</blockquote></figure><!-- /wp:%1$s -->';
			if ( isset( $attributes['className'] ) ) {
				$attributes = array(
					'className' => $attributes['className'],
				);
			} else {
				$attributes = array();
			}
			break;

		case 'audio':
			if ( isset( $attributes['id'] ) ) {
				$attributes['src'] = wp_get_attachment_url( $attributes['id'] );
			}

			if ( ! isset( $attributes['src'] ) || ! $attributes['src'] ) {
				throw new Error( 'Audio file not found' );
			}

			$markup_attributes = $attributes;
			unset( $markup_attributes['src'] );
			unset( $markup_attributes['caption'] );
			unset( $markup_attributes['preload'] );
			unset( $markup_attributes['autoplay'] );
			unset( $markup_attributes['loop'] );
			unset( $markup_attributes['id'] );
			$markup_attributes['class'] = 'wp-block-audio';

			$block_comment = '<!-- wp:%1$s %2$s --><figure ' . get_block_markup_attributes_as_string( $markup_attributes ) . '>';
			// All percentage characters in URLs must be escaped with a double percentage sign (%%) to prevent them from being interpreted as a placeholder by sprintf.
			$block_comment .= '<audio controls src="' . str_replace( '%', '%%', $attributes['src'] );
			$block_comment .= isset( $attributes['autoplay'] ) && $attributes['autoplay'] ? 'autoplay' : '';
			$block_comment .= isset( $attributes['loop'] ) && $attributes['loop'] ? 'loop' : '';
			$block_comment .= isset( $attributes['preload'] ) ? 'preload="' . $attributes['preload'] . '"' : '';
			$block_comment .= '"></audio>';
			$block_comment .= isset( $attributes['caption'] ) ? '<figcaption class="wp-element-caption">' . $attributes['caption'] . '</figcaption>' : '';
			$block_comment .= '</figure><!-- /wp:%1$s -->';

			$attributes = array_filter(
				$attributes,
				function ( $key ): bool {
					return in_array( $key, array( 'id' ), true );
				},
				ARRAY_FILTER_USE_KEY
			);
			break;
		case 'gallery':
			$attributes['linkTo'] = $attributes['linkTo'] ?? 'none';
			$image_crop = $attributes['imageCrop'] ?? true;
			$markup_attributes = $attributes;
			unset( $markup_attributes['columns'] );
			unset( $markup_attributes['sizeSlug'] );
			unset( $markup_attributes['linkTo'] );
			unset( $markup_attributes['imageCrop'] );
			unset( $markup_attributes['randomOrder'] );
			$markup_attributes['class'] = 'wp-block-gallery has-nested-images';
			if ( $image_crop ) {
				$markup_attributes['class'] .= ' is-cropped';
			}
			$markup_attributes['class'] .= ' columns-' . ( $attributes['columns'] ?? 'default' );
			$block_comment = '<!-- wp:%1$s %2$s --><figure ' . get_block_markup_attributes_as_string( $markup_attributes ) . '>';
			$block_comment .= join( '', $inner_blocks );
			$block_comment .= '</figure><!-- /wp:%1$s -->';
			break;
		case 'cover':
			$markup_attributes = $attributes;
			unset( $markup_attributes['id'] );
			unset( $markup_attributes['url'] );
			unset( $markup_attributes['alt'] );
			$markup_attributes['class'] = 'wp-block-cover';
			$block_comment = '<!-- wp:%1$s %2$s --><div ' . get_block_markup_attributes_as_string( $markup_attributes ) . '>';
			$block_comment .= '<span aria-hidden="true" class="wp-block-cover__background has-background-dim"></span>';
			$block_comment .= '<img class="wp-block-cover__image-background wp-image-' . $attributes['id'] . '" alt="' . $attributes['alt'] . '" src="' . $attributes['url'] . '" data-object-fit="cover"/>';
			$block_comment .= '<div class="wp-block-cover__inner-container">' . join( '', $inner_blocks ) . '</div></div><!-- /wp:%1$s -->';
			break;
		case 'buttons':
			$markup_attributes = $attributes;
			$markup_attributes['class'] = 'wp-block-buttons';
			$block_comment = '<!-- wp:%1$s %2$s --><div ' . get_block_markup_attributes_as_string( $markup_attributes ) . '>' . join( '', $inner_blocks ) . '</div><!-- /wp:%1$s -->';
			if ( isset( $attributes['className'] ) ) {
				$attributes = array(
					'className' => $attributes['className'],
				);
			} else {
				$attributes = array();
			}
			break;
		case 'button':
			$markup_attributes = $attributes;
			unset( $markup_attributes['text'] );
			unset( $markup_attributes['url'] );
			if ( isset( $attributes['className'] ) ) {
				$markup_attributes['class'] = 'wp-block-button ' . $attributes['className'];
			} else {
				$markup_attributes['class'] = 'wp-block-button';
			}
			$block_comment = '<!-- wp:%1$s %2$s --><div ' . get_block_markup_attributes_as_string( $markup_attributes ) . '><a class="wp-block-button__link wp-element-button" href="' . $attributes['url'] . '">' . $attributes['text'] . '</a></div><!-- /wp:%1$s -->';
			if ( isset( $attributes['className'] ) ) {
				$attributes = array(
					'className' => $attributes['className'],
				);
			} else {
				$attributes = array();
			}
			break;
		default:
			$block_comment = '<!-- wp:%1$s ' . ( count( $attributes ) ? '%2$s ' : '' ) . ( $has_inner_blocks ? '-->' : '/-->' );
			if ( $has_inner_blocks ) {
				$block_comment .= join( '', $inner_blocks );
				$block_comment .= '<!-- /wp:%1$s -->';
			}
	}
	return array(
		'attributes' => $attributes,
		'block_markup' => $block_comment,
	);
}
add_filter( 'launchpad_blocks_block_comment_markup', __NAMESPACE__ . '\\handle_default_block_comment_generation', 50, 3 ); // Priority is 50 so a user can both override blocks handled here completely, or adjust the generated block comments after we generate them.

/**
 * Render a block from an array of attributes.
 *
 * This block should not be used directly. Instead, each block should export a wrapper function which validates the data passed in as attributes, and if ACF provides the field map for the block.
 *
 * @param string              $name The block to render.
 * @param array<mixed>        $attributes The block data to use to render the block.
 * @param array<string>       $inner_blocks An array of strings for the inner blocks. Each array item should be an instance of this function.
 * @param array<string,mixed> $field_map If the block is an ACF block, a field map must be passed in to correctly render the block.
 */
function render_block( string $name, array $attributes = array(), array $inner_blocks = array(), array $field_map = array(), ): string {
	$block_comment = get_block_comment( $name, $attributes, $inner_blocks, $field_map );
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- We want the core filter.
	return do_blocks( apply_filters( 'the_content', $block_comment ) );
}
