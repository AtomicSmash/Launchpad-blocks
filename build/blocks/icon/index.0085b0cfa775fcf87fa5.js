(function(j,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var C=v();for(var i in C)(typeof exports=="object"?exports:j)[i]=C[i]}})(globalThis,()=>(()=>{var $={966(i){i.exports={apiVersion:3,name:"launchpad-blocks/icon",title:"Icon",category:"theme",description:"Select an icon to display from one of our libraries.",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{iconName:{type:"string",role:"content"},library:{type:"string",role:"content"},size:{type:"string",default:"2rem"}},supports:{},example:{viewportWidth:48,attributes:{library:"launchpad-blocks",iconName:"accordion-arrow",size:"2rem"}}}}},j={};function v(i){var f=j[i];if(f!==void 0)return f.exports;var g=j[i]={exports:{}};return $[i](g,g.exports,v),g.exports}v.n=i=>{var f=i&&i.__esModule?()=>i.default:()=>i;return v.d(f,{a:f}),f},v.d=(i,f)=>{for(var g in f)v.o(f,g)&&!v.o(i,g)&&Object.defineProperty(i,g,{enumerable:!0,get:f[g]})},v.o=(i,f)=>Object.prototype.hasOwnProperty.call(i,f);var C={};return(()=>{"use strict";const i=window.ReactJSXRuntime,f=window.wp.blocks,g=window.wp.blockEditor,x=window.wp.components,Ue=window.wp.coreData,Ve=window.wp.data,k=window.wp.i18n,y=window.React;var D;function We(e){return D("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:D("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function J(e){return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,i.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,i.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,i.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const X=(0,y.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:r,isEditorMode:l=!1,...a}=n;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...a,children:(0,i.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function M(e){return(0,i.jsx)(y.Suspense,{fallback:null,children:(0,i.jsx)(X,{...e})})}var _,S,c,B,I,Z,Q,Y,ee,te,T,ne,oe,ie,re,R,le,O,ae,se,L,P,ce,de,b,H,ue,pe,me,he,fe,ge,N,E,G,be,ve;function xe(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:J})}function U(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function qe(e,t,n){const o=t.spacing?.blockGap;let r="none";if(o===!0)r="both";else if(Array.isArray(o)){const a=o.includes("horizontal"),u=o.includes("vertical");a&&u?r="both":a?r="horizontal":u&&(r="vertical")}const l={columnGap:r==="both"||r==="horizontal"?U(n?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?U(n?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function we(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const r=we(o.innerBlocks,t);r&&n.push(...r)}return n},[])}const Fe=()=>{const e=N(()=>({per_page:-1}),[]),t=N(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=N(()=>({}),[]),{postTypes:o,taxonomies:r}=P(m=>{const{getEntityRecords:p}=m(L),h=p("root","postType",e),d=p("root","taxonomy",t);if(!d)return{postTypes:h,taxonomies:d};for(const w of d)n[w.slug]=p("taxonomy",w.slug);return{postTypes:h,taxonomies:d}},[e,t,n]),l=["attachment"],a=[],u=o?.filter(({viewable:m,slug:p})=>m&&!l.includes(p));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const s={};for(const m of u){const p=r?.filter(({types:h,slug:d})=>h.includes(m.slug)&&!a.includes(d));p&&(s[m.slug]=p.map(h=>{const d=n?.[h.slug]??null;return{...h,terms:d}}))}return{filteredPostTypes:u,mappedTaxonomies:s===void 0||Object.values(s).length===0?void 0:s}};function Ke({list:e,containerClassName:t,renderItem:n}){return _(S,{children:[c("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),c("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function _e(e){return e.indexOf("data:image/svg+xml,")===0}function ke(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function ye(e){return e.indexOf("dashicons-")===0}function je({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return c("div",{className:"menu-icon","aria-hidden":"true",children:c("br",{})});if(_e(e))return c("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:c("br",{})});if(ke(e))return c("img",{src:new URL(e).toString(),alt:""});if(ye(e)){const t=e.replace("dashicons-","");return c(Q,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Je={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Xe(){const[e,t,n,o]=B("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(o&&n&&n.length>0)for(const l of n)r[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)r[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)r[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:r}}function Ze({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return c(Y,{label:b("Custom colours","launchpad"),resetAll:r=>{if(r)for(const l of r)l()},children:c("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>c(Ce,{colour:r,attributesDefinition:t,attributes:n,setAttributes:o},r.attributeName))})})}function Ce({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[r,l,a,u,s]=B("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==n[e.attributeName],p=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},h=E(null);return c(ee,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:m,onDeselect:p,label:e.label,isShownByDefault:!0,children:c(te,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:d,onToggle:w})=>c(S,{children:c(T,{ref:h,__next40pxDefaultSize:!0,onClick:w,"aria-expanded":d,className:`block-editor-panel-color-gradient-settings__dropdown${d?" is-open":""}`,children:_("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[c(ne,{colorValue:n[e.attributeName]})," ",c("span",{children:e.label})]})})}),renderContent:()=>c(oe,{paddingSize:"none",children:c("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:c("div",{className:"block-editor-color-gradient-control__panel",children:c(ie,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...u&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:n[e.attributeName],onChange:d=>{o({[e.attributeName]:d})},disableCustomColors:!s})})})})})},e.attributeName)}function Qe({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[r,l,a]=B("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=l?.map(({name:d,ratio:w})=>({label:d,value:w}))??[],s=r?.map(({name:d,ratio:w})=>({label:d,value:w}))??[],m=[{label:H("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?s:[],...u||[],{label:H("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,h]=G(m.map(d=>d.value).includes(e)?e:"custom");return _(S,{children:[c(re,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:b("Aspect ratio","launchpad-blocks"),options:m,value:p,onChange:d=>{h(d),d!=="custom"&&t(d)}}),p==="custom"?c(R,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:b("Custom aspect ratio","launchpad-blocks"),help:b("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?_(le,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:b("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:d=>{typeof d=="string"&&["contain","cover"].includes(d)&&o(d)},value:n,children:[c(O,{label:"Cover",value:"cover"}),c(O,{label:"Contain",value:"contain"})]}):null]})}const Se=(e,t,n,o)=>{const{getBlocksByName:r,getBlockAttributes:l,getBlockParentsByBlockName:a}=ce(I);return r(o).some(s=>{if(a(s,"core/template-part",!0).length)return!1;const{[n]:m}=l(s);return e!==s&&t===m})};function Ye(e,t,n,o,r){const{[t]:l}=e,a=be(s=>Se(n,s,t,r),[n,t,r]);return ve(()=>{if(l===""){const s=n.slice(0,n.indexOf("-"));o({[t]:s})}if(a(l)){const s=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${s}`),o({[t]:s})}},[l,n,o,a,t]),N(()=>function({label:m,help:p,onValidChange:h,idAttribute:d}){const[w,Ge]=G(d);return c(R,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof p=="function"?p(!a(w)):p,value:w,onChange:A=>{Ge(A),a(A)||h(A)}})},[a])}function et({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return c(ae,{label:b("Change title heading element","launchpad-blocks"),icon:V(t),controls:e.map(o=>{{const r=o===t;return{icon:V(o),title:Ne(o),isDisabled:r,onClick:()=>n(o)}}})})}function Ne(e){switch(e){case"h2":return b("Heading 2","launchpad-blocks");case"h3":return b("Heading 3","launchpad-blocks");case"h4":return b("Heading 4","launchpad-blocks");case"h5":return b("Heading 5","launchpad-blocks");case"h6":return b("Heading 6","launchpad-blocks");case"p":return b("Paragraph","launchpad-blocks")}}function V(e){switch(e){case"h2":return ue;case"h3":return pe;case"h4":return me;case"h5":return he;case"h6":return fe;case"p":return ge}}function tt(e){const{hasChildren:t}=P(n=>{const{getBlocks:o}=n(I);return{hasChildren:o(e).length>0}},[e]);return t}function nt({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:r,updateBlockAttributes:l}=de(I);return _(se,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[c("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":b("Block variations"),children:n.map(a=>_("li",{children:[c(T,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?c(je,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&l(e,a.attributes),a.innerBlocks&&r(e,Z(a.innerBlocks),!1)}}),c("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),o&&c("div",{className:"block-editor-block-variation-picker__skip",children:c(T,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:b("Skip")})})]})}function ot({imageId:e,className:t="",size:n="full"}){const o=P(l=>typeof e=="number"&&e>0?l(L).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?c(S,{children:c("img",{...(()=>{const l={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(l.src=o.media_details.sizes[n].source_url,l.width=o.media_details.sizes[n].width,l.height=o.media_details.sizes[n].height),l.srcSet=Object.entries(o.media_details.sizes??{}).map(([a,u])=>`${u.source_url} ${u.width}w`).join(", "),l})(),alt:o.alt_text||""})}):null}function ze(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>ze(n))):t.push([]),t}function it(e){const t=E(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var Be=v(966),Ie=v.n(Be);const Te=window.wp.hooks,W=window.wp.element;function Pe({icon:e,size:t=24,...n},o){return(0,W.cloneElement)(e,{width:t,height:t,...n,ref:o})}const Ae=(0,W.forwardRef)(Pe),z=window.wp.primitives,$e=(0,i.jsx)(z.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)(z.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),De=(0,i.jsx)(z.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)(z.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),Me={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,k.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,k.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,k.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,k.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0},lightbox:{title:(0,k.__)("Lightbox","launchpad-blocks")}},Re={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,t)=>(0,i.jsx)(M,{iconName:e,isEditorMode:!0,...t}),availableIcons:Object.fromEntries(Object.entries(Me).filter(([e,t])=>t.makeAvailableToUser===!0))}};function q(){return(0,Te.applyFilters)("launchpadBlocks.icons",{...Re})}function F({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:t,onIconSelect:n,onReset:o}){const r=q(),[l,a]=(0,y.useState)("");return(0,i.jsxs)(x.Panel,{children:[(0,i.jsxs)(x.PanelHeader,{children:[e," ",o?(0,i.jsx)(x.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{o()},size:"small",children:"Reset"}):null]}),(0,i.jsxs)(x.PanelBody,{children:[(0,i.jsx)(x.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:l,onChange:u=>{a(u)}}),(0,i.jsx)("div",{children:Object.entries(r).map(([u,s])=>{if(Object.keys(s.availableIcons).length===0)return null;const m=Object.entries(s.availableIcons).filter(([p,{title:h}])=>!!(p.includes(l)||h.includes(l)));return(0,i.jsx)(Oe,{name:s.name,iconCount:m.length,children:(0,i.jsx)("div",{className:`icon-select ${u}-icon-select`,children:m.map(([p,{title:h}])=>{const d=t.iconName===p&&t.library===u;return(0,i.jsx)("button",{className:`icon-select-icon ${u}-icon-select-icon ${u}-icon-select-icon-${p}${d?" is-selected":""}`,onClick:()=>{n({iconName:p,library:u})},title:h,children:s.renderIcon(p)},p)})})},u)})})]})]})}function Oe({name:e,iconCount:t,children:n}){const[o,r]=(0,y.useState)(!1);return(0,y.useEffect)(()=>{t===0&&o&&r(!1)},[o,t]),(0,i.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,i.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,i.jsxs)(x.Button,{type:"button","aria-expanded":o,onClick:()=>{t>0&&r(!o)},disabled:t===0,className:"icon-select-group-accordion-header-button",children:[(0,i.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,i.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:t}),(0,i.jsx)(Ae,{className:"icon-select-group-accordion-arrow",icon:o?$e:De})]})}),o?n:null]})}function K({attributes:e,setAttributes:t}){const{iconName:n,library:o,size:r}=e,l=(0,g.useBlockProps)({style:{"--icon-size":r}}),a=q(),u=(0,g.useBlockEditingMode)();return(0,i.jsxs)(i.Fragment,{children:[u==="contentOnly"?(0,i.jsx)(g.BlockControls,{group:"other",children:(0,i.jsx)(x.Dropdown,{popoverProps:{position:"bottom"},renderToggle:({isOpen:s,onToggle:m})=>(0,i.jsx)(x.ToolbarButton,{onClick:m,"aria-haspopup":"true","aria-expanded":s,onKeyDown:p=>{!s&&p.key==="ArrowDown"&&(p.preventDefault(),m())},children:"Edit icon"}),renderContent:()=>(0,i.jsx)("div",{className:"sidebar_width",children:(0,i.jsx)(F,{dataOnSelectedIcon:{iconName:n,library:o},onIconSelect:s=>{t({iconName:s.iconName,library:s.library})}})})})}):null,(0,i.jsxs)(g.InspectorControls,{children:[(0,i.jsx)(x.Panel,{children:(0,i.jsx)(x.PanelBody,{children:(0,i.jsx)(x.__experimentalUnitControl,{__next40pxDefaultSize:!0,label:"Icon size",value:r,onChange:s=>{t({size:s})}})})}),(0,i.jsx)(F,{dataOnSelectedIcon:{iconName:n,library:o},onIconSelect:s=>{t({iconName:s.iconName,library:s.library})}})]}),(0,i.jsx)("div",{...l,children:a[o]?.renderIcon(n)})]})}K.displayName="IconEdit";function Le({hasInnerBlocks:e}){return e?Ee:He}function He(){return null}function Ee(){return(0,i.jsx)(g.InnerBlocks.Content,{})}(0,f.registerBlockType)(Ie().name,{icon:(0,i.jsx)(M,{iconName:"icon"}),edit:K,save:Le({hasInnerBlocks:!1})}),xe()})(),C})());
