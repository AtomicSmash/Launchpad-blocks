import type { InterpretedAttributes } from "./attributes";
import type {
	AllDeprecations,
	BlockSupports,
	BlockAttributes,
	DeprecationAndFixture,
	InterpretAttributes,
	CreateBlockSaveProps,
} from "@atomicsmash/blocks-helpers";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import { Icon } from "@plugin/blocks/svgs";
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
		`<!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"9f29b837-b0ea-414b-8675-84fa2503dc61","headerContent":"Accordion that is open by default","fontSize":"heading-2"} -->
<div data-accordion="" data-is-initially-open="true" id="9f29b837-b0ea-414b-8675-84fa2503dc61" class="wp-block-launchpad-blocks-accordion has-heading-2-font-size"><h2><button aria-expanded="true" aria-controls="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" data-state="open" id="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" id="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->`,
	],
	object: {
		attributes: v1Attributes,
		supports: v1Supports,
		save: function ({ attributes }: V1BlockSaveProps) {
			const { isInitiallyOpen, accordionId, headerContent, headerElement } =
				attributes;
			const HeaderElement = headerElement;
			const blockProps = useBlockProps.save({
				"data-accordion": "",
				"data-is-initially-open": isInitiallyOpen,
				id: accordionId,
			});
			return (
				<div {...blockProps}>
					<HeaderElement>
						<button
							aria-expanded={"true"}
							aria-controls={`${accordionId}-panel`}
							data-state={"open"}
							id={`${accordionId}-trigger`}
							className="accordion-header-button"
						>
							<RichText.Content
								tagName={"span"}
								className={"accordion-header-button-text"}
								value={headerContent}
							/>
							<Icon
								iconName="accordion-arrow"
								className={"accordion-header-button-icon"}
								isEditorMode={true}
								size="32"
							/>
						</button>
					</HeaderElement>
					<div
						role="region"
						data-state="open"
						aria-labelledby={`${accordionId}-trigger`}
						id={`${accordionId}-panel`}
						className={"accordion-panel"}
					>
						<div className="accordion-panel-inner-wrapper">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			);
		},
		migrate: (oldAttributes, oldInnerBlocks) => [
			oldAttributes,
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
