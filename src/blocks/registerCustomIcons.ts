import domReady from "@wordpress/dom-ready";
import { addFilter } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";
import { iconMetaData, type IconNames } from "./svgs.editor";

// Add custom icons to the Icon Block.
domReady(() => {
	const allPluginIcons = Object.entries(iconMetaData) as [
		IconNames,
		(typeof iconMetaData)[IconNames],
	][];

	const filteredPluginIcons = allPluginIcons.filter(([, { type }]) => {
		return type === "plugin";
	});

	type IconDefinition = {
		isDefault?: boolean;
		name: string;
		title: string;
		icon: string;
		categories?: string[];
		keywords?: string[];
		hasNoIconFill: boolean;
	};

	const customPluginIcons = filteredPluginIcons.map(([icon, { title }]) => {
		return {
			isDefault: false,
			name: icon,
			title,
			icon: `<svg xmlns="http://www.w3.org/2000/svg" style="aspect-ratio: 1/1;"><use href="${window.location.protocol}//${window.location.host}/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#${icon}"/></svg>`,
			categories: [],
			keywords: [],
			hasNoIconFill: false,
		} satisfies IconDefinition;
	});

	type CategoryDefinition = { name: string; title: string };
	const customIconCategories: CategoryDefinition[] = [];

	type IconSetDefinition = {
		isDefault?: boolean;
		type: string;
		title: string;
		icons: IconDefinition[];
		categories?: CategoryDefinition[];
	};

	function addCustomIcons(icons: IconSetDefinition[]) {
		const customIconType = [
			{
				isDefault: false,
				type: "launchpad-plugin-icons",
				title: __("Launchpad plugin icons", "launchpad"),
				icons: customPluginIcons,
				categories: customIconCategories,
			},
		] satisfies IconSetDefinition[];

		const allIcons: IconSetDefinition[] = [...icons, ...customIconType];

		return allIcons;
	}

	addFilter("iconBlock.icons", "launchpad/plugin-icons", addCustomIcons);
});
