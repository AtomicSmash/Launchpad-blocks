# Section block spec

This is the block spec for this block. Any updates to the block must make sure they follow the spec defined here.
Adding or removing content from this spec should be considered a BREAKING_CHANGE

1. The block must work for all types of users, including but not limited to sighted users, screen-reader users, keyboard users, mouse users, and users on different screen sizes.
2. The admin side design must match the front end design as closely as possible. Any settings for the block not related to its content should be added in the sidebar, not the main content area.
3. When it has no inner blocks, the editor side must display a clickable element to make it easy to add blocks into the section.
4. Sections must always have a title, and the user must be able to select the correct semantic heading level for their use case.
5. Background colours for the section are added via block styles. Launchpad defines 3 for the main colours, and then child themes can extend this if necessary. A block style must set both the background and text colours for the block.
6. Container width is editable for the user, but defaults to normal container widths for content.
7. Vertical padding is editable for the user, but defaults to spacing var 10.
