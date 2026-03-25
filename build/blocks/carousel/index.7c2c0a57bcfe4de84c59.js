(function(w,k){if(typeof exports=="object"&&typeof module=="object")module.exports=k();else if(typeof define=="function"&&define.amd)define([],k);else{var j=k();for(var n in j)(typeof exports=="object"?exports:w)[n]=j[n]}})(globalThis,()=>(()=>{var z={4615:(n=>{n.exports={apiVersion:3,name:"launchpad-blocks/carousel",title:"Carousel",category:"theme",description:"",textdomain:"launchpad-blocks",allowedBlocks:["launchpad-blocks/carousel-slides","launchpad-blocks/carousel-content-slides","launchpad-blocks/carousel-thumbnails","launchpad-blocks/carousel-navigation-arrows","launchpad-blocks/carousel-dots","launchpad-blocks/carousel-slide-count","launchpad-blocks/lightbox"],keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{images:{type:"array",default:[]},shouldLoop:{type:"boolean",default:!0},shouldLinkSlidesToLightbox:{type:"boolean",default:!1},slides:{type:"array",default:[]},currentlySelectedSlide:{type:"number",default:0,role:"local"}},providesContext:{"launchpad-blocks/carouselImages":"images","launchpad-blocks/carouselSlides":"slides","launchpad-blocks/shouldLinkSlidesToLightbox":"shouldLinkSlidesToLightbox","launchpad-blocks/currentlySelectedSlide":"currentlySelectedSlide"},usesContext:["launchpad-blocks/carouselImages","launchpad-blocks/carouselSlides"],supports:{align:!0}}})},w={};function k(n){var m=w[n];if(m!==void 0)return m.exports;var g=w[n]={exports:{}};return z[n](g,g.exports,k),g.exports}k.n=n=>{var m=n&&n.__esModule?()=>n.default:()=>n;return k.d(m,{a:m}),m},k.d=(n,m)=>{for(var g in m)k.o(m,g)&&!k.o(n,g)&&Object.defineProperty(n,g,{enumerable:!0,get:m[g]})},k.o=(n,m)=>Object.prototype.hasOwnProperty.call(n,m);var j={};return(()=>{"use strict";const n=window.ReactJSXRuntime,m=window.wp.blocks,g=window.wp.blockEditor,x=window.wp.components,pe=window.wp.coreData,S=window.wp.data,B=window.wp.i18n,y=window.React;function me(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function D(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,n.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,n.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,n.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const O=(0,y.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:s,size:l,isEditorMode:i=!1,...r}=o;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...r,children:(0,n.jsx)("use",{href:`${i?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${s}`})})}}});function v(e){return(0,n.jsx)(y.Suspense,{fallback:null,children:(0,n.jsx)(O,{...e})})}function F(){(0,m.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:D})}function I(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function he(e,t,o){const s=t.spacing?.blockGap;let l="none";if(s===!0)l="both";else if(Array.isArray(s)){const r=s.includes("horizontal"),d=s.includes("vertical");r&&d?l="both":r?l="horizontal":d&&(l="vertical")}const i={columnGap:l==="both"||l==="horizontal"?I(o?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?I(o?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:i};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...i}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...i}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...i}};default:return{className:`is-layout-${e.type}`,style:{...i}}}}function H(e,t){return e.reduce((o,s)=>{if(s.name===t)o.push(s);else if(s.innerBlocks){const l=H(s.innerBlocks,t);l&&o.push(...l)}return o},[])}const ge=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=useMemo(()=>({}),[]),{postTypes:s,taxonomies:l}=useSelect(h=>{const{getEntityRecords:p}=h(coreStore),f=p("root","postType",e),a=p("root","taxonomy",t);if(!a)return{postTypes:f,taxonomies:a};for(const b of a)o[b.slug]=p("taxonomy",b.slug);return{postTypes:f,taxonomies:a}},[e,t,o]),i=["attachment"],r=[],d=s?.filter(({viewable:h,slug:p})=>h&&!i.includes(p));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const h of d){const p=l?.filter(({types:f,slug:a})=>f.includes(h.slug)&&!r.includes(a));p&&(u[h.slug]=p.map(f=>{const a=o?.[f.slug]??null;return{...f,terms:a}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function fe({list:e,containerClassName:t,renderItem:o}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(s=>o({listItem:s,buttonProps:{type:"button",className:`custom-multiple-select-list-item${s.isSelected?" is-selected":""}`}}))})]})}function G(e){return e.indexOf("data:image/svg+xml;")===0}function W(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function V(e){return e.indexOf("dashicons-")===0}function $({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return(0,n.jsx)("div",{className:"menu-icon","aria-hidden":"true",children:(0,n.jsx)("br",{})});if(G(e))return(0,n.jsx)("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:(0,n.jsx)("br",{})});if(W(e))return(0,n.jsx)("img",{src:new URL(e).toString(),alt:""});if(V(e)){const t=e.replace("dashicons-","");return(0,n.jsx)(x.Dashicon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const be={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function ke(){const[e,t,o,s]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(s&&o&&o.length>0)for(const i of o)l[i.slug]={color:i.color,name:i.name};if(t&&t?.length>0)for(const i of t)l[i.slug]={color:i.color,name:i.name};if(e&&e?.length>0)for(const i of e)l[i.slug]={color:i.color,name:i.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:l}}function xe({colours:e,attributesDefinition:t,attributes:o,setAttributes:s}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:l=>{if(l)for(const i of l)i()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>jsx(q,{colour:l,attributesDefinition:t,attributes:o,setAttributes:s},l.attributeName))})})}function q({colour:e,attributesDefinition:t,attributes:o,setAttributes:s}){const[l,i,r,d,u]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==o[e.attributeName],p=()=>{s({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:h,onDeselect:p,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:a,onToggle:b})=>jsx(Fragment,{children:jsx(Button,{ref:f,__next40pxDefaultSize:!0,onClick:b,"aria-expanded":a,className:`block-editor-panel-color-gradient-settings__dropdown${a?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:o[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...i&&i?.length>0?[{name:"Theme",colors:i}]:[],...d&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:o[e.attributeName],onChange:a=>{s({[e.attributeName]:a})},disableCustomColors:!u})})})})})},e.attributeName)}function ve({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:s}){const[l,i,r]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=i?.map(({name:a,ratio:b})=>({label:a,value:b}))??[],u=l?.map(({name:a,ratio:b})=>({label:a,value:b}))??[],h=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?u:[],...d||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,f]=useState(h.map(a=>a.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:h,value:p,onChange:a=>{f(a),a!=="custom"&&t(a)}}),p==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&s!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:a=>{typeof a=="string"&&["contain","cover"].includes(a)&&s(a)},value:o,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const U=(e,t,o,s)=>{const{getBlocksByName:l,getBlockAttributes:i,getBlockParentsByBlockName:r}=select(blockEditorStore);return l(s).some(u=>{if(r(u,"core/template-part",!0).length)return!1;const{[o]:h}=i(u);return e!==u&&t===h})};function _e(e,t,o,s,l){const{[t]:i}=e,r=useCallback(u=>U(o,u,t,l),[o,t,l]);return useEffect(()=>{if(i===""){const u=o.slice(0,o.indexOf("-"));s({[t]:u})}if(r(i)){const u=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${i}. New value: ${u}`),s({[t]:u})}},[i,o,s,r,t]),useMemo(()=>function({label:h,help:p,onValidChange:f,idAttribute:a}){const[b,C]=useState(a);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof p=="function"?p(!r(b)):p,value:b,onChange:_=>{C(_),r(_)||f(_)}})},[r])}function we({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:E(t),controls:e.map(s=>{{const l=s===t;return{icon:E(s),title:X(s),isDisabled:l,onClick:()=>o(s)}}})})}function X(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function E(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function Z(e){const{hasChildren:t}=(0,S.useSelect)(o=>{const{getBlocks:s}=o(g.store);return{hasChildren:s(e).length>0}},[e]);return t}function je({clientId:e,blockInfo:t,variations:o,allowSkip:s}){const{replaceInnerBlocks:l,updateBlockAttributes:i}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:o.map(r=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?jsx($,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&i(e,r.attributes),r.innerBlocks&&l(e,createBlocksFromInnerBlocksTemplate(r.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),s&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),i(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function ye({imageId:e,className:t="",size:o="full"}){const s=useSelect(i=>typeof e=="number"&&e>0?i(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!s)return null;const l=()=>{const i={src:s.source_url,className:`attachment-${o} size-${o} ${t}`,width:s.media_details.width,height:s.media_details.height,srcSet:""};return s.media_details?.sizes?.[o]&&(i.src=s.media_details.sizes[o].source_url,i.width=s.media_details.sizes[o].width,i.height=s.media_details.sizes[o].height),i.srcSet=Object.entries(s.media_details.sizes??{}).map(([r,d])=>`${d.source_url} ${d.width}w`).join(", "),i};return jsx(Fragment,{children:jsx("img",{...l(),alt:s.alt_text||""})})}function J(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>J(o))):t.push([]),t}function Ce(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const i=t.current.style;i.minHeight="",t.current.setAttribute("style",`${i.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}var Y=k(4615),M=k.n(Y);const K=[],Q=window.wp.hooks;function Se(e){if(e===void 0)throw new Error(`Pixel value ${e} is undefined`);if(!e.endsWith("px"))throw new Error(`Pixel value ${e} is not a pixel value`);if(e.includes(" "))throw new Error(`Pixel value ${e} contains multiple values`);return Number(e.replace("px",""))}function Be(e){let t="";const o=document.createElement("div");return o.innerHTML=e,t=o.innerText,ee(t)}function ee(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|(?<!-)-+$/g,"")}function te(e,t=()=>!0){const o=e.parentElement;return o===null?null:t(o)?o:te(o,t)}function Ne(e){if(new RegExp("ms$","ig").test(e))return Number(e.substring(0,e.length-2));if(new RegExp("s$","ig").test(e))return Number(e.substring(0,e.length-1))*1e3;throw new Error("Time didn't end with ms or s so was not correctly parsed.")}function Te(){if(typeof document>"u")return"unknown";const e=window.navigator.userAgent;let t="unknown";return e.search("Windows")!==-1?t="Windows":e.search("Mac")!==-1?t="MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?t="UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1&&(t="Linux"),t}function N(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(!Object.entries(e[o]).every(([l,i])=>Array.isArray(i)?N(i,t[o]?.[l]):t[o]?.[l]===i))return!1;return!0}const A=window.wp.primitives,oe=(0,n.jsx)(A.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(A.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})}),ze=[{name:"core/image",attributes:{id:237,url:"https://picsum.photos/id/237/260/180"}},{name:"core/image",attributes:{id:433,url:"https://picsum.photos/id/433/260/180"}},{name:"core/image",attributes:{id:582,url:"https://picsum.photos/id/582/260/180"}},{name:"core/image",attributes:{id:593,url:"https://picsum.photos/id/593/260/180"}},{name:"core/image",attributes:{id:943,url:"https://picsum.photos/id/943/260/180"}},{name:"core/image",attributes:{id:1024,url:"https://picsum.photos/id/1024/260/180"}}],L=[{name:"basic",title:"Simple carousel",icon:(0,n.jsx)(v,{isEditorMode:!0,iconName:"carousel"}),description:"A basic carousel for viewing images.",attributes:null,baseInnerBlocks:[["launchpad-blocks/carousel-slides"]],addFunctionalInnerBlocks:null},{name:"image-pop-up",title:"Expandable image carousel",icon:(0,n.jsx)(v,{isEditorMode:!0,iconName:"lightbox"}),description:"A carousel which opens in a full screen pop-up on click.",attributes:{shouldLinkSlidesToLightbox:!0},baseInnerBlocks:[["launchpad-blocks/carousel-slides"]],addFunctionalInnerBlocks:e=>[...e,["launchpad-blocks/lightbox",{},[["launchpad-blocks/carousel",{lock:{move:!0,remove:!0}},[["launchpad-blocks/carousel-slides",{shouldPullImagesFromContext:!0,lock:{move:!0,remove:!0}}],["launchpad-blocks/carousel-navigation-arrows",{className:"is-style-overlay",shouldShowTextVisually:!1,lock:{move:!1,remove:!0}}]]]]]]},{name:"block-slides",title:"Block based slides",icon:oe,description:"Advanced users only. Create slides out of blocks.",attributes:null,baseInnerBlocks:[["launchpad-blocks/carousel-content-slides",{aspectRatio:"16/9"},[["launchpad-blocks/carousel-content-slide",{backgroundOrOverlayColour:"rgb(0 0 0)",style:{background:{backgroundImage:{url:"https://picsum.photos/id/237/1600/900"},backgroundSize:"cover"}}},[["launchpad-blocks/carousel-content-slide-content",{},[["core/heading",{placeholder:"Your template"}],["core/paragraph",{placeholder:'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.'}]]]]]]]],addFunctionalInnerBlocks:null}],ne=[{name:"skip",title:"This variation is set when you hit skip. this title is not seen.",icon:null,addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows"]]},{name:"overlay",title:"Overlaid arrows",icon:(0,n.jsx)(v,{isEditorMode:!0,iconName:"carousel-navigation-arrows"}),addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows",{shouldShowTextVisually:!1,className:"is-style-overlay"}]]},{name:"with-dots",title:"Arrows and dots",icon:(0,n.jsx)(v,{isEditorMode:!0,iconName:"carousel-dots"}),addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows",{},[["launchpad-blocks/carousel-dots"]]]]},{name:"with-slide-count",title:"Arrows and slide count",icon:(0,n.jsx)(v,{isEditorMode:!0,iconName:"carousel-slide-count"}),addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows",{},[["launchpad-blocks/carousel-slide-count",{layout:{type:"flex",flexWrap:"wrap",justifyContent:"center"}}]]]]},{name:"with-thumbnails",title:"Arrows and thumbnails",icon:(0,n.jsx)(v,{isEditorMode:!0,iconName:"carousel-thumbnails"}),addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows",{},[["launchpad-blocks/carousel-thumbnails"]]]]}],T=[...L.map(e=>{const t=[];for(const o of ne){let s=o.addNavigationInnerBlocks(e.baseInnerBlocks);e.addFunctionalInnerBlocks&&(s=e.addFunctionalInnerBlocks(s));const l={name:`${e.name}-${o.name}`,title:`${e.title} - ${o.title}`,icon:o.icon??void 0,scope:[],innerBlocks:s};e.attributes&&(l.attributes=e.attributes),t.push(l)}return t}).flat()];function R({clientId:e,attributes:t,setAttributes:o,context:s}){const{shouldLoop:l,images:i,slides:r,shouldLinkSlidesToLightbox:d}=t,u=(0,g.useBlockProps)({"data-launchpad-carousel":"","data-loop":l?"true":"false","data-has-lightbox":d?"true":"false"}),{children:h,...p}=(0,g.useInnerBlocksProps)(u,{template:[["launchpad-blocks/carousel-slides"]]}),{shouldGetSlidesFromContext:f}=(0,S.useSelect)(c=>{const{getBlocks:P}=c(g.store);return{shouldGetSlidesFromContext:P(e).find(de=>de.name==="launchpad-blocks/carousel-slides")?.attributes?.shouldPullImagesFromContext??!1}},[e]),{replaceInnerBlocks:a,updateBlockAttributes:b}=(0,S.useDispatch)(g.store);(0,y.useEffect)(()=>{f&&(s["launchpad-blocks/carouselImages"]!==void 0&&!N(s["launchpad-blocks/carouselImages"],i)&&o({images:s["launchpad-blocks/carouselImages"]}),s["launchpad-blocks/carouselSlides"]!==void 0&&!N(s["launchpad-blocks/carouselSlides"],r)&&o({slides:s["launchpad-blocks/carouselSlides"]}))},[s,i,r,o,f]);const C=(0,Q.applyFilters)("launchpadBlocks.carouselFunctionalityVariations",L);if(!se(C))throw new Error("Filtering of functionality variations has broken the variations. Please fix the filters to continue.");const[_,ce]=(0,y.useState)(null),ue=Z(e);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.InspectorControls,{children:(0,n.jsx)(x.Panel,{children:(0,n.jsx)(x.PanelBody,{children:(0,n.jsx)(x.ToggleControl,{__nextHasNoMarginBottom:!0,checked:l,label:"Should your carousel loop round if you are at the end and you navigate the slide again.",onChange:c=>{o({shouldLoop:c})}})})})}),(0,n.jsx)("div",{...p,children:ue?h:_===null?(0,n.jsx)(x.Placeholder,{icon:(0,n.jsx)(v,{isEditorMode:!0,iconName:"carousel"}),label:"Carousel - Pick functionality",instructions:"Please choose the core functionality of the carousel.",children:(0,n.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,B.__)("Carousel functionality variations","launchpad-blocks"),children:C.map(c=>(0,n.jsx)("li",{children:(0,n.jsx)(x.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation block-editor-block-variation-picker__variation--wide",icon:c.icon,iconSize:48,onClick:()=>{ce(c.name)},children:(0,n.jsxs)("div",{className:"block-editor-block-variation-picker__variation-text-group",children:[(0,n.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:(0,n.jsx)("strong",{children:c.title})}),(0,n.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:c.description})]})})},c.name))})}):(0,n.jsxs)(x.Placeholder,{icon:(0,n.jsx)(v,{isEditorMode:!0,iconName:"carousel"}),label:"Carousel - Pick navigation",instructions:"Please choose how you'd like to navigate between different slides.",children:[(0,n.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,B.__)("Block variations"),children:T.filter(c=>c.name.startsWith(_)&&!c.name.endsWith("skip")).map(c=>(0,n.jsxs)("li",{children:[(0,n.jsx)(x.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof c.icon=="string"?(0,n.jsx)($,{iconString:c.icon}):c.icon,iconSize:48,onClick:()=>{c.attributes&&b(e,c.attributes),c.innerBlocks&&a(e,(0,m.createBlocksFromInnerBlocksTemplate)(c.innerBlocks),!1)}}),(0,n.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:c.title.split(" - ").at(-1)})]},c.name))}),(0,n.jsx)("div",{className:"block-editor-block-variation-picker__skip",children:(0,n.jsx)(x.Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{const c=T.find(P=>P.name===`${_}-skip`);c?.attributes&&b(e,c.attributes),c?.innerBlocks&&a(e,(0,m.createBlocksFromInnerBlocksTemplate)(c.innerBlocks),!1)},children:(0,B.__)("Skip")})})]})})]})}R.displayName="CarouselEdit";function se(e){return Array.isArray(e)&&e.every(t=>typeof t=="object"&&t!==null&&"name"in t&&"title"in t&&"icon"in t&&"description"in t&&"attributes"in t&&"baseInnerBlocks"in t&&"addFunctionalInnerBlocks"in t)}function le({hasInnerBlocks:e}){return e?re:ie}function ie(){return null}function re(){return(0,n.jsx)(g.InnerBlocks.Content,{})}const ae={from:[],to:[]},Ie={"launchpad-blocks/carouselImages":"images","launchpad-blocks/carouselSlides":"slides","launchpad-blocks/shouldLinkSlidesToLightbox":"shouldLinkSlidesToLightbox","launchpad-blocks/currentlySelectedSlide":"currentlySelectedSlide"},$e=null;(0,m.registerBlockType)(M().name,{icon:(0,n.jsx)(v,{iconName:"carousel"}),deprecated:K,edit:R,save:le({hasInnerBlocks:!0}),transforms:ae}),F(),T.forEach(e=>{(0,m.registerBlockVariation)(M().name,e)})})(),j})());
