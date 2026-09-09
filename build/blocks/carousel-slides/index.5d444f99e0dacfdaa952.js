(function(N,k){if(typeof exports=="object"&&typeof module=="object")module.exports=k();else if(typeof define=="function"&&define.amd)define([],k);else{var $=k();for(var c in $)(typeof exports=="object"?exports:N)[c]=$[c]}})(globalThis,()=>(()=>{var W={7192(c){c.exports={apiVersion:3,name:"launchpad-blocks/carousel-slides",title:"Carousel image slides",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel","launchpad-blocks/gallery-carousel"],allowedBlocks:["core/image"],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{allowResize:{type:"boolean",default:!1},aspectRatio:{type:"string",default:"auto"},imageFit:{type:"string",enum:["cover","contain"],default:"cover"},shouldPullImagesFromContext:{type:"boolean",default:!1},captionBackground:{type:"string"}},providesContext:{allowResize:"allowResize"},usesContext:["launchpad-blocks/carouselImages","launchpad-blocks/shouldLinkSlidesToLightbox"],supports:{color:{link:!0}}}}},N={};function k(c){var v=N[c];if(v!==void 0)return v.exports;var l=N[c]={exports:{}};return W[c](l,l.exports,k),l.exports}k.n=c=>{var v=c&&c.__esModule?()=>c.default:()=>c;return k.d(v,{a:v}),v},k.d=(c,v)=>{for(var l in v)k.o(v,l)&&!k.o(c,l)&&Object.defineProperty(c,l,{enumerable:!0,get:v[l]})},k.o=(c,v)=>Object.prototype.hasOwnProperty.call(c,v);var $={};return(()=>{"use strict";const c=window.wp.blocks,v=window.wp.primitives,l=window.ReactJSXRuntime,q=(0,l.jsx)(v.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(v.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})});var re=k(7192),V=k.n(re);const se=[],w=window.wp.blockEditor,b=window.wp.components,U=window.wp.data,y=window.wp.i18n,O=window.React;function Ve(e){if(e===void 0)throw new Error(`Pixel value ${e} is undefined`);if(!e.endsWith("px"))throw new Error(`Pixel value ${e} is not a pixel value`);if(e.includes(" "))throw new Error(`Pixel value ${e} contains multiple values`);return Number(e.replace("px",""))}function Ue(e){let t="";const n=document.createElement("div");return n.innerHTML=e,t=n.innerText,le(t)}function le(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|(?<!-)-+$/g,"")}function ae(e,t=()=>!0){const n=e.parentElement;return n===null?null:t(n)?n:ae(n,t)}function Xe(e){if(new RegExp("ms$","ig").test(e))return Number(e.substring(0,e.length-2));if(new RegExp("s$","ig").test(e))return Number(e.substring(0,e.length-1))*1e3;throw new Error("Time didn't end with ms or s so was not correctly parsed.")}function Ze(){if(typeof document>"u")return"unknown";const e=window.navigator.userAgent;let t="unknown";return e.search("Windows")!==-1?t="Windows":e.search("Mac")!==-1?t="MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?t="UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1&&(t="Linux"),t}function X(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!Object.entries(e[n]).every(([r,s])=>Array.isArray(s)?X(s,t[n]?.[r]):t[n]?.[r]===s))return!1;return!0}const Je=window.wp.coreData;var E,Z,f,ie,L,ce,ue,de,pe,me,J,K,H,ge,he,B,fe,be,xe,ve,_e,ke,z,we,ye,Ce,je;function Q(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Ke(e,t,n){const o=t.spacing?.blockGap;let r="none";if(o===!0)r="both";else if(Array.isArray(o)){const a=o.includes("horizontal"),p=o.includes("vertical");a&&p?r="both":a?r="horizontal":p&&(r="vertical")}const s={columnGap:r==="both"||r==="horizontal"?Q(n?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?Q(n?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function Be(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const r=Be(o.innerBlocks,t);r&&n.push(...r)}return n},[])}const Qe=()=>{const e=z(()=>({per_page:-1}),[]),t=z(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=z(()=>({}),[]),{postTypes:o,taxonomies:r}=H(h=>{const{getEntityRecords:g}=h(K),m=g("root","postType",e),i=g("root","taxonomy",t);if(!i)return{postTypes:m,taxonomies:i};for(const _ of i)n[_.slug]=g("taxonomy",_.slug);return{postTypes:m,taxonomies:i}},[e,t,n]),s=["attachment"],a=[],p=o?.filter(({viewable:h,slug:g})=>h&&!s.includes(g));if(!p||p.length===0)return{postTypes:p,taxonomies:void 0};const u={};for(const h of p){const g=r?.filter(({types:m,slug:i})=>m.includes(h.slug)&&!a.includes(i));g&&(u[h.slug]=g.map(m=>{const i=n?.[m.slug]??null;return{...m,terms:i}}))}return{filteredPostTypes:p,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ye({list:e,containerClassName:t,renderItem:n}){return E(Z,{children:[f("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),f("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function Se(e){return e.indexOf("data:image/svg+xml,")===0}function Pe(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function Te(e){return e.indexOf("dashicons-")===0}function Re({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return f("div",{className:"menu-icon","aria-hidden":"true",children:f("br",{})});if(Se(e))return f("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:f("br",{})});if(Pe(e))return f("img",{src:new URL(e).toString(),alt:""});if(Te(e)){const t=e.replace("dashicons-","");return f(ue,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const et={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function tt(){const[e,t,n,o]=ie("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(o&&n&&n.length>0)for(const s of n)r[s.slug]={color:s.color,name:s.name};if(t&&t?.length>0)for(const s of t)r[s.slug]={color:s.color,name:s.name};if(e&&e?.length>0)for(const s of e)r[s.slug]={color:s.color,name:s.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:r}}function Ie({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return(0,l.jsx)(b.__experimentalToolsPanel,{label:(0,y.__)("Custom colours","launchpad"),resetAll:r=>{if(r)for(const s of r)s()},children:(0,l.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>(0,l.jsx)(Ne,{colour:r,attributesDefinition:t,attributes:n,setAttributes:o},r.attributeName))})})}function Ne({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[r,s,a,p,u]=(0,w.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==n[e.attributeName],g=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},m=(0,O.useRef)(null);return(0,l.jsx)(b.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:g,hasValue:h,onDeselect:g,label:e.label,isShownByDefault:!0,children:(0,l.jsx)(b.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:_})=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(b.Button,{ref:m,__next40pxDefaultSize:!0,onClick:_,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,l.jsx)(b.ColorIndicator,{colorValue:n[e.attributeName]})," ",(0,l.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,l.jsx)(b.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,l.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,l.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,l.jsx)(b.ColorPalette,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...p&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:n[e.attributeName],onChange:i=>{o({[e.attributeName]:i})},disableCustomColors:!u})})})})})},e.attributeName)}function $e({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[r,s,a]=(0,w.useSettings)("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),p=s?.map(({name:i,ratio:_})=>({label:i,value:_}))??[],u=r?.map(({name:i,ratio:_})=>({label:i,value:_}))??[],h=[{label:(0,y._x)("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?u:[],...p||[],{label:(0,y._x)("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[g,m]=(0,O.useState)(h.map(i=>i.value).includes(e)?e:"custom");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,y.__)("Aspect ratio","launchpad-blocks"),options:h,value:g,onChange:i=>{m(i),i!=="custom"&&t(i)}}),g==="custom"?(0,l.jsx)(b.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,y.__)("Custom aspect ratio","launchpad-blocks"),help:(0,y.__)("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?(0,l.jsxs)(b.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:(0,y.__)("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&o(i)},value:n,children:[(0,l.jsx)(b.__experimentalToggleGroupControlOption,{label:"Cover",value:"cover"}),(0,l.jsx)(b.__experimentalToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const ze=(e,t,n,o)=>{const{getBlocksByName:r,getBlockAttributes:s,getBlockParentsByBlockName:a}=ge(L);return r(o).some(u=>{if(a(u,"core/template-part",!0).length)return!1;const{[n]:h}=s(u);return e!==u&&t===h})};function nt(e,t,n,o,r){const{[t]:s}=e,a=we(u=>ze(n,u,t,r),[n,t,r]);return ye(()=>{if(s===""){const u=n.slice(0,n.indexOf("-"));o({[t]:u})}if(a(s)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${s}. New value: ${u}`),o({[t]:u})}},[s,n,o,a,t]),z(()=>function({label:h,help:g,onValidChange:m,idAttribute:i}){const[_,M]=Ce(i);return f(de,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof g=="function"?g(!a(_)):g,value:_,onChange:T=>{M(T),a(T)||m(T)}})},[a])}function ot({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return f(pe,{label:B("Change title heading element","launchpad-blocks"),icon:Y(t),controls:e.map(o=>{{const r=o===t;return{icon:Y(o),title:Ae(o),isDisabled:r,onClick:()=>n(o)}}})})}function Ae(e){switch(e){case"h2":return B("Heading 2","launchpad-blocks");case"h3":return B("Heading 3","launchpad-blocks");case"h4":return B("Heading 4","launchpad-blocks");case"h5":return B("Heading 5","launchpad-blocks");case"h6":return B("Heading 6","launchpad-blocks");case"p":return B("Paragraph","launchpad-blocks")}}function Y(e){switch(e){case"h2":return fe;case"h3":return be;case"h4":return xe;case"h5":return ve;case"h6":return _e;case"p":return ke}}function rt(e){const{hasChildren:t}=H(n=>{const{getBlocks:o}=n(L);return{hasChildren:o(e).length>0}},[e]);return t}function st({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:r,updateBlockAttributes:s}=he(L);return E(me,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[f("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":B("Block variations"),children:n.map(a=>E("li",{children:[f(J,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?f(Re,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&s(e,a.attributes),a.innerBlocks&&r(e,ce(a.innerBlocks),!1)}}),f("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),o&&f("div",{className:"block-editor-block-variation-picker__skip",children:f(J,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:B("Skip")})})]})}function lt({imageId:e,className:t="",size:n="full"}){const o=H(s=>typeof e=="number"&&e>0?s(K).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?f(Z,{children:f("img",{...(()=>{const s={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(s.src=o.media_details.sizes[n].source_url,s.width=o.media_details.sizes[n].width,s.height=o.media_details.sizes[n].height),s.srcSet=Object.entries(o.media_details.sizes??{}).map(([a,p])=>`${p.source_url} ${p.width}w`).join(", "),s})(),alt:o.alt_text||""})}):null}function De(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>De(n))):t.push([]),t}function at(e){const t=je(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const s=t.current.style;s.minHeight="",t.current.setAttribute("style",`${s.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}const Oe={allowResize:{type:"boolean",default:!1},aspectRatio:{type:"string",default:"auto"},imageFit:{type:"string",enum:["cover","contain"],default:"cover"},shouldPullImagesFromContext:{type:"boolean",default:!1},captionBackground:{type:"string"}};function ee({clientId:e,attributes:t,setAttributes:n,context:o}){const{aspectRatio:r,imageFit:s,shouldPullImagesFromContext:a,captionBackground:p}=t,u=(0,w.useBlockProps)({className:r!=="auto"?"has-aspect-ratio":"",style:{"--slide-aspect-ratio":r,"--slide-image-fit":r!=="auto"?s:void 0,"--caption-background":p}}),h=o["launchpad-blocks/shouldLinkSlidesToLightbox"],{hasChildren:g,innerBlockImages:m,parentCarousel:i,associatedLightboxBlockId:_}=(0,U.useSelect)(d=>{const{getBlock:j,getBlocks:P,getBlockParentsByBlockName:oe}=d(w.store),R=P(e),A=oe(e,["launchpad-blocks/carousel","launchpad-blocks/gallery-carousel"])[0],x=j(A);function C(D,S){const G=[];S=Array.isArray(S)?S:[S];for(const I of D)S.includes(I.name)&&G.push(I.clientId),I.innerBlocks&&I.innerBlocks.length>0&&G.push(...C(I.innerBlocks,S));return G}return{hasChildren:R.length>0,innerBlockImages:R,parentCarousel:x,associatedLightboxBlockId:h?C(P(A),"launchpad-blocks/gallery-carousel-lightbox")[0]??null:null}},[e,h]),{replaceInnerBlocks:M,selectBlock:T,updateBlockAttributes:F}=(0,U.useDispatch)(w.store);function te(d){return d.map(j=>({id:j.attributes.id,url:j.attributes.url}))}function ne(d){const j=d.reduce((x,C,D)=>(x[C.id]=D,x),{}),P=m.filter(x=>d.find(C=>C.id===x.attributes?.id)),R=d.filter(x=>!P.find(C=>x.id===C.attributes?.id)).map(x=>(0,c.createBlock)("core/image",{id:x.id,url:x.url,caption:x.caption,alt:x.alt,sizeSlug:"full"})),A=P.map(x=>{const{validationIssues:C,originalContent:D,...S}=x;return S}).concat(R).sort((x,C)=>j[x.attributes?.id]-j[C.attributes?.id]);M(e,A),R?.length>0&&T(R[0].clientId)}(0,O.useEffect)(()=>{if(a)return;const d=te(m);X(i.attributes?.images,d)||(F(i.clientId,{images:d}),F(i.clientId,{slides:m}))},[m,i,a,F]);const{children:Ge,...We}=(0,w.useInnerBlocksProps)(u);return(0,l.jsxs)(l.Fragment,{children:[a?null:(0,l.jsx)(w.BlockControls,{group:"other",children:(0,l.jsx)(w.MediaReplaceFlow,{allowedTypes:["image"],accept:"image/*",onSelect:ne,name:m.length===0?(0,y.__)("Add","launchpad-blocks"):(0,y.__)("Replace","launchpad-blocks"),multiple:!0,mediaIds:te(m).filter(d=>d.id).map(d=>d.id),addToGallery:m.length>0})}),(0,l.jsx)(w.InspectorControls,{group:"styles",children:(0,l.jsx)(Ie,{colours:[{attributeName:"captionBackground",label:"Caption background colour"}],attributes:t,attributesDefinition:Oe,setAttributes:n})}),(0,l.jsxs)(w.InspectorControls,{children:[(0,l.jsx)(b.Panel,{children:(0,l.jsx)(b.PanelBody,{children:(0,l.jsx)($e,{ratioValue:r,ratioOnChange:d=>{n({aspectRatio:d})},imageFitValue:s,imageFitOnChange:d=>{n({imageFit:d})}})})}),h&&_?(0,l.jsx)(b.Panel,{children:(0,l.jsx)(b.PanelBody,{children:(0,l.jsx)(b.Button,{type:"button",variant:"primary",onClick:()=>{T(_)},children:"Edit lightbox"})})}):null]}),(0,l.jsx)("div",{...We,children:g?Ge:a?o["launchpad-blocks/carouselImages"].length?o["launchpad-blocks/carouselImages"].map(({id:d,url:j,alt:P})=>(0,l.jsx)("figure",{className:"wp-block-image",children:(0,l.jsx)("img",{src:j,alt:P,className:d?`wp-image-${d}`:""})},d??j)):(0,l.jsx)("figure",{className:"wp-block-image",children:(0,l.jsx)("img",{src:"https://picsum.photos/id/237/2000/1600",alt:""})}):(0,l.jsx)(w.MediaPlaceholder,{icon:q,labels:{title:(0,y.__)("Carousel slides","launchpad-blocks"),instructions:(0,y.__)("Drag and drop images, upload, or choose from your library.","launchpad-blocks")},onSelect:ne,accept:"image/*",allowedTypes:["image"],multiple:!0,addToGallery:!1})})]})}ee.displayName="CarouselSlidesEdit";function Ee({hasInnerBlocks:e}){return e?He:Le}function Le(){return null}function He(){return(0,l.jsx)(w.InnerBlocks.Content,{})}const Me={from:[],to:[]},Fe=[],it={allowResize:"allowResize"},ct=null;(0,c.registerBlockType)(V().name,{icon:q,deprecated:se,edit:ee,save:Ee({hasInnerBlocks:!0}),transforms:Me}),Fe.forEach(e=>{(0,c.registerBlockVariation)(V().name,e)})})(),$})());
