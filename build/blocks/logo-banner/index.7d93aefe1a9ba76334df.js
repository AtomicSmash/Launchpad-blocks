(function(j,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var y=x();for(var r in y)(typeof exports=="object"?exports:j)[r]=y[r]}})(globalThis,()=>(()=>{var z={6149:(r=>{r.exports={apiVersion:3,name:"launchpad-blocks/logo-banner",title:"Logo banner",category:"media",description:"A banner of logos to display, with optional scrolling animation.",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{isScrolling:{type:"boolean",default:!1},shouldAlignBottomRowToLeft:{type:"boolean",default:!1},allowResize:{type:"boolean",default:!1}},providesContext:{allowResize:"allowResize"},usesContext:[],example:{},supports:{align:["wide","full"]}}})},j={};function x(r){var m=j[r];if(m!==void 0)return m.exports;var p=j[r]={exports:{}};return z[r](p,p.exports,x),p.exports}x.n=r=>{var m=r&&r.__esModule?()=>r.default:()=>r;return x.d(m,{a:m}),m},x.d=(r,m)=>{for(var p in m)x.o(m,p)&&!x.o(r,p)&&Object.defineProperty(r,p,{enumerable:!0,get:m[p]})},x.o=(r,m)=>Object.prototype.hasOwnProperty.call(r,m);var y={};return(()=>{"use strict";const r=window.ReactJSXRuntime,m=window.wp.blocks,p=window.wp.blockEditor,C=window.wp.components,re=window.wp.coreData,T=window.wp.data,B=window.wp.i18n,R=window.React;function ie(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function M(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,r.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,r.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,r.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const H=(0,R.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:s,isEditorMode:l=!1,...i}=o;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...i,children:(0,r.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function L(e){return(0,r.jsx)(R.Suspense,{fallback:null,children:(0,r.jsx)(H,{...e})})}function O(){(0,m.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:M})}function P(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function ae(e,t,o){const n=t.spacing?.blockGap;let s="none";if(n===!0)s="both";else if(Array.isArray(n)){const i=n.includes("horizontal"),c=n.includes("vertical");i&&c?s="both":i?s="horizontal":c&&(s="vertical")}const l={columnGap:s==="both"||s==="horizontal"?P(o?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?P(o?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let i="";return e.minimumColumnWidth?i=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(i=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:i,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function E(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const s=E(n.innerBlocks,t);s&&o.push(...s)}return o},[])}const ce=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=useMemo(()=>({}),[]),{postTypes:n,taxonomies:s}=useSelect(g=>{const{getEntityRecords:u}=g(coreStore),f=u("root","postType",e),a=u("root","taxonomy",t);if(!a)return{postTypes:f,taxonomies:a};for(const _ of a)o[_.slug]=u("taxonomy",_.slug);return{postTypes:f,taxonomies:a}},[e,t,o]),l=["attachment"],i=[],c=n?.filter(({viewable:g,slug:u})=>g&&!l.includes(u));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const d={};for(const g of c){const u=s?.filter(({types:f,slug:a})=>f.includes(g.slug)&&!i.includes(a));u&&(d[g.slug]=u.map(f=>{const a=o?.[f.slug]??null;return{...f,terms:a}}))}return{filteredPostTypes:c,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function de({list:e,containerClassName:t,renderItem:o}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function G(e){return e.indexOf("data:image/svg+xml,")===0}function V(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function F(e){return e.indexOf("dashicons-")===0}function W({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(G(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:jsx("br",{})});if(V(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(F(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ue={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function pe(){const[e,t,o,n]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),s={};if(n&&o&&o.length>0)for(const l of o)s[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)s[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)s[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:s}}function me({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:s=>{if(s)for(const l of s)l()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>jsx(q,{colour:s,attributesDefinition:t,attributes:o,setAttributes:n},s.attributeName))})})}function q({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[s,l,i,c,d]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),g=()=>t[e.attributeName]?.default!==o[e.attributeName],u=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:u,hasValue:g,onDeselect:u,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:a,onToggle:_})=>jsx(Fragment,{children:jsx(Button,{ref:f,__next40pxDefaultSize:!0,onClick:_,"aria-expanded":a,className:`block-editor-panel-color-gradient-settings__dropdown${a?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:o[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...c&&i&&i.length>0?[{name:"Default",colors:i}]:[]],value:o[e.attributeName],onChange:a=>{n({[e.attributeName]:a})},disableCustomColors:!d})})})})})},e.attributeName)}function ge({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[s,l,i]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=l?.map(({name:a,ratio:_})=>({label:a,value:_}))??[],d=s?.map(({name:a,ratio:_})=>({label:a,value:_}))??[],g=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...i?d:[],...c||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[u,f]=useState(g.map(a=>a.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:g,value:u,onChange:a=>{f(a),a!=="custom"&&t(a)}}),u==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:a=>{typeof a=="string"&&["contain","cover"].includes(a)&&n(a)},value:o,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const Z=(e,t,o,n)=>{const{getBlocksByName:s,getBlockAttributes:l,getBlockParentsByBlockName:i}=select(blockEditorStore);return s(n).some(d=>{if(i(d,"core/template-part",!0).length)return!1;const{[o]:g}=l(d);return e!==d&&t===g})};function he(e,t,o,n,s){const{[t]:l}=e,i=useCallback(d=>Z(o,d,t,s),[o,t,s]);return useEffect(()=>{if(l===""){const d=o.slice(0,o.indexOf("-"));n({[t]:d})}if(i(l)){const d=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${d}`),n({[t]:d})}},[l,o,n,i,t]),useMemo(()=>function({label:g,help:u,onValidChange:f,idAttribute:a}){const[_,h]=useState(a);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:g,help:typeof u=="function"?u(!i(_)):u,value:_,onChange:w=>{h(w),i(w)||f(w)}})},[i])}function fe({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:N(t),controls:e.map(n=>{{const s=n===t;return{icon:N(n),title:U(n),isDisabled:s,onClick:()=>o(n)}}})})}function U(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function N(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function be(e){const{hasChildren:t}=useSelect(o=>{const{getBlocks:n}=o(blockEditorStore);return{hasChildren:n(e).length>0}},[e]);return t}function xe({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:s,updateBlockAttributes:l}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:o.map(i=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof i.icon=="string"?jsx(W,{iconString:i.icon}):i.icon,iconSize:48,onClick:()=>{i.attributes&&l(e,i.attributes),i.innerBlocks&&s(e,createBlocksFromInnerBlocksTemplate(i.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:i.title})]},i.name))}),n&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function _e({imageId:e,className:t="",size:o="full"}){const n=useSelect(l=>typeof e=="number"&&e>0?l(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!n)return null;const s=()=>{const l={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(l.src=n.media_details.sizes[o].source_url,l.width=n.media_details.sizes[o].width,l.height=n.media_details.sizes[o].height),l.srcSet=Object.entries(n.media_details.sizes??{}).map(([i,c])=>`${c.source_url} ${c.width}w`).join(", "),l};return jsx(Fragment,{children:jsx("img",{...s(),alt:n.alt_text||""})})}function J(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>J(o))):t.push([]),t}function we(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const s=e()?.scrollHeight??0;if(s){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${s}px !important`)}else t.current.style.minHeight=""}},1)}}var X=x(6149),$=x.n(X);const K=[],A=window.wp.primitives,Q=(0,r.jsx)(A.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)(A.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})});function I({clientId:e,attributes:t,setAttributes:o}){const{isScrolling:n,shouldAlignBottomRowToLeft:s}=t,l=(0,p.useBlockProps)({"data-launchpad-logo-banner":!0,"data-is-scrolling":n?"true":"false",className:`${n?"is-scrolling":""}`}),{hasChildren:i,innerBlockImages:c}=(0,T.useSelect)(h=>{const{getBlocks:w}=h(p.store),k=w(e);return{hasChildren:k.length>0,innerBlockImages:k}},[e]),{replaceInnerBlocks:d,selectBlock:g}=(0,T.useDispatch)(p.store);function u(h){return h.map(w=>({id:w.attributes.id,url:w.attributes.url}))}function f(h){const w=h.reduce((b,v,D)=>(b[v.id]=D,b),{}),k=c.filter(b=>h.find(v=>v.id===b.attributes?.id)),S=h.filter(b=>!k.find(v=>b.id===v.attributes?.id)).map(b=>(0,m.createBlock)("core/image",{id:b.id,url:b.url,caption:b.caption,alt:b.alt,sizeSlug:"full"})),se=k.map(b=>{const{validationIssues:v,originalContent:D,...le}=b;return le}).concat(S).sort((b,v)=>w[b.attributes?.id]-w[v.attributes?.id]);d(e,se),S?.length>0&&g(S[0].clientId)}const{children:a,..._}=(0,p.useInnerBlocksProps)(l);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.BlockControls,{group:"other",children:(0,r.jsx)(p.MediaReplaceFlow,{allowedTypes:["image"],accept:"image/*",onSelect:f,name:c.length===0?(0,B.__)("Add","launchpad-blocks"):(0,B.__)("Replace","launchpad-blocks"),multiple:!0,mediaIds:u(c).filter(h=>h.id).map(h=>h.id),addToGallery:c.length>0})}),(0,r.jsx)(p.InspectorControls,{children:(0,r.jsx)(C.Panel,{children:(0,r.jsxs)(C.PanelBody,{children:[(0,r.jsx)(C.ToggleControl,{__nextHasNoMarginBottom:!0,label:"Scroll through the logos automatically.",onChange:h=>{o({isScrolling:h})},checked:n}),n?null:(0,r.jsx)(C.ToggleControl,{__nextHasNoMarginBottom:!0,label:"Align bottom row of images to the left.",onChange:h=>{o({shouldAlignBottomRowToLeft:h})},checked:s})]})})}),(0,r.jsx)("div",{..._,children:i?(0,r.jsx)("div",{className:"scroll-container",children:(0,r.jsxs)("div",{className:"images",children:[a,!n&&s?(0,r.jsx)("div",{className:"push-flex-children-to-start"}):null]})}):(0,r.jsx)(p.MediaPlaceholder,{icon:Q,labels:{title:(0,B.__)("Logos","launchpad-blocks"),instructions:(0,B.__)("Drag and drop images, upload, or choose from your library.","launchpad-blocks")},onSelect:f,accept:"image/*",allowedTypes:["image"],multiple:!0,addToGallery:!1})})]})}I.displayName="LogoBannerEdit";function Y({hasInnerBlocks:e}){return e?te:ee}function ee(){return null}function te(){return(0,r.jsx)(p.InnerBlocks.Content,{})}const oe={from:[],to:[]},ne=[],ke={allowResize:"allowResize"},je=null;(0,m.registerBlockType)($().name,{icon:(0,r.jsx)(L,{iconName:"logo-banner"}),deprecated:K,edit:I,save:Y({hasInnerBlocks:!0}),transforms:oe}),O(),ne.forEach(e=>{(0,m.registerBlockVariation)($().name,e)})})(),y})());
