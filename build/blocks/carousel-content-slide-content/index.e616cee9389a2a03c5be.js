(function(w,b){if(typeof exports=="object"&&typeof module=="object")module.exports=b();else if(typeof define=="function"&&define.amd)define([],b);else{var _=b();for(var c in _)(typeof exports=="object"?exports:w)[c]=_[c]}})(globalThis,()=>(()=>{var N={8111(c){c.exports={apiVersion:3,name:"launchpad-blocks/carousel-content-slide-content",title:"Carousel content slide content",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel-content-slide"],editorScript:"file:./index.tsx",style:"file:./style.scss",render:"file:./render.php",attributes:{},providesContext:{},usesContext:["launchpad-blocks/template","launchpad-blocks/shouldLockChildSlidesToTemplate","launchpad-blocks/currentlySelectedSlide","launchpad-blocks/isInTemplateEditMode"],supports:{layout:{default:{type:"constrained"},allowCustomContentAndWideSize:!1,allowJustification:!1},spacing:{padding:["left","right"]}}}}},w={};function b(c){var h=w[c];if(h!==void 0)return h.exports;var u=w[c]={exports:{}};return N[c](u,u.exports,b),u.exports}b.n=c=>{var h=c&&c.__esModule?()=>c.default:()=>c;return b.d(h,{a:h}),h},b.d=(c,h)=>{for(var u in h)b.o(h,u)&&!b.o(c,u)&&Object.defineProperty(c,u,{enumerable:!0,get:h[u]})},b.o=(c,h)=>Object.prototype.hasOwnProperty.call(c,h);var _={};return(()=>{"use strict";const c=window.wp.blocks,h=window.wp.primitives,u=window.ReactJSXRuntime,W=(0,u.jsx)(h.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)(h.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})}),j=window.wp.blockEditor,De=window.wp.components,Ie=window.wp.coreData,Me=window.wp.data,He=window.wp.i18n,q=window.React;var y,F;function Le(e){return y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:y("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function Z(e){return(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,u.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,u.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,u.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const U=(0,q.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:l,isEditorMode:r=!1,...a}=n;return(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...a,children:(0,u.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function Oe(e){return y(F,{fallback:null,children:y(U,{...e})})}var k,C,s,B,T,J,X,K,Q,Y,z,ee,te,ne,oe,A,le,R,re,ae,D,P,se,ie,g,I,ce,de,ue,pe,me,he,S,M,H,fe,ge;function be(){(0,c.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:Z})}function L(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Ee(e,t,n){const o=t.spacing?.blockGap;let l="none";if(o===!0)l="both";else if(Array.isArray(o)){const a=o.includes("horizontal"),p=o.includes("vertical");a&&p?l="both":a?l="horizontal":p&&(l="vertical")}const r={columnGap:l==="both"||l==="horizontal"?L(n?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?L(n?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function ve(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const l=ve(o.innerBlocks,t);l&&n.push(...l)}return n},[])}const Ve=()=>{const e=S(()=>({per_page:-1}),[]),t=S(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=S(()=>({}),[]),{postTypes:o,taxonomies:l}=P(f=>{const{getEntityRecords:m}=f(D),v=m("root","postType",e),i=m("root","taxonomy",t);if(!i)return{postTypes:v,taxonomies:i};for(const x of i)n[x.slug]=m("taxonomy",x.slug);return{postTypes:v,taxonomies:i}},[e,t,n]),r=["attachment"],a=[],p=o?.filter(({viewable:f,slug:m})=>f&&!r.includes(m));if(!p||p.length===0)return{postTypes:p,taxonomies:void 0};const d={};for(const f of p){const m=l?.filter(({types:v,slug:i})=>v.includes(f.slug)&&!a.includes(i));m&&(d[f.slug]=m.map(v=>{const i=n?.[v.slug]??null;return{...v,terms:i}}))}return{filteredPostTypes:p,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Ge({list:e,containerClassName:t,renderItem:n}){return k(C,{children:[s("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),s("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function xe(e){return e.indexOf("data:image/svg+xml,")===0}function ke(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function we(e){return e.indexOf("dashicons-")===0}function _e({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return s("div",{className:"menu-icon","aria-hidden":"true",children:s("br",{})});if(xe(e))return s("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:s("br",{})});if(ke(e))return s("img",{src:new URL(e).toString(),alt:""});if(we(e)){const t=e.replace("dashicons-","");return s(X,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const We={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function qe(){const[e,t,n,o]=B("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(o&&n&&n.length>0)for(const r of n)l[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)l[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)l[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:l}}function Fe({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return s(K,{label:g("Custom colours","launchpad"),resetAll:l=>{if(l)for(const r of l)r()},children:s("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>s(ye,{colour:l,attributesDefinition:t,attributes:n,setAttributes:o},l.attributeName))})})}function ye({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[l,r,a,p,d]=B("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),f=()=>t[e.attributeName]?.default!==n[e.attributeName],m=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},v=M(null);return s(Q,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:m,hasValue:f,onDeselect:m,label:e.label,isShownByDefault:!0,children:s(Y,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:x})=>s(C,{children:s(z,{ref:v,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:k("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[s(ee,{colorValue:n[e.attributeName]})," ",s("span",{children:e.label})]})})}),renderContent:()=>s(te,{paddingSize:"none",children:s("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:s("div",{className:"block-editor-color-gradient-control__panel",children:s(ne,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...p&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:n[e.attributeName],onChange:i=>{o({[e.attributeName]:i})},disableCustomColors:!d})})})})})},e.attributeName)}function Ze({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[l,r,a]=B("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),p=r?.map(({name:i,ratio:x})=>({label:i,value:x}))??[],d=l?.map(({name:i,ratio:x})=>({label:i,value:x}))??[],f=[{label:I("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?d:[],...p||[],{label:I("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[m,v]=H(f.map(i=>i.value).includes(e)?e:"custom");return k(C,{children:[s(oe,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:g("Aspect ratio","launchpad-blocks"),options:f,value:m,onChange:i=>{v(i),i!=="custom"&&t(i)}}),m==="custom"?s(A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:g("Custom aspect ratio","launchpad-blocks"),help:g("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?k(le,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:g("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&o(i)},value:n,children:[s(R,{label:"Cover",value:"cover"}),s(R,{label:"Contain",value:"contain"})]}):null]})}const Ce=(e,t,n,o)=>{const{getBlocksByName:l,getBlockAttributes:r,getBlockParentsByBlockName:a}=se(T);return l(o).some(d=>{if(a(d,"core/template-part",!0).length)return!1;const{[n]:f}=r(d);return e!==d&&t===f})};function Ue(e,t,n,o,l){const{[t]:r}=e,a=fe(d=>Ce(n,d,t,l),[n,t,l]);return ge(()=>{if(r===""){const d=n.slice(0,n.indexOf("-"));o({[t]:d})}if(a(r)){const d=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${d}`),o({[t]:d})}},[r,n,o,a,t]),S(()=>function({label:f,help:m,onValidChange:v,idAttribute:i}){const[x,Ae]=H(i);return s(A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:f,help:typeof m=="function"?m(!a(x)):m,value:x,onChange:$=>{Ae($),a($)||v($)}})},[a])}function Je({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return s(re,{label:g("Change title heading element","launchpad-blocks"),icon:O(t),controls:e.map(o=>{{const l=o===t;return{icon:O(o),title:Se(o),isDisabled:l,onClick:()=>n(o)}}})})}function Se(e){switch(e){case"h2":return g("Heading 2","launchpad-blocks");case"h3":return g("Heading 3","launchpad-blocks");case"h4":return g("Heading 4","launchpad-blocks");case"h5":return g("Heading 5","launchpad-blocks");case"h6":return g("Heading 6","launchpad-blocks");case"p":return g("Paragraph","launchpad-blocks")}}function O(e){switch(e){case"h2":return ce;case"h3":return de;case"h4":return ue;case"h5":return pe;case"h6":return me;case"p":return he}}function Xe(e){const{hasChildren:t}=P(n=>{const{getBlocks:o}=n(T);return{hasChildren:o(e).length>0}},[e]);return t}function Ke({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:l,updateBlockAttributes:r}=ie(T);return k(ae,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[s("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":g("Block variations"),children:n.map(a=>k("li",{children:[s(z,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?s(_e,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&r(e,a.attributes),a.innerBlocks&&l(e,J(a.innerBlocks),!1)}}),s("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),o&&s("div",{className:"block-editor-block-variation-picker__skip",children:s(z,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:g("Skip")})})]})}function Qe({imageId:e,className:t="",size:n="full"}){const o=P(r=>typeof e=="number"&&e>0?r(D).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?s(C,{children:s("img",{...(()=>{const r={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(r.src=o.media_details.sizes[n].source_url,r.width=o.media_details.sizes[n].width,r.height=o.media_details.sizes[n].height),r.srcSet=Object.entries(o.media_details.sizes??{}).map(([a,p])=>`${p.source_url} ${p.width}w`).join(", "),r})(),alt:o.alt_text||""})}):null}function E(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>E(n))):t.push([]),t}function Ye(e){const t=M(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}var je=b(8111),V=b.n(je);const Be=[];function G({context:e}){const t=e["launchpad-blocks/shouldLockChildSlidesToTemplate"],n=e["launchpad-blocks/template"],o=t&&!e["launchpad-blocks/isInTemplateEditMode"]?"contentOnly":!1,l=[];n.length===1&&n[0].name==="launchpad-blocks/carousel-content-slide"&&n[0].innerBlocks?.length===1&&n[0].innerBlocks[0].name==="launchpad-blocks/carousel-content-slide-content"&&n[0].innerBlocks[0].innerBlocks?l.push(...n[0].innerBlocks[0].innerBlocks):l.push(...n);const r=l.map(d=>E(d)),a=(0,j.useBlockProps)(),p=(0,j.useInnerBlocksProps)(a,{template:r,templateLock:o});return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{...p})})}G.displayName="CarouselContentSlideContentEdit";function Te({hasInnerBlocks:e}){return e?Pe:ze}function ze(){return null}function Pe(){return(0,u.jsx)(j.InnerBlocks.Content,{})}const $e={from:[],to:[]},Ne=[],et={},tt=null;(0,c.registerBlockType)(V().name,{icon:W,deprecated:Be,edit:G,save:Te({hasInnerBlocks:!0}),transforms:$e}),be(),Ne.forEach(e=>{(0,c.registerBlockVariation)(V().name,e)})})(),_})());
