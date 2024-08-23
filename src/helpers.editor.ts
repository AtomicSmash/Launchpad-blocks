import { ASCircleLogo } from "@plugin/blocks/svgs";
import { registerBlockCollection } from "@wordpress/blocks";

export function registerLaunchpadBlocksCollection() {
	registerBlockCollection("launchpad-blocks", {
		title: "Launchpad blocks",
		icon: ASCircleLogo,
	});
}
