# Tabs block spec

This is the block spec for this block. Any updates to the block must make sure they follow the spec defined here.
Adding or removing content from this spec should be considered a BREAKING_CHANGE

1. The block must work for all types of users, including but not limited to sighted users, screen-reader users, keyboard users, mouse users, and users on different screen sizes.
2. The admin side design must match the front end design as closely as possible. Any settings for the block not related to its content should be added in the sidebar, not the main content area.
3. The tabs list and tab panel blocks must be contained in the parent Tabs block, as this parent block controls context for the tabs blocks. These blocks are also required and cannot be excluded without errors.
4. The tabs list and tab panel groups can be nested in any number of other elements, as long as they are children of the tabs block, they will continue to work fine.
5. The tabs list block is only used to display tabs for the added tab panels. You cannot add a tab from the tabs list block, you must add a tab panel, at which point a tab will appear in the list, with a customisable rich text label.
6. Tab panels must be direct children of the tab panel group block.
7. There should only be 1 tab list and 1 tab panel group block per Tabs parent block. Others can be added to the editor but are not actively supported or tested.
8. The tabs on the editor side work the same as the front end, where only one tab panel is visible at a time, and you must click the tabs to change which panel is shown.
9. The tab panel should be able to have any inner blocks within it, including but not limited to text, images, videos, embeds with the exception of other tabs blocks. Nested tab blocks are not currently supported, so expect bugs if you nest tabs blocks.
10. There is no requirement for the tabs list to come before the tab panel, it can appear alongside it or underneath it. This allows great flexibility when styling to create floating tab buttons, traditional tabs, tabs from the bottom of the tab panel (e.g. windows task bar or mac dock) or tabs on the side of the panel.
11. If two tabs share the same name (e.g. after duplicating a panel), the tab panels will break. Each tab requires a unique name for the tabs to work correctly.
12. The parent tabs block contains a title for the tabs group. This title must always be provided, but there are settings to hide it visually so it only applies for screen readers. This title is required for accessibility so it is not an acceptable option to remove it. When visually shown, there's options to change what kind of heading element (h1-h6) it will show.
13. The parent tabs block contains a setting for setting the initial tab to be selected when first shown. If this is left as default, then it will show the first tab in the tab order.
14. The parent tabs block contains a setting for a unique tab identifier. This tab identifier is used in the URL to set which tab is shown. This allows users to share a page with a specific tab shown other than the default one shown. This ID must be unique and prevents you from using two tabs blocks on the same page with the same id, but it can't detect tabs in other areas of the site (e.g. the footer) so this requires manual checking.
