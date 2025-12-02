(function(j,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var k=x();for(var n in k)(typeof exports=="object"?exports:j)[n]=k[n]}})(globalThis,()=>(()=>{var C={7390:(n=>{n.exports={apiVersion:3,name:"launchpad-blocks/heading-with-icon",title:"Heading with icon",category:"theme",description:"Select an icon to display inline with a heading",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{iconName:{type:"string",role:"content"},library:{type:"string",role:"content"},size:{type:"string",default:"2rem"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},headerStyle:{type:"string",enum:["","t-1","t-2","t-3","t-4","t-5","t-6"],default:""}},providesContext:{},usesContext:[],example:{viewportWidth:280,attributes:{library:"launchpad-blocks",iconName:"heading-with-icon",size:"2rem",headerContent:"Heading",headerElement:"h2",headerStyle:""}},supports:{}}})},j={};function x(n){var p=j[n];if(p!==void 0)return p.exports;var g=j[n]={exports:{}};return C[n](g,g.exports,x),g.exports}x.n=n=>{var p=n&&n.__esModule?()=>n.default:()=>n;return x.d(p,{a:p}),p},x.d=(n,p)=>{for(var g in p)x.o(p,g)&&!x.o(n,g)&&Object.defineProperty(n,g,{enumerable:!0,get:p[g]})},x.o=(n,p)=>Object.prototype.hasOwnProperty.call(n,p);var k={};return(()=>{"use strict";const n=window.ReactJSXRuntime,p=window.wp.blocks,g=window.wp.blockEditor,f=window.wp.components,fe=window.wp.coreData,xe=window.wp.data,v=window.wp.i18n,m=window.wp.primitives,H=(0,n.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(m.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})}),$=(0,n.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(m.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})}),A=(0,n.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(m.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),L=(0,n.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(m.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})}),M=(0,n.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(m.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),D=(0,n.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(m.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})}),_=window.React;function ye(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function O(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,n.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,n.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,n.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const R=(0,_.lazy)(async()=>{const e=await import("/wp-content/plugins/launchpad-blocks/build/assets-manifest.json",{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(i){const{iconName:o,size:l,isEditorMode:s=!1,...r}=i;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...r,children:(0,n.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function S(e){return(0,n.jsx)(_.Suspense,{fallback:null,children:(0,n.jsx)(R,{...e})})}function V(){(0,p.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:O})}function z(e,t){if(e===void 0)return e;let i;if(t==="both")i=e;else if(t==="horizontal")i=e.left;else if(t==="vertical")i=e.top;else return;return i.startsWith("var:")?`var(--wp--${i.replace("var:","").split("|").join("--")})`:i}function Ce(e,t,i){const o=t.spacing?.blockGap;let l="none";if(o===!0)l="both";else if(Array.isArray(o)){const r=o.includes("horizontal"),c=o.includes("vertical");r&&c?l="both":r?l="horizontal":c&&(l="vertical")}const s={columnGap:l==="both"||l==="horizontal"?z(i?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?z(i?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function E(e,t){return e.reduce((i,o)=>{if(o.name===t)i.push(o);else if(o.innerBlocks){const l=E(o.innerBlocks,t);l&&i.push(...l)}return i},[])}const Se=()=>{const{postTypes:e,taxonomies:t}=useSelect(i=>{const{getEntityRecords:o}=i(coreStore),l=["attachment"],s=o("root","postType",{per_page:-1})?.filter(({viewable:d,slug:h})=>d&&!l.includes(h));if(!s||s.length===0)return{postTypes:s,taxonomies:void 0};const r={},c=[];for(const d of s){const h=o("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:a,slug:b})=>a.includes(d.slug)&&!c.includes(b));h&&(r[d.slug]=h.map(a=>{const b=o("taxonomy",a.slug);return{...a,terms:b}}))}return{postTypes:s,taxonomies:r}},[]);return{filteredPostTypes:e,mappedTaxonomies:t===void 0||Object.values(t).length===0?void 0:t}};function ze({list:e,containerClassName:t,renderItem:i}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>i({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function G(e){return e.indexOf("data:image/svg+xml;")===0}function U(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function W(e){return e.indexOf("dashicons-")===0}function F({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(G(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(U(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(W(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Be={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ne({colours:e,attributesDefinition:t,attributes:i,setAttributes:o}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:l=>{if(l)for(const s of l)s()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>jsx(q,{colour:l,attributesDefinition:t,attributes:i,setAttributes:o},l.attributeName))})})}function q({colour:e,attributesDefinition:t,attributes:i,setAttributes:o}){const[l,s,r,c,d]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==i[e.attributeName],a=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:a,hasValue:h,onDeselect:a,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:u,onToggle:w})=>jsx(Fragment,{children:jsx(Button,{ref:b,__next40pxDefaultSize:!0,onClick:w,"aria-expanded":u,className:`block-editor-panel-color-gradient-settings__dropdown${u?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:i[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...c&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:i[e.attributeName],onChange:u=>{o({[e.attributeName]:u})},disableCustomColors:!d})})})})})},e.attributeName)}function Te({ratioValue:e,ratioOnChange:t,imageFitValue:i,imageFitOnChange:o}){const[l,s,r]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=s?.map(({name:u,ratio:w})=>({label:u,value:w}))??[],d=l?.map(({name:u,ratio:w})=>({label:u,value:w}))??[],h=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?d:[],...c||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[a,b]=useState(h.map(u=>u.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:h,value:a,onChange:u=>{b(u),u!=="custom"&&t(u)}}),a==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:u=>{typeof u=="string"&&["contain","cover"].includes(u)&&o(u)},value:i,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const J=(e,t,i,o)=>{const{getBlocksByName:l,getBlockAttributes:s,getBlockParentsByBlockName:r}=select(blockEditorStore);return l(o).some(d=>{if(r(d,"core/template-part",!0).length)return!1;const{[i]:h}=s(d);return e!==d&&t===h})};function Ie(e,t,i,o,l){const{[t]:s}=e,r=useCallback(d=>J(i,d,t,l),[i,t,l]);return useEffect(()=>{if(s===""){const d=i.slice(0,i.indexOf("-"));o({[t]:d})}if(r(s)){const d=i.slice(0,i.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${s}. New value: ${d}`),o({[t]:d})}},[s,i,o,r,t]),useMemo(()=>function({label:h,help:a,onValidChange:b,idAttribute:u}){const[w,ge]=useState(u);return jsx(TextControl,{label:h,help:typeof a=="function"?a(!r(w)):a,value:w,onChange:y=>{ge(y),r(y)||b(y)}})},[r])}function K({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:i}){return(0,n.jsx)(f.ToolbarDropdownMenu,{label:(0,v.__)("Change title heading element","launchpad-blocks"),icon:B(t),controls:e.map(o=>{{const l=o===t;return{icon:B(o),title:X(o),isDisabled:l,onClick:()=>i(o)}}})})}function X(e){switch(e){case"h2":return(0,v.__)("Heading 2","launchpad-blocks");case"h3":return(0,v.__)("Heading 3","launchpad-blocks");case"h4":return(0,v.__)("Heading 4","launchpad-blocks");case"h5":return(0,v.__)("Heading 5","launchpad-blocks");case"h6":return(0,v.__)("Heading 6","launchpad-blocks");case"p":return(0,v.__)("Paragraph","launchpad-blocks")}}function B(e){switch(e){case"h2":return H;case"h3":return $;case"h4":return A;case"h5":return L;case"h6":return M;case"p":return D}}function Pe(e){const{hasChildren:t}=useSelect(i=>{const{getBlocks:o}=i(blockEditorStore);return{hasChildren:o(e).length>0}},[e]);return t}function He({clientId:e,blockInfo:t,variations:i,allowSkip:o}){const{replaceInnerBlocks:l,updateBlockAttributes:s}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:i.map(r=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?jsx(F,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&s(e,r.attributes),r.innerBlocks&&l(e,createBlocksFromInnerBlocksTemplate(r.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),o&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function $e({imageId:e,className:t="",size:i="full"}){const o=useSelect(s=>typeof e=="number"&&e>0?s(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!o)return null;const l=()=>{const s={src:o.source_url,className:`attachment-${i} size-${i} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[i]&&(s.src=o.media_details.sizes[i].source_url,s.width=o.media_details.sizes[i].width,s.height=o.media_details.sizes[i].height),s.srcSet=Object.entries(o.media_details.sizes??{}).map(([r,c])=>`${c.source_url} ${c.width}w`).join(", "),s};return jsx(Fragment,{children:jsx("img",{...l(),alt:o.alt_text||""})})}function Z(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(i=>Z(i))):t.push([]),t}function Ae(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const s=t.current.style;s.minHeight="",t.current.setAttribute("style",`${s.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}var Q=x(7390),N=x.n(Q);const Y=[],ee=window.wp.hooks,T=window.wp.element;function te({icon:e,size:t=24,...i},o){return(0,T.cloneElement)(e,{width:t,height:t,...i,ref:o})}const ne=(0,T.forwardRef)(te),oe=(0,n.jsx)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(m.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),ie=(0,n.jsx)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(m.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),le={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,v.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,v.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,v.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,v.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0}},se={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,t)=>(0,n.jsx)(S,{iconName:e,isEditorMode:!0,...t}),availableIcons:Object.fromEntries(Object.entries(le).filter(([e,t])=>t.makeAvailableToUser===!0))}};function I(){return(0,ee.applyFilters)("launchpadBlocks.icons",{...se})}function re({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:t,onIconSelect:i,onReset:o}){const l=I(),[s,r]=(0,_.useState)("");return(0,n.jsxs)(f.Panel,{children:[(0,n.jsxs)(f.PanelHeader,{children:[e," ",o?(0,n.jsx)(f.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{o()},size:"small",children:"Reset"}):null]}),(0,n.jsxs)(f.PanelBody,{children:[(0,n.jsx)(f.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:s,onChange:c=>{r(c)}}),(0,n.jsx)("div",{children:Object.entries(l).map(([c,d])=>{if(Object.keys(d.availableIcons).length===0)return null;const h=Object.entries(d.availableIcons).filter(([a,{title:b}])=>!!(a.includes(s)||b.includes(s)));return(0,n.jsx)(ae,{name:d.name,iconCount:h.length,children:(0,n.jsx)("div",{className:`icon-select ${c}-icon-select`,children:h.map(([a,{title:b}])=>{const u=t.iconName===a&&t.library===c;return(0,n.jsx)("button",{className:`icon-select-icon ${c}-icon-select-icon ${c}-icon-select-icon-${a}${u?" is-selected":""}`,onClick:()=>{i({iconName:a,library:c})},title:b,children:d.renderIcon(a)},a)})})},c)})})]})]})}function ae({name:e,iconCount:t,children:i}){const[o,l]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{t===0&&o&&l(!1)},[o,t]),(0,n.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,n.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,n.jsxs)(f.Button,{type:"button","aria-expanded":o,onClick:()=>{t>0&&l(!o)},disabled:t===0,className:"icon-select-group-accordion-header-button",children:[(0,n.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,n.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:t}),(0,n.jsx)(ne,{className:"icon-select-group-accordion-arrow",icon:o?oe:ie})]})}),o?i:null]})}const ce={iconName:{type:"string",role:"content"},library:{type:"string",role:"content"},size:{type:"string",default:"2rem"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},headerStyle:{type:"string",enum:["","t-1","t-2","t-3","t-4","t-5","t-6"],default:""}};function P({attributes:e,setAttributes:t}){const{headerElement:i,headerContent:o,headerStyle:l,iconName:s,library:r,size:c}=e,d=(0,g.useBlockProps)({style:{"--icon-size":c}}),h=I();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.BlockControls,{children:(0,n.jsx)(f.ToolbarGroup,{children:(0,n.jsx)(K,{levelOptions:ce.headerElement.enum,selectedLevel:i,setSelectedHeadingLevel:a=>{t({headerElement:a})}})})}),(0,n.jsx)(g.InspectorControls,{children:(0,n.jsx)(f.Panel,{children:(0,n.jsx)(f.PanelBody,{title:"Heading style",children:(0,n.jsx)(f.SelectControl,{label:"Heading style",help:"Override default heading style",value:l,onChange:a=>{t({headerStyle:a})},options:[{value:"",label:"Default"},{value:"t-1",label:"T1"},{value:"t-2",label:"T2"},{value:"t-3",label:"T3"},{value:"t-4",label:"T4"},{value:"t-5",label:"T5"},{value:"t-6",label:"T6"}]})})})}),(0,n.jsxs)(g.InspectorControls,{children:[(0,n.jsx)(f.Panel,{children:(0,n.jsx)(f.PanelBody,{children:(0,n.jsx)(f.__experimentalUnitControl,{__next40pxDefaultSize:!0,label:"Icon size",value:c,onChange:a=>{t({size:a})}})})}),(0,n.jsx)(re,{dataOnSelectedIcon:{iconName:s,library:r},onIconSelect:a=>{t({iconName:a.iconName,library:a.library})}})]}),(0,n.jsxs)("div",{...d,children:[(0,n.jsx)("div",{className:"icon",children:h[r]?.renderIcon(s)}),(0,n.jsx)(g.RichText,{tagName:i,value:o,onChange:a=>{t({headerContent:a})},placeholder:"Heading",className:l&&`is-style-${l}`})]})]})}P.displayName="HeadingWithIconBlock";function de({hasInnerBlocks:e}){return e?he:ue}function ue(){return null}function he(){return(0,n.jsx)(g.InnerBlocks.Content,{})}const pe={from:[],to:[]},me=[],De={},Oe=null;(0,p.registerBlockType)(N().name,{icon:(0,n.jsx)(S,{iconName:"heading-with-icon"}),deprecated:Y,edit:P,save:de({hasInnerBlocks:!0}),transforms:pe}),V(),me.forEach(e=>{(0,p.registerBlockVariation)(N().name,e)})})(),k})());
