<?php
	// This file is generated. Do not modify it manually.
	return array(
	'blocks/accordion' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/accordion',
		'parent' => array(
			'launchpad-blocks/accordion-group'
		),
		'title' => 'Accordion',
		'category' => 'theme',
		'description' => 'A block which has a header and collapsible content.',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			'accordion'
		),
		'editorScript' => array(
			'file:./index.cff91a7a457b87b5fffc.js'
		),
		'style' => array(
			'file:./style.95c9d1fcd1af6b61f16c.css'
		),
		'editorStyle' => array(
			'file:./editor-style.9b580502a3c7372715c7.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'isInitiallyOpen' => array(
				'type' => 'boolean',
				'default' => false
			),
			'accordionId' => array(
				'type' => 'string',
				'default' => ''
			),
			'headerContent' => array(
				'type' => 'string'
			),
			'headerElement' => array(
				'type' => 'string',
				'enum' => array(
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
					'p'
				),
				'default' => 'h2'
			)
		),
		'supports' => array(
			'color' => true,
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'textAlign' => true
			),
			'shadow' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			'launchpad-blocks/accordion-heading-level'
		),
		'example' => array(
			'attributes' => array(
				'isInitiallyOpen' => false,
				'accordionId' => '123',
				'headerElement' => 'h2',
				'headerContent' => 'Joke 1'
			),
			'innerBlocks' => array(
				array(
					'name' => 'core/paragraph',
					'attributes' => array(
						'content' => 'I was going to sail around the globe in the world’s smallest ship but I bottled it.'
					)
				)
			)
		)
	),
	'blocks/accordion-group' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/accordion-group',
		'title' => 'Accordion group',
		'category' => 'theme',
		'description' => 'A group of accordions.',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			'accordion'
		),
		'editorScript' => array(
			'file:./index.d97f640b3dbb0089cdb2.js'
		),
		'viewScript' => array(
			'file:./view.f666f5da98d0501d5f3f.js'
		),
		'editorStyle' => array(
			'file:./editor-style.09ce301a320437c54e81.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'isMultiple' => array(
				'type' => 'boolean',
				'default' => false
			),
			'accordionGroupId' => array(
				'type' => 'string',
				'default' => ''
			),
			'headerElement' => array(
				'type' => 'string',
				'enum' => array(
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
					'p'
				),
				'default' => 'h2'
			)
		),
		'example' => array(
			'attributes' => array(
				'isMultiple' => true,
				'accordionGroupId' => 'group-123',
				'headerElement' => 'h3'
			),
			'innerBlocks' => array(
				array(
					'name' => 'launchpad-blocks/accordion',
					'attributes' => array(
						'isInitiallyOpen' => true,
						'accordionId' => 'single-123',
						'headerContent' => 'Joke 1'
					),
					'innerBlocks' => array(
						array(
							'name' => 'core/paragraph',
							'attributes' => array(
								'content' => 'I was going to sail around the globe in the world’s smallest ship but I bottled it.'
							)
						)
					)
				),
				array(
					'name' => 'launchpad-blocks/accordion',
					'attributes' => array(
						'isInitiallyOpen' => true,
						'accordionId' => 'single-456',
						'headerContent' => 'Joke 2'
					),
					'innerBlocks' => array(
						array(
							'name' => 'core/paragraph',
							'attributes' => array(
								'content' => 'I sailed through my driving test. That’s why I failed it.'
							)
						)
					)
				),
				array(
					'name' => 'launchpad-blocks/accordion',
					'attributes' => array(
						'isInitiallyOpen' => true,
						'accordionId' => 'single-789',
						'headerContent' => 'Joke 3'
					),
					'innerBlocks' => array(
						array(
							'name' => 'core/paragraph',
							'attributes' => array(
								'content' => 'I love the Olympics. My friend and I invented a new type of relay baton: well, he came up with the idea, I ran with it.'
							)
						)
					)
				)
			)
		),
		'supports' => array(
			'color' => true,
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'textAlign' => true
			),
			'shadow' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			)
		),
		'providesContext' => array(
			'launchpad-blocks/accordion-heading-level' => 'headerElement'
		),
		'usesContext' => array(
			
		),
		'allowedBlocks' => array(
			'launchpad-blocks/accordion'
		)
	),
	'blocks/button-with-icon' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/button-with-icon',
		'title' => 'Button with icon',
		'ancestor' => array(
			'core/buttons'
		),
		'category' => 'theme',
		'description' => 'A button with selectable icon',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			'button',
			'link',
			'icon'
		),
		'editorScript' => array(
			'file:./index.50f85c3184a71972a3b8.js'
		),
		'viewScript' => array(
			'file:./view.535e66f2928c2639ca1b.js'
		),
		'style' => array(
			'file:./style.569480f32bde53db40eb.css'
		),
		'editorStyle' => array(
			'file:./editor-style.58c0cc8e13cc7e34acc2.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'iconName' => array(
				'type' => 'string',
				'role' => 'content'
			),
			'library' => array(
				'type' => 'string',
				'role' => 'content'
			),
			'size' => array(
				'type' => 'string',
				'default' => '1rem'
			),
			'iconPosition' => array(
				'type' => 'string',
				'enum' => array(
					'start',
					'end'
				),
				'default' => 'start'
			),
			'linkId' => array(
				'type' => 'number'
			),
			'linkKind' => array(
				'type' => 'string'
			),
			'linkType' => array(
				'type' => 'string'
			),
			'linkHref' => array(
				'type' => 'string'
			),
			'linkTarget' => array(
				'type' => 'string',
				'enum' => array(
					'_self',
					'_blank'
				),
				'default' => '_self'
			),
			'linkText' => array(
				'type' => 'string'
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			
		),
		'example' => array(
			'attributes' => array(
				'library' => 'launchpad-blocks',
				'iconName' => 'button-with-icon',
				'size' => '1rem',
				'iconPosition' => 'start',
				'linkText' => 'button'
			)
		),
		'supports' => array(
			
		)
	),
	'blocks/carousel' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/carousel',
		'title' => 'Carousel',
		'category' => 'theme',
		'description' => '',
		'textdomain' => 'launchpad-blocks',
		'allowedBlocks' => array(
			'launchpad-blocks/carousel-slides',
			'launchpad-blocks/carousel-content-slides',
			'launchpad-blocks/carousel-thumbnails',
			'launchpad-blocks/carousel-navigation-arrows',
			'launchpad-blocks/carousel-dots',
			'launchpad-blocks/carousel-slide-count'
		),
		'keywords' => array(
			
		),
		'editorScript' => array(
			'file:./index.f67337b8922276a0ef74.js'
		),
		'viewScript' => array(
			'file:./view.fdb379d21610131f1233.js'
		),
		'style' => array(
			'file:./style.fc4cbcf00e66d7349912.css'
		),
		'editorStyle' => array(
			'file:./editor-style.31d6cfe0d16ae931b73c.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'images' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'shouldLoop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'shouldLinkSlidesToLightbox' => array(
				'type' => 'boolean',
				'default' => false
			),
			'slides' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'currentlySelectedSlide' => array(
				'type' => 'number',
				'default' => 0,
				'role' => 'local'
			)
		),
		'providesContext' => array(
			'launchpad-blocks/carouselImages' => 'images',
			'launchpad-blocks/carouselSlides' => 'slides',
			'launchpad-blocks/shouldLinkSlidesToLightbox' => 'shouldLinkSlidesToLightbox',
			'launchpad-blocks/currentlySelectedSlide' => 'currentlySelectedSlide'
		),
		'usesContext' => array(
			'launchpad-blocks/carouselImages',
			'launchpad-blocks/carouselSlides'
		),
		'supports' => array(
			'align' => true
		)
	),
	'blocks/carousel-content-slide' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/carousel-content-slide',
		'title' => 'Carousel content slide',
		'category' => 'theme',
		'description' => '',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'parent' => array(
			'launchpad-blocks/carousel-content-slides'
		),
		'editorScript' => array(
			'file:./index.c28541981ff25f173146.js'
		),
		'viewScript' => array(
			'file:./view.535e66f2928c2639ca1b.js'
		),
		'style' => array(
			'file:./style.372d13e0435f2b5f7ecc.css'
		),
		'editorStyle' => array(
			'file:./editor-style.605363ef331fad07a440.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'backgroundOrOverlayColour' => array(
				'type' => 'string'
			),
			'overlayOpacity' => array(
				'type' => 'number',
				'default' => 50
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			'launchpad-blocks/template',
			'launchpad-blocks/shouldLockChildSlidesToTemplate',
			'launchpad-blocks/currentlySelectedSlide',
			'launchpad-blocks/isInTemplateEditMode'
		),
		'supports' => array(
			'background' => array(
				'backgroundImage' => true,
				'backgroundSize' => true
			),
			'spacing' => array(
				'padding' => array(
					'vertical'
				)
			),
			'layout' => array(
				'default' => array(
					'type' => 'flex',
					'justifyContent' => 'center'
				),
				'allowCustomContentAndWideSize' => false,
				'allowOrientation' => false,
				'allowJustification' => false
			)
		)
	),
	'blocks/carousel-content-slide-content' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/carousel-content-slide-content',
		'title' => 'Carousel content slide content',
		'category' => 'theme',
		'description' => '',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'parent' => array(
			'launchpad-blocks/carousel-content-slide'
		),
		'editorScript' => array(
			'file:./index.14755396242cbce9b512.js'
		),
		'viewScript' => array(
			'file:./view.535e66f2928c2639ca1b.js'
		),
		'style' => array(
			'file:./style.1df1082cf44e529cfffd.css'
		),
		'editorStyle' => array(
			'file:./editor-style.605363ef331fad07a440.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			'launchpad-blocks/template',
			'launchpad-blocks/shouldLockChildSlidesToTemplate',
			'launchpad-blocks/currentlySelectedSlide',
			'launchpad-blocks/isInTemplateEditMode'
		),
		'supports' => array(
			'layout' => array(
				'default' => array(
					'type' => 'constrained'
				),
				'allowCustomContentAndWideSize' => false,
				'allowJustification' => false
			),
			'spacing' => array(
				'padding' => array(
					'left',
					'right'
				)
			)
		)
	),
	'blocks/carousel-content-slides' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/carousel-content-slides',
		'title' => 'Carousel content slides',
		'category' => 'theme',
		'description' => '',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'parent' => array(
			'launchpad-blocks/carousel'
		),
		'editorScript' => array(
			'file:./index.ff125112c8f427c216d4.js'
		),
		'viewScript' => array(
			'file:./view.535e66f2928c2639ca1b.js'
		),
		'style' => array(
			'file:./style.54f58453fd76483bee6d.css'
		),
		'editorStyle' => array(
			'file:./editor-style.31d6cfe0d16ae931b73c.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'template' => array(
				'type' => 'array',
				'default' => array(
					array(
						'name' => 'launchpad-blocks/carousel-content-slide',
						'innerBlocks' => array(
							array(
								'name' => 'launchpad-blocks/carousel-content-slide-content',
								'innerBlocks' => array(
									array(
										'name' => 'core/heading',
										'attributes' => array(
											'placeholder' => 'Your template'
										),
										'innerBlocks' => array(
											
										)
									),
									array(
										'name' => 'core/paragraph',
										'attributes' => array(
											'placeholder' => 'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.'
										),
										'innerBlocks' => array(
											
										)
									)
								)
							)
						)
					)
				)
			),
			'tempInnerBlocksStorage' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'shouldLockChildSlidesToTemplate' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hasDismissedVariationsSelector' => array(
				'type' => 'boolean',
				'default' => false
			),
			'isInTemplateEditMode' => array(
				'type' => 'boolean',
				'default' => false
			),
			'aspectRatio' => array(
				'type' => 'string',
				'default' => 'auto'
			)
		),
		'providesContext' => array(
			'launchpad-blocks/template' => 'template',
			'launchpad-blocks/isInTemplateEditMode' => 'isInTemplateEditMode',
			'launchpad-blocks/shouldLockChildSlidesToTemplate' => 'shouldLockChildSlidesToTemplate'
		),
		'usesContext' => array(
			
		),
		'supports' => array(
			'color' => array(
				'link' => true
			)
		)
	),
	'blocks/carousel-dots' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/carousel-dots',
		'title' => 'Carousel dots',
		'category' => 'theme',
		'description' => '',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'parent' => array(
			'launchpad-blocks/carousel'
		),
		'editorScript' => array(
			'file:./index.ec4dbf90c6cdbd1912be.js'
		),
		'viewScript' => array(
			'file:./view.f79fd4dc8af3b2dbc895.js'
		),
		'style' => array(
			'file:./style.6bda0fc7987b5b81e21f.css'
		),
		'editorStyle' => array(
			'file:./editor-style.ead2d9fb3d920d058ac2.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			'launchpad-blocks/carouselImages',
			'launchpad-blocks/carouselSlides',
			'launchpad-blocks/currentlySelectedSlide'
		),
		'example' => array(
			'viewportWidth' => 1200
		),
		'supports' => array(
			
		)
	),
	'blocks/carousel-navigation-arrows' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/carousel-navigation-arrows',
		'title' => 'Carousel navigation arrows',
		'category' => 'theme',
		'description' => '',
		'textdomain' => 'launchpad-blocks',
		'allowedBlocks' => array(
			'launchpad-blocks/carousel-thumbnails',
			'launchpad-blocks/carousel-dots',
			'launchpad-blocks/carousel-slide-count'
		),
		'parent' => array(
			'launchpad-blocks/carousel'
		),
		'keywords' => array(
			
		),
		'editorScript' => array(
			'file:./index.bc21c57fbfab5a1f051a.js'
		),
		'viewScript' => array(
			'file:./view.57e326316144c457f1cd.js'
		),
		'style' => array(
			'file:./style.474f6e5b28d40b0f99a9.css'
		),
		'editorStyle' => array(
			'file:./editor-style.3205999f856ae994546f.css'
		),
		'render' => 'file:./render.php',
		'styles' => array(
			array(
				'name' => 'normal',
				'label' => 'Normal',
				'isDefault' => true
			),
			array(
				'name' => 'overlay',
				'label' => 'Overlay'
			)
		),
		'attributes' => array(
			'prevText' => array(
				'type' => 'string',
				'default' => 'Go to previous slide'
			),
			'nextText' => array(
				'type' => 'string',
				'default' => 'Go to next slide'
			),
			'prevVisualText' => array(
				'type' => 'string',
				'default' => 'Previous'
			),
			'nextVisualText' => array(
				'type' => 'string',
				'default' => 'Next'
			),
			'shouldShowTextVisually' => array(
				'type' => 'boolean',
				'default' => true
			),
			'backgroundColour' => array(
				'type' => 'string',
				'default' => 'black'
			),
			'iconColour' => array(
				'type' => 'string',
				'default' => 'white'
			),
			'prevIcon' => array(
				'type' => 'object',
				'default' => array(
					'iconName' => 'chevron-left',
					'library' => 'launchpad-blocks'
				)
			),
			'nextIcon' => array(
				'type' => 'object',
				'default' => array(
					'iconName' => 'chevron-right',
					'library' => 'launchpad-blocks'
				)
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			'launchpad-blocks/currentlySelectedSlide',
			'launchpad-blocks/carouselSlides',
			'launchpad-blocks/carouselImages'
		),
		'example' => array(
			
		),
		'supports' => array(
			'align' => true,
			'layout' => array(
				'default' => array(
					'type' => 'constrained'
				),
				'allowCustomContentAndWideSize' => false
			)
		)
	),
	'blocks/carousel-slide-count' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/carousel-slide-count',
		'title' => 'Carousel slide count',
		'category' => 'theme',
		'description' => '',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'ancestor' => array(
			'launchpad-blocks/carousel'
		),
		'editorScript' => array(
			'file:./index.d006323f06ca86d09cec.js'
		),
		'viewScript' => array(
			'file:./view.ed89522ff0b434518027.js'
		),
		'style' => array(
			'file:./style.6b35fbe73dc9532e181b.css'
		),
		'editorStyle' => array(
			'file:./editor-style.ff21a25524896af2818f.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'prefix' => array(
				'type' => 'string',
				'role' => 'content'
			),
			'betweenText' => array(
				'type' => 'string',
				'default' => '/',
				'role' => 'content'
			),
			'suffix' => array(
				'type' => 'string',
				'role' => 'content'
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			'launchpad-blocks/carouselImages',
			'launchpad-blocks/carouselSlides',
			'launchpad-blocks/currentlySelectedSlide'
		),
		'example' => array(
			'viewportWidth' => 1200
		),
		'supports' => array(
			'align' => true,
			'layout' => array(
				'default' => array(
					'type' => 'flex',
					'flexWrap' => 'wrap',
					'justifyContent' => 'left'
				),
				'allowOrientation' => false
			)
		)
	),
	'blocks/carousel-slides' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/carousel-slides',
		'title' => 'Carousel image slides',
		'category' => 'theme',
		'description' => '',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'parent' => array(
			'launchpad-blocks/carousel',
			'launchpad-blocks/gallery-carousel'
		),
		'allowedBlocks' => array(
			'core/image'
		),
		'editorScript' => array(
			'file:./index.ad7d7cdfc9ddf44f61e8.js'
		),
		'viewScript' => array(
			'file:./view.535e66f2928c2639ca1b.js'
		),
		'style' => array(
			'file:./style.18ba581fb91e58f5b76d.css'
		),
		'editorStyle' => array(
			'file:./editor-style.b90559dd7064f42f7ac7.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'allowResize' => array(
				'type' => 'boolean',
				'default' => false
			),
			'aspectRatio' => array(
				'type' => 'string',
				'default' => 'auto'
			),
			'imageFit' => array(
				'type' => 'string',
				'enum' => array(
					'cover',
					'contain'
				),
				'default' => 'cover'
			),
			'shouldPullImagesFromContext' => array(
				'type' => 'boolean',
				'default' => false
			),
			'captionBackground' => array(
				'type' => 'string'
			)
		),
		'providesContext' => array(
			'allowResize' => 'allowResize'
		),
		'usesContext' => array(
			'launchpad-blocks/carouselImages',
			'launchpad-blocks/shouldLinkSlidesToLightbox'
		),
		'supports' => array(
			'color' => array(
				'link' => true
			)
		)
	),
	'blocks/carousel-thumbnails' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/carousel-thumbnails',
		'title' => 'Carousel thumbnails',
		'category' => 'theme',
		'description' => '',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'parent' => array(
			'launchpad-blocks/carousel'
		),
		'editorScript' => array(
			'file:./index.bbe7c2a7f9cf9516e461.js'
		),
		'viewScript' => array(
			'file:./view.80f828b99f83ea1fb1ff.js'
		),
		'style' => array(
			'file:./style.20a03090b555545fed11.css'
		),
		'editorStyle' => array(
			'file:./editor-style.31d6cfe0d16ae931b73c.css'
		),
		'render' => 'file:./render.php',
		'styles' => array(
			array(
				'name' => 'scroll',
				'label' => 'Scroll',
				'isDefault' => true
			),
			array(
				'name' => 'grid',
				'label' => 'Grid'
			)
		),
		'attributes' => array(
			'selectedOutlineColour' => array(
				'type' => 'string',
				'default' => 'black'
			),
			'lock' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			'launchpad-blocks/carouselImages'
		),
		'example' => array(
			'viewportWidth' => 1200
		),
		'supports' => array(
			'lock' => false,
			'layout' => array(
				'default' => array(
					'type' => 'constrained'
				),
				'allowCustomContentAndWideSize' => false
			)
		)
	),
	'blocks/cta' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/cta',
		'title' => 'Call to action',
		'category' => 'theme',
		'description' => 'A call to action block to encourage users to perform an action.',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'editorScript' => array(
			'file:./index.5033160d461766c3e259.js'
		),
		'viewScript' => array(
			'file:./view.139c705a34fbf4502c08.js'
		),
		'style' => array(
			'file:./style.09402a959979222359b0.css'
		),
		'editorStyle' => array(
			'file:./editor-style.31d6cfe0d16ae931b73c.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'shouldShowImage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'imageId' => array(
				'type' => 'integer',
				'default' => 0
			),
			'imagePosition' => array(
				'type' => 'string',
				'enum' => array(
					'left',
					'right'
				),
				'default' => 'left'
			),
			'headerElement' => array(
				'type' => 'string',
				'enum' => array(
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
					'p'
				),
				'default' => 'h2'
			),
			'headerContent' => array(
				'type' => 'string',
				'default' => ''
			),
			'textContent' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttons' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'label' => '',
						'href' => '',
						'target' => '_self'
					)
				)
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			
		),
		'example' => array(
			
		),
		'supports' => array(
			'align' => array(
				'wide'
			),
			'color' => true
		)
	),
	'blocks/fancy-list' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/fancy-list',
		'title' => 'Fancy list',
		'category' => 'theme',
		'description' => 'A block to display a semantic list of content.',
		'allowedBlocks' => array(
			'launchpad-blocks/fancy-list-item'
		),
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'editorScript' => array(
			'file:./index.82ceaff67859c466cf8b.js'
		),
		'viewScript' => array(
			'file:./view.535e66f2928c2639ca1b.js'
		),
		'style' => array(
			'file:./style.31d6cfe0d16ae931b73c.css'
		),
		'editorStyle' => array(
			'file:./editor-style.31d6cfe0d16ae931b73c.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'columnCount' => array(
				'type' => 'integer',
				'default' => 1
			),
			'type' => array(
				'type' => 'string',
				'enum' => array(
					'ul',
					'ol'
				),
				'default' => 'ul'
			),
			'markerType' => array(
				'type' => 'string',
				'enum' => array(
					'normal',
					'icon'
				),
				'default' => 'normal'
			),
			'markerColour' => array(
				'type' => 'string'
			),
			'markerInnerColour' => array(
				'type' => 'string'
			)
		),
		'providesContext' => array(
			'launchpad-blocks/fancyListType' => 'type',
			'launchpad-blocks/fancyListMarkerType' => 'markerType'
		),
		'usesContext' => array(
			
		),
		'supports' => array(
			'typography' => array(
				'fontSize' => true
			)
		),
		'example' => array(
			'attributes' => array(
				'columnCount' => 1,
				'type' => 'ul',
				'markerType' => 'normal',
				'markerInnerColour' => '#ff0000',
				'markerColour' => '#ff0000'
			),
			'innerBlocks' => array(
				array(
					'name' => 'launchpad-blocks/fancy-list-item',
					'attributes' => array(
						'textContent' => 'Alice.'
					)
				),
				array(
					'name' => 'launchpad-blocks/fancy-list-item',
					'attributes' => array(
						'textContent' => 'The White Rabbit.'
					)
				),
				array(
					'name' => 'launchpad-blocks/fancy-list-item',
					'attributes' => array(
						'textContent' => 'The Cheshire Cat.'
					)
				),
				array(
					'name' => 'launchpad-blocks/fancy-list-item',
					'attributes' => array(
						'textContent' => 'The Mad Hatter.'
					)
				),
				array(
					'name' => 'launchpad-blocks/fancy-list-item',
					'attributes' => array(
						'textContent' => 'The Queen of Hearts.'
					)
				)
			)
		)
	),
	'blocks/fancy-list-item' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/fancy-list-item',
		'title' => 'Fancy list item',
		'category' => 'theme',
		'description' => 'A block to display a semantic list of content.',
		'parent' => array(
			'launchpad-blocks/fancy-list'
		),
		'allowedBlocks' => array(
			'launchpad-blocks/fancy-list'
		),
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'editorScript' => array(
			'file:./index.36d73a78250739ccc65f.js'
		),
		'viewScript' => array(
			'file:./view.535e66f2928c2639ca1b.js'
		),
		'style' => array(
			'file:./style.df6743bc60dbce0f3cc6.css'
		),
		'editorStyle' => array(
			'file:./editor-style.31d6cfe0d16ae931b73c.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'iconName' => array(
				'type' => 'string'
			),
			'library' => array(
				'type' => 'string'
			),
			'textContent' => array(
				'type' => 'string'
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			'launchpad-blocks/fancyListType',
			'launchpad-blocks/fancyListMarkerType'
		),
		'supports' => array(
			'splitting' => true
		)
	),
	'blocks/gallery-carousel' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/gallery-carousel',
		'allowedBlocks' => array(
			'launchpad-blocks/gallery-carousel-lightbox',
			'launchpad-blocks/carousel-slides'
		),
		'title' => 'Gallery with lightbox',
		'category' => 'theme',
		'description' => '',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			'lightbox'
		),
		'editorScript' => array(
			'file:./index.6cd540c0ec2423eb3df1.js'
		),
		'viewScript' => array(
			'file:./view.94544363002f7c909ba5.js'
		),
		'style' => array(
			'file:./style.f01f216d67532d72c114.css'
		),
		'editorStyle' => array(
			'file:./editor-style.31d6cfe0d16ae931b73c.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'images' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'columnCount' => array(
				'type' => 'integer',
				'default' => 4
			),
			'shouldLinkSlidesToLightbox' => array(
				'type' => 'boolean',
				'default' => true
			),
			'slides' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'providesContext' => array(
			'launchpad-blocks/carouselImages' => 'images',
			'launchpad-blocks/carouselSlides' => 'slides',
			'launchpad-blocks/shouldLinkSlidesToLightbox' => 'shouldLinkSlidesToLightbox'
		),
		'usesContext' => array(
			
		),
		'example' => array(
			'attributes' => array(
				'images' => array(
					array(
						'id' => 237,
						'url' => 'https://picsum.photos/id/237/260/180'
					),
					array(
						'id' => 433,
						'url' => 'https://picsum.photos/id/433/260/180'
					),
					array(
						'id' => 582,
						'url' => 'https://picsum.photos/id/582/260/180'
					),
					array(
						'id' => 593,
						'url' => 'https://picsum.photos/id/593/260/180'
					),
					array(
						'id' => 943,
						'url' => 'https://picsum.photos/id/943/260/180'
					),
					array(
						'id' => 1024,
						'url' => 'https://picsum.photos/id/1024/260/180'
					)
				)
			),
			'innerBlocks' => array(
				array(
					'name' => 'launchpad-blocks/carousel-slides',
					'innerBlocks' => array(
						array(
							'name' => 'core/image',
							'attributes' => array(
								'id' => 237,
								'url' => 'https://picsum.photos/id/237/260/180'
							)
						),
						array(
							'name' => 'core/image',
							'attributes' => array(
								'id' => 433,
								'url' => 'https://picsum.photos/id/433/260/180'
							)
						),
						array(
							'name' => 'core/image',
							'attributes' => array(
								'id' => 582,
								'url' => 'https://picsum.photos/id/582/260/180'
							)
						),
						array(
							'name' => 'core/image',
							'attributes' => array(
								'id' => 593,
								'url' => 'https://picsum.photos/id/593/260/180'
							)
						),
						array(
							'name' => 'core/image',
							'attributes' => array(
								'id' => 943,
								'url' => 'https://picsum.photos/id/943/260/180'
							)
						),
						array(
							'name' => 'core/image',
							'attributes' => array(
								'id' => 1024,
								'url' => 'https://picsum.photos/id/1024/260/180'
							)
						)
					)
				),
				array(
					'name' => 'launchpad-blocks/gallery-carousel-lightbox',
					'innerBlocks' => array(
						array(
							'name' => 'launchpad-blocks/carousel',
							'attributes' => array(
								'images' => array(
									array(
										'id' => 237,
										'url' => 'https://picsum.photos/id/237/260/180'
									),
									array(
										'id' => 433,
										'url' => 'https://picsum.photos/id/433/260/180'
									),
									array(
										'id' => 582,
										'url' => 'https://picsum.photos/id/582/260/180'
									),
									array(
										'id' => 593,
										'url' => 'https://picsum.photos/id/593/260/180'
									),
									array(
										'id' => 943,
										'url' => 'https://picsum.photos/id/943/260/180'
									),
									array(
										'id' => 1024,
										'url' => 'https://picsum.photos/id/1024/260/180'
									)
								)
							),
							'innerBlocks' => array(
								array(
									'name' => 'launchpad-blocks/carousel-slides',
									'attributes' => array(
										'shouldPullImagesFromContext' => true
									)
								),
								array(
									'name' => 'launchpad-blocks/carousel-navigation-arrows',
									'attributes' => array(
										'shouldShowTextVisually' => false,
										'className' => 'is-style-overlay'
									)
								)
							)
						)
					)
				)
			)
		),
		'supports' => array(
			
		)
	),
	'blocks/gallery-carousel-lightbox' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/gallery-carousel-lightbox',
		'title' => 'Lightbox',
		'category' => 'theme',
		'description' => '',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'editorScript' => array(
			'file:./index.494570f58719ae1da351.js'
		),
		'viewScript' => array(
			'file:./view.53eb97090dda2c394aa4.js'
		),
		'style' => array(
			'file:./style.bbe6a4b0549fe713dd9a.css'
		),
		'editorStyle' => array(
			'file:./editor-style.6d12dae4699a963e1ebb.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'backgroundColor' => array(
				'type' => 'string',
				'default' => 'white'
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			
		),
		'supports' => array(
			'color' => true
		),
		'parent' => array(
			'launchpad-blocks/gallery-carousel'
		)
	),
	'blocks/global-banner' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/global-banner',
		'title' => 'Global banner',
		'category' => 'theme',
		'textdomain' => 'launchpad',
		'editorScript' => array(
			'file:./index.819a29e24eaa8c3639c1.js'
		),
		'viewScript' => array(
			'file:./view.d8b08951ee51c7294e8d.js'
		),
		'style' => array(
			'file:./style.68dcf1afcca9bc5c8b8c.css'
		),
		'editorStyle' => array(
			'file:./editor-style.3ef71a7877433fc70558.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'align' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'text' => array(
				'type' => 'string'
			),
			'isDismissible' => array(
				'type' => 'boolean',
				'default' => true
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => 'elevation-high'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => 'black'
			)
		),
		'supports' => array(
			'align' => array(
				'full'
			),
			'color' => true,
			'layout' => array(
				'default' => array(
					'type' => 'constrained'
				)
			)
		),
		'example' => array(
			'attributes' => array(
				'text' => 'This is a banner',
				'isDismissible' => true
			)
		)
	),
	'blocks/global-banner-output' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/global-banner-output',
		'title' => 'Global banner output',
		'category' => 'theme',
		'description' => 'An output block for the selected global banners.',
		'textdomain' => 'launchpad',
		'editorScript' => array(
			'file:./index.02ff5c30b33fa756ae76.js'
		),
		'editorStyle' => array(
			'file:./editor-style.c5d19c91d23f7911fa45.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			
		),
		'supports' => array(
			
		),
		'example' => array(
			
		)
	),
	'blocks/heading-with-icon' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/heading-with-icon',
		'title' => 'Heading with icon',
		'category' => 'theme',
		'description' => 'Select an icon to display inline with a heading',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'editorScript' => array(
			'file:./index.31ac5816497b6dce75eb.js'
		),
		'viewScript' => array(
			'file:./view.535e66f2928c2639ca1b.js'
		),
		'style' => array(
			'file:./style.26404f07182a01b75ed7.css'
		),
		'editorStyle' => array(
			'file:./editor-style.31d6cfe0d16ae931b73c.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'iconName' => array(
				'type' => 'string',
				'role' => 'content'
			),
			'library' => array(
				'type' => 'string',
				'role' => 'content'
			),
			'size' => array(
				'type' => 'string',
				'default' => '2rem'
			),
			'headerElement' => array(
				'type' => 'string',
				'enum' => array(
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
					'p'
				),
				'default' => 'h2'
			),
			'headerContent' => array(
				'type' => 'string'
			),
			'headerStyle' => array(
				'type' => 'string',
				'enum' => array(
					'',
					't-1',
					't-2',
					't-3',
					't-4',
					't-5',
					't-6'
				),
				'default' => ''
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			
		),
		'example' => array(
			'viewportWidth' => 280,
			'attributes' => array(
				'library' => 'launchpad-blocks',
				'iconName' => 'heading-with-icon',
				'size' => '2rem',
				'headerContent' => 'Heading',
				'headerElement' => 'h2',
				'headerStyle' => ''
			)
		),
		'supports' => array(
			
		)
	),
	'blocks/icon' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/icon',
		'title' => 'Icon',
		'category' => 'theme',
		'description' => 'Select an icon to display from one of our libraries.',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'editorScript' => array(
			'file:./index.7810434cce4be544068a.js'
		),
		'style' => array(
			'file:./style.882d6e08e1cd7fcaee37.css'
		),
		'editorStyle' => array(
			'file:./editor-style.eb8ef186d94ca42a587a.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'iconName' => array(
				'type' => 'string',
				'role' => 'content'
			),
			'library' => array(
				'type' => 'string',
				'role' => 'content'
			),
			'size' => array(
				'type' => 'string',
				'default' => '2rem'
			)
		),
		'supports' => array(
			
		),
		'example' => array(
			'viewportWidth' => 48,
			'attributes' => array(
				'library' => 'launchpad-blocks',
				'iconName' => 'accordion-arrow',
				'size' => '2rem'
			)
		)
	),
	'blocks/logo-banner' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/logo-banner',
		'title' => 'Logo banner',
		'category' => 'media',
		'description' => 'A banner of logos to display, with optional scrolling animation.',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'editorScript' => array(
			'file:./index.61d1c5132791e25cf3d1.js'
		),
		'viewScript' => array(
			'file:./view.9dcacc883e6416067d79.js'
		),
		'style' => array(
			'file:./style.d2e5d0e4d5580e2419d1.css'
		),
		'editorStyle' => array(
			'file:./editor-style.a80025175149dfe06681.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'isScrolling' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shouldAlignBottomRowToLeft' => array(
				'type' => 'boolean',
				'default' => false
			),
			'allowResize' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'providesContext' => array(
			'allowResize' => 'allowResize'
		),
		'usesContext' => array(
			
		),
		'example' => array(
			
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			)
		)
	),
	'blocks/manual-post-select' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/manual-post-select',
		'title' => 'Manual post select',
		'category' => 'theme',
		'description' => 'A block to manually select and display a group of posts.',
		'textdomain' => 'launchpad',
		'keywords' => array(
			
		),
		'editorScript' => array(
			'file:./index.ba9ec194ffa5dd1922fc.js'
		),
		'editorStyle' => array(
			'file:./editor-style.7366b8d6169ef631eab0.css'
		),
		'style' => array(
			'file:./style.33919140da05edb963f4.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'hasDismissedVariationsSelector' => array(
				'type' => 'boolean',
				'default' => false
			),
			'namespace' => array(
				'type' => 'string'
			),
			'selectedPosts' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'selectedPostTypesManualSelectSearch' => array(
				'type' => 'array',
				'default' => array(
					'any'
				)
			),
			'searchInputManualSelectSearch' => array(
				'type' => 'string',
				'default' => ''
			),
			'taxonomyAndTermInfoManualSelectSearch' => array(
				'type' => 'object',
				'default' => array(
					'relationship' => 'AND',
					'taxonomies' => array(
						
					)
				)
			),
			'orderManualSelectSearch' => array(
				'type' => 'object',
				'default' => array(
					'by' => 'date',
					'direction' => 'desc'
				)
			),
			'selectedPostTypesAutoPostsQuery' => array(
				'type' => 'array',
				'default' => array(
					'any'
				)
			),
			'searchInputAutoPostsQuery' => array(
				'type' => 'string',
				'default' => ''
			),
			'taxonomyAndTermInfoAutoPostsQuery' => array(
				'type' => 'object',
				'default' => array(
					'relationship' => 'AND',
					'taxonomies' => array(
						
					)
				)
			),
			'orderAutoPostsQuery' => array(
				'type' => 'object',
				'default' => array(
					'by' => 'date',
					'direction' => 'desc'
				)
			),
			'shouldFillRemainingSpots' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shouldInheritFromAutoPostsQuery' => array(
				'type' => 'boolean',
				'default' => true
			),
			'postsToShow' => array(
				'type' => 'integer',
				'default' => 1
			),
			'shouldExcludeCurrentPost' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			'postId'
		),
		'supports' => array(
			'align' => true,
			'layout' => array(
				'default' => array(
					'type' => 'default'
				),
				'allowSwitching' => true,
				'allowEditing' => true,
				'allowInheriting' => true,
				'allowSizingOnChildren' => true,
				'allowVerticalAlignment' => true,
				'allowJustification' => true,
				'allowOrientation' => true,
				'allowCustomContentAndWideSize' => true
			),
			'color' => true,
			'spacing' => array(
				'margin' => true,
				'padding' => true,
				'blockGap' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true
			)
		),
		'example' => array(
			'viewportWidth' => 1200,
			'attributes' => array(
				'namespace' => 'preview',
				'shouldFillRemainingSpots' => true,
				'postsToShow' => 3,
				'layout' => array(
					'type' => 'grid',
					'columnCount' => 3
				)
			),
			'innerBlocks' => array(
				array(
					'name' => 'core/post-featured-image'
				),
				array(
					'name' => 'core/post-title'
				),
				array(
					'name' => 'core/post-excerpt'
				),
				array(
					'name' => 'core/read-more'
				)
			)
		)
	),
	'blocks/media-and-text' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/media-and-text',
		'title' => 'Breakout Media and Text',
		'category' => 'formatting',
		'description' => 'A media and text block where the media can be screen width.',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			'50/50',
			'image',
			'list',
			'formatting',
			'layout',
			'breakout'
		),
		'editorScript' => array(
			'file:./index.a023f36c6f7762774468.js'
		),
		'viewScript' => array(
			'file:./view.535e66f2928c2639ca1b.js'
		),
		'style' => array(
			'file:./style.78075df58780809f7e57.css'
		),
		'editorStyle' => array(
			'file:./editor-style.31d6cfe0d16ae931b73c.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'mediaPosition' => array(
				'type' => 'string',
				'enum' => array(
					'left',
					'right'
				),
				'default' => 'left'
			),
			'imageId' => array(
				'type' => 'integer',
				'default' => 0
			),
			'shouldBreakOutMedia' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hasBackground' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shouldChildBlocksBeLocked' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			
		),
		'example' => array(
			'attributes' => array(
				'mediaPosition' => 'left',
				'imageId' => 0,
				'shouldBreakOutMedia' => true,
				'hasBackground' => true,
				'shouldChildBlocksBeLocked' => true
			),
			'innerBlocks' => array(
				array(
					'name' => 'core/paragraph',
					'attributes' => array(
						'className' => 'wp-block-launchpad-blocks-media-and-text__intro',
						'content' => 'Part 6'
					)
				),
				array(
					'name' => 'core/heading',
					'attributes' => array(
						'content' => 'The Hunchback Trout'
					)
				),
				array(
					'name' => 'core/paragraph',
					'attributes' => array(
						'content' => 'The creek was made narrow by little green trees that grew too close together. The creek was like 12, 845 telephone booths in a row with high Victorian ceilings and all the doors taken off and all the backs of the booths knocked out. Sometimes when I went fishing in there, I felt just like a telephone repairman, even though I did not look like one. I was only a kid covered with fishing tackle, but in some strange way by going in there and catching a few trout, I kept the telephones in service. I was an asset to society.'
					)
				),
				array(
					'name' => 'core/button',
					'attributes' => array(
						'text' => 'Read more'
					)
				)
			)
		),
		'supports' => array(
			
		)
	),
	'blocks/nav-links-group' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/nav-links-group',
		'title' => 'Nav links group',
		'category' => 'theme',
		'description' => 'A simple list of links, often found in the footer or sidebar of a page.',
		'allowedBlocks' => array(
			'launchpad-blocks/nav-list'
		),
		'textdomain' => 'launchpad',
		'editorScript' => array(
			'file:./index.e082082dc4d25dc5ff51.js'
		),
		'viewScript' => array(
			'file:./view.535e66f2928c2639ca1b.js'
		),
		'style' => array(
			'file:./style.694c8b8912aa4f397e59.css'
		),
		'editorStyle' => array(
			'file:./editor-style.31d6cfe0d16ae931b73c.css'
		),
		'render' => 'file:./render.php',
		'keywords' => array(
			'menu',
			'links'
		),
		'attributes' => array(
			'headerElement' => array(
				'type' => 'string',
				'enum' => array(
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
					'p'
				),
				'default' => 'h2'
			),
			'headerContent' => array(
				'type' => 'string'
			),
			'linkId' => array(
				'type' => 'number'
			),
			'linkKind' => array(
				'type' => 'string'
			),
			'linkType' => array(
				'type' => 'string'
			),
			'linkHref' => array(
				'type' => 'string'
			),
			'linkTarget' => array(
				'type' => 'string',
				'enum' => array(
					'_self',
					'_blank'
				),
				'default' => '_self'
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			
		),
		'supports' => array(
			
		),
		'example' => array(
			
		)
	),
	'blocks/nav-list' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/nav-list',
		'title' => 'Nav list',
		'category' => 'theme',
		'description' => 'The collection of the actual menu items for your navigation.',
		'allowedBlocks' => array(
			'launchpad-blocks/nav-submenu',
			'launchpad-blocks/nav-menu-item',
			'launchpad-blocks/nav-links-group'
		),
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			'menu',
			'links'
		),
		'editorScript' => array(
			'file:./index.172cc3cb7fd02f79636c.js'
		),
		'style' => array(
			'file:./style.b1634d87d5a403979357.css'
		),
		'editorStyle' => array(
			'file:./editor-style.83862dc77f89be8749a2.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'isNestedInAnotherNavLink' => array(
				'type' => 'boolean',
				'default' => false
			),
			'ariaLabel' => array(
				'type' => 'string',
				'default' => 'Primary navigation'
			),
			'linkOrientation' => array(
				'type' => 'string',
				'enum' => array(
					'horizontal',
					'vertical'
				),
				'default' => 'horizontal'
			)
		),
		'supports' => array(
			
		),
		'example' => array(
			'viewportWidth' => 400,
			'attributes' => array(
				'isNestedInAnotherNavLink' => false
			),
			'innerBlocks' => array(
				array(
					'name' => 'launchpad-blocks/nav-submenu',
					'attributes' => array(
						'linkText' => 'Sub menu',
						'isPreview' => true
					),
					'innerBlocks' => array(
						array(
							'name' => 'launchpad-blocks/nav-list',
							'attributes' => array(
								'isNestedInAnotherNavLink' => true
							),
							'innerBlocks' => array(
								
							)
						)
					)
				),
				array(
					'name' => 'launchpad-blocks/nav-submenu',
					'attributes' => array(
						'linkText' => 'Sub menu',
						'isPreview' => true
					),
					'innerBlocks' => array(
						array(
							'name' => 'launchpad-blocks/nav-list',
							'attributes' => array(
								'isNestedInAnotherNavLink' => true
							),
							'innerBlocks' => array(
								
							)
						)
					)
				),
				array(
					'name' => 'launchpad-blocks/nav-menu-item',
					'attributes' => array(
						'linkText' => 'Menu link',
						'linkHref' => '#'
					)
				),
				array(
					'name' => 'launchpad-blocks/nav-menu-item',
					'attributes' => array(
						'linkText' => 'Menu link',
						'linkHref' => '#'
					)
				)
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			'launchpad-blocks/isInSubMenu'
		)
	),
	'blocks/nav-menu-item' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/nav-menu-item',
		'title' => 'Nav menu item',
		'category' => 'theme',
		'description' => 'A simple link for the navigation menu.',
		'parent' => array(
			'launchpad-blocks/nav-list'
		),
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			'menu',
			'nav',
			'links'
		),
		'editorScript' => array(
			'file:./index.ac3d223d80b26c7e90ab.js'
		),
		'style' => array(
			'file:./style.72a02fd4e3d760daa3d1.css'
		),
		'editorStyle' => array(
			'file:./editor-style.31d6cfe0d16ae931b73c.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'linkId' => array(
				'type' => 'number'
			),
			'linkKind' => array(
				'type' => 'string'
			),
			'linkType' => array(
				'type' => 'string'
			),
			'linkHref' => array(
				'type' => 'string'
			),
			'linkTarget' => array(
				'type' => 'string',
				'enum' => array(
					'_self',
					'_blank'
				),
				'default' => '_self'
			),
			'linkText' => array(
				'type' => 'string'
			)
		),
		'supports' => array(
			
		),
		'example' => array(
			'viewportWidth' => 200,
			'attributes' => array(
				'linkText' => 'Menu link',
				'linkHref' => '#'
			)
		)
	),
	'blocks/nav-submenu' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/nav-submenu',
		'title' => 'Nav sub menu',
		'category' => 'theme',
		'description' => 'A sub menu dropdown for the navigation block.',
		'allowedBlocks' => array(
			'launchpad-blocks/nav-list',
			'core/group'
		),
		'parent' => array(
			'launchpad-blocks/nav-list'
		),
		'ancestor' => array(
			'launchpad-blocks/navigation'
		),
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			'menu',
			'nav',
			'links'
		),
		'editorScript' => array(
			'file:./index.4e8fbeba30850e8dca7d.js'
		),
		'style' => array(
			'file:./style.56104d9460ccbad83033.css'
		),
		'editorStyle' => array(
			'file:./editor-style.c49b31f7b8f66b8052b4.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'linkText' => array(
				'type' => 'string'
			),
			'subMenuId' => array(
				'type' => 'string',
				'default' => ''
			),
			'columnCount' => array(
				'type' => 'number',
				'default' => 1
			),
			'columnWidth' => array(
				'type' => 'number',
				'default' => 14
			),
			'isInSubMenu' => array(
				'type' => 'boolean',
				'default' => true
			),
			'isDropdownShown' => array(
				'type' => 'boolean',
				'default' => false,
				'role' => 'local'
			),
			'icon' => array(
				'type' => 'object',
				'default' => array(
					'iconName' => 'chevron-down',
					'library' => 'launchpad-blocks'
				)
			),
			'iconLocation' => array(
				'type' => 'string',
				'default' => 'end',
				'enum' => array(
					'start',
					'end'
				)
			)
		),
		'supports' => array(
			
		),
		'example' => array(
			'viewportWidth' => 200,
			'attributes' => array(
				'linkText' => 'Sub menu',
				'isPreview' => true
			),
			'innerBlocks' => array(
				array(
					'name' => 'launchpad-blocks/nav-list',
					'attributes' => array(
						'isNestedInAnotherNavLink' => true
					),
					'innerBlocks' => array(
						
					)
				)
			)
		),
		'providesContext' => array(
			'launchpad-blocks/isInSubMenu' => 'isInSubMenu'
		),
		'usesContext' => array(
			
		)
	),
	'blocks/navigation' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/navigation',
		'title' => 'Navigation',
		'category' => 'theme',
		'description' => 'A collection of blocks that allow visitors to get around your site.',
		'allowedBlocks' => array(
			'core/search',
			'core/social-links',
			'core/loginout',
			'core/buttons',
			'launchpad-blocks/nav-list'
		),
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			'menu',
			'nav',
			'links'
		),
		'editorScript' => array(
			'file:./index.677c852290f0ad2e2068.js'
		),
		'viewScript' => array(
			'file:./view.f637d4b514f6bd8883a9.js'
		),
		'style' => array(
			'file:./style.1fd6a1e5f4af08d89964.css'
		),
		'editorStyle' => array(
			'file:./editor-style.5a6b155834ec580c5eed.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'navId' => array(
				'type' => 'string'
			)
		),
		'supports' => array(
			
		),
		'example' => array(
			'viewportWidth' => 500,
			'innerBlocks' => array(
				array(
					'name' => 'launchpad-blocks/nav-list',
					'attributes' => array(
						'isNestedInAnotherNavLink' => false
					),
					'innerBlocks' => array(
						array(
							'name' => 'launchpad-blocks/nav-submenu',
							'attributes' => array(
								'linkText' => 'Sub menu',
								'isPreview' => true
							),
							'innerBlocks' => array(
								array(
									'name' => 'launchpad-blocks/nav-list',
									'attributes' => array(
										'isNestedInAnotherNavLink' => true
									),
									'innerBlocks' => array(
										
									)
								)
							)
						),
						array(
							'name' => 'launchpad-blocks/nav-submenu',
							'attributes' => array(
								'linkText' => 'Sub menu',
								'isPreview' => true
							),
							'innerBlocks' => array(
								array(
									'name' => 'launchpad-blocks/nav-list',
									'attributes' => array(
										'isNestedInAnotherNavLink' => true
									),
									'innerBlocks' => array(
										
									)
								)
							)
						),
						array(
							'name' => 'launchpad-blocks/nav-menu-item',
							'attributes' => array(
								'linkText' => 'Menu link',
								'linkHref' => '#'
							)
						),
						array(
							'name' => 'launchpad-blocks/nav-menu-item',
							'attributes' => array(
								'linkText' => 'Menu link',
								'linkHref' => '#'
							)
						)
					)
				),
				array(
					'name' => 'core/buttons',
					'innerBlocks' => array(
						array(
							'name' => 'core/button',
							'attributes' => array(
								'text' => 'Example button'
							)
						)
					)
				)
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			
		)
	),
	'blocks/numbered-columns' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/numbered-columns',
		'title' => 'Numbered columns',
		'category' => 'theme',
		'description' => 'A block that allows adding text content into numbered columns.',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			'list'
		),
		'editorScript' => array(
			'file:./index.6b21f4461f6c6eba51b4.js'
		),
		'viewScript' => array(
			'file:./view.535e66f2928c2639ca1b.js'
		),
		'style' => array(
			'file:./style.5d20cbdb40a3fd27086e.css'
		),
		'editorStyle' => array(
			'file:./editor-style.31d6cfe0d16ae931b73c.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'columns' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'heading' => '',
						'text' => ''
					)
				)
			),
			'headerElement' => array(
				'type' => 'string',
				'enum' => array(
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
					'p'
				),
				'default' => 'h2'
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			
		),
		'example' => array(
			'attributes' => array(
				'columns' => array(
					array(
						'id' => 1,
						'heading' => 'Step one',
						'text' => 'Build the numbered columns block.'
					),
					array(
						'id' => 2,
						'heading' => 'Step two',
						'text' => 'Add automated tests for the numbered columns block to make sure it doesn\'t break.'
					),
					array(
						'id' => 3,
						'heading' => 'Step three',
						'text' => 'Add example content for the numbered columns block so it shows a nice preview.'
					)
				)
			),
			'viewportWidth' => 900
		),
		'supports' => array(
			
		)
	),
	'blocks/php-template-part' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/php-template-part',
		'title' => 'PHP Template part',
		'category' => 'theme',
		'description' => 'Get one of the existing php template parts in the blocks editor.',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'editorScript' => array(
			'file:./index.9d4fd7ddfc895f2d3efb.js'
		),
		'viewScript' => array(
			'file:./view.535e66f2928c2639ca1b.js'
		),
		'style' => array(
			'file:./style.31d6cfe0d16ae931b73c.css'
		),
		'editorStyle' => array(
			'file:./editor-styles.31d6cfe0d16ae931b73c.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'templatePartSlug' => array(
				'type' => 'string'
			),
			'templatePartName' => array(
				'type' => 'string'
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			'postId'
		),
		'example' => array(
			
		),
		'supports' => array(
			
		)
	),
	'blocks/section' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/section',
		'title' => 'Section',
		'category' => 'theme',
		'description' => 'This is a layout block used to set a section of a page.',
		'textdomain' => 'launchpad-blocks',
		'keywords' => array(
			
		),
		'editorScript' => array(
			'file:./index.020aa708acccdc1e0dc3.js'
		),
		'style' => array(
			'file:./style.a7d60064631b1da5e27a.css'
		),
		'editorStyle' => array(
			'file:./editor-style.052d33de2132f8f3f336.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'headerElement' => array(
				'type' => 'string',
				'enum' => array(
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
					'p'
				),
				'default' => 'h2'
			),
			'headerContent' => array(
				'type' => 'string'
			),
			'style' => array(
				'type' => 'object',
				'default' => array(
					'padding' => array(
						'top' => 'var:preset|spacing|10',
						'bottom' => 'var:preset|spacing|10'
					)
				)
			),
			'textAlign' => array(
				'type' => 'string',
				'enum' => array(
					'left',
					'center',
					'right'
				),
				'default' => 'left'
			),
			'stretchTitle' => array(
				'type' => 'string',
				'enum' => array(
					'none',
					'wide',
					'full'
				),
				'default' => 'none'
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			
		),
		'example' => array(
			'viewportWidth' => 1600,
			'attributes' => array(
				'headerContent' => 'Starry night'
			),
			'innerBlocks' => array(
				array(
					'name' => 'core/image',
					'attributes' => array(
						'id' => 1,
						'url' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'
					)
				)
			)
		),
		'supports' => array(
			'align' => false,
			'layout' => array(
				'default' => array(
					'type' => 'constrained'
				)
			),
			'spacing' => array(
				'padding' => array(
					'vertical'
				)
			),
			'color' => array(
				'text' => false
			)
		)
	),
	'blocks/tab-list' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/tab-list',
		'ancestor' => array(
			'launchpad-blocks/tabs'
		),
		'title' => 'Tab list',
		'category' => 'theme',
		'description' => 'The tab list associated with a Tabs block.',
		'textdomain' => 'launchpad',
		'keywords' => array(
			
		),
		'editorScript' => array(
			'file:./index.85360b3c7b448557a182.js'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'selectedTab' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			'launchpad/tabsGroupId',
			'launchpad/initiallySelectedTab',
			'launchpad/shouldShowTabSectionTitle',
			'launchpad/title'
		),
		'supports' => array(
			'align' => true,
			'alignWide' => true,
			'layout' => array(
				'default' => array(
					'type' => 'flex'
				)
			),
			'spacing' => array(
				'blockGap' => true
			)
		)
	),
	'blocks/tab-panel' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/tab-panel',
		'parent' => array(
			'launchpad-blocks/tab-panel-group'
		),
		'title' => 'Tab panel',
		'category' => 'theme',
		'description' => 'The panel of content associated with a tab in a Tabs block.',
		'textdomain' => 'launchpad',
		'editorScript' => array(
			'file:./index.2baadbbfa5c3fbef75db.js'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'id' => array(
				'type' => 'string',
				'default' => ''
			),
			'tab' => array(
				'type' => 'object',
				'default' => array(
					'id' => '',
					'label' => ''
				)
			)
		),
		'providesContext' => array(
			
		),
		'usesContext' => array(
			'launchpad/tabsGroupId',
			'launchpad/initiallySelectedTab'
		),
		'supports' => array(
			'align' => true,
			'anchor' => false,
			'color' => true,
			'layout' => array(
				'default' => array(
					'type' => 'default'
				)
			),
			'spacing' => array(
				'blockGap' => true
			)
		)
	),
	'blocks/tab-panel-group' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/tab-panel-group',
		'ancestor' => array(
			'launchpad-blocks/tabs'
		),
		'allowedBlocks' => array(
			'launchpad-blocks/tab-panel'
		),
		'title' => 'Tab panel group',
		'category' => 'theme',
		'description' => 'A container block for individual tab panels.',
		'textdomain' => 'launchpad',
		'editorScript' => array(
			'file:./index.9cb313a5aa201db893f7.js'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			
		),
		'supports' => array(
			'align' => true,
			'alignWide' => true,
			'layout' => array(
				'default' => array(
					'type' => 'constrained'
				)
			)
		)
	),
	'blocks/tabs' => array(
		'apiVersion' => 3,
		'name' => 'launchpad-blocks/tabs',
		'title' => 'Tabs',
		'category' => 'theme',
		'description' => 'Multiple sections of content collated together where only one is shown at a time.',
		'textdomain' => 'launchpad',
		'editorScript' => array(
			'file:./index.54f871ea427e5415fcce.js'
		),
		'viewScript' => array(
			'file:./view.cbc752db1dfed12b9a5b.js'
		),
		'style' => array(
			'file:./style.85987d2fb13ceed6aed6.css'
		),
		'editorStyle' => array(
			'file:./editor-style.023d5602640eab89685c.css'
		),
		'render' => 'file:./render.php',
		'attributes' => array(
			'tabsGroupId' => array(
				'type' => 'string',
				'default' => ''
			),
			'shouldShowTabSectionTitle' => array(
				'type' => 'boolean',
				'default' => true
			),
			'titleLevel' => array(
				'type' => 'string',
				'enum' => array(
					'1',
					'2',
					'3',
					'4',
					'5',
					'6'
				),
				'default' => '2'
			),
			'title' => array(
				'type' => 'string',
				'default' => ''
			),
			'initiallySelectedTab' => array(
				'type' => 'string',
				'default' => ''
			),
			'hasDismissedVariationsSelector' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'providesContext' => array(
			'launchpad/tabsGroupId' => 'tabsGroupId',
			'launchpad/initiallySelectedTab' => 'initiallySelectedTab',
			'launchpad/shouldShowTabSectionTitle' => 'shouldShowTabSectionTitle',
			'launchpad/title' => 'title'
		),
		'usesContext' => array(
			
		),
		'supports' => array(
			'align' => true
		),
		'example' => array(
			'attributes' => array(
				'tabsGroupId' => '455684d7',
				'title' => 'Tabs group heading',
				'initiallySelectedTab' => 'tab_1'
			),
			'innerBlocks' => array(
				array(
					'name' => 'launchpad-blocks/tab-list',
					'attributes' => array(
						'selectedTab' => 'tab_1'
					)
				),
				array(
					'name' => 'launchpad-blocks/tab-panel-group',
					'innerBlocks' => array(
						array(
							'name' => 'launchpad-blocks/tab-panel',
							'attributes' => array(
								'id' => 'tab_1',
								'tab' => array(
									'id' => 'tab_1_trigger',
									'label' => 'Tab 1'
								)
							),
							'innerBlocks' => array(
								array(
									'name' => 'core/paragraph',
									'attributes' => array(
										'content' => 'Pippin pressed forward as they passed under the lamp beneath the gate-arch, and when he saw the pale face of Faramir he caught his breath. It was the face of one who has been assailed by a great fear or anguish, but has mastered it and now is quiet. Proud and grave he stood for a moment as he spoke to the guard, and Pippin gazing at him saw how closely he resembled his brother Boromir – whom Pippin had liked from the first, admiring the great man\'s lordly but kindly manner. Yet suddenly for Faramir his heart was strangely moved with a feeling that he had not known before. Here was one with an air of high nobility such as Aragorn at times revealed, less high perhaps, yet also less incalculable and remote: one of the Kings of Men born into a later time, but touched with the wisdom and sadness of the Elder Race. He knew now why Beregond spoke his name with love. He was a captain that men would follow, that he would follow, even under the shadow of the black wings.'
									)
								)
							)
						),
						array(
							'name' => 'launchpad-blocks/tab-panel',
							'attributes' => array(
								'id' => 'tab_2',
								'tab' => array(
									'id' => 'tab_2_trigger',
									'label' => 'Tab 2'
								)
							),
							'innerBlocks' => array(
								
							)
						),
						array(
							'name' => 'launchpad-blocks/tab-panel',
							'attributes' => array(
								'id' => 'tab_3',
								'tab' => array(
									'id' => 'tab_3_trigger',
									'label' => 'Tab 3'
								)
							),
							'innerBlocks' => array(
								
							)
						)
					)
				)
			)
		)
	)
);
	