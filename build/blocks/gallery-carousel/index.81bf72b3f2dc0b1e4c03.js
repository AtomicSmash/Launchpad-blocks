(function(x,h){if(typeof exports=="object"&&typeof module=="object")module.exports=h();else if(typeof define=="function"&&define.amd)define([],h);else{var _=h();for(var l in _)(typeof exports=="object"?exports:x)[l]=_[l]}})(globalThis,()=>(()=>{var w={4860:(l=>{l.exports={apiVersion:3,name:"launchpad-blocks/gallery-carousel",allowedBlocks:["launchpad-blocks/gallery-carousel-lightbox","launchpad-blocks/carousel-slides"],title:"Gallery with lightbox",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:["lightbox"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{images:{type:"array",default:[]},columnCount:{type:"integer",default:4},shouldLinkSlidesToLightbox:{type:"boolean",default:!0},slides:{type:"array",default:[]}},providesContext:{"launchpad-blocks/carouselImages":"images","launchpad-blocks/carouselSlides":"slides","launchpad-blocks/shouldLinkSlidesToLightbox":"shouldLinkSlidesToLightbox"},usesContext:[],example:{attributes:{images:[{id:237,url:"https://picsum.photos/id/237/260/180"},{id:433,url:"https://picsum.photos/id/433/260/180"},{id:582,url:"https://picsum.photos/id/582/260/180"},{id:593,url:"https://picsum.photos/id/593/260/180"},{id:943,url:"https://picsum.photos/id/943/260/180"},{id:1024,url:"https://picsum.photos/id/1024/260/180"}]},innerBlocks:[{name:"launchpad-blocks/carousel-slides",innerBlocks:[{name:"core/image",attributes:{id:237,url:"https://picsum.photos/id/237/260/180"}},{name:"core/image",attributes:{id:433,url:"https://picsum.photos/id/433/260/180"}},{name:"core/image",attributes:{id:582,url:"https://picsum.photos/id/582/260/180"}},{name:"core/image",attributes:{id:593,url:"https://picsum.photos/id/593/260/180"}},{name:"core/image",attributes:{id:943,url:"https://picsum.photos/id/943/260/180"}},{name:"core/image",attributes:{id:1024,url:"https://picsum.photos/id/1024/260/180"}}]},{name:"launchpad-blocks/gallery-carousel-lightbox",innerBlocks:[{name:"launchpad-blocks/carousel",attributes:{images:[{id:237,url:"https://picsum.photos/id/237/260/180"},{id:433,url:"https://picsum.photos/id/433/260/180"},{id:582,url:"https://picsum.photos/id/582/260/180"},{id:593,url:"https://picsum.photos/id/593/260/180"},{id:943,url:"https://picsum.photos/id/943/260/180"},{id:1024,url:"https://picsum.photos/id/1024/260/180"}]},innerBlocks:[{name:"launchpad-blocks/carousel-slides",attributes:{shouldPullImagesFromContext:!0}},{name:"launchpad-blocks/carousel-navigation-arrows",attributes:{shouldShowTextVisually:!1,className:"is-style-overlay"}}]}]}]},supports:{}}})},x={};function h(l){var p=x[l];if(p!==void 0)return p.exports;var g=x[l]={exports:{}};return w[l](g,g.exports,h),g.exports}h.n=l=>{var p=l&&l.__esModule?()=>l.default:()=>l;return h.d(p,{a:p}),p},h.d=(l,p)=>{for(var g in p)h.o(p,g)&&!h.o(l,g)&&Object.defineProperty(l,g,{enumerable:!0,get:p[g]})},h.o=(l,p)=>Object.prototype.hasOwnProperty.call(l,p);var _={};return(()=>{"use strict";const l=window.ReactJSXRuntime,p=window.wp.blocks,g=window.wp.blockEditor,k=window.wp.components,X=window.wp.coreData,Z=window.wp.data,K=window.wp.i18n,y=window.React;function Q(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function z(e){return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,l.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,l.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,l.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const T=(0,y.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:s,size:n,isEditorMode:i=!1,...r}=o;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,...r,children:(0,l.jsx)("use",{href:`${i?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${s}`})})}}});function P(e){return(0,l.jsx)(y.Suspense,{fallback:null,children:(0,l.jsx)(T,{...e})})}function N(){(0,p.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:z})}function j(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Y(e,t,o){const s=t.spacing?.blockGap;let n="none";if(s===!0)n="both";else if(Array.isArray(s)){const r=s.includes("horizontal"),u=s.includes("vertical");r&&u?n="both":r?n="horizontal":u&&(n="vertical")}const i={columnGap:n==="both"||n==="horizontal"?j(o?.spacing?.blockGap,n):void 0,rowGap:n==="both"||n==="vertical"?j(o?.spacing?.blockGap,n):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:i};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...i}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...i}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...i}};default:return{className:`is-layout-${e.type}`,style:{...i}}}}function $(e,t){return e.reduce((o,s)=>{if(s.name===t)o.push(s);else if(s.innerBlocks){const n=$(s.innerBlocks,t);n&&o.push(...n)}return o},[])}const ee=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=useMemo(()=>({}),[]),{postTypes:s,taxonomies:n}=useSelect(m=>{const{getEntityRecords:d}=m(coreStore),f=d("root","postType",e),a=d("root","taxonomy",t);if(!a)return{postTypes:f,taxonomies:a};for(const b of a)o[b.slug]=d("taxonomy",b.slug);return{postTypes:f,taxonomies:a}},[e,t,o]),i=["attachment"],r=[],u=s?.filter(({viewable:m,slug:d})=>m&&!i.includes(d));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const c={};for(const m of u){const d=n?.filter(({types:f,slug:a})=>f.includes(m.slug)&&!r.includes(a));d&&(c[m.slug]=d.map(f=>{const a=o?.[f.slug]??null;return{...f,terms:a}}))}return{filteredPostTypes:u,mappedTaxonomies:c===void 0||Object.values(c).length===0?void 0:c}};function te({list:e,containerClassName:t,renderItem:o}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
	border-top: 1px solid #d7d7d7;
	display: flex;
	flex-direction: column;
}

.draggable-list-item {
	align-items: center;
	border-bottom: 1px solid #d7d7d7;
	color: #6a6a6a;
	display: flex;
	padding: 0.5rem 0;
	position: relative;
	user-select: none;
}

.draggable-list-item-content {
	align-items: center;
	background: #f5f5f6;
	border-radius: 3px;
	display: flex;
	flex: 1;
	padding: 0.5rem;
}

.draggable-list-item-text {
	color: #1e1e1e;
	flex: 1;
}

.draggable-list-item .menu-icon {
	flex: 0 0 2rem;
	font-size: 1.5rem;
	height: 2rem;
	line-height: 1;
	padding: 0.25rem;
	width: 2rem;
}

.draggable-list-item .drag-handle,
.draggable-list-item .remove-button {
	flex: 0 0 2rem;
	height: 2.5rem;
	line-height: 0;
	padding: 0.5rem;
}

.draggable-list-item .drag-handle {
	cursor: grab;
}

.draggable-list-item .drag-handle:hover {
	background: #fafafb;
}

.draggable-list-item .remove-button {
	background: none;
	border: none;
	color: inherit;
	cursor: pointer;
}

.draggable-list-item .remove-button:hover {
	color: #da2121;
}

.draggable-list-item .drag-handle svg {
	height: 1.5rem;
	object-fit: cover;
	width: 1rem;
}

.draggable-list-item .remove-button svg {
	height: 1rem;
	object-fit: cover;
	width: 1rem;
}

.draggable-list-item .drag-handle:active {
	cursor: grabbing;
}

.draggable-list-item.being-dragged {
	background: #eee;
	color: #3d3d3d;
	opacity: 0.5;
}

.drag-zone-top,
.drag-zone-bottom {
	display: none;
	height: 50%;
	position: absolute;
	width: 100%;
}

.drag-zone-top {
	top: 0;
}

.drag-zone-bottom {
	bottom: 0;
}

.is-dragging .drag-zone-top,
.is-dragging .drag-zone-bottom {
	display: block;
}

.draggable-list-item:first-child .drag-zone-top {
	height: 150%;
	top: -100%;
}

.draggable-list-item:last-child .drag-zone-bottom {
	bottom: -100%;
	height: 150%;
}

.custom-multiple-select-list-item .menu-icon {
	color: #707070;
}

.custom-multiple-select-list-item.is-selected .menu-icon {
	color: currentcolor;
}

.custom-multiple-select-list-item .chip,
.draggable-list-item .chip {
	background: #cdcdcd;
	display: inline-block;
	font-weight: 700;
	padding: 0.25rem;
}

.custom-multiple-select-list {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	max-height: 15rem;
	overflow-y: scroll;
}

.custom-multiple-select-list-item {
	align-items: center;
	background-color: #f5f5f6;
	border: 1px solid #d7d7d7;
	border-radius: 3px;
	box-shadow: 0 3px 4px rgb(0 0 0 / 7%);
	color: #1e1e1e;
	cursor: pointer;
	display: flex;
	font-size: 13px;
	gap: 0.5rem;
	line-height: 16px;
	margin-right: 0.25rem;
	padding: 0.5rem;
	width: calc(100% - 0.25rem);
}

.custom-multiple-select-list-item.is-selected {
	color: #337bb5;
}

.custom-multiple-select-list-item-label {
	flex: 1;
	text-align: left;
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(s=>o({listItem:s,buttonProps:{type:"button",className:`custom-multiple-select-list-item${s.isSelected?" is-selected":""}`}}))})]})}function R(e){return e.indexOf("data:image/svg+xml;")===0}function D(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function I(e){return e.indexOf("dashicons-")===0}function A({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(R(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(D(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(I(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const oe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function se({colours:e,attributesDefinition:t,attributes:o,setAttributes:s}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:n=>{if(n)for(const i of n)i()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(n=>jsx(M,{colour:n,attributesDefinition:t,attributes:o,setAttributes:s},n.attributeName))})})}function M({colour:e,attributesDefinition:t,attributes:o,setAttributes:s}){const[n,i,r,u,c]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==o[e.attributeName],d=()=>{s({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:m,onDeselect:d,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:a,onToggle:b})=>jsx(Fragment,{children:jsx(Button,{ref:f,__next40pxDefaultSize:!0,onClick:b,"aria-expanded":a,className:`block-editor-panel-color-gradient-settings__dropdown${a?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:o[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...n&&n?.length>0?[{name:"User",colors:n}]:[],...i&&i?.length>0?[{name:"Theme",colors:i}]:[],...u&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:o[e.attributeName],onChange:a=>{s({[e.attributeName]:a})},disableCustomColors:!c})})})})})},e.attributeName)}function ne({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:s}){const[n,i,r]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=i?.map(({name:a,ratio:b})=>({label:a,value:b}))??[],c=n?.map(({name:a,ratio:b})=>({label:a,value:b}))??[],m=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?c:[],...u||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,f]=useState(m.map(a=>a.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:m,value:d,onChange:a=>{f(a),a!=="custom"&&t(a)}}),d==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&s!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:a=>{typeof a=="string"&&["contain","cover"].includes(a)&&s(a)},value:o,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const L=(e,t,o,s)=>{const{getBlocksByName:n,getBlockAttributes:i,getBlockParentsByBlockName:r}=select(blockEditorStore);return n(s).some(c=>{if(r(c,"core/template-part",!0).length)return!1;const{[o]:m}=i(c);return e!==c&&t===m})};function ie(e,t,o,s,n){const{[t]:i}=e,r=useCallback(c=>L(o,c,t,n),[o,t,n]);return useEffect(()=>{if(i===""){const c=o.slice(0,o.indexOf("-"));s({[t]:c})}if(r(i)){const c=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${i}. New value: ${c}`),s({[t]:c})}},[i,o,s,r,t]),useMemo(()=>function({label:m,help:d,onValidChange:f,idAttribute:a}){const[b,J]=useState(a);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof d=="function"?d(!r(b)):d,value:b,onChange:v=>{J(v),r(v)||f(v)}})},[r])}function le({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:C(t),controls:e.map(s=>{{const n=s===t;return{icon:C(s),title:O(s),isDisabled:n,onClick:()=>o(s)}}})})}function O(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function C(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function re(e){const{hasChildren:t}=useSelect(o=>{const{getBlocks:s}=o(blockEditorStore);return{hasChildren:s(e).length>0}},[e]);return t}function ae({clientId:e,blockInfo:t,variations:o,allowSkip:s}){const{replaceInnerBlocks:n,updateBlockAttributes:i}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:o.map(r=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?jsx(A,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&i(e,r.attributes),r.innerBlocks&&n(e,createBlocksFromInnerBlocksTemplate(r.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),s&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{n(e,[],!1),i(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function ce({imageId:e,className:t="",size:o="full"}){const s=useSelect(i=>typeof e=="number"&&e>0?i(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!s)return null;const n=()=>{const i={src:s.source_url,className:`attachment-${o} size-${o} ${t}`,width:s.media_details.width,height:s.media_details.height,srcSet:""};return s.media_details?.sizes?.[o]&&(i.src=s.media_details.sizes[o].source_url,i.width=s.media_details.sizes[o].width,i.height=s.media_details.sizes[o].height),i.srcSet=Object.entries(s.media_details.sizes??{}).map(([r,u])=>`${u.source_url} ${u.width}w`).join(", "),i};return jsx(Fragment,{children:jsx("img",{...n(),alt:s.alt_text||""})})}function H(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>H(o))):t.push([]),t}function ue(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const n=e()?.scrollHeight??0;if(n){const i=t.current.style;i.minHeight="",t.current.setAttribute("style",`${i.cssText}min-height: ${n}px !important`)}else t.current.style.minHeight=""}},1)}}var E=h(4860),S=h.n(E);const G=[];function B({attributes:e,setAttributes:t}){const{columnCount:o}=e,s=(0,g.useBlockProps)({"data-launchpad-gallery-carousel":"",style:{"--column-count":o}}),n=(0,g.useInnerBlocksProps)(s,{template:[["launchpad-blocks/carousel-slides",{aspectRatio:"1"}],["launchpad-blocks/gallery-carousel-lightbox"]]});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.InspectorControls,{children:(0,l.jsx)(k.Panel,{children:(0,l.jsx)(k.PanelBody,{children:(0,l.jsx)(k.RangeControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,help:"Please select the number of images to show on a single row.",initialPosition:4,label:"Columns",max:10,min:1,onChange:i=>{t({columnCount:i})},allowReset:!0,value:o})})})}),(0,l.jsx)("div",{...n})]})}B.displayName="GalleryCarouselWrapperEdit";function V({hasInnerBlocks:e}){return e?W:F}function F(){return null}function W(){return(0,l.jsx)(g.InnerBlocks.Content,{})}const q={from:[],to:[]},U=[],de={"launchpad-blocks/carouselImages":"images","launchpad-blocks/carouselSlides":"slides","launchpad-blocks/shouldLinkSlidesToLightbox":"shouldLinkSlidesToLightbox"},pe=null;(0,p.registerBlockType)(S().name,{icon:(0,l.jsx)(P,{iconName:"gallery-carousel"}),deprecated:G,edit:B,save:V({hasInnerBlocks:!0}),transforms:q}),N(),U.forEach(e=>{(0,p.registerBlockVariation)(S().name,e)})})(),_})());
