(function(I,k){if(typeof exports=="object"&&typeof module=="object")module.exports=k();else if(typeof define=="function"&&define.amd)define([],k);else{var T=k();for(var c in T)(typeof exports=="object"?exports:I)[c]=T[c]}})(globalThis,()=>(()=>{var M={7192:(c=>{c.exports={apiVersion:3,name:"launchpad-blocks/carousel-slides",title:"Carousel image slides",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel","launchpad-blocks/gallery-carousel"],allowedBlocks:["core/image"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{allowResize:{type:"boolean",default:!1},aspectRatio:{type:"string",default:"auto"},imageFit:{type:"string",enum:["cover","contain"],default:"cover"},shouldPullImagesFromContext:{type:"boolean",default:!1},captionBackground:{type:"string"}},providesContext:{allowResize:"allowResize"},usesContext:["launchpad-blocks/carouselImages","launchpad-blocks/shouldLinkSlidesToLightbox"],supports:{color:{link:!0}}}})},I={};function k(c){var x=I[c];if(x!==void 0)return x.exports;var o=I[c]={exports:{}};return M[c](o,o.exports,k),o.exports}k.n=c=>{var x=c&&c.__esModule?()=>c.default:()=>c;return k.d(x,{a:x}),x},k.d=(c,x)=>{for(var o in x)k.o(x,o)&&!k.o(c,o)&&Object.defineProperty(c,o,{enumerable:!0,get:x[o]})},k.o=(c,x)=>Object.prototype.hasOwnProperty.call(c,x);var T={};return(()=>{"use strict";const c=window.wp.blocks,x=window.wp.primitives,o=window.ReactJSXRuntime,D=(0,o.jsx)(x.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(x.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})}),w=window.wp.blockEditor,p=window.wp.components,_e=window.wp.coreData,O=window.wp.data,j=window.wp.i18n,R=window.React;function je(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function Z(e){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,o.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,o.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,o.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const J=(0,R.lazy)(async()=>{const e=await import("../../assets-manifest.json").then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:s,size:i,isEditorMode:r=!1,...l}=n;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,...l,children:(0,o.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${s}`})})}}});function ye(e){return jsx(Suspense,{fallback:null,children:jsx(J,{...e})})}function K(){(0,c.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:Z})}function F(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Ce(e,t,n){const s=t.spacing?.blockGap;let i="none";if(s===!0)i="both";else if(Array.isArray(s)){const l=s.includes("horizontal"),m=s.includes("vertical");l&&m?i="both":l?i="horizontal":m&&(i="vertical")}const r={columnGap:i==="both"||i==="horizontal"?F(n?.spacing?.blockGap,i):void 0,rowGap:i==="both"||i==="vertical"?F(n?.spacing?.blockGap,i):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function Q(e,t){return e.reduce((n,s)=>{if(s.name===t)n.push(s);else if(s.innerBlocks){const i=Q(s.innerBlocks,t);i&&n.push(...i)}return n},[])}const Be=()=>{const{postTypes:e,taxonomies:t}=useSelect(n=>{const{getEntityRecords:s}=n(coreStore),i=["attachment"],r=s("root","postType",{per_page:-1})?.filter(({viewable:d,slug:g})=>d&&!i.includes(g));if(!r||r.length===0)return{postTypes:r,taxonomies:void 0};const l={},m=[];for(const d of r){const g=s("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:f,slug:b})=>f.includes(d.slug)&&!m.includes(b));g&&(l[d.slug]=g.map(f=>{const b=s("taxonomy",f.slug);return{...f,terms:b}}))}return{postTypes:r,taxonomies:l}},[]);return{filteredPostTypes:e,mappedTaxonomies:t===void 0||Object.values(t).length===0?void 0:t}};function Se({list:e,containerClassName:t,renderItem:n}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(s=>n({listItem:s,buttonProps:{type:"button",className:`custom-multiple-select-list-item${s.isSelected?" is-selected":""}`}}))})]})}function Y(e){return e.indexOf("data:image/svg+xml;")===0}function ee(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function te(e){return e.indexOf("dashicons-")===0}function ne({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(Y(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(ee(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(te(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Pe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function oe({colours:e,attributesDefinition:t,attributes:n,setAttributes:s}){return(0,o.jsx)(p.__experimentalToolsPanel,{label:(0,j.__)("Custom colours","launchpad"),resetAll:i=>{if(i)for(const r of i)r()},children:(0,o.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(i=>(0,o.jsx)(se,{colour:i,attributesDefinition:t,attributes:n,setAttributes:s},i.attributeName))})})}function se({colour:e,attributesDefinition:t,attributes:n,setAttributes:s}){const[i,r,l,m,d]=(0,w.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),g=()=>t[e.attributeName]?.default!==n[e.attributeName],f=()=>{s({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=(0,R.useRef)(null);return(0,o.jsx)(p.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:f,hasValue:g,onDeselect:f,label:e.label,isShownByDefault:!0,children:(0,o.jsx)(p.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:a,onToggle:v})=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(p.Button,{ref:b,__next40pxDefaultSize:!0,onClick:v,"aria-expanded":a,className:`block-editor-panel-color-gradient-settings__dropdown${a?" is-open":""}`,children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,o.jsx)(p.ColorIndicator,{colorValue:n[e.attributeName]})," ",(0,o.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,o.jsx)(p.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,o.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,o.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,o.jsx)(p.ColorPalette,{colors:[...i&&i?.length>0?[{name:"User",colors:i}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...m&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:n[e.attributeName],onChange:a=>{s({[e.attributeName]:a})},disableCustomColors:!d})})})})})},e.attributeName)}function ie({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:s}){const[i,r,l]=(0,w.useSettings)("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),m=r?.map(({name:a,ratio:v})=>({label:a,value:v}))??[],d=i?.map(({name:a,ratio:v})=>({label:a,value:v}))??[],g=[{label:(0,j._x)("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?d:[],...m||[],{label:(0,j._x)("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[f,b]=(0,R.useState)(g.map(a=>a.value).includes(e)?e:"custom");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,j.__)("Aspect ratio","launchpad-blocks"),options:g,value:f,onChange:a=>{b(a),a!=="custom"&&t(a)}}),f==="custom"?(0,o.jsx)(p.TextControl,{label:(0,j.__)("Custom aspect ratio","launchpad-blocks"),help:(0,j.__)("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&s!==void 0?(0,o.jsxs)(p.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:(0,j.__)("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:a=>{typeof a=="string"&&["contain","cover"].includes(a)&&s(a)},value:n,children:[(0,o.jsx)(p.__experimentalToggleGroupControlOption,{label:"Cover",value:"cover"}),(0,o.jsx)(p.__experimentalToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const re=(e,t,n,s)=>{const{getBlocksByName:i,getBlockAttributes:r,getBlockParentsByBlockName:l}=select(blockEditorStore);return i(s).some(d=>{if(l(d,"core/template-part",!0).length)return!1;const{[n]:g}=r(d);return e!==d&&t===g})};function ze(e,t,n,s,i){const{[t]:r}=e,l=useCallback(d=>re(n,d,t,i),[n,t,i]);return useEffect(()=>{if(r===""){const d=n.slice(0,n.indexOf("-"));s({[t]:d})}if(l(r)){const d=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${d}`),s({[t]:d})}},[r,n,s,l,t]),useMemo(()=>function({label:g,help:f,onValidChange:b,idAttribute:a}){const[v,A]=useState(a);return jsx(TextControl,{label:g,help:typeof f=="function"?f(!l(v)):f,value:v,onChange:B=>{A(B),l(B)||b(B)}})},[l])}function Ie({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:H(t),controls:e.map(s=>{{const i=s===t;return{icon:H(s),title:le(s),isDisabled:i,onClick:()=>n(s)}}})})}function le(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function H(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function Te(e){const{hasChildren:t}=useSelect(n=>{const{getBlocks:s}=n(blockEditorStore);return{hasChildren:s(e).length>0}},[e]);return t}function Re({clientId:e,blockInfo:t,variations:n,allowSkip:s}){const{replaceInnerBlocks:i,updateBlockAttributes:r}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:n.map(l=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?jsx(ne,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&r(e,l.attributes),l.innerBlocks&&i(e,createBlocksFromInnerBlocksTemplate(l.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),s&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{i(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function $e({imageId:e,className:t="",size:n="full"}){const s=useSelect(r=>typeof e=="number"&&e>0?r(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!s)return null;const i=()=>{const r={src:s.source_url,className:`attachment-${n} size-${n} ${t}`,width:s.media_details.width,height:s.media_details.height,srcSet:""};return s.media_details?.sizes?.[n]&&(r.src=s.media_details.sizes[n].source_url,r.width=s.media_details.sizes[n].width,r.height=s.media_details.sizes[n].height),r.srcSet=Object.entries(s.media_details.sizes??{}).map(([l,m])=>`${m.source_url} ${m.width}w`).join(", "),r};return jsx(Fragment,{children:jsx("img",{...i(),alt:s.alt_text||""})})}function ae(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>ae(n))):t.push([]),t}var ce=k(7192),G=k.n(ce);const de=[];function Ne(e){if(e===void 0)throw new Error(`Pixel value ${e} is undefined`);if(!e.endsWith("px"))throw new Error(`Pixel value ${e} is not a pixel value`);if(e.includes(" "))throw new Error(`Pixel value ${e} contains multiple values`);return Number(e.replace("px",""))}function Ae(e){let t="";const n=document.createElement("div");return n.innerHTML=e,t=n.innerText,ue(t)}function ue(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|(?<!-)-+$/g,"")}function pe(e,t=()=>!0){const n=e.parentElement;return n===null?null:t(n)?n:pe(n,t)}function Le(e){if(new RegExp("ms$","ig").test(e))return Number(e.substring(0,e.length-2));if(new RegExp("s$","ig").test(e))return Number(e.substring(0,e.length-1))*1e3;throw new Error("Time didn't end with ms or s so was not correctly parsed.")}function Ee(){if(typeof document>"u")return"unknown";const e=window.navigator.userAgent;let t="unknown";return e.search("Windows")!==-1?t="Windows":e.search("Mac")!==-1?t="MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?t="UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1&&(t="Linux"),t}function W(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!Object.entries(e[n]).every(([i,r])=>Array.isArray(r)?W(r,t[n]?.[i]):t[n]?.[i]===r))return!1;return!0}const me={allowResize:{type:"boolean",default:!1},aspectRatio:{type:"string",default:"auto"},imageFit:{type:"string",enum:["cover","contain"],default:"cover"},shouldPullImagesFromContext:{type:"boolean",default:!1},captionBackground:{type:"string"}};function V({clientId:e,attributes:t,setAttributes:n,context:s}){const{aspectRatio:i,imageFit:r,shouldPullImagesFromContext:l,captionBackground:m}=t,d=(0,w.useBlockProps)({className:i!=="auto"?"has-aspect-ratio":"",style:{"--slide-aspect-ratio":i,"--slide-image-fit":i!=="auto"?r:void 0,"--caption-background":m}}),g=s["launchpad-blocks/shouldLinkSlidesToLightbox"],{hasChildren:f,innerBlockImages:b,parentCarousel:a,associatedLightboxBlockId:v}=(0,O.useSelect)(u=>{const{getBlock:y,getBlocks:P,getBlockParentsByBlockName:X}=u(w.store),S=P(e),$=X(e,["launchpad-blocks/carousel","launchpad-blocks/gallery-carousel"])[0],h=y($);function _(N,C){const E=[];C=Array.isArray(C)?C:[C];for(const z of N)C.includes(z.name)&&E.push(z.clientId),z.innerBlocks&&z.innerBlocks.length>0&&E.push(..._(z.innerBlocks,C));return E}return{hasChildren:S.length>0,innerBlockImages:S,parentCarousel:h,associatedLightboxBlockId:g?_(P($),"launchpad-blocks/gallery-carousel-lightbox")[0]??null:null}},[e,g]),{replaceInnerBlocks:A,selectBlock:B,updateBlockAttributes:L}=(0,O.useDispatch)(w.store);function q(u){return u.map(y=>({id:y.attributes.id,url:y.attributes.url}))}function U(u){const y=u.reduce((h,_,N)=>(h[_.id]=N,h),{}),P=b.filter(h=>u.find(_=>_.id===h.attributes?.id)),S=u.filter(h=>!P.find(_=>h.id===_.attributes?.id)).map(h=>(0,c.createBlock)("core/image",{id:h.id,url:h.url,caption:h.caption,alt:h.alt,sizeSlug:"full"})),$=P.map(h=>{const{validationIssues:_,originalContent:N,...C}=h;return C}).concat(S).sort((h,_)=>y[h.attributes?.id]-y[_.attributes?.id]);A(e,$),S?.length>0&&B(S[0].clientId)}(0,R.useEffect)(()=>{if(l)return;const u=q(b);W(a.attributes?.images,u)||(L(a.clientId,{images:u}),L(a.clientId,{slides:b}))},[b,a,l,L]);const{children:ke,...we}=(0,w.useInnerBlocksProps)(d);return(0,o.jsxs)(o.Fragment,{children:[l?null:(0,o.jsx)(w.BlockControls,{group:"other",children:(0,o.jsx)(w.MediaReplaceFlow,{allowedTypes:["image"],accept:"image/*",onSelect:U,name:(0,j.__)("Add","launchpad-blocks"),multiple:!0,mediaIds:q(b).filter(u=>u.id).map(u=>u.id),addToGallery:b.length>0})}),(0,o.jsx)(w.InspectorControls,{group:"styles",children:(0,o.jsx)(oe,{colours:[{attributeName:"captionBackground",label:"Caption background colour"}],attributes:t,attributesDefinition:me,setAttributes:n})}),(0,o.jsxs)(w.InspectorControls,{children:[(0,o.jsx)(p.Panel,{children:(0,o.jsx)(p.PanelBody,{children:(0,o.jsx)(ie,{ratioValue:i,ratioOnChange:u=>{n({aspectRatio:u})},imageFitValue:r,imageFitOnChange:u=>{n({imageFit:u})}})})}),g&&v?(0,o.jsx)(p.Panel,{children:(0,o.jsx)(p.PanelBody,{children:(0,o.jsx)(p.Button,{type:"button",variant:"primary",onClick:()=>{B(v)},children:"Edit lightbox"})})}):null]}),(0,o.jsx)("div",{...we,children:f?ke:l?s["launchpad-blocks/carouselImages"].length?s["launchpad-blocks/carouselImages"].map(({id:u,url:y})=>(0,o.jsx)("figure",{className:"wp-block-image",children:(0,o.jsx)("img",{src:y,alt:""})},u)):(0,o.jsx)("figure",{className:"wp-block-image",children:(0,o.jsx)("img",{src:"https://picsum.photos/id/237/2000/1600",alt:""})}):(0,o.jsx)(w.MediaPlaceholder,{icon:D,labels:{title:(0,j.__)("Carousel slides","launchpad-blocks"),instructions:(0,j.__)("Drag and drop images, upload, or choose from your library.","launchpad-blocks")},onSelect:U,accept:"image/*",allowedTypes:["image"],multiple:!0,addToGallery:!1})})]})}V.displayName="CarouselSlidesEdit";function ge({hasInnerBlocks:e}){return e?fe:he}function he(){return null}function fe(){return(0,o.jsx)(w.InnerBlocks.Content,{})}const be={from:[],to:[]},xe=[],Me={allowResize:"allowResize"},De=null;(0,c.registerBlockType)(G().name,{icon:D,deprecated:de,edit:V,save:ge({hasInnerBlocks:!0}),transforms:be}),K(),xe.forEach(e=>{(0,c.registerBlockVariation)(G().name,e)})})(),T})());
