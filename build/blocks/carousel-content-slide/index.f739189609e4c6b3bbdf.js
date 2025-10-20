(function(j,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var C=g();for(var d in C)(typeof exports=="object"?exports:j)[d]=C[d]}})(globalThis,()=>(()=>{var N={4351:(d=>{d.exports={apiVersion:3,name:"launchpad-blocks/carousel-content-slide",title:"Carousel content slide",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel-content-slides"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{backgroundOrOverlayColour:{type:"string"},overlayOpacity:{type:"number",default:50}},providesContext:{},usesContext:["launchpad-blocks/template","launchpad-blocks/shouldLockChildSlidesToTemplate","launchpad-blocks/currentlySelectedSlide","launchpad-blocks/isInTemplateEditMode"],supports:{background:{backgroundImage:!0,backgroundSize:!0},spacing:{padding:["vertical"]},layout:{default:{type:"flex",justifyContent:"center"},allowCustomContentAndWideSize:!1,allowOrientation:!1,allowJustification:!1}}}})},j={};function g(d){var f=j[d];if(f!==void 0)return f.exports;var s=j[d]={exports:{}};return N[d](s,s.exports,g),s.exports}g.n=d=>{var f=d&&d.__esModule?()=>d.default:()=>d;return g.d(f,{a:f}),f},g.d=(d,f)=>{for(var s in f)g.o(f,s)&&!g.o(d,s)&&Object.defineProperty(d,s,{enumerable:!0,get:f[s]})},g.o=(d,f)=>Object.prototype.hasOwnProperty.call(d,f);var C={};return(()=>{"use strict";const d=window.wp.blocks,f=window.wp.primitives,s=window.ReactJSXRuntime,L=(0,s.jsx)(f.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(f.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})}),k=window.wp.blockEditor,v=window.wp.components,be=window.wp.coreData,$=window.wp.data,H=window.wp.i18n,S=window.React;function xe(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function V(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,s.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,s.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,s.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const G=(0,S.lazy)(async()=>{const e=await import("../../assets-manifest.json",{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:l,isEditorMode:r=!1,...a}=n;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...a,children:(0,s.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function ve(e){return jsx(Suspense,{fallback:null,children:jsx(G,{...e})})}function F(){(0,d.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:V})}function I(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function ke(e,t,n){const o=t.spacing?.blockGap;let l="none";if(o===!0)l="both";else if(Array.isArray(o)){const a=o.includes("horizontal"),m=o.includes("vertical");a&&m?l="both":a?l="horizontal":m&&(l="vertical")}const r={columnGap:l==="both"||l==="horizontal"?I(n?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?I(n?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function W(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const l=W(o.innerBlocks,t);l&&n.push(...l)}return n},[])}const _e=()=>{const{postTypes:e,taxonomies:t}=useSelect(n=>{const{getEntityRecords:o}=n(coreStore),l=["attachment"],r=o("root","postType",{per_page:-1})?.filter(({viewable:i,slug:h})=>i&&!l.includes(h));if(!r||r.length===0)return{postTypes:r,taxonomies:void 0};const a={},m=[];for(const i of r){const h=o("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:u,slug:b})=>u.includes(i.slug)&&!m.includes(b));h&&(a[i.slug]=h.map(u=>{const b=o("taxonomy",u.slug);return{...u,terms:b}}))}return{postTypes:r,taxonomies:a}},[]);return{filteredPostTypes:e,mappedTaxonomies:t===void 0||Object.values(t).length===0?void 0:t}};function we({list:e,containerClassName:t,renderItem:n}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function Z(e){return e.indexOf("data:image/svg+xml;")===0}function U(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function q(e){return e.indexOf("dashicons-")===0}function J({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(Z(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(U(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(q(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ye={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function X({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return(0,s.jsx)(v.__experimentalToolsPanel,{label:(0,H.__)("Custom colours","launchpad"),resetAll:l=>{if(l)for(const r of l)r()},children:(0,s.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>(0,s.jsx)(K,{colour:l,attributesDefinition:t,attributes:n,setAttributes:o},l.attributeName))})})}function K({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[l,r,a,m,i]=(0,k.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==n[e.attributeName],u=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=(0,S.useRef)(null);return(0,s.jsx)(v.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:u,hasValue:h,onDeselect:u,label:e.label,isShownByDefault:!0,children:(0,s.jsx)(v.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:x})=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(v.Button,{ref:b,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,s.jsx)(v.ColorIndicator,{colorValue:n[e.attributeName]})," ",(0,s.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,s.jsx)(v.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,s.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,s.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,s.jsx)(v.ColorPalette,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...m&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:n[e.attributeName],onChange:c=>{o({[e.attributeName]:c})},disableCustomColors:!i})})})})})},e.attributeName)}function je({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[l,r,a]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),m=r?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],i=l?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],h=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?i:[],...m||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[u,b]=useState(h.map(c=>c.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:h,value:u,onChange:c=>{b(c),c!=="custom"&&t(c)}}),u==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&o(c)},value:n,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const Q=(e,t,n,o)=>{const{getBlocksByName:l,getBlockAttributes:r,getBlockParentsByBlockName:a}=select(blockEditorStore);return l(o).some(i=>{if(a(i,"core/template-part",!0).length)return!1;const{[n]:h}=r(i);return e!==i&&t===h})};function Ce(e,t,n,o,l){const{[t]:r}=e,a=useCallback(i=>Q(n,i,t,l),[n,t,l]);return useEffect(()=>{if(r===""){const i=n.slice(0,n.indexOf("-"));o({[t]:i})}if(a(r)){const i=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${i}`),o({[t]:i})}},[r,n,o,a,t]),useMemo(()=>function({label:h,help:u,onValidChange:b,idAttribute:c}){const[x,w]=useState(c);return jsx(TextControl,{label:h,help:typeof u=="function"?u(!a(x)):u,value:x,onChange:_=>{w(_),a(_)||b(_)}})},[a])}function Se({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:D(t),controls:e.map(o=>{{const l=o===t;return{icon:D(o),title:Y(o),isDisabled:l,onClick:()=>n(o)}}})})}function Y(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function D(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function Be(e){const{hasChildren:t}=useSelect(n=>{const{getBlocks:o}=n(blockEditorStore);return{hasChildren:o(e).length>0}},[e]);return t}function Oe({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:l,updateBlockAttributes:r}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:n.map(a=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?jsx(J,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&r(e,a.attributes),a.innerBlocks&&l(e,createBlocksFromInnerBlocksTemplate(a.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),o&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function Pe({imageId:e,className:t="",size:n="full"}){const o=useSelect(r=>typeof e=="number"&&e>0?r(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!o)return null;const l=()=>{const r={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(r.src=o.media_details.sizes[n].source_url,r.width=o.media_details.sizes[n].width,r.height=o.media_details.sizes[n].height),r.srcSet=Object.entries(o.media_details.sizes??{}).map(([a,m])=>`${m.source_url} ${m.width}w`).join(", "),r};return jsx(Fragment,{children:jsx("img",{...l(),alt:o.alt_text||""})})}function ee(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>ee(n))):t.push([]),t}var te=g(4351),R=g.n(te);const oe=[],ne={backgroundOrOverlayColour:{type:"string"},overlayOpacity:{type:"number",default:50}};function M({clientId:e,isSelected:t,context:n,attributes:o,setAttributes:l}){const{style:r,backgroundOrOverlayColour:a,overlayOpacity:m}=o,i=r?.background?.backgroundImage?.url,h=n["launchpad-blocks/isInTemplateEditMode"],u=n["launchpad-blocks/template"],b=n["launchpad-blocks/currentlySelectedSlide"],{isInnerBlockSelected:c,currentSlideOrderNumber:x,parentCarouselClientId:w}=(0,$.useSelect)(p=>{const{hasSelectedInnerBlock:T,getBlockParentsByBlockName:B,getBlockOrder:pe}=p(k.store),E=B(e,"launchpad-blocks/carousel-content-slides").at(-1),me=B(e,"launchpad-blocks/carousel").at(-1),he=(E?pe(E):[]).findIndex(fe=>e===fe);return{isInnerBlockSelected:T(e,!0),currentSlideOrderNumber:he,parentCarouselClientId:me}},[e]),{updateBlockAttributes:_}=(0,$.useDispatch)(k.store),[O,P,z,ce]=(0,k.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),y={};if(ce&&z&&z.length>0)for(const p of z)y[p.slug]={color:p.color,name:p.name};if(P&&P?.length>0)for(const p of P)y[p.slug]={color:p.color,name:p.name};if(O&&O?.length>0)for(const p of O)y[p.slug]={color:p.color,name:p.name};const A=Object.keys(y).find(p=>y[p].color===a),de=(0,k.useBlockProps)({className:`${b===x?"show-slide-in-editor":""} ${i?"has-bg-image":""} ${A?`has-background-color has-${A}-background-color`:""}`,style:{...i?{"--overlay-opacity":`${m}%`}:{}}}),ue=(0,k.useInnerBlocksProps)(de,{allowedBlocks:["launchpad-blocks/carousel-content-slide-content"],template:[["launchpad-blocks/carousel-content-slide-content"]],templateLock:"all"});return(0,S.useEffect)(()=>{if(!h&&u.length===1&&u[0].name==="launchpad-blocks/carousel-content-slide"&&u[0].attributes){const p={...o,...u[0].attributes};Object.entries(o).every(([T,B])=>p[T]===B)&&l(p)}},[u,l,h,o]),(0,S.useEffect)(()=>{w&&(t||c)&&b!==x&&_(w,{currentlySelectedSlide:x})},[t,c,x,w,b,_]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(k.InspectorControls,{group:"styles",children:[(0,s.jsx)(X,{colours:[{attributeName:"backgroundOrOverlayColour",label:i?"Overlay":"Background"}],attributes:o,attributesDefinition:ne,setAttributes:l}),i&&a?(0,s.jsx)(v.Panel,{children:(0,s.jsx)(v.PanelBody,{children:(0,s.jsx)(v.RangeControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,help:"Please select how transparent you would like the overlay.",label:"Overlay opacity",max:100,min:0,value:m,onChange:p=>{l({overlayOpacity:p})}})})}):null]}),(0,s.jsx)("div",{...ue})]})}M.displayName="CarouselContentSlideEdit";function le({hasInnerBlocks:e}){return e?re:se}function se(){return null}function re(){return(0,s.jsx)(k.InnerBlocks.Content,{})}const ae={from:[],to:[]},ie=[],ze={},Te=null;(0,d.registerBlockType)(R().name,{icon:L,deprecated:oe,edit:M,save:le({hasInnerBlocks:!0}),transforms:ae}),F(),ie.forEach(e=>{(0,d.registerBlockVariation)(R().name,e)})})(),C})());
