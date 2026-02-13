(function(T,b){if(typeof exports=="object"&&typeof module=="object")module.exports=b();else if(typeof define=="function"&&define.amd)define([],b);else{var E=b();for(var c in E)(typeof exports=="object"?exports:T)[c]=E[c]}})(globalThis,()=>(()=>{var D={5656:(c=>{c.exports={apiVersion:3,name:"launchpad-blocks/carousel-content-slides",title:"Carousel content slides",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{template:{type:"array",default:[{name:"launchpad-blocks/carousel-content-slide",innerBlocks:[{name:"launchpad-blocks/carousel-content-slide-content",innerBlocks:[{name:"core/heading",attributes:{placeholder:"Your template"},innerBlocks:[]},{name:"core/paragraph",attributes:{placeholder:'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.'},innerBlocks:[]}]}]}]},tempInnerBlocksStorage:{type:"array",default:[]},shouldLockChildSlidesToTemplate:{type:"boolean",default:!1},hasDismissedVariationsSelector:{type:"boolean",default:!1},isInTemplateEditMode:{type:"boolean",default:!1},aspectRatio:{type:"string",default:"auto"}},providesContext:{"launchpad-blocks/template":"template","launchpad-blocks/isInTemplateEditMode":"isInTemplateEditMode","launchpad-blocks/shouldLockChildSlidesToTemplate":"shouldLockChildSlidesToTemplate"},usesContext:[],supports:{color:{link:!0}}}})},T={};function b(c){var h=T[c];if(h!==void 0)return h.exports;var o=T[c]={exports:{}};return D[c](o,o.exports,b),o.exports}b.n=c=>{var h=c&&c.__esModule?()=>c.default:()=>c;return b.d(h,{a:h}),h},b.d=(c,h)=>{for(var o in h)b.o(h,o)&&!b.o(c,o)&&Object.defineProperty(c,o,{enumerable:!0,get:h[o]})},b.o=(c,h)=>Object.prototype.hasOwnProperty.call(c,h);var E={};return(()=>{"use strict";const c=window.wp.blocks,h=window.wp.primitives,o=window.ReactJSXRuntime,U=(0,o.jsx)(h.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(h.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})}),k=window.wp.blockEditor,m=window.wp.components,Te=window.wp.coreData,y=window.wp.data,w=window.wp.i18n,_=window.React;function Ee(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function X(e){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,o.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,o.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,o.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const Z=(0,_.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:s,size:r,isEditorMode:i=!1,...l}=n;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...l,children:(0,o.jsx)("use",{href:`${i?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${s}`})})}}});function Y(e){return(0,o.jsx)(_.Suspense,{fallback:null,children:(0,o.jsx)(Z,{...e})})}function J(){(0,c.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:X})}function R(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Pe(e,t,n){const s=t.spacing?.blockGap;let r="none";if(s===!0)r="both";else if(Array.isArray(s)){const l=s.includes("horizontal"),d=s.includes("vertical");l&&d?r="both":l?r="horizontal":d&&(r="vertical")}const i={columnGap:r==="both"||r==="horizontal"?R(n?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?R(n?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:i};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...i}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...i}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...i}};default:return{className:`is-layout-${e.type}`,style:{...i}}}}function K(e,t){return e.reduce((n,s)=>{if(s.name===t)n.push(s);else if(s.innerBlocks){const r=K(s.innerBlocks,t);r&&n.push(...r)}return n},[])}const Me=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=useMemo(()=>({}),[]),{postTypes:s,taxonomies:r}=useSelect(g=>{const{getEntityRecords:p}=g(coreStore),f=p("root","postType",e),a=p("root","taxonomy",t);if(!a)return{postTypes:f,taxonomies:a};for(const x of a)n[x.slug]=p("taxonomy",x.slug);return{postTypes:f,taxonomies:a}},[e,t,n]),i=["attachment"],l=[],d=s?.filter(({viewable:g,slug:p})=>g&&!i.includes(p));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const g of d){const p=r?.filter(({types:f,slug:a})=>f.includes(g.slug)&&!l.includes(a));p&&(u[g.slug]=p.map(f=>{const a=n?.[f.slug]??null;return{...f,terms:a}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function ze({list:e,containerClassName:t,renderItem:n}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(s=>n({listItem:s,buttonProps:{type:"button",className:`custom-multiple-select-list-item${s.isSelected?" is-selected":""}`}}))})]})}function Q(e){return e.indexOf("data:image/svg+xml;")===0}function ee(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function te(e){return e.indexOf("dashicons-")===0}function ne({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return(0,o.jsx)("div",{className:"menu-icon","aria-hidden":"true",children:(0,o.jsx)("br",{})});if(Q(e))return(0,o.jsx)("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:(0,o.jsx)("br",{})});if(ee(e))return(0,o.jsx)("img",{src:new URL(e).toString(),alt:""});if(te(e)){const t=e.replace("dashicons-","");return(0,o.jsx)(m.Dashicon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const $e={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ne({colours:e,attributesDefinition:t,attributes:n,setAttributes:s}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:r=>{if(r)for(const i of r)i()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>jsx(oe,{colour:r,attributesDefinition:t,attributes:n,setAttributes:s},r.attributeName))})})}function oe({colour:e,attributesDefinition:t,attributes:n,setAttributes:s}){const[r,i,l,d,u]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),g=()=>t[e.attributeName]?.default!==n[e.attributeName],p=()=>{s({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:g,onDeselect:p,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:a,onToggle:x})=>jsx(Fragment,{children:jsx(Button,{ref:f,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":a,className:`block-editor-panel-color-gradient-settings__dropdown${a?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:n[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...i&&i?.length>0?[{name:"Theme",colors:i}]:[],...d&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:n[e.attributeName],onChange:a=>{s({[e.attributeName]:a})},disableCustomColors:!u})})})})})},e.attributeName)}function se({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:s}){const[r,i,l]=(0,k.useSettings)("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=i?.map(({name:a,ratio:x})=>({label:a,value:x}))??[],u=r?.map(({name:a,ratio:x})=>({label:a,value:x}))??[],g=[{label:(0,w._x)("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?u:[],...d||[],{label:(0,w._x)("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,f]=(0,_.useState)(g.map(a=>a.value).includes(e)?e:"custom");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,w.__)("Aspect ratio","launchpad-blocks"),options:g,value:p,onChange:a=>{f(a),a!=="custom"&&t(a)}}),p==="custom"?(0,o.jsx)(m.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,w.__)("Custom aspect ratio","launchpad-blocks"),help:(0,w.__)("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&s!==void 0?(0,o.jsxs)(m.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:(0,w.__)("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:a=>{typeof a=="string"&&["contain","cover"].includes(a)&&s(a)},value:n,children:[(0,o.jsx)(m.__experimentalToggleGroupControlOption,{label:"Cover",value:"cover"}),(0,o.jsx)(m.__experimentalToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const re=(e,t,n,s)=>{const{getBlocksByName:r,getBlockAttributes:i,getBlockParentsByBlockName:l}=select(blockEditorStore);return r(s).some(u=>{if(l(u,"core/template-part",!0).length)return!1;const{[n]:g}=i(u);return e!==u&&t===g})};function Ie(e,t,n,s,r){const{[t]:i}=e,l=useCallback(u=>re(n,u,t,r),[n,t,r]);return useEffect(()=>{if(i===""){const u=n.slice(0,n.indexOf("-"));s({[t]:u})}if(l(i)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${i}. New value: ${u}`),s({[t]:u})}},[i,n,s,l,t]),useMemo(()=>function({label:g,help:p,onValidChange:f,idAttribute:a}){const[x,z]=useState(a);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:g,help:typeof p=="function"?p(!l(x)):p,value:x,onChange:S=>{z(S),l(S)||f(S)}})},[l])}function De({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:A(t),controls:e.map(s=>{{const r=s===t;return{icon:A(s),title:ie(s),isDisabled:r,onClick:()=>n(s)}}})})}function ie(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function A(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function Re(e){const{hasChildren:t}=useSelect(n=>{const{getBlocks:s}=n(blockEditorStore);return{hasChildren:s(e).length>0}},[e]);return t}function le({clientId:e,blockInfo:t,variations:n,allowSkip:s}){const{replaceInnerBlocks:r,updateBlockAttributes:i}=(0,y.useDispatch)(k.store);return(0,o.jsxs)(m.Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[(0,o.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,w.__)("Block variations"),children:n.map(l=>(0,o.jsxs)("li",{children:[(0,o.jsx)(m.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?(0,o.jsx)(ne,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&i(e,l.attributes),l.innerBlocks&&r(e,(0,c.createBlocksFromInnerBlocksTemplate)(l.innerBlocks),!1)}}),(0,o.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),s&&(0,o.jsx)("div",{className:"block-editor-block-variation-picker__skip",children:(0,o.jsx)(m.Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),i(e,{hasDismissedVariationsSelector:!0})},children:(0,w.__)("Skip")})})]})}function Ae({imageId:e,className:t="",size:n="full"}){const s=useSelect(i=>typeof e=="number"&&e>0?i(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!s)return null;const r=()=>{const i={src:s.source_url,className:`attachment-${n} size-${n} ${t}`,width:s.media_details.width,height:s.media_details.height,srcSet:""};return s.media_details?.sizes?.[n]&&(i.src=s.media_details.sizes[n].source_url,i.width=s.media_details.sizes[n].width,i.height=s.media_details.sizes[n].height),i.srcSet=Object.entries(s.media_details.sizes??{}).map(([l,d])=>`${d.source_url} ${d.width}w`).join(", "),i};return jsx(Fragment,{children:jsx("img",{...r(),alt:s.alt_text||""})})}function P(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>P(n))):t.push([]),t}function Oe(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const i=t.current.style;i.minHeight="",t.current.setAttribute("style",`${i.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var ae=b(5656),C=b.n(ae);const ce=[],de=window.wp.editor,M=window.wp.hooks,ue=window.wp.notices;function Le(e){if(e===void 0)throw new Error(`Pixel value ${e} is undefined`);if(!e.endsWith("px"))throw new Error(`Pixel value ${e} is not a pixel value`);if(e.includes(" "))throw new Error(`Pixel value ${e} contains multiple values`);return Number(e.replace("px",""))}function He(e){let t="";const n=document.createElement("div");return n.innerHTML=e,t=n.innerText,pe(t)}function pe(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|(?<!-)-+$/g,"")}function me(e,t=()=>!0){const n=e.parentElement;return n===null?null:t(n)?n:me(n,t)}function Fe(e){if(new RegExp("ms$","ig").test(e))return Number(e.substring(0,e.length-2));if(new RegExp("s$","ig").test(e))return Number(e.substring(0,e.length-1))*1e3;throw new Error("Time didn't end with ms or s so was not correctly parsed.")}function We(){if(typeof document>"u")return"unknown";const e=window.navigator.userAgent;let t="unknown";return e.search("Windows")!==-1?t="Windows":e.search("Mac")!==-1?t="MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?t="UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1&&(t="Linux"),t}function O(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!Object.entries(e[n]).every(([r,i])=>Array.isArray(i)?O(i,t[n]?.[r]):t[n]?.[r]===i))return!1;return!0}const L=[{name:"heading-and-paragraph",title:"Heading and paragraph",icon:(0,o.jsx)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(h.Path,{d:"m4 5.5h2v6.5h1.5v-6.5h2v-1.5h-5.5zm16 10.5h-16v-1.5h16zm-7 4h-9v-1.5h9z"})}),scope:["block"],innerBlocks:[["launchpad-blocks/carousel-content-slide",{},[["launchpad-blocks/carousel-content-slide-content",{},[["core/heading",{placeholder:"Your template"}],["core/paragraph",{placeholder:'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.'}]]]]]]}];function H({clientId:e,attributes:t,setAttributes:n}){const{template:s,shouldLockChildSlidesToTemplate:r,hasDismissedVariationsSelector:i,tempInnerBlocksStorage:l,isInTemplateEditMode:d,aspectRatio:u}=t,[g,p]=(0,_.useState)(!1),{lockPostSaving:f,lockPostAutosaving:a,unlockPostSaving:x,unlockPostAutosaving:z}=(0,y.useDispatch)(de.store),{createNotice:S,removeNotice:xe}=(0,y.useDispatch)(ue.store),{replaceInnerBlocks:$,updateBlockAttributes:F}=(0,y.useDispatch)(k.store),{hasChildren:ve,innerBlocks:W,parentCarousel:N}=(0,y.useSelect)(v=>{const{getBlock:j,getBlocks:je,getBlockParentsByBlockName:ye}=v(k.store),Ce=ye(e,["launchpad-blocks/carousel"])[0],Se=j(Ce),q=je(e);return{hasChildren:q.length>0,innerBlocks:q,parentCarousel:Se}},[e]),ke=(0,k.useBlockProps)({className:u!=="auto"?"has-aspect-ratio":"",style:{"--slide-aspect-ratio":u}}),{children:we,...G}=(0,k.useInnerBlocksProps)(ke,{allowedBlocks:["launchpad-blocks/carousel-content-slide"],renderAppender:d&&W.length>0?()=>null:void 0});function _e(){f(`templateEditingMode-${e}`),a(`templateEditingMode-${e}`),S("info",`Currently editing the template of the ${C().title}. Save the template using the sidebar block settings of the ${C().title} block to save the content.`,{id:"template-editing-mode",isDismissible:!1}).catch(()=>{})}function V(){x(`templateEditingMode-${e}`),z(`templateEditingMode-${e}`),xe("template-editing-mode").catch(()=>{})}(0,_.useEffect)(()=>{d?(0,M.addFilter)("editor.preSavePost","launchpadBlocks/carouselContentSlides/preventSaveInEditMode",()=>{throw new Error("You can't save the post while you're still editing the carousel template. Please save or discard the template first.")}):(0,M.hasFilter)("editor.preSavePost","launchpadBlocks/carouselContentSlides/preventSaveInEditMode")&&(0,M.removeFilter)("editor.preSavePost","launchpadBlocks/carouselContentSlides/preventSaveInEditMode")},[d]);const I=(0,_.useCallback)(v=>v.map(j=>({name:j.name,attributes:j.attributes,innerBlocks:j.innerBlocks?I(j.innerBlocks):[]})),[]),B=I(W);return(0,_.useEffect)(()=>{O(N.attributes?.slides,B)||F(N.clientId,{slides:B})},[B,N,F,I]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k.InspectorControls,{children:(0,o.jsx)(m.Panel,{children:(0,o.jsxs)(m.PanelBody,{title:"Template settings",children:[(0,o.jsx)(se,{ratioValue:u,ratioOnChange:v=>{n({aspectRatio:v})}}),(0,o.jsx)(m.ToggleControl,{__nextHasNoMarginBottom:!0,checked:r,label:"Lock slides to template",onChange:v=>{n({shouldLockChildSlidesToTemplate:v})}}),d?(0,o.jsxs)(m.Flex,{children:[(0,o.jsx)(m.FlexItem,{children:(0,o.jsx)(m.Button,{type:"button",variant:"secondary",isDestructive:!0,onClick:()=>{console.log({tempInnerBlocksStorage:l}),$(e,(0,c.createBlocksFromInnerBlocksTemplate)(l.map(v=>P(v)))),n({isInTemplateEditMode:!1}),V()},children:"Discard changes"})}),(0,o.jsx)(m.FlexItem,{children:(0,o.jsx)(m.Button,{type:"button",variant:"primary",onClick:()=>{n({template:B}),$(e,(0,c.createBlocksFromInnerBlocksTemplate)(l.map(v=>P(v)))),n({isInTemplateEditMode:!1}),V()},children:"Save template"})})]}):(0,o.jsx)(m.Button,{type:"button",variant:"primary",isDestructive:!0,onClick:()=>{p(!0)},children:"Edit template"})]})})}),(0,o.jsxs)(m.__experimentalConfirmDialog,{isOpen:g,cancelButtonText:"No thank you",confirmButtonText:"Yes please",onConfirm:()=>{p(!1),_e(),n({tempInnerBlocksStorage:B}),$(e,(0,c.createBlocksFromInnerBlocksTemplate)(s.map(v=>P(v)))),n({isInTemplateEditMode:!0})},onCancel:()=>{p(!1)},children:["WARNING: Editing the template may result in loss of content on the existing slides.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"If you need to keep the content, you can duplicate or copy this block before ",(0,o.jsx)("br",{}),"you make any changes to ensure you don't lose any content,",(0,o.jsx)("br",{}),"then you can copy content over once you have your new template set up.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("strong",{children:"Are you sure you want to proceed?"})]}),ve||i||!d?(0,o.jsx)("ul",{...G,children:we}):(0,o.jsx)("div",{...G,children:(0,o.jsx)(le,{clientId:e,blockInfo:{name:C().title,icon:(0,o.jsx)(Y,{isEditorMode:!0,iconName:"manual-post-select"})},variations:L,allowSkip:!0})})]})}H.displayName="CarouselContentSlidesEdit";function he({hasInnerBlocks:e}){return e?fe:ge}function ge(){return null}function fe(){return(0,o.jsx)(k.InnerBlocks.Content,{})}const be={from:[],to:[]},qe={"launchpad-blocks/template":"template","launchpad-blocks/isInTemplateEditMode":"isInTemplateEditMode","launchpad-blocks/shouldLockChildSlidesToTemplate":"shouldLockChildSlidesToTemplate"},Ue=null;(0,c.registerBlockType)(C().name,{icon:U,deprecated:ce,edit:H,save:he({hasInnerBlocks:!0}),transforms:be}),J(),L.forEach(e=>{(0,c.registerBlockVariation)(C().name,e)})})(),E})());
