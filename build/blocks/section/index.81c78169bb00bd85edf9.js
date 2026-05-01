(function(y,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var j=x();for(var o in j)(typeof exports=="object"?exports:y)[o]=j[o]}})(globalThis,()=>(()=>{var $={5e3(o){o.exports={apiVersion:3,name:"launchpad-blocks/section",title:"Section",category:"theme",description:"This is a layout block used to set a section of a page.",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},style:{type:"object",default:{padding:{top:"var:preset|spacing|10",bottom:"var:preset|spacing|10"}}},textAlign:{type:"string",enum:["left","center","right"],default:"left"},stretchTitle:{type:"string",enum:["none","wide","full"],default:"none"}},providesContext:{},usesContext:[],example:{viewportWidth:1600,attributes:{headerContent:"Starry night"},innerBlocks:[{name:"core/image",attributes:{id:1,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"}}]},supports:{align:!1,layout:{default:{type:"constrained"}},spacing:{padding:["vertical"]},color:{text:!1}}}}},y={};function x(o){var v=y[o];if(v!==void 0)return v.exports;var m=y[o]={exports:{}};return $[o](m,m.exports,x),m.exports}x.n=o=>{var v=o&&o.__esModule?()=>o.default:()=>o;return x.d(v,{a:v}),v},x.d=(o,v)=>{for(var m in v)x.o(v,m)&&!x.o(o,m)&&Object.defineProperty(o,m,{enumerable:!0,get:v[m]})},x.o=(o,v)=>Object.prototype.hasOwnProperty.call(o,v);var j={};return(()=>{"use strict";const o=window.ReactJSXRuntime,v=window.wp.blocks,m=window.wp.blockEditor,A=window.wp.components,Ge=window.wp.coreData,q=window.wp.data,_=window.wp.i18n,g=window.wp.primitives,U=(0,o.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(g.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})}),J=(0,o.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(g.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})}),X=(0,o.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(g.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),K=(0,o.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(g.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})}),Q=(0,o.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(g.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),Y=(0,o.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(g.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})}),z=window.React;var M;function qe(e){return M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:M("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function ee(e){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,o.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,o.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,o.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const te=(0,z.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:r,size:s,isEditorMode:l=!1,...i}=n;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...i,children:(0,o.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${r}`})})}}});function ne(e){return(0,o.jsx)(z.Suspense,{fallback:null,children:(0,o.jsx)(te,{...e})})}var k,C,a,P,H,oe,re,le,se,ie,T,ae,ce,de,ue,D,he,R,pe,I,N,me,ge,w,G,S,L,E,fe,ve;function be(){(0,v.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:ee})}function O(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Ue(e,t,n){const r=t.spacing?.blockGap;let s="none";if(r===!0)s="both";else if(Array.isArray(r)){const i=r.includes("horizontal"),u=r.includes("vertical");i&&u?s="both":i?s="horizontal":u&&(s="vertical")}const l={columnGap:s==="both"||s==="horizontal"?O(n?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?O(n?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let i="";return e.minimumColumnWidth?i=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(i=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:i,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function xe(e,t){return e.reduce((n,r)=>{if(r.name===t)n.push(r);else if(r.innerBlocks){const s=xe(r.innerBlocks,t);s&&n.push(...s)}return n},[])}const Je=()=>{const e=S(()=>({per_page:-1}),[]),t=S(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=S(()=>({}),[]),{postTypes:r,taxonomies:s}=N(f=>{const{getEntityRecords:h}=f(I),b=h("root","postType",e),c=h("root","taxonomy",t);if(!c)return{postTypes:b,taxonomies:c};for(const p of c)n[p.slug]=h("taxonomy",p.slug);return{postTypes:b,taxonomies:c}},[e,t,n]),l=["attachment"],i=[],u=r?.filter(({viewable:f,slug:h})=>f&&!l.includes(h));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const d={};for(const f of u){const h=s?.filter(({types:b,slug:c})=>b.includes(f.slug)&&!i.includes(c));h&&(d[f.slug]=h.map(b=>{const c=n?.[b.slug]??null;return{...b,terms:c}}))}return{filteredPostTypes:u,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Xe({list:e,containerClassName:t,renderItem:n}){return k(C,{children:[a("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),a("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(r=>n({listItem:r,buttonProps:{type:"button",className:`custom-multiple-select-list-item${r.isSelected?" is-selected":""}`}}))})]})}function _e(e){return e.indexOf("data:image/svg+xml,")===0}function we(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function ke(e){return e.indexOf("dashicons-")===0}function ye({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return a("div",{className:"menu-icon","aria-hidden":"true",children:a("br",{})});if(_e(e))return a("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:a("br",{})});if(we(e))return a("img",{src:new URL(e).toString(),alt:""});if(ke(e)){const t=e.replace("dashicons-","");return a(re,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Ke={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Qe(){const[e,t,n,r]=P("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),s={};if(r&&n&&n.length>0)for(const l of n)s[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)s[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)s[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:s}}function Ye({colours:e,attributesDefinition:t,attributes:n,setAttributes:r}){return a(le,{label:w("Custom colours","launchpad"),resetAll:s=>{if(s)for(const l of s)l()},children:a("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>a(je,{colour:s,attributesDefinition:t,attributes:n,setAttributes:r},s.attributeName))})})}function je({colour:e,attributesDefinition:t,attributes:n,setAttributes:r}){const[s,l,i,u,d]=P("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),f=()=>t[e.attributeName]?.default!==n[e.attributeName],h=()=>{r({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=L(null);return a(se,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:h,hasValue:f,onDeselect:h,label:e.label,isShownByDefault:!0,children:a(ie,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:p})=>a(C,{children:a(T,{ref:b,__next40pxDefaultSize:!0,onClick:p,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:k("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[a(ae,{colorValue:n[e.attributeName]})," ",a("span",{children:e.label})]})})}),renderContent:()=>a(ce,{paddingSize:"none",children:a("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:a("div",{className:"block-editor-color-gradient-control__panel",children:a(de,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...u&&i&&i.length>0?[{name:"Default",colors:i}]:[]],value:n[e.attributeName],onChange:c=>{r({[e.attributeName]:c})},disableCustomColors:!d})})})})})},e.attributeName)}function et({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:r}){const[s,l,i]=P("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=l?.map(({name:c,ratio:p})=>({label:c,value:p}))??[],d=s?.map(({name:c,ratio:p})=>({label:c,value:p}))??[],f=[{label:G("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...i?d:[],...u||[],{label:G("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[h,b]=E(f.map(c=>c.value).includes(e)?e:"custom");return k(C,{children:[a(ue,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:w("Aspect ratio","launchpad-blocks"),options:f,value:h,onChange:c=>{b(c),c!=="custom"&&t(c)}}),h==="custom"?a(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:w("Custom aspect ratio","launchpad-blocks"),help:w("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&r!==void 0?k(he,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:w("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&r(c)},value:n,children:[a(R,{label:"Cover",value:"cover"}),a(R,{label:"Contain",value:"contain"})]}):null]})}const Ce=(e,t,n,r)=>{const{getBlocksByName:s,getBlockAttributes:l,getBlockParentsByBlockName:i}=me(H);return s(r).some(d=>{if(i(d,"core/template-part",!0).length)return!1;const{[n]:f}=l(d);return e!==d&&t===f})};function tt(e,t,n,r,s){const{[t]:l}=e,i=fe(d=>Ce(n,d,t,s),[n,t,s]);return ve(()=>{if(l===""){const d=n.slice(0,n.indexOf("-"));r({[t]:d})}if(i(l)){const d=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${d}`),r({[t]:d})}},[l,n,r,i,t]),S(()=>function({label:f,help:h,onValidChange:b,idAttribute:c}){const[p,V]=E(c);return a(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:f,help:typeof h=="function"?h(!i(p)):h,value:p,onChange:B=>{V(B),i(B)||b(B)}})},[i])}function Se({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return(0,o.jsx)(A.ToolbarDropdownMenu,{label:(0,_.__)("Change title heading element","launchpad-blocks"),icon:W(t),controls:e.map(r=>{{const s=r===t;return{icon:W(r),title:Be(r),isDisabled:s,onClick:()=>n(r)}}})})}function Be(e){switch(e){case"h2":return(0,_.__)("Heading 2","launchpad-blocks");case"h3":return(0,_.__)("Heading 3","launchpad-blocks");case"h4":return(0,_.__)("Heading 4","launchpad-blocks");case"h5":return(0,_.__)("Heading 5","launchpad-blocks");case"h6":return(0,_.__)("Heading 6","launchpad-blocks");case"p":return(0,_.__)("Paragraph","launchpad-blocks")}}function W(e){switch(e){case"h2":return U;case"h3":return J;case"h4":return X;case"h5":return K;case"h6":return Q;case"p":return Y}}function nt(e){const{hasChildren:t}=N(n=>{const{getBlocks:r}=n(H);return{hasChildren:r(e).length>0}},[e]);return t}function ot({clientId:e,blockInfo:t,variations:n,allowSkip:r}){const{replaceInnerBlocks:s,updateBlockAttributes:l}=ge(H);return k(pe,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[a("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":w("Block variations"),children:n.map(i=>k("li",{children:[a(T,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof i.icon=="string"?a(ye,{iconString:i.icon}):i.icon,iconSize:48,onClick:()=>{i.attributes&&l(e,i.attributes),i.innerBlocks&&s(e,oe(i.innerBlocks),!1)}}),a("span",{className:"block-editor-block-variation-picker__variation-label",children:i.title})]},i.name))}),r&&a("div",{className:"block-editor-block-variation-picker__skip",children:a(T,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:w("Skip")})})]})}function rt({imageId:e,className:t="",size:n="full"}){const r=N(l=>typeof e=="number"&&e>0?l(I).getEntityRecord?.("postType","attachment",e):void 0,[e]);return r?a(C,{children:a("img",{...(()=>{const l={src:r.source_url,className:`attachment-${n} size-${n} ${t}`,width:r.media_details.width,height:r.media_details.height,srcSet:""};return r.media_details?.sizes?.[n]&&(l.src=r.media_details.sizes[n].source_url,l.width=r.media_details.sizes[n].width,l.height=r.media_details.sizes[n].height),l.srcSet=Object.entries(r.media_details.sizes??{}).map(([i,u])=>`${u.source_url} ${u.width}w`).join(", "),l})(),alt:r.alt_text||""})}):null}function ze(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>ze(n))):t.push([]),t}function lt(e){const t=L(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const s=e()?.scrollHeight??0;if(s){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${s}px !important`)}else t.current.style.minHeight=""}},1)}}var Pe=x(5e3),Z=x.n(Pe);const He=[],Te=(0,o.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(g.Path,{d:"M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM5 9h14v6H5V9Z"})}),Ne=(0,o.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(g.Path,{d:"M16 5.5H8V4h8v1.5ZM16 20H8v-1.5h8V20ZM5 9h14v6H5V9Z"})}),Ve=(0,o.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(g.Path,{d:"M5 4h14v11H5V4Zm11 16H8v-1.5h8V20Z"})}),$e={headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},style:{type:"object",default:{padding:{top:"var:preset|spacing|10",bottom:"var:preset|spacing|10"}}},textAlign:{type:"string",enum:["left","center","right"],default:"left"},stretchTitle:{type:"string",enum:["none","wide","full"],default:"none"}};function F({clientId:e,attributes:t,setAttributes:n}){const r=(0,z.useRef)(null),s=(0,m.useBlockProps)({ref:r,className:"alignfull has-background"}),{headerElement:l,headerContent:i,textAlign:u,stretchTitle:d}=t,{hasInnerBlocks:f}=(0,q.useSelect)(p=>{const{getBlock:V}=p(m.store);return{hasInnerBlocks:!!V(e)?.innerBlocks?.length}},[e]);let h;f||(h=m.InnerBlocks.ButtonBlockAppender);const{children:b,...c}=(0,m.useInnerBlocksProps)(s,{dropZoneElement:r.current??void 0,renderAppender:h});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.BlockControls,{children:(0,o.jsxs)(A.ToolbarGroup,{children:[(0,o.jsx)(Se,{levelOptions:$e.headerElement.enum,selectedLevel:l,setSelectedHeadingLevel:p=>{n({headerElement:p})}}),(0,o.jsx)(m.AlignmentControl,{value:u,onChange:p=>{n({textAlign:p})}}),(0,o.jsx)(m.AlignmentControl,{value:d,onChange:p=>{n({stretchTitle:p})},alignmentControls:[{icon:Te,title:(0,_.__)("Don't stretch title","launchpad-blocks"),align:"none"},{icon:Ne,title:(0,_.__)("Stretch title wide","launchpad-blocks"),align:"wide"},{icon:Ve,title:(0,_.__)("Stretch title full","launchpad-blocks"),align:"full"}],label:(0,_.__)("Stretch title","launchpad-blocks"),description:(0,_.__)("Change title stretching","launchpad-blocks")})]})}),(0,o.jsxs)("section",{...c,children:[(0,o.jsx)(m.RichText,{tagName:l,onChange:p=>{n({headerContent:p})},value:i,placeholder:"Add section heading...",className:`${d!=="none"?`align${d}`:""} has-text-align-${u}`}),b]})]})}F.displayName="SectionEdit";function Ae({hasInnerBlocks:e}){return e?De:Me}function Me(){return null}function De(){return(0,o.jsx)(m.InnerBlocks.Content,{})}const Re={from:[],to:[]},Ie=[],ct={},dt=null;(0,v.registerBlockType)(Z().name,{icon:(0,o.jsx)(ne,{iconName:"section-with-title"}),deprecated:He,edit:F,save:Ae({hasInnerBlocks:!0}),transforms:Re}),be(),Ie.forEach(e=>{(0,v.registerBlockVariation)(Z().name,e)})})(),j})());
