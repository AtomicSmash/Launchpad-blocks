<?php
/**
 * Assets class
 */

namespace LaunchpadBlocks;

/**
 * Get assets from launchpad blocks plugin.
 */
class Assets extends \AtomicSmash\CompilerHelpers\Assets {
	/**
	 * Constructor
	 */
	public function __construct() {
		$this->context_folder = realpath( __DIR__ . '/../' );
		$this->build_folder = '/build/';
		parent::__construct();
	}
}
