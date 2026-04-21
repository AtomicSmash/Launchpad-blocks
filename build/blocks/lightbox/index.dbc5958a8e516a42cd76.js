(function(w,f){if(typeof exports=="object"&&typeof module=="object")module.exports=f();else if(typeof define=="function"&&define.amd)define([],f);else{var k=f();for(var i in k)(typeof exports=="object"?exports:w)[i]=k[i]}})(globalThis,()=>(()=>{var C={6578:(i=>{i.exports={apiVersion:3,name:"launchpad-blocks/lightbox",title:"Lightbox",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{iconName:{type:"string",role:"content",default:"menu-close-icon"},library:{type:"string",role:"content",default:"launchpad-blocks"},backgroundColor:{type:"string",default:"white"}},providesContext:{},usesContext:[],supports:{color:{background:!0,text:!1}},parent:["launchpad-blocks/carousel","launchpad-blocks/gallery-carousel"]}})},w={};function f(i){var h=w[i];if(h!==void 0)return h.exports;var g=w[i]={exports:{}};return C[i](g,g.exports,f),g.exports}f.n=i=>{var h=i&&i.__esModule?()=>i.default:()=>i;return f.d(h,{a:h}),h},f.d=(i,h)=>{for(var g in h)f.o(h,g)&&!f.o(i,g)&&Object.defineProperty(i,g,{enumerable:!0,get:h[g]})},f.o=(i,h)=>Object.prototype.hasOwnProperty.call(i,h);var k={};return(()=>{"use strict";const i=window.ReactJSXRuntime,h=window.wp.blocks,g=window.wp.blockEditor,v=window.wp.components,ce=window.wp.coreData,A=window.wp.data,_=window.wp.i18n,x=window.React;function ue(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function $(e){return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,i.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,i.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,i.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const D=(0,x.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:s,isEditorMode:l=!1,...r}=n;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...r,children:(0,i.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function S(e){return(0,i.jsx)(x.Suspense,{fallback:null,children:(0,i.jsx)(D,{...e})})}function M(){(0,h.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:$})}function B(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function de(e,t,n){const o=t.spacing?.blockGap;let s="none";if(o===!0)s="both";else if(Array.isArray(o)){const r=o.includes("horizontal"),c=o.includes("vertical");r&&c?s="both":r?s="horizontal":c&&(s="vertical")}const l={columnGap:s==="both"||s==="horizontal"?B(n?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?B(n?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function R(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const s=R(o.innerBlocks,t);s&&n.push(...s)}return n},[])}const me=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=useMemo(()=>({}),[]),{postTypes:o,taxonomies:s}=useSelect(m=>{const{getEntityRecords:d}=m(coreStore),p=d("root","postType",e),a=d("root","taxonomy",t);if(!a)return{postTypes:p,taxonomies:a};for(const b of a)n[b.slug]=d("taxonomy",b.slug);return{postTypes:p,taxonomies:a}},[e,t,n]),l=["attachment"],r=[],c=o?.filter(({viewable:m,slug:d})=>m&&!l.includes(d));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const u={};for(const m of c){const d=s?.filter(({types:p,slug:a})=>p.includes(m.slug)&&!r.includes(a));d&&(u[m.slug]=d.map(p=>{const a=n?.[p.slug]??null;return{...p,terms:a}}))}return{filteredPostTypes:c,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function pe({list:e,containerClassName:t,renderItem:n}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function O(e){return e.indexOf("data:image/svg+xml,")===0}function L(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function E(e){return e.indexOf("dashicons-")===0}function H({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(O(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:jsx("br",{})});if(L(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(E(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const he={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function ge(){const[e,t,n,o]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),s={};if(o&&n&&n.length>0)for(const l of n)s[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)s[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)s[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:s}}function fe({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:s=>{if(s)for(const l of s)l()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>jsx(G,{colour:s,attributesDefinition:t,attributes:n,setAttributes:o},s.attributeName))})})}function G({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[s,l,r,c,u]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==n[e.attributeName],d=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},p=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:m,onDeselect:d,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:a,onToggle:b})=>jsx(Fragment,{children:jsx(Button,{ref:p,__next40pxDefaultSize:!0,onClick:b,"aria-expanded":a,className:`block-editor-panel-color-gradient-settings__dropdown${a?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:n[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...c&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:n[e.attributeName],onChange:a=>{o({[e.attributeName]:a})},disableCustomColors:!u})})})})})},e.attributeName)}function be({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[s,l,r]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=l?.map(({name:a,ratio:b})=>({label:a,value:b}))??[],u=s?.map(({name:a,ratio:b})=>({label:a,value:b}))??[],m=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?u:[],...c||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,p]=useState(m.map(a=>a.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:m,value:d,onChange:a=>{p(a),a!=="custom"&&t(a)}}),d==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:a=>{typeof a=="string"&&["contain","cover"].includes(a)&&o(a)},value:n,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const U=(e,t,n,o)=>{const{getBlocksByName:s,getBlockAttributes:l,getBlockParentsByBlockName:r}=select(blockEditorStore);return s(o).some(u=>{if(r(u,"core/template-part",!0).length)return!1;const{[n]:m}=l(u);return e!==u&&t===m})};function xe(e,t,n,o,s){const{[t]:l}=e,r=useCallback(u=>U(n,u,t,s),[n,t,s]);return useEffect(()=>{if(l===""){const u=n.slice(0,n.indexOf("-"));o({[t]:u})}if(r(l)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${u}`),o({[t]:u})}},[l,n,o,r,t]),useMemo(()=>function({label:m,help:d,onValidChange:p,idAttribute:a}){const[b,ae]=useState(a);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof d=="function"?d(!r(b)):d,value:b,onChange:y=>{ae(y),r(y)||p(y)}})},[r])}function ve({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:N(t),controls:e.map(o=>{{const s=o===t;return{icon:N(o),title:V(o),isDisabled:s,onClick:()=>n(o)}}})})}function V(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function N(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function _e(e){const{hasChildren:t}=useSelect(n=>{const{getBlocks:o}=n(blockEditorStore);return{hasChildren:o(e).length>0}},[e]);return t}function we({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:s,updateBlockAttributes:l}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:n.map(r=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?jsx(H,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&l(e,r.attributes),r.innerBlocks&&s(e,createBlocksFromInnerBlocksTemplate(r.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),o&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function ke({imageId:e,className:t="",size:n="full"}){const o=useSelect(l=>typeof e=="number"&&e>0?l(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!o)return null;const s=()=>{const l={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(l.src=o.media_details.sizes[n].source_url,l.width=o.media_details.sizes[n].width,l.height=o.media_details.sizes[n].height),l.srcSet=Object.entries(o.media_details.sizes??{}).map(([r,c])=>`${c.source_url} ${c.width}w`).join(", "),l};return jsx(Fragment,{children:jsx("img",{...s(),alt:o.alt_text||""})})}function F(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>F(n))):t.push([]),t}function je(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const s=e()?.scrollHeight??0;if(s){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${s}px !important`)}else t.current.style.minHeight=""}},1)}}var W=f(6578),T=f.n(W);const q=[],J=window.wp.hooks,z=window.wp.element;function K({icon:e,size:t=24,...n},o){return(0,z.cloneElement)(e,{width:t,height:t,...n,ref:o})}const X=(0,z.forwardRef)(K),j=window.wp.primitives,Z=(0,i.jsx)(j.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)(j.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),Q=(0,i.jsx)(j.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)(j.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),Y={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,_.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,_.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,_.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,_.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0},lightbox:{title:(0,_.__)("Lightbox","launchpad-blocks")}},ee={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,t)=>(0,i.jsx)(S,{iconName:e,isEditorMode:!0,...t}),availableIcons:Object.fromEntries(Object.entries(Y).filter(([e,t])=>t.makeAvailableToUser===!0))}};function I(){return(0,J.applyFilters)("launchpadBlocks.icons",{...ee})}function te({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:t,onIconSelect:n,onReset:o}){const s=I(),[l,r]=(0,x.useState)("");return(0,i.jsxs)(v.Panel,{children:[(0,i.jsxs)(v.PanelHeader,{children:[e," ",o?(0,i.jsx)(v.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{o()},size:"small",children:"Reset"}):null]}),(0,i.jsxs)(v.PanelBody,{children:[(0,i.jsx)(v.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:l,onChange:c=>{r(c)}}),(0,i.jsx)("div",{children:Object.entries(s).map(([c,u])=>{if(Object.keys(u.availableIcons).length===0)return null;const m=Object.entries(u.availableIcons).filter(([d,{title:p}])=>!!(d.includes(l)||p.includes(l)));return(0,i.jsx)(ne,{name:u.name,iconCount:m.length,children:(0,i.jsx)("div",{className:`icon-select ${c}-icon-select`,children:m.map(([d,{title:p}])=>{const a=t.iconName===d&&t.library===c;return(0,i.jsx)("button",{className:`icon-select-icon ${c}-icon-select-icon ${c}-icon-select-icon-${d}${a?" is-selected":""}`,onClick:()=>{n({iconName:d,library:c})},title:p,children:u.renderIcon(d)},d)})})},c)})})]})]})}function ne({name:e,iconCount:t,children:n}){const[o,s]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{t===0&&o&&s(!1)},[o,t]),(0,i.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,i.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,i.jsxs)(v.Button,{type:"button","aria-expanded":o,onClick:()=>{t>0&&s(!o)},disabled:t===0,className:"icon-select-group-accordion-header-button",children:[(0,i.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,i.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:t}),(0,i.jsx)(X,{className:"icon-select-group-accordion-arrow",icon:o?Z:Q})]})}),o?n:null]})}function P({clientId:e,isSelected:t,attributes:n,setAttributes:o}){const s=I(),{iconName:l,library:r}=n,c=(0,A.useSelect)(a=>a(g.store).hasSelectedInnerBlock(e,!0),[e]),u=(0,x.useRef)(null);(0,x.useEffect)(()=>{t||c?u.current?.showModal():u.current?.close()},[t,c]);const m=(0,g.useBlockProps)({ref:u,"data-launchpad-lightbox":""}),{children:d,...p}=(0,g.useInnerBlocksProps)(m);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.InspectorControls,{children:(0,i.jsx)(te,{dataOnSelectedIcon:{iconName:l,library:r},onIconSelect:a=>{o({iconName:a.iconName,library:a.library})}})}),(0,i.jsxs)("dialog",{...p,children:[(0,i.jsx)("button",{type:"button",className:"reset lightbox-close-button","data-lightbox-close-button":!0,onClick:()=>{u.current?.close()},children:s[r]?.renderIcon(l)}),d]})]})}P.displayName="LightboxEdit";function oe({hasInnerBlocks:e}){return e?le:se}function se(){return null}function le(){return(0,i.jsx)(g.InnerBlocks.Content,{})}const ie={from:[],to:[]},re=[],Se={},Be=null;(0,h.registerBlockType)(T().name,{icon:(0,i.jsx)(S,{iconName:"lightbox"}),deprecated:q,edit:P,save:oe({hasInnerBlocks:!0}),transforms:ie}),M(),re.forEach(e=>{(0,h.registerBlockVariation)(T().name,e)})})(),k})());
