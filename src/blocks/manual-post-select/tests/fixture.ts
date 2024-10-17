export const manualPostSelect = {
	none: "<!-- wp:launchpad-blocks/manual-post-select /-->",
	manualPostsOnly: (
		posts: [string, string, string],
	) => `<!-- wp:launchpad-blocks/manual-post-select {"selectedPosts":[{"postType":"post","id":"${posts[0]}"},{"postType":"post","id":"${posts[1]}"},{"postType":"post","id":"${posts[2]}"}],"selectedPostTypesManualSelectSearch":["post"],"postsToShow":3} -->
<!-- wp:post-title /-->
<!-- /wp:launchpad-blocks/manual-post-select -->`,
	morePostsThanNumberToShow: (
		posts: [string, string, string, string, string, string],
	) => `<!-- wp:launchpad-blocks/manual-post-select {"selectedPosts":[{"postType":"post","id":"${posts[0]}"},{"postType":"post","id":"${posts[1]}"},{"postType":"post","id":"${posts[2]}"},{"postType":"post","id":"${posts[3]}"},{"postType":"post","id":"${posts[4]}"},{"postType":"post","id":"${posts[5]}"}],"selectedPostTypesManualSelectSearch":["post"],"postsToShow":3} -->
<!-- wp:post-title /-->
<!-- /wp:launchpad-blocks/manual-post-select -->`,
	halfManualHalfAutoPosts: (
		posts: [string, string, string],
	) => `<!-- wp:launchpad-blocks/manual-post-select {"selectedPosts":[{"postType":"post","id":"${posts[0]}"},{"postType":"post","id":"${posts[1]}"},{"postType":"post","id":"${posts[2]}"}],"selectedPostTypesManualSelectSearch":["post"],"selectedPostTypesAutoPostsQuery":["post"],"orderAutoPostsQuery":{"by":"title","direction":"asc"},"shouldFillRemainingSpots":true,"postsToShow":6} -->
<!-- wp:post-title /-->
<!-- /wp:launchpad-blocks/manual-post-select -->`,
	allAutoPosts: `<!-- wp:launchpad-blocks/manual-post-select {"selectedPostTypesManualSelectSearch":["post"],"selectedPostTypesAutoPostsQuery":["post"],"orderAutoPostsQuery":{"by":"title","direction":"asc"},"shouldFillRemainingSpots":true,"postsToShow":6} -->
<!-- wp:post-title /-->
<!-- /wp:launchpad-blocks/manual-post-select -->`,
	allAutoPostsInGrid: `<!-- wp:launchpad-blocks/manual-post-select {"selectedPostTypesManualSelectSearch":["post"],"selectedPostTypesAutoPostsQuery":["post"],"orderAutoPostsQuery":{"by":"date","direction":"asc"},"shouldFillRemainingSpots":true,"postsToShow":6,"layout":{"type":"grid","minimumColumnWidth":"12rem"}} -->
<!-- wp:post-title /-->
<!-- /wp:launchpad-blocks/manual-post-select -->`,
};
