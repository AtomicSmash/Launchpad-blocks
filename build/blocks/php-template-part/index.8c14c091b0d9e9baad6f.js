(function(b,m){if(typeof exports=="object"&&typeof module=="object")module.exports=m();else if(typeof define=="function"&&define.amd)define([],m);else{var _=m();for(var a in _)(typeof exports=="object"?exports:b)[a]=_[a]}})(globalThis,()=>(()=>{var j={7030:(a=>{a.exports={apiVersion:3,name:"launchpad-blocks/php-template-part",title:"PHP Template part",category:"theme",description:"Get one of the existing php template parts in the blocks editor.",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-styles.scss",render:"file:./render.php",attributes:{templatePartSlug:{type:"string"},templatePartName:{type:"string"}},providesContext:{},usesContext:["postId"],example:{},supports:{}}})},b={};function m(a){var u=b[a];if(u!==void 0)return u.exports;var i=b[a]={exports:{}};return j[a](i,i.exports,m),i.exports}m.n=a=>{var u=a&&a.__esModule?()=>a.default:()=>a;return m.d(u,{a:u}),u},m.d=(a,u)=>{for(var i in u)m.o(u,i)&&!m.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:u[i]})},m.o=(a,u)=>Object.prototype.hasOwnProperty.call(a,u);var _={};return(()=>{"use strict";const a=window.wp.blocks,u=window.wp.primitives,i=window.ReactJSXRuntime,z=(0,i.jsx)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,i.jsx)(u.Path,{d:"M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-17.6 1L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"})}),v=window.wp.blockEditor,w=window.wp.components,Y=window.wp.coreData,ee=window.wp.data,te=window.wp.i18n,B=window.React;function ne(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function N(e){return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,i.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,i.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,i.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const T=(0,B.lazy)(async()=>{const e=await import("../../assets-manifest.json",{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:s,isEditorMode:r=!1,...l}=n;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...l,children:(0,i.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function oe(e){return jsx(Suspense,{fallback:null,children:jsx(T,{...e})})}function $(){(0,a.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:N})}function y(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function se(e,t,n){const o=t.spacing?.blockGap;let s="none";if(o===!0)s="both";else if(Array.isArray(o)){const l=o.includes("horizontal"),p=o.includes("vertical");l&&p?s="both":l?s="horizontal":p&&(s="vertical")}const r={columnGap:s==="both"||s==="horizontal"?y(n?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?y(n?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function D(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const s=D(o.innerBlocks,t);s&&n.push(...s)}return n},[])}const re=()=>{const{postTypes:e,taxonomies:t}=useSelect(n=>{const{getEntityRecords:o}=n(coreStore),s=["attachment"],r=o("root","postType",{per_page:-1})?.filter(({viewable:c,slug:f})=>c&&!s.includes(f));if(!r||r.length===0)return{postTypes:r,taxonomies:void 0};const l={},p=[];for(const c of r){const f=o("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:h,slug:g})=>h.includes(c.slug)&&!p.includes(g));f&&(l[c.slug]=f.map(h=>{const g=o("taxonomy",h.slug);return{...h,terms:g}}))}return{postTypes:r,taxonomies:l}},[]);return{filteredPostTypes:e,mappedTaxonomies:t===void 0||Object.values(t).length===0?void 0:t}};function le({list:e,containerClassName:t,renderItem:n}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function R(e){return e.indexOf("data:image/svg+xml;")===0}function A(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function I(e){return e.indexOf("dashicons-")===0}function M({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(R(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(A(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(I(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ie={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function ae({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:s=>{if(s)for(const r of s)r()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>jsx(O,{colour:s,attributesDefinition:t,attributes:n,setAttributes:o},s.attributeName))})})}function O({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[s,r,l,p,c]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),f=()=>t[e.attributeName]?.default!==n[e.attributeName],h=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},g=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:h,hasValue:f,onDeselect:h,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:d,onToggle:x})=>jsx(Fragment,{children:jsx(Button,{ref:g,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":d,className:`block-editor-panel-color-gradient-settings__dropdown${d?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:n[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...p&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:n[e.attributeName],onChange:d=>{o({[e.attributeName]:d})},disableCustomColors:!c})})})})})},e.attributeName)}function ce({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[s,r,l]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),p=r?.map(({name:d,ratio:x})=>({label:d,value:x}))??[],c=s?.map(({name:d,ratio:x})=>({label:d,value:x}))??[],f=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?c:[],...p||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[h,g]=useState(f.map(d=>d.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:f,value:h,onChange:d=>{g(d),d!=="custom"&&t(d)}}),h==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:d=>{typeof d=="string"&&["contain","cover"].includes(d)&&o(d)},value:n,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const E=(e,t,n,o)=>{const{getBlocksByName:s,getBlockAttributes:r,getBlockParentsByBlockName:l}=select(blockEditorStore);return s(o).some(c=>{if(l(c,"core/template-part",!0).length)return!1;const{[n]:f}=r(c);return e!==c&&t===f})};function de(e,t,n,o,s){const{[t]:r}=e,l=useCallback(c=>E(n,c,t,s),[n,t,s]);return useEffect(()=>{if(r===""){const c=n.slice(0,n.indexOf("-"));o({[t]:c})}if(l(r)){const c=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${c}`),o({[t]:c})}},[r,n,o,l,t]),useMemo(()=>function({label:f,help:h,onValidChange:g,idAttribute:d}){const[x,Z]=useState(d);return jsx(TextControl,{label:f,help:typeof h=="function"?h(!l(x)):h,value:x,onChange:k=>{Z(k),l(k)||g(k)}})},[l])}function ue({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:C(t),controls:e.map(o=>{{const s=o===t;return{icon:C(o),title:H(o),isDisabled:s,onClick:()=>n(o)}}})})}function H(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function C(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function pe(e){const{hasChildren:t}=useSelect(n=>{const{getBlocks:o}=n(blockEditorStore);return{hasChildren:o(e).length>0}},[e]);return t}function me({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:s,updateBlockAttributes:r}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:n.map(l=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?jsx(M,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&r(e,l.attributes),l.innerBlocks&&s(e,createBlocksFromInnerBlocksTemplate(l.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),o&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function he({imageId:e,className:t="",size:n="full"}){const o=useSelect(r=>typeof e=="number"&&e>0?r(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!o)return null;const s=()=>{const r={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(r.src=o.media_details.sizes[n].source_url,r.width=o.media_details.sizes[n].width,r.height=o.media_details.sizes[n].height),r.srcSet=Object.entries(o.media_details.sizes??{}).map(([l,p])=>`${p.source_url} ${p.width}w`).join(", "),r};return jsx(Fragment,{children:jsx("img",{...s(),alt:o.alt_text||""})})}function L(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>L(n))):t.push([]),t}var G=m(7030),S=m.n(G);const F=[],V=window.wp.serverSideRender;var W=m.n(V);function P({attributes:e,setAttributes:t,context:n}){const o=(0,v.useBlockProps)(),{templatePartSlug:s,templatePartName:r}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.InspectorControls,{children:(0,i.jsx)(w.Panel,{children:(0,i.jsxs)(w.PanelBody,{children:[(0,i.jsx)(w.TextControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Slug",help:"The slug name for the generic template.",onChange:l=>{t({templatePartSlug:l})},value:s}),(0,i.jsx)(w.TextControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Name",help:"The name of the specialized template.",onChange:l=>{t({templatePartName:l})},value:r})]})})}),(0,i.jsx)("div",{...o,children:(0,i.jsx)(v.BlockContextProvider,{value:{postId:n.postId},children:(0,i.jsx)(W(),{block:"launchpad-blocks/php-template-part",attributes:e,urlQueryArgs:{post_id:n.postId}})})})]})}P.displayName="PHPTemplatePartEdit";function U({hasInnerBlocks:e}){return e?J:q}function q(){return null}function J(){return(0,i.jsx)(v.InnerBlocks.Content,{})}const X={from:[],to:[]},Q=[],fe={},ge=null;(0,a.registerBlockType)(S().name,{icon:z,deprecated:F,edit:P,save:U({hasInnerBlocks:!1}),transforms:X}),$(),Q.forEach(e=>{(0,a.registerBlockVariation)(S().name,e)})})(),_})());
