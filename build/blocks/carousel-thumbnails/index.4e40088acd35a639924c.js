(function(_,m){if(typeof exports=="object"&&typeof module=="object")module.exports=m();else if(typeof define=="function"&&define.amd)define([],m);else{var v=m();for(var s in v)(typeof exports=="object"?exports:_)[s]=v[s]}})(globalThis,()=>(()=>{var j={3973:(s=>{s.exports={apiVersion:3,name:"launchpad-blocks/carousel-thumbnails",title:"Carousel thumbnails",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",styles:[{name:"scroll",label:"Scroll",isDefault:!0},{name:"grid",label:"Grid"}],attributes:{selectedOutlineColour:{type:"string",default:"black"},lock:{type:"boolean",default:!0}},providesContext:{},usesContext:["launchpad-blocks/carouselImages"],example:{viewportWidth:1200},supports:{lock:!1,layout:{default:{type:"constrained"},allowCustomContentAndWideSize:!1}}}})},_={};function m(s){var u=_[s];if(u!==void 0)return u.exports;var h=_[s]={exports:{}};return j[s](h,h.exports,m),h.exports}m.n=s=>{var u=s&&s.__esModule?()=>s.default:()=>s;return m.d(u,{a:u}),u},m.d=(s,u)=>{for(var h in u)m.o(u,h)&&!m.o(s,h)&&Object.defineProperty(s,h,{enumerable:!0,get:u[h]})},m.o=(s,u)=>Object.prototype.hasOwnProperty.call(s,u);var v={};return(()=>{"use strict";const s=window.ReactJSXRuntime,u=window.wp.blocks,h=window.wp.blockEditor,x=window.wp.components,Q=window.wp.coreData,Y=window.wp.data,B=window.wp.i18n,k=window.React;function ee(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function N(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,s.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,s.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,s.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const $=(0,k.lazy)(async()=>{const e=await import("../../assets-manifest.json").then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:l,isEditorMode:r=!1,...i}=o;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...i,children:(0,s.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function P(e){return(0,s.jsx)(k.Suspense,{fallback:null,children:(0,s.jsx)($,{...e})})}function T(){(0,u.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:N})}function y(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function te(e,t,o){const n=t.spacing?.blockGap;let l="none";if(n===!0)l="both";else if(Array.isArray(n)){const i=n.includes("horizontal"),d=n.includes("vertical");i&&d?l="both":i?l="horizontal":d&&(l="vertical")}const r={columnGap:l==="both"||l==="horizontal"?y(o?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?y(o?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let i="";return e.minimumColumnWidth?i=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(i=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:i,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function D(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const l=D(n.innerBlocks,t);l&&o.push(...l)}return o},[])}const oe=()=>{const{postTypes:e,taxonomies:t}=useSelect(o=>{const{getEntityRecords:n}=o(coreStore),l=["attachment"],r=n("root","postType",{per_page:-1})?.filter(({viewable:a,slug:f})=>a&&!l.includes(f));if(!r||r.length===0)return{postTypes:r,taxonomies:void 0};const i={},d=[];for(const a of r){const f=n("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:p,slug:g})=>p.includes(a.slug)&&!d.includes(g));f&&(i[a.slug]=f.map(p=>{const g=n("taxonomy",p.slug);return{...p,terms:g}}))}return{postTypes:r,taxonomies:i}},[]);return{filteredPostTypes:e,mappedTaxonomies:t===void 0||Object.values(t).length===0?void 0:t}};function ne({list:e,containerClassName:t,renderItem:o}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function A(e){return e.indexOf("data:image/svg+xml;")===0}function R(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function I(e){return e.indexOf("dashicons-")===0}function O({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(A(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(R(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(I(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const se={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function M({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return(0,s.jsx)(x.__experimentalToolsPanel,{label:(0,B.__)("Custom colours","launchpad"),resetAll:l=>{if(l)for(const r of l)r()},children:(0,s.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>(0,s.jsx)(E,{colour:l,attributesDefinition:t,attributes:o,setAttributes:n},l.attributeName))})})}function E({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[l,r,i,d,a]=(0,h.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),f=()=>t[e.attributeName]?.default!==o[e.attributeName],p=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},g=(0,k.useRef)(null);return(0,s.jsx)(x.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:f,onDeselect:p,label:e.label,isShownByDefault:!0,children:(0,s.jsx)(x.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:b})=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(x.Button,{ref:g,__next40pxDefaultSize:!0,onClick:b,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,s.jsx)(x.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,s.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,s.jsx)(x.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,s.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,s.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,s.jsx)(x.ColorPalette,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...d&&i&&i.length>0?[{name:"Default",colors:i}]:[]],value:o[e.attributeName],onChange:c=>{n({[e.attributeName]:c})},disableCustomColors:!a})})})})})},e.attributeName)}function le({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[l,r,i]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=r?.map(({name:c,ratio:b})=>({label:c,value:b}))??[],a=l?.map(({name:c,ratio:b})=>({label:c,value:b}))??[],f=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...i?a:[],...d||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,g]=useState(f.map(c=>c.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:f,value:p,onChange:c=>{g(c),c!=="custom"&&t(c)}}),p==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&n(c)},value:o,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const L=(e,t,o,n)=>{const{getBlocksByName:l,getBlockAttributes:r,getBlockParentsByBlockName:i}=select(blockEditorStore);return l(n).some(a=>{if(i(a,"core/template-part",!0).length)return!1;const{[o]:f}=r(a);return e!==a&&t===f})};function re(e,t,o,n,l){const{[t]:r}=e,i=useCallback(a=>L(o,a,t,l),[o,t,l]);return useEffect(()=>{if(r===""){const a=o.slice(0,o.indexOf("-"));n({[t]:a})}if(i(r)){const a=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${a}`),n({[t]:a})}},[r,o,n,i,t]),useMemo(()=>function({label:f,help:p,onValidChange:g,idAttribute:c}){const[b,K]=useState(c);return jsx(TextControl,{label:f,help:typeof p=="function"?p(!i(b)):p,value:b,onChange:w=>{K(w),i(w)||g(w)}})},[i])}function ie({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:C(t),controls:e.map(n=>{{const l=n===t;return{icon:C(n),title:G(n),isDisabled:l,onClick:()=>o(n)}}})})}function G(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function C(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function ae(e){const{hasChildren:t}=useSelect(o=>{const{getBlocks:n}=o(blockEditorStore);return{hasChildren:n(e).length>0}},[e]);return t}function ce({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:l,updateBlockAttributes:r}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:o.map(i=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof i.icon=="string"?jsx(O,{iconString:i.icon}):i.icon,iconSize:48,onClick:()=>{i.attributes&&r(e,i.attributes),i.innerBlocks&&l(e,createBlocksFromInnerBlocksTemplate(i.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:i.title})]},i.name))}),n&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function de({imageId:e,className:t="",size:o="full"}){const n=useSelect(r=>typeof e=="number"&&e>0?r(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!n)return null;const l=()=>{const r={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(r.src=n.media_details.sizes[o].source_url,r.width=n.media_details.sizes[o].width,r.height=n.media_details.sizes[o].height),r.srcSet=Object.entries(n.media_details.sizes??{}).map(([i,d])=>`${d.source_url} ${d.width}w`).join(", "),r};return jsx(Fragment,{children:jsx("img",{...l(),alt:n.alt_text||""})})}function H(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>H(o))):t.push([]),t}var V=m(3973),S=m.n(V);const W=[],F={selectedOutlineColour:{type:"string",default:"black"},lock:{type:"boolean",default:!0}};function z({attributes:e,setAttributes:t,context:o}){const{selectedOutlineColour:n}=e,l=(0,h.useBlockProps)({style:{"--selected-outline-colour":n}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.InspectorControls,{group:"styles",children:(0,s.jsx)(M,{colours:[{attributeName:"selectedOutlineColour",label:"Selected outline colour"}],attributes:e,attributesDefinition:F,setAttributes:t})}),(0,s.jsx)("div",{...l,children:o["launchpad-blocks/carouselImages"].map(({id:r,url:i},d)=>(0,s.jsx)("button",{type:"button",className:`reset carousel-thumbnail-button${d===1||d===0&&o["launchpad-blocks/carouselImages"].length===1?" is-selected":""}`,"data-carousel-slide":d,children:(0,s.jsx)("img",{width:190,height:132,src:i,alt:"",draggable:!1,className:"carousel-thumbnail"})},r))})]})}z.displayName="CarouselThumbnailsEdit";function U({hasInnerBlocks:e}){return e?J:q}function q(){return null}function J(){return(0,s.jsx)(h.InnerBlocks.Content,{})}const X={from:[],to:[]},Z=[],ue={},pe=null;(0,u.registerBlockType)(S().name,{icon:(0,s.jsx)(P,{iconName:"carousel-thumbnails"}),deprecated:W,edit:z,save:U({hasInnerBlocks:!1}),transforms:X}),T(),Z.forEach(e=>{(0,u.registerBlockVariation)(S().name,e)})})(),v})());
