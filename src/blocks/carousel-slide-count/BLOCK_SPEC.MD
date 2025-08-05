# Carousel slide count block spec

This is the block spec for this block. Any updates to the block must make sure they follow the spec defined here.
Adding or removing content from this spec should be considered a BREAKING_CHANGE

1. The block must work for all types of users, including but not limited to sighted users, screen-reader users, keyboard users, mouse users, and users on different screen sizes.
2. The admin side design must match the front end design as closely as possible. Any settings for the block not related to its content should be added in the sidebar, not the main content area.
3. The slide count must show the current slide and the total number of slides.
4. Slide count must have an optional prefix and an optional suffix to allow the user to contextualise the numbers
5. The between text must be editable, and when not edited or when an empty string is used in place of the default, it must provide `/` as a default on the front end.
6. The slide count must update when the carousel slide changes, no matter how that slide is changed.
7. The slide count will always be a child of a carousel, and infer as much as possible automatically.
