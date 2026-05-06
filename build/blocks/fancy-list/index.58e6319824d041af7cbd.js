(function(C,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var w=x();for(var o in w)(typeof exports=="object"?exports:C)[o]=w[o]}})(globalThis,()=>(()=>{var D={9589(o){o.exports={apiVersion:3,name:"launchpad-blocks/fancy-list",title:"Fancy list",category:"theme",description:"A block to display a semantic list of content.",allowedBlocks:["launchpad-blocks/fancy-list-item"],textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",render:"file:./render.php",attributes:{columnCount:{type:"integer",default:1},type:{type:"string",enum:["ul","ol"],default:"ul"},markerType:{type:"string",enum:["normal","icon"],default:"normal"},markerColour:{type:"string"},markerInnerColour:{type:"string"}},providesContext:{"launchpad-blocks/fancyListType":"type","launchpad-blocks/fancyListMarkerType":"markerType"},usesContext:[],supports:{typography:{fontSize:!0}},example:{attributes:{columnCount:1,type:"ul",markerType:"normal",markerInnerColour:"#ff0000",markerColour:"#ff0000"},innerBlocks:[{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"Alice."}},{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"The White Rabbit."}},{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"The Cheshire Cat."}},{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"The Mad Hatter."}},{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"The Queen of Hearts."}}]}}}},C={};function x(o){var g=C[o];if(g!==void 0)return g.exports;var h=C[o]={exports:{}};return D[o](h,h.exports,x),h.exports}x.n=o=>{var g=o&&o.__esModule?()=>o.default:()=>o;return x.d(g,{a:g}),g},x.d=(o,g)=>{for(var h in g)x.o(g,h)&&!x.o(o,h)&&Object.defineProperty(o,h,{enumerable:!0,get:g[h]})},x.o=(o,g)=>Object.prototype.hasOwnProperty.call(o,g);var w={};return(()=>{"use strict";const o=window.ReactJSXRuntime,g=window.wp.blocks,h=window.wp.blockEditor,f=window.wp.components,Be=window.wp.coreData,ze=window.wp.data,q=window.wp.i18n,T=window.React;var $;function Se(e){return $("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:$("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function V(e){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,o.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,o.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,o.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const U=(0,T.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:r,size:l,isEditorMode:a=!1,...s}=n;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...s,children:(0,o.jsx)("use",{href:`${a?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${r}`})})}}});function J(e){return(0,o.jsx)(T.Suspense,{fallback:null,children:(0,o.jsx)(U,{...e})})}var y,B,c,R,z,X,Q,Z,M,K,A,Y,ee,H,O,S,te,oe,L,v,ne,re,le,ae,se,ie,j,G,ce,ue,de;function me(){(0,g.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:V})}function E(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Ne(e,t,n){const r=t.spacing?.blockGap;let l="none";if(r===!0)l="both";else if(Array.isArray(r)){const s=r.includes("horizontal"),d=r.includes("vertical");s&&d?l="both":s?l="horizontal":d&&(l="vertical")}const a={columnGap:l==="both"||l==="horizontal"?E(n?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?E(n?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:a};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...a}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...a}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...a}};default:return{className:`is-layout-${e.type}`,style:{...a}}}}function pe(e,t){return e.reduce((n,r)=>{if(r.name===t)n.push(r);else if(r.innerBlocks){const l=pe(r.innerBlocks,t);l&&n.push(...l)}return n},[])}const Pe=()=>{const e=j(()=>({per_page:-1}),[]),t=j(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=j(()=>({}),[]),{postTypes:r,taxonomies:l}=S(p=>{const{getEntityRecords:m}=p(O),b=m("root","postType",e),i=m("root","taxonomy",t);if(!i)return{postTypes:b,taxonomies:i};for(const k of i)n[k.slug]=m("taxonomy",k.slug);return{postTypes:b,taxonomies:i}},[e,t,n]),a=["attachment"],s=[],d=r?.filter(({viewable:p,slug:m})=>p&&!a.includes(m));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const p of d){const m=l?.filter(({types:b,slug:i})=>b.includes(p.slug)&&!s.includes(i));m&&(u[p.slug]=m.map(b=>{const i=n?.[b.slug]??null;return{...b,terms:i}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ie({list:e,containerClassName:t,renderItem:n}){return y(B,{children:[c("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),c("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(r=>n({listItem:r,buttonProps:{type:"button",className:`custom-multiple-select-list-item${r.isSelected?" is-selected":""}`}}))})]})}function he(e){return e.indexOf("data:image/svg+xml,")===0}function fe(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function ge(e){return e.indexOf("dashicons-")===0}function be({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return c("div",{className:"menu-icon","aria-hidden":"true",children:c("br",{})});if(he(e))return c("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:c("br",{})});if(fe(e))return c("img",{src:new URL(e).toString(),alt:""});if(ge(e)){const t=e.replace("dashicons-","");return c(Q,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const De={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function $e(){const[e,t,n,r]=R("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(r&&n&&n.length>0)for(const a of n)l[a.slug]={color:a.color,name:a.name};if(t&&t?.length>0)for(const a of t)l[a.slug]={color:a.color,name:a.name};if(e&&e?.length>0)for(const a of e)l[a.slug]={color:a.color,name:a.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:l}}function N({colours:e,attributesDefinition:t,attributes:n,setAttributes:r}){return(0,o.jsx)(f.__experimentalToolsPanel,{label:(0,q.__)("Custom colours","launchpad"),resetAll:l=>{if(l)for(const a of l)a()},children:(0,o.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>(0,o.jsx)(xe,{colour:l,attributesDefinition:t,attributes:n,setAttributes:r},l.attributeName))})})}function xe({colour:e,attributesDefinition:t,attributes:n,setAttributes:r}){const[l,a,s,d,u]=(0,h.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),p=()=>t[e.attributeName]?.default!==n[e.attributeName],m=()=>{r({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=(0,T.useRef)(null);return(0,o.jsx)(f.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:m,hasValue:p,onDeselect:m,label:e.label,isShownByDefault:!0,children:(0,o.jsx)(f.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:k})=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(f.Button,{ref:b,__next40pxDefaultSize:!0,onClick:k,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,o.jsx)(f.ColorIndicator,{colorValue:n[e.attributeName]})," ",(0,o.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,o.jsx)(f.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,o.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,o.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,o.jsx)(f.ColorPalette,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...a&&a?.length>0?[{name:"Theme",colors:a}]:[],...d&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:n[e.attributeName],onChange:i=>{r({[e.attributeName]:i})},disableCustomColors:!u})})})})})},e.attributeName)}function Re({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:r}){const[l,a,s]=R("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=a?.map(({name:i,ratio:k})=>({label:i,value:k}))??[],u=l?.map(({name:i,ratio:k})=>({label:i,value:k}))??[],p=[{label:L("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?u:[],...d||[],{label:L("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[m,b]=G(p.map(i=>i.value).includes(e)?e:"custom");return y(B,{children:[c(Z,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:v("Aspect ratio","launchpad-blocks"),options:p,value:m,onChange:i=>{b(i),i!=="custom"&&t(i)}}),m==="custom"?c(M,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:v("Custom aspect ratio","launchpad-blocks"),help:v("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&r!==void 0?y(K,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:v("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&r(i)},value:n,children:[c(A,{label:"Cover",value:"cover"}),c(A,{label:"Contain",value:"contain"})]}):null]})}const ve=(e,t,n,r)=>{const{getBlocksByName:l,getBlockAttributes:a,getBlockParentsByBlockName:s}=te(z);return l(r).some(u=>{if(s(u,"core/template-part",!0).length)return!1;const{[n]:p}=a(u);return e!==u&&t===p})};function Me(e,t,n,r,l){const{[t]:a}=e,s=ce(u=>ve(n,u,t,l),[n,t,l]);return ue(()=>{if(a===""){const u=n.slice(0,n.indexOf("-"));r({[t]:u})}if(s(a)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${a}. New value: ${u}`),r({[t]:u})}},[a,n,r,s,t]),j(()=>function({label:p,help:m,onValidChange:b,idAttribute:i}){const[k,_]=G(i);return c(M,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:p,help:typeof m=="function"?m(!s(k)):m,value:k,onChange:I=>{_(I),s(I)||b(I)}})},[s])}function Ae({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return c(Y,{label:v("Change title heading element","launchpad-blocks"),icon:F(t),controls:e.map(r=>{{const l=r===t;return{icon:F(r),title:ke(r),isDisabled:l,onClick:()=>n(r)}}})})}function ke(e){switch(e){case"h2":return v("Heading 2","launchpad-blocks");case"h3":return v("Heading 3","launchpad-blocks");case"h4":return v("Heading 4","launchpad-blocks");case"h5":return v("Heading 5","launchpad-blocks");case"h6":return v("Heading 6","launchpad-blocks");case"p":return v("Paragraph","launchpad-blocks")}}function F(e){switch(e){case"h2":return ne;case"h3":return re;case"h4":return le;case"h5":return ae;case"h6":return se;case"p":return ie}}function He(e){const{hasChildren:t}=S(n=>{const{getBlocks:r}=n(z);return{hasChildren:r(e).length>0}},[e]);return t}function Oe({clientId:e,blockInfo:t,variations:n,allowSkip:r}){const{replaceInnerBlocks:l,updateBlockAttributes:a}=oe(z);return y(ee,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[c("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":v("Block variations"),children:n.map(s=>y("li",{children:[c(H,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?c(be,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&a(e,s.attributes),s.innerBlocks&&l(e,X(s.innerBlocks),!1)}}),c("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),r&&c("div",{className:"block-editor-block-variation-picker__skip",children:c(H,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),a(e,{hasDismissedVariationsSelector:!0})},children:v("Skip")})})]})}function Le({imageId:e,className:t="",size:n="full"}){const r=S(a=>typeof e=="number"&&e>0?a(O).getEntityRecord?.("postType","attachment",e):void 0,[e]);return r?c(B,{children:c("img",{...(()=>{const a={src:r.source_url,className:`attachment-${n} size-${n} ${t}`,width:r.media_details.width,height:r.media_details.height,srcSet:""};return r.media_details?.sizes?.[n]&&(a.src=r.media_details.sizes[n].source_url,a.width=r.media_details.sizes[n].width,a.height=r.media_details.sizes[n].height),a.srcSet=Object.entries(r.media_details.sizes??{}).map(([s,d])=>`${d.source_url} ${d.width}w`).join(", "),a})(),alt:r.alt_text||""})}):null}function _e(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>_e(n))):t.push([]),t}function Ge(e){const t=de(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const a=t.current.style;a.minHeight="",t.current.setAttribute("style",`${a.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}var ye=x(9589),Ce=x.n(ye);const P={columnCount:{type:"integer",default:1},type:{type:"string",enum:["ul","ol"],default:"ul"},markerType:{type:"string",enum:["normal","icon"],default:"normal"},markerColour:{type:"string"},markerInnerColour:{type:"string"}};function W({attributes:e,setAttributes:t}){const{type:n,markerColour:r,markerType:l,markerInnerColour:a,columnCount:s}=e,d=n=="ul"?"ul":"ol",u=n==="ul"&&l==="normal",p=!!r,m=!!a&&!u,b=n==="ul"&&l==="icon",i=(0,h.useBlockProps)({style:{"--column-count":s,...p?{"--marker-colour":r}:{},...m?{"--marker-inner-colour":a}:{}},className:[p?"has-marker-colour":void 0,m?"has-marker-inner-colour":void 0,b?"should-have-icon":void 0].filter(Boolean).join(" ")}),k=(0,h.useInnerBlocksProps)(i,{template:[["launchpad-blocks/fancy-list-item"]],templateLock:!1});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.InspectorControls,{children:(0,o.jsx)(f.Panel,{children:(0,o.jsxs)(f.PanelBody,{title:"List options",children:[(0,o.jsx)(f.RangeControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,help:"Please select how many list items you want to show on a single row. It may be less than your selected value if there are space constraints.",initialPosition:1,label:"Max columns",max:10,min:1,onChange:_=>{t({columnCount:_})},allowReset:!0,value:s}),(0,o.jsxs)(f.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Type of list",onChange:_=>{typeof _=="string"&&["ul","ol"].includes(_)&&t({type:_})},value:n,children:[(0,o.jsx)(f.__experimentalToggleGroupControlOption,{label:"Bullet list",value:"ul"}),(0,o.jsx)(f.__experimentalToggleGroupControlOption,{label:"Numbered list",value:"ol"})]}),n==="ul"?(0,o.jsxs)(f.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Type of list marker",onChange:_=>{typeof _=="string"&&["normal","icon"].includes(_)&&t({markerType:_})},value:l,children:[(0,o.jsx)(f.__experimentalToggleGroupControlOption,{label:"Normal",value:"normal"}),(0,o.jsx)(f.__experimentalToggleGroupControlOption,{label:"Icon",value:"icon"})]}):null]})})}),(0,o.jsx)(h.InspectorControls,{group:"styles",children:n==="ul"?l==="normal"?(0,o.jsx)(N,{colours:[{attributeName:"markerColour",label:"Marker colour"}],attributes:e,attributesDefinition:P,setAttributes:t}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N,{colours:[{attributeName:"markerColour",label:"Background colour"},{attributeName:"markerInnerColour",label:"Icon colour"}],attributes:e,attributesDefinition:P,setAttributes:t}),(0,o.jsx)(h.ContrastChecker,{backgroundColor:r,textColor:a})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N,{colours:[{attributeName:"markerColour",label:"Background colour"},{attributeName:"markerInnerColour",label:"Number colour"}],attributes:e,attributesDefinition:P,setAttributes:t}),(0,o.jsx)(h.ContrastChecker,{backgroundColor:r,textColor:a})]})}),(0,o.jsx)(d,{...k})]})}W.displayName="FancyListEdit";function we({hasInnerBlocks:e}){return e?Te:je}function je(){return null}function Te(){return(0,o.jsx)(h.InnerBlocks.Content,{})}const Ee={"launchpad-blocks/fancyListType":"type","launchpad-blocks/fancyListMarkerType":"markerType"},Fe=null;(0,g.registerBlockType)(Ce().name,{icon:(0,o.jsx)(J,{iconName:"list"}),edit:W,save:we({hasInnerBlocks:!0})}),me()})(),w})());
