(function(_,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var k=x();for(var a in k)(typeof exports=="object"?exports:_)[a]=k[a]}})(globalThis,()=>(()=>{var P={3177(a){a.exports={apiVersion:3,name:"launchpad-blocks/carousel-slide-count",title:"Carousel slide count",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],ancestor:["launchpad-blocks/carousel"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{prefix:{type:"string",role:"content"},betweenText:{type:"string",default:"/",role:"content"},suffix:{type:"string",role:"content"}},providesContext:{},usesContext:["launchpad-blocks/carouselImages","launchpad-blocks/carouselSlides","launchpad-blocks/currentlySelectedSlide"],example:{viewportWidth:1200},supports:{align:!0,layout:{default:{type:"flex",flexWrap:"wrap",justifyContent:"left"},allowOrientation:!1}}}}},_={};function x(a){var h=_[a];if(h!==void 0)return h.exports;var b=_[a]={exports:{}};return P[a](b,b.exports,x),b.exports}x.n=a=>{var h=a&&a.__esModule?()=>a.default:()=>a;return x.d(h,{a:h}),h},x.d=(a,h)=>{for(var b in h)x.o(h,b)&&!x.o(a,b)&&Object.defineProperty(a,b,{enumerable:!0,get:h[b]})},x.o=(a,h)=>Object.prototype.hasOwnProperty.call(a,h);var k={};return(()=>{"use strict";const a=window.ReactJSXRuntime,h=window.wp.blocks,b=window.wp.blockEditor,De=window.wp.components,Ae=window.wp.coreData,Ie=window.wp.data,Me=window.wp.i18n,$=window.React;var R;function Oe(e){return R("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:R("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function V(e){return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,a.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,a.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,a.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const q=(0,$.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:r,isEditorMode:l=!1,...s}=o;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...s,children:(0,a.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function F(e){return(0,a.jsx)($.Suspense,{fallback:null,children:(0,a.jsx)(q,{...e})})}var w,y,i,S,j,U,J,X,Z,K,z,Q,Y,ee,te,D,oe,A,ne,re,I,T,le,ae,v,M,se,ie,ce,ue,de,pe,C,O,H,me,fe;function he(){(0,h.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:V})}function E(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function ge(e,t,o){const n=t.spacing?.blockGap;let r="none";if(n===!0)r="both";else if(Array.isArray(n)){const s=n.includes("horizontal"),d=n.includes("vertical");s&&d?r="both":s?r="horizontal":d&&(r="vertical")}const l={columnGap:r==="both"||r==="horizontal"?E(o?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?E(o?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function be(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const r=be(n.innerBlocks,t);r&&o.push(...r)}return o},[])}const He=()=>{const e=C(()=>({per_page:-1}),[]),t=C(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=C(()=>({}),[]),{postTypes:n,taxonomies:r}=T(f=>{const{getEntityRecords:m}=f(I),g=m("root","postType",e),c=m("root","taxonomy",t);if(!c)return{postTypes:g,taxonomies:c};for(const p of c)o[p.slug]=m("taxonomy",p.slug);return{postTypes:g,taxonomies:c}},[e,t,o]),l=["attachment"],s=[],d=n?.filter(({viewable:f,slug:m})=>f&&!l.includes(m));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const f of d){const m=r?.filter(({types:g,slug:c})=>g.includes(f.slug)&&!s.includes(c));m&&(u[f.slug]=m.map(g=>{const c=o?.[g.slug]??null;return{...g,terms:c}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ee({list:e,containerClassName:t,renderItem:o}){return w(y,{children:[i("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),i("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function ve(e){return e.indexOf("data:image/svg+xml,")===0}function xe(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function we(e){return e.indexOf("dashicons-")===0}function _e({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return i("div",{className:"menu-icon","aria-hidden":"true",children:i("br",{})});if(ve(e))return i("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:i("br",{})});if(xe(e))return i("img",{src:new URL(e).toString(),alt:""});if(we(e)){const t=e.replace("dashicons-","");return i(J,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Le={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function We(){const[e,t,o,n]=S("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(n&&o&&o.length>0)for(const l of o)r[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)r[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)r[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:r}}function Ge({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return i(X,{label:v("Custom colours","launchpad"),resetAll:r=>{if(r)for(const l of r)l()},children:i("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>i(ke,{colour:r,attributesDefinition:t,attributes:o,setAttributes:n},r.attributeName))})})}function ke({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[r,l,s,d,u]=S("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),f=()=>t[e.attributeName]?.default!==o[e.attributeName],m=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},g=O(null);return i(Z,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:m,hasValue:f,onDeselect:m,label:e.label,isShownByDefault:!0,children:i(K,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:p})=>i(y,{children:i(z,{ref:g,__next40pxDefaultSize:!0,onClick:p,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:w("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[i(Q,{colorValue:o[e.attributeName]})," ",i("span",{children:e.label})]})})}),renderContent:()=>i(Y,{paddingSize:"none",children:i("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:i("div",{className:"block-editor-color-gradient-control__panel",children:i(ee,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...d&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:o[e.attributeName],onChange:c=>{n({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function Ve({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[r,l,s]=S("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=l?.map(({name:c,ratio:p})=>({label:c,value:p}))??[],u=r?.map(({name:c,ratio:p})=>({label:c,value:p}))??[],f=[{label:M("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?u:[],...d||[],{label:M("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[m,g]=H(f.map(c=>c.value).includes(e)?e:"custom");return w(y,{children:[i(te,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:v("Aspect ratio","launchpad-blocks"),options:f,value:m,onChange:c=>{g(c),c!=="custom"&&t(c)}}),m==="custom"?i(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:v("Custom aspect ratio","launchpad-blocks"),help:v("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?w(oe,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:v("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&n(c)},value:o,children:[i(A,{label:"Cover",value:"cover"}),i(A,{label:"Contain",value:"contain"})]}):null]})}const ye=(e,t,o,n)=>{const{getBlocksByName:r,getBlockAttributes:l,getBlockParentsByBlockName:s}=le(j);return r(n).some(u=>{if(s(u,"core/template-part",!0).length)return!1;const{[o]:f}=l(u);return e!==u&&t===f})};function qe(e,t,o,n,r){const{[t]:l}=e,s=me(u=>ye(o,u,t,r),[o,t,r]);return fe(()=>{if(l===""){const u=o.slice(0,o.indexOf("-"));n({[t]:u})}if(s(l)){const u=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${u}`),n({[t]:u})}},[l,o,n,s,t]),C(()=>function({label:f,help:m,onValidChange:g,idAttribute:c}){const[p,B]=H(c);return i(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:f,help:typeof m=="function"?m(!s(p)):m,value:p,onChange:N=>{B(N),s(N)||g(N)}})},[s])}function Fe({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return i(ne,{label:v("Change title heading element","launchpad-blocks"),icon:L(t),controls:e.map(n=>{{const r=n===t;return{icon:L(n),title:Ce(n),isDisabled:r,onClick:()=>o(n)}}})})}function Ce(e){switch(e){case"h2":return v("Heading 2","launchpad-blocks");case"h3":return v("Heading 3","launchpad-blocks");case"h4":return v("Heading 4","launchpad-blocks");case"h5":return v("Heading 5","launchpad-blocks");case"h6":return v("Heading 6","launchpad-blocks");case"p":return v("Paragraph","launchpad-blocks")}}function L(e){switch(e){case"h2":return se;case"h3":return ie;case"h4":return ce;case"h5":return ue;case"h6":return de;case"p":return pe}}function Ue(e){const{hasChildren:t}=T(o=>{const{getBlocks:n}=o(j);return{hasChildren:n(e).length>0}},[e]);return t}function Je({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:r,updateBlockAttributes:l}=ae(j);return w(re,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[i("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":v("Block variations"),children:o.map(s=>w("li",{children:[i(z,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?i(_e,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&l(e,s.attributes),s.innerBlocks&&r(e,U(s.innerBlocks),!1)}}),i("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),n&&i("div",{className:"block-editor-block-variation-picker__skip",children:i(z,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:v("Skip")})})]})}function Xe({imageId:e,className:t="",size:o="full"}){const n=T(l=>typeof e=="number"&&e>0?l(I).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?i(y,{children:i("img",{...(()=>{const l={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(l.src=n.media_details.sizes[o].source_url,l.width=n.media_details.sizes[o].width,l.height=n.media_details.sizes[o].height),l.srcSet=Object.entries(n.media_details.sizes??{}).map(([s,d])=>`${d.source_url} ${d.width}w`).join(", "),l})(),alt:n.alt_text||""})}):null}function Se(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Se(o))):t.push([]),t}function Ze(e){const t=O(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var je=x(3177),W=x.n(je);const ze=[],Te={align:!0,layout:{default:{type:"flex",flexWrap:"wrap",justifyContent:"left"},allowOrientation:!1}};function G({attributes:e,setAttributes:t,context:o}){const{prefix:n,betweenText:r,suffix:l,layout:s,style:d}=e,{className:u,style:f}=ge(s,Te,d),m=(0,b.useBlockProps)({className:u,style:f}),g=o["launchpad-blocks/currentlySelectedSlide"],c=o["launchpad-blocks/carouselSlides"]!==void 0&&o["launchpad-blocks/carouselSlides"].length>0?o["launchpad-blocks/carouselSlides"].map((p,B)=>({id:p.attributes?.id??B})):o["launchpad-blocks/carouselImages"].map(p=>({id:p.id}));return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{...m,children:[(0,a.jsx)(b.RichText,{tagName:"span",placeholder:"prefix",value:n,identifier:"prefix",onChange:p=>{t({prefix:p})}}),(0,a.jsx)("span",{children:g+1})," ",(0,a.jsx)(b.RichText,{tagName:"span",placeholder:"betweenText",identifier:"betweenText",value:r,onChange:p=>{t({betweenText:p})}}),(0,a.jsx)("span",{children:c.length}),(0,a.jsx)(b.RichText,{tagName:"span",placeholder:"suffix",identifier:"suffix",value:l,onChange:p=>{t({suffix:p})}})]})})}G.displayName="CarouselSlideCountEdit";function Be({hasInnerBlocks:e}){return e?Pe:Ne}function Ne(){return null}function Pe(){return(0,a.jsx)(b.InnerBlocks.Content,{})}const $e={from:[],to:[]},Re=[],Ke={},Qe=null;(0,h.registerBlockType)(W().name,{icon:(0,a.jsx)(F,{iconName:"carousel-slide-count"}),deprecated:ze,edit:G,save:Be({hasInnerBlocks:!1}),transforms:$e}),he(),Re.forEach(e=>{(0,h.registerBlockVariation)(W().name,e)})})(),k})());
