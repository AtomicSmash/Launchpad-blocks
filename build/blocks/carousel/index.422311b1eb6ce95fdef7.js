(function(j,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var S=x();for(var n in S)(typeof exports=="object"?exports:j)[n]=S[n]}})(globalThis,()=>(()=>{var D={4615(n){n.exports={apiVersion:3,name:"launchpad-blocks/carousel",title:"Carousel",category:"theme",description:"",textdomain:"launchpad-blocks",allowedBlocks:["launchpad-blocks/carousel-slides","launchpad-blocks/carousel-content-slides","launchpad-blocks/carousel-thumbnails","launchpad-blocks/carousel-navigation-arrows","launchpad-blocks/carousel-dots","launchpad-blocks/carousel-slide-count","launchpad-blocks/lightbox"],keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{images:{type:"array",default:[]},shouldLoop:{type:"boolean",default:!0},shouldLinkSlidesToLightbox:{type:"boolean",default:!1},slides:{type:"array",default:[]},currentlySelectedSlide:{type:"number",default:0,role:"local"},externallyControlledCarousel:{type:"boolean",default:!1}},providesContext:{"launchpad-blocks/carouselImages":"images","launchpad-blocks/carouselSlides":"slides","launchpad-blocks/shouldLinkSlidesToLightbox":"shouldLinkSlidesToLightbox","launchpad-blocks/currentlySelectedSlide":"currentlySelectedSlide"},usesContext:["launchpad-blocks/carouselImages","launchpad-blocks/carouselSlides","launchpad-blocks/externallyControlledCarousel"],supports:{align:!0}}}},j={};function x(n){var m=j[n];if(m!==void 0)return m.exports;var g=j[n]={exports:{}};return D[n](g,g.exports,x),g.exports}x.n=n=>{var m=n&&n.__esModule?()=>n.default:()=>n;return x.d(m,{a:m}),m},x.d=(n,m)=>{for(var g in m)x.o(m,g)&&!x.o(n,g)&&Object.defineProperty(n,g,{enumerable:!0,get:m[g]})},x.o=(n,m)=>Object.prototype.hasOwnProperty.call(n,m);var S={};return(()=>{"use strict";const n=window.ReactJSXRuntime,m=window.wp.blocks,g=window.wp.blockEditor,w=window.wp.components,Ze=window.wp.coreData,z=window.wp.data,I=window.wp.i18n,B=window.React;var R;function Je(e){return R("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:R("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function te(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,n.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,n.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,n.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const oe=(0,B.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:l,size:s,isEditorMode:a=!1,...r}=o;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...r,children:(0,n.jsx)("use",{href:`${a?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${l}`})})}}});function _(e){return(0,n.jsx)(B.Suspense,{fallback:null,children:(0,n.jsx)(oe,{...e})})}var C,N,c,$,O,ne,le,se,ae,A,re,ie,ce,ue,H,de,F,pe,he,W,G,me,fe,k,V,ge,be,ke,ve,xe,we,P,q,U,_e,ye;function Ce(){(0,m.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:te})}function X(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Ye(e,t,o){const l=t.spacing?.blockGap;let s="none";if(l===!0)s="both";else if(Array.isArray(l)){const r=l.includes("horizontal"),p=l.includes("vertical");r&&p?s="both":r?s="horizontal":p&&(s="vertical")}const a={columnGap:s==="both"||s==="horizontal"?X(o?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?X(o?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:a};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...a}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...a}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...a}};default:return{className:`is-layout-${e.type}`,style:{...a}}}}function je(e,t){return e.reduce((o,l)=>{if(l.name===t)o.push(l);else if(l.innerBlocks){const s=je(l.innerBlocks,t);s&&o.push(...s)}return o},[])}const Ke=()=>{const e=P(()=>({per_page:-1}),[]),t=P(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=P(()=>({}),[]),{postTypes:l,taxonomies:s}=G(f=>{const{getEntityRecords:h}=f(W),b=h("root","postType",e),i=h("root","taxonomy",t);if(!i)return{postTypes:b,taxonomies:i};for(const v of i)o[v.slug]=h("taxonomy",v.slug);return{postTypes:b,taxonomies:i}},[e,t,o]),a=["attachment"],r=[],p=l?.filter(({viewable:f,slug:h})=>f&&!a.includes(h));if(!p||p.length===0)return{postTypes:p,taxonomies:void 0};const d={};for(const f of p){const h=s?.filter(({types:b,slug:i})=>b.includes(f.slug)&&!r.includes(i));h&&(d[f.slug]=h.map(b=>{const i=o?.[b.slug]??null;return{...b,terms:i}}))}return{filteredPostTypes:p,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Qe({list:e,containerClassName:t,renderItem:o}){return C(N,{children:[c("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),c("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(l=>o({listItem:l,buttonProps:{type:"button",className:`custom-multiple-select-list-item${l.isSelected?" is-selected":""}`}}))})]})}function Se(e){return e.indexOf("data:image/svg+xml,")===0}function Be(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function Ne(e){return e.indexOf("dashicons-")===0}function Z({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return(0,n.jsx)("div",{className:"menu-icon","aria-hidden":"true",children:(0,n.jsx)("br",{})});if(Se(e))return(0,n.jsx)("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:(0,n.jsx)("br",{})});if(Be(e))return(0,n.jsx)("img",{src:new URL(e).toString(),alt:""});if(Ne(e)){const t=e.replace("dashicons-","");return(0,n.jsx)(w.Dashicon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const et={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function tt(){const[e,t,o,l]=$("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),s={};if(l&&o&&o.length>0)for(const a of o)s[a.slug]={color:a.color,name:a.name};if(t&&t?.length>0)for(const a of t)s[a.slug]={color:a.color,name:a.name};if(e&&e?.length>0)for(const a of e)s[a.slug]={color:a.color,name:a.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:s}}function ot({colours:e,attributesDefinition:t,attributes:o,setAttributes:l}){return c(le,{label:k("Custom colours","launchpad"),resetAll:s=>{if(s)for(const a of s)a()},children:c("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>c(Pe,{colour:s,attributesDefinition:t,attributes:o,setAttributes:l},s.attributeName))})})}function Pe({colour:e,attributesDefinition:t,attributes:o,setAttributes:l}){const[s,a,r,p,d]=$("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),f=()=>t[e.attributeName]?.default!==o[e.attributeName],h=()=>{l({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=q(null);return c(se,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:h,hasValue:f,onDeselect:h,label:e.label,isShownByDefault:!0,children:c(ae,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:v})=>c(N,{children:c(A,{ref:b,__next40pxDefaultSize:!0,onClick:v,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:C("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[c(re,{colorValue:o[e.attributeName]})," ",c("span",{children:e.label})]})})}),renderContent:()=>c(ie,{paddingSize:"none",children:c("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:c("div",{className:"block-editor-color-gradient-control__panel",children:c(ce,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...a&&a?.length>0?[{name:"Theme",colors:a}]:[],...p&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:o[e.attributeName],onChange:i=>{l({[e.attributeName]:i})},disableCustomColors:!d})})})})})},e.attributeName)}function nt({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:l}){const[s,a,r]=$("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),p=a?.map(({name:i,ratio:v})=>({label:i,value:v}))??[],d=s?.map(({name:i,ratio:v})=>({label:i,value:v}))??[],f=[{label:V("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?d:[],...p||[],{label:V("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[h,b]=U(f.map(i=>i.value).includes(e)?e:"custom");return C(N,{children:[c(ue,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:k("Aspect ratio","launchpad-blocks"),options:f,value:h,onChange:i=>{b(i),i!=="custom"&&t(i)}}),h==="custom"?c(H,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:k("Custom aspect ratio","launchpad-blocks"),help:k("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&l!==void 0?C(de,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:k("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&l(i)},value:o,children:[c(F,{label:"Cover",value:"cover"}),c(F,{label:"Contain",value:"contain"})]}):null]})}const Te=(e,t,o,l)=>{const{getBlocksByName:s,getBlockAttributes:a,getBlockParentsByBlockName:r}=me(O);return s(l).some(d=>{if(r(d,"core/template-part",!0).length)return!1;const{[o]:f}=a(d);return e!==d&&t===f})};function lt(e,t,o,l,s){const{[t]:a}=e,r=_e(d=>Te(o,d,t,s),[o,t,s]);return ye(()=>{if(a===""){const d=o.slice(0,o.indexOf("-"));l({[t]:d})}if(r(a)){const d=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${a}. New value: ${d}`),l({[t]:d})}},[a,o,l,r,t]),P(()=>function({label:f,help:h,onValidChange:b,idAttribute:i}){const[v,T]=U(i);return c(H,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:f,help:typeof h=="function"?h(!r(v)):h,value:v,onChange:y=>{T(y),r(y)||b(y)}})},[r])}function st({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return c(pe,{label:k("Change title heading element","launchpad-blocks"),icon:J(t),controls:e.map(l=>{{const s=l===t;return{icon:J(l),title:ze(l),isDisabled:s,onClick:()=>o(l)}}})})}function ze(e){switch(e){case"h2":return k("Heading 2","launchpad-blocks");case"h3":return k("Heading 3","launchpad-blocks");case"h4":return k("Heading 4","launchpad-blocks");case"h5":return k("Heading 5","launchpad-blocks");case"h6":return k("Heading 6","launchpad-blocks");case"p":return k("Paragraph","launchpad-blocks")}}function J(e){switch(e){case"h2":return ge;case"h3":return be;case"h4":return ke;case"h5":return ve;case"h6":return xe;case"p":return we}}function Ie(e){const{hasChildren:t}=(0,z.useSelect)(o=>{const{getBlocks:l}=o(g.store);return{hasChildren:l(e).length>0}},[e]);return t}function at({clientId:e,blockInfo:t,variations:o,allowSkip:l}){const{replaceInnerBlocks:s,updateBlockAttributes:a}=fe(O);return C(he,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[c("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":k("Block variations"),children:o.map(r=>C("li",{children:[c(A,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?c(Z,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&a(e,r.attributes),r.innerBlocks&&s(e,ne(r.innerBlocks),!1)}}),c("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),l&&c("div",{className:"block-editor-block-variation-picker__skip",children:c(A,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),a(e,{hasDismissedVariationsSelector:!0})},children:k("Skip")})})]})}function rt({imageId:e,className:t="",size:o="full"}){const l=G(a=>typeof e=="number"&&e>0?a(W).getEntityRecord?.("postType","attachment",e):void 0,[e]);return l?c(N,{children:c("img",{...(()=>{const a={src:l.source_url,className:`attachment-${o} size-${o} ${t}`,width:l.media_details.width,height:l.media_details.height,srcSet:""};return l.media_details?.sizes?.[o]&&(a.src=l.media_details.sizes[o].source_url,a.width=l.media_details.sizes[o].width,a.height=l.media_details.sizes[o].height),a.srcSet=Object.entries(l.media_details.sizes??{}).map(([r,p])=>`${p.source_url} ${p.width}w`).join(", "),a})(),alt:l.alt_text||""})}):null}function $e(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>$e(o))):t.push([]),t}function it(e){const t=q(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const s=e()?.scrollHeight??0;if(s){const a=t.current.style;a.minHeight="",t.current.setAttribute("style",`${a.cssText}min-height: ${s}px !important`)}else t.current.style.minHeight=""}},1)}}var Ae=x(4615),Y=x.n(Ae);const Ee=[],Le=window.wp.hooks;function ct(e){if(e===void 0)throw new Error(`Pixel value ${e} is undefined`);if(!e.endsWith("px"))throw new Error(`Pixel value ${e} is not a pixel value`);if(e.includes(" "))throw new Error(`Pixel value ${e} contains multiple values`);return Number(e.replace("px",""))}function ut(e){let t="";const o=document.createElement("div");return o.innerHTML=e,t=o.innerText,Me(t)}function Me(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|(?<!-)-+$/g,"")}function De(e,t=()=>!0){const o=e.parentElement;return o===null?null:t(o)?o:De(o,t)}function dt(e){if(new RegExp("ms$","ig").test(e))return Number(e.substring(0,e.length-2));if(new RegExp("s$","ig").test(e))return Number(e.substring(0,e.length-1))*1e3;throw new Error("Time didn't end with ms or s so was not correctly parsed.")}function pt(){if(typeof document>"u")return"unknown";const e=window.navigator.userAgent;let t="unknown";return e.search("Windows")!==-1?t="Windows":e.search("Mac")!==-1?t="MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?t="UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1&&(t="Linux"),t}function E(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(!Object.entries(e[o]).every(([s,a])=>Array.isArray(a)?E(a,t[o]?.[s]):t[o]?.[s]===a))return!1;return!0}const K=window.wp.primitives,Re=(0,n.jsx)(K.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(K.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})}),mt=[{name:"core/image",attributes:{id:237,url:"https://picsum.photos/id/237/260/180"}},{name:"core/image",attributes:{id:433,url:"https://picsum.photos/id/433/260/180"}},{name:"core/image",attributes:{id:582,url:"https://picsum.photos/id/582/260/180"}},{name:"core/image",attributes:{id:593,url:"https://picsum.photos/id/593/260/180"}},{name:"core/image",attributes:{id:943,url:"https://picsum.photos/id/943/260/180"}},{name:"core/image",attributes:{id:1024,url:"https://picsum.photos/id/1024/260/180"}}],Q=[{name:"basic",title:"Simple carousel",icon:(0,n.jsx)(_,{isEditorMode:!0,iconName:"carousel"}),description:"A basic carousel for viewing images.",attributes:null,baseInnerBlocks:[["launchpad-blocks/carousel-slides"]],addFunctionalInnerBlocks:null},{name:"image-pop-up",title:"Expandable image carousel",icon:(0,n.jsx)(_,{isEditorMode:!0,iconName:"lightbox"}),description:"A carousel which opens in a full screen pop-up on click.",attributes:{shouldLinkSlidesToLightbox:!0},baseInnerBlocks:[["launchpad-blocks/carousel-slides"]],addFunctionalInnerBlocks:e=>[...e,["launchpad-blocks/lightbox",{},[["launchpad-blocks/carousel",{lock:{move:!0,remove:!0}},[["launchpad-blocks/carousel-slides",{shouldPullImagesFromContext:!0,lock:{move:!0,remove:!0}}],["launchpad-blocks/carousel-navigation-arrows",{className:"is-style-overlay",shouldShowTextVisually:!1,lock:{move:!1,remove:!0}}]]]]]]},{name:"block-slides",title:"Block based slides",icon:Re,description:"Advanced users only. Create slides out of blocks.",attributes:null,baseInnerBlocks:[["launchpad-blocks/carousel-content-slides",{aspectRatio:"16/9"},[["launchpad-blocks/carousel-content-slide",{backgroundOrOverlayColour:"rgb(0 0 0)",style:{background:{backgroundImage:{url:"https://picsum.photos/id/237/1600/900"},backgroundSize:"cover"}}},[["launchpad-blocks/carousel-content-slide-content",{},[["core/heading",{placeholder:"Your template"}],["core/paragraph",{placeholder:'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.'}]]]]]]]],addFunctionalInnerBlocks:null}],Oe=[{name:"skip",title:"This variation is set when you hit skip. this title is not seen.",icon:null,addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows"]]},{name:"overlay",title:"Overlaid arrows",icon:(0,n.jsx)(_,{isEditorMode:!0,iconName:"carousel-navigation-arrows"}),addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows",{shouldShowTextVisually:!1,className:"is-style-overlay"}]]},{name:"with-dots",title:"Arrows and dots",icon:(0,n.jsx)(_,{isEditorMode:!0,iconName:"carousel-dots"}),addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows",{},[["launchpad-blocks/carousel-dots"]]]]},{name:"with-slide-count",title:"Arrows and slide count",icon:(0,n.jsx)(_,{isEditorMode:!0,iconName:"carousel-slide-count"}),addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows",{},[["launchpad-blocks/carousel-slide-count",{layout:{type:"flex",flexWrap:"wrap",justifyContent:"center"}}]]]]},{name:"with-thumbnails",title:"Arrows and thumbnails",icon:(0,n.jsx)(_,{isEditorMode:!0,iconName:"carousel-thumbnails"}),addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows",{},[["launchpad-blocks/carousel-thumbnails"]]]]}],L=[...Q.map(e=>{const t=[];for(const o of Oe){let l=o.addNavigationInnerBlocks(e.baseInnerBlocks);e.addFunctionalInnerBlocks&&(l=e.addFunctionalInnerBlocks(l));const s={name:`${e.name}-${o.name}`,title:`${e.title} - ${o.title}`,icon:o.icon??void 0,scope:[],innerBlocks:l};e.attributes&&(s.attributes=e.attributes),t.push(s)}return t}).flat()];function ee({clientId:e,attributes:t,setAttributes:o,context:l}){const{shouldLoop:s,images:a,slides:r,shouldLinkSlidesToLightbox:p}=t,d=(0,g.useBlockProps)({"data-launchpad-carousel":"","data-loop":s?"true":"false","data-has-lightbox":p?"true":"false"}),{children:f,...h}=(0,g.useInnerBlocksProps)(d,{template:[["launchpad-blocks/carousel-slides"]]}),{shouldGetSlidesFromContext:b}=(0,z.useSelect)(u=>{const{getBlocks:M}=u(g.store);return{shouldGetSlidesFromContext:M(e).find(Xe=>Xe.name==="launchpad-blocks/carousel-slides")?.attributes?.shouldPullImagesFromContext??!1}},[e]),{replaceInnerBlocks:i,updateBlockAttributes:v}=(0,z.useDispatch)(g.store);(0,B.useEffect)(()=>{b&&(l["launchpad-blocks/carouselImages"]!==void 0&&!E(l["launchpad-blocks/carouselImages"],a)&&o({images:l["launchpad-blocks/carouselImages"]}),l["launchpad-blocks/carouselSlides"]!==void 0&&!E(l["launchpad-blocks/carouselSlides"],r)&&o({slides:l["launchpad-blocks/carouselSlides"]}))},[l,a,r,o,b]);const T=(0,Le.applyFilters)("launchpadBlocks.carouselFunctionalityVariations",Q);if(!He(T))throw new Error("Filtering of functionality variations has broken the variations. Please fix the filters to continue.");const[y,qe]=(0,B.useState)(null),Ue=Ie(e);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.InspectorControls,{children:(0,n.jsx)(w.Panel,{children:(0,n.jsx)(w.PanelBody,{children:(0,n.jsx)(w.ToggleControl,{__nextHasNoMarginBottom:!0,checked:s,label:"Should your carousel loop round if you are at the end and you navigate the slide again.",onChange:u=>{o({shouldLoop:u})}})})})}),(0,n.jsx)("div",{...h,children:Ue?f:y===null?(0,n.jsx)(w.Placeholder,{icon:(0,n.jsx)(_,{isEditorMode:!0,iconName:"carousel"}),label:"Carousel - Pick functionality",instructions:"Please choose the core functionality of the carousel.",children:(0,n.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,I.__)("Carousel functionality variations","launchpad-blocks"),children:T.map(u=>(0,n.jsx)("li",{children:(0,n.jsx)(w.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation block-editor-block-variation-picker__variation--wide",icon:u.icon,iconSize:48,onClick:()=>{qe(u.name)},children:(0,n.jsxs)("div",{className:"block-editor-block-variation-picker__variation-text-group",children:[(0,n.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:(0,n.jsx)("strong",{children:u.title})}),(0,n.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:u.description})]})})},u.name))})}):(0,n.jsxs)(w.Placeholder,{icon:(0,n.jsx)(_,{isEditorMode:!0,iconName:"carousel"}),label:"Carousel - Pick navigation",instructions:"Please choose how you'd like to navigate between different slides.",children:[(0,n.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,I.__)("Block variations"),children:L.filter(u=>u.name.startsWith(y)&&!u.name.endsWith("skip")).map(u=>(0,n.jsxs)("li",{children:[(0,n.jsx)(w.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof u.icon=="string"?(0,n.jsx)(Z,{iconString:u.icon}):u.icon,iconSize:48,onClick:()=>{u.attributes&&v(e,u.attributes),u.innerBlocks&&i(e,(0,m.createBlocksFromInnerBlocksTemplate)(u.innerBlocks),!1)}}),(0,n.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:u.title.split(" - ").at(-1)})]},u.name))}),(0,n.jsx)("div",{className:"block-editor-block-variation-picker__skip",children:(0,n.jsx)(w.Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{const u=L.find(M=>M.name===`${y}-skip`);u?.attributes&&v(e,u.attributes),u?.innerBlocks&&i(e,(0,m.createBlocksFromInnerBlocksTemplate)(u.innerBlocks),!1)},children:(0,I.__)("Skip")})})]})})]})}ee.displayName="CarouselEdit";function He(e){return Array.isArray(e)&&e.every(t=>typeof t=="object"&&t!==null&&"name"in t&&"title"in t&&"icon"in t&&"description"in t&&"attributes"in t&&"baseInnerBlocks"in t&&"addFunctionalInnerBlocks"in t)}function Fe({hasInnerBlocks:e}){return e?Ge:We}function We(){return null}function Ge(){return(0,n.jsx)(g.InnerBlocks.Content,{})}const Ve={from:[],to:[]},ft={"launchpad-blocks/carouselImages":"images","launchpad-blocks/carouselSlides":"slides","launchpad-blocks/shouldLinkSlidesToLightbox":"shouldLinkSlidesToLightbox","launchpad-blocks/currentlySelectedSlide":"currentlySelectedSlide"},gt=null;(0,m.registerBlockType)(Y().name,{icon:(0,n.jsx)(_,{iconName:"carousel"}),deprecated:Ee,edit:ee,save:Fe({hasInnerBlocks:!0}),transforms:Ve}),Ce(),L.forEach(e=>{(0,m.registerBlockVariation)(Y().name,e)})})(),S})());
