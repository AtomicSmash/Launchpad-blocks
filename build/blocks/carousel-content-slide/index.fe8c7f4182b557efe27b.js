(function(S,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var B=v();for(var u in B)(typeof exports=="object"?exports:S)[u]=B[u]}})(globalThis,()=>(()=>{var R={4351(u){u.exports={apiVersion:3,name:"launchpad-blocks/carousel-content-slide",title:"Carousel content slide",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel-content-slides"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{backgroundOrOverlayColour:{type:"string"},overlayOpacity:{type:"number",default:50}},providesContext:{},usesContext:["launchpad-blocks/template","launchpad-blocks/shouldLockChildSlidesToTemplate","launchpad-blocks/currentlySelectedSlide","launchpad-blocks/isInTemplateEditMode"],supports:{background:{backgroundImage:!0,backgroundSize:!0},spacing:{padding:["vertical"]},layout:{default:{type:"flex",justifyContent:"center"},allowCustomContentAndWideSize:!1,allowOrientation:!1,allowJustification:!1}}}}},S={};function v(u){var b=S[u];if(b!==void 0)return b.exports;var a=S[u]={exports:{}};return R[u](a,a.exports,v),a.exports}v.n=u=>{var b=u&&u.__esModule?()=>u.default:()=>u;return v.d(b,{a:b}),b},v.d=(u,b)=>{for(var a in b)v.o(b,a)&&!v.o(u,a)&&Object.defineProperty(u,a,{enumerable:!0,get:b[a]})},v.o=(u,b)=>Object.prototype.hasOwnProperty.call(u,b);var B={};return(()=>{"use strict";const u=window.wp.blocks,b=window.wp.primitives,a=window.ReactJSXRuntime,K=(0,a.jsx)(b.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(b.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})}),_=window.wp.blockEditor,k=window.wp.components,Ze=window.wp.coreData,M=window.wp.data,Q=window.wp.i18n,z=window.React;var O,Y;function Ue(e){return O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:O("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function ee(e){return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,a.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,a.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,a.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const te=(0,z.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:r,isEditorMode:l=!1,...s}=o;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...s,children:(0,a.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function Je(e){return O(Y,{fallback:null,children:O(te,{...e})})}var C,$,p,oe,N,ne,re,le,A,ae,H,se,ie,E,L,I,ce,de,V,x,ue,pe,me,he,fe,ge,P,G,be,ve,xe;function ke(){(0,u.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:ee})}function W(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Xe(e,t,o){const n=t.spacing?.blockGap;let r="none";if(n===!0)r="both";else if(Array.isArray(n)){const s=n.includes("horizontal"),m=n.includes("vertical");s&&m?r="both":s?r="horizontal":m&&(r="vertical")}const l={columnGap:r==="both"||r==="horizontal"?W(o?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?W(o?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function _e(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const r=_e(n.innerBlocks,t);r&&o.push(...r)}return o},[])}const Ke=()=>{const e=P(()=>({per_page:-1}),[]),t=P(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=P(()=>({}),[]),{postTypes:n,taxonomies:r}=I(h=>{const{getEntityRecords:d}=h(L),f=d("root","postType",e),i=d("root","taxonomy",t);if(!i)return{postTypes:f,taxonomies:i};for(const g of i)o[g.slug]=d("taxonomy",g.slug);return{postTypes:f,taxonomies:i}},[e,t,o]),l=["attachment"],s=[],m=n?.filter(({viewable:h,slug:d})=>h&&!l.includes(d));if(!m||m.length===0)return{postTypes:m,taxonomies:void 0};const c={};for(const h of m){const d=r?.filter(({types:f,slug:i})=>f.includes(h.slug)&&!s.includes(i));d&&(c[h.slug]=d.map(f=>{const i=o?.[f.slug]??null;return{...f,terms:i}}))}return{filteredPostTypes:m,mappedTaxonomies:c===void 0||Object.values(c).length===0?void 0:c}};function Qe({list:e,containerClassName:t,renderItem:o}){return C($,{children:[p("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),p("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function we(e){return e.indexOf("data:image/svg+xml,")===0}function ye(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function Ce(e){return e.indexOf("dashicons-")===0}function je({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return p("div",{className:"menu-icon","aria-hidden":"true",children:p("br",{})});if(we(e))return p("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:p("br",{})});if(ye(e))return p("img",{src:new URL(e).toString(),alt:""});if(Ce(e)){const t=e.replace("dashicons-","");return p(re,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Ye={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Se(){const[e,t,o,n]=(0,_.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(n&&o&&o.length>0)for(const l of o)r[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)r[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)r[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:r}}function Be({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return(0,a.jsx)(k.__experimentalToolsPanel,{label:(0,Q.__)("Custom colours","launchpad"),resetAll:r=>{if(r)for(const l of r)l()},children:(0,a.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>(0,a.jsx)(ze,{colour:r,attributesDefinition:t,attributes:o,setAttributes:n},r.attributeName))})})}function ze({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[r,l,s,m,c]=(0,_.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==o[e.attributeName],d=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=(0,z.useRef)(null);return(0,a.jsx)(k.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:h,onDeselect:d,label:e.label,isShownByDefault:!0,children:(0,a.jsx)(k.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:g})=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(k.Button,{ref:f,__next40pxDefaultSize:!0,onClick:g,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,a.jsx)(k.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,a.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,a.jsx)(k.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,a.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,a.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,a.jsx)(k.ColorPalette,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...m&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:o[e.attributeName],onChange:i=>{n({[e.attributeName]:i})},disableCustomColors:!c})})})})})},e.attributeName)}function et({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[r,l,s]=oe("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),m=l?.map(({name:i,ratio:g})=>({label:i,value:g}))??[],c=r?.map(({name:i,ratio:g})=>({label:i,value:g}))??[],h=[{label:V("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?c:[],...m||[],{label:V("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,f]=G(h.map(i=>i.value).includes(e)?e:"custom");return C($,{children:[p(le,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:x("Aspect ratio","launchpad-blocks"),options:h,value:d,onChange:i=>{f(i),i!=="custom"&&t(i)}}),d==="custom"?p(A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:x("Custom aspect ratio","launchpad-blocks"),help:x("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?C(ae,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:x("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&n(i)},value:o,children:[p(H,{label:"Cover",value:"cover"}),p(H,{label:"Contain",value:"contain"})]}):null]})}const Oe=(e,t,o,n)=>{const{getBlocksByName:r,getBlockAttributes:l,getBlockParentsByBlockName:s}=ce(N);return r(n).some(c=>{if(s(c,"core/template-part",!0).length)return!1;const{[o]:h}=l(c);return e!==c&&t===h})};function tt(e,t,o,n,r){const{[t]:l}=e,s=be(c=>Oe(o,c,t,r),[o,t,r]);return ve(()=>{if(l===""){const c=o.slice(0,o.indexOf("-"));n({[t]:c})}if(s(l)){const c=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${c}`),n({[t]:c})}},[l,o,n,s,t]),P(()=>function({label:h,help:d,onValidChange:f,idAttribute:i}){const[g,j]=G(i);return p(A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof d=="function"?d(!s(g)):d,value:g,onChange:y=>{j(y),s(y)||f(y)}})},[s])}function ot({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return p(se,{label:x("Change title heading element","launchpad-blocks"),icon:q(t),controls:e.map(n=>{{const r=n===t;return{icon:q(n),title:Pe(n),isDisabled:r,onClick:()=>o(n)}}})})}function Pe(e){switch(e){case"h2":return x("Heading 2","launchpad-blocks");case"h3":return x("Heading 3","launchpad-blocks");case"h4":return x("Heading 4","launchpad-blocks");case"h5":return x("Heading 5","launchpad-blocks");case"h6":return x("Heading 6","launchpad-blocks");case"p":return x("Paragraph","launchpad-blocks")}}function q(e){switch(e){case"h2":return ue;case"h3":return pe;case"h4":return me;case"h5":return he;case"h6":return fe;case"p":return ge}}function nt(e){const{hasChildren:t}=I(o=>{const{getBlocks:n}=o(N);return{hasChildren:n(e).length>0}},[e]);return t}function rt({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:r,updateBlockAttributes:l}=de(N);return C(ie,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[p("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":x("Block variations"),children:o.map(s=>C("li",{children:[p(E,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?p(je,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&l(e,s.attributes),s.innerBlocks&&r(e,ne(s.innerBlocks),!1)}}),p("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),n&&p("div",{className:"block-editor-block-variation-picker__skip",children:p(E,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:x("Skip")})})]})}function lt({imageId:e,className:t="",size:o="full"}){const n=I(l=>typeof e=="number"&&e>0?l(L).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?p($,{children:p("img",{...(()=>{const l={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(l.src=n.media_details.sizes[o].source_url,l.width=n.media_details.sizes[o].width,l.height=n.media_details.sizes[o].height),l.srcSet=Object.entries(n.media_details.sizes??{}).map(([s,m])=>`${m.source_url} ${m.width}w`).join(", "),l})(),alt:n.alt_text||""})}):null}function Te(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Te(o))):t.push([]),t}function at(e){const t=xe(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var $e=v(4351),F=v.n($e);const Ne=[],Ie={backgroundOrOverlayColour:{type:"string"},overlayOpacity:{type:"number",default:50}};function Z({clientId:e,isSelected:t,context:o,attributes:n,setAttributes:r}){const{style:l,backgroundOrOverlayColour:s,overlayOpacity:m}=n,c=l?.background?.backgroundImage?.url,h=o["launchpad-blocks/isInTemplateEditMode"],d=o["launchpad-blocks/template"],f=o["launchpad-blocks/currentlySelectedSlide"],{isInnerBlockSelected:i,currentSlideOrderNumber:g,parentCarouselClientId:j}=(0,M.useSelect)(w=>{const{hasSelectedInnerBlock:D,getBlockParentsByBlockName:T,getBlockOrder:Ve}=w(_.store),X=T(e,"launchpad-blocks/carousel-content-slides").at(-1),Ge=T(e,"launchpad-blocks/carousel").at(-1),We=(X?Ve(X):[]).findIndex(qe=>e===qe);return{isInnerBlockSelected:D(e,!0),currentSlideOrderNumber:We,parentCarouselClientId:Ge}},[e]),{updateBlockAttributes:y}=(0,M.useDispatch)(_.store),{allPalettes:U}=Se(),J=Object.keys(U).find(w=>U[w].color===s),Ee=(0,_.useBlockProps)({className:`${f===g?"show-slide-in-editor":""} ${c?"has-bg-image":""} ${J?`has-background-color has-${J}-background-color`:""}`,style:{...c?{"--overlay-opacity":`${m}%`}:{}}}),Le=(0,_.useInnerBlocksProps)(Ee,{allowedBlocks:["launchpad-blocks/carousel-content-slide-content"],template:[["launchpad-blocks/carousel-content-slide-content"]],templateLock:"all"});return(0,z.useEffect)(()=>{if(!h&&d.length===1&&d[0].name==="launchpad-blocks/carousel-content-slide"&&d[0].attributes){const w={...n,...d[0].attributes};Object.entries(n).every(([D,T])=>w[D]===T)&&r(w)}},[d,r,h,n]),(0,z.useEffect)(()=>{j&&(t||i)&&f!==g&&y(j,{currentlySelectedSlide:g})},[t,i,g,j,f,y]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(_.InspectorControls,{group:"styles",children:[(0,a.jsx)(Be,{colours:[{attributeName:"backgroundOrOverlayColour",label:c?"Overlay":"Background"}],attributes:n,attributesDefinition:Ie,setAttributes:r}),c&&s?(0,a.jsx)(k.Panel,{children:(0,a.jsx)(k.PanelBody,{children:(0,a.jsx)(k.RangeControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,help:"Please select how transparent you would like the overlay.",label:"Overlay opacity",max:100,min:0,value:m,onChange:w=>{r({overlayOpacity:w})}})})}):null]}),(0,a.jsx)("div",{...Le})]})}Z.displayName="CarouselContentSlideEdit";function De({hasInnerBlocks:e}){return e?Me:Re}function Re(){return null}function Me(){return(0,a.jsx)(_.InnerBlocks.Content,{})}const Ae={from:[],to:[]},He=[],st={},it=null;(0,u.registerBlockType)(F().name,{icon:K,deprecated:Ne,edit:Z,save:De({hasInnerBlocks:!0}),transforms:Ae}),ke(),He.forEach(e=>{(0,u.registerBlockVariation)(F().name,e)})})(),B})());
