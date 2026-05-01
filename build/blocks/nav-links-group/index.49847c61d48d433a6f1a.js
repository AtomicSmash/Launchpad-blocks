(function(C,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var j=x();for(var l in j)(typeof exports=="object"?exports:C)[l]=j[l]}})(globalThis,()=>(()=>{var I={1016(l){l.exports={apiVersion:3,name:"launchpad-blocks/nav-links-group",title:"Nav links group",category:"theme",description:"A simple list of links, often found in the footer or sidebar of a page.",allowedBlocks:["launchpad-blocks/nav-list"],textdomain:"launchpad",editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",keywords:["menu","links"],attributes:{headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},linkId:{type:"number"},linkKind:{type:"string"},linkType:{type:"string"},linkHref:{type:"string"},linkTarget:{type:"string",enum:["_self","_blank"],default:"_self"}},providesContext:{},usesContext:[],supports:{},example:{}}}},C={};function x(l){var g=C[l];if(g!==void 0)return g.exports;var f=C[l]={exports:{}};return I[l](f,f.exports,x),f.exports}x.n=l=>{var g=l&&l.__esModule?()=>l.default:()=>l;return x.d(g,{a:g}),g},x.d=(l,g)=>{for(var f in g)x.o(g,f)&&!x.o(l,f)&&Object.defineProperty(l,f,{enumerable:!0,get:g[f]})},x.o=(l,g)=>Object.prototype.hasOwnProperty.call(l,g);var j={};return(()=>{"use strict";const l=window.ReactJSXRuntime,g=window.wp.blocks,f=window.wp.blockEditor,y=window.wp.components,Ie=window.wp.coreData,Re=window.wp.data,w=window.wp.i18n,b=window.wp.primitives,q=(0,l.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(b.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})}),F=(0,l.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(b.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})}),K=(0,l.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(b.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),U=(0,l.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(b.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})}),Z=(0,l.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(b.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),J=(0,l.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(b.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})}),z=window.React;var R;function Ee(e){return R("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:R("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function X(e){return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,l.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,l.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,l.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const Q=(0,z.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:r,isEditorMode:i=!1,...s}=n;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...s,children:(0,l.jsx)("use",{href:`${i?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function Y(e){return(0,l.jsx)(z.Suspense,{fallback:null,children:(0,l.jsx)(Q,{...e})})}var k,S,a,T,P,ee,te,ne,oe,le,H,re,ie,se,ae,A,ce,D,de,M,N,ue,pe,_,L,B,V,O,he,me;function ge(){(0,g.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:X})}function E(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Ge(e,t,n){const o=t.spacing?.blockGap;let r="none";if(o===!0)r="both";else if(Array.isArray(o)){const s=o.includes("horizontal"),u=o.includes("vertical");s&&u?r="both":s?r="horizontal":u&&(r="vertical")}const i={columnGap:r==="both"||r==="horizontal"?E(n?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?E(n?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:i};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...i}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...i}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...i}};default:return{className:`is-layout-${e.type}`,style:{...i}}}}function fe(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const r=fe(o.innerBlocks,t);r&&n.push(...r)}return n},[])}const We=()=>{const e=B(()=>({per_page:-1}),[]),t=B(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=B(()=>({}),[]),{postTypes:o,taxonomies:r}=N(m=>{const{getEntityRecords:h}=m(M),v=h("root","postType",e),c=h("root","taxonomy",t);if(!c)return{postTypes:v,taxonomies:c};for(const p of c)n[p.slug]=h("taxonomy",p.slug);return{postTypes:v,taxonomies:c}},[e,t,n]),i=["attachment"],s=[],u=o?.filter(({viewable:m,slug:h})=>m&&!i.includes(h));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const d={};for(const m of u){const h=r?.filter(({types:v,slug:c})=>v.includes(m.slug)&&!s.includes(c));h&&(d[m.slug]=h.map(v=>{const c=n?.[v.slug]??null;return{...v,terms:c}}))}return{filteredPostTypes:u,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function qe({list:e,containerClassName:t,renderItem:n}){return k(S,{children:[a("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),a("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function ve(e){return e.indexOf("data:image/svg+xml,")===0}function be(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function xe(e){return e.indexOf("dashicons-")===0}function we({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return a("div",{className:"menu-icon","aria-hidden":"true",children:a("br",{})});if(ve(e))return a("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:a("br",{})});if(be(e))return a("img",{src:new URL(e).toString(),alt:""});if(xe(e)){const t=e.replace("dashicons-","");return a(te,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Fe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ke(){const[e,t,n,o]=T("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(o&&n&&n.length>0)for(const i of n)r[i.slug]={color:i.color,name:i.name};if(t&&t?.length>0)for(const i of t)r[i.slug]={color:i.color,name:i.name};if(e&&e?.length>0)for(const i of e)r[i.slug]={color:i.color,name:i.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:r}}function Ue({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return a(ne,{label:_("Custom colours","launchpad"),resetAll:r=>{if(r)for(const i of r)i()},children:a("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>a(_e,{colour:r,attributesDefinition:t,attributes:n,setAttributes:o},r.attributeName))})})}function _e({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[r,i,s,u,d]=T("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==n[e.attributeName],h=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},v=V(null);return a(oe,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:h,hasValue:m,onDeselect:h,label:e.label,isShownByDefault:!0,children:a(le,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:p})=>a(S,{children:a(H,{ref:v,__next40pxDefaultSize:!0,onClick:p,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:k("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[a(re,{colorValue:n[e.attributeName]})," ",a("span",{children:e.label})]})})}),renderContent:()=>a(ie,{paddingSize:"none",children:a("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:a("div",{className:"block-editor-color-gradient-control__panel",children:a(se,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...i&&i?.length>0?[{name:"Theme",colors:i}]:[],...u&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:n[e.attributeName],onChange:c=>{o({[e.attributeName]:c})},disableCustomColors:!d})})})})})},e.attributeName)}function Ze({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[r,i,s]=T("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=i?.map(({name:c,ratio:p})=>({label:c,value:p}))??[],d=r?.map(({name:c,ratio:p})=>({label:c,value:p}))??[],m=[{label:L("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?d:[],...u||[],{label:L("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[h,v]=O(m.map(c=>c.value).includes(e)?e:"custom");return k(S,{children:[a(ae,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:_("Aspect ratio","launchpad-blocks"),options:m,value:h,onChange:c=>{v(c),c!=="custom"&&t(c)}}),h==="custom"?a(A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:_("Custom aspect ratio","launchpad-blocks"),help:_("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?k(ce,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:_("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&o(c)},value:n,children:[a(D,{label:"Cover",value:"cover"}),a(D,{label:"Contain",value:"contain"})]}):null]})}const ke=(e,t,n,o)=>{const{getBlocksByName:r,getBlockAttributes:i,getBlockParentsByBlockName:s}=ue(P);return r(o).some(d=>{if(s(d,"core/template-part",!0).length)return!1;const{[n]:m}=i(d);return e!==d&&t===m})};function Je(e,t,n,o,r){const{[t]:i}=e,s=he(d=>ke(n,d,t,r),[n,t,r]);return me(()=>{if(i===""){const d=n.slice(0,n.indexOf("-"));o({[t]:d})}if(s(i)){const d=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${i}. New value: ${d}`),o({[t]:d})}},[i,n,o,s,t]),B(()=>function({label:m,help:h,onValidChange:v,idAttribute:c}){const[p,$e]=O(c);return a(A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof h=="function"?h(!s(p)):h,value:p,onChange:$=>{$e($),s($)||v($)}})},[s])}function ye({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return(0,l.jsx)(y.ToolbarDropdownMenu,{label:(0,w.__)("Change title heading element","launchpad-blocks"),icon:G(t),controls:e.map(o=>{{const r=o===t;return{icon:G(o),title:Ce(o),isDisabled:r,onClick:()=>n(o)}}})})}function Ce(e){switch(e){case"h2":return(0,w.__)("Heading 2","launchpad-blocks");case"h3":return(0,w.__)("Heading 3","launchpad-blocks");case"h4":return(0,w.__)("Heading 4","launchpad-blocks");case"h5":return(0,w.__)("Heading 5","launchpad-blocks");case"h6":return(0,w.__)("Heading 6","launchpad-blocks");case"p":return(0,w.__)("Paragraph","launchpad-blocks")}}function G(e){switch(e){case"h2":return q;case"h3":return F;case"h4":return K;case"h5":return U;case"h6":return Z;case"p":return J}}function Xe(e){const{hasChildren:t}=N(n=>{const{getBlocks:o}=n(P);return{hasChildren:o(e).length>0}},[e]);return t}function Qe({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:r,updateBlockAttributes:i}=pe(P);return k(de,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[a("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":_("Block variations"),children:n.map(s=>k("li",{children:[a(H,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?a(we,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&i(e,s.attributes),s.innerBlocks&&r(e,ee(s.innerBlocks),!1)}}),a("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),o&&a("div",{className:"block-editor-block-variation-picker__skip",children:a(H,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),i(e,{hasDismissedVariationsSelector:!0})},children:_("Skip")})})]})}function Ye({imageId:e,className:t="",size:n="full"}){const o=N(i=>typeof e=="number"&&e>0?i(M).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?a(S,{children:a("img",{...(()=>{const i={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(i.src=o.media_details.sizes[n].source_url,i.width=o.media_details.sizes[n].width,i.height=o.media_details.sizes[n].height),i.srcSet=Object.entries(o.media_details.sizes??{}).map(([s,u])=>`${u.source_url} ${u.width}w`).join(", "),i})(),alt:o.alt_text||""})}):null}function je(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>je(n))):t.push([]),t}function et(e){const t=V(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const i=t.current.style;i.minHeight="",t.current.setAttribute("style",`${i.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var ze=x(1016),Se=x.n(ze);const Be=(0,l.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(b.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),Te={headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},linkId:{type:"number"},linkKind:{type:"string"},linkType:{type:"string"},linkHref:{type:"string"},linkTarget:{type:"string",enum:["_self","_blank"],default:"_self"}};function W({attributes:e,setAttributes:t,clientId:n}){const{linkHref:o,linkTarget:r,headerElement:i,headerContent:s}=e,[u,d]=(0,z.useState)(!1),m=(0,f.useBlockProps)(),{children:h,...v}=(0,f.useInnerBlocksProps)(m,{template:[["launchpad-blocks/nav-list",{linkOrientation:"vertical"},[["launchpad-blocks/nav-menu-item"]]]],renderAppender:()=>null}),c=(0,z.useMemo)(()=>({url:o,opensInNewTab:r==="_blank",title:s}),[o,r,s]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(f.BlockControls,{children:[(0,l.jsx)(y.ToolbarGroup,{children:(0,l.jsx)(ye,{levelOptions:Te.headerElement.enum,selectedLevel:i,setSelectedHeadingLevel:p=>{t({headerElement:p})}})}),(0,l.jsxs)(y.ToolbarGroup,{children:[(0,l.jsx)(y.ToolbarButton,{icon:Be,label:"Edit",onClick:()=>d(!u)}),u?(0,l.jsx)(y.Popover,{position:"bottom",noArrow:!1,shift:!0,offset:10,children:(0,l.jsx)(f.LinkControl,{value:c,showInitialSuggestions:!0,onChange:p=>{t({linkId:p?.id,linkKind:p?.kind,linkType:p?.type,linkHref:p?.url,linkTarget:p?.opensInNewTab?"_blank":"_self",headerContent:p?.title}),d(!1)},onRemove:()=>{t({linkId:void 0,linkKind:void 0,linkType:void 0,linkHref:void 0})}},`${n}-link-edit`)}):null]})]}),(0,l.jsxs)("div",{...v,children:[(0,l.jsx)(f.RichText,{tagName:i,value:s,onChange:p=>{t({headerContent:p})},allowedFormats:["core/bold","core/italic"],placeholder:"Add a title for this nav links group...",className:`nav-links-group-heading is-style-reset${o?" hyperlink":""}`}),h]})]})}W.displayName="NavLinksGroupEdit";function Pe({hasInnerBlocks:e}){return e?Ne:He}function He(){return null}function Ne(){return(0,l.jsx)(f.InnerBlocks.Content,{})}const nt={},ot=null;(0,g.registerBlockType)(Se().name,{icon:(0,l.jsx)(Y,{iconName:"tabs"}),edit:W,save:Pe({hasInnerBlocks:!0})}),ge()})(),j})());
