(function(k,f){if(typeof exports=="object"&&typeof module=="object")module.exports=f();else if(typeof define=="function"&&define.amd)define([],f);else{var y=f();for(var s in y)(typeof exports=="object"?exports:k)[s]=y[s]}})(globalThis,()=>(()=>{var P={3973(s){s.exports={apiVersion:3,name:"launchpad-blocks/carousel-thumbnails",title:"Carousel thumbnails",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",render:"file:./render.php",styles:[{name:"scroll",label:"Scroll",isDefault:!0},{name:"grid",label:"Grid"}],attributes:{selectedOutlineColour:{type:"string",default:"black"},lock:{type:"boolean",default:!0}},providesContext:{},usesContext:["launchpad-blocks/carouselImages"],example:{viewportWidth:1200},supports:{lock:!1,layout:{default:{type:"constrained"},allowCustomContentAndWideSize:!1}}}}},k={};function f(s){var m=k[s];if(m!==void 0)return m.exports;var g=k[s]={exports:{}};return P[s](g,g.exports,f),g.exports}f.n=s=>{var m=s&&s.__esModule?()=>s.default:()=>s;return f.d(m,{a:m}),m},f.d=(s,m)=>{for(var g in m)f.o(m,g)&&!f.o(s,g)&&Object.defineProperty(s,g,{enumerable:!0,get:m[g]})},f.o=(s,m)=>Object.prototype.hasOwnProperty.call(s,m);var y={};return(()=>{"use strict";const s=window.ReactJSXRuntime,m=window.wp.blocks,g=window.wp.blockEditor,_=window.wp.components,Pe=window.wp.coreData,Te=window.wp.data,W=window.wp.i18n,j=window.React;var T;function $e(e){return T("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:T("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function V(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,s.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,s.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,s.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const q=(0,j.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:r,isEditorMode:l=!1,...a}=o;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...a,children:(0,s.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function F(e){return(0,s.jsx)(j.Suspense,{fallback:null,children:(0,s.jsx)(q,{...e})})}var w,S,u,$,z,U,J,X,D,Z,R,K,Q,A,I,B,Y,ee,O,b,te,oe,ne,re,le,se,C,M,ae,ie,ce;function ue(){(0,m.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:V})}function H(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function De(e,t,o){const n=t.spacing?.blockGap;let r="none";if(n===!0)r="both";else if(Array.isArray(n)){const a=n.includes("horizontal"),c=n.includes("vertical");a&&c?r="both":a?r="horizontal":c&&(r="vertical")}const l={columnGap:r==="both"||r==="horizontal"?H(o?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?H(o?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function de(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const r=de(n.innerBlocks,t);r&&o.push(...r)}return o},[])}const Re=()=>{const e=C(()=>({per_page:-1}),[]),t=C(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=C(()=>({}),[]),{postTypes:n,taxonomies:r}=B(h=>{const{getEntityRecords:p}=h(I),x=p("root","postType",e),i=p("root","taxonomy",t);if(!i)return{postTypes:x,taxonomies:i};for(const v of i)o[v.slug]=p("taxonomy",v.slug);return{postTypes:x,taxonomies:i}},[e,t,o]),l=["attachment"],a=[],c=n?.filter(({viewable:h,slug:p})=>h&&!l.includes(p));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const d={};for(const h of c){const p=r?.filter(({types:x,slug:i})=>x.includes(h.slug)&&!a.includes(i));p&&(d[h.slug]=p.map(x=>{const i=o?.[x.slug]??null;return{...x,terms:i}}))}return{filteredPostTypes:c,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Ae({list:e,containerClassName:t,renderItem:o}){return w(S,{children:[u("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),u("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function pe(e){return e.indexOf("data:image/svg+xml,")===0}function me(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function he(e){return e.indexOf("dashicons-")===0}function fe({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return u("div",{className:"menu-icon","aria-hidden":"true",children:u("br",{})});if(pe(e))return u("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:u("br",{})});if(me(e))return u("img",{src:new URL(e).toString(),alt:""});if(he(e)){const t=e.replace("dashicons-","");return u(J,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Ie={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Oe(){const[e,t,o,n]=$("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(n&&o&&o.length>0)for(const l of o)r[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)r[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)r[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:r}}function ge({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return(0,s.jsx)(_.__experimentalToolsPanel,{label:(0,W.__)("Custom colours","launchpad"),resetAll:r=>{if(r)for(const l of r)l()},children:(0,s.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>(0,s.jsx)(be,{colour:r,attributesDefinition:t,attributes:o,setAttributes:n},r.attributeName))})})}function be({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[r,l,a,c,d]=(0,g.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==o[e.attributeName],p=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},x=(0,j.useRef)(null);return(0,s.jsx)(_.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:h,onDeselect:p,label:e.label,isShownByDefault:!0,children:(0,s.jsx)(_.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:v})=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(_.Button,{ref:x,__next40pxDefaultSize:!0,onClick:v,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,s.jsx)(_.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,s.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,s.jsx)(_.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,s.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,s.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,s.jsx)(_.ColorPalette,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...c&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:o[e.attributeName],onChange:i=>{n({[e.attributeName]:i})},disableCustomColors:!d})})})})})},e.attributeName)}function Me({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[r,l,a]=$("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=l?.map(({name:i,ratio:v})=>({label:i,value:v}))??[],d=r?.map(({name:i,ratio:v})=>({label:i,value:v}))??[],h=[{label:O("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?d:[],...c||[],{label:O("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,x]=M(h.map(i=>i.value).includes(e)?e:"custom");return w(S,{children:[u(X,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:b("Aspect ratio","launchpad-blocks"),options:h,value:p,onChange:i=>{x(i),i!=="custom"&&t(i)}}),p==="custom"?u(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:b("Custom aspect ratio","launchpad-blocks"),help:b("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?w(Z,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:b("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&n(i)},value:o,children:[u(R,{label:"Cover",value:"cover"}),u(R,{label:"Contain",value:"contain"})]}):null]})}const xe=(e,t,o,n)=>{const{getBlocksByName:r,getBlockAttributes:l,getBlockParentsByBlockName:a}=Y(z);return r(n).some(d=>{if(a(d,"core/template-part",!0).length)return!1;const{[o]:h}=l(d);return e!==d&&t===h})};function He(e,t,o,n,r){const{[t]:l}=e,a=ae(d=>xe(o,d,t,r),[o,t,r]);return ie(()=>{if(l===""){const d=o.slice(0,o.indexOf("-"));n({[t]:d})}if(a(l)){const d=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${d}`),n({[t]:d})}},[l,o,n,a,t]),C(()=>function({label:h,help:p,onValidChange:x,idAttribute:i}){const[v,Ne]=M(i);return u(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof p=="function"?p(!a(v)):p,value:v,onChange:N=>{Ne(N),a(N)||x(N)}})},[a])}function Ee({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return u(K,{label:b("Change title heading element","launchpad-blocks"),icon:E(t),controls:e.map(n=>{{const r=n===t;return{icon:E(n),title:ve(n),isDisabled:r,onClick:()=>o(n)}}})})}function ve(e){switch(e){case"h2":return b("Heading 2","launchpad-blocks");case"h3":return b("Heading 3","launchpad-blocks");case"h4":return b("Heading 4","launchpad-blocks");case"h5":return b("Heading 5","launchpad-blocks");case"h6":return b("Heading 6","launchpad-blocks");case"p":return b("Paragraph","launchpad-blocks")}}function E(e){switch(e){case"h2":return te;case"h3":return oe;case"h4":return ne;case"h5":return re;case"h6":return le;case"p":return se}}function Le(e){const{hasChildren:t}=B(o=>{const{getBlocks:n}=o(z);return{hasChildren:n(e).length>0}},[e]);return t}function Ge({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:r,updateBlockAttributes:l}=ee(z);return w(Q,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[u("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":b("Block variations"),children:o.map(a=>w("li",{children:[u(A,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?u(fe,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&l(e,a.attributes),a.innerBlocks&&r(e,U(a.innerBlocks),!1)}}),u("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),n&&u("div",{className:"block-editor-block-variation-picker__skip",children:u(A,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:b("Skip")})})]})}function We({imageId:e,className:t="",size:o="full"}){const n=B(l=>typeof e=="number"&&e>0?l(I).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?u(S,{children:u("img",{...(()=>{const l={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(l.src=n.media_details.sizes[o].source_url,l.width=n.media_details.sizes[o].width,l.height=n.media_details.sizes[o].height),l.srcSet=Object.entries(n.media_details.sizes??{}).map(([a,c])=>`${c.source_url} ${c.width}w`).join(", "),l})(),alt:n.alt_text||""})}):null}function _e(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>_e(o))):t.push([]),t}function Ve(e){const t=ce(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var we=f(3973),L=f.n(we);const ke=[],ye={selectedOutlineColour:{type:"string",default:"black"},lock:{type:"boolean",default:!0}};function G({attributes:e,setAttributes:t,context:o}){const{selectedOutlineColour:n}=e,r=(0,g.useBlockProps)({style:{"--selected-outline-colour":n}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.InspectorControls,{group:"styles",children:(0,s.jsx)(ge,{colours:[{attributeName:"selectedOutlineColour",label:"Selected outline colour"}],attributes:e,attributesDefinition:ye,setAttributes:t})}),(0,s.jsx)("div",{...r,children:o["launchpad-blocks/carouselImages"].map(({id:l,url:a},c)=>(0,s.jsx)("button",{type:"button",className:`reset carousel-thumbnail-button${c===1||c===0&&o["launchpad-blocks/carouselImages"].length===1?" is-selected":""}`,"data-carousel-slide":c,children:(0,s.jsx)("img",{width:190,height:132,src:a,alt:"",draggable:!1,className:"carousel-thumbnail"})},l))})]})}G.displayName="CarouselThumbnailsEdit";function Ce({hasInnerBlocks:e}){return e?Se:je}function je(){return null}function Se(){return(0,s.jsx)(g.InnerBlocks.Content,{})}const ze={from:[],to:[]},Be=[],qe={},Fe=null;(0,m.registerBlockType)(L().name,{icon:(0,s.jsx)(F,{iconName:"carousel-thumbnails"}),deprecated:ke,edit:G,save:Ce({hasInnerBlocks:!1}),transforms:ze}),ue(),Be.forEach(e=>{(0,m.registerBlockVariation)(L().name,e)})})(),y})());
