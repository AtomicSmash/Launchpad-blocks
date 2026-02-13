(function(_,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var w=v();for(var o in w)(typeof exports=="object"?exports:_)[o]=w[o]}})(globalThis,()=>(()=>{var C={5e3:(o=>{o.exports={apiVersion:3,name:"launchpad-blocks/section",title:"Section",category:"theme",description:"This is a layout block used to set a section of a page.",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},style:{type:"object",default:{padding:{top:"var:preset|spacing|10",bottom:"var:preset|spacing|10"}}},textAlign:{type:"string",enum:["left","center","right"],default:"left"},stretchTitle:{type:"string",enum:["none","wide","full"],default:"none"}},providesContext:{},usesContext:[],example:{viewportWidth:1600,attributes:{headerContent:"Starry night"},innerBlocks:[{name:"core/image",attributes:{id:1,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"}}]},supports:{align:!1,layout:{default:{type:"constrained"}},spacing:{padding:["vertical"]},color:{text:!1}}}})},_={};function v(o){var f=_[o];if(f!==void 0)return f.exports;var p=_[o]={exports:{}};return C[o](p,p.exports,v),p.exports}v.n=o=>{var f=o&&o.__esModule?()=>o.default:()=>o;return v.d(f,{a:f}),f},v.d=(o,f)=>{for(var p in f)v.o(f,p)&&!v.o(o,p)&&Object.defineProperty(o,p,{enumerable:!0,get:f[p]})},v.o=(o,f)=>Object.prototype.hasOwnProperty.call(o,f);var w={};return(()=>{"use strict";const o=window.ReactJSXRuntime,f=window.wp.blocks,p=window.wp.blockEditor,S=window.wp.components,ce=window.wp.coreData,P=window.wp.data,b=window.wp.i18n,m=window.wp.primitives,N=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})}),V=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})}),$=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),M=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})}),A=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),R=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})}),k=window.React;function fe(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function D(e){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,o.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,o.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,o.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const I=(0,k.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:s,size:i,isEditorMode:l=!1,...r}=n;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,...r,children:(0,o.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${s}`})})}}});function G(e){return(0,o.jsx)(k.Suspense,{fallback:null,children:(0,o.jsx)(I,{...e})})}function E(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:D})}function B(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function xe(e,t,n){const s=t.spacing?.blockGap;let i="none";if(s===!0)i="both";else if(Array.isArray(s)){const r=s.includes("horizontal"),d=s.includes("vertical");r&&d?i="both":r?i="horizontal":d&&(i="vertical")}const l={columnGap:i==="both"||i==="horizontal"?B(n?.spacing?.blockGap,i):void 0,rowGap:i==="both"||i==="vertical"?B(n?.spacing?.blockGap,i):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function L(e,t){return e.reduce((n,s)=>{if(s.name===t)n.push(s);else if(s.innerBlocks){const i=L(s.innerBlocks,t);i&&n.push(...i)}return n},[])}const ve=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=useMemo(()=>({}),[]),{postTypes:s,taxonomies:i}=useSelect(g=>{const{getEntityRecords:u}=g(coreStore),x=u("root","postType",e),a=u("root","taxonomy",t);if(!a)return{postTypes:x,taxonomies:a};for(const h of a)n[h.slug]=u("taxonomy",h.slug);return{postTypes:x,taxonomies:a}},[e,t,n]),l=["attachment"],r=[],d=s?.filter(({viewable:g,slug:u})=>g&&!l.includes(u));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const c={};for(const g of d){const u=i?.filter(({types:x,slug:a})=>x.includes(g.slug)&&!r.includes(a));u&&(c[g.slug]=u.map(x=>{const a=n?.[x.slug]??null;return{...x,terms:a}}))}return{filteredPostTypes:d,mappedTaxonomies:c===void 0||Object.values(c).length===0?void 0:c}};function be({list:e,containerClassName:t,renderItem:n}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(s=>n({listItem:s,buttonProps:{type:"button",className:`custom-multiple-select-list-item${s.isSelected?" is-selected":""}`}}))})]})}function O(e){return e.indexOf("data:image/svg+xml;")===0}function W(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function F(e){return e.indexOf("dashicons-")===0}function Z({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(O(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(W(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(F(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const _e={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function we({colours:e,attributesDefinition:t,attributes:n,setAttributes:s}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:i=>{if(i)for(const l of i)l()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(i=>jsx(q,{colour:i,attributesDefinition:t,attributes:n,setAttributes:s},i.attributeName))})})}function q({colour:e,attributesDefinition:t,attributes:n,setAttributes:s}){const[i,l,r,d,c]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),g=()=>t[e.attributeName]?.default!==n[e.attributeName],u=()=>{s({[e.attributeName]:t[e.attributeName]?.default??void 0})},x=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:u,hasValue:g,onDeselect:u,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:a,onToggle:h})=>jsx(Fragment,{children:jsx(Button,{ref:x,__next40pxDefaultSize:!0,onClick:h,"aria-expanded":a,className:`block-editor-panel-color-gradient-settings__dropdown${a?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:n[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...i&&i?.length>0?[{name:"User",colors:i}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...d&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:n[e.attributeName],onChange:a=>{s({[e.attributeName]:a})},disableCustomColors:!c})})})})})},e.attributeName)}function je({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:s}){const[i,l,r]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=l?.map(({name:a,ratio:h})=>({label:a,value:h}))??[],c=i?.map(({name:a,ratio:h})=>({label:a,value:h}))??[],g=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?c:[],...d||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[u,x]=useState(g.map(a=>a.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:g,value:u,onChange:a=>{x(a),a!=="custom"&&t(a)}}),u==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&s!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:a=>{typeof a=="string"&&["contain","cover"].includes(a)&&s(a)},value:n,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const U=(e,t,n,s)=>{const{getBlocksByName:i,getBlockAttributes:l,getBlockParentsByBlockName:r}=select(blockEditorStore);return i(s).some(c=>{if(r(c,"core/template-part",!0).length)return!1;const{[n]:g}=l(c);return e!==c&&t===g})};function ke(e,t,n,s,i){const{[t]:l}=e,r=useCallback(c=>U(n,c,t,i),[n,t,i]);return useEffect(()=>{if(l===""){const c=n.slice(0,n.indexOf("-"));s({[t]:c})}if(r(l)){const c=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${c}`),s({[t]:c})}},[l,n,s,r,t]),useMemo(()=>function({label:g,help:u,onValidChange:x,idAttribute:a}){const[h,y]=useState(a);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:g,help:typeof u=="function"?u(!r(h)):u,value:h,onChange:j=>{y(j),r(j)||x(j)}})},[r])}function J({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return(0,o.jsx)(S.ToolbarDropdownMenu,{label:(0,b.__)("Change title heading element","launchpad-blocks"),icon:z(t),controls:e.map(s=>{{const i=s===t;return{icon:z(s),title:X(s),isDisabled:i,onClick:()=>n(s)}}})})}function X(e){switch(e){case"h2":return(0,b.__)("Heading 2","launchpad-blocks");case"h3":return(0,b.__)("Heading 3","launchpad-blocks");case"h4":return(0,b.__)("Heading 4","launchpad-blocks");case"h5":return(0,b.__)("Heading 5","launchpad-blocks");case"h6":return(0,b.__)("Heading 6","launchpad-blocks");case"p":return(0,b.__)("Paragraph","launchpad-blocks")}}function z(e){switch(e){case"h2":return N;case"h3":return V;case"h4":return $;case"h5":return M;case"h6":return A;case"p":return R}}function ye(e){const{hasChildren:t}=useSelect(n=>{const{getBlocks:s}=n(blockEditorStore);return{hasChildren:s(e).length>0}},[e]);return t}function Ce({clientId:e,blockInfo:t,variations:n,allowSkip:s}){const{replaceInnerBlocks:i,updateBlockAttributes:l}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:n.map(r=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?jsx(Z,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&l(e,r.attributes),r.innerBlocks&&i(e,createBlocksFromInnerBlocksTemplate(r.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),s&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{i(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function Se({imageId:e,className:t="",size:n="full"}){const s=useSelect(l=>typeof e=="number"&&e>0?l(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!s)return null;const i=()=>{const l={src:s.source_url,className:`attachment-${n} size-${n} ${t}`,width:s.media_details.width,height:s.media_details.height,srcSet:""};return s.media_details?.sizes?.[n]&&(l.src=s.media_details.sizes[n].source_url,l.width=s.media_details.sizes[n].width,l.height=s.media_details.sizes[n].height),l.srcSet=Object.entries(s.media_details.sizes??{}).map(([r,d])=>`${d.source_url} ${d.width}w`).join(", "),l};return jsx(Fragment,{children:jsx("img",{...i(),alt:s.alt_text||""})})}function K(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>K(n))):t.push([]),t}function Be(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const i=e()?.scrollHeight??0;if(i){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${i}px !important`)}else t.current.style.minHeight=""}},1)}}var Q=v(5e3),H=v.n(Q);const Y=[],ee=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM5 9h14v6H5V9Z"})}),te=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M16 5.5H8V4h8v1.5ZM16 20H8v-1.5h8V20ZM5 9h14v6H5V9Z"})}),ne=(0,o.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(m.Path,{d:"M5 4h14v11H5V4Zm11 16H8v-1.5h8V20Z"})}),oe={headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},style:{type:"object",default:{padding:{top:"var:preset|spacing|10",bottom:"var:preset|spacing|10"}}},textAlign:{type:"string",enum:["left","center","right"],default:"left"},stretchTitle:{type:"string",enum:["none","wide","full"],default:"none"}};function T({clientId:e,attributes:t,setAttributes:n}){const s=(0,k.useRef)(null),i=(0,p.useBlockProps)({ref:s,className:"alignfull has-background"}),{headerElement:l,headerContent:r,textAlign:d,stretchTitle:c}=t,{hasInnerBlocks:g}=(0,P.useSelect)(h=>{const{getBlock:y}=h(p.store);return{hasInnerBlocks:!!y(e)?.innerBlocks?.length}},[e]);let u;g||(u=p.InnerBlocks.ButtonBlockAppender);const{children:x,...a}=(0,p.useInnerBlocksProps)(i,{dropZoneElement:s.current??void 0,renderAppender:u});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.BlockControls,{children:(0,o.jsxs)(S.ToolbarGroup,{children:[(0,o.jsx)(J,{levelOptions:oe.headerElement.enum,selectedLevel:l,setSelectedHeadingLevel:h=>{n({headerElement:h})}}),(0,o.jsx)(p.AlignmentControl,{value:d,onChange:h=>{n({textAlign:h})}}),(0,o.jsx)(p.AlignmentControl,{value:c,onChange:h=>{n({stretchTitle:h})},alignmentControls:[{icon:ee,title:(0,b.__)("Don't stretch title","launchpad-blocks"),align:"none"},{icon:te,title:(0,b.__)("Stretch title wide","launchpad-blocks"),align:"wide"},{icon:ne,title:(0,b.__)("Stretch title full","launchpad-blocks"),align:"full"}],label:(0,b.__)("Stretch title","launchpad-blocks"),description:(0,b.__)("Change title stretching","launchpad-blocks")})]})}),(0,o.jsxs)("section",{...a,children:[(0,o.jsx)(p.RichText,{tagName:l,onChange:h=>{n({headerContent:h})},value:r,placeholder:"Add section heading...",className:`${c!=="none"?`align${c}`:""} has-text-align-${d}`}),x]})]})}T.displayName="SectionEdit";function se({hasInnerBlocks:e}){return e?le:ie}function ie(){return null}function le(){return(0,o.jsx)(p.InnerBlocks.Content,{})}const re={from:[],to:[]},ae=[],Pe={},Ne=null;(0,f.registerBlockType)(H().name,{icon:(0,o.jsx)(G,{iconName:"section-with-title"}),deprecated:Y,edit:T,save:se({hasInnerBlocks:!0}),transforms:re}),E(),ae.forEach(e=>{(0,f.registerBlockVariation)(H().name,e)})})(),w})());
