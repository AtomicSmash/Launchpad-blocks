/**
 * When adding new icons, it's highly recommended to run the markup through
 * SVGO GUI to reduce the size before being committed. Be sure to enable
 * "Prefer viewBox to width/height" in the settings.
 * Online GUI: https://jakearchibald.github.io/svgomg/
 */
export const iconMetaData = {
	"accordion-arrow": {
		type: "ui",
		title: "Accordion arrow",
	},
	"accordion-group": {
		type: "blockIcon",
		title: "Accordion group",
	},
	"accordion-single": {
		type: "blockIcon",
		title: "Accordion single",
	},
	"play-button": {
		type: "plugin",
		title: "Play button",
	},
	"menu-close-icon": {
		type: "blockIcon",
		title: "Menu Close Icon",
	},
	"manual-post-select": {
		type: "blockIcon",
		title: "Manual post select",
	},
	plus: {
		type: "ui",
		title: "Plus",
	},
	minus: {
		type: "ui",
		title: "Minus",
	},
} as const satisfies Record<
	string,
	{ title: string; type: "plugin" | "blockIcon" | "ui" }
>;
export type IconNames = keyof typeof iconMetaData;
