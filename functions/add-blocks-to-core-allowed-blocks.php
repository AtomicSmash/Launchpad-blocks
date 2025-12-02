<?php
/**
 * Add custom blocks to core allowed blocks
 */

namespace LaunchpadBlocks\Blocks\AddBlocksToCoreAllowedBlocks;

// Add button-with-icons to core buttons block
add_filter(
	'block_type_metadata',
	function ( $metadata ) {

		if ( isset( $metadata['name'] ) && 'core/buttons' === $metadata['name'] ) {

			if ( empty( $metadata['allowedBlocks'] ) ) {
				$metadata['allowedBlocks'] = array();
			}

			if ( ! in_array( 'launchpad-blocks/button-with-icon', $metadata['allowedBlocks'], true ) ) {
				$metadata['allowedBlocks'][] = 'launchpad-blocks/button-with-icon';
			}
		}

		return $metadata;
	}
);
