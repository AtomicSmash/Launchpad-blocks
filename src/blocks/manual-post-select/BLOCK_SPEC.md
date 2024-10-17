# Manual post select block spec

This is the block spec for this block. Any updates to the block must make sure they follow the spec defined here.
Adding or removing content from this spec should be considered a BREAKING_CHANGE

1. The block must work for all types of users, including but not limited to sighted users, screen-reader users, keyboard users, mouse users, and users on different screen sizes.
2. The admin side design must match the front end design as closely as possible. Any settings for the block not related to its content should be added in the sidebar, not the main content area.
3. The main use of the manual post select block is for selecting specific posts to be shown. If you only want to show automatically generated posts, you should instead use the core query loop block, which supports pagination and no-results.
4. This block doesn't support pagination or no-results data. It's the users responsibility to ensure there are posts available. If no posts are found or selected, it will output an empty div on the front end and a simple text message on the edit side.
5. The default layout for posts is flow, but can be switched and controlled in the editor as needed.
6. You must select how many posts you want to show. This is used as an upper limit in cases where there are more posts selected/fillable than the amount you want to show. If you select 3 posts but only have posts to show set to 1 (default), only 1 post will show.
7. The block will show the post title by default, but this is customisable in the editor for each use.
8. The block will not automatically fill remaining slots via a query. You must explicitly enable this via a toggle in the sidebar.
9. The sidebar is split into three sections, output, select posts and query, and they are shown in that order. The output comes first, which includes the posts to show and whether you want to fill remaining slots with automatic posts. The select posts comes next. If you have selected autofill, it will default to using the same query for search results, and it can use its own query if toggled to. The search results are shown and can be clicked to be selected, and once selected, they can be re-ordered by dragging them. Select posts "order" section only affects the search results, not the order the selected posts are shown in. The query panel shows a query to show additional posts. The "order" section for query sets the order the posts are shown in.
10. If autofill is not selected, query panel will not be shown and the toggle to use its own query in Select posts will be hidden, and it will be forced to show its own query.
11. Selected posts always appear first, and auto-filled posts follow afterwards.
12. The order of posts shown on the editor side and the front end will mostly match, however they are not guaranteed to be the same, especially in cases where the order value matches (e.g. author is the same), so it is recommended to preview posts before you publish.
13. Manual post select only provides styling to remove the default list style from the listed posts, and is otherwise unstyled. Styling can be applied to inner blocks.
14. By default, the manual post select will exclude the current post from the autofill query, however it will not do so for the selected posts. If you select the current post and toggle the exclude current post to exclude it, it will still show.
15. The search inputs and posts to show fields have a debounce timeout on them because if the editor re-renders too quickly, it will throw an error which requires a refresh.
