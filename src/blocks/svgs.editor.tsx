import type { ReactNode, SVGProps } from "react";
import {
	Button,
	Panel,
	PanelBody,
	PanelHeader,
	SearchControl,
} from "@wordpress/components";
import { applyFilters } from "@wordpress/hooks";
import {
	Icon as WordPressIcon,
	chevronDown,
	chevronUp,
} from "@wordpress/icons";
import { useEffect, useState } from "react";
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
	accordion: {
		title: "Accordion",
	},
	"back-arrow": {
		title: "Back Arrow",
	},
	"banner-zone": {
		title: "Banner zone",
	},
	carousel: {
		title: "Carousel",
	},
	"carousel-navigation-arrows": {
		title: "Carousel navigation arrows",
	},
	"carousel-thumbnails": {
		title: "Carousel thumbnails",
	},
	"carousel-slides": {
		title: "Carousel slides",
	},
	"carousel-with-thumbnails": {
		title: "Carousel with thumbnails",
	},
	"gallery-carousel": {
		title: "Gallery carousel",
	},
	"gallery-carousel-lightbox": {
		title: "Gallery carousel lightbox",
	},
	icon: {
		title: "Icon",
	},
	information: {
		title: "Information",
	},
	list: {
		title: "List",
	},
	"list-item": {
		title: "List item",
	},
	navigation: {
		title: "Navigation",
	},
	"nav-list": {
		title: "Nav list",
	},
	"nav-menu-item": {
		title: "Nav menu item",
	},
	"nav-sub-menu": {
		title: "Nav sub menu",
	},
	tabs: {
		title: "Tabs",
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
	"menu-open-icon": {
		title: "Menu Open Icon",
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
	"logo-banner": {
		title: "Logo banner",
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
	iconSelectHeader = "Icon Select",
	dataOnSelectedIcon,
	onIconSelect,
	onReset,
}: {
	iconSelectHeader?: string;
	dataOnSelectedIcon: SingleSelectedIcon;
	onIconSelect: (dataOnSelectedIcon: SingleSelectedIcon) => void;
	onReset?: () => void;
}) {
	const iconLibraries = getIcons();
	const [searchKeyword, setSearchKeyword] = useState("");

	return (
		<Panel>
			<PanelHeader>
				{iconSelectHeader}{" "}
				{onReset ? (
					<Button
						variant="secondary"
						isDestructive
						onClick={() => {
							onReset();
						}}
						size="small"
					>
						Reset
					</Button>
				) : null}
			</PanelHeader>
			<PanelBody>
				<SearchControl
					label="Search icons"
					value={searchKeyword}
					onChange={(newSearchKeyword) => {
						setSearchKeyword(newSearchKeyword);
					}}
				/>
				<div>
					{Object.entries(iconLibraries).map(([slug, library]) => {
						if (Object.keys(library.availableIcons).length === 0) {
							// If library has no icons before we filter by search, don't show the group at all.
							return null;
						}
						const filteredIcons = Object.entries(library.availableIcons).filter(
							([icon, { title }]) => {
								if (
									icon.includes(searchKeyword) ||
									title.includes(searchKeyword)
								) {
									// TODO: This search is very rudimentary and could be improved later.
									return true;
								}
								return false;
							},
						);
						return (
							<IconSelectGroupAccordion
								key={slug}
								name={library.name}
								iconCount={filteredIcons.length}
							>
								<div className={`icon-select ${slug}-icon-select`}>
									{filteredIcons.map(([icon, { title }]) => {
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
									})}
								</div>
							</IconSelectGroupAccordion>
						);
					})}
				</div>
			</PanelBody>
		</Panel>
	);
}

function IconSelectGroupAccordion({
	name,
	iconCount,
	children,
}: {
	name: string;
	iconCount: number;
	children: ReactNode;
}) {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		if (iconCount === 0 && isOpen) {
			setIsOpen(false);
		}
	}, [isOpen, iconCount]);

	return (
		<div className="icon-select-group-accordion">
			<h3 className="icon-select-group-accordion-header">
				<Button
					type="button"
					aria-expanded={isOpen}
					onClick={() => {
						if (iconCount > 0) {
							setIsOpen(!isOpen);
						}
					}}
					disabled={iconCount === 0}
					className="icon-select-group-accordion-header-button"
				>
					<span className="icon-select-group-accordion-title">
						{name} icons
					</span>
					<span className="icon-select-group-accordion-icon-count">
						{iconCount}
					</span>
					<WordPressIcon
						className="icon-select-group-accordion-arrow"
						icon={isOpen ? chevronUp : chevronDown}
					/>
				</Button>
			</h3>
			{isOpen ? children : null}
		</div>
	);
}
