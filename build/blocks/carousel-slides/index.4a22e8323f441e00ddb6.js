(function(R,k){if(typeof exports=="object"&&typeof module=="object")module.exports=k();else if(typeof define=="function"&&define.amd)define([],k);else{var $=k();for(var c in $)(typeof exports=="object"?exports:R)[c]=$[c]}})(globalThis,()=>(()=>{var q={7192(c){c.exports={apiVersion:3,name:"launchpad-blocks/carousel-slides",title:"Carousel image slides",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel","launchpad-blocks/gallery-carousel"],allowedBlocks:["core/image"],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{allowResize:{type:"boolean",default:!1},aspectRatio:{type:"string",default:"auto"},imageFit:{type:"string",enum:["cover","contain"],default:"cover"},shouldPullImagesFromContext:{type:"boolean",default:!1},captionBackground:{type:"string"}},providesContext:{allowResize:"allowResize"},usesContext:["launchpad-blocks/carouselImages","launchpad-blocks/shouldLinkSlidesToLightbox"],supports:{color:{link:!0}}}}},R={};function k(c){var v=R[c];if(v!==void 0)return v.exports;var r=R[c]={exports:{}};return q[c](r,r.exports,k),r.exports}k.n=c=>{var v=c&&c.__esModule?()=>c.default:()=>c;return k.d(v,{a:v}),v},k.d=(c,v)=>{for(var r in v)k.o(v,r)&&!k.o(c,r)&&Object.defineProperty(c,r,{enumerable:!0,get:v[r]})},k.o=(c,v)=>Object.prototype.hasOwnProperty.call(c,v);var $={};return(()=>{"use strict";const c=window.wp.blocks,v=window.wp.primitives,r=window.ReactJSXRuntime,V=(0,r.jsx)(v.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)(v.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})}),_=window.wp.blockEditor,b=window.wp.components,Ke=window.wp.coreData,U=window.wp.data,y=window.wp.i18n,N=window.React;var A,se;function Qe(e){return A("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:A("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function le(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,r.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,r.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,r.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const ie=(0,N.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:s,isEditorMode:l=!1,...i}=n;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...i,children:(0,r.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function Ye(e){return A(se,{fallback:null,children:A(ie,{...e})})}var E,X,f,ae,O,ce,ue,de,pe,me,Z,J,H,ge,he,j,fe,be,xe,ve,we,ke,D,_e,ye,Ce,je;function Be(){(0,c.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:le})}function K(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function et(e,t,n){const o=t.spacing?.blockGap;let s="none";if(o===!0)s="both";else if(Array.isArray(o)){const i=o.includes("horizontal"),d=o.includes("vertical");i&&d?s="both":i?s="horizontal":d&&(s="vertical")}const l={columnGap:s==="both"||s==="horizontal"?K(n?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?K(n?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let i="";return e.minimumColumnWidth?i=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(i=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:i,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function Se(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const s=Se(o.innerBlocks,t);s&&n.push(...s)}return n},[])}const tt=()=>{const e=D(()=>({per_page:-1}),[]),t=D(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=D(()=>({}),[]),{postTypes:o,taxonomies:s}=H(h=>{const{getEntityRecords:m}=h(J),p=m("root","postType",e),a=m("root","taxonomy",t);if(!a)return{postTypes:p,taxonomies:a};for(const w of a)n[w.slug]=m("taxonomy",w.slug);return{postTypes:p,taxonomies:a}},[e,t,n]),l=["attachment"],i=[],d=o?.filter(({viewable:h,slug:m})=>h&&!l.includes(m));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const h of d){const m=s?.filter(({types:p,slug:a})=>p.includes(h.slug)&&!i.includes(a));m&&(u[h.slug]=m.map(p=>{const a=n?.[p.slug]??null;return{...p,terms:a}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function nt({list:e,containerClassName:t,renderItem:n}){return E(X,{children:[f("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),f("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function Pe(e){return e.indexOf("data:image/svg+xml,")===0}function ze(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function Te(e){return e.indexOf("dashicons-")===0}function Ie({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return f("div",{className:"menu-icon","aria-hidden":"true",children:f("br",{})});if(Pe(e))return f("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:f("br",{})});if(ze(e))return f("img",{src:new URL(e).toString(),alt:""});if(Te(e)){const t=e.replace("dashicons-","");return f(ue,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ot={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function rt(){const[e,t,n,o]=ae("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),s={};if(o&&n&&n.length>0)for(const l of n)s[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)s[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)s[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:s}}function Re({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return(0,r.jsx)(b.__experimentalToolsPanel,{label:(0,y.__)("Custom colours","launchpad"),resetAll:s=>{if(s)for(const l of s)l()},children:(0,r.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>(0,r.jsx)($e,{colour:s,attributesDefinition:t,attributes:n,setAttributes:o},s.attributeName))})})}function $e({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[s,l,i,d,u]=(0,_.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==n[e.attributeName],m=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},p=(0,N.useRef)(null);return(0,r.jsx)(b.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:m,hasValue:h,onDeselect:m,label:e.label,isShownByDefault:!0,children:(0,r.jsx)(b.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:a,onToggle:w})=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b.Button,{ref:p,__next40pxDefaultSize:!0,onClick:w,"aria-expanded":a,className:`block-editor-panel-color-gradient-settings__dropdown${a?" is-open":""}`,children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,r.jsx)(b.ColorIndicator,{colorValue:n[e.attributeName]})," ",(0,r.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,r.jsx)(b.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,r.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,r.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,r.jsx)(b.ColorPalette,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...d&&i&&i.length>0?[{name:"Default",colors:i}]:[]],value:n[e.attributeName],onChange:a=>{o({[e.attributeName]:a})},disableCustomColors:!u})})})})})},e.attributeName)}function Ne({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[s,l,i]=(0,_.useSettings)("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=l?.map(({name:a,ratio:w})=>({label:a,value:w}))??[],u=s?.map(({name:a,ratio:w})=>({label:a,value:w}))??[],h=[{label:(0,y._x)("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...i?u:[],...d||[],{label:(0,y._x)("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[m,p]=(0,N.useState)(h.map(a=>a.value).includes(e)?e:"custom");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,y.__)("Aspect ratio","launchpad-blocks"),options:h,value:m,onChange:a=>{p(a),a!=="custom"&&t(a)}}),m==="custom"?(0,r.jsx)(b.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,y.__)("Custom aspect ratio","launchpad-blocks"),help:(0,y.__)("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?(0,r.jsxs)(b.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:(0,y.__)("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:a=>{typeof a=="string"&&["contain","cover"].includes(a)&&o(a)},value:n,children:[(0,r.jsx)(b.__experimentalToggleGroupControlOption,{label:"Cover",value:"cover"}),(0,r.jsx)(b.__experimentalToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const Ae=(e,t,n,o)=>{const{getBlocksByName:s,getBlockAttributes:l,getBlockParentsByBlockName:i}=ge(O);return s(o).some(u=>{if(i(u,"core/template-part",!0).length)return!1;const{[n]:h}=l(u);return e!==u&&t===h})};function st(e,t,n,o,s){const{[t]:l}=e,i=_e(u=>Ae(n,u,t,s),[n,t,s]);return ye(()=>{if(l===""){const u=n.slice(0,n.indexOf("-"));o({[t]:u})}if(i(l)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${u}`),o({[t]:u})}},[l,n,o,i,t]),D(()=>function({label:h,help:m,onValidChange:p,idAttribute:a}){const[w,F]=Ce(a);return f(de,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof m=="function"?m(!i(w)):m,value:w,onChange:P=>{F(P),i(P)||p(P)}})},[i])}function lt({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return f(pe,{label:j("Change title heading element","launchpad-blocks"),icon:Q(t),controls:e.map(o=>{{const s=o===t;return{icon:Q(o),title:De(o),isDisabled:s,onClick:()=>n(o)}}})})}function De(e){switch(e){case"h2":return j("Heading 2","launchpad-blocks");case"h3":return j("Heading 3","launchpad-blocks");case"h4":return j("Heading 4","launchpad-blocks");case"h5":return j("Heading 5","launchpad-blocks");case"h6":return j("Heading 6","launchpad-blocks");case"p":return j("Paragraph","launchpad-blocks")}}function Q(e){switch(e){case"h2":return fe;case"h3":return be;case"h4":return xe;case"h5":return ve;case"h6":return we;case"p":return ke}}function it(e){const{hasChildren:t}=H(n=>{const{getBlocks:o}=n(O);return{hasChildren:o(e).length>0}},[e]);return t}function at({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:s,updateBlockAttributes:l}=he(O);return E(me,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[f("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":j("Block variations"),children:n.map(i=>E("li",{children:[f(Z,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof i.icon=="string"?f(Ie,{iconString:i.icon}):i.icon,iconSize:48,onClick:()=>{i.attributes&&l(e,i.attributes),i.innerBlocks&&s(e,ce(i.innerBlocks),!1)}}),f("span",{className:"block-editor-block-variation-picker__variation-label",children:i.title})]},i.name))}),o&&f("div",{className:"block-editor-block-variation-picker__skip",children:f(Z,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:j("Skip")})})]})}function ct({imageId:e,className:t="",size:n="full"}){const o=H(l=>typeof e=="number"&&e>0?l(J).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?f(X,{children:f("img",{...(()=>{const l={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(l.src=o.media_details.sizes[n].source_url,l.width=o.media_details.sizes[n].width,l.height=o.media_details.sizes[n].height),l.srcSet=Object.entries(o.media_details.sizes??{}).map(([i,d])=>`${d.source_url} ${d.width}w`).join(", "),l})(),alt:o.alt_text||""})}):null}function Le(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>Le(n))):t.push([]),t}function ut(e){const t=je(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const s=e()?.scrollHeight??0;if(s){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${s}px !important`)}else t.current.style.minHeight=""}},1)}}var Me=k(7192),Y=k.n(Me);const Ee=[];function dt(e){if(e===void 0)throw new Error(`Pixel value ${e} is undefined`);if(!e.endsWith("px"))throw new Error(`Pixel value ${e} is not a pixel value`);if(e.includes(" "))throw new Error(`Pixel value ${e} contains multiple values`);return Number(e.replace("px",""))}function pt(e){let t="";const n=document.createElement("div");return n.innerHTML=e,t=n.innerText,Oe(t)}function Oe(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|(?<!-)-+$/g,"")}function He(e,t=()=>!0){const n=e.parentElement;return n===null?null:t(n)?n:He(n,t)}function mt(e){if(new RegExp("ms$","ig").test(e))return Number(e.substring(0,e.length-2));if(new RegExp("s$","ig").test(e))return Number(e.substring(0,e.length-1))*1e3;throw new Error("Time didn't end with ms or s so was not correctly parsed.")}function gt(){if(typeof document>"u")return"unknown";const e=window.navigator.userAgent;let t="unknown";return e.search("Windows")!==-1?t="Windows":e.search("Mac")!==-1?t="MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?t="UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1&&(t="Linux"),t}function ee(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!Object.entries(e[n]).every(([s,l])=>Array.isArray(l)?ee(l,t[n]?.[s]):t[n]?.[s]===l))return!1;return!0}const Fe={allowResize:{type:"boolean",default:!1},aspectRatio:{type:"string",default:"auto"},imageFit:{type:"string",enum:["cover","contain"],default:"cover"},shouldPullImagesFromContext:{type:"boolean",default:!1},captionBackground:{type:"string"}};function te({clientId:e,attributes:t,setAttributes:n,context:o}){const{aspectRatio:s,imageFit:l,shouldPullImagesFromContext:i,captionBackground:d}=t,u=(0,_.useBlockProps)({className:s!=="auto"?"has-aspect-ratio":"",style:{"--slide-aspect-ratio":s,"--slide-image-fit":s!=="auto"?l:void 0,"--caption-background":d}}),h=o["launchpad-blocks/shouldLinkSlidesToLightbox"],{hasChildren:m,innerBlockImages:p,parentCarousel:a,associatedLightboxBlockId:w}=(0,U.useSelect)(g=>{const{getBlock:B,getBlocks:T,getBlockParentsByBlockName:re}=g(_.store),z=T(e),L=re(e,["launchpad-blocks/carousel","launchpad-blocks/gallery-carousel"])[0],x=B(L);function C(M,S){const W=[];S=Array.isArray(S)?S:[S];for(const I of M)S.includes(I.name)&&W.push(I.clientId),I.innerBlocks&&I.innerBlocks.length>0&&W.push(...C(I.innerBlocks,S));return W}return{hasChildren:z.length>0,innerBlockImages:z,parentCarousel:x,associatedLightboxBlockId:h?C(T(L),"launchpad-blocks/gallery-carousel-lightbox")[0]??null:null}},[e,h]),{replaceInnerBlocks:F,selectBlock:P,updateBlockAttributes:G}=(0,U.useDispatch)(_.store);function ne(g){return g.map(B=>({id:B.attributes.id,url:B.attributes.url}))}function oe(g){const B=g.reduce((x,C,M)=>(x[C.id]=M,x),{}),T=p.filter(x=>g.find(C=>C.id===x.attributes?.id)),z=g.filter(x=>!T.find(C=>x.id===C.attributes?.id)).map(x=>(0,c.createBlock)("core/image",{id:x.id,url:x.url,caption:x.caption,alt:x.alt,sizeSlug:"full"})),L=T.map(x=>{const{validationIssues:C,originalContent:M,...S}=x;return S}).concat(z).sort((x,C)=>B[x.attributes?.id]-B[C.attributes?.id]);F(e,L),z?.length>0&&P(z[0].clientId)}(0,N.useEffect)(()=>{if(i)return;const g=ne(p);ee(a.attributes?.images,g)||(G(a.clientId,{images:g}),G(a.clientId,{slides:p}))},[p,a,i,G]);const{children:Xe,...Ze}=(0,_.useInnerBlocksProps)(u);return(0,r.jsxs)(r.Fragment,{children:[i?null:(0,r.jsx)(_.BlockControls,{group:"other",children:(0,r.jsx)(_.MediaReplaceFlow,{allowedTypes:["image"],accept:"image/*",onSelect:oe,name:p.length===0?(0,y.__)("Add","launchpad-blocks"):(0,y.__)("Replace","launchpad-blocks"),multiple:!0,mediaIds:ne(p).filter(g=>g.id).map(g=>g.id),addToGallery:p.length>0})}),(0,r.jsx)(_.InspectorControls,{group:"styles",children:(0,r.jsx)(Re,{colours:[{attributeName:"captionBackground",label:"Caption background colour"}],attributes:t,attributesDefinition:Fe,setAttributes:n})}),(0,r.jsxs)(_.InspectorControls,{children:[(0,r.jsx)(b.Panel,{children:(0,r.jsx)(b.PanelBody,{children:(0,r.jsx)(Ne,{ratioValue:s,ratioOnChange:g=>{n({aspectRatio:g})},imageFitValue:l,imageFitOnChange:g=>{n({imageFit:g})}})})}),h&&w?(0,r.jsx)(b.Panel,{children:(0,r.jsx)(b.PanelBody,{children:(0,r.jsx)(b.Button,{type:"button",variant:"primary",onClick:()=>{P(w)},children:"Edit lightbox"})})}):null]}),(0,r.jsx)("div",{...Ze,children:m?Xe:i?o["launchpad-blocks/carouselImages"].length?o["launchpad-blocks/carouselImages"].map(({id:g,url:B})=>(0,r.jsx)("figure",{className:"wp-block-image",children:(0,r.jsx)("img",{src:B,alt:""})},g)):(0,r.jsx)("figure",{className:"wp-block-image",children:(0,r.jsx)("img",{src:"https://picsum.photos/id/237/2000/1600",alt:""})}):(0,r.jsx)(_.MediaPlaceholder,{icon:V,labels:{title:(0,y.__)("Carousel slides","launchpad-blocks"),instructions:(0,y.__)("Drag and drop images, upload, or choose from your library.","launchpad-blocks")},onSelect:oe,accept:"image/*",allowedTypes:["image"],multiple:!0,addToGallery:!1})})]})}te.displayName="CarouselSlidesEdit";function Ge({hasInnerBlocks:e}){return e?qe:We}function We(){return null}function qe(){return(0,r.jsx)(_.InnerBlocks.Content,{})}const Ve={from:[],to:[]},Ue=[],ht={allowResize:"allowResize"},ft=null;(0,c.registerBlockType)(Y().name,{icon:V,deprecated:Ee,edit:te,save:Ge({hasInnerBlocks:!0}),transforms:Ve}),Be(),Ue.forEach(e=>{(0,c.registerBlockVariation)(Y().name,e)})})(),$})());
