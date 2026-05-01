(function(w,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var k=g();for(var s in k)(typeof exports=="object"?exports:w)[s]=k[s]}})(globalThis,()=>(()=>{var T={9707(s){s.exports={apiVersion:3,name:"launchpad-blocks/global-banner-output",title:"Global banner output",category:"theme",description:"An output block for the selected global banners.",textdomain:"launchpad",editorScript:"file:./index.tsx",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{},supports:{},example:{}}}},w={};function g(s){var m=w[s];if(m!==void 0)return m.exports;var v=w[s]={exports:{}};return T[s](v,v.exports,g),v.exports}g.n=s=>{var m=s&&s.__esModule?()=>s.default:()=>s;return g.d(m,{a:m}),m},g.d=(s,m)=>{for(var v in m)g.o(m,v)&&!g.o(s,v)&&Object.defineProperty(s,v,{enumerable:!0,get:m[v]})},g.o=(s,m)=>Object.prototype.hasOwnProperty.call(s,m);var k={};return(()=>{"use strict";const s=window.ReactJSXRuntime,m=window.wp.blocks,v=window.wp.blockEditor,Pe=window.wp.components,Te=window.wp.coreData,$e=window.wp.data,Ne=window.wp.i18n,$=window.React;var N;function De(e){return N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:N("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function G(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,s.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,s.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,s.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const V=(0,$.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:r,isEditorMode:l=!1,...i}=o;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...i,children:(0,s.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function W(e){return(0,s.jsx)($.Suspense,{fallback:null,children:(0,s.jsx)(V,{...e})})}var _,y,a,j,z,q,F,U,J,X,S,Y,Z,K,Q,D,ee,A,te,oe,R,B,ne,re,f,I,le,ae,ie,se,ce,ue,C,M,O,de,pe;function me(){(0,m.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:G})}function H(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Ae(e,t,o){const n=t.spacing?.blockGap;let r="none";if(n===!0)r="both";else if(Array.isArray(n)){const i=n.includes("horizontal"),d=n.includes("vertical");i&&d?r="both":i?r="horizontal":d&&(r="vertical")}const l={columnGap:r==="both"||r==="horizontal"?H(o?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?H(o?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let i="";return e.minimumColumnWidth?i=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(i=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:i,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function he(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const r=he(n.innerBlocks,t);r&&o.push(...r)}return o},[])}const Re=()=>{const e=C(()=>({per_page:-1}),[]),t=C(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=C(()=>({}),[]),{postTypes:n,taxonomies:r}=B(h=>{const{getEntityRecords:p}=h(R),b=p("root","postType",e),c=p("root","taxonomy",t);if(!c)return{postTypes:b,taxonomies:c};for(const x of c)o[x.slug]=p("taxonomy",x.slug);return{postTypes:b,taxonomies:c}},[e,t,o]),l=["attachment"],i=[],d=n?.filter(({viewable:h,slug:p})=>h&&!l.includes(p));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const h of d){const p=r?.filter(({types:b,slug:c})=>b.includes(h.slug)&&!i.includes(c));p&&(u[h.slug]=p.map(b=>{const c=o?.[b.slug]??null;return{...b,terms:c}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ie({list:e,containerClassName:t,renderItem:o}){return _(y,{children:[a("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),a("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function fe(e){return e.indexOf("data:image/svg+xml,")===0}function ge(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function be(e){return e.indexOf("dashicons-")===0}function ve({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return a("div",{className:"menu-icon","aria-hidden":"true",children:a("br",{})});if(fe(e))return a("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:a("br",{})});if(ge(e))return a("img",{src:new URL(e).toString(),alt:""});if(be(e)){const t=e.replace("dashicons-","");return a(F,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Me={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Oe(){const[e,t,o,n]=j("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(n&&o&&o.length>0)for(const l of o)r[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)r[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)r[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:r}}function He({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return a(U,{label:f("Custom colours","launchpad"),resetAll:r=>{if(r)for(const l of r)l()},children:a("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>a(xe,{colour:r,attributesDefinition:t,attributes:o,setAttributes:n},r.attributeName))})})}function xe({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[r,l,i,d,u]=j("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==o[e.attributeName],p=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=M(null);return a(J,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:h,onDeselect:p,label:e.label,isShownByDefault:!0,children:a(X,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:x})=>a(y,{children:a(S,{ref:b,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:_("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[a(Y,{colorValue:o[e.attributeName]})," ",a("span",{children:e.label})]})})}),renderContent:()=>a(Z,{paddingSize:"none",children:a("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:a("div",{className:"block-editor-color-gradient-control__panel",children:a(K,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...d&&i&&i.length>0?[{name:"Default",colors:i}]:[]],value:o[e.attributeName],onChange:c=>{n({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function Ee({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[r,l,i]=j("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=l?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],u=r?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],h=[{label:I("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...i?u:[],...d||[],{label:I("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,b]=O(h.map(c=>c.value).includes(e)?e:"custom");return _(y,{children:[a(Q,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:f("Aspect ratio","launchpad-blocks"),options:h,value:p,onChange:c=>{b(c),c!=="custom"&&t(c)}}),p==="custom"?a(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:f("Custom aspect ratio","launchpad-blocks"),help:f("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?_(ee,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:f("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&n(c)},value:o,children:[a(A,{label:"Cover",value:"cover"}),a(A,{label:"Contain",value:"contain"})]}):null]})}const _e=(e,t,o,n)=>{const{getBlocksByName:r,getBlockAttributes:l,getBlockParentsByBlockName:i}=ne(z);return r(n).some(u=>{if(i(u,"core/template-part",!0).length)return!1;const{[o]:h}=l(u);return e!==u&&t===h})};function Le(e,t,o,n,r){const{[t]:l}=e,i=de(u=>_e(o,u,t,r),[o,t,r]);return pe(()=>{if(l===""){const u=o.slice(0,o.indexOf("-"));n({[t]:u})}if(i(l)){const u=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${u}`),n({[t]:u})}},[l,o,n,i,t]),C(()=>function({label:h,help:p,onValidChange:b,idAttribute:c}){const[x,Be]=O(c);return a(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof p=="function"?p(!i(x)):p,value:x,onChange:P=>{Be(P),i(P)||b(P)}})},[i])}function Ge({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return a(te,{label:f("Change title heading element","launchpad-blocks"),icon:E(t),controls:e.map(n=>{{const r=n===t;return{icon:E(n),title:we(n),isDisabled:r,onClick:()=>o(n)}}})})}function we(e){switch(e){case"h2":return f("Heading 2","launchpad-blocks");case"h3":return f("Heading 3","launchpad-blocks");case"h4":return f("Heading 4","launchpad-blocks");case"h5":return f("Heading 5","launchpad-blocks");case"h6":return f("Heading 6","launchpad-blocks");case"p":return f("Paragraph","launchpad-blocks")}}function E(e){switch(e){case"h2":return le;case"h3":return ae;case"h4":return ie;case"h5":return se;case"h6":return ce;case"p":return ue}}function Ve(e){const{hasChildren:t}=B(o=>{const{getBlocks:n}=o(z);return{hasChildren:n(e).length>0}},[e]);return t}function We({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:r,updateBlockAttributes:l}=re(z);return _(oe,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[a("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":f("Block variations"),children:o.map(i=>_("li",{children:[a(S,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof i.icon=="string"?a(ve,{iconString:i.icon}):i.icon,iconSize:48,onClick:()=>{i.attributes&&l(e,i.attributes),i.innerBlocks&&r(e,q(i.innerBlocks),!1)}}),a("span",{className:"block-editor-block-variation-picker__variation-label",children:i.title})]},i.name))}),n&&a("div",{className:"block-editor-block-variation-picker__skip",children:a(S,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:f("Skip")})})]})}function qe({imageId:e,className:t="",size:o="full"}){const n=B(l=>typeof e=="number"&&e>0?l(R).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?a(y,{children:a("img",{...(()=>{const l={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(l.src=n.media_details.sizes[o].source_url,l.width=n.media_details.sizes[o].width,l.height=n.media_details.sizes[o].height),l.srcSet=Object.entries(n.media_details.sizes??{}).map(([i,d])=>`${d.source_url} ${d.width}w`).join(", "),l})(),alt:n.alt_text||""})}):null}function ke(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>ke(o))):t.push([]),t}function Fe(e){const t=M(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var ye=g(9707),Ce=g.n(ye);function L(){const e=(0,v.useBlockProps)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{...e,children:(0,s.jsx)("p",{children:"Your global banners will appear here."})})})}L.displayName="GlobalBannerOutputEdit";function je({hasInnerBlocks:e}){return e?Se:ze}function ze(){return null}function Se(){return(0,s.jsx)(v.InnerBlocks.Content,{})}(0,m.registerBlockType)(Ce().name,{icon:(0,s.jsx)(W,{iconName:"banner-zone"}),edit:L,save:je({hasInnerBlocks:!1})}),me()})(),k})());
