# @atomicsmash/launchpad-blocks

## 2.1.0

### Minor Changes

- 643bc5a: Add option to stretch section title

### Patch Changes

- 7126eb2: Fix section title alignment on frontend
- cbf894d: Hide manual post select variations from inserter
- 55085c2: add icon for heading and paragraph variation in carousel content slides

## 2.0.1

### Patch Changes

- bed6b0f: Fix carousels that have slide gaps

## 2.0.0

### Major Changes

- 94f52b4: Remove block styles from section block in favour of colour select

### Minor Changes

- 653f584: Add new block for creating block slides (Carousel content slides)
- 653f584: Add align option for carousels
- f7b66e4: Add text align control for title
- 653f584: Make carousel nav arrows and dots work in the editor for content carousel

### Patch Changes

- 653f584: Fix slide count alignment

## 1.2.1

### Patch Changes

- 6180c79: Update deps

## 1.2.0

### Minor Changes

- 4ef96c1: Add buttons block to blocks in php

### Patch Changes

- b71f277: Fix buttons case in blocks in php
- 3e604c0: Fix icon clipping in fancy list

## 1.1.2

### Patch Changes

- 0f00b29: Move typography variables to the parent only stylesheet

## 1.1.1

### Patch Changes

- 9c21aae: Add missing typography variables for font family, colour and font-weight

## 1.1.0

### Minor Changes

- 06cf033: Refactor variables to make them easier to set and more applicable to the styles

## 1.0.0

### Major Changes

- 9e8a2d1: update variables used in launchpad blocks including carousel, accordion, media and text block
- 16c4cf1: Set the correct CSS manipulation steps for the theme and plugin.
- d71aa9d: Initial beta release
- c7a9cad: split out other variables into variables.scss
- c7a9cad: refactor typography into mixins and add mixins helper
- 292eb0f: Convert accordion to dynamic block and make icon filterable
- d92aec6: Update WordPress minimum version
- a0a274b: Wrap accordion open/close icon in wrapping div to make it easier to create some styles
- efb0174: Move accordion heading level select to accordion group
- 396b084: Switch to the new compiler
- fe0eb54: Move sanitisation to blocks plugin
- c7a9cad: update variables in block test fixtures and attributes
- c7a9cad: setup base variables for colours, spacing and typography
- c7a9cad: remove typography font sizes from theme.json in aid of block styles
- c7a9cad: Add block styles for headings and paragraphs
- 12f0623: Added PSR4 autoloading

### Minor Changes

- 2919e80: Add block icons and previews
- 5612bd5: Add manual post select block
- 6f2ea15: Add numbered columns block
- 7681dc6: Add variation selector when adding a new manual post select block onto the page
- baffd14: Add gallery carousel block
- b145c4f: Add plugin icons to icon block
- 1bdbbef: Make all fixed icons filterable
- 66a4630: Allow NumberInput to be updated by external values
- b5b127b: Add aspect ratio select control
- 4ec82fe: Add navigation blocks
- 9f7b942: Added new horizontal and vertical variations to tabs block
- 989f635: Add button support to blocks in php
- 06be248: Move colour controls to styles tab for consistency
- efb0174: Improve accordion appender for clarity
- 2c17780: Add carousel dots block
- efb0174: Rename custom list to increase list distinction
- 94ddb83: Add nav links group block for showing static link lists
- 0bf631f: Resolved bug with icon block where the preview was too large
- 7ee4a9a: Update WordPress version
- 76af133: Create helper hook for handling unique block ids
- efb0174: Automatically add accordion when adding accordion group
- 1447f86: Add helper functions for converting data to blocks in php
- dfc70e4: Remove test icon
- de263c0: Added global banner block
  Added global banner output block
  Added global banner custom post type
  Added ACF Pro plugin
  Added ACF options for global banner
- dfc70e4: Add fancy list blocks
- 464ed23: Add filter so custom block markup generation can be added for blocks not supported by Launchpad
- eff47e4: Add function for getting icon renderers for all registered libraries
- 1958889: Added tabs custom block
- 7c98989: Add icon block and register icon libraries
- 91025d5: Added icon compilation to blocks plugin, refactored src and build folders
- ec1c154: Add Section block
- 94a7670: Added a clarifying note to the banner builder so that it is clear where to select the global banners when creating a new banner
- adfc4e9: Add reset buttons to carousel navigation arrows icon select
- 434222a: Add the ability to autofill posts via query to the manual post select block
- d9f5767: Add logo banner block
- cc958c0: Add slide count block
- c4e6c5f: Added accordion-group and accordion custom blocks
- 464ed23: Add embed support to block comment generation
- 862ba05: Add style string builder helper function
- 1b9defc: Add carousel blocks
- f2fe4bb: Add class if child is current menu item
- 5cfd0e9: Add some core blocks support for block comment generation
- 1fd48f4: Add class if menu item is current page

### Patch Changes

- 4127b9a: fix navigation block js to remove block template part div
- 94ddb83: Fix infinite loop bug if blocks with uniqueIds are used within template parts.
- c3295f5: Fix manual post select showing more posts than it should when posts shown was less than selected posts
- 5b09b2d: Prevent double menu insert buttons for submenu in main navigation block
- db24e89: Add accessible name to lightbox close button
- 2c17780: Fix block appender for inside carousel navigation arrows
- ee290b4: Fix 3
- efb0174: Remove false positives from prop types eslint rule by disabling rule
- 3c7de8e: Optimise dependencies in releases
- 847f6b7: Use same alias name as child projects
- e21d695: Fix overflow issue in chrome for carousel arrows inner area
- adad324: Fix img tag output if rendered from context in carousel
- 0bac398: Fix lists when formatting tags are used
- 3f842ee: match accordion arrow icon colour with text colour
- 0529998: add breakout media and text block
- 7097321: Fix logo banner
- 4cd5cbb: Add checks on the render side for empty lists and list items
- de4aa26: Minor Launchpad fixes
  1. Adds text based resets like inheriting font styles for elements
  2. Update's the accordion block to fix content font size when a different font size is selected for the header.
  3. Update's the accordion block to fix padding when a larger font size is selected
  4. Add blog home template
  5. Add default padding to CTA pattern
  6. Update negative spacer meta data to fix the slug and name, and add a different spacer class to it so it can be styled differently.
  7. Copy CSS styles for page spacer from Cloudcall and write styles for negative page spacer.
  8. Set default block gap (space between blocks) to spacing var 2
  9. Fix body background colour conflict

- 36f9a95: Update dependencies
- 5a96173: Add aria labels for thumbnail buttons
- 989f635: Fix the block markup generation in blocks in php
- f07f275: Prevent submenu being available in nav links group
- 57fadce: Use carousel images as thumbnail previews
- 76af133: Fix ids when duplicating accordion blocks
- 2e37f1c: Fix 2
- e7f9207: Fix error message in site editor
- adad324: Fix subpixel rendering issue for slides in carousel
- 018cf7e: Update coding standards and fix linting errors
- 9a9dde6: Show icon background for list item if no icon selected
- adad324: Make accessibility fixes to carousel
- fca2ab3: Fix taxonomy relationship toggles
- bf31681: Fix accessibility of nav sub menus and add aria current to links
- 7b46265: Prevent adding new blocks to gallery lightbox
- adfc4e9: Render carousel images as smaller images
- c5edb1c: Make sure logos don't get too big and don't crop logos
- f7ec836: Handle image and link fields if array is returned
- 3593188: Fix global banner tests so it works if banners are already selected
- 319a5e4: Attempt to fix release process
- b743805: Add size attribute to icon block
- 1cc1dbd: Update deps
- a50435c: Prefix all data attributes used to target blocks in the document scope
- 3ea5d03: Add initial content when List block is first added
- abdc021: rename gallery with lightbox blocks, tests and icons
- 79c6089: Fix block defaults if no default value is set
- 37dc1f9: Prevent lightbox block being used on its own
- 64e47f9: Apply content filters to rendered blocks correctly
- 98a7192: Add better default support for tall portrait images
- d7d051a: Fix button text colour on safari in navigation
- d9a56e9: Add aria label for nav list block
- d566c0e: Fix reduce number inactive class in NumberInput
- 041d5b9: Fix tests
- eeb4c6e: Bugfix styling for old API versions
- 3f842ee: Fix height issues on menu open icon
- 018cf7e: Update dependencies
- b5c78ed: Fix embeds block rendering
- 989f635: Fix php types for generate banner id in global banner
- 3d6aac2: Upgrades from Wordpress 6.6 to Wordpress 6.7
- 045371e: fix screen reader text for carousel
- 80f54fe: Add cursor pointer style to button reset styles
- 7df832e: Update WordPress headers and schemas
- 26b1b1d: Add lightbox as keyword to gallery carousel to make it easier to find
- 74c8644: Minor linting updates
- 57a8ee5: Improve icon select UX
- f8dddff: fix subMenuId not setting correctly
- 75d2671: fix group support for acf fields

## 1.0.0-beta.40

### Major Changes

- 9e8a2d1: update variables used in launchpad blocks including carousel, accordion, media and text block
- c7a9cad: split out other variables into variables.scss
- c7a9cad: refactor typography into mixins and add mixins helper
- 396b084: Switch to the new compiler
- c7a9cad: update variables in block test fixtures and attributes
- c7a9cad: setup base variables for colours, spacing and typography
- c7a9cad: remove typography font sizes from theme.json in aid of block styles
- c7a9cad: Add block styles for headings and paragraphs

### Minor Changes

- 6f2ea15: Add numbered columns block
- 7681dc6: Add variation selector when adding a new manual post select block onto the page
- 9f7b942: Added new horizontal and vertical variations to tabs block
- 989f635: Add button support to blocks in php
- 2c17780: Add carousel dots block
- 94ddb83: Add nav links group block for showing static link lists
- 0bf631f: Resolved bug with icon block where the preview was too large
- 7ee4a9a: Update WordPress version
- ec1c154: Add Section block
- 94a7670: Added a clarifying note to the banner builder so that it is clear where to select the global banners when creating a new banner
- cc958c0: Add slide count block
- f2fe4bb: Add class if child is current menu item
- 1fd48f4: Add class if menu item is current page

### Patch Changes

- 4127b9a: fix navigation block js to remove block template part div
- 94ddb83: Fix infinite loop bug if blocks with uniqueIds are used within template parts.
- 5b09b2d: Prevent double menu insert buttons for submenu in main navigation block
- 2c17780: Fix block appender for inside carousel navigation arrows
- 0529998: add breakout media and text block
- 5a96173: Add aria labels for thumbnail buttons
- 989f635: Fix the block markup generation in blocks in php
- f07f275: Prevent submenu being available in nav links group
- 57fadce: Use carousel images as thumbnail previews
- 018cf7e: Update coding standards and fix linting errors
- 1cc1dbd: Update deps
- abdc021: rename gallery with lightbox blocks, tests and icons
- 018cf7e: Update dependencies
- 989f635: Fix php types for generate banner id in global banner

## 1.0.0-beta.39

### Minor Changes

- adfc4e9: Add reset buttons to carousel navigation arrows icon select

### Patch Changes

- adfc4e9: Render carousel images as smaller images

## 1.0.0-beta.38

### Patch Changes

- c5edb1c: Make sure logos don't get too big and don't crop logos

## 1.0.0-beta.37

### Patch Changes

- 7097321: Fix logo banner

## 1.0.0-beta.36

### Minor Changes

- d9f5767: Add logo banner block

## 1.0.0-beta.35

### Patch Changes

- a50435c: Prefix all data attributes used to target blocks in the document scope
- 045371e: fix screen reader text for carousel

## 1.0.0-beta.34

### Minor Changes

- 66a4630: Allow NumberInput to be updated by external values

## 1.0.0-beta.33

### Patch Changes

- d566c0e: Fix reduce number inactive class in NumberInput

## 1.0.0-beta.32

### Minor Changes

- 2919e80: Add block icons and previews

### Patch Changes

- e21d695: Fix overflow issue in chrome for carousel arrows inner area

## 1.0.0-beta.31

### Major Changes

- efb0174: Move accordion heading level select to accordion group

### Minor Changes

- efb0174: Improve accordion appender for clarity
- efb0174: Rename custom list to increase list distinction
- efb0174: Automatically add accordion when adding accordion group

### Patch Changes

- efb0174: Remove false positives from prop types eslint rule by disabling rule

## 1.0.0-beta.30

### Minor Changes

- 5cfd0e9: Add some core blocks support for block comment generation

## 1.0.0-beta.29

### Patch Changes

- 75d2671: fix group support for acf fields

## 1.0.0-beta.28

### Patch Changes

- f7ec836: Handle image and link fields if array is returned

## 1.0.0-beta.27

### Patch Changes

- b5c78ed: Fix embeds block rendering

## 1.0.0-beta.26

### Minor Changes

- 464ed23: Add filter so custom block markup generation can be added for blocks not supported by Launchpad
- 464ed23: Add embed support to block comment generation

### Patch Changes

- 64e47f9: Apply content filters to rendered blocks correctly

## 1.0.0-beta.25

### Minor Changes

- 1447f86: Add helper functions for converting data to blocks in php

## 1.0.0-beta.24

### Patch Changes

- eeb4c6e: Bugfix styling for old API versions

## 1.0.0-beta.23

### Major Changes

- a0a274b: Wrap accordion open/close icon in wrapping div to make it easier to create some styles

## 1.0.0-beta.22

### Patch Changes

- 4cd5cbb: Add checks on the render side for empty lists and list items

## 1.0.0-beta.21

### Minor Changes

- 1bdbbef: Make all fixed icons filterable

### Patch Changes

- 3f842ee: match accordion arrow icon colour with text colour
- 3f842ee: Fix height issues on menu open icon

## 1.0.0-beta.20

### Patch Changes

- 847f6b7: Use same alias name as child projects
- 37dc1f9: Prevent lightbox block being used on its own
- 26b1b1d: Add lightbox as keyword to gallery carousel to make it easier to find

## 1.0.0-beta.19

### Minor Changes

- eff47e4: Add function for getting icon renderers for all registered libraries

### Patch Changes

- f8dddff: fix subMenuId not setting correctly

## 1.0.0-beta.18

### Minor Changes

- 76af133: Create helper hook for handling unique block ids

### Patch Changes

- db24e89: Add accessible name to lightbox close button
- adad324: Fix img tag output if rendered from context in carousel
- 0bac398: Fix lists when formatting tags are used
- 76af133: Fix ids when duplicating accordion blocks
- adad324: Fix subpixel rendering issue for slides in carousel
- 9a9dde6: Show icon background for list item if no icon selected
- adad324: Make accessibility fixes to carousel
- bf31681: Fix accessibility of nav sub menus and add aria current to links
- 7b46265: Prevent adding new blocks to gallery lightbox
- b743805: Add size attribute to icon block
- 3ea5d03: Add initial content when List block is first added
- 98a7192: Add better default support for tall portrait images
- d7d051a: Fix button text colour on safari in navigation
- d9a56e9: Add aria label for nav list block
- 57a8ee5: Improve icon select UX

## 1.0.0-beta.17

### Major Changes

- fe0eb54: Move sanitisation to blocks plugin

### Minor Changes

- baffd14: Add gallery carousel block
- 06be248: Move colour controls to styles tab for consistency
- 862ba05: Add style string builder helper function

### Patch Changes

- 80f54fe: Add cursor pointer style to button reset styles

## 1.0.0-beta.16

### Major Changes

- 292eb0f: Convert accordion to dynamic block and make icon filterable

## 1.0.0-beta.15

### Minor Changes

- 4ec82fe: Add navigation blocks

## 1.0.0-beta.14

### Minor Changes

- b5b127b: Add aspect ratio select control
- 1b9defc: Add carousel blocks

### Patch Changes

- 36f9a95: Update dependencies
- 79c6089: Fix block defaults if no default value is set

## 1.0.0-beta.13

### Minor Changes

- dfc70e4: Remove test icon
- dfc70e4: Add fancy list blocks

## 1.0.0-beta.12

### Minor Changes

- 7c98989: Add icon block and register icon libraries

## 1.0.0-beta.11

### Patch Changes

- 3593188: Fix global banner tests so it works if banners are already selected

## 1.0.0-beta.10

### Patch Changes

- de4aa26: Minor Launchpad fixes
  1. Update's the accordion block to fix content font size when a different font size is selected for the header.
  2. Update's the accordion block to fix padding when a larger font size is selected

## 1.0.0-beta.9

### Patch Changes

- 7df832e: Update WordPress headers and schemas

## 1.0.0-beta.8

### Minor Changes

- 1958889: Added tabs custom block

### Patch Changes

- 3d6aac2: Upgrades from Wordpress 6.6 to Wordpress 6.7

## 1.0.0-beta.7

### Patch Changes

- 041d5b9: Fix tests

## 1.0.0-beta.6

### Patch Changes

- e7f9207: Fix error message in site editor
- fca2ab3: Fix taxonomy relationship toggles
- 74c8644: Minor linting updates

## 1.0.0-beta.5

### Patch Changes

- 3c7de8e: Optimise dependencies in releases

## 1.0.0-beta.4

### Patch Changes

- ee290b4: Fix 3

## 1.0.0-beta.3

### Patch Changes

- 2e37f1c: Fix 2

## 1.0.0-beta.2

### Patch Changes

- 319a5e4: Attempt to fix release process

## 1.0.0-beta.1

### Major Changes

- 16c4cf1: Set the correct CSS manipulation steps for the theme and plugin.
- d92aec6: Update WordPress minimum version
- 12f0623: Added PSR4 autoloading

### Minor Changes

- 5612bd5: Add manual post select block
- b145c4f: Add plugin icons to icon block
- de263c0: Added global banner block
  Added global banner output block
  Added global banner custom post type
  Added ACF Pro plugin
  Added ACF options for global banner
- 91025d5: Added icon compilation to blocks plugin, refactored src and build folders
- 434222a: Add the ability to autofill posts via query to the manual post select block
- c4e6c5f: Added accordion-group and accordion custom blocks

### Patch Changes

- c3295f5: Fix manual post select showing more posts than it should when posts shown was less than selected posts

## 1.0.0-beta.0

### Major Changes

- d71aa9d: Initial beta release
