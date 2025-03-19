# @atomicsmash/launchpad-blocks

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
