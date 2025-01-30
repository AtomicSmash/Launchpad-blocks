import type { SVGProps } from "react";
import { BaseControl } from "@wordpress/components";
import { applyFilters } from "@wordpress/hooks";
import { Icon } from "./svgs";

export type IconMetaData = Record<
	string,
	{
		title: string;
		makeAvailableToUser?: boolean;
	}
>;
/**
 * When adding new icons, it's highly recommended to run the markup through
 * SVGO GUI to reduce the size before being committed. Be sure to enable
 * "Prefer viewBox to width/height" in the settings.
 * Online GUI: https://jakearchibald.github.io/svgomg/
 */
export const iconMetaData = {
	"accordion-arrow": {
		title: "Accordion arrow",
	},
	"accordion-group": {
		title: "Accordion group",
	},
	"accordion-single": {
		title: "Accordion single",
	},
	"tab-group": {
		title: "Tab group",
	},
	"tab-list": {
		title: "Tab list",
	},
	"tab-panel-group": {
		title: "Tab panel group",
	},
	"tab-panel": {
		title: "Tab panel",
	},
	"menu-close-icon": {
		title: "Menu Close Icon",
	},
	"manual-post-select": {
		title: "Manual post select",
	},
	plus: {
		title: "Plus",
		makeAvailableToUser: true,
	},
	minus: {
		title: "Minus",
		makeAvailableToUser: true,
	},
} as const satisfies IconMetaData;
export type IconNames = keyof typeof iconMetaData;

export type IconLibraries = Record<
	string,
	{
		name: string;
		renderIcon: (
			iconName: string,
			svgProps?: SVGProps<SVGSVGElement>,
		) => JSX.Element;
		availableIcons: IconMetaData;
	}
>;

const launchpadBlocksIconLibraries = {
	"launchpad-blocks": {
		name: "Launchpad blocks",
		renderIcon: (iconName, svgProps) => (
			<Icon iconName={iconName as IconNames} isEditorMode {...svgProps} />
		),
		availableIcons: Object.fromEntries(
			Object.entries(iconMetaData).filter(
				([_slug, icon]) =>
					(icon as IconMetaData[keyof IconMetaData]).makeAvailableToUser ===
					true,
			),
		),
	},
} satisfies IconLibraries;

type SingleSelectedIcon = {
	iconName: keyof IconLibraries[keyof IconLibraries]["availableIcons"];
	library: keyof IconLibraries;
};

export function getIcons() {
	return applyFilters("launchpadBlocks.icons", {
		...launchpadBlocksIconLibraries,
	}) as IconLibraries;
}

export function IconSelectControl({
	dataOnSelectedIcon,
	onIconSelect,
}: {
	dataOnSelectedIcon: SingleSelectedIcon;
	onIconSelect: (dataOnSelectedIcon: SingleSelectedIcon) => void;
}) {
	const iconLibraries = getIcons();

	return (
		<BaseControl __nextHasNoMarginBottom label="Icon Select">
			{Object.entries(iconLibraries).map(([slug, library]) => {
				if (Object.keys(library.availableIcons).length === 0) {
					return null;
				}
				return (
					<>
						<p>{library.name} icons</p>
						<div className={`icon-select ${slug}-icon-select`}>
							{Object.entries(library.availableIcons).map(
								([icon, { title }]) => {
									const isSelected =
										dataOnSelectedIcon.iconName === icon &&
										dataOnSelectedIcon.library === slug;
									return (
										<button
											key={icon}
											className={`icon-select-icon ${slug}-icon-select-icon ${slug}-icon-select-icon-${icon}${isSelected ? " is-selected" : ""}`}
											onClick={() => {
												onIconSelect({
													iconName: icon,
													library: slug,
												});
											}}
											title={title}
										>
											{library.renderIcon(icon)}
										</button>
									);
								},
							)}
						</div>
					</>
				);
			})}
		</BaseControl>
	);
}
