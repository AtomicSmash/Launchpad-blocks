(function(S,w){if(typeof exports=="object"&&typeof module=="object")module.exports=w();else if(typeof define=="function"&&define.amd)define([],w);else{var N=w();for(var n in N)(typeof exports=="object"?exports:S)[n]=N[n]}})(globalThis,()=>(()=>{var M={7749(n){n.exports={apiVersion:3,name:"launchpad-blocks/carousel-navigation-arrows",title:"Carousel navigation arrows",category:"theme",description:"",textdomain:"launchpad-blocks",allowedBlocks:["launchpad-blocks/carousel-thumbnails","launchpad-blocks/carousel-dots","launchpad-blocks/carousel-slide-count"],parent:["launchpad-blocks/carousel"],keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",styles:[{name:"normal",label:"Normal",isDefault:!0},{name:"overlay",label:"Overlay"}],attributes:{prevText:{type:"string",default:"Go to previous slide"},nextText:{type:"string",default:"Go to next slide"},prevVisualText:{type:"string",default:"Previous"},nextVisualText:{type:"string",default:"Next"},shouldShowTextVisually:{type:"boolean",default:!0},backgroundColour:{type:"string",default:"black"},iconColour:{type:"string",default:"white"},prevIcon:{type:"object",default:{iconName:"chevron-left",library:"launchpad-blocks"}},nextIcon:{type:"object",default:{iconName:"chevron-right",library:"launchpad-blocks"}}},providesContext:{},usesContext:["launchpad-blocks/currentlySelectedSlide","launchpad-blocks/carouselSlides","launchpad-blocks/carouselImages"],example:{},supports:{align:!0,layout:{default:{type:"constrained"},allowCustomContentAndWideSize:!1}}}}},S={};function w(n){var x=S[n];if(x!==void 0)return x.exports;var h=S[n]={exports:{}};return M[n](h,h.exports,w),h.exports}w.n=n=>{var x=n&&n.__esModule?()=>n.default:()=>n;return w.d(x,{a:x}),x},w.d=(n,x)=>{for(var h in x)w.o(x,h)&&!w.o(n,h)&&Object.defineProperty(n,h,{enumerable:!0,get:x[h]})},w.o=(n,x)=>Object.prototype.hasOwnProperty.call(n,x);var N={};return(()=>{"use strict";const n=window.ReactJSXRuntime,x=window.wp.blocks,h=window.wp.blockEditor,g=window.wp.components,et=window.wp.coreData,z=window.wp.data,_=window.wp.i18n,C=window.React;var O;function tt(e){return O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:O("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function oe(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,n.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,n.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,n.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const le=(0,C.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:l,size:a,isEditorMode:r=!1,...s}=o;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,...s,children:(0,n.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${l}`})})}}});function H(e){return(0,n.jsx)(C.Suspense,{fallback:null,children:(0,n.jsx)(le,{...e})})}var j,P,m,L,$,ae,re,se,V,ie,E,ce,ue,G,U,A,de,pe,W,k,me,he,ge,fe,be,xe,T,F,ve,we,ke;function _e(){(0,x.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:oe})}function q(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function nt(e,t,o){const l=t.spacing?.blockGap;let a="none";if(l===!0)a="both";else if(Array.isArray(l)){const s=l.includes("horizontal"),c=l.includes("vertical");s&&c?a="both":s?a="horizontal":c&&(a="vertical")}const r={columnGap:a==="both"||a==="horizontal"?q(o?.spacing?.blockGap,a):void 0,rowGap:a==="both"||a==="vertical"?q(o?.spacing?.blockGap,a):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function ye(e,t){return e.reduce((o,l)=>{if(l.name===t)o.push(l);else if(l.innerBlocks){const a=ye(l.innerBlocks,t);a&&o.push(...a)}return o},[])}const ot=()=>{const e=T(()=>({per_page:-1}),[]),t=T(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=T(()=>({}),[]),{postTypes:l,taxonomies:a}=A(p=>{const{getEntityRecords:u}=p(U),f=u("root","postType",e),i=u("root","taxonomy",t);if(!i)return{postTypes:f,taxonomies:i};for(const v of i)o[v.slug]=u("taxonomy",v.slug);return{postTypes:f,taxonomies:i}},[e,t,o]),r=["attachment"],s=[],c=l?.filter(({viewable:p,slug:u})=>p&&!r.includes(u));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const d={};for(const p of c){const u=a?.filter(({types:f,slug:i})=>f.includes(p.slug)&&!s.includes(i));u&&(d[p.slug]=u.map(f=>{const i=o?.[f.slug]??null;return{...f,terms:i}}))}return{filteredPostTypes:c,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function lt({list:e,containerClassName:t,renderItem:o}){return j(P,{children:[m("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),m("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(l=>o({listItem:l,buttonProps:{type:"button",className:`custom-multiple-select-list-item${l.isSelected?" is-selected":""}`}}))})]})}function Ce(e){return e.indexOf("data:image/svg+xml,")===0}function je(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function Se(e){return e.indexOf("dashicons-")===0}function Ne({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return m("div",{className:"menu-icon","aria-hidden":"true",children:m("br",{})});if(Ce(e))return m("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:m("br",{})});if(je(e))return m("img",{src:new URL(e).toString(),alt:""});if(Se(e)){const t=e.replace("dashicons-","");return m(re,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const at={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function rt(){const[e,t,o,l]=L("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),a={};if(l&&o&&o.length>0)for(const r of o)a[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)a[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)a[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:a}}function Te({colours:e,attributesDefinition:t,attributes:o,setAttributes:l}){return(0,n.jsx)(g.__experimentalToolsPanel,{label:(0,_.__)("Custom colours","launchpad"),resetAll:a=>{if(a)for(const r of a)r()},children:(0,n.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(a=>(0,n.jsx)(Ie,{colour:a,attributesDefinition:t,attributes:o,setAttributes:l},a.attributeName))})})}function Ie({colour:e,attributesDefinition:t,attributes:o,setAttributes:l}){const[a,r,s,c,d]=(0,h.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),p=()=>t[e.attributeName]?.default!==o[e.attributeName],u=()=>{l({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=(0,C.useRef)(null);return(0,n.jsx)(g.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:u,hasValue:p,onDeselect:u,label:e.label,isShownByDefault:!0,children:(0,n.jsx)(g.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:v})=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(g.Button,{ref:f,__next40pxDefaultSize:!0,onClick:v,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,n.jsx)(g.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,n.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,n.jsx)(g.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,n.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,n.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,n.jsx)(g.ColorPalette,{colors:[...a&&a?.length>0?[{name:"User",colors:a}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...c&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:o[e.attributeName],onChange:i=>{l({[e.attributeName]:i})},disableCustomColors:!d})})})})})},e.attributeName)}function st({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:l}){const[a,r,s]=L("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=r?.map(({name:i,ratio:v})=>({label:i,value:v}))??[],d=a?.map(({name:i,ratio:v})=>({label:i,value:v}))??[],p=[{label:W("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?d:[],...c||[],{label:W("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[u,f]=F(p.map(i=>i.value).includes(e)?e:"custom");return j(P,{children:[m(se,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:k("Aspect ratio","launchpad-blocks"),options:p,value:u,onChange:i=>{f(i),i!=="custom"&&t(i)}}),u==="custom"?m(V,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:k("Custom aspect ratio","launchpad-blocks"),help:k("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&l!==void 0?j(ie,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:k("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&l(i)},value:o,children:[m(E,{label:"Cover",value:"cover"}),m(E,{label:"Contain",value:"contain"})]}):null]})}const Be=(e,t,o,l)=>{const{getBlocksByName:a,getBlockAttributes:r,getBlockParentsByBlockName:s}=de($);return a(l).some(d=>{if(s(d,"core/template-part",!0).length)return!1;const{[o]:p}=r(d);return e!==d&&t===p})};function it(e,t,o,l,a){const{[t]:r}=e,s=ve(d=>Be(o,d,t,a),[o,t,a]);return we(()=>{if(r===""){const d=o.slice(0,o.indexOf("-"));l({[t]:d})}if(s(r)){const d=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${d}`),l({[t]:d})}},[r,o,l,s,t]),T(()=>function({label:p,help:u,onValidChange:f,idAttribute:i}){const[v,R]=F(i);return m(V,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:p,help:typeof u=="function"?u(!s(v)):u,value:v,onChange:y=>{R(y),s(y)||f(y)}})},[s])}function ct({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return m(ce,{label:k("Change title heading element","launchpad-blocks"),icon:J(t),controls:e.map(l=>{{const a=l===t;return{icon:J(l),title:ze(l),isDisabled:a,onClick:()=>o(l)}}})})}function ze(e){switch(e){case"h2":return k("Heading 2","launchpad-blocks");case"h3":return k("Heading 3","launchpad-blocks");case"h4":return k("Heading 4","launchpad-blocks");case"h5":return k("Heading 5","launchpad-blocks");case"h6":return k("Heading 6","launchpad-blocks");case"p":return k("Paragraph","launchpad-blocks")}}function J(e){switch(e){case"h2":return me;case"h3":return he;case"h4":return ge;case"h5":return fe;case"h6":return be;case"p":return xe}}function ut(e){const{hasChildren:t}=A(o=>{const{getBlocks:l}=o($);return{hasChildren:l(e).length>0}},[e]);return t}function dt({clientId:e,blockInfo:t,variations:o,allowSkip:l}){const{replaceInnerBlocks:a,updateBlockAttributes:r}=pe($);return j(ue,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[m("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":k("Block variations"),children:o.map(s=>j("li",{children:[m(G,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?m(Ne,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&r(e,s.attributes),s.innerBlocks&&a(e,ae(s.innerBlocks),!1)}}),m("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),l&&m("div",{className:"block-editor-block-variation-picker__skip",children:m(G,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{a(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:k("Skip")})})]})}function pt({imageId:e,className:t="",size:o="full"}){const l=A(r=>typeof e=="number"&&e>0?r(U).getEntityRecord?.("postType","attachment",e):void 0,[e]);return l?m(P,{children:m("img",{...(()=>{const r={src:l.source_url,className:`attachment-${o} size-${o} ${t}`,width:l.media_details.width,height:l.media_details.height,srcSet:""};return l.media_details?.sizes?.[o]&&(r.src=l.media_details.sizes[o].source_url,r.width=l.media_details.sizes[o].width,r.height=l.media_details.sizes[o].height),r.srcSet=Object.entries(l.media_details.sizes??{}).map(([s,c])=>`${c.source_url} ${c.width}w`).join(", "),r})(),alt:l.alt_text||""})}):null}function Pe(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Pe(o))):t.push([]),t}function mt(e){const t=ke(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const a=e()?.scrollHeight??0;if(a){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${a}px !important`)}else t.current.style.minHeight=""}},1)}}var $e=w(7749),K=w.n($e);const Ae=[],De=window.wp.hooks,X=window.wp.element;function Re({icon:e,size:t=24,...o},l){return(0,X.cloneElement)(e,{width:t,height:t,...o,ref:l})}const Me=(0,X.forwardRef)(Re),I=window.wp.primitives,Oe=(0,n.jsx)(I.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(I.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),He=(0,n.jsx)(I.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(I.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),Le={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,_.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,_.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,_.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,_.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0},lightbox:{title:(0,_.__)("Lightbox","launchpad-blocks")}},Ve={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,t)=>(0,n.jsx)(H,{iconName:e,isEditorMode:!0,...t}),availableIcons:Object.fromEntries(Object.entries(Le).filter(([e,t])=>t.makeAvailableToUser===!0))}};function Z(){return(0,De.applyFilters)("launchpadBlocks.icons",{...Ve})}function Q({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:t,onIconSelect:o,onReset:l}){const a=Z(),[r,s]=(0,C.useState)("");return(0,n.jsxs)(g.Panel,{children:[(0,n.jsxs)(g.PanelHeader,{children:[e," ",l?(0,n.jsx)(g.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{l()},size:"small",children:"Reset"}):null]}),(0,n.jsxs)(g.PanelBody,{children:[(0,n.jsx)(g.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:r,onChange:c=>{s(c)}}),(0,n.jsx)("div",{children:Object.entries(a).map(([c,d])=>{if(Object.keys(d.availableIcons).length===0)return null;const p=Object.entries(d.availableIcons).filter(([u,{title:f}])=>!!(u.includes(r)||f.includes(r)));return(0,n.jsx)(Ee,{name:d.name,iconCount:p.length,children:(0,n.jsx)("div",{className:`icon-select ${c}-icon-select`,children:p.map(([u,{title:f}])=>{const i=t.iconName===u&&t.library===c;return(0,n.jsx)("button",{className:`icon-select-icon ${c}-icon-select-icon ${c}-icon-select-icon-${u}${i?" is-selected":""}`,onClick:()=>{o({iconName:u,library:c})},title:f,children:d.renderIcon(u)},u)})})},c)})})]})]})}function Ee({name:e,iconCount:t,children:o}){const[l,a]=(0,C.useState)(!1);return(0,C.useEffect)(()=>{t===0&&l&&a(!1)},[l,t]),(0,n.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,n.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,n.jsxs)(g.Button,{type:"button","aria-expanded":l,onClick:()=>{t>0&&a(!l)},disabled:t===0,className:"icon-select-group-accordion-header-button",children:[(0,n.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,n.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:t}),(0,n.jsx)(Me,{className:"icon-select-group-accordion-arrow",icon:l?Oe:He})]})}),l?o:null]})}const D={prevText:{type:"string",default:"Go to previous slide"},nextText:{type:"string",default:"Go to next slide"},prevVisualText:{type:"string",default:"Previous"},nextVisualText:{type:"string",default:"Next"},shouldShowTextVisually:{type:"boolean",default:!0},backgroundColour:{type:"string",default:"black"},iconColour:{type:"string",default:"white"},prevIcon:{type:"object",default:{iconName:"chevron-left",library:"launchpad-blocks"}},nextIcon:{type:"object",default:{iconName:"chevron-right",library:"launchpad-blocks"}}};function Y({clientId:e,attributes:t,setAttributes:o,context:l,isSelected:a}){const{prevText:r,nextText:s,prevVisualText:c,nextVisualText:d,shouldShowTextVisually:p,backgroundColour:u,iconColour:f,prevIcon:i,nextIcon:v,className:R}=t,y=l["launchpad-blocks/currentlySelectedSlide"],ee=l["launchpad-blocks/carouselSlides"]!==void 0&&l["launchpad-blocks/carouselSlides"].length>0?l["launchpad-blocks/carouselSlides"].length:l["launchpad-blocks/carouselImages"].length,Je=(0,z.useSelect)(b=>b(h.store).hasSelectedInnerBlock(e,!0),[e]),{updateBlockAttributes:te}=(0,z.useDispatch)(h.store),{parentCarouselClientId:B}=(0,z.useSelect)(b=>{const{getBlockParentsByBlockName:Ye}=b(h.store);return{parentCarouselClientId:Ye(e,"launchpad-blocks/carousel").at(-1)}},[e]),Ke=(0,h.useBlockProps)({style:{"--background-colour":u,"--icon-colour":f}}),Xe=!R?.includes("is-style-overlay")&&(a||Je),{children:Ze,...Qe}=(0,h.useInnerBlocksProps)(Ke,{orientation:"horizontal",renderAppender:Xe?h.InnerBlocks.ButtonBlockAppender:()=>null}),ne=Z();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.InspectorControls,{group:"styles",children:(0,n.jsx)(Te,{colours:[{attributeName:"backgroundColour",label:"Background colour"},{attributeName:"iconColour",label:"Icon colour"}],attributes:t,attributesDefinition:D,setAttributes:o})}),(0,n.jsxs)(h.InspectorControls,{children:[(0,n.jsxs)(g.Panel,{children:[(0,n.jsx)(g.PanelBody,{children:(0,n.jsx)(g.ToggleControl,{__nextHasNoMarginBottom:!0,label:"Show text labels in buttons",onChange:b=>{o({shouldShowTextVisually:b})},checked:p})}),(0,n.jsxs)(g.PanelBody,{title:"Accessibility",children:[(0,n.jsx)(g.TextControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Previous button screen reader label",onChange:b=>{o({prevText:b})},value:r}),(0,n.jsx)(g.TextControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Next button screen reader label",onChange:b=>{o({nextText:b})},value:s})]})]}),(0,n.jsx)(Q,{iconSelectHeader:"Previous icon",dataOnSelectedIcon:i,onIconSelect:b=>{o({prevIcon:b})},onReset:()=>{o({prevIcon:D.prevIcon.default})}}),(0,n.jsx)(Q,{iconSelectHeader:"Next icon",dataOnSelectedIcon:v,onIconSelect:b=>{o({nextIcon:b})},onReset:()=>{o({nextIcon:D.nextIcon.default})}})]}),(0,n.jsx)("div",{...Qe,children:(0,n.jsxs)("div",{className:"carousel-navigation-arrows-container",children:[(0,n.jsxs)("button",{className:`carousel-navigation-button${p?" has-text":""}`,onClick:()=>{B&&te(B,{currentlySelectedSlide:y>0?y-1:ee-1})},children:[ne[i.library]?.renderIcon(i.iconName,{className:"carousel-navigation-button-icon"}),p?(0,n.jsx)(h.RichText,{identifier:"prevVisualText",tagName:"span",onChange:b=>{o({prevVisualText:b})},value:c,placeholder:(0,_.__)("Previous","launchpad-blocks")}):null]}),(0,n.jsx)("div",{className:"carousel-navigation-inner-area",children:Ze}),(0,n.jsxs)("button",{className:`carousel-navigation-button${p?" has-text":""}`,onClick:()=>{B&&te(B,{currentlySelectedSlide:y<ee-1?y+1:0})},children:[p?(0,n.jsx)(h.RichText,{identifier:"nextVisualText",tagName:"span",onChange:b=>{o({nextVisualText:b})},value:d,placeholder:(0,_.__)("Next","launchpad-blocks")}):null,ne[v.library]?.renderIcon(v.iconName,{className:"carousel-navigation-button-icon"})]})]})})]})}Y.displayName="CarouselNavigationArrowsEdit";function Ge({hasInnerBlocks:e}){return e?We:Ue}function Ue(){return null}function We(){return(0,n.jsx)(h.InnerBlocks.Content,{})}const Fe={from:[],to:[]},qe=[],ft={},bt=null;(0,x.registerBlockType)(K().name,{icon:(0,n.jsx)(H,{iconName:"carousel-navigation-arrows"}),deprecated:Ae,edit:Y,save:Ge({hasInnerBlocks:!0}),transforms:Fe}),_e(),qe.forEach(e=>{(0,x.registerBlockVariation)(K().name,e)})})(),N})());
