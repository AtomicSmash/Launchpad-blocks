(function(_,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var y=g();for(var o in y)(typeof exports=="object"?exports:_)[o]=y[o]}})(globalThis,()=>(()=>{var C={3069:(o=>{o.exports={apiVersion:3,name:"launchpad-blocks/accordion-group",title:"Accordion group",category:"theme",description:"A group of accordions.",textdomain:"launchpad-blocks",keywords:["accordion"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{isMultiple:{type:"boolean",default:!1},accordionGroupId:{type:"string",default:""},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"}},example:{attributes:{isMultiple:!0,accordionGroupId:"group-123",headerElement:"h3"},innerBlocks:[{name:"launchpad-blocks/accordion",attributes:{isInitiallyOpen:!0,accordionId:"single-123",headerContent:"Joke 1"},innerBlocks:[{name:"core/paragraph",attributes:{content:"I was going to sail around the globe in the world\u2019s smallest ship but I bottled it."}}]},{name:"launchpad-blocks/accordion",attributes:{isInitiallyOpen:!0,accordionId:"single-456",headerContent:"Joke 2"},innerBlocks:[{name:"core/paragraph",attributes:{content:"I sailed through my driving test. That\u2019s why I failed it."}}]},{name:"launchpad-blocks/accordion",attributes:{isInitiallyOpen:!0,accordionId:"single-789",headerContent:"Joke 3"},innerBlocks:[{name:"core/paragraph",attributes:{content:"I love the Olympics. My friend and I invented a new type of relay baton: well, he came up with the idea, I ran with it."}}]}]},supports:{color:!0,typography:{fontSize:!0,lineHeight:!0,textAlign:!0},shadow:!0,spacing:{padding:!0,margin:!0}},providesContext:{"launchpad-blocks/accordion-heading-level":"headerElement"},usesContext:[],allowedBlocks:["launchpad-blocks/accordion"]}})},_={};function g(o){var h=_[o];if(h!==void 0)return h.exports;var u=_[o]={exports:{}};return C[o](u,u.exports,g),u.exports}g.n=o=>{var h=o&&o.__esModule?()=>o.default:()=>o;return g.d(h,{a:h}),h},g.d=(o,h)=>{for(var u in h)g.o(h,u)&&!g.o(o,u)&&Object.defineProperty(o,u,{enumerable:!0,get:h[u]})},g.o=(o,h)=>Object.prototype.hasOwnProperty.call(o,h);var y={};return(()=>{"use strict";const o=window.ReactJSXRuntime,h=window.wp.blocks,u=window.wp.blockEditor,v=window.wp.components,le=window.wp.coreData,z=window.wp.data,w=window.wp.i18n,m=window.wp.primitives,P=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})}),H=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})}),T=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),M=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})}),q=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),D=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})}),k=window.React;function ge(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function $(e){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,o.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,o.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,o.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const E=(0,k.lazy)(async()=>{const e=await import("/wp-content/plugins/launchpad-blocks/build/assets-manifest.json",{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(a){const{iconName:n,size:i,isEditorMode:r=!1,...c}=a;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,...c,children:(0,o.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function N(e){return(0,o.jsx)(k.Suspense,{fallback:null,children:(0,o.jsx)(E,{...e})})}function O(){(0,h.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:$})}function S(e,t){if(e===void 0)return e;let a;if(t==="both")a=e;else if(t==="horizontal")a=e.left;else if(t==="vertical")a=e.top;else return;return a.startsWith("var:")?`var(--wp--${a.replace("var:","").split("|").join("--")})`:a}function fe(e,t,a){const n=t.spacing?.blockGap;let i="none";if(n===!0)i="both";else if(Array.isArray(n)){const c=n.includes("horizontal"),p=n.includes("vertical");c&&p?i="both":c?i="horizontal":p&&(i="vertical")}const r={columnGap:i==="both"||i==="horizontal"?S(a?.spacing?.blockGap,i):void 0,rowGap:i==="both"||i==="vertical"?S(a?.spacing?.blockGap,i):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let c="";return e.minimumColumnWidth?c=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(c=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:c,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function R(e,t){return e.reduce((a,n)=>{if(n.name===t)a.push(n);else if(n.innerBlocks){const i=R(n.innerBlocks,t);i&&a.push(...i)}return a},[])}const ve=()=>{const{postTypes:e,taxonomies:t}=useSelect(a=>{const{getEntityRecords:n}=a(coreStore),i=["attachment"],r=n("root","postType",{per_page:-1})?.filter(({viewable:s,slug:l})=>s&&!i.includes(l));if(!r||r.length===0)return{postTypes:r,taxonomies:void 0};const c={},p=[];for(const s of r){const l=n("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:b,slug:f})=>b.includes(s.slug)&&!p.includes(f));l&&(c[s.slug]=l.map(b=>{const f=n("taxonomy",b.slug);return{...b,terms:f}}))}return{postTypes:r,taxonomies:c}},[]);return{filteredPostTypes:e,mappedTaxonomies:t===void 0||Object.values(t).length===0?void 0:t}};function xe({list:e,containerClassName:t,renderItem:a}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>a({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function L(e){return e.indexOf("data:image/svg+xml;")===0}function G(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function V(e){return e.indexOf("dashicons-")===0}function U({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(L(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(G(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(V(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const we={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function ke({colours:e,attributesDefinition:t,attributes:a,setAttributes:n}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:i=>{if(i)for(const r of i)r()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(i=>jsx(F,{colour:i,attributesDefinition:t,attributes:a,setAttributes:n},i.attributeName))})})}function F({colour:e,attributesDefinition:t,attributes:a,setAttributes:n}){const[i,r,c,p,s]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),l=()=>t[e.attributeName]?.default!==a[e.attributeName],b=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:b,hasValue:l,onDeselect:b,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:d,onToggle:x})=>jsx(Fragment,{children:jsx(Button,{ref:f,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":d,className:`block-editor-panel-color-gradient-settings__dropdown${d?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:a[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...i&&i?.length>0?[{name:"User",colors:i}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...p&&c&&c.length>0?[{name:"Default",colors:c}]:[]],value:a[e.attributeName],onChange:d=>{n({[e.attributeName]:d})},disableCustomColors:!s})})})})})},e.attributeName)}function _e({ratioValue:e,ratioOnChange:t,imageFitValue:a,imageFitOnChange:n}){const[i,r,c]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),p=r?.map(({name:d,ratio:x})=>({label:d,value:x}))??[],s=i?.map(({name:d,ratio:x})=>({label:d,value:x}))??[],l=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...c?s:[],...p||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[b,f]=useState(l.map(d=>d.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:l,value:b,onChange:d=>{f(d),d!=="custom"&&t(d)}}),b==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:d=>{typeof d=="string"&&["contain","cover"].includes(d)&&n(d)},value:a,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const W=(e,t,a,n)=>{const{getBlocksByName:i,getBlockAttributes:r,getBlockParentsByBlockName:c}=(0,z.select)(u.store);return i(n).some(s=>{if(c(s,"core/template-part",!0).length)return!1;const{[a]:l}=r(s);return e!==s&&t===l})};function J(e,t,a,n,i){const{[t]:r}=e,c=(0,k.useCallback)(s=>W(a,s,t,i),[a,t,i]);return(0,k.useEffect)(()=>{if(r===""){const s=a.slice(0,a.indexOf("-"));n({[t]:s})}if(c(r)){const s=a.slice(0,a.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${s}`),n({[t]:s})}},[r,a,n,c,t]),(0,k.useMemo)(()=>function({label:l,help:b,onValidChange:f,idAttribute:d}){const[x,se]=(0,k.useState)(d);return(0,o.jsx)(v.TextControl,{label:l,help:typeof b=="function"?b(!c(x)):b,value:x,onChange:j=>{se(j),c(j)||f(j)}})},[c])}function X({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:a}){return(0,o.jsx)(v.ToolbarDropdownMenu,{label:(0,w.__)("Change title heading element","launchpad-blocks"),icon:B(t),controls:e.map(n=>{{const i=n===t;return{icon:B(n),title:Z(n),isDisabled:i,onClick:()=>a(n)}}})})}function Z(e){switch(e){case"h2":return(0,w.__)("Heading 2","launchpad-blocks");case"h3":return(0,w.__)("Heading 3","launchpad-blocks");case"h4":return(0,w.__)("Heading 4","launchpad-blocks");case"h5":return(0,w.__)("Heading 5","launchpad-blocks");case"h6":return(0,w.__)("Heading 6","launchpad-blocks");case"p":return(0,w.__)("Paragraph","launchpad-blocks")}}function B(e){switch(e){case"h2":return P;case"h3":return H;case"h4":return T;case"h5":return M;case"h6":return q;case"p":return D}}function ye(e){const{hasChildren:t}=useSelect(a=>{const{getBlocks:n}=a(blockEditorStore);return{hasChildren:n(e).length>0}},[e]);return t}function je({clientId:e,blockInfo:t,variations:a,allowSkip:n}){const{replaceInnerBlocks:i,updateBlockAttributes:r}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:a.map(c=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof c.icon=="string"?jsx(U,{iconString:c.icon}):c.icon,iconSize:48,onClick:()=>{c.attributes&&r(e,c.attributes),c.innerBlocks&&i(e,createBlocksFromInnerBlocksTemplate(c.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:c.title})]},c.name))}),n&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{i(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function Ce({imageId:e,className:t="",size:a="full"}){const n=useSelect(r=>typeof e=="number"&&e>0?r(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!n)return null;const i=()=>{const r={src:n.source_url,className:`attachment-${a} size-${a} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[a]&&(r.src=n.media_details.sizes[a].source_url,r.width=n.media_details.sizes[a].width,r.height=n.media_details.sizes[a].height),r.srcSet=Object.entries(n.media_details.sizes??{}).map(([c,p])=>`${p.source_url} ${p.width}w`).join(", "),r};return jsx(Fragment,{children:jsx("img",{...i(),alt:n.alt_text||""})})}function K(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(a=>K(a))):t.push([]),t}function ze(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const i=e()?.scrollHeight??0;if(i){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${i}px !important`)}else t.current.style.minHeight=""}},1)}}var Q=g(3069),Y=g.n(Q);const I={isMultiple:{type:"boolean",default:!1},accordionGroupId:{type:"string",default:""},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"}},ee={color:!0,typography:{fontSize:!0,lineHeight:!0,textAlign:!0},shadow:!0,spacing:{padding:!0,margin:!0}},te={...I},oe={...ee},ae=[{fixture:[`<!-- wp:launchpad-blocks/accordion-group {"isMultiple":true,"accordionGroupId":"7b6bb610-df4d-48c8-afaa-1c88a416658a"} -->
<div id="7b6bb610-df4d-48c8-afaa-1c88a416658a" data-accordion-group="" data-is-multiple="true" class="wp-block-launchpad-blocks-accordion-group"><!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"9f29b837-b0ea-414b-8675-84fa2503dc61","headerContent":"Accordion that is open by default","fontSize":"t-2"} -->
<div data-accordion="" data-is-initially-open="true" id="9f29b837-b0ea-414b-8675-84fa2503dc61" class="wp-block-launchpad-blocks-accordion has-t-2-font-size"><h2><button aria-expanded="true" aria-controls="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" data-state="open" id="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" id="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->

<!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"544422c1-4e96-4256-9b60-c6c6d18702b7","headerContent":"Accordion that is open by default if multiple accordions allowed","fontSize":"t-3"} -->
<div data-accordion="" data-is-initially-open="true" id="544422c1-4e96-4256-9b60-c6c6d18702b7" class="wp-block-launchpad-blocks-accordion has-t-3-font-size"><h2><button aria-expanded="true" aria-controls="544422c1-4e96-4256-9b60-c6c6d18702b7-panel" data-state="open" id="544422c1-4e96-4256-9b60-c6c6d18702b7-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default if multiple accordions allowed</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="544422c1-4e96-4256-9b60-c6c6d18702b7-trigger" id="544422c1-4e96-4256-9b60-c6c6d18702b7-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->

<!-- wp:launchpad-blocks/accordion {"accordionId":"9ce0f36b-d22c-4b36-9b34-53750bb19b5c","headerContent":"Accordion that is closed by default"} -->
<div data-accordion="" data-is-initially-open="false" id="9ce0f36b-d22c-4b36-9b34-53750bb19b5c" class="wp-block-launchpad-blocks-accordion"><h2><button aria-expanded="true" aria-controls="9ce0f36b-d22c-4b36-9b34-53750bb19b5c-panel" data-state="open" id="9ce0f36b-d22c-4b36-9b34-53750bb19b5c-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is closed by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9ce0f36b-d22c-4b36-9b34-53750bb19b5c-trigger" id="9ce0f36b-d22c-4b36-9b34-53750bb19b5c-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion --></div>
<!-- /wp:launchpad-blocks/accordion-group -->`,`<!-- wp:launchpad-blocks/accordion-group {"accordionGroupId":"0253d25a-e23c-488f-b2e2-73cd5f700a67"} -->
<div id="0253d25a-e23c-488f-b2e2-73cd5f700a67" data-accordion-group="" data-is-multiple="false" class="wp-block-launchpad-blocks-accordion-group"><!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"9111fdaf-0a30-4d45-aa6e-644e430f45a4","headerContent":"Accordion that is open by default","fontSize":"t-2"} -->
<div data-accordion="" data-is-initially-open="true" id="9111fdaf-0a30-4d45-aa6e-644e430f45a4" class="wp-block-launchpad-blocks-accordion has-t-2-font-size"><h2><button aria-expanded="true" aria-controls="9111fdaf-0a30-4d45-aa6e-644e430f45a4-panel" data-state="open" id="9111fdaf-0a30-4d45-aa6e-644e430f45a4-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9111fdaf-0a30-4d45-aa6e-644e430f45a4-trigger" id="9111fdaf-0a30-4d45-aa6e-644e430f45a4-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->

<!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"2ca8d19c-2ab3-46ce-b2ef-5c3655390da6","headerContent":"Accordion that is open by default if multiple accordions allowed","fontSize":"t-3"} -->
<div data-accordion="" data-is-initially-open="true" id="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6" class="wp-block-launchpad-blocks-accordion has-t-3-font-size"><h2><button aria-expanded="true" aria-controls="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6-panel" data-state="open" id="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default if multiple accordions allowed</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6-trigger" id="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->

<!-- wp:launchpad-blocks/accordion {"accordionId":"0c458a68-91f1-46e9-a3d6-05083dbfc397","headerContent":"Accordion that is closed by default"} -->
<div data-accordion="" data-is-initially-open="false" id="0c458a68-91f1-46e9-a3d6-05083dbfc397" class="wp-block-launchpad-blocks-accordion"><h2><button aria-expanded="true" aria-controls="0c458a68-91f1-46e9-a3d6-05083dbfc397-panel" data-state="open" id="0c458a68-91f1-46e9-a3d6-05083dbfc397-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is closed by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="0c458a68-91f1-46e9-a3d6-05083dbfc397-trigger" id="0c458a68-91f1-46e9-a3d6-05083dbfc397-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion --></div>
<!-- /wp:launchpad-blocks/accordion-group -->`],object:{attributes:te,supports:oe,save:function({attributes:e}){const{isMultiple:t,accordionGroupId:a}=e,n=u.useBlockProps.save({id:a,"data-accordion-group":"","data-is-multiple":String(t)});return(0,o.jsx)("div",{...n,children:(0,o.jsx)(u.InnerBlocks.Content,{})})},migrate:(e,t)=>[{...e,headerElement:t.at(0)?.attributes?.headerElement??"h2"},[...t]],isEligible:()=>!0}}.object],ne=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"})});function A({clientId:e,attributes:t,setAttributes:a,isSelected:n}){const{isMultiple:i,headerElement:r}=t,c=(0,u.useBlockProps)(),p=(0,u.useInnerBlocksProps)(c,{template:[["launchpad-blocks/accordion",{},[["core/paragraph",{placeholder:"Add accordion content here. Type / to choose a block."}]]]],renderAppender:()=>(0,o.jsx)(u.Inserter,{rootClientId:e,renderToggle:({onToggle:l})=>!n&&!s?null:(0,o.jsx)(v.ButtonGroup,{children:(0,o.jsxs)(v.Button,{className:"accordion-inserter-button is-primary",onClick:l,children:[ne," Add new accordion to this group"]})}),isAppender:!0})});J(t,"accordionGroupId",e,a,"launchpad-blocks/accordion-group");const s=(0,z.useSelect)(l=>l(u.store).hasSelectedInnerBlock(e,!0),[e]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.InspectorControls,{children:(0,o.jsx)(v.Panel,{children:(0,o.jsx)(v.PanelBody,{title:"Block settings",children:(0,o.jsx)(v.CheckboxControl,{__nextHasNoMarginBottom:!0,label:"Multiple open accordions",help:"Allow multiple accordions in the same group to be open at the same time.",checked:i,onChange:l=>{a({isMultiple:l})}})})})}),(0,o.jsx)(u.BlockControls,{children:(0,o.jsx)(v.ToolbarGroup,{children:(0,o.jsx)(X,{levelOptions:I.headerElement.enum,selectedLevel:r,setSelectedHeadingLevel:l=>{a({headerElement:l})}})})}),(0,o.jsx)("div",{...p})]})}A.displayName="AccordionGroupEdit";function ie({hasInnerBlocks:e}){return e?ce:re}function re(){return null}function ce(){return(0,o.jsx)(u.InnerBlocks.Content,{})}const Ie={"launchpad-blocks/accordion-heading-level":"headerElement"},Ae=null;(0,h.registerBlockType)(Y().name,{icon:(0,o.jsx)(N,{iconName:"accordion-group"}),edit:A,save:ie({hasInnerBlocks:!0}),deprecated:ae}),O()})(),y})());
