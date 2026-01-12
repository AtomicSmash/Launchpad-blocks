<?php
/**
 * PHP related to this block.
 */

namespace LaunchpadBlocks\Blocks\Custom\PHPTemplatePart;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function register_block(): void {
	\register_block_type( __DIR__ . '/block.json' );
}
\add_action( 'init', __NAMESPACE__ . '\\register_block' );

/**
 * Convert associative array variable with type info into the base types.
 *
 * @param array<string,array{type:string,value:string|array}> $object_to_translate The object to translate.
 *
 * @return array<string,mixed>
 */
function translate_object_with_field_types( array $object_to_translate ): array {
	$new_object = array();
	foreach ( $object_to_translate as $key => $type_and_value ) {
		if ( ! isset( $type_and_value['value'] ) ) {
			switch ( $type_and_value['type'] ) {
				case 'string':
					$new_object[ $key ] = '';
					break;
				case 'number':
					$new_object[ $key ] = 0;
					break;
				case 'boolean':
					$new_object[ $key ] = true;
					break;
				case 'array':
				case 'object':
					$new_object[ $key ] = array();
					break;
			}
		} else {
			list('type' => $type, 'value' => $value) = $type_and_value;
			switch ( $type ) {
				case 'string':
					$new_object[ $key ] = $value;
					break;
				case 'number':
					$new_object[ $key ] = +$value;
					break;
				case 'boolean':
					$new_object[ $key ] = 'true' === $value;
					break;
				case 'array':
					$new_object[ $key ] = translate_array_with_field_types( $value );
					break;
				case 'object':
					$new_object[ $key ] = translate_object_with_field_types( $value );
					break;
			}
		}
	}
	return $new_object;
}

/**
 * Convert numerical array variable with type info into the base types.
 *
 * @param array<array{type:string,value:string|array}> $array_to_translate The array to translate.
 *
 * @return array<mixed>
 */
function translate_array_with_field_types( array $array_to_translate ): array {
	$new_array = array();
	foreach ( $array_to_translate as $index => $type_and_value ) {
		if ( ! isset( $type_and_value['value'] ) ) {
			switch ( $type_and_value['type'] ) {
				case 'string':
					$new_array[ $index ] = '';
					break;
				case 'number':
					$new_array[ $index ] = 0;
					break;
				case 'boolean':
					$new_array[ $index ] = true;
					break;
				case 'array':
				case 'object':
					$new_array[ $index ] = array();
					break;
			}
		} else {
			list('type' => $type, 'value' => $value) = $type_and_value;
			switch ( $type ) {
				case 'string':
					$new_array[ $index ] = $value;
					break;
				case 'number':
					$new_array[ $index ] = +$value;
					break;
				case 'boolean':
					$new_array[ $index ] = 'true' === $value;
					break;
				case 'array':
					$new_array[ $index ] = translate_array_with_field_types( $value );
					break;
				case 'object':
					$new_array[ $index ] = translate_object_with_field_types( $value );
					break;
			}
		}
	}
	return $new_array;
}
