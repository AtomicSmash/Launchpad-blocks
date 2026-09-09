(function(B,b){if(typeof exports=="object"&&typeof module=="object")module.exports=b();else if(typeof define=="function"&&define.amd)define([],b);else{var j=b();for(var u in j)(typeof exports=="object"?exports:B)[u]=j[u]}})(globalThis,()=>(()=>{var A={2153(u){u.exports={apiVersion:3,name:"launchpad-blocks/media-and-text",title:"Breakout Media and Text",category:"formatting",description:"A media and text block where the media can be screen width.",textdomain:"launchpad-blocks",keywords:["50/50","image","list","formatting","layout","breakout"],editorScript:"file:./index.tsx",style:"file:./style.scss",render:"file:./render.php",attributes:{mediaPosition:{type:"string",enum:["left","right"],default:"left"},imageId:{type:"integer",default:0},shouldBreakOutMedia:{type:"boolean",default:!1},hasBackground:{type:"boolean",default:!1},shouldChildBlocksBeLocked:{type:"boolean",default:!0}},providesContext:{},usesContext:[],example:{attributes:{mediaPosition:"left",imageId:0,shouldBreakOutMedia:!0,hasBackground:!0,shouldChildBlocksBeLocked:!0},innerBlocks:[{name:"core/paragraph",attributes:{className:"wp-block-launchpad-blocks-media-and-text__intro",content:"Part 6"}},{name:"core/heading",attributes:{content:"The Hunchback Trout"}},{name:"core/paragraph",attributes:{content:"The creek was made narrow by little green trees that grew too close together. The creek was like 12, 845 telephone booths in a row with high Victorian ceilings and all the doors taken off and all the backs of the booths knocked out. Sometimes when I went fishing in there, I felt just like a telephone repairman, even though I did not look like one. I was only a kid covered with fishing tackle, but in some strange way by going in there and catching a few trout, I kept the telephones in service. I was an asset to society."}},{name:"core/button",attributes:{text:"Read more"}}]},supports:{}}}},B={};function b(u){var c=B[u];if(c!==void 0)return c.exports;var a=B[u]={exports:{}};return A[u](a,a.exports,b),a.exports}b.n=u=>{var c=u&&u.__esModule?()=>u.default:()=>u;return b.d(c,{a:c}),c},b.d=(u,c)=>{for(var a in c)b.o(c,a)&&!b.o(u,a)&&Object.defineProperty(u,a,{enumerable:!0,get:c[a]})},b.o=(u,c)=>Object.prototype.hasOwnProperty.call(u,c);var j={};return(()=>{"use strict";const u=window.wp.blocks,c=window.wp.primitives,a=window.ReactJSXRuntime,z=(0,a.jsx)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(c.Path,{d:"M3 6v11.5h8V6H3Zm11 3h7V7.5h-7V9Zm7 3.5h-7V11h7v1.5ZM14 16h7v-1.5h-7V16Z"})});var Z=b(2153),S=b.n(Z);const F=[],w=window.wp.blockEditor,_=window.wp.components,v=window.wp.i18n,q=(0,a.jsx)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(c.Path,{d:"M4 18h6V6H4v12zm9-9.5V10h7V8.5h-7zm0 7h7V14h-7v1.5z"})}),U=(0,a.jsx)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(c.Path,{d:"M14 6v12h6V6h-6zM4 10h7V8.5H4V10zm0 5.5h7V14H4v1.5z"})}),J=(0,a.jsx)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(c.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M11.53 4.47a.75.75 0 1 0-1.06 1.06l8 8a.75.75 0 1 0 1.06-1.06l-8-8Zm5 1a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 1 0 1.06-1.06l-2-2Zm-11.06 10a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06Zm.06-5a.75.75 0 0 0-1.06 1.06l8 8a.75.75 0 1 0 1.06-1.06l-8-8Zm-.06-3a.75.75 0 0 1 1.06 0l10 10a.75.75 0 1 1-1.06 1.06l-10-10a.75.75 0 0 1 0-1.06Zm3.06-2a.75.75 0 0 0-1.06 1.06l10 10a.75.75 0 1 0 1.06-1.06l-10-10Z"})}),X=(0,a.jsx)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(c.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"})}),K=window.wp.coreData,T=window.wp.data,$=window.React;var C,N,p,I,Q,Y,ee,te,oe,ae,ne,re,ie,R,le,D,se,ce,de,ue,k,E,pe,he,me,ge,fe,be,P,O,V,xe,ke;function H(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Ge(e,t,o){const n=t.spacing?.blockGap;let r="none";if(n===!0)r="both";else if(Array.isArray(n)){const l=n.includes("horizontal"),h=n.includes("vertical");l&&h?r="both":l?r="horizontal":h&&(r="vertical")}const i={columnGap:r==="both"||r==="horizontal"?H(o?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?H(o?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:i};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...i}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...i}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...i}};default:return{className:`is-layout-${e.type}`,style:{...i}}}}function ve(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const r=ve(n.innerBlocks,t);r&&o.push(...r)}return o},[])}const We=()=>{const e=P(()=>({per_page:-1}),[]),t=P(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=P(()=>({}),[]),{postTypes:n,taxonomies:r}=de(g=>{const{getEntityRecords:m}=g(ce),f=m("root","postType",e),s=m("root","taxonomy",t);if(!s)return{postTypes:f,taxonomies:s};for(const x of s)o[x.slug]=m("taxonomy",x.slug);return{postTypes:f,taxonomies:s}},[e,t,o]),i=["attachment"],l=[],h=n?.filter(({viewable:g,slug:m})=>g&&!i.includes(m));if(!h||h.length===0)return{postTypes:h,taxonomies:void 0};const d={};for(const g of h){const m=r?.filter(({types:f,slug:s})=>f.includes(g.slug)&&!l.includes(s));m&&(d[g.slug]=m.map(f=>{const s=o?.[f.slug]??null;return{...f,terms:s}}))}return{filteredPostTypes:h,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Ze({list:e,containerClassName:t,renderItem:o}){return C(N,{children:[p("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),p("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function we(e){return e.indexOf("data:image/svg+xml,")===0}function _e(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function ye(e){return e.indexOf("dashicons-")===0}function Be({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return(0,a.jsx)("div",{className:"menu-icon","aria-hidden":"true",children:(0,a.jsx)("br",{})});if(we(e))return(0,a.jsx)("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:(0,a.jsx)("br",{})});if(_e(e))return(0,a.jsx)("img",{src:new URL(e).toString(),alt:""});if(ye(e)){const t=e.replace("dashicons-","");return(0,a.jsx)(_.Dashicon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Fe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function qe(){const[e,t,o,n]=I("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(n&&o&&o.length>0)for(const i of o)r[i.slug]={color:i.color,name:i.name};if(t&&t?.length>0)for(const i of t)r[i.slug]={color:i.color,name:i.name};if(e&&e?.length>0)for(const i of e)r[i.slug]={color:i.color,name:i.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:r}}function Ue({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return p(Y,{label:k("Custom colours","launchpad"),resetAll:r=>{if(r)for(const i of r)i()},children:p("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>p(je,{colour:r,attributesDefinition:t,attributes:o,setAttributes:n},r.attributeName))})})}function je({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[r,i,l,h,d]=I("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),g=()=>t[e.attributeName]?.default!==o[e.attributeName],m=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=O(null);return p(ee,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:m,hasValue:g,onDeselect:m,label:e.label,isShownByDefault:!0,children:p(te,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:s,onToggle:x})=>p(N,{children:p(oe,{ref:f,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":s,className:`block-editor-panel-color-gradient-settings__dropdown${s?" is-open":""}`,children:C("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[p(ae,{colorValue:o[e.attributeName]})," ",p("span",{children:e.label})]})})}),renderContent:()=>p(ne,{paddingSize:"none",children:p("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:p("div",{className:"block-editor-color-gradient-control__panel",children:p(re,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...i&&i?.length>0?[{name:"Theme",colors:i}]:[],...h&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:o[e.attributeName],onChange:s=>{n({[e.attributeName]:s})},disableCustomColors:!d})})})})})},e.attributeName)}function Je({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[r,i,l]=I("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),h=i?.map(({name:s,ratio:x})=>({label:s,value:x}))??[],d=r?.map(({name:s,ratio:x})=>({label:s,value:x}))??[],g=[{label:E("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?d:[],...h||[],{label:E("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[m,f]=V(g.map(s=>s.value).includes(e)?e:"custom");return C(N,{children:[p(ie,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:k("Aspect ratio","launchpad-blocks"),options:g,value:m,onChange:s=>{f(s),s!=="custom"&&t(s)}}),m==="custom"?p(R,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:k("Custom aspect ratio","launchpad-blocks"),help:k("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?C(le,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:k("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:s=>{typeof s=="string"&&["contain","cover"].includes(s)&&n(s)},value:o,children:[p(D,{label:"Cover",value:"cover"}),p(D,{label:"Contain",value:"contain"})]}):null]})}const Ce=(e,t,o,n)=>{const{getBlocksByName:r,getBlockAttributes:i,getBlockParentsByBlockName:l}=ue(Q);return r(n).some(d=>{if(l(d,"core/template-part",!0).length)return!1;const{[o]:g}=i(d);return e!==d&&t===g})};function Xe(e,t,o,n,r){const{[t]:i}=e,l=xe(d=>Ce(o,d,t,r),[o,t,r]);return ke(()=>{if(i===""){const d=o.slice(0,o.indexOf("-"));n({[t]:d})}if(l(i)){const d=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${i}. New value: ${d}`),n({[t]:d})}},[i,o,n,l,t]),P(()=>function({label:g,help:m,onValidChange:f,idAttribute:s}){const[x,De]=V(s);return p(R,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:g,help:typeof m=="function"?m(!l(x)):m,value:x,onChange:M=>{De(M),l(M)||f(M)}})},[l])}function Ke({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return p(se,{label:k("Change title heading element","launchpad-blocks"),icon:L(t),controls:e.map(n=>{{const r=n===t;return{icon:L(n),title:Pe(n),isDisabled:r,onClick:()=>o(n)}}})})}function Pe(e){switch(e){case"h2":return k("Heading 2","launchpad-blocks");case"h3":return k("Heading 3","launchpad-blocks");case"h4":return k("Heading 4","launchpad-blocks");case"h5":return k("Heading 5","launchpad-blocks");case"h6":return k("Heading 6","launchpad-blocks");case"p":return k("Paragraph","launchpad-blocks")}}function L(e){switch(e){case"h2":return pe;case"h3":return he;case"h4":return me;case"h5":return ge;case"h6":return fe;case"p":return be}}function Se(e){const{hasChildren:t}=(0,T.useSelect)(o=>{const{getBlocks:n}=o(w.store);return{hasChildren:n(e).length>0}},[e]);return t}function Te({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:r,updateBlockAttributes:i}=(0,T.useDispatch)(w.store);return(0,a.jsxs)(_.Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[(0,a.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,v.__)("Block variations"),children:o.map(l=>(0,a.jsxs)("li",{children:[(0,a.jsx)(_.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?(0,a.jsx)(Be,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&i(e,l.attributes),l.innerBlocks&&r(e,(0,u.createBlocksFromInnerBlocksTemplate)(l.innerBlocks),!1)}}),(0,a.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),n&&(0,a.jsx)("div",{className:"block-editor-block-variation-picker__skip",children:(0,a.jsx)(_.Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),i(e,{hasDismissedVariationsSelector:!0})},children:(0,v.__)("Skip")})})]})}function Ne({imageId:e,className:t="",size:o="full"}){const n=(0,T.useSelect)(i=>typeof e=="number"&&e>0?i(K.store).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!n)return null;const r=()=>{const i={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(i.src=n.media_details.sizes[o].source_url,i.width=n.media_details.sizes[o].width,i.height=n.media_details.sizes[o].height),i.srcSet=Object.entries(n.media_details.sizes??{}).map(([l,h])=>`${h.source_url} ${h.width}w`).join(", "),i};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{...r(),alt:n.alt_text||""})})}function Ie(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Ie(o))):t.push([]),t}function Qe(e){const t=O(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const i=t.current.style;i.minHeight="",t.current.setAttribute("style",`${i.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}const Me=(0,$.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:r,isEditorMode:i=!1,...l}=o;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...l,children:(0,a.jsx)("use",{href:`${i?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function y(e){return(0,a.jsx)($.Suspense,{fallback:null,children:(0,a.jsx)(Me,{...e})})}const G=[{name:"media-and-text-just-text",title:"Just text",icon:(0,a.jsx)(y,{isEditorMode:!0,iconName:"media-and-text-just-text"}),innerBlocks:[["core/paragraph",{placeholder:"Add text..."}]],isDefault:!0,scope:["block"],example:{viewportWidth:1200,attributes:{imageId:0,mediaPosition:"left",shouldBreakOutMedia:!1,hasBackground:!0,shouldChildBlocksBeLocked:!0},innerBlocks:[{name:"core/paragraph",attributes:{placeholder:"Example text"}}]}},{name:"media-and-text-heading-and-text",title:"Heading and text",icon:(0,a.jsx)(y,{isEditorMode:!0,iconName:"media-and-text-heading-and-text"}),innerBlocks:[["core/heading",{placeholder:"Add heading..."}],["core/paragraph",{placeholder:"Add text..."}]],isDefault:!0,scope:["block"],example:{viewportWidth:1200,attributes:{imageId:0,mediaPosition:"left",shouldBreakOutMedia:!1,hasBackground:!0,shouldChildBlocksBeLocked:!0},innerBlocks:[{name:"core/heading",attributes:{placeholder:"Example heading"}},{name:"core/paragraph",attributes:{placeholder:"Example text"}}]}},{name:"media-and-text-intro-heading-and-text",title:"Intro, heading and text",icon:(0,a.jsx)(y,{isEditorMode:!0,iconName:"media-and-text-intro-heading-and-text"}),innerBlocks:[["core/paragraph",{placeholder:"Intro",className:"wp-block-launchpad-blocks-media-and-text__intro"}],["core/heading",{placeholder:"Add heading..."}],["core/paragraph",{placeholder:"Add text..."}]],isDefault:!0,scope:["block"],example:{viewportWidth:1200,attributes:{imageId:0,mediaPosition:"left",shouldBreakOutMedia:!1,hasBackground:!0,shouldChildBlocksBeLocked:!0},innerBlocks:[{name:"core/heading",attributes:{placeholder:"Example heading"}},{name:"core/paragraph",attributes:{placeholder:"Example text"}}]}},{name:"media-and-text-heading-text-buttons",title:"Heading, text & buttons",icon:(0,a.jsx)(y,{isEditorMode:!0,iconName:"media-and-text-heading-text-buttons"}),innerBlocks:[["core/heading",{placeholder:"Add heading..."}],["core/paragraph",{placeholder:"Add text..."}],["core/button",{placeholder:"Add button..."}]],isDefault:!0,scope:["block"],example:{viewportWidth:1200,attributes:{imageId:0,mediaPosition:"left",shouldBreakOutMedia:!1,hasBackground:!0,shouldChildBlocksBeLocked:!0},innerBlocks:[{name:"core/heading",attributes:{placeholder:"Example heading"}},{name:"core/paragraph",attributes:{placeholder:"Example text"}},{name:"core/button",attributes:{placeholder:"Example button"}}]}},{name:"media-and-text-intro-heading-text-buttons",title:"Intro, heading, text & buttons",icon:(0,a.jsx)(y,{isEditorMode:!0,iconName:"media-and-text-intro-heading-text-buttons"}),innerBlocks:[["core/paragraph",{placeholder:"Intro",className:"wp-block-launchpad-blocks-media-and-text__intro"}],["core/heading",{placeholder:"Add heading..."}],["core/paragraph",{placeholder:"Add text..."}],["core/button",{placeholder:"Add button..."}]],isDefault:!0,scope:["block"],example:{viewportWidth:1200,attributes:{imageId:0,mediaPosition:"left",shouldBreakOutMedia:!1,hasBackground:!0,shouldChildBlocksBeLocked:!0},innerBlocks:[{name:"core/heading",attributes:{placeholder:"Example heading"}},{name:"core/paragraph",attributes:{placeholder:"Example text"}},{name:"core/button",attributes:{placeholder:"Example button"}}]}}];function W({attributes:e,clientId:t,setAttributes:o}){const{mediaPosition:n,imageId:r,shouldBreakOutMedia:i,hasBackground:l,shouldChildBlocksBeLocked:h}=e,d=(0,w.useBlockProps)({className:`alignfull${l?" has-background":""}${i?" is-breakout is-breakout-"+n:""}`}),{children:g,...m}=(0,w.useInnerBlocksProps)(d,{templateLock:h?"contentOnly":!1}),f=Se(t);function s(x){o({imageId:x.id})}return f?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(w.BlockControls,{group:"other",children:[(0,a.jsx)(_.ToolbarButton,{icon:q,title:(0,v.__)("Show media on left","launchpad-blocks"),isActive:n==="left",onClick:()=>o({mediaPosition:"left"})}),(0,a.jsx)(_.ToolbarButton,{icon:U,title:(0,v.__)("Show media on right","launchpad-blocks"),isActive:n==="right",onClick:()=>o({mediaPosition:"right"})}),(0,a.jsx)(_.ToolbarButton,{icon:(0,a.jsx)(y,{isEditorMode:!0,iconName:"break-image-out",transform:n==="left"?"rotate(180)":void 0}),title:(0,v.__)("Break media out of container","launchpad-blocks"),isActive:i,onClick:()=>o({shouldBreakOutMedia:!i})}),(0,a.jsx)(_.ToolbarButton,{icon:J,title:(0,v.__)("Add background to block","launchpad-blocks"),isActive:l,onClick:()=>o({hasBackground:!l})}),(0,a.jsx)(w.MediaReplaceFlow,{allowedTypes:["image"],accept:"image/*",onSelect:s,name:r===0?(0,v.__)("Add","launchpad-blocks"):(0,v.__)("Replace","launchpad-blocks"),mediaId:r,addToGallery:r!==0})]}),(0,a.jsx)("div",{...m,children:(0,a.jsxs)("div",{className:"wp-block-launchpad-blocks-media-and-text__wrapper",children:[n==="right"?(0,a.jsx)("div",{className:"wp-block-launchpad-blocks-media-and-text__content",children:g}):null,(0,a.jsx)("figure",{children:r!==0?(0,a.jsx)(Ne,{imageId:r,className:"wp-block-launchpad-blocks-media-and-text__image"}):(0,a.jsx)(w.MediaPlaceholder,{icon:X,labels:{title:(0,v.__)("Media area","launchpad-blocks"),instructions:(0,v.__)("Drag and drop an image, upload, or choose from your library.","launchpad-blocks")},onSelect:s,accept:"image/*",allowedTypes:["image"],addToGallery:!1})}),n==="left"?(0,a.jsx)("div",{className:"wp-block-launchpad-blocks-media-and-text__content",children:g}):null]})})]}):(0,a.jsx)("div",{...d,children:(0,a.jsx)(Te,{clientId:t,blockInfo:{name:S().title,icon:z},variations:G,allowSkip:!1})})}W.displayName="MediaAndTextEdit";function Ae({hasInnerBlocks:e}){return e?$e:ze}function ze(){return null}function $e(){return(0,a.jsx)(w.InnerBlocks.Content,{})}const Re={from:[],to:[]},Ye={},et=null;(0,u.registerBlockType)(S().name,{icon:z,deprecated:F,edit:W,save:Ae({hasInnerBlocks:!0}),transforms:Re}),G.forEach(e=>{(0,u.registerBlockVariation)(S().name,e)})})(),j})());
