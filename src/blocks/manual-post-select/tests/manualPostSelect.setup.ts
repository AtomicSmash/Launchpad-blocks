import { test as setup } from "@tests/playwright-utils";
import { WordPressAdminInteraction } from "@tests/wordpress-helper";
import { manualPostSelect } from "./fixture";
import { contentPersistLocation } from "./index";

setup("Manual post select test setup", async ({ authenticatedPage: page }) => {
	setup.setTimeout(120000);
	const adminHelper = new WordPressAdminInteraction(
		page,
		contentPersistLocation,
	);
	await adminHelper.init();
	await adminHelper.createPostsViaBlocksEditor([
		{
			postIdentifier: "test-page",
			title: "Manual post select tests",
			postType: "page",
		},
		{
			postIdentifier: "test-post-1",
			title: "Test post 1",
			options: {
				makeTitleUnique: false,
			},
		},
		{
			postIdentifier: "test-post-2",
			title: "Test post 2",
			options: {
				makeTitleUnique: false,
			},
		},
		{
			postIdentifier: "test-post-3",
			title: "Test post 3",
			options: {
				makeTitleUnique: false,
			},
		},
		{
			postIdentifier: "test-post-4",
			title: "Test post 4",
			options: {
				makeTitleUnique: false,
			},
		},
		{
			postIdentifier: "test-post-5",
			title: "Test post 5",
			options: {
				makeTitleUnique: false,
			},
		},
		{
			postIdentifier: "test-post-6",
			title: "Test post 6",
			options: {
				makeTitleUnique: false,
			},
		},
	]);
	await adminHelper.addContentByFixture("test-page", [
		`<!-- wp:heading -->
<h2 class="wp-block-heading">No posts selected or auto-filled</h2>
<!-- /wp:heading -->`,
		manualPostSelect.none,
		`<!-- wp:heading -->
<h2 class="wp-block-heading">3 posts manually selected</h2>
<!-- /wp:heading -->`,
		manualPostSelect.manualPostsOnly([
			adminHelper.getPostId("test-post-1"),
			adminHelper.getPostId("test-post-2"),
			adminHelper.getPostId("test-post-3"),
		]),
		`<!-- wp:heading -->
<h2 class="wp-block-heading">6 posts manually selected, 3 posts shown</h2>
<!-- /wp:heading -->`,
		manualPostSelect.morePostsThanNumberToShow([
			adminHelper.getPostId("test-post-1"),
			adminHelper.getPostId("test-post-2"),
			adminHelper.getPostId("test-post-3"),
			adminHelper.getPostId("test-post-4"),
			adminHelper.getPostId("test-post-5"),
			adminHelper.getPostId("test-post-6"),
		]),
		`<!-- wp:heading -->
<h2 class="wp-block-heading">3 posts manually selected, 3 posts auto-filled</h2>
<!-- /wp:heading -->`,
		manualPostSelect.halfManualHalfAutoPosts([
			adminHelper.getPostId("test-post-1"),
			adminHelper.getPostId("test-post-2"),
			adminHelper.getPostId("test-post-3"),
		]),
		`<!-- wp:heading -->
<h2 class="wp-block-heading">6 posts auto-filled</h2>
<!-- /wp:heading -->`,
		manualPostSelect.allAutoPosts,
		`<!-- wp:heading -->
<h2 class="wp-block-heading">6 posts auto-filled in a grid layout</h2>
<!-- /wp:heading -->`,
		manualPostSelect.allAutoPostsInGrid,
	]);
});
