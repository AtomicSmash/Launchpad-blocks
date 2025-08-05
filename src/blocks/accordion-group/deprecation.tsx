import type { InterpretedAttributes } from "./attributes";
import type {
	AllDeprecations,
	BlockSupports,
	BlockAttributes,
	DeprecationAndFixture,
	InterpretAttributes,
	CreateBlockSaveProps,
} from "@atomicsmash/blocks-helpers";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { attributes as currentAttributes } from "./attributes";
import { supports as currentSupports } from "./supports";

// edit attributes to what they were in v1
const v1Attributes = {
	...currentAttributes,
} as const satisfies BlockAttributes;
type V1Attributes = typeof v1Attributes;

// edit supports to what they were in v1
const v1Supports = { ...currentSupports } as const satisfies BlockSupports;
type V1Supports = typeof v1Supports;

type V1BlockSaveProps = CreateBlockSaveProps<
	InterpretAttributes<V1Supports, V1Attributes>
>;
const v1 = {
	fixture: [
		`<!-- wp:launchpad-blocks/accordion-group {"isMultiple":true,"accordionGroupId":"7b6bb610-df4d-48c8-afaa-1c88a416658a"} -->
<div id="7b6bb610-df4d-48c8-afaa-1c88a416658a" data-accordion-group="" data-is-multiple="true" class="wp-block-launchpad-blocks-accordion-group"><!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"9f29b837-b0ea-414b-8675-84fa2503dc61","headerContent":"Accordion that is open by default","fontSize":"t-2"} -->
<div data-accordion="" data-is-initially-open="true" id="9f29b837-b0ea-414b-8675-84fa2503dc61" class="wp-block-launchpad-blocks-accordion has-t-2-font-size"><h2><button aria-expanded="true" aria-controls="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" data-state="open" id="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" id="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->

<!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"544422c1-4e96-4256-9b60-c6c6d18702b7","headerContent":"Accordion that is open by default if multiple accordions allowed","fontSize":"t-3"} -->
<div data-accordion="" data-is-initially-open="true" id="544422c1-4e96-4256-9b60-c6c6d18702b7" class="wp-block-launchpad-blocks-accordion has-t-3-font-size"><h2><button aria-expanded="true" aria-controls="544422c1-4e96-4256-9b60-c6c6d18702b7-panel" data-state="open" id="544422c1-4e96-4256-9b60-c6c6d18702b7-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default if multiple accordions allowed</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="544422c1-4e96-4256-9b60-c6c6d18702b7-trigger" id="544422c1-4e96-4256-9b60-c6c6d18702b7-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->

<!-- wp:launchpad-blocks/accordion {"accordionId":"9ce0f36b-d22c-4b36-9b34-53750bb19b5c","headerContent":"Accordion that is closed by default"} -->
<div data-accordion="" data-is-initially-open="false" id="9ce0f36b-d22c-4b36-9b34-53750bb19b5c" class="wp-block-launchpad-blocks-accordion"><h2><button aria-expanded="true" aria-controls="9ce0f36b-d22c-4b36-9b34-53750bb19b5c-panel" data-state="open" id="9ce0f36b-d22c-4b36-9b34-53750bb19b5c-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is closed by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9ce0f36b-d22c-4b36-9b34-53750bb19b5c-trigger" id="9ce0f36b-d22c-4b36-9b34-53750bb19b5c-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion --></div>
<!-- /wp:launchpad-blocks/accordion-group -->`,
		`<!-- wp:launchpad-blocks/accordion-group {"accordionGroupId":"0253d25a-e23c-488f-b2e2-73cd5f700a67"} -->
<div id="0253d25a-e23c-488f-b2e2-73cd5f700a67" data-accordion-group="" data-is-multiple="false" class="wp-block-launchpad-blocks-accordion-group"><!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"9111fdaf-0a30-4d45-aa6e-644e430f45a4","headerContent":"Accordion that is open by default","fontSize":"t-2"} -->
<div data-accordion="" data-is-initially-open="true" id="9111fdaf-0a30-4d45-aa6e-644e430f45a4" class="wp-block-launchpad-blocks-accordion has-t-2-font-size"><h2><button aria-expanded="true" aria-controls="9111fdaf-0a30-4d45-aa6e-644e430f45a4-panel" data-state="open" id="9111fdaf-0a30-4d45-aa6e-644e430f45a4-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9111fdaf-0a30-4d45-aa6e-644e430f45a4-trigger" id="9111fdaf-0a30-4d45-aa6e-644e430f45a4-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->

<!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"2ca8d19c-2ab3-46ce-b2ef-5c3655390da6","headerContent":"Accordion that is open by default if multiple accordions allowed","fontSize":"t-3"} -->
<div data-accordion="" data-is-initially-open="true" id="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6" class="wp-block-launchpad-blocks-accordion has-t-3-font-size"><h2><button aria-expanded="true" aria-controls="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6-panel" data-state="open" id="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default if multiple accordions allowed</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6-trigger" id="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->

<!-- wp:launchpad-blocks/accordion {"accordionId":"0c458a68-91f1-46e9-a3d6-05083dbfc397","headerContent":"Accordion that is closed by default"} -->
<div data-accordion="" data-is-initially-open="false" id="0c458a68-91f1-46e9-a3d6-05083dbfc397" class="wp-block-launchpad-blocks-accordion"><h2><button aria-expanded="true" aria-controls="0c458a68-91f1-46e9-a3d6-05083dbfc397-panel" data-state="open" id="0c458a68-91f1-46e9-a3d6-05083dbfc397-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is closed by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="0c458a68-91f1-46e9-a3d6-05083dbfc397-trigger" id="0c458a68-91f1-46e9-a3d6-05083dbfc397-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion --></div>
<!-- /wp:launchpad-blocks/accordion-group -->`,
	],
	object: {
		attributes: v1Attributes,
		supports: v1Supports,
		save: function ({ attributes }: V1BlockSaveProps) {
			const { isMultiple, accordionGroupId } = attributes;
			const blockProps = useBlockProps.save({
				id: accordionGroupId,
				"data-accordion-group": "",
				"data-is-multiple": String(isMultiple),
			});
			return (
				<div {...blockProps}>
					<InnerBlocks.Content />
				</div>
			);
		},
		migrate: (oldAttributes, oldInnerBlocks) => [
			{
				...oldAttributes,
				headerElement:
					(oldInnerBlocks.at(0)?.attributes?.headerElement as
						| "h2"
						| "h3"
						| "h4"
						| "h5"
						| "h6"
						| "p"
						| undefined) ?? "h2",
			},
			[...oldInnerBlocks],
		],
		isEligible: () => true,
	},
} as const satisfies DeprecationAndFixture<
	V1Supports,
	V1Attributes,
	InterpretedAttributes
>;

export const deprecated = [
	v1.object,
] as const satisfies AllDeprecations<InterpretedAttributes>;
