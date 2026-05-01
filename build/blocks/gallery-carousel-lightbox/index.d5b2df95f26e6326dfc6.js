(function(_,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var k=g();for(var a in k)(typeof exports=="object"?exports:_)[a]=k[a]}})(globalThis,()=>(()=>{var T={2716(a){a.exports={apiVersion:3,name:"launchpad-blocks/gallery-carousel-lightbox",title:"Lightbox",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{backgroundColor:{type:"string",default:"white"}},providesContext:{},usesContext:[],supports:{color:!0},parent:["launchpad-blocks/gallery-carousel"]}}},_={};function g(a){var h=_[a];if(h!==void 0)return h.exports;var b=_[a]={exports:{}};return T[a](b,b.exports,g),b.exports}g.n=a=>{var h=a&&a.__esModule?()=>a.default:()=>a;return g.d(h,{a:h}),h},g.d=(a,h)=>{for(var b in h)g.o(h,b)&&!g.o(a,b)&&Object.defineProperty(a,b,{enumerable:!0,get:h[b]})},g.o=(a,h)=>Object.prototype.hasOwnProperty.call(a,h);var k={};return(()=>{"use strict";const a=window.ReactJSXRuntime,h=window.wp.blocks,b=window.wp.blockEditor,Ie=window.wp.components,Re=window.wp.coreData,W=window.wp.data,Ae=window.wp.i18n,y=window.React;var $;function Me(e){return $("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:$("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function F(e){return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,a.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,a.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,a.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const q=(0,y.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:r,isEditorMode:s=!1,...l}=o;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...l,children:(0,a.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function D(e){return(0,a.jsx)(y.Suspense,{fallback:null,children:(0,a.jsx)(q,{...e})})}var w,C,i,S,z,U,J,X,Z,K,B,Q,Y,ee,te,I,oe,R,ne,re,A,P,se,le,f,M,ae,ie,ce,ue,de,pe,j,O,L,me,he;function fe(){(0,h.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:F})}function E(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Oe(e,t,o){const n=t.spacing?.blockGap;let r="none";if(n===!0)r="both";else if(Array.isArray(n)){const l=n.includes("horizontal"),d=n.includes("vertical");l&&d?r="both":l?r="horizontal":d&&(r="vertical")}const s={columnGap:r==="both"||r==="horizontal"?E(o?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?E(o?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function ge(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const r=ge(n.innerBlocks,t);r&&o.push(...r)}return o},[])}const Le=()=>{const e=j(()=>({per_page:-1}),[]),t=j(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=j(()=>({}),[]),{postTypes:n,taxonomies:r}=P(p=>{const{getEntityRecords:m}=p(A),v=m("root","postType",e),c=m("root","taxonomy",t);if(!c)return{postTypes:v,taxonomies:c};for(const x of c)o[x.slug]=m("taxonomy",x.slug);return{postTypes:v,taxonomies:c}},[e,t,o]),s=["attachment"],l=[],d=n?.filter(({viewable:p,slug:m})=>p&&!s.includes(m));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const p of d){const m=r?.filter(({types:v,slug:c})=>v.includes(p.slug)&&!l.includes(c));m&&(u[p.slug]=m.map(v=>{const c=o?.[v.slug]??null;return{...v,terms:c}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ee({list:e,containerClassName:t,renderItem:o}){return w(C,{children:[i("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),i("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function be(e){return e.indexOf("data:image/svg+xml,")===0}function ve(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function xe(e){return e.indexOf("dashicons-")===0}function we({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return i("div",{className:"menu-icon","aria-hidden":"true",children:i("br",{})});if(be(e))return i("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:i("br",{})});if(ve(e))return i("img",{src:new URL(e).toString(),alt:""});if(xe(e)){const t=e.replace("dashicons-","");return i(J,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const He={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ge(){const[e,t,o,n]=S("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(n&&o&&o.length>0)for(const s of o)r[s.slug]={color:s.color,name:s.name};if(t&&t?.length>0)for(const s of t)r[s.slug]={color:s.color,name:s.name};if(e&&e?.length>0)for(const s of e)r[s.slug]={color:s.color,name:s.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:r}}function Ve({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return i(X,{label:f("Custom colours","launchpad"),resetAll:r=>{if(r)for(const s of r)s()},children:i("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>i(_e,{colour:r,attributesDefinition:t,attributes:o,setAttributes:n},r.attributeName))})})}function _e({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[r,s,l,d,u]=S("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),p=()=>t[e.attributeName]?.default!==o[e.attributeName],m=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},v=O(null);return i(Z,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:m,hasValue:p,onDeselect:m,label:e.label,isShownByDefault:!0,children:i(K,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:x})=>i(C,{children:i(B,{ref:v,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:w("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[i(Q,{colorValue:o[e.attributeName]})," ",i("span",{children:e.label})]})})}),renderContent:()=>i(Y,{paddingSize:"none",children:i("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:i("div",{className:"block-editor-color-gradient-control__panel",children:i(ee,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...d&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:o[e.attributeName],onChange:c=>{n({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function We({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[r,s,l]=S("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=s?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],u=r?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],p=[{label:M("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?u:[],...d||[],{label:M("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[m,v]=L(p.map(c=>c.value).includes(e)?e:"custom");return w(C,{children:[i(te,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:f("Aspect ratio","launchpad-blocks"),options:p,value:m,onChange:c=>{v(c),c!=="custom"&&t(c)}}),m==="custom"?i(I,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:f("Custom aspect ratio","launchpad-blocks"),help:f("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?w(oe,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:f("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&n(c)},value:o,children:[i(R,{label:"Cover",value:"cover"}),i(R,{label:"Contain",value:"contain"})]}):null]})}const ke=(e,t,o,n)=>{const{getBlocksByName:r,getBlockAttributes:s,getBlockParentsByBlockName:l}=se(z);return r(n).some(u=>{if(l(u,"core/template-part",!0).length)return!1;const{[o]:p}=s(u);return e!==u&&t===p})};function Fe(e,t,o,n,r){const{[t]:s}=e,l=me(u=>ke(o,u,t,r),[o,t,r]);return he(()=>{if(s===""){const u=o.slice(0,o.indexOf("-"));n({[t]:u})}if(l(s)){const u=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${s}. New value: ${u}`),n({[t]:u})}},[s,o,n,l,t]),j(()=>function({label:p,help:m,onValidChange:v,idAttribute:c}){const[x,De]=L(c);return i(I,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:p,help:typeof m=="function"?m(!l(x)):m,value:x,onChange:N=>{De(N),l(N)||v(N)}})},[l])}function qe({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return i(ne,{label:f("Change title heading element","launchpad-blocks"),icon:H(t),controls:e.map(n=>{{const r=n===t;return{icon:H(n),title:ye(n),isDisabled:r,onClick:()=>o(n)}}})})}function ye(e){switch(e){case"h2":return f("Heading 2","launchpad-blocks");case"h3":return f("Heading 3","launchpad-blocks");case"h4":return f("Heading 4","launchpad-blocks");case"h5":return f("Heading 5","launchpad-blocks");case"h6":return f("Heading 6","launchpad-blocks");case"p":return f("Paragraph","launchpad-blocks")}}function H(e){switch(e){case"h2":return ae;case"h3":return ie;case"h4":return ce;case"h5":return ue;case"h6":return de;case"p":return pe}}function Ue(e){const{hasChildren:t}=P(o=>{const{getBlocks:n}=o(z);return{hasChildren:n(e).length>0}},[e]);return t}function Je({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:r,updateBlockAttributes:s}=le(z);return w(re,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[i("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":f("Block variations"),children:o.map(l=>w("li",{children:[i(B,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?i(we,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&s(e,l.attributes),l.innerBlocks&&r(e,U(l.innerBlocks),!1)}}),i("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),n&&i("div",{className:"block-editor-block-variation-picker__skip",children:i(B,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:f("Skip")})})]})}function Xe({imageId:e,className:t="",size:o="full"}){const n=P(s=>typeof e=="number"&&e>0?s(A).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?i(C,{children:i("img",{...(()=>{const s={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(s.src=n.media_details.sizes[o].source_url,s.width=n.media_details.sizes[o].width,s.height=n.media_details.sizes[o].height),s.srcSet=Object.entries(n.media_details.sizes??{}).map(([l,d])=>`${d.source_url} ${d.width}w`).join(", "),s})(),alt:n.alt_text||""})}):null}function Ce(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Ce(o))):t.push([]),t}function Ze(e){const t=O(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const s=t.current.style;s.minHeight="",t.current.setAttribute("style",`${s.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var je=g(2716),G=g.n(je);const Se=[],ze=window.wp.hooks;function V({clientId:e,isSelected:t}){const[o,n]=(0,y.useState)(!1),r=(0,W.useSelect)(p=>p(b.store).hasSelectedInnerBlock(e,!0),[e]);(0,y.useEffect)(()=>{n(t||r)},[t,r]);const s=(0,b.useBlockProps)({hidden:!o,"data-launchpad-lightbox":""}),{children:l,...d}=(0,b.useInnerBlocksProps)(s,{template:[["launchpad-blocks/carousel",{lock:{move:!0,remove:!0}},[["launchpad-blocks/carousel-slides",{shouldPullImagesFromContext:!0,lock:{move:!0,remove:!0}}],["launchpad-blocks/carousel-navigation-arrows",{className:"is-style-overlay",lock:{move:!1,remove:!0}}]]]],templateLock:"insert"}),u=(0,ze.applyFilters)("launchpadBlocks.lightboxCloseIcon",p=>(0,a.jsx)(D,{iconName:"menu-close-icon",...p}));return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{...d,children:[(0,a.jsx)("button",{type:"button",className:"reset lightbox-close-button","data-lightbox-close-button":!0,onClick:()=>{n(!1)},children:(0,a.jsx)(u,{isEditorMode:!0})}),l]})})}V.displayName="GalleryCarouselLightboxEdit";function Be({hasInnerBlocks:e}){return e?Ne:Pe}function Pe(){return null}function Ne(){return(0,a.jsx)(b.InnerBlocks.Content,{})}const Te={from:[],to:[]},$e=[],Ke={},Qe=null;(0,h.registerBlockType)(G().name,{icon:(0,a.jsx)(D,{iconName:"gallery-carousel-lightbox"}),deprecated:Se,edit:V,save:Be({hasInnerBlocks:!0}),transforms:Te}),fe(),$e.forEach(e=>{(0,h.registerBlockVariation)(G().name,e)})})(),k})());
