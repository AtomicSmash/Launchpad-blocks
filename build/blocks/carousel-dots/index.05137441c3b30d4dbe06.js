(function(_,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var w=g();for(var i in w)(typeof exports=="object"?exports:_)[i]=w[i]}})(globalThis,()=>(()=>{var P={3374(i){i.exports={apiVersion:3,name:"launchpad-blocks/carousel-dots",title:"Carousel dots",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{},providesContext:{},usesContext:["launchpad-blocks/carouselImages","launchpad-blocks/carouselSlides","launchpad-blocks/currentlySelectedSlide"],example:{viewportWidth:1200},supports:{}}}},_={};function g(i){var m=_[i];if(m!==void 0)return m.exports;var b=_[i]={exports:{}};return P[i](b,b.exports,g),b.exports}g.n=i=>{var m=i&&i.__esModule?()=>i.default:()=>i;return g.d(m,{a:m}),m},g.d=(i,m)=>{for(var b in m)g.o(m,b)&&!g.o(i,b)&&Object.defineProperty(i,b,{enumerable:!0,get:m[b]})},g.o=(i,m)=>Object.prototype.hasOwnProperty.call(i,m);var w={};return(()=>{"use strict";const i=window.ReactJSXRuntime,m=window.wp.blocks,b=window.wp.blockEditor,De=window.wp.components,Ie=window.wp.coreData,N=window.wp.data,Ae=window.wp.i18n,T=window.React;var D;function Re(e){return D("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:D("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function W(e){return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,i.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,i.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,i.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const q=(0,T.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:l,isEditorMode:r=!1,...s}=o;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...s,children:(0,i.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function F(e){return(0,i.jsx)(T.Suspense,{fallback:null,children:(0,i.jsx)(q,{...e})})}var k,y,a,S,j,U,J,X,Z,K,z,Q,Y,ee,te,I,oe,A,ne,re,R,B,le,se,f,M,ae,ie,ce,ue,de,pe,C,O,H,me,he;function fe(){(0,m.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:W})}function E(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Me(e,t,o){const n=t.spacing?.blockGap;let l="none";if(n===!0)l="both";else if(Array.isArray(n)){const s=n.includes("horizontal"),d=n.includes("vertical");s&&d?l="both":s?l="horizontal":d&&(l="vertical")}const r={columnGap:l==="both"||l==="horizontal"?E(o?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?E(o?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function ge(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const l=ge(n.innerBlocks,t);l&&o.push(...l)}return o},[])}const Oe=()=>{const e=C(()=>({per_page:-1}),[]),t=C(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=C(()=>({}),[]),{postTypes:n,taxonomies:l}=B(h=>{const{getEntityRecords:p}=h(R),v=p("root","postType",e),u=p("root","taxonomy",t);if(!u)return{postTypes:v,taxonomies:u};for(const x of u)o[x.slug]=p("taxonomy",x.slug);return{postTypes:v,taxonomies:u}},[e,t,o]),r=["attachment"],s=[],d=n?.filter(({viewable:h,slug:p})=>h&&!r.includes(p));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const c={};for(const h of d){const p=l?.filter(({types:v,slug:u})=>v.includes(h.slug)&&!s.includes(u));p&&(c[h.slug]=p.map(v=>{const u=o?.[v.slug]??null;return{...v,terms:u}}))}return{filteredPostTypes:d,mappedTaxonomies:c===void 0||Object.values(c).length===0?void 0:c}};function He({list:e,containerClassName:t,renderItem:o}){return k(y,{children:[a("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),a("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function be(e){return e.indexOf("data:image/svg+xml,")===0}function ve(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function xe(e){return e.indexOf("dashicons-")===0}function ke({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return a("div",{className:"menu-icon","aria-hidden":"true",children:a("br",{})});if(be(e))return a("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:a("br",{})});if(ve(e))return a("img",{src:new URL(e).toString(),alt:""});if(xe(e)){const t=e.replace("dashicons-","");return a(J,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Ee={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Le(){const[e,t,o,n]=S("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(n&&o&&o.length>0)for(const r of o)l[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)l[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)l[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:l}}function Ge({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return a(X,{label:f("Custom colours","launchpad"),resetAll:l=>{if(l)for(const r of l)r()},children:a("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>a(_e,{colour:l,attributesDefinition:t,attributes:o,setAttributes:n},l.attributeName))})})}function _e({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[l,r,s,d,c]=S("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==o[e.attributeName],p=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},v=O(null);return a(Z,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:h,onDeselect:p,label:e.label,isShownByDefault:!0,children:a(K,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:u,onToggle:x})=>a(y,{children:a(z,{ref:v,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":u,className:`block-editor-panel-color-gradient-settings__dropdown${u?" is-open":""}`,children:k("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[a(Q,{colorValue:o[e.attributeName]})," ",a("span",{children:e.label})]})})}),renderContent:()=>a(Y,{paddingSize:"none",children:a("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:a("div",{className:"block-editor-color-gradient-control__panel",children:a(ee,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...d&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:o[e.attributeName],onChange:u=>{n({[e.attributeName]:u})},disableCustomColors:!c})})})})})},e.attributeName)}function Ve({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[l,r,s]=S("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=r?.map(({name:u,ratio:x})=>({label:u,value:x}))??[],c=l?.map(({name:u,ratio:x})=>({label:u,value:x}))??[],h=[{label:M("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?c:[],...d||[],{label:M("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,v]=H(h.map(u=>u.value).includes(e)?e:"custom");return k(y,{children:[a(te,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:f("Aspect ratio","launchpad-blocks"),options:h,value:p,onChange:u=>{v(u),u!=="custom"&&t(u)}}),p==="custom"?a(I,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:f("Custom aspect ratio","launchpad-blocks"),help:f("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?k(oe,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:f("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:u=>{typeof u=="string"&&["contain","cover"].includes(u)&&n(u)},value:o,children:[a(A,{label:"Cover",value:"cover"}),a(A,{label:"Contain",value:"contain"})]}):null]})}const we=(e,t,o,n)=>{const{getBlocksByName:l,getBlockAttributes:r,getBlockParentsByBlockName:s}=le(j);return l(n).some(c=>{if(s(c,"core/template-part",!0).length)return!1;const{[o]:h}=r(c);return e!==c&&t===h})};function We(e,t,o,n,l){const{[t]:r}=e,s=me(c=>we(o,c,t,l),[o,t,l]);return he(()=>{if(r===""){const c=o.slice(0,o.indexOf("-"));n({[t]:c})}if(s(r)){const c=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${c}`),n({[t]:c})}},[r,o,n,s,t]),C(()=>function({label:h,help:p,onValidChange:v,idAttribute:u}){const[x,Te]=H(u);return a(I,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof p=="function"?p(!s(x)):p,value:x,onChange:$=>{Te($),s($)||v($)}})},[s])}function qe({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return a(ne,{label:f("Change title heading element","launchpad-blocks"),icon:L(t),controls:e.map(n=>{{const l=n===t;return{icon:L(n),title:ye(n),isDisabled:l,onClick:()=>o(n)}}})})}function ye(e){switch(e){case"h2":return f("Heading 2","launchpad-blocks");case"h3":return f("Heading 3","launchpad-blocks");case"h4":return f("Heading 4","launchpad-blocks");case"h5":return f("Heading 5","launchpad-blocks");case"h6":return f("Heading 6","launchpad-blocks");case"p":return f("Paragraph","launchpad-blocks")}}function L(e){switch(e){case"h2":return ae;case"h3":return ie;case"h4":return ce;case"h5":return ue;case"h6":return de;case"p":return pe}}function Fe(e){const{hasChildren:t}=B(o=>{const{getBlocks:n}=o(j);return{hasChildren:n(e).length>0}},[e]);return t}function Ue({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:l,updateBlockAttributes:r}=se(j);return k(re,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[a("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":f("Block variations"),children:o.map(s=>k("li",{children:[a(z,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?a(ke,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&r(e,s.attributes),s.innerBlocks&&l(e,U(s.innerBlocks),!1)}}),a("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),n&&a("div",{className:"block-editor-block-variation-picker__skip",children:a(z,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:f("Skip")})})]})}function Je({imageId:e,className:t="",size:o="full"}){const n=B(r=>typeof e=="number"&&e>0?r(R).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?a(y,{children:a("img",{...(()=>{const r={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(r.src=n.media_details.sizes[o].source_url,r.width=n.media_details.sizes[o].width,r.height=n.media_details.sizes[o].height),r.srcSet=Object.entries(n.media_details.sizes??{}).map(([s,d])=>`${d.source_url} ${d.width}w`).join(", "),r})(),alt:n.alt_text||""})}):null}function Ce(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Ce(o))):t.push([]),t}function Xe(e){const t=O(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}var Se=g(3374),G=g.n(Se);const je=[];function V({clientId:e,context:t}){const o=(0,b.useBlockProps)(),n=t["launchpad-blocks/currentlySelectedSlide"],{updateBlockAttributes:l}=(0,N.useDispatch)(b.store),{parentCarouselClientId:r}=(0,N.useSelect)(d=>{const{getBlockParentsByBlockName:c}=d(b.store);return{parentCarouselClientId:c(e,"launchpad-blocks/carousel").at(-1)}},[e]),s=t["launchpad-blocks/carouselSlides"]!==void 0&&t["launchpad-blocks/carouselSlides"].length>0?t["launchpad-blocks/carouselSlides"].map((d,c)=>({id:d.attributes?.id??c})):t["launchpad-blocks/carouselImages"].map(d=>({id:d.id}));return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{...o,children:s.map(({id:d},c)=>(0,i.jsx)("button",{type:"button",className:`reset carousel-dot-button${c===n?" is-selected":""}`,"data-carousel-slide":c,"aria-label":`Go to slide ${c+1} of ${t["launchpad-blocks/carouselImages"].length}`,onClick:()=>{r&&l(r,{currentlySelectedSlide:c})}},d))})})}V.displayName="CarouselDotsEdit";function ze({hasInnerBlocks:e}){return e?$e:Be}function Be(){return null}function $e(){return(0,i.jsx)(b.InnerBlocks.Content,{})}const Pe={from:[],to:[]},Ne=[],Ze={},Ke=null;(0,m.registerBlockType)(G().name,{icon:(0,i.jsx)(F,{iconName:"carousel-dots"}),deprecated:je,edit:V,save:ze({hasInnerBlocks:!1}),transforms:Pe}),fe(),Ne.forEach(e=>{(0,m.registerBlockVariation)(G().name,e)})})(),w})());
