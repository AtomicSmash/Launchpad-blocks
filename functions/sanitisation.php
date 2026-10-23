<?php
/**
 * Sanitisation
 */

namespace Launchpad\Blocks\Sanitisation;

add_filter(
	'wp_kses_allowed_html',
	function ( $tags ) {
		$tags['a']['aria-selected'] = array();
		$tags['section']['tabindex'] = array();
		$tags['svg'] = array(
			...( isset( $tags['svg'] ) && is_array( $tags['svg'] ) ? $tags['svg'] : array() ),
			'xmlns' => array(),
			'fill' => array(),
			'viewbox' => array(),
			'role' => array(),
			'aria-hidden' => array(),
			'focusable' => array(),
			'class' => array(),
			'height' => array(),
			'width' => array(),
			'stroke' => array(),
			'stroke-width' => array(),
			'stroke-linecap' => array(),
			'stroke-linejoin' => array(),
		);
		$tags['path'] = array(
			...( isset( $tags['path'] ) && is_array( $tags['path'] ) ? $tags['path'] : array() ),
			'd' => array(),
			'fill' => array(),
		);
		$tags['use'] = array(
			...( isset( $tags['use'] ) && is_array( $tags['use'] ) ? $tags['use'] : array() ),
			'href' => array(),
			'xlink:href' => array(),
		);
		$tags['circle'] = array(
			...( isset( $tags['circle'] ) && is_array( $tags['circle'] ) ? $tags['circle'] : array() ),
			'cx' => array(),
			'cy' => array(),
			'r' => array(),
		);
		$tags['polygon'] = array(
			...( isset( $tags['polygon'] ) && is_array( $tags['polygon'] ) ? $tags['polygon'] : array() ),
			'points' => array(),
		);
		$tags['iframe'] = array(
			...( isset( $tags['iframe'] ) && is_array( $tags['iframe'] ) ? $tags['iframe'] : array() ),
			'title' => array(),
			'allow' => array(),
			'src' => array(),
			'height' => array(),
			'width' => array(),
			'frameborder' => array(),
			'allowfullscreen' => array(),
			'referrerpolicy' => array(),
		);
		$tags['img'] = array(
			...( isset( $tags['img'] ) && is_array( $tags['img'] ) ? $tags['img'] : array() ),
			'decoding' => true,
			'loading' => true,
			'width' => true,
			'height' => true,
			'draggable' => true,
			'src' => true,
			'alt' => true,
			'srcset' => true,
			'sizes' => true,
			'class' => true,
		);
		$tags['dialog'] = array(
			...( isset( $tags['dialog'] ) && is_array( $tags['dialog'] ) ? $tags['dialog'] : array() ),
			'open' => true,
			'class' => true,
			'style' => true,
			'data-*' => true,
			'id' => true,
		);
		return $tags;
	},
	50,
	2
);
