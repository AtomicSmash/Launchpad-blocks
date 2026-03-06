(function(y,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var C=v();for(var t in C)(typeof exports=="object"?exports:y)[t]=C[t]}})(globalThis,()=>(()=>{var B={7390:(t=>{t.exports={apiVersion:3,name:"launchpad-blocks/heading-with-icon",title:"Heading with icon",category:"theme",description:"Select an icon to display inline with a heading",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{iconName:{type:"string",role:"content"},library:{type:"string",role:"content"},size:{type:"string",default:"2rem"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},iconColour:{type:"string"}},providesContext:{},usesContext:[],example:{viewportWidth:280,attributes:{library:"launchpad-blocks",iconName:"heading-with-icon",size:"2rem",headerContent:"Heading"}},supports:{},styles:[{name:"default",label:"Default",isDefault:!0},{name:"t-1",label:"T1"},{name:"t-2",label:"T2"},{name:"t-3",label:"T3"},{name:"t-4",label:"T4"},{name:"t-5",label:"T5"},{name:"t-6",label:"T6"}]}})},y={};function v(t){var f=y[t];if(f!==void 0)return f.exports;var x=y[t]={exports:{}};return B[t](x,x.exports,v),x.exports}v.n=t=>{var f=t&&t.__esModule?()=>t.default:()=>t;return v.d(f,{a:f}),f},v.d=(t,f)=>{for(var x in f)v.o(f,x)&&!v.o(t,x)&&Object.defineProperty(t,x,{enumerable:!0,get:f[x]})},v.o=(t,f)=>Object.prototype.hasOwnProperty.call(t,f);var C={};return(()=>{"use strict";const t=window.ReactJSXRuntime,f=window.wp.blocks,x=window.wp.blockEditor,g=window.wp.components,ye=window.wp.coreData,N=window.wp.data,w=window.wp.i18n,b=window.wp.primitives,A=(0,t.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(b.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})}),O=(0,t.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(b.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})}),R=(0,t.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(b.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),V=(0,t.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(b.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})}),E=(0,t.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(b.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),G=(0,t.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(b.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})}),_=window.React;function Pe(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function U(e){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,t.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,t.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,t.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const W=(0,_.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(n=>{if(!n.default["icons/sprite.svg"]||typeof n.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return n.default}).catch(()=>({}));return{default:function(o){const{iconName:s,size:i,isEditorMode:l=!1,...r}=o;return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,...r,children:(0,t.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${s}`})})}}});function T(e){return(0,t.jsx)(_.Suspense,{fallback:null,children:(0,t.jsx)(W,{...e})})}function F(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:U})}function P(e,n){if(e===void 0)return e;let o;if(n==="both")o=e;else if(n==="horizontal")o=e.left;else if(n==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Ie(e,n,o){const s=n.spacing?.blockGap;let i="none";if(s===!0)i="both";else if(Array.isArray(s)){const r=s.includes("horizontal"),c=s.includes("vertical");r&&c?i="both":r?i="horizontal":c&&(i="vertical")}const l={columnGap:i==="both"||i==="horizontal"?P(o?.spacing?.blockGap,i):void 0,rowGap:i==="both"||i==="vertical"?P(o?.spacing?.blockGap,i):void 0};if(e===void 0&&typeof n.layout=="object"&&n?.layout?.default&&(e=n.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function q(e,n){return e.reduce((o,s)=>{if(s.name===n)o.push(s);else if(s.innerBlocks){const i=q(s.innerBlocks,n);i&&o.push(...i)}return o},[])}const He=()=>{const e=useMemo(()=>({per_page:-1}),[]),n=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=useMemo(()=>({}),[]),{postTypes:s,taxonomies:i}=useSelect(m=>{const{getEntityRecords:d}=m(coreStore),p=d("root","postType",e),a=d("root","taxonomy",n);if(!a)return{postTypes:p,taxonomies:a};for(const h of a)o[h.slug]=d("taxonomy",h.slug);return{postTypes:p,taxonomies:a}},[e,n,o]),l=["attachment"],r=[],c=s?.filter(({viewable:m,slug:d})=>m&&!l.includes(d));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const u={};for(const m of c){const d=i?.filter(({types:p,slug:a})=>p.includes(m.slug)&&!r.includes(a));d&&(u[m.slug]=d.map(p=>{const a=o?.[p.slug]??null;return{...p,terms:a}}))}return{filteredPostTypes:c,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function $e({list:e,containerClassName:n,renderItem:o}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${n!==void 0&&n!==""?` ${n}`:""}`,children:e.map(s=>o({listItem:s,buttonProps:{type:"button",className:`custom-multiple-select-list-item${s.isSelected?" is-selected":""}`}}))})]})}function J(e){return e.indexOf("data:image/svg+xml;")===0}function K(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function X(e){return e.indexOf("dashicons-")===0}function Z({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(J(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(K(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(X(e)){const n=e.replace("dashicons-","");return jsx(DashIcon,{icon:n,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const De={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Me(){const[e,n,o,s]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),i={};if(s&&o&&o.length>0)for(const l of o)i[l.slug]={color:l.color,name:l.name};if(n&&n?.length>0)for(const l of n)i[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)i[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:n,defaultPalette:o,allPalettes:i}}function Q({colours:e,attributesDefinition:n,attributes:o,setAttributes:s}){return(0,t.jsx)(g.__experimentalToolsPanel,{label:(0,w.__)("Custom colours","launchpad"),resetAll:i=>{if(i)for(const l of i)l()},children:(0,t.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(i=>(0,t.jsx)(Y,{colour:i,attributesDefinition:n,attributes:o,setAttributes:s},i.attributeName))})})}function Y({colour:e,attributesDefinition:n,attributes:o,setAttributes:s}){const[i,l,r,c,u]=(0,x.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>n[e.attributeName]?.default!==o[e.attributeName],d=()=>{s({[e.attributeName]:n[e.attributeName]?.default??void 0})},p=(0,_.useRef)(null);return(0,t.jsx)(g.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:m,onDeselect:d,label:e.label,isShownByDefault:!0,children:(0,t.jsx)(g.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:a,onToggle:h})=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(g.Button,{ref:p,__next40pxDefaultSize:!0,onClick:h,"aria-expanded":a,className:`block-editor-panel-color-gradient-settings__dropdown${a?" is-open":""}`,children:(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,t.jsx)(g.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,t.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,t.jsx)(g.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,t.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,t.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,t.jsx)(g.ColorPalette,{colors:[...i&&i?.length>0?[{name:"User",colors:i}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...c&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:o[e.attributeName],onChange:a=>{s({[e.attributeName]:a})},disableCustomColors:!u})})})})})},e.attributeName)}function Le({ratioValue:e,ratioOnChange:n,imageFitValue:o,imageFitOnChange:s}){const[i,l,r]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=l?.map(({name:a,ratio:h})=>({label:a,value:h}))??[],u=i?.map(({name:a,ratio:h})=>({label:a,value:h}))??[],m=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?u:[],...c||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,p]=useState(m.map(a=>a.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:m,value:d,onChange:a=>{p(a),a!=="custom"&&n(a)}}),d==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:n,value:e}):null,e!=="auto"&&s!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:a=>{typeof a=="string"&&["contain","cover"].includes(a)&&s(a)},value:o,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const ee=(e,n,o,s)=>{const{getBlocksByName:i,getBlockAttributes:l,getBlockParentsByBlockName:r}=select(blockEditorStore);return i(s).some(u=>{if(r(u,"core/template-part",!0).length)return!1;const{[o]:m}=l(u);return e!==u&&n===m})};function Ae(e,n,o,s,i){const{[n]:l}=e,r=useCallback(u=>ee(o,u,n,i),[o,n,i]);return useEffect(()=>{if(l===""){const u=o.slice(0,o.indexOf("-"));s({[n]:u})}if(r(l)){const u=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${n} to make it unique. Old value: ${l}. New value: ${u}`),s({[n]:u})}},[l,o,s,r,n]),useMemo(()=>function({label:m,help:d,onValidChange:p,idAttribute:a}){const[h,j]=useState(a);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof d=="function"?d(!r(h)):d,value:h,onChange:k=>{j(k),r(k)||p(k)}})},[r])}function te({levelOptions:e,selectedLevel:n,setSelectedHeadingLevel:o}){return(0,t.jsx)(g.ToolbarDropdownMenu,{label:(0,w.__)("Change title heading element","launchpad-blocks"),icon:I(n),controls:e.map(s=>{{const i=s===n;return{icon:I(s),title:ne(s),isDisabled:i,onClick:()=>o(s)}}})})}function ne(e){switch(e){case"h2":return(0,w.__)("Heading 2","launchpad-blocks");case"h3":return(0,w.__)("Heading 3","launchpad-blocks");case"h4":return(0,w.__)("Heading 4","launchpad-blocks");case"h5":return(0,w.__)("Heading 5","launchpad-blocks");case"h6":return(0,w.__)("Heading 6","launchpad-blocks");case"p":return(0,w.__)("Paragraph","launchpad-blocks")}}function I(e){switch(e){case"h2":return A;case"h3":return O;case"h4":return R;case"h5":return V;case"h6":return E;case"p":return G}}function Oe(e){const{hasChildren:n}=useSelect(o=>{const{getBlocks:s}=o(blockEditorStore);return{hasChildren:s(e).length>0}},[e]);return n}function Re({clientId:e,blockInfo:n,variations:o,allowSkip:s}){const{replaceInnerBlocks:i,updateBlockAttributes:l}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:n.icon,label:n.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:o.map(r=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?jsx(Z,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&l(e,r.attributes),r.innerBlocks&&i(e,createBlocksFromInnerBlocksTemplate(r.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),s&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{i(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function Ve({imageId:e,className:n="",size:o="full"}){const s=useSelect(l=>typeof e=="number"&&e>0?l(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!s)return null;const i=()=>{const l={src:s.source_url,className:`attachment-${o} size-${o} ${n}`,width:s.media_details.width,height:s.media_details.height,srcSet:""};return s.media_details?.sizes?.[o]&&(l.src=s.media_details.sizes[o].source_url,l.width=s.media_details.sizes[o].width,l.height=s.media_details.sizes[o].height),l.srcSet=Object.entries(s.media_details.sizes??{}).map(([r,c])=>`${c.source_url} ${c.width}w`).join(", "),l};return jsx(Fragment,{children:jsx("img",{...i(),alt:s.alt_text||""})})}function oe(e){const n=[e.name];return e.attributes?n.push(e.attributes):n.push({}),e.innerBlocks?n.push(e.innerBlocks.map(o=>oe(o))):n.push([]),n}function Ee(e){const n=useRef(null);return n.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(n.current){const i=e()?.scrollHeight??0;if(i){const l=n.current.style;l.minHeight="",n.current.setAttribute("style",`${l.cssText}min-height: ${i}px !important`)}else n.current.style.minHeight=""}},1)}}var se=v(7390),z=v.n(se);const ie=[],le=window.wp.tokenList;var re=v.n(le);const ae=window.wp.hooks,H=window.wp.element;function ce({icon:e,size:n=24,...o},s){return(0,H.cloneElement)(e,{width:n,height:n,...o,ref:s})}const de=(0,H.forwardRef)(ce),ue=(0,t.jsx)(b.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(b.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),he=(0,t.jsx)(b.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(b.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),me={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,w.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,w.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,w.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,w.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0}},pe={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,n)=>(0,t.jsx)(T,{iconName:e,isEditorMode:!0,...n}),availableIcons:Object.fromEntries(Object.entries(me).filter(([e,n])=>n.makeAvailableToUser===!0))}};function $(){return(0,ae.applyFilters)("launchpadBlocks.icons",{...pe})}function ge({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:n,onIconSelect:o,onReset:s}){const i=$(),[l,r]=(0,_.useState)("");return(0,t.jsxs)(g.Panel,{children:[(0,t.jsxs)(g.PanelHeader,{children:[e," ",s?(0,t.jsx)(g.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{s()},size:"small",children:"Reset"}):null]}),(0,t.jsxs)(g.PanelBody,{children:[(0,t.jsx)(g.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:l,onChange:c=>{r(c)}}),(0,t.jsx)("div",{children:Object.entries(i).map(([c,u])=>{if(Object.keys(u.availableIcons).length===0)return null;const m=Object.entries(u.availableIcons).filter(([d,{title:p}])=>!!(d.includes(l)||p.includes(l)));return(0,t.jsx)(fe,{name:u.name,iconCount:m.length,children:(0,t.jsx)("div",{className:`icon-select ${c}-icon-select`,children:m.map(([d,{title:p}])=>{const a=n.iconName===d&&n.library===c;return(0,t.jsx)("button",{className:`icon-select-icon ${c}-icon-select-icon ${c}-icon-select-icon-${d}${a?" is-selected":""}`,onClick:()=>{o({iconName:d,library:c})},title:p,children:u.renderIcon(d)},d)})})},c)})})]})]})}function fe({name:e,iconCount:n,children:o}){const[s,i]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{n===0&&s&&i(!1)},[s,n]),(0,t.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,t.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,t.jsxs)(g.Button,{type:"button","aria-expanded":s,onClick:()=>{n>0&&i(!s)},disabled:n===0,className:"icon-select-group-accordion-header-button",children:[(0,t.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,t.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:n}),(0,t.jsx)(de,{className:"icon-select-group-accordion-arrow",icon:s?ue:he})]})}),s?o:null]})}const D={iconName:{type:"string",role:"content"},library:{type:"string",role:"content"},size:{type:"string",default:"2rem"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},iconColour:{type:"string"}};function M({clientId:e,attributes:n,setAttributes:o}){const{headerElement:s,headerContent:i,iconName:l,library:r,size:c,iconColour:u}=n,{thisBlocksStyles:m}=(0,N.useSelect)(h=>{const{getBlockStyles:j}=h(f.store);return{thisBlocksStyles:j(z().name)}},[]),{activeStyle:d}=(0,N.useSelect)(h=>{const{getBlock:j}=h(x.store),k=j(e).attributes?.className??"";for(const S of new(re())(k).values()){if(!S.includes("is-style-"))continue;const je=S.substring(9),L=m?.find(({name:ke})=>ke===je);if(L)return{activeStyle:L}}return{activeStyle:m?.find(S=>S.isDefault)}},[e,m]),p=(0,x.useBlockProps)({style:{"--icon-size":c,"--icon-colour":u}}),a=$();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.BlockControls,{children:(0,t.jsx)(g.ToolbarGroup,{children:(0,t.jsx)(te,{levelOptions:D.headerElement.enum,selectedLevel:s,setSelectedHeadingLevel:h=>{o({headerElement:h})}})})}),(0,t.jsxs)(x.InspectorControls,{children:[(0,t.jsx)(g.Panel,{children:(0,t.jsx)(g.PanelBody,{children:(0,t.jsx)(g.__experimentalUnitControl,{__next40pxDefaultSize:!0,label:"Icon size",value:c,onChange:h=>{o({size:h})}})})}),(0,t.jsx)(ge,{dataOnSelectedIcon:{iconName:l,library:r},onIconSelect:h=>{o({iconName:h.iconName,library:h.library})}})]}),(0,t.jsx)(x.InspectorControls,{group:"styles",children:(0,t.jsx)(Q,{colours:[{attributeName:"iconColour",label:"Icon"}],attributes:n,attributesDefinition:D,setAttributes:o})}),(0,t.jsxs)("div",{...p,children:[(0,t.jsx)("div",{className:"icon",children:a[r]?.renderIcon(l)}),(0,t.jsx)(x.RichText,{tagName:s,value:i,onChange:h=>{o({headerContent:h})},className:d?`is-style-${d.name}`:void 0,placeholder:"Heading"})]})]})}M.displayName="HeadingWithIconBlock";function xe({hasInnerBlocks:e}){return e?ve:be}function be(){return null}function ve(){return(0,t.jsx)(x.InnerBlocks.Content,{})}const we={from:[],to:[]},_e=[],We={},Fe=null;(0,f.registerBlockType)(z().name,{icon:(0,t.jsx)(T,{iconName:"heading-with-icon"}),deprecated:ie,edit:M,save:xe({hasInnerBlocks:!0}),transforms:we}),F(),_e.forEach(e=>{(0,f.registerBlockVariation)(z().name,e)})})(),C})());
