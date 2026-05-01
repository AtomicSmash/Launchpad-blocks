(function(C,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var j=v();for(var i in j)(typeof exports=="object"?exports:C)[i]=j[i]}})(globalThis,()=>(()=>{var $={6578(i){i.exports={apiVersion:3,name:"launchpad-blocks/lightbox",title:"Lightbox",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{iconName:{type:"string",role:"content",default:"menu-close-icon"},library:{type:"string",role:"content",default:"launchpad-blocks"},backgroundColor:{type:"string",default:"white"}},providesContext:{},usesContext:[],supports:{color:{background:!0,text:!1}},parent:["launchpad-blocks/carousel","launchpad-blocks/gallery-carousel"]}}},C={};function v(i){var f=C[i];if(f!==void 0)return f.exports;var g=C[i]={exports:{}};return $[i](g,g.exports,v),g.exports}v.n=i=>{var f=i&&i.__esModule?()=>i.default:()=>i;return v.d(f,{a:f}),f},v.d=(i,f)=>{for(var g in f)v.o(f,g)&&!v.o(i,g)&&Object.defineProperty(i,g,{enumerable:!0,get:f[g]})},v.o=(i,f)=>Object.prototype.hasOwnProperty.call(i,f);var j={};return(()=>{"use strict";const i=window.ReactJSXRuntime,f=window.wp.blocks,g=window.wp.blockEditor,_=window.wp.components,Fe=window.wp.coreData,K=window.wp.data,y=window.wp.i18n,w=window.React;var D;function Je(e){return D("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:D("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function X(e){return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,i.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,i.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,i.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const Z=(0,w.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:r,isEditorMode:l=!1,...a}=n;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...a,children:(0,i.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function R(e){return(0,i.jsx)(w.Suspense,{fallback:null,children:(0,i.jsx)(Z,{...e})})}var k,S,c,z,T,Q,Y,ee,te,ne,I,oe,re,le,ie,M,ae,L,se,ce,O,P,ue,de,b,H,pe,me,he,fe,ge,be,B,E,G,ve,xe;function we(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:X})}function U(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Ke(e,t,n){const o=t.spacing?.blockGap;let r="none";if(o===!0)r="both";else if(Array.isArray(o)){const a=o.includes("horizontal"),u=o.includes("vertical");a&&u?r="both":a?r="horizontal":u&&(r="vertical")}const l={columnGap:r==="both"||r==="horizontal"?U(n?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?U(n?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function _e(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const r=_e(o.innerBlocks,t);r&&n.push(...r)}return n},[])}const Xe=()=>{const e=B(()=>({per_page:-1}),[]),t=B(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=B(()=>({}),[]),{postTypes:o,taxonomies:r}=P(m=>{const{getEntityRecords:p}=m(O),h=p("root","postType",e),s=p("root","taxonomy",t);if(!s)return{postTypes:h,taxonomies:s};for(const x of s)n[x.slug]=p("taxonomy",x.slug);return{postTypes:h,taxonomies:s}},[e,t,n]),l=["attachment"],a=[],u=o?.filter(({viewable:m,slug:p})=>m&&!l.includes(p));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const d={};for(const m of u){const p=r?.filter(({types:h,slug:s})=>h.includes(m.slug)&&!a.includes(s));p&&(d[m.slug]=p.map(h=>{const s=n?.[h.slug]??null;return{...h,terms:s}}))}return{filteredPostTypes:u,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Ze({list:e,containerClassName:t,renderItem:n}){return k(S,{children:[c("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),c("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function ke(e){return e.indexOf("data:image/svg+xml,")===0}function ye(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function Ce(e){return e.indexOf("dashicons-")===0}function je({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return c("div",{className:"menu-icon","aria-hidden":"true",children:c("br",{})});if(ke(e))return c("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:c("br",{})});if(ye(e))return c("img",{src:new URL(e).toString(),alt:""});if(Ce(e)){const t=e.replace("dashicons-","");return c(Y,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Qe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ye(){const[e,t,n,o]=z("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(o&&n&&n.length>0)for(const l of n)r[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)r[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)r[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:r}}function et({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return c(ee,{label:b("Custom colours","launchpad"),resetAll:r=>{if(r)for(const l of r)l()},children:c("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>c(Se,{colour:r,attributesDefinition:t,attributes:n,setAttributes:o},r.attributeName))})})}function Se({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[r,l,a,u,d]=z("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==n[e.attributeName],p=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},h=E(null);return c(te,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:m,onDeselect:p,label:e.label,isShownByDefault:!0,children:c(ne,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:s,onToggle:x})=>c(S,{children:c(I,{ref:h,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":s,className:`block-editor-panel-color-gradient-settings__dropdown${s?" is-open":""}`,children:k("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[c(oe,{colorValue:n[e.attributeName]})," ",c("span",{children:e.label})]})})}),renderContent:()=>c(re,{paddingSize:"none",children:c("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:c("div",{className:"block-editor-color-gradient-control__panel",children:c(le,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...u&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:n[e.attributeName],onChange:s=>{o({[e.attributeName]:s})},disableCustomColors:!d})})})})})},e.attributeName)}function tt({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[r,l,a]=z("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=l?.map(({name:s,ratio:x})=>({label:s,value:x}))??[],d=r?.map(({name:s,ratio:x})=>({label:s,value:x}))??[],m=[{label:H("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?d:[],...u||[],{label:H("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,h]=G(m.map(s=>s.value).includes(e)?e:"custom");return k(S,{children:[c(ie,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:b("Aspect ratio","launchpad-blocks"),options:m,value:p,onChange:s=>{h(s),s!=="custom"&&t(s)}}),p==="custom"?c(M,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:b("Custom aspect ratio","launchpad-blocks"),help:b("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?k(ae,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:b("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:s=>{typeof s=="string"&&["contain","cover"].includes(s)&&o(s)},value:n,children:[c(L,{label:"Cover",value:"cover"}),c(L,{label:"Contain",value:"contain"})]}):null]})}const Be=(e,t,n,o)=>{const{getBlocksByName:r,getBlockAttributes:l,getBlockParentsByBlockName:a}=ue(T);return r(o).some(d=>{if(a(d,"core/template-part",!0).length)return!1;const{[n]:m}=l(d);return e!==d&&t===m})};function nt(e,t,n,o,r){const{[t]:l}=e,a=ve(d=>Be(n,d,t,r),[n,t,r]);return xe(()=>{if(l===""){const d=n.slice(0,n.indexOf("-"));o({[t]:d})}if(a(l)){const d=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${d}`),o({[t]:d})}},[l,n,o,a,t]),B(()=>function({label:m,help:p,onValidChange:h,idAttribute:s}){const[x,qe]=G(s);return c(M,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof p=="function"?p(!a(x)):p,value:x,onChange:A=>{qe(A),a(A)||h(A)}})},[a])}function ot({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return c(se,{label:b("Change title heading element","launchpad-blocks"),icon:V(t),controls:e.map(o=>{{const r=o===t;return{icon:V(o),title:Ne(o),isDisabled:r,onClick:()=>n(o)}}})})}function Ne(e){switch(e){case"h2":return b("Heading 2","launchpad-blocks");case"h3":return b("Heading 3","launchpad-blocks");case"h4":return b("Heading 4","launchpad-blocks");case"h5":return b("Heading 5","launchpad-blocks");case"h6":return b("Heading 6","launchpad-blocks");case"p":return b("Paragraph","launchpad-blocks")}}function V(e){switch(e){case"h2":return pe;case"h3":return me;case"h4":return he;case"h5":return fe;case"h6":return ge;case"p":return be}}function rt(e){const{hasChildren:t}=P(n=>{const{getBlocks:o}=n(T);return{hasChildren:o(e).length>0}},[e]);return t}function lt({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:r,updateBlockAttributes:l}=de(T);return k(ce,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[c("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":b("Block variations"),children:n.map(a=>k("li",{children:[c(I,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?c(je,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&l(e,a.attributes),a.innerBlocks&&r(e,Q(a.innerBlocks),!1)}}),c("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),o&&c("div",{className:"block-editor-block-variation-picker__skip",children:c(I,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:b("Skip")})})]})}function it({imageId:e,className:t="",size:n="full"}){const o=P(l=>typeof e=="number"&&e>0?l(O).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?c(S,{children:c("img",{...(()=>{const l={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(l.src=o.media_details.sizes[n].source_url,l.width=o.media_details.sizes[n].width,l.height=o.media_details.sizes[n].height),l.srcSet=Object.entries(o.media_details.sizes??{}).map(([a,u])=>`${u.source_url} ${u.width}w`).join(", "),l})(),alt:o.alt_text||""})}):null}function ze(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>ze(n))):t.push([]),t}function at(e){const t=E(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var Te=v(6578),W=v.n(Te);const Ie=[],Pe=window.wp.hooks,q=window.wp.element;function Ae({icon:e,size:t=24,...n},o){return(0,q.cloneElement)(e,{width:t,height:t,...n,ref:o})}const $e=(0,q.forwardRef)(Ae),N=window.wp.primitives,De=(0,i.jsx)(N.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)(N.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),Re=(0,i.jsx)(N.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)(N.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),Me={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,y.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,y.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,y.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,y.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0},lightbox:{title:(0,y.__)("Lightbox","launchpad-blocks")}},Le={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,t)=>(0,i.jsx)(R,{iconName:e,isEditorMode:!0,...t}),availableIcons:Object.fromEntries(Object.entries(Me).filter(([e,t])=>t.makeAvailableToUser===!0))}};function F(){return(0,Pe.applyFilters)("launchpadBlocks.icons",{...Le})}function Oe({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:t,onIconSelect:n,onReset:o}){const r=F(),[l,a]=(0,w.useState)("");return(0,i.jsxs)(_.Panel,{children:[(0,i.jsxs)(_.PanelHeader,{children:[e," ",o?(0,i.jsx)(_.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{o()},size:"small",children:"Reset"}):null]}),(0,i.jsxs)(_.PanelBody,{children:[(0,i.jsx)(_.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:l,onChange:u=>{a(u)}}),(0,i.jsx)("div",{children:Object.entries(r).map(([u,d])=>{if(Object.keys(d.availableIcons).length===0)return null;const m=Object.entries(d.availableIcons).filter(([p,{title:h}])=>!!(p.includes(l)||h.includes(l)));return(0,i.jsx)(He,{name:d.name,iconCount:m.length,children:(0,i.jsx)("div",{className:`icon-select ${u}-icon-select`,children:m.map(([p,{title:h}])=>{const s=t.iconName===p&&t.library===u;return(0,i.jsx)("button",{className:`icon-select-icon ${u}-icon-select-icon ${u}-icon-select-icon-${p}${s?" is-selected":""}`,onClick:()=>{n({iconName:p,library:u})},title:h,children:d.renderIcon(p)},p)})})},u)})})]})]})}function He({name:e,iconCount:t,children:n}){const[o,r]=(0,w.useState)(!1);return(0,w.useEffect)(()=>{t===0&&o&&r(!1)},[o,t]),(0,i.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,i.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,i.jsxs)(_.Button,{type:"button","aria-expanded":o,onClick:()=>{t>0&&r(!o)},disabled:t===0,className:"icon-select-group-accordion-header-button",children:[(0,i.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,i.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:t}),(0,i.jsx)($e,{className:"icon-select-group-accordion-arrow",icon:o?De:Re})]})}),o?n:null]})}function J({clientId:e,isSelected:t,attributes:n,setAttributes:o}){const r=F(),{iconName:l,library:a}=n,u=(0,K.useSelect)(s=>s(g.store).hasSelectedInnerBlock(e,!0),[e]),d=(0,w.useRef)(null);(0,w.useEffect)(()=>{t||u?d.current?.showModal():d.current?.close()},[t,u]);const m=(0,g.useBlockProps)({ref:d,"data-launchpad-lightbox":""}),{children:p,...h}=(0,g.useInnerBlocksProps)(m);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.InspectorControls,{children:(0,i.jsx)(Oe,{dataOnSelectedIcon:{iconName:l,library:a},onIconSelect:s=>{o({iconName:s.iconName,library:s.library})}})}),(0,i.jsxs)("dialog",{...h,children:[(0,i.jsx)("button",{type:"button",className:"reset lightbox-close-button","data-lightbox-close-button":!0,onClick:()=>{d.current?.close()},children:r[a]?.renderIcon(l)}),p]})]})}J.displayName="LightboxEdit";function Ee({hasInnerBlocks:e}){return e?Ue:Ge}function Ge(){return null}function Ue(){return(0,i.jsx)(g.InnerBlocks.Content,{})}const Ve={from:[],to:[]},We=[],ut={},dt=null;(0,f.registerBlockType)(W().name,{icon:(0,i.jsx)(R,{iconName:"lightbox"}),deprecated:Ie,edit:J,save:Ee({hasInnerBlocks:!0}),transforms:Ve}),we(),We.forEach(e=>{(0,f.registerBlockVariation)(W().name,e)})})(),j})());
