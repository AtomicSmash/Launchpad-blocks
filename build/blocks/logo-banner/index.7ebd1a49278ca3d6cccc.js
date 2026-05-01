(function(B,w){if(typeof exports=="object"&&typeof module=="object")module.exports=w();else if(typeof define=="function"&&define.amd)define([],w);else{var S=w();for(var a in S)(typeof exports=="object"?exports:B)[a]=S[a]}})(globalThis,()=>(()=>{var M={6149(a){a.exports={apiVersion:3,name:"launchpad-blocks/logo-banner",title:"Logo banner",category:"media",description:"A banner of logos to display, with optional scrolling animation.",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{isScrolling:{type:"boolean",default:!1},shouldAlignBottomRowToLeft:{type:"boolean",default:!1},allowResize:{type:"boolean",default:!1}},providesContext:{allowResize:"allowResize"},usesContext:[],example:{},supports:{align:["wide","full"]}}}},B={};function w(a){var h=B[a];if(h!==void 0)return h.exports;var m=B[a]={exports:{}};return M[a](m,m.exports,w),m.exports}w.n=a=>{var h=a&&a.__esModule?()=>a.default:()=>a;return w.d(h,{a:h}),h},w.d=(a,h)=>{for(var m in h)w.o(h,m)&&!w.o(a,m)&&Object.defineProperty(a,m,{enumerable:!0,get:h[m]})},w.o=(a,h)=>Object.prototype.hasOwnProperty.call(a,h);var S={};return(()=>{"use strict";const a=window.ReactJSXRuntime,h=window.wp.blocks,m=window.wp.blockEditor,z=window.wp.components,We=window.wp.coreData,H=window.wp.data,T=window.wp.i18n,L=window.React;var O;function Fe(e){return O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:O("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function Y(e){return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,a.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,a.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,a.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const ee=(0,L.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:l,isEditorMode:r=!1,...s}=o;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...s,children:(0,a.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function te(e){return(0,a.jsx)(L.Suspense,{fallback:null,children:(0,a.jsx)(ee,{...e})})}var C,P,i,N,$,oe,ne,le,re,ae,A,se,ie,ce,de,E,ue,G,pe,me,V,I,he,ge,x,W,fe,be,ve,xe,we,_e,R,F,q,ke,ye;function Ce(){(0,h.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:Y})}function Z(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function qe(e,t,o){const n=t.spacing?.blockGap;let l="none";if(n===!0)l="both";else if(Array.isArray(n)){const s=n.includes("horizontal"),d=n.includes("vertical");s&&d?l="both":s?l="horizontal":d&&(l="vertical")}const r={columnGap:l==="both"||l==="horizontal"?Z(o?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?Z(o?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function je(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const l=je(n.innerBlocks,t);l&&o.push(...l)}return o},[])}const Ze=()=>{const e=R(()=>({per_page:-1}),[]),t=R(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=R(()=>({}),[]),{postTypes:n,taxonomies:l}=I(g=>{const{getEntityRecords:p}=g(V),b=p("root","postType",e),c=p("root","taxonomy",t);if(!c)return{postTypes:b,taxonomies:c};for(const _ of c)o[_.slug]=p("taxonomy",_.slug);return{postTypes:b,taxonomies:c}},[e,t,o]),r=["attachment"],s=[],d=n?.filter(({viewable:g,slug:p})=>g&&!r.includes(p));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const g of d){const p=l?.filter(({types:b,slug:c})=>b.includes(g.slug)&&!s.includes(c));p&&(u[g.slug]=p.map(b=>{const c=o?.[b.slug]??null;return{...b,terms:c}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ue({list:e,containerClassName:t,renderItem:o}){return C(P,{children:[i("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),i("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function Be(e){return e.indexOf("data:image/svg+xml,")===0}function Se(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function ze(e){return e.indexOf("dashicons-")===0}function Te({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return i("div",{className:"menu-icon","aria-hidden":"true",children:i("br",{})});if(Be(e))return i("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:i("br",{})});if(Se(e))return i("img",{src:new URL(e).toString(),alt:""});if(ze(e)){const t=e.replace("dashicons-","");return i(ne,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Je={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Xe(){const[e,t,o,n]=N("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(n&&o&&o.length>0)for(const r of o)l[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)l[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)l[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:l}}function Ke({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return i(le,{label:x("Custom colours","launchpad"),resetAll:l=>{if(l)for(const r of l)r()},children:i("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>i(Pe,{colour:l,attributesDefinition:t,attributes:o,setAttributes:n},l.attributeName))})})}function Pe({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[l,r,s,d,u]=N("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),g=()=>t[e.attributeName]?.default!==o[e.attributeName],p=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=F(null);return i(re,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:g,onDeselect:p,label:e.label,isShownByDefault:!0,children:i(ae,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:_})=>i(P,{children:i(A,{ref:b,__next40pxDefaultSize:!0,onClick:_,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:C("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[i(se,{colorValue:o[e.attributeName]})," ",i("span",{children:e.label})]})})}),renderContent:()=>i(ie,{paddingSize:"none",children:i("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:i("div",{className:"block-editor-color-gradient-control__panel",children:i(ce,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...d&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:o[e.attributeName],onChange:c=>{n({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function Qe({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[l,r,s]=N("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=r?.map(({name:c,ratio:_})=>({label:c,value:_}))??[],u=l?.map(({name:c,ratio:_})=>({label:c,value:_}))??[],g=[{label:W("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?u:[],...d||[],{label:W("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,b]=q(g.map(c=>c.value).includes(e)?e:"custom");return C(P,{children:[i(de,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:x("Aspect ratio","launchpad-blocks"),options:g,value:p,onChange:c=>{b(c),c!=="custom"&&t(c)}}),p==="custom"?i(E,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:x("Custom aspect ratio","launchpad-blocks"),help:x("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?C(ue,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:x("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&n(c)},value:o,children:[i(G,{label:"Cover",value:"cover"}),i(G,{label:"Contain",value:"contain"})]}):null]})}const Re=(e,t,o,n)=>{const{getBlocksByName:l,getBlockAttributes:r,getBlockParentsByBlockName:s}=he($);return l(n).some(u=>{if(s(u,"core/template-part",!0).length)return!1;const{[o]:g}=r(u);return e!==u&&t===g})};function Ye(e,t,o,n,l){const{[t]:r}=e,s=ke(u=>Re(o,u,t,l),[o,t,l]);return ye(()=>{if(r===""){const u=o.slice(0,o.indexOf("-"));n({[t]:u})}if(s(r)){const u=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${u}`),n({[t]:u})}},[r,o,n,s,t]),R(()=>function({label:g,help:p,onValidChange:b,idAttribute:c}){const[_,f]=q(c);return i(E,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:g,help:typeof p=="function"?p(!s(_)):p,value:_,onChange:k=>{f(k),s(k)||b(k)}})},[s])}function et({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return i(pe,{label:x("Change title heading element","launchpad-blocks"),icon:U(t),controls:e.map(n=>{{const l=n===t;return{icon:U(n),title:Ne(n),isDisabled:l,onClick:()=>o(n)}}})})}function Ne(e){switch(e){case"h2":return x("Heading 2","launchpad-blocks");case"h3":return x("Heading 3","launchpad-blocks");case"h4":return x("Heading 4","launchpad-blocks");case"h5":return x("Heading 5","launchpad-blocks");case"h6":return x("Heading 6","launchpad-blocks");case"p":return x("Paragraph","launchpad-blocks")}}function U(e){switch(e){case"h2":return fe;case"h3":return be;case"h4":return ve;case"h5":return xe;case"h6":return we;case"p":return _e}}function tt(e){const{hasChildren:t}=I(o=>{const{getBlocks:n}=o($);return{hasChildren:n(e).length>0}},[e]);return t}function ot({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:l,updateBlockAttributes:r}=ge($);return C(me,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[i("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":x("Block variations"),children:o.map(s=>C("li",{children:[i(A,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?i(Te,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&r(e,s.attributes),s.innerBlocks&&l(e,oe(s.innerBlocks),!1)}}),i("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),n&&i("div",{className:"block-editor-block-variation-picker__skip",children:i(A,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:x("Skip")})})]})}function nt({imageId:e,className:t="",size:o="full"}){const n=I(r=>typeof e=="number"&&e>0?r(V).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?i(P,{children:i("img",{...(()=>{const r={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(r.src=n.media_details.sizes[o].source_url,r.width=n.media_details.sizes[o].width,r.height=n.media_details.sizes[o].height),r.srcSet=Object.entries(n.media_details.sizes??{}).map(([s,d])=>`${d.source_url} ${d.width}w`).join(", "),r})(),alt:n.alt_text||""})}):null}function $e(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>$e(o))):t.push([]),t}function lt(e){const t=F(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}var Ae=w(6149),J=w.n(Ae);const Ie=[],X=window.wp.primitives,De=(0,a.jsx)(X.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(X.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})});function K({clientId:e,attributes:t,setAttributes:o}){const{isScrolling:n,shouldAlignBottomRowToLeft:l}=t,r=(0,m.useBlockProps)({"data-launchpad-logo-banner":!0,"data-is-scrolling":n?"true":"false",className:`${n?"is-scrolling":""}`}),{hasChildren:s,innerBlockImages:d}=(0,H.useSelect)(f=>{const{getBlocks:k}=f(m.store),j=k(e);return{hasChildren:j.length>0,innerBlockImages:j}},[e]),{replaceInnerBlocks:u,selectBlock:g}=(0,H.useDispatch)(m.store);function p(f){return f.map(k=>({id:k.attributes.id,url:k.attributes.url}))}function b(f){const k=f.reduce((v,y,Q)=>(v[y.id]=Q,v),{}),j=d.filter(v=>f.find(y=>y.id===v.attributes?.id)),D=f.filter(v=>!j.find(y=>v.id===y.attributes?.id)).map(v=>(0,h.createBlock)("core/image",{id:v.id,url:v.url,caption:v.caption,alt:v.alt,sizeSlug:"full"})),Ge=j.map(v=>{const{validationIssues:y,originalContent:Q,...Ve}=v;return Ve}).concat(D).sort((v,y)=>k[v.attributes?.id]-k[y.attributes?.id]);u(e,Ge),D?.length>0&&g(D[0].clientId)}const{children:c,..._}=(0,m.useInnerBlocksProps)(r);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.BlockControls,{group:"other",children:(0,a.jsx)(m.MediaReplaceFlow,{allowedTypes:["image"],accept:"image/*",onSelect:b,name:d.length===0?(0,T.__)("Add","launchpad-blocks"):(0,T.__)("Replace","launchpad-blocks"),multiple:!0,mediaIds:p(d).filter(f=>f.id).map(f=>f.id),addToGallery:d.length>0})}),(0,a.jsx)(m.InspectorControls,{children:(0,a.jsx)(z.Panel,{children:(0,a.jsxs)(z.PanelBody,{children:[(0,a.jsx)(z.ToggleControl,{__nextHasNoMarginBottom:!0,label:"Scroll through the logos automatically.",onChange:f=>{o({isScrolling:f})},checked:n}),n?null:(0,a.jsx)(z.ToggleControl,{__nextHasNoMarginBottom:!0,label:"Align bottom row of images to the left.",onChange:f=>{o({shouldAlignBottomRowToLeft:f})},checked:l})]})})}),(0,a.jsx)("div",{..._,children:s?(0,a.jsx)("div",{className:"scroll-container",children:(0,a.jsxs)("div",{className:"images",children:[c,!n&&l?(0,a.jsx)("div",{className:"push-flex-children-to-start"}):null]})}):(0,a.jsx)(m.MediaPlaceholder,{icon:De,labels:{title:(0,T.__)("Logos","launchpad-blocks"),instructions:(0,T.__)("Drag and drop images, upload, or choose from your library.","launchpad-blocks")},onSelect:b,accept:"image/*",allowedTypes:["image"],multiple:!0,addToGallery:!1})})]})}K.displayName="LogoBannerEdit";function Me({hasInnerBlocks:e}){return e?Le:He}function He(){return null}function Le(){return(0,a.jsx)(m.InnerBlocks.Content,{})}const Oe={from:[],to:[]},Ee=[],at={allowResize:"allowResize"},st=null;(0,h.registerBlockType)(J().name,{icon:(0,a.jsx)(te,{iconName:"logo-banner"}),deprecated:Ie,edit:K,save:Me({hasInnerBlocks:!0}),transforms:Oe}),Ce(),Ee.forEach(e=>{(0,h.registerBlockVariation)(J().name,e)})})(),S})());
