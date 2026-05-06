(function(w,f){if(typeof exports=="object"&&typeof module=="object")module.exports=f();else if(typeof define=="function"&&define.amd)define([],f);else{var _=f();for(var l in _)(typeof exports=="object"?exports:w)[l]=_[l]}})(globalThis,()=>(()=>{var N={4860(l){l.exports={apiVersion:3,name:"launchpad-blocks/gallery-carousel",allowedBlocks:["launchpad-blocks/gallery-carousel-lightbox","launchpad-blocks/carousel-slides"],title:"Gallery with lightbox",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:["lightbox"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",render:"file:./render.php",attributes:{images:{type:"array",default:[]},columnCount:{type:"integer",default:4},shouldLinkSlidesToLightbox:{type:"boolean",default:!0},slides:{type:"array",default:[]}},providesContext:{"launchpad-blocks/carouselImages":"images","launchpad-blocks/carouselSlides":"slides","launchpad-blocks/shouldLinkSlidesToLightbox":"shouldLinkSlidesToLightbox"},usesContext:[],example:{attributes:{images:[{id:237,url:"https://picsum.photos/id/237/260/180"},{id:433,url:"https://picsum.photos/id/433/260/180"},{id:582,url:"https://picsum.photos/id/582/260/180"},{id:593,url:"https://picsum.photos/id/593/260/180"},{id:943,url:"https://picsum.photos/id/943/260/180"},{id:1024,url:"https://picsum.photos/id/1024/260/180"}]},innerBlocks:[{name:"launchpad-blocks/carousel-slides",innerBlocks:[{name:"core/image",attributes:{id:237,url:"https://picsum.photos/id/237/260/180"}},{name:"core/image",attributes:{id:433,url:"https://picsum.photos/id/433/260/180"}},{name:"core/image",attributes:{id:582,url:"https://picsum.photos/id/582/260/180"}},{name:"core/image",attributes:{id:593,url:"https://picsum.photos/id/593/260/180"}},{name:"core/image",attributes:{id:943,url:"https://picsum.photos/id/943/260/180"}},{name:"core/image",attributes:{id:1024,url:"https://picsum.photos/id/1024/260/180"}}]},{name:"launchpad-blocks/gallery-carousel-lightbox",innerBlocks:[{name:"launchpad-blocks/carousel",attributes:{images:[{id:237,url:"https://picsum.photos/id/237/260/180"},{id:433,url:"https://picsum.photos/id/433/260/180"},{id:582,url:"https://picsum.photos/id/582/260/180"},{id:593,url:"https://picsum.photos/id/593/260/180"},{id:943,url:"https://picsum.photos/id/943/260/180"},{id:1024,url:"https://picsum.photos/id/1024/260/180"}]},innerBlocks:[{name:"launchpad-blocks/carousel-slides",attributes:{shouldPullImagesFromContext:!0}},{name:"launchpad-blocks/carousel-navigation-arrows",attributes:{shouldShowTextVisually:!1,className:"is-style-overlay"}}]}]}]},supports:{}}}},w={};function f(l){var m=w[l];if(m!==void 0)return m.exports;var b=w[l]={exports:{}};return N[l](b,b.exports,f),b.exports}f.n=l=>{var m=l&&l.__esModule?()=>l.default:()=>l;return f.d(m,{a:m}),m},f.d=(l,m)=>{for(var b in m)f.o(m,b)&&!f.o(l,b)&&Object.defineProperty(l,b,{enumerable:!0,get:m[b]})},f.o=(l,m)=>Object.prototype.hasOwnProperty.call(l,m);var _={};return(()=>{"use strict";const l=window.ReactJSXRuntime,m=window.wp.blocks,b=window.wp.blockEditor,j=window.wp.components,Re=window.wp.coreData,De=window.wp.data,Ae=window.wp.i18n,$=window.React;var R;function Ie(e){return R("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:R("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function W(e){return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,l.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,l.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,l.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const q=(0,$.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:s,isEditorMode:r=!1,...a}=o;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...a,children:(0,l.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function F(e){return(0,l.jsx)($.Suspense,{fallback:null,children:(0,l.jsx)(q,{...e})})}var k,y,i,S,B,U,J,X,Z,K,z,Q,Y,ee,te,D,oe,A,ne,se,I,P,re,le,g,L,ie,ae,ce,ue,de,pe,C,M,H,me,he;function ge(){(0,m.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:W})}function O(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Le(e,t,o){const n=t.spacing?.blockGap;let s="none";if(n===!0)s="both";else if(Array.isArray(n)){const a=n.includes("horizontal"),d=n.includes("vertical");a&&d?s="both":a?s="horizontal":d&&(s="vertical")}const r={columnGap:s==="both"||s==="horizontal"?O(o?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?O(o?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function fe(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const s=fe(n.innerBlocks,t);s&&o.push(...s)}return o},[])}const Me=()=>{const e=C(()=>({per_page:-1}),[]),t=C(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=C(()=>({}),[]),{postTypes:n,taxonomies:s}=P(h=>{const{getEntityRecords:p}=h(I),v=p("root","postType",e),c=p("root","taxonomy",t);if(!c)return{postTypes:v,taxonomies:c};for(const x of c)o[x.slug]=p("taxonomy",x.slug);return{postTypes:v,taxonomies:c}},[e,t,o]),r=["attachment"],a=[],d=n?.filter(({viewable:h,slug:p})=>h&&!r.includes(p));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const h of d){const p=s?.filter(({types:v,slug:c})=>v.includes(h.slug)&&!a.includes(c));p&&(u[h.slug]=p.map(v=>{const c=o?.[v.slug]??null;return{...v,terms:c}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function He({list:e,containerClassName:t,renderItem:o}){return k(y,{children:[i("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),i("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function be(e){return e.indexOf("data:image/svg+xml,")===0}function ve(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function xe(e){return e.indexOf("dashicons-")===0}function ke({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return i("div",{className:"menu-icon","aria-hidden":"true",children:i("br",{})});if(be(e))return i("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:i("br",{})});if(ve(e))return i("img",{src:new URL(e).toString(),alt:""});if(xe(e)){const t=e.replace("dashicons-","");return i(J,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Oe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ee(){const[e,t,o,n]=S("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),s={};if(n&&o&&o.length>0)for(const r of o)s[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)s[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)s[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:s}}function Ge({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return i(X,{label:g("Custom colours","launchpad"),resetAll:s=>{if(s)for(const r of s)r()},children:i("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>i(we,{colour:s,attributesDefinition:t,attributes:o,setAttributes:n},s.attributeName))})})}function we({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[s,r,a,d,u]=S("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==o[e.attributeName],p=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},v=M(null);return i(Z,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:h,onDeselect:p,label:e.label,isShownByDefault:!0,children:i(K,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:x})=>i(y,{children:i(z,{ref:v,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:k("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[i(Q,{colorValue:o[e.attributeName]})," ",i("span",{children:e.label})]})})}),renderContent:()=>i(Y,{paddingSize:"none",children:i("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:i("div",{className:"block-editor-color-gradient-control__panel",children:i(ee,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...d&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:o[e.attributeName],onChange:c=>{n({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function Ve({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[s,r,a]=S("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=r?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],u=s?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],h=[{label:L("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?u:[],...d||[],{label:L("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,v]=H(h.map(c=>c.value).includes(e)?e:"custom");return k(y,{children:[i(te,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:g("Aspect ratio","launchpad-blocks"),options:h,value:p,onChange:c=>{v(c),c!=="custom"&&t(c)}}),p==="custom"?i(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:g("Custom aspect ratio","launchpad-blocks"),help:g("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?k(oe,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:g("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&n(c)},value:o,children:[i(A,{label:"Cover",value:"cover"}),i(A,{label:"Contain",value:"contain"})]}):null]})}const _e=(e,t,o,n)=>{const{getBlocksByName:s,getBlockAttributes:r,getBlockParentsByBlockName:a}=re(B);return s(n).some(u=>{if(a(u,"core/template-part",!0).length)return!1;const{[o]:h}=r(u);return e!==u&&t===h})};function We(e,t,o,n,s){const{[t]:r}=e,a=me(u=>_e(o,u,t,s),[o,t,s]);return he(()=>{if(r===""){const u=o.slice(0,o.indexOf("-"));n({[t]:u})}if(a(r)){const u=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${u}`),n({[t]:u})}},[r,o,n,a,t]),C(()=>function({label:h,help:p,onValidChange:v,idAttribute:c}){const[x,$e]=H(c);return i(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof p=="function"?p(!a(x)):p,value:x,onChange:T=>{$e(T),a(T)||v(T)}})},[a])}function qe({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return i(ne,{label:g("Change title heading element","launchpad-blocks"),icon:E(t),controls:e.map(n=>{{const s=n===t;return{icon:E(n),title:ye(n),isDisabled:s,onClick:()=>o(n)}}})})}function ye(e){switch(e){case"h2":return g("Heading 2","launchpad-blocks");case"h3":return g("Heading 3","launchpad-blocks");case"h4":return g("Heading 4","launchpad-blocks");case"h5":return g("Heading 5","launchpad-blocks");case"h6":return g("Heading 6","launchpad-blocks");case"p":return g("Paragraph","launchpad-blocks")}}function E(e){switch(e){case"h2":return ie;case"h3":return ae;case"h4":return ce;case"h5":return ue;case"h6":return de;case"p":return pe}}function Fe(e){const{hasChildren:t}=P(o=>{const{getBlocks:n}=o(B);return{hasChildren:n(e).length>0}},[e]);return t}function Ue({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:s,updateBlockAttributes:r}=le(B);return k(se,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[i("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":g("Block variations"),children:o.map(a=>k("li",{children:[i(z,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?i(ke,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&r(e,a.attributes),a.innerBlocks&&s(e,U(a.innerBlocks),!1)}}),i("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),n&&i("div",{className:"block-editor-block-variation-picker__skip",children:i(z,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:g("Skip")})})]})}function Je({imageId:e,className:t="",size:o="full"}){const n=P(r=>typeof e=="number"&&e>0?r(I).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?i(y,{children:i("img",{...(()=>{const r={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(r.src=n.media_details.sizes[o].source_url,r.width=n.media_details.sizes[o].width,r.height=n.media_details.sizes[o].height),r.srcSet=Object.entries(n.media_details.sizes??{}).map(([a,d])=>`${d.source_url} ${d.width}w`).join(", "),r})(),alt:n.alt_text||""})}):null}function Ce(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Ce(o))):t.push([]),t}function Xe(e){const t=M(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const s=e()?.scrollHeight??0;if(s){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${s}px !important`)}else t.current.style.minHeight=""}},1)}}var je=f(4860),G=f.n(je);const Se=[];function V({attributes:e,setAttributes:t}){const{columnCount:o}=e,n=(0,b.useBlockProps)({"data-launchpad-gallery-carousel":"",style:{"--column-count":o}}),s=(0,b.useInnerBlocksProps)(n,{template:[["launchpad-blocks/carousel-slides",{aspectRatio:"1"}],["launchpad-blocks/gallery-carousel-lightbox"]]});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.InspectorControls,{children:(0,l.jsx)(j.Panel,{children:(0,l.jsx)(j.PanelBody,{children:(0,l.jsx)(j.RangeControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,help:"Please select the number of images to show on a single row.",initialPosition:4,label:"Columns",max:10,min:1,onChange:r=>{t({columnCount:r})},allowReset:!0,value:o})})})}),(0,l.jsx)("div",{...s})]})}V.displayName="GalleryCarouselWrapperEdit";function Be({hasInnerBlocks:e}){return e?Pe:ze}function ze(){return null}function Pe(){return(0,l.jsx)(b.InnerBlocks.Content,{})}const Te={from:[],to:[]},Ne=[],Ze={"launchpad-blocks/carouselImages":"images","launchpad-blocks/carouselSlides":"slides","launchpad-blocks/shouldLinkSlidesToLightbox":"shouldLinkSlidesToLightbox"},Ke=null;(0,m.registerBlockType)(G().name,{icon:(0,l.jsx)(F,{iconName:"gallery-carousel"}),deprecated:Se,edit:V,save:Be({hasInnerBlocks:!0}),transforms:Te}),ge(),Ne.forEach(e=>{(0,m.registerBlockVariation)(G().name,e)})})(),_})());
