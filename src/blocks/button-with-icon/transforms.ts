import type { InterpretedAttributes } from "./attributes";
import type { BlockTransforms } from "@atomicsmash/blocks-helpers";
import { createBlock } from "@wordpress/blocks";

export const transforms = {
	from: [
		{
			type: "block",
			blocks: ["core/button"],
			transform: (attributes) => {
				const { text, url, linkTarget, className } = attributes;
				return createBlock("launchpad-blocks/button-with-icon", {
					linkHref: url,
					linkText: text,
					linkTarget: linkTarget,
					className: className,
				});
			},
		},
	],
	to: [
		{
			type: "block",
			blocks: ["core/button"],
			transform: (attributes) => {
				const { linkText, linkHref, linkTarget, className } = attributes;
				return createBlock("core/button", {
					url: linkHref,
					text: linkText,
					linkTarget: linkTarget,
					className: className,
				});
			},
		},
	],
} satisfies {
	from: BlockTransforms<Record<string, unknown>>;
	to: BlockTransforms<InterpretedAttributes>;
};
