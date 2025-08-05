import type { InterpretedAttributes } from "./attributes";
import type { BlockExample } from "@atomicsmash/blocks-helpers";

export const example = {
	viewportWidth: 1600,
	attributes: {
		headerContent: "Starry night",
	},
	innerBlocks: [
		{
			name: "core/image",
			attributes: {
				id: 1,
				url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
			},
		},
	],
} satisfies BlockExample<InterpretedAttributes>;
