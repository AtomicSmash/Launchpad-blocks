(function(x,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var k=g();for(var r in k)(typeof exports=="object"?exports:x)[r]=k[r]}})(globalThis,()=>(()=>{var C={4615:(r=>{r.exports={apiVersion:3,name:"launchpad-blocks/carousel",title:"Carousel",category:"theme",description:"",textdomain:"launchpad-blocks",allowedBlocks:["launchpad-blocks/carousel-slides","launchpad-blocks/carousel-content-slides","launchpad-blocks/carousel-thumbnails","launchpad-blocks/carousel-navigation-arrows","launchpad-blocks/carousel-dots","launchpad-blocks/carousel-slide-count"],keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{images:{type:"array",default:[]},shouldLoop:{type:"boolean",default:!0},shouldLinkSlidesToLightbox:{type:"boolean",default:!1},slides:{type:"array",default:[]},currentlySelectedSlide:{type:"number",default:0,role:"local"}},providesContext:{"launchpad-blocks/carouselImages":"images","launchpad-blocks/carouselSlides":"slides","launchpad-blocks/shouldLinkSlidesToLightbox":"shouldLinkSlidesToLightbox","launchpad-blocks/currentlySelectedSlide":"currentlySelectedSlide"},usesContext:["launchpad-blocks/carouselImages","launchpad-blocks/carouselSlides"],supports:{align:!0}}})},x={};function g(r){var p=x[r];if(p!==void 0)return p.exports;var h=x[r]={exports:{}};return C[r](h,h.exports,g),h.exports}g.n=r=>{var p=r&&r.__esModule?()=>r.default:()=>r;return g.d(p,{a:p}),p},g.d=(r,p)=>{for(var h in p)g.o(p,h)&&!g.o(r,h)&&Object.defineProperty(r,h,{enumerable:!0,get:p[h]})},g.o=(r,p)=>Object.prototype.hasOwnProperty.call(r,p);var k={};return(()=>{"use strict";const r=window.ReactJSXRuntime,p=window.wp.blocks,h=window.wp.blockEditor,w=window.wp.components,ee=window.wp.coreData,$=window.wp.data,te=window.wp.i18n,_=window.React;function oe(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function N(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,r.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,r.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,r.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const L=(0,_.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:s,size:n,isEditorMode:l=!1,...a}=o;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,...a,children:(0,r.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${s}`})})}}});function I(e){return(0,r.jsx)(_.Suspense,{fallback:null,children:(0,r.jsx)(L,{...e})})}function R(){(0,p.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:N})}function B(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function se(e,t,o){const s=t.spacing?.blockGap;let n="none";if(s===!0)n="both";else if(Array.isArray(s)){const a=s.includes("horizontal"),d=s.includes("vertical");a&&d?n="both":a?n="horizontal":d&&(n="vertical")}const l={columnGap:n==="both"||n==="horizontal"?B(o?.spacing?.blockGap,n):void 0,rowGap:n==="both"||n==="vertical"?B(o?.spacing?.blockGap,n):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function E(e,t){return e.reduce((o,s)=>{if(s.name===t)o.push(s);else if(s.innerBlocks){const n=E(s.innerBlocks,t);n&&o.push(...n)}return o},[])}const ne=()=>{const{postTypes:e,taxonomies:t}=useSelect(o=>{const{getEntityRecords:s}=o(coreStore),n=["attachment"],l=s("root","postType",{per_page:-1})?.filter(({viewable:i,slug:m})=>i&&!n.includes(m));if(!l||l.length===0)return{postTypes:l,taxonomies:void 0};const a={},d=[];for(const i of l){const m=s("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:u,slug:f})=>u.includes(i.slug)&&!d.includes(f));m&&(a[i.slug]=m.map(u=>{const f=s("taxonomy",u.slug);return{...u,terms:f}}))}return{postTypes:l,taxonomies:a}},[]);return{filteredPostTypes:e,mappedTaxonomies:t===void 0||Object.values(t).length===0?void 0:t}};function le({list:e,containerClassName:t,renderItem:o}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(s=>o({listItem:s,buttonProps:{type:"button",className:`custom-multiple-select-list-item${s.isSelected?" is-selected":""}`}}))})]})}function A(e){return e.indexOf("data:image/svg+xml;")===0}function O(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function D(e){return e.indexOf("dashicons-")===0}function M({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(A(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(O(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(D(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ae={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function re({colours:e,attributesDefinition:t,attributes:o,setAttributes:s}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:n=>{if(n)for(const l of n)l()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(n=>jsx(H,{colour:n,attributesDefinition:t,attributes:o,setAttributes:s},n.attributeName))})})}function H({colour:e,attributesDefinition:t,attributes:o,setAttributes:s}){const[n,l,a,d,i]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==o[e.attributeName],u=()=>{s({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:u,hasValue:m,onDeselect:u,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:b})=>jsx(Fragment,{children:jsx(Button,{ref:f,__next40pxDefaultSize:!0,onClick:b,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:o[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...n&&n?.length>0?[{name:"User",colors:n}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...d&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:o[e.attributeName],onChange:c=>{s({[e.attributeName]:c})},disableCustomColors:!i})})})})})},e.attributeName)}function ie({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:s}){const[n,l,a]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=l?.map(({name:c,ratio:b})=>({label:c,value:b}))??[],i=n?.map(({name:c,ratio:b})=>({label:c,value:b}))??[],m=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?i:[],...d||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[u,f]=useState(m.map(c=>c.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:m,value:u,onChange:c=>{f(c),c!=="custom"&&t(c)}}),u==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&s!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&s(c)},value:o,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const G=(e,t,o,s)=>{const{getBlocksByName:n,getBlockAttributes:l,getBlockParentsByBlockName:a}=select(blockEditorStore);return n(s).some(i=>{if(a(i,"core/template-part",!0).length)return!1;const{[o]:m}=l(i);return e!==i&&t===m})};function ce(e,t,o,s,n){const{[t]:l}=e,a=useCallback(i=>G(o,i,t,n),[o,t,n]);return useEffect(()=>{if(l===""){const i=o.slice(0,o.indexOf("-"));s({[t]:i})}if(a(l)){const i=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${i}`),s({[t]:i})}},[l,o,s,a,t]),useMemo(()=>function({label:m,help:u,onValidChange:f,idAttribute:c}){const[b,j]=useState(c);return jsx(TextControl,{label:m,help:typeof u=="function"?u(!a(b)):u,value:b,onChange:S=>{j(S),a(S)||f(S)}})},[a])}function ue({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:T(t),controls:e.map(s=>{{const n=s===t;return{icon:T(s),title:W(s),isDisabled:n,onClick:()=>o(s)}}})})}function W(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function T(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function de(e){const{hasChildren:t}=useSelect(o=>{const{getBlocks:s}=o(blockEditorStore);return{hasChildren:s(e).length>0}},[e]);return t}function pe({clientId:e,blockInfo:t,variations:o,allowSkip:s}){const{replaceInnerBlocks:n,updateBlockAttributes:l}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:o.map(a=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?jsx(M,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&l(e,a.attributes),a.innerBlocks&&n(e,createBlocksFromInnerBlocksTemplate(a.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),s&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{n(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function me({imageId:e,className:t="",size:o="full"}){const s=useSelect(l=>typeof e=="number"&&e>0?l(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!s)return null;const n=()=>{const l={src:s.source_url,className:`attachment-${o} size-${o} ${t}`,width:s.media_details.width,height:s.media_details.height,srcSet:""};return s.media_details?.sizes?.[o]&&(l.src=s.media_details.sizes[o].source_url,l.width=s.media_details.sizes[o].width,l.height=s.media_details.sizes[o].height),l.srcSet=Object.entries(s.media_details.sizes??{}).map(([a,d])=>`${d.source_url} ${d.width}w`).join(", "),l};return jsx(Fragment,{children:jsx("img",{...n(),alt:s.alt_text||""})})}function F(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>F(o))):t.push([]),t}function he(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const n=e()?.scrollHeight??0;if(n){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${n}px !important`)}else t.current.style.minHeight=""}},1)}}var q=g(4615),z=g.n(q);const V=[];function ge(e){if(e===void 0)throw new Error(`Pixel value ${e} is undefined`);if(!e.endsWith("px"))throw new Error(`Pixel value ${e} is not a pixel value`);if(e.includes(" "))throw new Error(`Pixel value ${e} contains multiple values`);return Number(e.replace("px",""))}function fe(e){let t="";const o=document.createElement("div");return o.innerHTML=e,t=o.innerText,U(t)}function U(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|(?<!-)-+$/g,"")}function X(e,t=()=>!0){const o=e.parentElement;return o===null?null:t(o)?o:X(o,t)}function be(e){if(new RegExp("ms$","ig").test(e))return Number(e.substring(0,e.length-2));if(new RegExp("s$","ig").test(e))return Number(e.substring(0,e.length-1))*1e3;throw new Error("Time didn't end with ms or s so was not correctly parsed.")}function xe(){if(typeof document>"u")return"unknown";const e=window.navigator.userAgent;let t="unknown";return e.search("Windows")!==-1?t="Windows":e.search("Mac")!==-1?t="MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?t="UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1&&(t="Linux"),t}function y(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(!Object.entries(e[o]).every(([n,l])=>Array.isArray(l)?y(l,t[o]?.[n]):t[o]?.[n]===l))return!1;return!0}function P({clientId:e,attributes:t,setAttributes:o,context:s}){const{shouldLoop:n,images:l,slides:a}=t,d=(0,h.useBlockProps)({"data-launchpad-carousel":"","data-loop":n?"true":"false"}),i=(0,h.useInnerBlocksProps)(d,{template:[["launchpad-blocks/carousel-slides"]]}),{shouldGetSlidesFromContext:m}=(0,$.useSelect)(u=>{const{getBlocks:f}=u(h.store);return{shouldGetSlidesFromContext:f(e).find(j=>j.name==="launchpad-blocks/carousel-slides")?.attributes?.shouldPullImagesFromContext??!1}},[e]);return(0,_.useEffect)(()=>{m&&(s["launchpad-blocks/carouselImages"]!==void 0&&!y(s["launchpad-blocks/carouselImages"],l)&&o({images:s["launchpad-blocks/carouselImages"]}),s["launchpad-blocks/carouselSlides"]!==void 0&&!y(s["launchpad-blocks/carouselSlides"],a)&&o({slides:s["launchpad-blocks/carouselSlides"]}))},[s,l,a,o,m]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.InspectorControls,{children:(0,r.jsx)(w.Panel,{children:(0,r.jsx)(w.PanelBody,{children:(0,r.jsx)(w.ToggleControl,{__nextHasNoMarginBottom:!0,checked:n,label:"Should your carousel loop round if you are at the end and you navigate the slide again.",onChange:u=>{o({shouldLoop:u})}})})})}),(0,r.jsx)("div",{...i})]})}P.displayName="CarouselEdit";function J({hasInnerBlocks:e}){return e?Z:Y}function Y(){return null}function Z(){return(0,r.jsx)(h.InnerBlocks.Content,{})}const K={from:[],to:[]},v=[{name:"core/image",attributes:{id:237,url:"https://picsum.photos/id/237/260/180"}},{name:"core/image",attributes:{id:433,url:"https://picsum.photos/id/433/260/180"}},{name:"core/image",attributes:{id:582,url:"https://picsum.photos/id/582/260/180"}},{name:"core/image",attributes:{id:593,url:"https://picsum.photos/id/593/260/180"}},{name:"core/image",attributes:{id:943,url:"https://picsum.photos/id/943/260/180"}},{name:"core/image",attributes:{id:1024,url:"https://picsum.photos/id/1024/260/180"}}],Q=[{name:"carousel-simple",title:"Simple image carousel",innerBlocks:[["launchpad-blocks/carousel-slides"],["launchpad-blocks/carousel-navigation-arrows",{shouldShowTextVisually:!1,className:"is-style-overlay"}]],isDefault:!0,example:{viewportWidth:1200,attributes:{images:v.map(e=>({id:e.attributes.id,url:e.attributes.url})),shouldLoop:!0,shouldLinkSlidesToLightbox:!1},innerBlocks:[{name:"launchpad-blocks/carousel-slides",innerBlocks:v},{name:"launchpad-blocks/carousel-navigation-arrows",attributes:{shouldShowTextVisually:!1,className:"is-style-overlay"}}]}},{name:"carousel-thumbnail",title:"Image carousel with thumbnail navigation",innerBlocks:[["launchpad-blocks/carousel-slides"],["launchpad-blocks/carousel-navigation-arrows",{},[["launchpad-blocks/carousel-thumbnails"]]]],example:{viewportWidth:1200,attributes:{images:v.map(e=>({id:e.attributes.id,url:e.attributes.url})),shouldLoop:!0,shouldLinkSlidesToLightbox:!1},innerBlocks:[{name:"launchpad-blocks/carousel-slides",innerBlocks:v},{name:"launchpad-blocks/carousel-navigation-arrows",innerBlocks:[{name:"launchpad-blocks/carousel-thumbnails"}]}]}},{name:"carousel-content-simple",title:"Simple content carousel",innerBlocks:[["launchpad-blocks/carousel-content-slides",{aspectRatio:"16/9"},[["launchpad-blocks/carousel-content-slide",{backgroundOrOverlayColour:"rgb(0 0 0)",style:{background:{backgroundImage:{url:"https://picsum.photos/id/237/1600/900"},backgroundSize:"cover"}}},[["launchpad-blocks/carousel-content-slide-content",{},[["core/heading",{placeholder:"Your template"}],["core/paragraph",{placeholder:'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.'}]]]]]]],["launchpad-blocks/carousel-navigation-arrows",{shouldShowTextVisually:!1,className:"is-style-overlay"}]]},{name:"carousel-content-arrows-and-dots",title:"Content carousel - Arrows and dots",innerBlocks:[["launchpad-blocks/carousel-content-slides",{aspectRatio:"16/9"},[["launchpad-blocks/carousel-content-slide",{backgroundOrOverlayColour:"rgb(0 0 0)",style:{background:{backgroundImage:{url:"https://picsum.photos/id/237/1600/900"},backgroundSize:"cover"}}},[["launchpad-blocks/carousel-content-slide-content",{},[["core/heading",{placeholder:"Your template"}],["core/paragraph",{placeholder:'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.'}]]]]]]],["launchpad-blocks/carousel-navigation-arrows",{},[["launchpad-blocks/carousel-dots"]]]]}],ke={"launchpad-blocks/carouselImages":"images","launchpad-blocks/carouselSlides":"slides","launchpad-blocks/shouldLinkSlidesToLightbox":"shouldLinkSlidesToLightbox","launchpad-blocks/currentlySelectedSlide":"currentlySelectedSlide"},ve=null;(0,p.registerBlockType)(z().name,{icon:(0,r.jsx)(I,{iconName:"carousel"}),deprecated:V,edit:P,save:J({hasInnerBlocks:!0}),transforms:K}),R(),Q.forEach(e=>{(0,p.registerBlockVariation)(z().name,e)})})(),k})());
