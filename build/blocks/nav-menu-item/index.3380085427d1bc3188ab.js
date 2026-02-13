(function(_,f){if(typeof exports=="object"&&typeof module=="object")module.exports=f();else if(typeof define=="function"&&define.amd)define([],f);else{var v=f();for(var r in v)(typeof exports=="object"?exports:_)[r]=v[r]}})(globalThis,()=>(()=>{var j={6910:(r=>{r.exports={apiVersion:3,name:"launchpad-blocks/nav-menu-item",title:"Nav menu item",category:"theme",description:"A simple link for the navigation menu.",parent:["launchpad-blocks/nav-list"],textdomain:"launchpad-blocks",keywords:["menu","nav","links"],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{linkId:{type:"number"},linkKind:{type:"string"},linkType:{type:"string"},linkHref:{type:"string"},linkTarget:{type:"string",enum:["_self","_blank"],default:"_self"},linkText:{type:"string"}},supports:{},example:{viewportWidth:200,attributes:{linkText:"Menu link",linkHref:"#"}}}})},_={};function f(r){var m=_[r];if(m!==void 0)return m.exports;var h=_[r]={exports:{}};return j[r](h,h.exports,f),h.exports}f.n=r=>{var m=r&&r.__esModule?()=>r.default:()=>r;return f.d(m,{a:m}),m},f.d=(r,m)=>{for(var h in m)f.o(m,h)&&!f.o(r,h)&&Object.defineProperty(r,h,{enumerable:!0,get:m[h]})},f.o=(r,m)=>Object.prototype.hasOwnProperty.call(r,m);var v={};return(()=>{"use strict";const r=window.ReactJSXRuntime,m=window.wp.blocks,h=window.wp.blockEditor,k=window.wp.components,K=window.wp.coreData,J=window.wp.data,z=window.wp.i18n,x=window.React;function X(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function B(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,r.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,r.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,r.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const N=(0,x.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:i,isEditorMode:s=!1,...l}=n;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,...l,children:(0,r.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function $(e){return(0,r.jsx)(x.Suspense,{fallback:null,children:(0,r.jsx)(N,{...e})})}function P(){(0,m.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:B})}function y(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Q(e,t,n){const o=t.spacing?.blockGap;let i="none";if(o===!0)i="both";else if(Array.isArray(o)){const l=o.includes("horizontal"),d=o.includes("vertical");l&&d?i="both":l?i="horizontal":d&&(i="vertical")}const s={columnGap:i==="both"||i==="horizontal"?y(n?.spacing?.blockGap,i):void 0,rowGap:i==="both"||i==="vertical"?y(n?.spacing?.blockGap,i):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function R(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const i=R(o.innerBlocks,t);i&&n.push(...i)}return n},[])}const Y=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=useMemo(()=>({}),[]),{postTypes:o,taxonomies:i}=useSelect(p=>{const{getEntityRecords:c}=p(coreStore),g=c("root","postType",e),a=c("root","taxonomy",t);if(!a)return{postTypes:g,taxonomies:a};for(const b of a)n[b.slug]=c("taxonomy",b.slug);return{postTypes:g,taxonomies:a}},[e,t,n]),s=["attachment"],l=[],d=o?.filter(({viewable:p,slug:c})=>p&&!s.includes(c));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const p of d){const c=i?.filter(({types:g,slug:a})=>g.includes(p.slug)&&!l.includes(a));c&&(u[p.slug]=c.map(g=>{const a=n?.[g.slug]??null;return{...g,terms:a}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function ee({list:e,containerClassName:t,renderItem:n}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function A(e){return e.indexOf("data:image/svg+xml;")===0}function I(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function D(e){return e.indexOf("dashicons-")===0}function M({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(A(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(I(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(D(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const te={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function ne({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:i=>{if(i)for(const s of i)s()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(i=>jsx(H,{colour:i,attributesDefinition:t,attributes:n,setAttributes:o},i.attributeName))})})}function H({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[i,s,l,d,u]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),p=()=>t[e.attributeName]?.default!==n[e.attributeName],c=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},g=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:c,hasValue:p,onDeselect:c,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:a,onToggle:b})=>jsx(Fragment,{children:jsx(Button,{ref:g,__next40pxDefaultSize:!0,onClick:b,"aria-expanded":a,className:`block-editor-panel-color-gradient-settings__dropdown${a?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:n[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...i&&i?.length>0?[{name:"User",colors:i}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...d&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:n[e.attributeName],onChange:a=>{o({[e.attributeName]:a})},disableCustomColors:!u})})})})})},e.attributeName)}function oe({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[i,s,l]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=s?.map(({name:a,ratio:b})=>({label:a,value:b}))??[],u=i?.map(({name:a,ratio:b})=>({label:a,value:b}))??[],p=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?u:[],...d||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[c,g]=useState(p.map(a=>a.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:p,value:c,onChange:a=>{g(a),a!=="custom"&&t(a)}}),c==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:a=>{typeof a=="string"&&["contain","cover"].includes(a)&&o(a)},value:n,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const O=(e,t,n,o)=>{const{getBlocksByName:i,getBlockAttributes:s,getBlockParentsByBlockName:l}=select(blockEditorStore);return i(o).some(u=>{if(l(u,"core/template-part",!0).length)return!1;const{[n]:p}=s(u);return e!==u&&t===p})};function ie(e,t,n,o,i){const{[t]:s}=e,l=useCallback(u=>O(n,u,t,i),[n,t,i]);return useEffect(()=>{if(s===""){const u=n.slice(0,n.indexOf("-"));o({[t]:u})}if(l(s)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${s}. New value: ${u}`),o({[t]:u})}},[s,n,o,l,t]),useMemo(()=>function({label:p,help:c,onValidChange:g,idAttribute:a}){const[b,Z]=useState(a);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:p,help:typeof c=="function"?c(!l(b)):c,value:b,onChange:w=>{Z(w),l(w)||g(w)}})},[l])}function se({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:C(t),controls:e.map(o=>{{const i=o===t;return{icon:C(o),title:L(o),isDisabled:i,onClick:()=>n(o)}}})})}function L(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function C(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function re(e){const{hasChildren:t}=useSelect(n=>{const{getBlocks:o}=n(blockEditorStore);return{hasChildren:o(e).length>0}},[e]);return t}function le({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:i,updateBlockAttributes:s}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:n.map(l=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?jsx(M,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&s(e,l.attributes),l.innerBlocks&&i(e,createBlocksFromInnerBlocksTemplate(l.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),o&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{i(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function ae({imageId:e,className:t="",size:n="full"}){const o=useSelect(s=>typeof e=="number"&&e>0?s(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!o)return null;const i=()=>{const s={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(s.src=o.media_details.sizes[n].source_url,s.width=o.media_details.sizes[n].width,s.height=o.media_details.sizes[n].height),s.srcSet=Object.entries(o.media_details.sizes??{}).map(([l,d])=>`${d.source_url} ${d.width}w`).join(", "),s};return jsx(Fragment,{children:jsx("img",{...i(),alt:o.alt_text||""})})}function E(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>E(n))):t.push([]),t}function ce(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const i=e()?.scrollHeight??0;if(i){const s=t.current.style;s.minHeight="",t.current.setAttribute("style",`${s.cssText}min-height: ${i}px !important`)}else t.current.style.minHeight=""}},1)}}var G=f(6910),F=f.n(G);const S=window.wp.primitives,W=(0,r.jsx)(S.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(S.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})});function T({clientId:e,isSelected:t,attributes:{linkText:n,linkHref:o,linkTarget:i},setAttributes:s}){const[l,d]=(0,x.useState)(!1);(0,x.useEffect)(()=>{t||d(!1)},[t]);const u=(0,h.useBlockProps)({className:"menu-group-list-item"}),p=(0,x.useMemo)(()=>({url:o,opensInNewTab:i==="_blank",title:n}),[o,i,n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.BlockControls,{children:(0,r.jsx)(k.ToolbarGroup,{children:(0,r.jsx)(k.ToolbarButton,{icon:W,label:(0,z.__)("Link"),isPressed:l,onClick:()=>{d(!l)}})})}),(0,r.jsxs)("li",{...u,children:[o?(0,r.jsx)(h.RichText,{tagName:"span",className:`navigation-list-item-link${o?" hyperlink":""}`,onChange:c=>{s({linkText:c})},allowedFormats:["core/bold","core/italic"],value:n,placeholder:"Add text..."}):(0,r.jsx)("button",{onClick:()=>d(!l),children:"Add link"}),l?(0,r.jsx)(k.Popover,{position:"bottom",noArrow:!1,shift:!0,offset:10,children:(0,r.jsx)(h.LinkControl,{value:p,showInitialSuggestions:!0,onChange:c=>{s({linkId:c.id,linkKind:c.kind,linkType:c.type,linkHref:c.url,linkText:c.title,linkTarget:c.opensInNewTab?"_blank":"_self"}),d(!1)},onRemove:()=>{s({linkId:void 0,linkKind:void 0,linkType:void 0,linkHref:void 0,linkText:void 0})}},`${e}-link-edit`)}):null]})]})}T.displayName="NavMenuItemEdit";function V({hasInnerBlocks:e}){return e?U:q}function q(){return null}function U(){return(0,r.jsx)(h.InnerBlocks.Content,{})}(0,m.registerBlockType)(F().name,{icon:(0,r.jsx)($,{iconName:"nav-menu-item"}),edit:T,save:V({hasInnerBlocks:!1})}),P()})(),v})());
