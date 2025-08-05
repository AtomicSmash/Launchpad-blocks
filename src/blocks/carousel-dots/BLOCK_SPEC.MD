# Carousel dots block spec

This is the block spec for this block. Any updates to the block must make sure they follow the spec defined here.
Adding or removing content from this spec should be considered a BREAKING_CHANGE

1. The block must work for all types of users, including but not limited to sighted users, screen-reader users, keyboard users, mouse users, and users on different screen sizes.
2. The admin side design must match the front end design as closely as possible. Any settings for the block not related to its content should be added in the sidebar, not the main content area.
3. Dots must be clickable to take the user to the relevant slide.
4. Dots must show the currently selected slide by adding the is-selected class to the dot.
5. The dots must update when the carousel slide changes, no matter how that slide is changed.
6. The dots will always be a child of a carousel, and infer as much as possible automatically.
