(function(y,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var C=v();for(var n in C)(typeof exports=="object"?exports:y)[n]=C[n]}})(globalThis,()=>(()=>{var A={8147(n){n.exports={apiVersion:3,name:"launchpad-blocks/accordion",parent:["launchpad-blocks/accordion-group"],title:"Accordion",category:"theme",description:"A block which has a header and collapsible content.",textdomain:"launchpad-blocks",keywords:["accordion"],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{isInitiallyOpen:{type:"boolean",default:!1},accordionId:{type:"string",default:""},headerContent:{type:"string"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"}},supports:{color:!0,typography:{fontSize:!0,lineHeight:!0,textAlign:!0},shadow:!0,spacing:{padding:!0,margin:!0}},providesContext:{},usesContext:["launchpad-blocks/accordion-heading-level"],example:{attributes:{isInitiallyOpen:!1,accordionId:"123",headerElement:"h2",headerContent:"Joke 1"},innerBlocks:[{name:"core/paragraph",attributes:{content:"I was going to sail around the globe in the world\u2019s smallest ship but I bottled it."}}]}}}},y={};function v(n){var g=y[n];if(g!==void 0)return g.exports;var p=y[n]={exports:{}};return A[n](p,p.exports,v),p.exports}v.n=n=>{var g=n&&n.__esModule?()=>n.default:()=>n;return v.d(g,{a:g}),g},v.d=(n,g)=>{for(var p in g)v.o(g,p)&&!v.o(n,p)&&Object.defineProperty(n,p,{enumerable:!0,get:g[p]})},v.o=(n,g)=>Object.prototype.hasOwnProperty.call(n,g);var C={};return(()=>{"use strict";const n=window.ReactJSXRuntime,g=window.wp.blocks,p=window.wp.blockEditor,w=window.wp.components,He=window.wp.coreData,T=window.wp.data,q=window.wp.i18n,k=window.React;var $;function Me(e){return $("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:$("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function W(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,n.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,n.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,n.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const F=(0,k.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:r,size:a,isEditorMode:i=!1,...s}=o;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,...s,children:(0,n.jsx)("use",{href:`${i?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${r}`})})}}});function z(e){return(0,n.jsx)(k.Suspense,{fallback:null,children:(0,n.jsx)(F,{...e})})}var _,j,c,B,D,U,J,X,Z,K,S,Q,Y,ee,te,oe,ne,R,re,ae,O,N,ie,b,H,se,le,ce,de,ue,pe,I,M,he;function me(){(0,g.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:W})}function E(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Ee(e,t,o){const r=t.spacing?.blockGap;let a="none";if(r===!0)a="both";else if(Array.isArray(r)){const s=r.includes("horizontal"),u=r.includes("vertical");s&&u?a="both":s?a="horizontal":u&&(a="vertical")}const i={columnGap:a==="both"||a==="horizontal"?E(o?.spacing?.blockGap,a):void 0,rowGap:a==="both"||a==="vertical"?E(o?.spacing?.blockGap,a):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:i};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...i}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...i}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...i}};default:return{className:`is-layout-${e.type}`,style:{...i}}}}function ge(e,t){return e.reduce((o,r)=>{if(r.name===t)o.push(r);else if(r.innerBlocks){const a=ge(r.innerBlocks,t);a&&o.push(...a)}return o},[])}const Le=()=>{const e=I(()=>({per_page:-1}),[]),t=I(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=I(()=>({}),[]),{postTypes:r,taxonomies:a}=N(m=>{const{getEntityRecords:h}=m(O),f=h("root","postType",e),l=h("root","taxonomy",t);if(!l)return{postTypes:f,taxonomies:l};for(const x of l)o[x.slug]=h("taxonomy",x.slug);return{postTypes:f,taxonomies:l}},[e,t,o]),i=["attachment"],s=[],u=r?.filter(({viewable:m,slug:h})=>m&&!i.includes(h));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const d={};for(const m of u){const h=a?.filter(({types:f,slug:l})=>f.includes(m.slug)&&!s.includes(l));h&&(d[m.slug]=h.map(f=>{const l=o?.[f.slug]??null;return{...f,terms:l}}))}return{filteredPostTypes:u,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Ve({list:e,containerClassName:t,renderItem:o}){return _(j,{children:[c("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),c("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(r=>o({listItem:r,buttonProps:{type:"button",className:`custom-multiple-select-list-item${r.isSelected?" is-selected":""}`}}))})]})}function fe(e){return e.indexOf("data:image/svg+xml,")===0}function be(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function ve(e){return e.indexOf("dashicons-")===0}function xe({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return c("div",{className:"menu-icon","aria-hidden":"true",children:c("br",{})});if(fe(e))return c("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:c("br",{})});if(be(e))return c("img",{src:new URL(e).toString(),alt:""});if(ve(e)){const t=e.replace("dashicons-","");return c(J,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Ge={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function qe(){const[e,t,o,r]=B("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),a={};if(r&&o&&o.length>0)for(const i of o)a[i.slug]={color:i.color,name:i.name};if(t&&t?.length>0)for(const i of t)a[i.slug]={color:i.color,name:i.name};if(e&&e?.length>0)for(const i of e)a[i.slug]={color:i.color,name:i.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:a}}function We({colours:e,attributesDefinition:t,attributes:o,setAttributes:r}){return c(X,{label:b("Custom colours","launchpad"),resetAll:a=>{if(a)for(const i of a)i()},children:c("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(a=>c(we,{colour:a,attributesDefinition:t,attributes:o,setAttributes:r},a.attributeName))})})}function we({colour:e,attributesDefinition:t,attributes:o,setAttributes:r}){const[a,i,s,u,d]=B("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==o[e.attributeName],h=()=>{r({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=M(null);return c(Z,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:h,hasValue:m,onDeselect:h,label:e.label,isShownByDefault:!0,children:c(K,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:l,onToggle:x})=>c(j,{children:c(S,{ref:f,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":l,className:`block-editor-panel-color-gradient-settings__dropdown${l?" is-open":""}`,children:_("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[c(Q,{colorValue:o[e.attributeName]})," ",c("span",{children:e.label})]})})}),renderContent:()=>c(Y,{paddingSize:"none",children:c("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:c("div",{className:"block-editor-color-gradient-control__panel",children:c(ee,{colors:[...a&&a?.length>0?[{name:"User",colors:a}]:[],...i&&i?.length>0?[{name:"Theme",colors:i}]:[],...u&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:o[e.attributeName],onChange:l=>{r({[e.attributeName]:l})},disableCustomColors:!d})})})})})},e.attributeName)}function Fe({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:r}){const[a,i,s]=B("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=i?.map(({name:l,ratio:x})=>({label:l,value:x}))??[],d=a?.map(({name:l,ratio:x})=>({label:l,value:x}))??[],m=[{label:H("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?d:[],...u||[],{label:H("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[h,f]=he(m.map(l=>l.value).includes(e)?e:"custom");return _(j,{children:[c(te,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:b("Aspect ratio","launchpad-blocks"),options:m,value:h,onChange:l=>{f(l),l!=="custom"&&t(l)}}),h==="custom"?c(oe,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:b("Custom aspect ratio","launchpad-blocks"),help:b("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&r!==void 0?_(ne,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:b("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:l=>{typeof l=="string"&&["contain","cover"].includes(l)&&r(l)},value:o,children:[c(R,{label:"Cover",value:"cover"}),c(R,{label:"Contain",value:"contain"})]}):null]})}const ke=(e,t,o,r)=>{const{getBlocksByName:a,getBlockAttributes:i,getBlockParentsByBlockName:s}=(0,T.select)(p.store);return a(r).some(d=>{if(s(d,"core/template-part",!0).length)return!1;const{[o]:m}=i(d);return e!==d&&t===m})};function _e(e,t,o,r,a){const{[t]:i}=e,s=(0,k.useCallback)(d=>ke(o,d,t,a),[o,t,a]);return(0,k.useEffect)(()=>{if(i===""){const d=o.slice(0,o.indexOf("-"));r({[t]:d})}if(s(i)){const d=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${i}. New value: ${d}`),r({[t]:d})}},[i,o,r,s,t]),(0,k.useMemo)(()=>function({label:m,help:h,onValidChange:f,idAttribute:l}){const[x,Oe]=(0,k.useState)(l);return(0,n.jsx)(w.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof h=="function"?h(!s(x)):h,value:x,onChange:P=>{Oe(P),s(P)||f(P)}})},[s])}function Ue({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return c(re,{label:b("Change title heading element","launchpad-blocks"),icon:L(t),controls:e.map(r=>{{const a=r===t;return{icon:L(r),title:ye(r),isDisabled:a,onClick:()=>o(r)}}})})}function ye(e){switch(e){case"h2":return b("Heading 2","launchpad-blocks");case"h3":return b("Heading 3","launchpad-blocks");case"h4":return b("Heading 4","launchpad-blocks");case"h5":return b("Heading 5","launchpad-blocks");case"h6":return b("Heading 6","launchpad-blocks");case"p":return b("Paragraph","launchpad-blocks")}}function L(e){switch(e){case"h2":return se;case"h3":return le;case"h4":return ce;case"h5":return de;case"h6":return ue;case"p":return pe}}function Je(e){const{hasChildren:t}=N(o=>{const{getBlocks:r}=o(D);return{hasChildren:r(e).length>0}},[e]);return t}function Xe({clientId:e,blockInfo:t,variations:o,allowSkip:r}){const{replaceInnerBlocks:a,updateBlockAttributes:i}=ie(D);return _(ae,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[c("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":b("Block variations"),children:o.map(s=>_("li",{children:[c(S,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?c(xe,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&i(e,s.attributes),s.innerBlocks&&a(e,U(s.innerBlocks),!1)}}),c("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),r&&c("div",{className:"block-editor-block-variation-picker__skip",children:c(S,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{a(e,[],!1),i(e,{hasDismissedVariationsSelector:!0})},children:b("Skip")})})]})}function Ze({imageId:e,className:t="",size:o="full"}){const r=N(i=>typeof e=="number"&&e>0?i(O).getEntityRecord?.("postType","attachment",e):void 0,[e]);return r?c(j,{children:c("img",{...(()=>{const i={src:r.source_url,className:`attachment-${o} size-${o} ${t}`,width:r.media_details.width,height:r.media_details.height,srcSet:""};return r.media_details?.sizes?.[o]&&(i.src=r.media_details.sizes[o].source_url,i.width=r.media_details.sizes[o].width,i.height=r.media_details.sizes[o].height),i.srcSet=Object.entries(r.media_details.sizes??{}).map(([s,u])=>`${u.source_url} ${u.width}w`).join(", "),i})(),alt:r.alt_text||""})}):null}function Ce(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Ce(o))):t.push([]),t}function Ke(e){const t=M(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const a=e()?.scrollHeight??0;if(a){const i=t.current.style;i.minHeight="",t.current.setAttribute("style",`${i.cssText}min-height: ${a}px !important`)}else t.current.style.minHeight=""}},1)}}var je=v(8147),ze=v.n(je);const Be={isInitiallyOpen:{type:"boolean",default:!1},accordionId:{type:"string",default:""},headerContent:{type:"string"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"}},Se={color:!0,typography:{fontSize:!0,lineHeight:!0,textAlign:!0},shadow:!0,spacing:{padding:!0,margin:!0}},Ne={...Be},Ie={...Se},Pe=[{fixture:[`<!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"9f29b837-b0ea-414b-8675-84fa2503dc61","headerContent":"Accordion that is open by default","fontSize":"t-2"} -->
<div data-accordion="" data-is-initially-open="true" id="9f29b837-b0ea-414b-8675-84fa2503dc61" class="wp-block-launchpad-blocks-accordion has-t-2-font-size"><h2><button aria-expanded="true" aria-controls="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" data-state="open" id="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" id="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->`],object:{attributes:Ne,supports:Ie,save:function({attributes:e}){const{isInitiallyOpen:t,accordionId:o,headerContent:r,headerElement:a}=e,i=a,s=p.useBlockProps.save({"data-accordion":"","data-is-initially-open":t,id:o});return(0,n.jsxs)("div",{...s,children:[(0,n.jsx)(i,{children:(0,n.jsxs)("button",{"aria-expanded":"true","aria-controls":`${o}-panel`,"data-state":"open",id:`${o}-trigger`,className:"accordion-header-button",children:[(0,n.jsx)(p.RichText.Content,{tagName:"span",className:"accordion-header-button-text",value:r}),(0,n.jsx)(z,{iconName:"accordion-arrow",className:"accordion-header-button-icon",isEditorMode:!0,size:"32"})]})}),(0,n.jsx)("div",{role:"region","data-state":"open","aria-labelledby":`${o}-trigger`,id:`${o}-panel`,className:"accordion-panel",children:(0,n.jsx)("div",{className:"accordion-panel-inner-wrapper",children:(0,n.jsx)(p.InnerBlocks.Content,{})})})]})},migrate:(e,t)=>[e,[...t]],isEligible:()=>!0}}.object],Ae=window.wp.hooks,V=window.wp.primitives,Te=(0,n.jsx)(V.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,n.jsx)(V.Path,{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"})});function G({clientId:e,attributes:t,setAttributes:o,isSelected:r,context:a}){const{isInitiallyOpen:i,headerContent:s}=t,u=a["launchpad-blocks/accordion-heading-level"],d=(0,p.useBlockProps)(),m=(0,p.useInnerBlocksProps)({className:"accordion-panel-inner-wrapper"},{renderAppender:()=>(0,n.jsx)(p.Inserter,{rootClientId:e,renderToggle:({onToggle:l})=>!r&&!f?null:(0,n.jsx)(w.ButtonGroup,{children:(0,n.jsxs)(w.Button,{className:"accordion-inserter-button is-primary",onClick:l,children:[Te," Add block inside the accordion"]})}),isAppender:!0})});_e(t,"accordionId",e,o,"launchpad-blocks/accordion");const h=(0,Ae.applyFilters)("launchpadBlocks.accordionIcon",l=>(0,n.jsx)(z,{iconName:"accordion-arrow",...l})),f=(0,T.useSelect)(l=>l(p.store).hasSelectedInnerBlock(e,!0),[e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.InspectorControls,{children:(0,n.jsx)(w.Panel,{children:(0,n.jsx)(w.PanelBody,{title:"Block settings",children:(0,n.jsx)(w.CheckboxControl,{__nextHasNoMarginBottom:!0,label:"Is accordion open by default?",help:"Allows you to set the initial state for the accordion. If only one accordion is allowed to be open at a time in the group, this setting will only apply to the first accordion with this setting enabled.",checked:i,onChange:l=>{o({isInitiallyOpen:l})}})})})}),(0,n.jsxs)("div",{...d,children:[(0,n.jsx)(u,{children:(0,n.jsxs)("div",{className:"accordion-header-button",children:[(0,n.jsx)(p.RichText,{tagName:"span",className:"accordion-header-button-text",onChange:l=>{o({headerContent:l})},value:s,allowedFormats:["core/bold","core/code","core/italic","core/keyboard","core/strikethrough","core/subscript","core/superscript","core/underline"],placeholder:(0,q.__)("Write your accordion header\u2026","launchpad-blocks")}),(0,n.jsx)("div",{className:"accordion-header-button-icon-wrapper",children:(0,n.jsx)(h,{className:"accordion-header-button-icon",isEditorMode:!0})})]})}),(0,n.jsx)("div",{className:"accordion-panel",children:(0,n.jsx)("div",{...m})})]})]})}G.displayName="AccordionEdit";function $e({hasInnerBlocks:e}){return e?Re:De}function De(){return null}function Re(){return(0,n.jsx)(p.InnerBlocks.Content,{})}const et={},tt=null;(0,g.registerBlockType)(ze().name,{icon:(0,n.jsx)(z,{iconName:"accordion"}),edit:G,save:$e({hasInnerBlocks:!0}),deprecated:Pe}),me()})(),C})());
