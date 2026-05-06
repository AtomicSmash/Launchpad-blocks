(function(w,b){if(typeof exports=="object"&&typeof module=="object")module.exports=b();else if(typeof define=="function"&&define.amd)define([],b);else{var y=b();for(var l in y)(typeof exports=="object"?exports:w)[l]=y[l]}})(globalThis,()=>(()=>{var $={6910(l){l.exports={apiVersion:3,name:"launchpad-blocks/nav-menu-item",title:"Nav menu item",category:"theme",description:"A simple link for the navigation menu.",parent:["launchpad-blocks/nav-list"],textdomain:"launchpad-blocks",keywords:["menu","nav","links"],editorScript:"file:./index.tsx",style:"file:./style.scss",render:"file:./render.php",attributes:{linkId:{type:"number"},linkKind:{type:"string"},linkType:{type:"string"},linkHref:{type:"string"},linkTarget:{type:"string",enum:["_self","_blank"],default:"_self"},linkText:{type:"string"}},supports:{},example:{viewportWidth:200,attributes:{linkText:"Menu link",linkHref:"#"}}}}},w={};function b(l){var h=w[l];if(h!==void 0)return h.exports;var f=w[l]={exports:{}};return $[l](f,f.exports,b),f.exports}b.n=l=>{var h=l&&l.__esModule?()=>l.default:()=>l;return b.d(h,{a:h}),h},b.d=(l,h)=>{for(var f in h)b.o(h,f)&&!b.o(l,f)&&Object.defineProperty(l,f,{enumerable:!0,get:h[f]})},b.o=(l,h)=>Object.prototype.hasOwnProperty.call(l,h);var y={};return(()=>{"use strict";const l=window.ReactJSXRuntime,h=window.wp.blocks,f=window.wp.blockEditor,S=window.wp.components,Ae=window.wp.coreData,Re=window.wp.data,V=window.wp.i18n,_=window.React;var A;function De(e){return A("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:A("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function q(e){return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,l.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,l.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,l.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const F=(0,_.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:r,isEditorMode:i=!1,...s}=n;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...s,children:(0,l.jsx)("use",{href:`${i?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function U(e){return(0,l.jsx)(_.Suspense,{fallback:null,children:(0,l.jsx)(F,{...e})})}var k,C,a,T,z,Z,K,J,X,Q,B,Y,ee,te,ne,R,oe,D,ie,re,I,P,le,se,g,M,ae,ce,de,ue,pe,me,j,H,O,he,fe;function ge(){(0,h.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:q})}function L(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Ie(e,t,n){const o=t.spacing?.blockGap;let r="none";if(o===!0)r="both";else if(Array.isArray(o)){const s=o.includes("horizontal"),u=o.includes("vertical");s&&u?r="both":s?r="horizontal":u&&(r="vertical")}const i={columnGap:r==="both"||r==="horizontal"?L(n?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?L(n?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:i};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...i}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...i}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...i}};default:return{className:`is-layout-${e.type}`,style:{...i}}}}function be(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const r=be(o.innerBlocks,t);r&&n.push(...r)}return n},[])}const Me=()=>{const e=j(()=>({per_page:-1}),[]),t=j(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=j(()=>({}),[]),{postTypes:o,taxonomies:r}=P(m=>{const{getEntityRecords:d}=m(I),v=d("root","postType",e),c=d("root","taxonomy",t);if(!c)return{postTypes:v,taxonomies:c};for(const x of c)n[x.slug]=d("taxonomy",x.slug);return{postTypes:v,taxonomies:c}},[e,t,n]),i=["attachment"],s=[],u=o?.filter(({viewable:m,slug:d})=>m&&!i.includes(d));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const p={};for(const m of u){const d=r?.filter(({types:v,slug:c})=>v.includes(m.slug)&&!s.includes(c));d&&(p[m.slug]=d.map(v=>{const c=n?.[v.slug]??null;return{...v,terms:c}}))}return{filteredPostTypes:u,mappedTaxonomies:p===void 0||Object.values(p).length===0?void 0:p}};function He({list:e,containerClassName:t,renderItem:n}){return k(C,{children:[a("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),a("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function ve(e){return e.indexOf("data:image/svg+xml,")===0}function xe(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function ke(e){return e.indexOf("dashicons-")===0}function _e({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return a("div",{className:"menu-icon","aria-hidden":"true",children:a("br",{})});if(ve(e))return a("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:a("br",{})});if(xe(e))return a("img",{src:new URL(e).toString(),alt:""});if(ke(e)){const t=e.replace("dashicons-","");return a(K,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Oe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Le(){const[e,t,n,o]=T("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(o&&n&&n.length>0)for(const i of n)r[i.slug]={color:i.color,name:i.name};if(t&&t?.length>0)for(const i of t)r[i.slug]={color:i.color,name:i.name};if(e&&e?.length>0)for(const i of e)r[i.slug]={color:i.color,name:i.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:r}}function Ee({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return a(J,{label:g("Custom colours","launchpad"),resetAll:r=>{if(r)for(const i of r)i()},children:a("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>a(we,{colour:r,attributesDefinition:t,attributes:n,setAttributes:o},r.attributeName))})})}function we({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[r,i,s,u,p]=T("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==n[e.attributeName],d=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},v=H(null);return a(X,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:m,onDeselect:d,label:e.label,isShownByDefault:!0,children:a(Q,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:x})=>a(C,{children:a(B,{ref:v,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:k("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[a(Y,{colorValue:n[e.attributeName]})," ",a("span",{children:e.label})]})})}),renderContent:()=>a(ee,{paddingSize:"none",children:a("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:a("div",{className:"block-editor-color-gradient-control__panel",children:a(te,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...i&&i?.length>0?[{name:"Theme",colors:i}]:[],...u&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:n[e.attributeName],onChange:c=>{o({[e.attributeName]:c})},disableCustomColors:!p})})})})})},e.attributeName)}function Ge({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[r,i,s]=T("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=i?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],p=r?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],m=[{label:M("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?p:[],...u||[],{label:M("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,v]=O(m.map(c=>c.value).includes(e)?e:"custom");return k(C,{children:[a(ne,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:g("Aspect ratio","launchpad-blocks"),options:m,value:d,onChange:c=>{v(c),c!=="custom"&&t(c)}}),d==="custom"?a(R,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:g("Custom aspect ratio","launchpad-blocks"),help:g("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?k(oe,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:g("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&o(c)},value:n,children:[a(D,{label:"Cover",value:"cover"}),a(D,{label:"Contain",value:"contain"})]}):null]})}const ye=(e,t,n,o)=>{const{getBlocksByName:r,getBlockAttributes:i,getBlockParentsByBlockName:s}=le(z);return r(o).some(p=>{if(s(p,"core/template-part",!0).length)return!1;const{[n]:m}=i(p);return e!==p&&t===m})};function We(e,t,n,o,r){const{[t]:i}=e,s=he(p=>ye(n,p,t,r),[n,t,r]);return fe(()=>{if(i===""){const p=n.slice(0,n.indexOf("-"));o({[t]:p})}if(s(i)){const p=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${i}. New value: ${p}`),o({[t]:p})}},[i,n,o,s,t]),j(()=>function({label:m,help:d,onValidChange:v,idAttribute:c}){const[x,$e]=O(c);return a(R,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof d=="function"?d(!s(x)):d,value:x,onChange:N=>{$e(N),s(N)||v(N)}})},[s])}function Ve({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return a(ie,{label:g("Change title heading element","launchpad-blocks"),icon:E(t),controls:e.map(o=>{{const r=o===t;return{icon:E(o),title:Ce(o),isDisabled:r,onClick:()=>n(o)}}})})}function Ce(e){switch(e){case"h2":return g("Heading 2","launchpad-blocks");case"h3":return g("Heading 3","launchpad-blocks");case"h4":return g("Heading 4","launchpad-blocks");case"h5":return g("Heading 5","launchpad-blocks");case"h6":return g("Heading 6","launchpad-blocks");case"p":return g("Paragraph","launchpad-blocks")}}function E(e){switch(e){case"h2":return ae;case"h3":return ce;case"h4":return de;case"h5":return ue;case"h6":return pe;case"p":return me}}function qe(e){const{hasChildren:t}=P(n=>{const{getBlocks:o}=n(z);return{hasChildren:o(e).length>0}},[e]);return t}function Fe({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:r,updateBlockAttributes:i}=se(z);return k(re,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[a("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":g("Block variations"),children:n.map(s=>k("li",{children:[a(B,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?a(_e,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&i(e,s.attributes),s.innerBlocks&&r(e,Z(s.innerBlocks),!1)}}),a("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),o&&a("div",{className:"block-editor-block-variation-picker__skip",children:a(B,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),i(e,{hasDismissedVariationsSelector:!0})},children:g("Skip")})})]})}function Ue({imageId:e,className:t="",size:n="full"}){const o=P(i=>typeof e=="number"&&e>0?i(I).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?a(C,{children:a("img",{...(()=>{const i={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(i.src=o.media_details.sizes[n].source_url,i.width=o.media_details.sizes[n].width,i.height=o.media_details.sizes[n].height),i.srcSet=Object.entries(o.media_details.sizes??{}).map(([s,u])=>`${u.source_url} ${u.width}w`).join(", "),i})(),alt:o.alt_text||""})}):null}function je(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>je(n))):t.push([]),t}function Ze(e){const t=H(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const i=t.current.style;i.minHeight="",t.current.setAttribute("style",`${i.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var Se=b(6910),Te=b.n(Se);const G=window.wp.primitives,ze=(0,l.jsx)(G.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(G.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})});function W({clientId:e,isSelected:t,attributes:{linkText:n,linkHref:o,linkTarget:r},setAttributes:i}){const[s,u]=(0,_.useState)(!1);(0,_.useEffect)(()=>{t||u(!1)},[t]);const p=(0,f.useBlockProps)({className:"menu-group-list-item"}),m=(0,_.useMemo)(()=>({url:o,opensInNewTab:r==="_blank",title:n}),[o,r,n]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.BlockControls,{children:(0,l.jsx)(S.ToolbarGroup,{children:(0,l.jsx)(S.ToolbarButton,{icon:ze,label:(0,V.__)("Link"),isPressed:s,onClick:()=>{u(!s)}})})}),(0,l.jsxs)("li",{...p,children:[o?(0,l.jsx)(f.RichText,{tagName:"span",className:`navigation-list-item-link${o?" hyperlink":""}`,onChange:d=>{i({linkText:d})},allowedFormats:["core/bold","core/italic"],value:n,placeholder:"Add text..."}):(0,l.jsx)("button",{onClick:()=>u(!s),children:"Add link"}),s?(0,l.jsx)(S.Popover,{position:"bottom",noArrow:!1,shift:!0,offset:10,children:(0,l.jsx)(f.LinkControl,{value:m,showInitialSuggestions:!0,onChange:d=>{i({linkId:d?.id,linkKind:d?.kind,linkType:d?.type,linkHref:d?.url,linkText:d?.title,linkTarget:d?.opensInNewTab?"_blank":"_self"}),u(!1)},onRemove:()=>{i({linkId:void 0,linkKind:void 0,linkType:void 0,linkHref:void 0,linkText:void 0})}},`${e}-link-edit`)}):null]})]})}W.displayName="NavMenuItemEdit";function Be({hasInnerBlocks:e}){return e?Ne:Pe}function Pe(){return null}function Ne(){return(0,l.jsx)(f.InnerBlocks.Content,{})}(0,h.registerBlockType)(Te().name,{icon:(0,l.jsx)(U,{iconName:"nav-menu-item"}),edit:W,save:Be({hasInnerBlocks:!1})}),ge()})(),y})());
