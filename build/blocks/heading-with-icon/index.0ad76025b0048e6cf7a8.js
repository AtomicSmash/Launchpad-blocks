(function(C,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var z=x();for(var t in z)(typeof exports=="object"?exports:C)[t]=z[t]}})(globalThis,()=>(()=>{var I={7390(t){t.exports={apiVersion:3,name:"launchpad-blocks/heading-with-icon",title:"Heading with icon",category:"theme",description:"Select an icon to display inline with a heading",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{iconName:{type:"string",role:"content"},library:{type:"string",role:"content"},size:{type:"string",default:"2rem"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},iconColour:{type:"string"}},providesContext:{},usesContext:[],example:{viewportWidth:280,attributes:{library:"launchpad-blocks",iconName:"heading-with-icon",size:"2rem",headerContent:"Heading"}},supports:{},styles:[{name:"default",label:"Default",isDefault:!0},{name:"t-1",label:"T1"},{name:"t-2",label:"T2"},{name:"t-3",label:"T3"},{name:"t-4",label:"T4"},{name:"t-5",label:"T5"},{name:"t-6",label:"T6"}]}}},C={};function x(t){var f=C[t];if(f!==void 0)return f.exports;var b=C[t]={exports:{}};return I[t](b,b.exports,x),b.exports}x.n=t=>{var f=t&&t.__esModule?()=>t.default:()=>t;return x.d(f,{a:f}),f},x.d=(t,f)=>{for(var b in f)x.o(f,b)&&!x.o(t,b)&&Object.defineProperty(t,b,{enumerable:!0,get:f[b]})},x.o=(t,f)=>Object.prototype.hasOwnProperty.call(t,f);var z={};return(()=>{"use strict";const t=window.ReactJSXRuntime,f=window.wp.blocks,b=window.wp.blockEditor,p=window.wp.components,Ee=window.wp.coreData,Ge=window.wp.data,w=window.wp.i18n,v=window.wp.primitives,K=(0,t.jsx)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(v.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})}),X=(0,t.jsx)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(v.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})}),Z=(0,t.jsx)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(v.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),Q=(0,t.jsx)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(v.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})}),Y=(0,t.jsx)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(v.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),ee=(0,t.jsx)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(v.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})}),k=window.React;var H;function Xe(e){return H("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:H("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function te(e){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,t.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,t.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,t.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const ne=(0,k.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(n=>{if(!n.default["icons/sprite.svg"]||typeof n.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return n.default}).catch(()=>({}));return{default:function(o){const{iconName:i,size:l,isEditorMode:r=!1,...a}=o;return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...a,children:(0,t.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${i}`})})}}});function $(e){return(0,t.jsx)(k.Suspense,{fallback:null,children:(0,t.jsx)(ne,{...e})})}var y,B,h,D,N,oe,ie,le,A,re,L,ae,M,R,T,se,ce,O,j,S,V,de,ue,he;function me(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:te})}function E(e,n){if(e===void 0)return e;let o;if(n==="both")o=e;else if(n==="horizontal")o=e.left;else if(n==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Ze(e,n,o){const i=n.spacing?.blockGap;let l="none";if(i===!0)l="both";else if(Array.isArray(i)){const a=i.includes("horizontal"),d=i.includes("vertical");a&&d?l="both":a?l="horizontal":d&&(l="vertical")}const r={columnGap:l==="both"||l==="horizontal"?E(o?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?E(o?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof n.layout=="object"&&n?.layout?.default&&(e=n.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function pe(e,n){return e.reduce((o,i)=>{if(i.name===n)o.push(i);else if(i.innerBlocks){const l=pe(i.innerBlocks,n);l&&o.push(...l)}return o},[])}const Qe=()=>{const e=S(()=>({per_page:-1}),[]),n=S(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=S(()=>({}),[]),{postTypes:i,taxonomies:l}=T(m=>{const{getEntityRecords:s}=m(R),g=s("root","postType",e),c=s("root","taxonomy",n);if(!c)return{postTypes:g,taxonomies:c};for(const _ of c)o[_.slug]=s("taxonomy",_.slug);return{postTypes:g,taxonomies:c}},[e,n,o]),r=["attachment"],a=[],d=i?.filter(({viewable:m,slug:s})=>m&&!r.includes(s));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const m of d){const s=l?.filter(({types:g,slug:c})=>g.includes(m.slug)&&!a.includes(c));s&&(u[m.slug]=s.map(g=>{const c=o?.[g.slug]??null;return{...g,terms:c}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ye({list:e,containerClassName:n,renderItem:o}){return y(B,{children:[h("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),h("section",{className:`custom-multiple-select-list${n!==void 0&&n!==""?` ${n}`:""}`,children:e.map(i=>o({listItem:i,buttonProps:{type:"button",className:`custom-multiple-select-list-item${i.isSelected?" is-selected":""}`}}))})]})}function ge(e){return e.indexOf("data:image/svg+xml,")===0}function fe(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function be(e){return e.indexOf("dashicons-")===0}function ve({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return h("div",{className:"menu-icon","aria-hidden":"true",children:h("br",{})});if(ge(e))return h("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:h("br",{})});if(fe(e))return h("img",{src:new URL(e).toString(),alt:""});if(be(e)){const n=e.replace("dashicons-","");return h(ie,{icon:n,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const et={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function tt(){const[e,n,o,i]=D("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(i&&o&&o.length>0)for(const r of o)l[r.slug]={color:r.color,name:r.name};if(n&&n?.length>0)for(const r of n)l[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)l[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:n,defaultPalette:o,allPalettes:l}}function xe({colours:e,attributesDefinition:n,attributes:o,setAttributes:i}){return(0,t.jsx)(p.__experimentalToolsPanel,{label:(0,w.__)("Custom colours","launchpad"),resetAll:l=>{if(l)for(const r of l)r()},children:(0,t.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>(0,t.jsx)(we,{colour:l,attributesDefinition:n,attributes:o,setAttributes:i},l.attributeName))})})}function we({colour:e,attributesDefinition:n,attributes:o,setAttributes:i}){const[l,r,a,d,u]=(0,b.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>n[e.attributeName]?.default!==o[e.attributeName],s=()=>{i({[e.attributeName]:n[e.attributeName]?.default??void 0})},g=(0,k.useRef)(null);return(0,t.jsx)(p.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:s,hasValue:m,onDeselect:s,label:e.label,isShownByDefault:!0,children:(0,t.jsx)(p.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:_})=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(p.Button,{ref:g,__next40pxDefaultSize:!0,onClick:_,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,t.jsx)(p.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,t.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,t.jsx)(p.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,t.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,t.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,t.jsx)(p.ColorPalette,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...d&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:o[e.attributeName],onChange:c=>{i({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function nt({ratioValue:e,ratioOnChange:n,imageFitValue:o,imageFitOnChange:i}){const[l,r,a]=D("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=r?.map(({name:c,ratio:_})=>({label:c,value:_}))??[],u=l?.map(({name:c,ratio:_})=>({label:c,value:_}))??[],m=[{label:O("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?u:[],...d||[],{label:O("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[s,g]=V(m.map(c=>c.value).includes(e)?e:"custom");return y(B,{children:[h(le,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:j("Aspect ratio","launchpad-blocks"),options:m,value:s,onChange:c=>{g(c),c!=="custom"&&n(c)}}),s==="custom"?h(A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:j("Custom aspect ratio","launchpad-blocks"),help:j("Please enter a custom aspect ratio in the format `width/height`."),onChange:n,value:e}):null,e!=="auto"&&i!==void 0?y(re,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:j("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&i(c)},value:o,children:[h(L,{label:"Cover",value:"cover"}),h(L,{label:"Contain",value:"contain"})]}):null]})}const _e=(e,n,o,i)=>{const{getBlocksByName:l,getBlockAttributes:r,getBlockParentsByBlockName:a}=se(N);return l(i).some(u=>{if(a(u,"core/template-part",!0).length)return!1;const{[o]:m}=r(u);return e!==u&&n===m})};function ot(e,n,o,i,l){const{[n]:r}=e,a=de(u=>_e(o,u,n,l),[o,n,l]);return ue(()=>{if(r===""){const u=o.slice(0,o.indexOf("-"));i({[n]:u})}if(a(r)){const u=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${n} to make it unique. Old value: ${r}. New value: ${u}`),i({[n]:u})}},[r,o,i,a,n]),S(()=>function({label:m,help:s,onValidChange:g,idAttribute:c}){const[_,Ve]=V(c);return h(A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof s=="function"?s(!a(_)):s,value:_,onChange:P=>{Ve(P),a(P)||g(P)}})},[a])}function ke({levelOptions:e,selectedLevel:n,setSelectedHeadingLevel:o}){return(0,t.jsx)(p.ToolbarDropdownMenu,{label:(0,w.__)("Change title heading element","launchpad-blocks"),icon:G(n),controls:e.map(i=>{{const l=i===n;return{icon:G(i),title:je(i),isDisabled:l,onClick:()=>o(i)}}})})}function je(e){switch(e){case"h2":return(0,w.__)("Heading 2","launchpad-blocks");case"h3":return(0,w.__)("Heading 3","launchpad-blocks");case"h4":return(0,w.__)("Heading 4","launchpad-blocks");case"h5":return(0,w.__)("Heading 5","launchpad-blocks");case"h6":return(0,w.__)("Heading 6","launchpad-blocks");case"p":return(0,w.__)("Paragraph","launchpad-blocks")}}function G(e){switch(e){case"h2":return K;case"h3":return X;case"h4":return Z;case"h5":return Q;case"h6":return Y;case"p":return ee}}function it(e){const{hasChildren:n}=T(o=>{const{getBlocks:i}=o(N);return{hasChildren:i(e).length>0}},[e]);return n}function lt({clientId:e,blockInfo:n,variations:o,allowSkip:i}){const{replaceInnerBlocks:l,updateBlockAttributes:r}=ce(N);return y(ae,{icon:n.icon,label:n.name,instructions:"Please choose a variation to start with:",children:[h("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":j("Block variations"),children:o.map(a=>y("li",{children:[h(M,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?h(ve,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&r(e,a.attributes),a.innerBlocks&&l(e,oe(a.innerBlocks),!1)}}),h("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),i&&h("div",{className:"block-editor-block-variation-picker__skip",children:h(M,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:j("Skip")})})]})}function rt({imageId:e,className:n="",size:o="full"}){const i=T(r=>typeof e=="number"&&e>0?r(R).getEntityRecord?.("postType","attachment",e):void 0,[e]);return i?h(B,{children:h("img",{...(()=>{const r={src:i.source_url,className:`attachment-${o} size-${o} ${n}`,width:i.media_details.width,height:i.media_details.height,srcSet:""};return i.media_details?.sizes?.[o]&&(r.src=i.media_details.sizes[o].source_url,r.width=i.media_details.sizes[o].width,r.height=i.media_details.sizes[o].height),r.srcSet=Object.entries(i.media_details.sizes??{}).map(([a,d])=>`${d.source_url} ${d.width}w`).join(", "),r})(),alt:i.alt_text||""})}):null}function ye(e){const n=[e.name];return e.attributes?n.push(e.attributes):n.push({}),e.innerBlocks?n.push(e.innerBlocks.map(o=>ye(o))):n.push([]),n}function at(e){const n=he(null);return n.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(n.current){const l=e()?.scrollHeight??0;if(l){const r=n.current.style;r.minHeight="",n.current.setAttribute("style",`${r.cssText}min-height: ${l}px !important`)}else n.current.style.minHeight=""}},1)}}var Ce=x(7390),U=x.n(Ce);const ze=[],Se=window.wp.hooks,W=window.wp.element;function Be({icon:e,size:n=24,...o},i){return(0,W.cloneElement)(e,{width:n,height:n,...o,ref:i})}const Ne=(0,W.forwardRef)(Be),Te=(0,t.jsx)(v.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(v.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),Pe=(0,t.jsx)(v.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(v.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),Ie={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,w.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,w.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,w.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,w.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0},lightbox:{title:(0,w.__)("Lightbox","launchpad-blocks")}},He={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,n)=>(0,t.jsx)($,{iconName:e,isEditorMode:!0,...n}),availableIcons:Object.fromEntries(Object.entries(Ie).filter(([e,n])=>n.makeAvailableToUser===!0))}};function F(){return(0,Se.applyFilters)("launchpadBlocks.icons",{...He})}function $e({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:n,onIconSelect:o,onReset:i}){const l=F(),[r,a]=(0,k.useState)("");return(0,t.jsxs)(p.Panel,{children:[(0,t.jsxs)(p.PanelHeader,{children:[e," ",i?(0,t.jsx)(p.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{i()},size:"small",children:"Reset"}):null]}),(0,t.jsxs)(p.PanelBody,{children:[(0,t.jsx)(p.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:r,onChange:d=>{a(d)}}),(0,t.jsx)("div",{children:Object.entries(l).map(([d,u])=>{if(Object.keys(u.availableIcons).length===0)return null;const m=Object.entries(u.availableIcons).filter(([s,{title:g}])=>!!(s.includes(r)||g.includes(r)));return(0,t.jsx)(De,{name:u.name,iconCount:m.length,children:(0,t.jsx)("div",{className:`icon-select ${d}-icon-select`,children:m.map(([s,{title:g}])=>{const c=n.iconName===s&&n.library===d;return(0,t.jsx)("button",{className:`icon-select-icon ${d}-icon-select-icon ${d}-icon-select-icon-${s}${c?" is-selected":""}`,onClick:()=>{o({iconName:s,library:d})},title:g,children:u.renderIcon(s)},s)})})},d)})})]})]})}function De({name:e,iconCount:n,children:o}){const[i,l]=(0,k.useState)(!1);return(0,k.useEffect)(()=>{n===0&&i&&l(!1)},[i,n]),(0,t.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,t.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,t.jsxs)(p.Button,{type:"button","aria-expanded":i,onClick:()=>{n>0&&l(!i)},disabled:n===0,className:"icon-select-group-accordion-header-button",children:[(0,t.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,t.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:n}),(0,t.jsx)(Ne,{className:"icon-select-group-accordion-arrow",icon:i?Te:Pe})]})}),i?o:null]})}const q={iconName:{type:"string",role:"content"},library:{type:"string",role:"content"},size:{type:"string",default:"2rem"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},iconColour:{type:"string"}};function J({attributes:e,setAttributes:n}){const{headerElement:o,headerContent:i,iconName:l,library:r,size:a,iconColour:d}=e,u=(0,b.useBlockProps)({style:{"--icon-size":a,"--icon-colour":d}}),m=F();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.BlockControls,{children:(0,t.jsx)(p.ToolbarGroup,{children:(0,t.jsx)(ke,{levelOptions:q.headerElement.enum,selectedLevel:o,setSelectedHeadingLevel:s=>{n({headerElement:s})}})})}),(0,t.jsxs)(b.InspectorControls,{children:[(0,t.jsx)(p.Panel,{children:(0,t.jsx)(p.PanelBody,{children:(0,t.jsx)(p.__experimentalUnitControl,{__next40pxDefaultSize:!0,label:"Icon size",value:a,onChange:s=>{n({size:s})}})})}),(0,t.jsx)($e,{dataOnSelectedIcon:{iconName:l,library:r},onIconSelect:s=>{n({iconName:s.iconName,library:s.library})}})]}),(0,t.jsx)(b.InspectorControls,{group:"styles",children:(0,t.jsx)(xe,{colours:[{attributeName:"iconColour",label:"Icon"}],attributes:e,attributesDefinition:q,setAttributes:n})}),(0,t.jsxs)("div",{...u,children:[(0,t.jsx)("div",{className:"icon",children:m[r]?.renderIcon(l)}),(0,t.jsx)(b.RichText,{tagName:o,value:i,onChange:s=>{n({headerContent:s})},placeholder:"Heading"})]})]})}J.displayName="HeadingWithIconBlock";function Ae({hasInnerBlocks:e}){return e?Me:Le}function Le(){return null}function Me(){return(0,t.jsx)(b.InnerBlocks.Content,{})}const Re={from:[],to:[]},Oe=[],dt={},ut=null;(0,f.registerBlockType)(U().name,{icon:(0,t.jsx)($,{iconName:"heading-with-icon"}),deprecated:ze,edit:J,save:Ae({hasInnerBlocks:!0}),transforms:Re}),me(),Oe.forEach(e=>{(0,f.registerBlockVariation)(U().name,e)})})(),z})());
