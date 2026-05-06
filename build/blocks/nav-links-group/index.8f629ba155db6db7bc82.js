(function(B,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var z=x();for(var n in z)(typeof exports=="object"?exports:B)[n]=z[n]}})(globalThis,()=>(()=>{var $={1016(n){n.exports={apiVersion:3,name:"launchpad-blocks/nav-links-group",title:"Nav links group",category:"theme",description:"A simple list of links, often found in the footer or sidebar of a page.",allowedBlocks:["launchpad-blocks/nav-list"],textdomain:"launchpad",editorScript:"file:./index.tsx",style:"file:./style.scss",render:"file:./render.php",keywords:["menu","links"],attributes:{headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},linkId:{type:"number"},linkKind:{type:"string"},linkType:{type:"string"},linkHref:{type:"string"},linkTarget:{type:"string",enum:["_self","_blank"],default:"_self"},navListContextLabelledBy:{type:"string",default:""}},providesContext:{"launchpad-blocks/navListContextLabelledBy":"navListContextLabelledBy"},usesContext:[],supports:{},example:{}}}},B={};function x(n){var f=B[n];if(f!==void 0)return f.exports;var g=B[n]={exports:{}};return $[n](g,g.exports,x),g.exports}x.n=n=>{var f=n&&n.__esModule?()=>n.default:()=>n;return x.d(f,{a:f}),f},x.d=(n,f)=>{for(var g in f)x.o(f,g)&&!x.o(n,g)&&Object.defineProperty(n,g,{enumerable:!0,get:f[g]})},x.o=(n,f)=>Object.prototype.hasOwnProperty.call(n,f);var z={};return(()=>{"use strict";const n=window.ReactJSXRuntime,f=window.wp.blocks,g=window.wp.blockEditor,C=window.wp.components,Ne=window.wp.coreData,W=window.wp.data,_=window.wp.i18n,b=window.wp.primitives,q=(0,n.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(b.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})}),F=(0,n.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(b.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})}),U=(0,n.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(b.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),K=(0,n.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(b.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})}),Z=(0,n.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(b.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),J=(0,n.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(b.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})}),k=window.React;var M;function Ve(e){return M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:M("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function X(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,n.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,n.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,n.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const Q=(0,k.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:l,size:s,isEditorMode:i=!1,...r}=o;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...r,children:(0,n.jsx)("use",{href:`${i?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${l}`})})}}});function Y(e){return(0,n.jsx)(k.Suspense,{fallback:null,children:(0,n.jsx)(Q,{...e})})}var j,S,a,T,I,ee,te,ne,oe,le,L,se,ie,re,ae,ce,de,R,ue,A,P,pe,y,D,H,V,he;function me(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:X})}function E(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Ee(e,t,o){const l=t.spacing?.blockGap;let s="none";if(l===!0)s="both";else if(Array.isArray(l)){const r=l.includes("horizontal"),u=l.includes("vertical");r&&u?s="both":r?s="horizontal":u&&(s="vertical")}const i={columnGap:s==="both"||s==="horizontal"?E(o?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?E(o?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:i};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...i}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...i}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...i}};default:return{className:`is-layout-${e.type}`,style:{...i}}}}function ge(e,t){return e.reduce((o,l)=>{if(l.name===t)o.push(l);else if(l.innerBlocks){const s=ge(l.innerBlocks,t);s&&o.push(...s)}return o},[])}const Oe=()=>{const e=H(()=>({per_page:-1}),[]),t=H(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=H(()=>({}),[]),{postTypes:l,taxonomies:s}=P(h=>{const{getEntityRecords:p}=h(A),v=p("root","postType",e),c=p("root","taxonomy",t);if(!c)return{postTypes:v,taxonomies:c};for(const w of c)o[w.slug]=p("taxonomy",w.slug);return{postTypes:v,taxonomies:c}},[e,t,o]),i=["attachment"],r=[],u=l?.filter(({viewable:h,slug:p})=>h&&!i.includes(p));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const d={};for(const h of u){const p=s?.filter(({types:v,slug:c})=>v.includes(h.slug)&&!r.includes(c));p&&(d[h.slug]=p.map(v=>{const c=o?.[v.slug]??null;return{...v,terms:c}}))}return{filteredPostTypes:u,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Ge({list:e,containerClassName:t,renderItem:o}){return j(S,{children:[a("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),a("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(l=>o({listItem:l,buttonProps:{type:"button",className:`custom-multiple-select-list-item${l.isSelected?" is-selected":""}`}}))})]})}function fe(e){return e.indexOf("data:image/svg+xml,")===0}function ve(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function be(e){return e.indexOf("dashicons-")===0}function xe({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return a("div",{className:"menu-icon","aria-hidden":"true",children:a("br",{})});if(fe(e))return a("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:a("br",{})});if(ve(e))return a("img",{src:new URL(e).toString(),alt:""});if(be(e)){const t=e.replace("dashicons-","");return a(te,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const We={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function qe(){const[e,t,o,l]=T("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),s={};if(l&&o&&o.length>0)for(const i of o)s[i.slug]={color:i.color,name:i.name};if(t&&t?.length>0)for(const i of t)s[i.slug]={color:i.color,name:i.name};if(e&&e?.length>0)for(const i of e)s[i.slug]={color:i.color,name:i.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:s}}function Fe({colours:e,attributesDefinition:t,attributes:o,setAttributes:l}){return a(ne,{label:y("Custom colours","launchpad"),resetAll:s=>{if(s)for(const i of s)i()},children:a("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>a(we,{colour:s,attributesDefinition:t,attributes:o,setAttributes:l},s.attributeName))})})}function we({colour:e,attributesDefinition:t,attributes:o,setAttributes:l}){const[s,i,r,u,d]=T("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==o[e.attributeName],p=()=>{l({[e.attributeName]:t[e.attributeName]?.default??void 0})},v=V(null);return a(oe,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:h,onDeselect:p,label:e.label,isShownByDefault:!0,children:a(le,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:w})=>a(S,{children:a(L,{ref:v,__next40pxDefaultSize:!0,onClick:w,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:j("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[a(se,{colorValue:o[e.attributeName]})," ",a("span",{children:e.label})]})})}),renderContent:()=>a(ie,{paddingSize:"none",children:a("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:a("div",{className:"block-editor-color-gradient-control__panel",children:a(re,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...i&&i?.length>0?[{name:"Theme",colors:i}]:[],...u&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:o[e.attributeName],onChange:c=>{l({[e.attributeName]:c})},disableCustomColors:!d})})})})})},e.attributeName)}function Ue({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:l}){const[s,i,r]=T("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=i?.map(({name:c,ratio:w})=>({label:c,value:w}))??[],d=s?.map(({name:c,ratio:w})=>({label:c,value:w}))??[],h=[{label:D("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?d:[],...u||[],{label:D("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,v]=he(h.map(c=>c.value).includes(e)?e:"custom");return j(S,{children:[a(ae,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:y("Aspect ratio","launchpad-blocks"),options:h,value:p,onChange:c=>{v(c),c!=="custom"&&t(c)}}),p==="custom"?a(ce,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:y("Custom aspect ratio","launchpad-blocks"),help:y("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&l!==void 0?j(de,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:y("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&l(c)},value:o,children:[a(R,{label:"Cover",value:"cover"}),a(R,{label:"Contain",value:"contain"})]}):null]})}const ke=(e,t,o,l)=>{const{getBlocksByName:s,getBlockAttributes:i,getBlockParentsByBlockName:r}=(0,W.select)(g.store);return s(l).some(d=>{if(r(d,"core/template-part",!0).length)return!1;const{[o]:h}=i(d);return e!==d&&t===h})};function _e(e,t,o,l,s){const{[t]:i}=e,r=(0,k.useCallback)(d=>ke(o,d,t,s),[o,t,s]);return(0,k.useEffect)(()=>{if(i===""){const d=o.slice(0,o.indexOf("-"));l({[t]:d})}if(r(i)){const d=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${i}. New value: ${d}`),l({[t]:d})}},[i,o,l,r,t]),(0,k.useMemo)(()=>function({label:h,help:p,onValidChange:v,idAttribute:c}){const[w,N]=(0,k.useState)(c);return(0,n.jsx)(C.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof p=="function"?p(!r(w)):p,value:w,onChange:m=>{N(m),r(m)||v(m)}})},[r])}function ye({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return(0,n.jsx)(C.ToolbarDropdownMenu,{label:(0,_.__)("Change title heading element","launchpad-blocks"),icon:O(t),controls:e.map(l=>{{const s=l===t;return{icon:O(l),title:Ce(l),isDisabled:s,onClick:()=>o(l)}}})})}function Ce(e){switch(e){case"h2":return(0,_.__)("Heading 2","launchpad-blocks");case"h3":return(0,_.__)("Heading 3","launchpad-blocks");case"h4":return(0,_.__)("Heading 4","launchpad-blocks");case"h5":return(0,_.__)("Heading 5","launchpad-blocks");case"h6":return(0,_.__)("Heading 6","launchpad-blocks");case"p":return(0,_.__)("Paragraph","launchpad-blocks")}}function O(e){switch(e){case"h2":return q;case"h3":return F;case"h4":return U;case"h5":return K;case"h6":return Z;case"p":return J}}function Ke(e){const{hasChildren:t}=P(o=>{const{getBlocks:l}=o(I);return{hasChildren:l(e).length>0}},[e]);return t}function Ze({clientId:e,blockInfo:t,variations:o,allowSkip:l}){const{replaceInnerBlocks:s,updateBlockAttributes:i}=pe(I);return j(ue,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[a("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":y("Block variations"),children:o.map(r=>j("li",{children:[a(L,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?a(xe,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&i(e,r.attributes),r.innerBlocks&&s(e,ee(r.innerBlocks),!1)}}),a("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),l&&a("div",{className:"block-editor-block-variation-picker__skip",children:a(L,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),i(e,{hasDismissedVariationsSelector:!0})},children:y("Skip")})})]})}function Je({imageId:e,className:t="",size:o="full"}){const l=P(i=>typeof e=="number"&&e>0?i(A).getEntityRecord?.("postType","attachment",e):void 0,[e]);return l?a(S,{children:a("img",{...(()=>{const i={src:l.source_url,className:`attachment-${o} size-${o} ${t}`,width:l.media_details.width,height:l.media_details.height,srcSet:""};return l.media_details?.sizes?.[o]&&(i.src=l.media_details.sizes[o].source_url,i.width=l.media_details.sizes[o].width,i.height=l.media_details.sizes[o].height),i.srcSet=Object.entries(l.media_details.sizes??{}).map(([r,u])=>`${u.source_url} ${u.width}w`).join(", "),i})(),alt:l.alt_text||""})}):null}function je(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>je(o))):t.push([]),t}function Xe(e){const t=V(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const s=e()?.scrollHeight??0;if(s){const i=t.current.style;i.minHeight="",t.current.setAttribute("style",`${i.cssText}min-height: ${s}px !important`)}else t.current.style.minHeight=""}},1)}}var Be=x(1016),ze=x.n(Be);const Se=(0,n.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(b.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),Te={headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},linkId:{type:"number"},linkKind:{type:"string"},linkType:{type:"string"},linkHref:{type:"string"},linkTarget:{type:"string",enum:["_self","_blank"],default:"_self"},navListContextLabelledBy:{type:"string",default:""}};function G({attributes:e,setAttributes:t,clientId:o}){const{linkHref:l,linkTarget:s,headerElement:i,headerContent:r,navListContextLabelledBy:u}=e,[d,h]=(0,k.useState)(!1),p=(0,g.useBlockProps)(),{children:v,...c}=(0,g.useInnerBlocksProps)(p,{template:[["launchpad-blocks/nav-list",{linkOrientation:"vertical"},[["launchpad-blocks/nav-menu-item"]]]],renderAppender:()=>null}),w=(0,k.useMemo)(()=>({url:l,opensInNewTab:s==="_blank",title:r}),[l,s,r]),N=_e(e,"navListContextLabelledBy",o,t,"launchpad-blocks/nav-links-group");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(g.BlockControls,{children:[(0,n.jsx)(C.ToolbarGroup,{children:(0,n.jsx)(ye,{levelOptions:Te.headerElement.enum,selectedLevel:i,setSelectedHeadingLevel:m=>{t({headerElement:m})}})}),(0,n.jsxs)(C.ToolbarGroup,{children:[(0,n.jsx)(C.ToolbarButton,{icon:Se,label:"Edit",onClick:()=>h(!d)}),d?(0,n.jsx)(C.Popover,{position:"bottom",noArrow:!1,shift:!0,offset:10,children:(0,n.jsx)(g.LinkControl,{value:w,showInitialSuggestions:!0,onChange:m=>{t({linkId:m?.id,linkKind:m?.kind,linkType:m?.type,linkHref:m?.url,linkTarget:m?.opensInNewTab?"_blank":"_self",headerContent:m?.title}),h(!1)},onRemove:()=>{t({linkId:void 0,linkKind:void 0,linkType:void 0,linkHref:void 0})}},`${o}-link-edit`)}):null]})]}),(0,n.jsx)(g.InspectorAdvancedControls,{children:(0,n.jsx)(N,{label:"Unique Nav list identifier",help:m=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:"This is used to differentiate the nav link groups from each other for accessibility. Must be unique on a page."}),m?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsxs)("span",{style:{fontWeight:"bold",color:"red"},children:["This value is used by another nav links group on the page. Using this value: ",u," "]})]})]}),onValidChange:m=>{t({navListContextLabelledBy:m})},idAttribute:u})}),(0,n.jsxs)("div",{...c,children:[(0,n.jsx)(g.RichText,{tagName:i,value:r,onChange:m=>{t({headerContent:m})},allowedFormats:["core/bold","core/italic"],placeholder:"Add a title for this nav links group...",className:`nav-links-group-heading is-style-reset${l?" hyperlink":""}`}),v]})]})}G.displayName="NavLinksGroupEdit";function Le({hasInnerBlocks:e}){return e?He:Pe}function Pe(){return null}function He(){return(0,n.jsx)(g.InnerBlocks.Content,{})}const Ye={"launchpad-blocks/navListContextLabelledBy":"navListContextLabelledBy"},et=null;(0,f.registerBlockType)(ze().name,{icon:(0,n.jsx)(Y,{iconName:"tabs"}),edit:G,save:Le({hasInnerBlocks:!0})}),me()})(),z})());
