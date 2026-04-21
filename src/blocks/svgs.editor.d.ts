import type { SVGProps } from "react";
export type IconMetaData = Record<string, {
    title: string;
    makeAvailableToUser?: boolean;
}>;
/**
 * When adding new icons, it's highly recommended to run the markup through
 * SVGO GUI to reduce the size before being committed. Be sure to enable
 * "Prefer viewBox to width/height" in the settings.
 * Online GUI: https://jakearchibald.github.io/svgomg/
 */
export declare const iconMetaData: {
    readonly "accordion-arrow": {
        readonly title: "Accordion arrow";
    };
    readonly "accordion-group": {
        readonly title: "Accordion group";
    };
    readonly accordion: {
        readonly title: "Accordion";
    };
    readonly "back-arrow": {
        readonly title: "Back Arrow";
    };
    readonly "banner-zone": {
        readonly title: "Banner zone";
    };
    readonly "break-image-out": {
        readonly title: "Break image out of container";
    };
    readonly "button-with-icon": {
        readonly title: "Button with Icon";
    };
    readonly carousel: {
        readonly title: "Carousel";
    };
    readonly "carousel-navigation-arrows": {
        readonly title: "Carousel navigation arrows";
    };
    readonly "carousel-thumbnails": {
        readonly title: "Carousel thumbnails";
    };
    readonly "carousel-slides": {
        readonly title: "Carousel slides";
    };
    readonly "carousel-with-thumbnails": {
        readonly title: "Carousel with thumbnails";
    };
    readonly "gallery-carousel": {
        readonly title: "Gallery carousel";
    };
    readonly "gallery-carousel-lightbox": {
        readonly title: "Lightbox";
    };
    readonly "heading-with-icon": {
        readonly title: "Heading with icon";
    };
    readonly icon: {
        readonly title: "Icon";
    };
    readonly information: {
        readonly title: "Information";
    };
    readonly list: {
        readonly title: "List";
    };
    readonly "list-item": {
        readonly title: "List item";
    };
    readonly "media-and-text-heading-and-text": {
        readonly title: "Heading and text";
    };
    readonly "media-and-text-heading-text-buttons": {
        readonly title: "Heading, text and button";
    };
    readonly "media-and-text-intro-heading-and-text": {
        readonly title: "Intro, heading and text";
    };
    readonly "media-and-text-intro-heading-text-buttons": {
        readonly title: "Intro, heading, text and button";
    };
    readonly "media-and-text-just-text": {
        readonly title: "Text";
    };
    readonly navigation: {
        readonly title: "Navigation";
    };
    readonly "nav-list": {
        readonly title: "Nav list";
    };
    readonly "nav-menu-item": {
        readonly title: "Nav menu item";
    };
    readonly "nav-sub-menu": {
        readonly title: "Nav sub menu";
    };
    readonly tabs: {
        readonly title: "Tabs";
    };
    readonly "tab-list": {
        readonly title: "Tab list";
    };
    readonly "tab-panel-group": {
        readonly title: "Tab panel group";
    };
    readonly "tab-panel": {
        readonly title: "Tab panel";
    };
    readonly "menu-open-icon": {
        readonly title: "Menu Open Icon";
    };
    readonly "menu-close-icon": {
        readonly title: "Menu Close Icon";
    };
    readonly "manual-post-select": {
        readonly title: "Manual post select";
    };
    readonly plus: {
        readonly title: "Plus";
        readonly makeAvailableToUser: true;
    };
    readonly minus: {
        readonly title: "Minus";
        readonly makeAvailableToUser: true;
    };
    readonly "logo-banner": {
        readonly title: "Logo banner";
    };
    readonly "vertical-tabs": {
        readonly title: "Vertical tabs";
    };
    readonly "carousel-dots": {
        readonly title: "Carousel dots";
    };
    readonly "carousel-slide-count": {
        readonly title: "Carousel slide count";
    };
    readonly cta: {
        readonly title: "CTA";
    };
    readonly "numbered-columns": {
        readonly title: "Numbered columns";
    };
    readonly "section-with-title": {
        readonly title: "Section";
    };
    readonly "chevron-down": {
        readonly title: import("@wordpress/i18n").TranslatableText<"Chevron down">;
        readonly makeAvailableToUser: true;
    };
    readonly "chevron-left": {
        readonly title: import("@wordpress/i18n").TranslatableText<"Chevron left">;
        readonly makeAvailableToUser: true;
    };
    readonly "chevron-right": {
        readonly title: import("@wordpress/i18n").TranslatableText<"Chevron right">;
        readonly makeAvailableToUser: true;
    };
    readonly "chevron-up": {
        readonly title: import("@wordpress/i18n").TranslatableText<"Chevron up">;
        readonly makeAvailableToUser: true;
    };
    readonly lightbox: {
        readonly title: import("@wordpress/i18n").TranslatableText<"Lightbox">;
    };
};
export type IconNames = keyof typeof iconMetaData;
export type IconLibraries = Record<string, {
    name: string;
    renderIcon: (iconName: string, svgProps?: SVGProps<SVGSVGElement>) => JSX.Element;
    availableIcons: IconMetaData;
}>;
type SingleSelectedIcon = {
    iconName: keyof IconLibraries[keyof IconLibraries]["availableIcons"];
    library: keyof IconLibraries;
};
export declare function getIcons(): IconLibraries;
export declare function IconSelectControl({ iconSelectHeader, dataOnSelectedIcon, onIconSelect, onReset, }: {
    iconSelectHeader?: string;
    dataOnSelectedIcon: SingleSelectedIcon;
    onIconSelect: (dataOnSelectedIcon: SingleSelectedIcon) => void;
    onReset?: () => void;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=svgs.editor.d.ts.map