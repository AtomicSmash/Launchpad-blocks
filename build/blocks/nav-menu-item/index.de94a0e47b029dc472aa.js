(function(_,f){if(typeof exports=="object"&&typeof module=="object")module.exports=f();else if(typeof define=="function"&&define.amd)define([],f);else{var v=f();for(var l in v)(typeof exports=="object"?exports:_)[l]=v[l]}})(globalThis,()=>(()=>{var j={6910:(l=>{l.exports={apiVersion:3,name:"launchpad-blocks/nav-menu-item",title:"Nav menu item",category:"theme",description:"A simple link for the navigation menu.",parent:["launchpad-blocks/nav-list"],textdomain:"launchpad-blocks",keywords:["menu","nav","links"],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{linkId:{type:"number"},linkKind:{type:"string"},linkType:{type:"string"},linkHref:{type:"string"},linkTarget:{type:"string",enum:["_self","_blank"],default:"_self"},linkText:{type:"string"}},supports:{},example:{viewportWidth:200,attributes:{linkText:"Menu link",linkHref:"#"}}}})},_={};function f(l){var p=_[l];if(p!==void 0)return p.exports;var h=_[l]={exports:{}};return j[l](h,h.exports,f),h.exports}f.n=l=>{var p=l&&l.__esModule?()=>l.default:()=>l;return f.d(p,{a:p}),p},f.d=(l,p)=>{for(var h in p)f.o(p,h)&&!f.o(l,h)&&Object.defineProperty(l,h,{enumerable:!0,get:p[h]})},f.o=(l,p)=>Object.prototype.hasOwnProperty.call(l,p);var v={};return(()=>{"use strict";const l=window.ReactJSXRuntime,p=window.wp.blocks,h=window.wp.blockEditor,k=window.wp.components,K=window.wp.coreData,J=window.wp.data,T=window.wp.i18n,x=window.React;function X(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function z(e){return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,l.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,l.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,l.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const N=(0,x.lazy)(async()=>{const e=await import("../../assets-manifest.json",{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:i,isEditorMode:s=!1,...r}=o;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,...r,children:(0,l.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function P(e){return(0,l.jsx)(x.Suspense,{fallback:null,children:(0,l.jsx)(N,{...e})})}function $(){(0,p.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:z})}function y(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Q(e,t,o){const n=t.spacing?.blockGap;let i="none";if(n===!0)i="both";else if(Array.isArray(n)){const r=n.includes("horizontal"),d=n.includes("vertical");r&&d?i="both":r?i="horizontal":d&&(i="vertical")}const s={columnGap:i==="both"||i==="horizontal"?y(o?.spacing?.blockGap,i):void 0,rowGap:i==="both"||i==="vertical"?y(o?.spacing?.blockGap,i):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function A(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const i=A(n.innerBlocks,t);i&&o.push(...i)}return o},[])}const Y=()=>{const{postTypes:e,taxonomies:t}=useSelect(o=>{const{getEntityRecords:n}=o(coreStore),i=["attachment"],s=n("root","postType",{per_page:-1})?.filter(({viewable:c,slug:m})=>c&&!i.includes(m));if(!s||s.length===0)return{postTypes:s,taxonomies:void 0};const r={},d=[];for(const c of s){const m=n("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:a,slug:g})=>a.includes(c.slug)&&!d.includes(g));m&&(r[c.slug]=m.map(a=>{const g=n("taxonomy",a.slug);return{...a,terms:g}}))}return{postTypes:s,taxonomies:r}},[]);return{filteredPostTypes:e,mappedTaxonomies:t===void 0||Object.values(t).length===0?void 0:t}};function ee({list:e,containerClassName:t,renderItem:o}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function R(e){return e.indexOf("data:image/svg+xml;")===0}function D(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function I(e){return e.indexOf("dashicons-")===0}function M({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(R(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(D(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(I(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const te={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function ne({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:i=>{if(i)for(const s of i)s()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(i=>jsx(O,{colour:i,attributesDefinition:t,attributes:o,setAttributes:n},i.attributeName))})})}function O({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[i,s,r,d,c]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==o[e.attributeName],a=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},g=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:a,hasValue:m,onDeselect:a,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:u,onToggle:b})=>jsx(Fragment,{children:jsx(Button,{ref:g,__next40pxDefaultSize:!0,onClick:b,"aria-expanded":u,className:`block-editor-panel-color-gradient-settings__dropdown${u?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:o[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...i&&i?.length>0?[{name:"User",colors:i}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...d&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:o[e.attributeName],onChange:u=>{n({[e.attributeName]:u})},disableCustomColors:!c})})})})})},e.attributeName)}function oe({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[i,s,r]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=s?.map(({name:u,ratio:b})=>({label:u,value:b}))??[],c=i?.map(({name:u,ratio:b})=>({label:u,value:b}))??[],m=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?c:[],...d||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[a,g]=useState(m.map(u=>u.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:m,value:a,onChange:u=>{g(u),u!=="custom"&&t(u)}}),a==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:u=>{typeof u=="string"&&["contain","cover"].includes(u)&&n(u)},value:o,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const H=(e,t,o,n)=>{const{getBlocksByName:i,getBlockAttributes:s,getBlockParentsByBlockName:r}=select(blockEditorStore);return i(n).some(c=>{if(r(c,"core/template-part",!0).length)return!1;const{[o]:m}=s(c);return e!==c&&t===m})};function ie(e,t,o,n,i){const{[t]:s}=e,r=useCallback(c=>H(o,c,t,i),[o,t,i]);return useEffect(()=>{if(s===""){const c=o.slice(0,o.indexOf("-"));n({[t]:c})}if(r(s)){const c=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${s}. New value: ${c}`),n({[t]:c})}},[s,o,n,r,t]),useMemo(()=>function({label:m,help:a,onValidChange:g,idAttribute:u}){const[b,q]=useState(u);return jsx(TextControl,{label:m,help:typeof a=="function"?a(!r(b)):a,value:b,onChange:w=>{q(w),r(w)||g(w)}})},[r])}function se({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:C(t),controls:e.map(n=>{{const i=n===t;return{icon:C(n),title:L(n),isDisabled:i,onClick:()=>o(n)}}})})}function L(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function C(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function le(e){const{hasChildren:t}=useSelect(o=>{const{getBlocks:n}=o(blockEditorStore);return{hasChildren:n(e).length>0}},[e]);return t}function re({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:i,updateBlockAttributes:s}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:o.map(r=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?jsx(M,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&s(e,r.attributes),r.innerBlocks&&i(e,createBlocksFromInnerBlocksTemplate(r.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),n&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{i(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function ae({imageId:e,className:t="",size:o="full"}){const n=useSelect(s=>typeof e=="number"&&e>0?s(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!n)return null;const i=()=>{const s={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(s.src=n.media_details.sizes[o].source_url,s.width=n.media_details.sizes[o].width,s.height=n.media_details.sizes[o].height),s.srcSet=Object.entries(n.media_details.sizes??{}).map(([r,d])=>`${d.source_url} ${d.width}w`).join(", "),s};return jsx(Fragment,{children:jsx("img",{...i(),alt:n.alt_text||""})})}function E(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>E(o))):t.push([]),t}var G=f(6910),F=f.n(G);const S=window.wp.primitives,W=(0,l.jsx)(S.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(S.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})});function B({clientId:e,isSelected:t,attributes:{linkText:o,linkHref:n,linkTarget:i},setAttributes:s}){const[r,d]=(0,x.useState)(!1);(0,x.useEffect)(()=>{t||d(!1)},[t]);const c=(0,h.useBlockProps)({className:"menu-group-list-item"}),m=(0,x.useMemo)(()=>({url:n,opensInNewTab:i==="_blank",title:o}),[n,i,o]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.BlockControls,{children:(0,l.jsx)(k.ToolbarGroup,{children:(0,l.jsx)(k.ToolbarButton,{icon:W,label:(0,T.__)("Link"),isPressed:r,onClick:()=>{d(!r)}})})}),(0,l.jsxs)("li",{...c,children:[n?(0,l.jsx)(h.RichText,{tagName:"span",className:"menu-group-list-item-link",onChange:a=>{s({linkText:a})},allowedFormats:["core/bold","core/italic"],value:o,placeholder:"Add text..."}):(0,l.jsx)("button",{onClick:()=>d(!r),children:"Add link"}),r?(0,l.jsx)(k.Popover,{position:"bottom",noArrow:!1,shift:!0,offset:10,children:(0,l.jsx)(h.LinkControl,{value:m,showInitialSuggestions:!0,onChange:a=>{s({linkId:a.id,linkKind:a.kind,linkType:a.type,linkHref:a.url,linkText:a.title,linkTarget:a.opensInNewTab?"_blank":"_self"}),d(!1)},onRemove:()=>{s({linkId:void 0,linkKind:void 0,linkType:void 0,linkHref:void 0,linkText:void 0})}},`${e}-link-edit`)}):null]})]})}B.displayName="NavMenuItemEdit";function V({hasInnerBlocks:e}){return e?Z:U}function U(){return null}function Z(){return(0,l.jsx)(h.InnerBlocks.Content,{})}(0,p.registerBlockType)(F().name,{icon:(0,l.jsx)(P,{iconName:"nav-menu-item"}),edit:B,save:V({hasInnerBlocks:!1})}),$()})(),v})());
