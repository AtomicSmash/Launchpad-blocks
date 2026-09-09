(function(j,b){if(typeof exports=="object"&&typeof module=="object")module.exports=b();else if(typeof define=="function"&&define.amd)define([],b);else{var C=b();for(var r in C)(typeof exports=="object"?exports:j)[r]=C[r]}})(globalThis,()=>(()=>{var V={5e3(r){r.exports={apiVersion:3,name:"launchpad-blocks/section",title:"Section",category:"theme",description:"This is a layout block used to set a section of a page.",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},style:{type:"object",default:{padding:{top:"var:preset|spacing|10",bottom:"var:preset|spacing|10"}}},textAlign:{type:"string",enum:["left","center","right"],default:"left"},stretchTitle:{type:"string",enum:["none","wide","full"],default:"none"}},providesContext:{},usesContext:[],example:{viewportWidth:1600,attributes:{headerContent:"Starry night"},innerBlocks:[{name:"core/image",attributes:{id:1,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"}}]},supports:{align:!1,layout:{default:{type:"constrained"}},spacing:{padding:["vertical"]},color:{text:!1}}}}},j={};function b(r){var f=j[r];if(f!==void 0)return f.exports;var x=j[r]={exports:{}};return V[r](x,x.exports,b),x.exports}b.n=r=>{var f=r&&r.__esModule?()=>r.default:()=>r;return b.d(f,{a:f}),f},b.d=(r,f)=>{for(var x in f)b.o(f,x)&&!b.o(r,x)&&Object.defineProperty(r,x,{enumerable:!0,get:f[x]})},b.o=(r,f)=>Object.prototype.hasOwnProperty.call(r,f);var C={};return(()=>{"use strict";const r=window.ReactJSXRuntime,f=window.wp.blocks,x=window.React,F=(0,x.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:i,isEditorMode:s=!1,...l}=n;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,...l,children:(0,r.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function q(e){return(0,r.jsx)(x.Suspense,{fallback:null,children:(0,r.jsx)(F,{...e})})}var U=b(5e3),A=b.n(U);const J=[],w=window.wp.blockEditor,R=window.wp.components,X=window.wp.data,_=window.wp.i18n,m=window.wp.primitives,K=(0,r.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(m.Path,{d:"M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM5 9h14v6H5V9Z"})}),Q=(0,r.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(m.Path,{d:"M16 5.5H8V4h8v1.5ZM16 20H8v-1.5h8V20ZM5 9h14v6H5V9Z"})}),Y=(0,r.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(m.Path,{d:"M5 4h14v11H5V4Zm11 16H8v-1.5h8V20Z"})}),Ge=window.wp.coreData,ee=(0,r.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(m.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})}),te=(0,r.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(m.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})}),ne=(0,r.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(m.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),oe=(0,r.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(m.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})}),re=(0,r.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(m.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),se=(0,r.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(m.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})});var y,S,a,z,H,ie,le,ae,ce,de,T,ue,he,pe,me,D,ge,M,fe,I,N,ve,be,k,G,B,E,O,xe,_e;function L(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function qe(e,t,n){const o=t.spacing?.blockGap;let i="none";if(o===!0)i="both";else if(Array.isArray(o)){const l=o.includes("horizontal"),u=o.includes("vertical");l&&u?i="both":l?i="horizontal":u&&(i="vertical")}const s={columnGap:i==="both"||i==="horizontal"?L(n?.spacing?.blockGap,i):void 0,rowGap:i==="both"||i==="vertical"?L(n?.spacing?.blockGap,i):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function we(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const i=we(o.innerBlocks,t);i&&n.push(...i)}return n},[])}const Ue=()=>{const e=B(()=>({per_page:-1}),[]),t=B(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=B(()=>({}),[]),{postTypes:o,taxonomies:i}=N(g=>{const{getEntityRecords:h}=g(I),v=h("root","postType",e),c=h("root","taxonomy",t);if(!c)return{postTypes:v,taxonomies:c};for(const p of c)n[p.slug]=h("taxonomy",p.slug);return{postTypes:v,taxonomies:c}},[e,t,n]),s=["attachment"],l=[],u=o?.filter(({viewable:g,slug:h})=>g&&!s.includes(h));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const d={};for(const g of u){const h=i?.filter(({types:v,slug:c})=>v.includes(g.slug)&&!l.includes(c));h&&(d[g.slug]=h.map(v=>{const c=n?.[v.slug]??null;return{...v,terms:c}}))}return{filteredPostTypes:u,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Je({list:e,containerClassName:t,renderItem:n}){return y(S,{children:[a("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),a("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function ke(e){return e.indexOf("data:image/svg+xml,")===0}function ye(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function je(e){return e.indexOf("dashicons-")===0}function Ce({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return a("div",{className:"menu-icon","aria-hidden":"true",children:a("br",{})});if(ke(e))return a("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:a("br",{})});if(ye(e))return a("img",{src:new URL(e).toString(),alt:""});if(je(e)){const t=e.replace("dashicons-","");return a(le,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Xe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ke(){const[e,t,n,o]=z("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),i={};if(o&&n&&n.length>0)for(const s of n)i[s.slug]={color:s.color,name:s.name};if(t&&t?.length>0)for(const s of t)i[s.slug]={color:s.color,name:s.name};if(e&&e?.length>0)for(const s of e)i[s.slug]={color:s.color,name:s.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:i}}function Qe({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return a(ae,{label:k("Custom colours","launchpad"),resetAll:i=>{if(i)for(const s of i)s()},children:a("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(i=>a(Se,{colour:i,attributesDefinition:t,attributes:n,setAttributes:o},i.attributeName))})})}function Se({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[i,s,l,u,d]=z("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),g=()=>t[e.attributeName]?.default!==n[e.attributeName],h=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},v=E(null);return a(ce,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:h,hasValue:g,onDeselect:h,label:e.label,isShownByDefault:!0,children:a(de,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:p})=>a(S,{children:a(T,{ref:v,__next40pxDefaultSize:!0,onClick:p,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:y("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[a(ue,{colorValue:n[e.attributeName]})," ",a("span",{children:e.label})]})})}),renderContent:()=>a(he,{paddingSize:"none",children:a("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:a("div",{className:"block-editor-color-gradient-control__panel",children:a(pe,{colors:[...i&&i?.length>0?[{name:"User",colors:i}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...u&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:n[e.attributeName],onChange:c=>{o({[e.attributeName]:c})},disableCustomColors:!d})})})})})},e.attributeName)}function Ye({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[i,s,l]=z("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=s?.map(({name:c,ratio:p})=>({label:c,value:p}))??[],d=i?.map(({name:c,ratio:p})=>({label:c,value:p}))??[],g=[{label:G("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?d:[],...u||[],{label:G("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[h,v]=O(g.map(c=>c.value).includes(e)?e:"custom");return y(S,{children:[a(me,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:k("Aspect ratio","launchpad-blocks"),options:g,value:h,onChange:c=>{v(c),c!=="custom"&&t(c)}}),h==="custom"?a(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:k("Custom aspect ratio","launchpad-blocks"),help:k("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?y(ge,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:k("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&o(c)},value:n,children:[a(M,{label:"Cover",value:"cover"}),a(M,{label:"Contain",value:"contain"})]}):null]})}const Be=(e,t,n,o)=>{const{getBlocksByName:i,getBlockAttributes:s,getBlockParentsByBlockName:l}=ve(H);return i(o).some(d=>{if(l(d,"core/template-part",!0).length)return!1;const{[n]:g}=s(d);return e!==d&&t===g})};function et(e,t,n,o,i){const{[t]:s}=e,l=xe(d=>Be(n,d,t,i),[n,t,i]);return _e(()=>{if(s===""){const d=n.slice(0,n.indexOf("-"));o({[t]:d})}if(l(s)){const d=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${s}. New value: ${d}`),o({[t]:d})}},[s,n,o,l,t]),B(()=>function({label:g,help:h,onValidChange:v,idAttribute:c}){const[p,$]=O(c);return a(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:g,help:typeof h=="function"?h(!l(p)):h,value:p,onChange:P=>{$(P),l(P)||v(P)}})},[l])}function Pe({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return(0,r.jsx)(R.ToolbarDropdownMenu,{label:(0,_.__)("Change title heading element","launchpad-blocks"),icon:W(t),controls:e.map(o=>{{const i=o===t;return{icon:W(o),title:ze(o),isDisabled:i,onClick:()=>n(o)}}})})}function ze(e){switch(e){case"h2":return(0,_.__)("Heading 2","launchpad-blocks");case"h3":return(0,_.__)("Heading 3","launchpad-blocks");case"h4":return(0,_.__)("Heading 4","launchpad-blocks");case"h5":return(0,_.__)("Heading 5","launchpad-blocks");case"h6":return(0,_.__)("Heading 6","launchpad-blocks");case"p":return(0,_.__)("Paragraph","launchpad-blocks")}}function W(e){switch(e){case"h2":return ee;case"h3":return te;case"h4":return ne;case"h5":return oe;case"h6":return re;case"p":return se}}function tt(e){const{hasChildren:t}=N(n=>{const{getBlocks:o}=n(H);return{hasChildren:o(e).length>0}},[e]);return t}function nt({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:i,updateBlockAttributes:s}=be(H);return y(fe,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[a("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":k("Block variations"),children:n.map(l=>y("li",{children:[a(T,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?a(Ce,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&s(e,l.attributes),l.innerBlocks&&i(e,ie(l.innerBlocks),!1)}}),a("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),o&&a("div",{className:"block-editor-block-variation-picker__skip",children:a(T,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{i(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:k("Skip")})})]})}function ot({imageId:e,className:t="",size:n="full"}){const o=N(s=>typeof e=="number"&&e>0?s(I).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?a(S,{children:a("img",{...(()=>{const s={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(s.src=o.media_details.sizes[n].source_url,s.width=o.media_details.sizes[n].width,s.height=o.media_details.sizes[n].height),s.srcSet=Object.entries(o.media_details.sizes??{}).map(([l,u])=>`${u.source_url} ${u.width}w`).join(", "),s})(),alt:o.alt_text||""})}):null}function He(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>He(n))):t.push([]),t}function rt(e){const t=E(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const i=e()?.scrollHeight??0;if(i){const s=t.current.style;s.minHeight="",t.current.setAttribute("style",`${s.cssText}min-height: ${i}px !important`)}else t.current.style.minHeight=""}},1)}}const Te={headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},style:{type:"object",default:{padding:{top:"var:preset|spacing|10",bottom:"var:preset|spacing|10"}}},textAlign:{type:"string",enum:["left","center","right"],default:"left"},stretchTitle:{type:"string",enum:["none","wide","full"],default:"none"}};function Z({clientId:e,attributes:t,setAttributes:n}){const o=(0,x.useRef)(null),i=(0,w.useBlockProps)({ref:o,className:"alignfull has-background"}),{headerElement:s,headerContent:l,textAlign:u,stretchTitle:d}=t,{hasInnerBlocks:g}=(0,X.useSelect)(p=>{const{getBlock:$}=p(w.store);return{hasInnerBlocks:!!$(e)?.innerBlocks?.length}},[e]);let h;g||(h=w.InnerBlocks.ButtonBlockAppender);const{children:v,...c}=(0,w.useInnerBlocksProps)(i,{dropZoneElement:o.current??void 0,renderAppender:h});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.BlockControls,{children:(0,r.jsxs)(R.ToolbarGroup,{children:[(0,r.jsx)(Pe,{levelOptions:Te.headerElement.enum,selectedLevel:s,setSelectedHeadingLevel:p=>{n({headerElement:p})}}),(0,r.jsx)(w.AlignmentControl,{value:u,onChange:p=>{n({textAlign:p})}}),(0,r.jsx)(w.AlignmentControl,{value:d,onChange:p=>{n({stretchTitle:p})},alignmentControls:[{icon:K,title:(0,_.__)("Don't stretch title","launchpad-blocks"),align:"none"},{icon:Q,title:(0,_.__)("Stretch title wide","launchpad-blocks"),align:"wide"},{icon:Y,title:(0,_.__)("Stretch title full","launchpad-blocks"),align:"full"}],label:(0,_.__)("Stretch title","launchpad-blocks"),description:(0,_.__)("Change title stretching","launchpad-blocks")})]})}),(0,r.jsxs)("section",{...c,children:[(0,r.jsx)(w.RichText,{tagName:s,onChange:p=>{n({headerContent:p})},value:l,placeholder:"Add section heading...",className:`${d!=="none"?`align${d}`:""} has-text-align-${u}`}),v]})]})}Z.displayName="SectionEdit";function Ne({hasInnerBlocks:e}){return e?Ve:$e}function $e(){return null}function Ve(){return(0,r.jsx)(w.InnerBlocks.Content,{})}const Ae={from:[],to:[]},Re=[],st={},it=null;(0,f.registerBlockType)(A().name,{icon:(0,r.jsx)(q,{iconName:"section-with-title"}),deprecated:J,edit:Z,save:Ne({hasInnerBlocks:!0}),transforms:Ae}),Re.forEach(e=>{(0,f.registerBlockVariation)(A().name,e)})})(),C})());
