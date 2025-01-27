import { existsSync } from "node:fs";
import { WordPressAdminInteraction } from "@atomicsmash/wordpress-tests-helper";
import { test as setup } from "@playwright/test";
import { CURRENT_WORDPRESS_VERSION } from "@tests/playwright-utils";
import { manualPostSelect } from "./fixture";
import { contentPersistLocation, doTearDown } from "./index";

setup("Manual post select test setup", async ({ page }) => {
	setup.setTimeout(60000);
	if (existsSync(contentPersistLocation)) {
		await doTearDown(page);
	}
	const adminHelper = new WordPressAdminInteraction(
		page,
		contentPersistLocation,
		CURRENT_WORDPRESS_VERSION,
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
