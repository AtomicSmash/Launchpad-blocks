(function(j,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var T=v();for(var r in T)(typeof exports=="object"?exports:j)[r]=T[r]}})(globalThis,()=>(()=>{var D={697(r){r.exports={apiVersion:3,name:"launchpad-blocks/fancy-list-item",title:"Fancy list item",category:"theme",description:"A block to display a semantic list of content.",parent:["launchpad-blocks/fancy-list"],allowedBlocks:["launchpad-blocks/fancy-list"],textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",style:"file:./style.scss",render:"file:./render.php",attributes:{iconName:{type:"string"},library:{type:"string"},textContent:{type:"string"}},providesContext:{},usesContext:["launchpad-blocks/fancyListType","launchpad-blocks/fancyListMarkerType"],supports:{splitting:!0}}}},j={};function v(r){var f=j[r];if(f!==void 0)return f.exports;var x=j[r]={exports:{}};return D[r](x,x.exports,v),x.exports}v.n=r=>{var f=r&&r.__esModule?()=>r.default:()=>r;return v.d(f,{a:f}),f},v.d=(r,f)=>{for(var x in f)v.o(f,x)&&!v.o(r,x)&&Object.defineProperty(r,x,{enumerable:!0,get:f[x]})},v.o=(r,f)=>Object.prototype.hasOwnProperty.call(r,f);var T={};return(()=>{"use strict";const r=window.ReactJSXRuntime,f=window.wp.blocks,x=window.wp.blockEditor,_=window.wp.components,Ve=window.wp.coreData,K=window.wp.data,k=window.wp.i18n,y=window.React;var R;function We(e){return R("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:R("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function X(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,r.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,r.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,r.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const Z=(0,y.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:i,isEditorMode:a=!1,...l}=n;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,...l,children:(0,r.jsx)("use",{href:`${a?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function M(e){return(0,r.jsx)(y.Suspense,{fallback:null,children:(0,r.jsx)(Z,{...e})})}var C,N,s,z,I,Q,Y,ee,te,ne,P,oe,ie,ae,re,L,le,O,se,ce,H,$,ue,de,b,E,pe,me,he,fe,ge,be,S,G,U,ve,xe;function we(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:X})}function F(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function qe(e,t,n){const o=t.spacing?.blockGap;let i="none";if(o===!0)i="both";else if(Array.isArray(o)){const l=o.includes("horizontal"),u=o.includes("vertical");l&&u?i="both":l?i="horizontal":u&&(i="vertical")}const a={columnGap:i==="both"||i==="horizontal"?F(n?.spacing?.blockGap,i):void 0,rowGap:i==="both"||i==="vertical"?F(n?.spacing?.blockGap,i):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:a};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...a}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...a}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...a}};default:return{className:`is-layout-${e.type}`,style:{...a}}}}function _e(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const i=_e(o.innerBlocks,t);i&&n.push(...i)}return n},[])}const Je=()=>{const e=S(()=>({per_page:-1}),[]),t=S(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=S(()=>({}),[]),{postTypes:o,taxonomies:i}=$(m=>{const{getEntityRecords:p}=m(H),h=p("root","postType",e),c=p("root","taxonomy",t);if(!c)return{postTypes:h,taxonomies:c};for(const w of c)n[w.slug]=p("taxonomy",w.slug);return{postTypes:h,taxonomies:c}},[e,t,n]),a=["attachment"],l=[],u=o?.filter(({viewable:m,slug:p})=>m&&!a.includes(p));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const d={};for(const m of u){const p=i?.filter(({types:h,slug:c})=>h.includes(m.slug)&&!l.includes(c));p&&(d[m.slug]=p.map(h=>{const c=n?.[h.slug]??null;return{...h,terms:c}}))}return{filteredPostTypes:u,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Ke({list:e,containerClassName:t,renderItem:n}){return C(N,{children:[s("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),s("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function ke(e){return e.indexOf("data:image/svg+xml,")===0}function ye(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function Ce(e){return e.indexOf("dashicons-")===0}function je({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return s("div",{className:"menu-icon","aria-hidden":"true",children:s("br",{})});if(ke(e))return s("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:s("br",{})});if(ye(e))return s("img",{src:new URL(e).toString(),alt:""});if(Ce(e)){const t=e.replace("dashicons-","");return s(Y,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Xe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ze(){const[e,t,n,o]=z("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),i={};if(o&&n&&n.length>0)for(const a of n)i[a.slug]={color:a.color,name:a.name};if(t&&t?.length>0)for(const a of t)i[a.slug]={color:a.color,name:a.name};if(e&&e?.length>0)for(const a of e)i[a.slug]={color:a.color,name:a.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:i}}function Qe({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return s(ee,{label:b("Custom colours","launchpad"),resetAll:i=>{if(i)for(const a of i)a()},children:s("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(i=>s(Te,{colour:i,attributesDefinition:t,attributes:n,setAttributes:o},i.attributeName))})})}function Te({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[i,a,l,u,d]=z("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==n[e.attributeName],p=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},h=G(null);return s(te,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:m,onDeselect:p,label:e.label,isShownByDefault:!0,children:s(ne,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:w})=>s(N,{children:s(P,{ref:h,__next40pxDefaultSize:!0,onClick:w,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:C("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[s(oe,{colorValue:n[e.attributeName]})," ",s("span",{children:e.label})]})})}),renderContent:()=>s(ie,{paddingSize:"none",children:s("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:s("div",{className:"block-editor-color-gradient-control__panel",children:s(ae,{colors:[...i&&i?.length>0?[{name:"User",colors:i}]:[],...a&&a?.length>0?[{name:"Theme",colors:a}]:[],...u&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:n[e.attributeName],onChange:c=>{o({[e.attributeName]:c})},disableCustomColors:!d})})})})})},e.attributeName)}function Ye({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[i,a,l]=z("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=a?.map(({name:c,ratio:w})=>({label:c,value:w}))??[],d=i?.map(({name:c,ratio:w})=>({label:c,value:w}))??[],m=[{label:E("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?d:[],...u||[],{label:E("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,h]=U(m.map(c=>c.value).includes(e)?e:"custom");return C(N,{children:[s(re,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:b("Aspect ratio","launchpad-blocks"),options:m,value:p,onChange:c=>{h(c),c!=="custom"&&t(c)}}),p==="custom"?s(L,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:b("Custom aspect ratio","launchpad-blocks"),help:b("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?C(le,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:b("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&o(c)},value:n,children:[s(O,{label:"Cover",value:"cover"}),s(O,{label:"Contain",value:"contain"})]}):null]})}const Ne=(e,t,n,o)=>{const{getBlocksByName:i,getBlockAttributes:a,getBlockParentsByBlockName:l}=ue(I);return i(o).some(d=>{if(l(d,"core/template-part",!0).length)return!1;const{[n]:m}=a(d);return e!==d&&t===m})};function et(e,t,n,o,i){const{[t]:a}=e,l=ve(d=>Ne(n,d,t,i),[n,t,i]);return xe(()=>{if(a===""){const d=n.slice(0,n.indexOf("-"));o({[t]:d})}if(l(a)){const d=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${a}. New value: ${d}`),o({[t]:d})}},[a,n,o,l,t]),S(()=>function({label:m,help:p,onValidChange:h,idAttribute:c}){const[w,A]=U(c);return s(L,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof p=="function"?p(!l(w)):p,value:w,onChange:g=>{A(g),l(g)||h(g)}})},[l])}function tt({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return s(se,{label:b("Change title heading element","launchpad-blocks"),icon:V(t),controls:e.map(o=>{{const i=o===t;return{icon:V(o),title:Se(o),isDisabled:i,onClick:()=>n(o)}}})})}function Se(e){switch(e){case"h2":return b("Heading 2","launchpad-blocks");case"h3":return b("Heading 3","launchpad-blocks");case"h4":return b("Heading 4","launchpad-blocks");case"h5":return b("Heading 5","launchpad-blocks");case"h6":return b("Heading 6","launchpad-blocks");case"p":return b("Paragraph","launchpad-blocks")}}function V(e){switch(e){case"h2":return pe;case"h3":return me;case"h4":return he;case"h5":return fe;case"h6":return ge;case"p":return be}}function nt(e){const{hasChildren:t}=$(n=>{const{getBlocks:o}=n(I);return{hasChildren:o(e).length>0}},[e]);return t}function ot({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:i,updateBlockAttributes:a}=de(I);return C(ce,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[s("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":b("Block variations"),children:n.map(l=>C("li",{children:[s(P,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?s(je,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&a(e,l.attributes),l.innerBlocks&&i(e,Q(l.innerBlocks),!1)}}),s("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),o&&s("div",{className:"block-editor-block-variation-picker__skip",children:s(P,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{i(e,[],!1),a(e,{hasDismissedVariationsSelector:!0})},children:b("Skip")})})]})}function it({imageId:e,className:t="",size:n="full"}){const o=$(a=>typeof e=="number"&&e>0?a(H).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?s(N,{children:s("img",{...(()=>{const a={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(a.src=o.media_details.sizes[n].source_url,a.width=o.media_details.sizes[n].width,a.height=o.media_details.sizes[n].height),a.srcSet=Object.entries(o.media_details.sizes??{}).map(([l,u])=>`${u.source_url} ${u.width}w`).join(", "),a})(),alt:o.alt_text||""})}):null}function Be(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>Be(n))):t.push([]),t}function at(e){const t=G(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const i=e()?.scrollHeight??0;if(i){const a=t.current.style;a.minHeight="",t.current.setAttribute("style",`${a.cssText}min-height: ${i}px !important`)}else t.current.style.minHeight=""}},1)}}var ze=v(697),Ie=v.n(ze);const Pe=window.wp.richText,$e=window.wp.hooks,W=window.wp.element;function Ae({icon:e,size:t=24,...n},o){return(0,W.cloneElement)(e,{width:t,height:t,...n,ref:o})}const De=(0,W.forwardRef)(Ae),B=window.wp.primitives,Re=(0,r.jsx)(B.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)(B.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),Me=(0,r.jsx)(B.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)(B.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),Le={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,k.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,k.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,k.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,k.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0},lightbox:{title:(0,k.__)("Lightbox","launchpad-blocks")}},Oe={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,t)=>(0,r.jsx)(M,{iconName:e,isEditorMode:!0,...t}),availableIcons:Object.fromEntries(Object.entries(Le).filter(([e,t])=>t.makeAvailableToUser===!0))}};function q(){return(0,$e.applyFilters)("launchpadBlocks.icons",{...Oe})}function He({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:t,onIconSelect:n,onReset:o}){const i=q(),[a,l]=(0,y.useState)("");return(0,r.jsxs)(_.Panel,{children:[(0,r.jsxs)(_.PanelHeader,{children:[e," ",o?(0,r.jsx)(_.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{o()},size:"small",children:"Reset"}):null]}),(0,r.jsxs)(_.PanelBody,{children:[(0,r.jsx)(_.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:a,onChange:u=>{l(u)}}),(0,r.jsx)("div",{children:Object.entries(i).map(([u,d])=>{if(Object.keys(d.availableIcons).length===0)return null;const m=Object.entries(d.availableIcons).filter(([p,{title:h}])=>!!(p.includes(a)||h.includes(a)));return(0,r.jsx)(Ee,{name:d.name,iconCount:m.length,children:(0,r.jsx)("div",{className:`icon-select ${u}-icon-select`,children:m.map(([p,{title:h}])=>{const c=t.iconName===p&&t.library===u;return(0,r.jsx)("button",{className:`icon-select-icon ${u}-icon-select-icon ${u}-icon-select-icon-${p}${c?" is-selected":""}`,onClick:()=>{n({iconName:p,library:u})},title:h,children:d.renderIcon(p)},p)})})},u)})})]})]})}function Ee({name:e,iconCount:t,children:n}){const[o,i]=(0,y.useState)(!1);return(0,y.useEffect)(()=>{t===0&&o&&i(!1)},[o,t]),(0,r.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,r.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,r.jsxs)(_.Button,{type:"button","aria-expanded":o,onClick:()=>{t>0&&i(!o)},disabled:t===0,className:"icon-select-group-accordion-header-button",children:[(0,r.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,r.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:t}),(0,r.jsx)(De,{className:"icon-select-group-accordion-arrow",icon:o?Re:Me})]})}),o?n:null]})}function J({attributes:e,context:t,setAttributes:n,mergeBlocks:o,onReplace:i,onRemove:a}){const{textContent:l,iconName:u,library:d}=e,m=t["launchpad-blocks/fancyListType"]==="ul"&&t["launchpad-blocks/fancyListMarkerType"]==="icon",p=m&&u&&d,h=(0,x.useBlockProps)({className:`${p?"has-icon":""}`}),c=q(),w=(0,y.useRef)(null),A=(0,K.useSelect)(g=>g(Pe.store).getFormatTypes(),[]).map(g=>g.name);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.InspectorControls,{children:m?(0,r.jsx)(He,{dataOnSelectedIcon:{iconName:u,library:d},onIconSelect:g=>{n({iconName:g.iconName,library:g.library})},onReset:()=>{n({iconName:void 0,library:void 0})}}):null}),(0,r.jsxs)("li",{...h,children:[p?c[d]?.renderIcon(u,{className:"list-item-icon"}):null,(0,r.jsx)(x.RichText,{identifier:"textContent",ref:w,tagName:"span",onChange:g=>{n({textContent:g})},onMerge:o,onReplace:i,onRemove:a,value:l,placeholder:(0,k.__)("Write your list item content...","launchpad-blocks"),allowedFormats:[...A.filter(g=>g!=="core/footnote"&&g!=="core/image")]})]})]})}J.displayName="FancyListItemEdit";function Ge({hasInnerBlocks:e}){return e?Fe:Ue}function Ue(){return null}function Fe(){return(0,r.jsx)(x.InnerBlocks.Content,{})}(0,f.registerBlockType)(Ie().name,{icon:(0,r.jsx)(M,{iconName:"list-item"}),edit:J,save:Ge({hasInnerBlocks:!0}),merge:(e,t)=>({...e,textContent:(e.textContent??"")+(t.textContent??"")})}),we()})(),T})());
