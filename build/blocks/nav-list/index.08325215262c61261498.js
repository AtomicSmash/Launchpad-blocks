(function(x,f){if(typeof exports=="object"&&typeof module=="object")module.exports=f();else if(typeof define=="function"&&define.amd)define([],f);else{var v=f();for(var l in v)(typeof exports=="object"?exports:x)[l]=v[l]}})(globalThis,()=>(()=>{var y={4781:(l=>{l.exports={apiVersion:3,name:"launchpad-blocks/nav-list",title:"Nav list",category:"theme",description:"The collection of the actual menu items for your navigation.",parent:["launchpad-blocks/navigation","launchpad-blocks/nav-submenu","launchpad-blocks/nav-links-group"],allowedBlocks:["launchpad-blocks/nav-submenu","launchpad-blocks/nav-menu-item"],textdomain:"launchpad-blocks",keywords:["menu","links"],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{isNestedInAnotherNavLink:{type:"boolean",default:!1},ariaLabel:{type:"string",default:"Primary navigation"},linkOrientation:{type:"string",enum:["horizontal","vertical"],default:"horizontal"}},supports:{},example:{viewportWidth:400,attributes:{isNestedInAnotherNavLink:!1},innerBlocks:[{name:"launchpad-blocks/nav-submenu",attributes:{linkText:"Sub menu",isPreview:!0},innerBlocks:[{name:"launchpad-blocks/nav-list",attributes:{isNestedInAnotherNavLink:!0},innerBlocks:[]}]},{name:"launchpad-blocks/nav-submenu",attributes:{linkText:"Sub menu",isPreview:!0},innerBlocks:[{name:"launchpad-blocks/nav-list",attributes:{isNestedInAnotherNavLink:!0},innerBlocks:[]}]},{name:"launchpad-blocks/nav-menu-item",attributes:{linkText:"Menu link",linkHref:"#"}},{name:"launchpad-blocks/nav-menu-item",attributes:{linkText:"Menu link",linkHref:"#"}}]}}})},x={};function f(l){var h=x[l];if(h!==void 0)return h.exports;var p=x[l]={exports:{}};return y[l](p,p.exports,f),p.exports}f.n=l=>{var h=l&&l.__esModule?()=>l.default:()=>l;return f.d(h,{a:h}),h},f.d=(l,h)=>{for(var p in h)f.o(h,p)&&!f.o(l,p)&&Object.defineProperty(l,p,{enumerable:!0,get:h[p]})},f.o=(l,h)=>Object.prototype.hasOwnProperty.call(l,h);var v={};return(()=>{"use strict";const l=window.ReactJSXRuntime,h=window.wp.blocks,p=window.wp.blockEditor,k=window.wp.components,K=window.wp.coreData,N=window.wp.data,C=window.wp.i18n,w=window.React;function Q(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function P(e){return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,l.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,l.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,l.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const T=(0,w.lazy)(async()=>{const e=await import("../../assets-manifest.json").then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:s,isEditorMode:i=!1,...a}=o;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...a,children:(0,l.jsx)("use",{href:`${i?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function $(e){return(0,l.jsx)(w.Suspense,{fallback:null,children:(0,l.jsx)(T,{...e})})}function A(){(0,h.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:P})}function B(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Y(e,t,o){const n=t.spacing?.blockGap;let s="none";if(n===!0)s="both";else if(Array.isArray(n)){const a=n.includes("horizontal"),d=n.includes("vertical");a&&d?s="both":a?s="horizontal":d&&(s="vertical")}const i={columnGap:s==="both"||s==="horizontal"?B(o?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?B(o?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:i};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...i}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...i}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...i}};default:return{className:`is-layout-${e.type}`,style:{...i}}}}function D(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const s=D(n.innerBlocks,t);s&&o.push(...s)}return o},[])}const ee=()=>{const{postTypes:e,taxonomies:t}=useSelect(o=>{const{getEntityRecords:n}=o(coreStore),s=["attachment"],i=n("root","postType",{per_page:-1})?.filter(({viewable:r,slug:u})=>r&&!s.includes(u));if(!i||i.length===0)return{postTypes:i,taxonomies:void 0};const a={},d=[];for(const r of i){const u=n("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:m,slug:g})=>m.includes(r.slug)&&!d.includes(g));u&&(a[r.slug]=u.map(m=>{const g=n("taxonomy",m.slug);return{...m,terms:g}}))}return{postTypes:i,taxonomies:a}},[]);return{filteredPostTypes:e,mappedTaxonomies:t===void 0||Object.values(t).length===0?void 0:t}};function te({list:e,containerClassName:t,renderItem:o}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function R(e){return e.indexOf("data:image/svg+xml;")===0}function I(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function L(e){return e.indexOf("dashicons-")===0}function M({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(R(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(I(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(L(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ne={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function oe({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:s=>{if(s)for(const i of s)i()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>jsx(O,{colour:s,attributesDefinition:t,attributes:o,setAttributes:n},s.attributeName))})})}function O({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[s,i,a,d,r]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),u=()=>t[e.attributeName]?.default!==o[e.attributeName],m=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},g=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:m,hasValue:u,onDeselect:m,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:b})=>jsx(Fragment,{children:jsx(Button,{ref:g,__next40pxDefaultSize:!0,onClick:b,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:o[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...i&&i?.length>0?[{name:"Theme",colors:i}]:[],...d&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:o[e.attributeName],onChange:c=>{n({[e.attributeName]:c})},disableCustomColors:!r})})})})})},e.attributeName)}function se({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[s,i,a]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=i?.map(({name:c,ratio:b})=>({label:c,value:b}))??[],r=s?.map(({name:c,ratio:b})=>({label:c,value:b}))??[],u=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?r:[],...d||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[m,g]=useState(u.map(c=>c.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:u,value:m,onChange:c=>{g(c),c!=="custom"&&t(c)}}),m==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&n(c)},value:o,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const E=(e,t,o,n)=>{const{getBlocksByName:s,getBlockAttributes:i,getBlockParentsByBlockName:a}=select(blockEditorStore);return s(n).some(r=>{if(a(r,"core/template-part",!0).length)return!1;const{[o]:u}=i(r);return e!==r&&t===u})};function ie(e,t,o,n,s){const{[t]:i}=e,a=useCallback(r=>E(o,r,t,s),[o,t,s]);return useEffect(()=>{if(i===""){const r=o.slice(0,o.indexOf("-"));n({[t]:r})}if(a(i)){const r=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${i}. New value: ${r}`),n({[t]:r})}},[i,o,n,a,t]),useMemo(()=>function({label:u,help:m,onValidChange:g,idAttribute:c}){const[b,Z]=useState(c);return jsx(TextControl,{label:u,help:typeof m=="function"?m(!a(b)):m,value:b,onChange:j=>{Z(j),a(j)||g(j)}})},[a])}function le({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:z(t),controls:e.map(n=>{{const s=n===t;return{icon:z(n),title:H(n),isDisabled:s,onClick:()=>o(n)}}})})}function H(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function z(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function ae(e){const{hasChildren:t}=useSelect(o=>{const{getBlocks:n}=o(blockEditorStore);return{hasChildren:n(e).length>0}},[e]);return t}function re({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:s,updateBlockAttributes:i}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:o.map(a=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?jsx(M,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&i(e,a.attributes),a.innerBlocks&&s(e,createBlocksFromInnerBlocksTemplate(a.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),n&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),i(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function ce({imageId:e,className:t="",size:o="full"}){const n=useSelect(i=>typeof e=="number"&&e>0?i(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!n)return null;const s=()=>{const i={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(i.src=n.media_details.sizes[o].source_url,i.width=n.media_details.sizes[o].width,i.height=n.media_details.sizes[o].height),i.srcSet=Object.entries(n.media_details.sizes??{}).map(([a,d])=>`${d.source_url} ${d.width}w`).join(", "),i};return jsx(Fragment,{children:jsx("img",{...s(),alt:n.alt_text||""})})}function G(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>G(o))):t.push([]),t}var V=f(4781),F=f.n(V);const _=window.wp.primitives,W=(0,l.jsx)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(_.Path,{fillRule:"evenodd",d:"M5 11.25h3v1.5H5v-1.5zm5.5 0h3v1.5h-3v-1.5zm8.5 0h-3v1.5h3v-1.5z",clipRule:"evenodd"})}),J=(0,l.jsx)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(_.Path,{d:"M4 12.8h16v-1.5H4v1.5zm0 7h12.4v-1.5H4v1.5zM4 4.3v1.5h16V4.3H4z"})});function S({clientId:e,attributes:{isNestedInAnotherNavLink:t,ariaLabel:o,linkOrientation:n},setAttributes:s}){const i=(0,N.useSelect)(u=>{const{getBlockParentsByBlockName:m}=u(p.store);return m(e,"launchpad-blocks/nav-list").length>0},[e]),a=(0,p.useBlockProps)({"data-navigation-nav-list":!0,className:n==="horizontal"?"is-horizontal":"is-vertical"}),d=(0,p.useInnerBlocksProps)({className:"navigation-nav-list"},{orientation:i?"vertical":"horizontal",templateLock:!1,renderAppender:p.InnerBlocks.ButtonBlockAppender});(0,w.useEffect)(()=>{t!==i&&s({isNestedInAnotherNavLink:i})},[e,t,i,s]);const r=i?"div":"nav";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.BlockControls,{children:(0,l.jsxs)(k.ToolbarGroup,{children:[(0,l.jsx)(k.ToolbarButton,{icon:W,label:(0,C.__)("Align links horizontally","launchpad-blocks"),isPressed:n==="horizontal",onClick:()=>{s({linkOrientation:"horizontal"})}}),(0,l.jsx)(k.ToolbarButton,{icon:J,label:(0,C.__)("Align links vertically","launchpad-blocks"),isPressed:n==="vertical",onClick:()=>{s({linkOrientation:"vertical"})}})]})}),(0,l.jsx)(p.InspectorAdvancedControls,{children:(0,l.jsx)(k.TextControl,{label:"Screen reader label",help:"Define how this navigation block will be described for users who can't see.",value:o,onChange:u=>{s({ariaLabel:u})}})}),(0,l.jsx)(r,{...a,children:(0,l.jsx)("ul",{...d})})]})}S.displayName="NavListEdit";function U({hasInnerBlocks:e}){return e?X:q}function q(){return null}function X(){return(0,l.jsx)(p.InnerBlocks.Content,{})}(0,h.registerBlockType)(F().name,{icon:(0,l.jsx)($,{iconName:"nav-list"}),edit:S,save:U({hasInnerBlocks:!0})}),A()})(),v})());
