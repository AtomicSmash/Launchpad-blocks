export const globalBanner = {
	dismissable: `<!-- wp:launchpad-blocks/global-banner -->
<!-- wp:paragraph {"placeholder":"Add some text here...","style":{"layout":{"selfStretch":"fill","flexSize":null}}} -->
<p>Global banner that can be dismissed</p>
<!-- /wp:paragraph -->
<!-- /wp:launchpad-blocks/global-banner -->`,
	nonDismissable: `<!-- wp:launchpad-blocks/global-banner {"isDismissible":false} -->
<!-- wp:paragraph {"placeholder":"Add some text here...","style":{"layout":{"selfStretch":"fill","flexSize":null}}} -->
<p>Global banner that can not be dismissed</p>
<!-- /wp:paragraph -->
<!-- /wp:launchpad-blocks/global-banner -->`,
	withButton: `<!-- wp:launchpad-blocks/global-banner -->
<!-- wp:paragraph {"placeholder":"Add some text here...","style":{"layout":{"selfStretch":"fill","flexSize":null}}} -->
<p>Test banner</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="#">This is a link</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->
<!-- /wp:launchpad-blocks/global-banner -->`,
};

export const globalBannerOutput = `<!-- wp:group {"align":"full","layout":{"type":"default"}} -->
<div class="wp-block-group alignfull"><!-- wp:launchpad-blocks/global-banner-output /--></div>
<!-- /wp:group -->`;
