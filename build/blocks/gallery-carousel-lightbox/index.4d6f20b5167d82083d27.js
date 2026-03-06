(function(x,h){if(typeof exports=="object"&&typeof module=="object")module.exports=h();else if(typeof define=="function"&&define.amd)define([],h);else{var _=h();for(var i in _)(typeof exports=="object"?exports:x)[i]=_[i]}})(globalThis,()=>(()=>{var w={2716:(i=>{i.exports={apiVersion:3,name:"launchpad-blocks/gallery-carousel-lightbox",title:"Lightbox",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{backgroundColor:{type:"string",default:"white"}},providesContext:{},usesContext:[],supports:{color:!0},parent:["launchpad-blocks/gallery-carousel"]}})},x={};function h(i){var m=x[i];if(m!==void 0)return m.exports;var f=x[i]={exports:{}};return w[i](f,f.exports,h),f.exports}h.n=i=>{var m=i&&i.__esModule?()=>i.default:()=>i;return h.d(m,{a:m}),m},h.d=(i,m)=>{for(var f in m)h.o(m,f)&&!h.o(i,f)&&Object.defineProperty(i,f,{enumerable:!0,get:m[f]})},h.o=(i,m)=>Object.prototype.hasOwnProperty.call(i,m);var _={};return(()=>{"use strict";const i=window.ReactJSXRuntime,m=window.wp.blocks,f=window.wp.blockEditor,Z=window.wp.components,K=window.wp.coreData,z=window.wp.data,Q=window.wp.i18n,v=window.React;function Y(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function P(e){return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,i.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,i.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,i.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const T=(0,v.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:s,isEditorMode:r=!1,...l}=o;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...l,children:(0,i.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function j(e){return(0,i.jsx)(v.Suspense,{fallback:null,children:(0,i.jsx)(T,{...e})})}function N(){(0,m.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:P})}function y(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function ee(e,t,o){const n=t.spacing?.blockGap;let s="none";if(n===!0)s="both";else if(Array.isArray(n)){const l=n.includes("horizontal"),u=n.includes("vertical");l&&u?s="both":l?s="horizontal":u&&(s="vertical")}const r={columnGap:s==="both"||s==="horizontal"?y(o?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?y(o?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function $(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const s=$(n.innerBlocks,t);s&&o.push(...s)}return o},[])}const te=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=useMemo(()=>({}),[]),{postTypes:n,taxonomies:s}=useSelect(d=>{const{getEntityRecords:p}=d(coreStore),g=p("root","postType",e),a=p("root","taxonomy",t);if(!a)return{postTypes:g,taxonomies:a};for(const b of a)o[b.slug]=p("taxonomy",b.slug);return{postTypes:g,taxonomies:a}},[e,t,o]),r=["attachment"],l=[],u=n?.filter(({viewable:d,slug:p})=>d&&!r.includes(p));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const c={};for(const d of u){const p=s?.filter(({types:g,slug:a})=>g.includes(d.slug)&&!l.includes(a));p&&(c[d.slug]=p.map(g=>{const a=o?.[g.slug]??null;return{...g,terms:a}}))}return{filteredPostTypes:u,mappedTaxonomies:c===void 0||Object.values(c).length===0?void 0:c}};function oe({list:e,containerClassName:t,renderItem:o}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function D(e){return e.indexOf("data:image/svg+xml;")===0}function R(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function I(e){return e.indexOf("dashicons-")===0}function A({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(D(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(R(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(I(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ne={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function se(){const[e,t,o,n]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),s={};if(n&&o&&o.length>0)for(const r of o)s[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)s[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)s[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:s}}function re({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:s=>{if(s)for(const r of s)r()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>jsx(M,{colour:s,attributesDefinition:t,attributes:o,setAttributes:n},s.attributeName))})})}function M({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[s,r,l,u,c]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),d=()=>t[e.attributeName]?.default!==o[e.attributeName],p=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},g=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:d,onDeselect:p,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:a,onToggle:b})=>jsx(Fragment,{children:jsx(Button,{ref:g,__next40pxDefaultSize:!0,onClick:b,"aria-expanded":a,className:`block-editor-panel-color-gradient-settings__dropdown${a?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:o[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...u&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:o[e.attributeName],onChange:a=>{n({[e.attributeName]:a})},disableCustomColors:!c})})})})})},e.attributeName)}function le({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[s,r,l]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=r?.map(({name:a,ratio:b})=>({label:a,value:b}))??[],c=s?.map(({name:a,ratio:b})=>({label:a,value:b}))??[],d=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?c:[],...u||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,g]=useState(d.map(a=>a.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:d,value:p,onChange:a=>{g(a),a!=="custom"&&t(a)}}),p==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:a=>{typeof a=="string"&&["contain","cover"].includes(a)&&n(a)},value:o,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const O=(e,t,o,n)=>{const{getBlocksByName:s,getBlockAttributes:r,getBlockParentsByBlockName:l}=select(blockEditorStore);return s(n).some(c=>{if(l(c,"core/template-part",!0).length)return!1;const{[o]:d}=r(c);return e!==c&&t===d})};function ie(e,t,o,n,s){const{[t]:r}=e,l=useCallback(c=>O(o,c,t,s),[o,t,s]);return useEffect(()=>{if(r===""){const c=o.slice(0,o.indexOf("-"));n({[t]:c})}if(l(r)){const c=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${c}`),n({[t]:c})}},[r,o,n,l,t]),useMemo(()=>function({label:d,help:p,onValidChange:g,idAttribute:a}){const[b,X]=useState(a);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:d,help:typeof p=="function"?p(!l(b)):p,value:b,onChange:k=>{X(k),l(k)||g(k)}})},[l])}function ae({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:C(t),controls:e.map(n=>{{const s=n===t;return{icon:C(n),title:E(n),isDisabled:s,onClick:()=>o(n)}}})})}function E(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function C(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function ce(e){const{hasChildren:t}=useSelect(o=>{const{getBlocks:n}=o(blockEditorStore);return{hasChildren:n(e).length>0}},[e]);return t}function ue({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:s,updateBlockAttributes:r}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:o.map(l=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?jsx(A,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&r(e,l.attributes),l.innerBlocks&&s(e,createBlocksFromInnerBlocksTemplate(l.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),n&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function de({imageId:e,className:t="",size:o="full"}){const n=useSelect(r=>typeof e=="number"&&e>0?r(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!n)return null;const s=()=>{const r={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(r.src=n.media_details.sizes[o].source_url,r.width=n.media_details.sizes[o].width,r.height=n.media_details.sizes[o].height),r.srcSet=Object.entries(n.media_details.sizes??{}).map(([l,u])=>`${u.source_url} ${u.width}w`).join(", "),r};return jsx(Fragment,{children:jsx("img",{...s(),alt:n.alt_text||""})})}function L(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>L(o))):t.push([]),t}function pe(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const s=e()?.scrollHeight??0;if(s){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${s}px !important`)}else t.current.style.minHeight=""}},1)}}var H=h(2716),S=h.n(H);const G=[],F=window.wp.hooks;function B({clientId:e,isSelected:t}){const[o,n]=(0,v.useState)(!1),s=(0,z.useSelect)(d=>d(f.store).hasSelectedInnerBlock(e,!0),[e]);(0,v.useEffect)(()=>{n(t||s)},[t,s]);const r=(0,f.useBlockProps)({hidden:!o,"data-lightbox":""}),{children:l,...u}=(0,f.useInnerBlocksProps)(r,{template:[["launchpad-blocks/carousel",{lock:{move:!0,remove:!0}},[["launchpad-blocks/carousel-slides",{shouldPullImagesFromContext:!0,lock:{move:!0,remove:!0}}],["launchpad-blocks/carousel-navigation-arrows",{className:"is-style-overlay",lock:{move:!1,remove:!0}}]]]],templateLock:"insert"}),c=(0,F.applyFilters)("launchpadBlocks.lightboxCloseIcon",d=>(0,i.jsx)(j,{iconName:"menu-close-icon",...d}));return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{...u,children:[(0,i.jsx)("button",{type:"button",className:"reset lightbox-close-button","data-lightbox-close-button":!0,onClick:()=>{n(!1)},children:(0,i.jsx)(c,{isEditorMode:!0})}),l]})})}B.displayName="GalleryCarouselLightboxEdit";function V({hasInnerBlocks:e}){return e?q:W}function W(){return null}function q(){return(0,i.jsx)(f.InnerBlocks.Content,{})}const U={from:[],to:[]},J=[],me={},he=null;(0,m.registerBlockType)(S().name,{icon:(0,i.jsx)(j,{iconName:"gallery-carousel-lightbox"}),deprecated:G,edit:B,save:V({hasInnerBlocks:!0}),transforms:U}),N(),J.forEach(e=>{(0,m.registerBlockVariation)(S().name,e)})})(),_})());
