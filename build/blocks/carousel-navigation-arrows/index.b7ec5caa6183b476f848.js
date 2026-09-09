(function(S,k){if(typeof exports=="object"&&typeof module=="object")module.exports=k();else if(typeof define=="function"&&define.amd)define([],k);else{var N=k();for(var n in N)(typeof exports=="object"?exports:S)[n]=N[n]}})(globalThis,()=>(()=>{var O={7749(n){n.exports={apiVersion:3,name:"launchpad-blocks/carousel-navigation-arrows",title:"Carousel navigation arrows",category:"theme",description:"",textdomain:"launchpad-blocks",allowedBlocks:["launchpad-blocks/carousel-thumbnails","launchpad-blocks/carousel-dots","launchpad-blocks/carousel-slide-count"],parent:["launchpad-blocks/carousel"],keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",styles:[{name:"normal",label:"Normal",isDefault:!0},{name:"overlay",label:"Overlay"}],attributes:{prevText:{type:"string",default:"Go to previous slide"},nextText:{type:"string",default:"Go to next slide"},prevVisualText:{type:"string",default:"Previous"},nextVisualText:{type:"string",default:"Next"},shouldShowTextVisually:{type:"boolean",default:!0},backgroundColour:{type:"string",default:"black"},iconColour:{type:"string",default:"white"},prevIcon:{type:"object",default:{iconName:"chevron-left",library:"launchpad-blocks"}},nextIcon:{type:"object",default:{iconName:"chevron-right",library:"launchpad-blocks"}}},providesContext:{},usesContext:["launchpad-blocks/currentlySelectedSlide","launchpad-blocks/carouselSlides","launchpad-blocks/carouselImages"],example:{},supports:{align:!0,layout:{default:{type:"constrained"},allowCustomContentAndWideSize:!1}}}}},S={};function k(n){var b=S[n];if(b!==void 0)return b.exports;var x=S[n]={exports:{}};return O[n](x,x.exports,k),x.exports}k.n=n=>{var b=n&&n.__esModule?()=>n.default:()=>n;return k.d(b,{a:b}),b},k.d=(n,b)=>{for(var x in b)k.o(b,x)&&!k.o(n,x)&&Object.defineProperty(n,x,{enumerable:!0,get:b[x]})},k.o=(n,b)=>Object.prototype.hasOwnProperty.call(n,b);var N={};return(()=>{"use strict";const n=window.ReactJSXRuntime,b=window.wp.blocks,x=window.React,ne=(0,x.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:a,size:l,isEditorMode:r=!1,...s}=o;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...s,children:(0,n.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${a}`})})}}});function H(e){return(0,n.jsx)(x.Suspense,{fallback:null,children:(0,n.jsx)(ne,{...e})})}var oe=k(7749),M=k.n(oe);const ae=[],_=window.wp.blockEditor,h=window.wp.components,P=window.wp.data,y=window.wp.i18n,Qe=window.wp.coreData;var j,$,m,V,z,le,re,se,E,ie,L,ce,ue,G,U,D,de,pe,W,w,me,he,ge,fe,be,xe,T,F,ve,ke,we;function q(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Ye(e,t,o){const a=t.spacing?.blockGap;let l="none";if(a===!0)l="both";else if(Array.isArray(a)){const s=a.includes("horizontal"),c=a.includes("vertical");s&&c?l="both":s?l="horizontal":c&&(l="vertical")}const r={columnGap:l==="both"||l==="horizontal"?q(o?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?q(o?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function _e(e,t){return e.reduce((o,a)=>{if(a.name===t)o.push(a);else if(a.innerBlocks){const l=_e(a.innerBlocks,t);l&&o.push(...l)}return o},[])}const Ze=()=>{const e=T(()=>({per_page:-1}),[]),t=T(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=T(()=>({}),[]),{postTypes:a,taxonomies:l}=D(p=>{const{getEntityRecords:u}=p(U),g=u("root","postType",e),i=u("root","taxonomy",t);if(!i)return{postTypes:g,taxonomies:i};for(const v of i)o[v.slug]=u("taxonomy",v.slug);return{postTypes:g,taxonomies:i}},[e,t,o]),r=["attachment"],s=[],c=a?.filter(({viewable:p,slug:u})=>p&&!r.includes(u));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const d={};for(const p of c){const u=l?.filter(({types:g,slug:i})=>g.includes(p.slug)&&!s.includes(i));u&&(d[p.slug]=u.map(g=>{const i=o?.[g.slug]??null;return{...g,terms:i}}))}return{filteredPostTypes:c,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function et({list:e,containerClassName:t,renderItem:o}){return j($,{children:[m("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),m("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(a=>o({listItem:a,buttonProps:{type:"button",className:`custom-multiple-select-list-item${a.isSelected?" is-selected":""}`}}))})]})}function ye(e){return e.indexOf("data:image/svg+xml,")===0}function Ce(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function je(e){return e.indexOf("dashicons-")===0}function Se({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return m("div",{className:"menu-icon","aria-hidden":"true",children:m("br",{})});if(ye(e))return m("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:m("br",{})});if(Ce(e))return m("img",{src:new URL(e).toString(),alt:""});if(je(e)){const t=e.replace("dashicons-","");return m(re,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const tt={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function nt(){const[e,t,o,a]=V("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(a&&o&&o.length>0)for(const r of o)l[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)l[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)l[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:l}}function Ne({colours:e,attributesDefinition:t,attributes:o,setAttributes:a}){return(0,n.jsx)(h.__experimentalToolsPanel,{label:(0,y.__)("Custom colours","launchpad"),resetAll:l=>{if(l)for(const r of l)r()},children:(0,n.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>(0,n.jsx)(Te,{colour:l,attributesDefinition:t,attributes:o,setAttributes:a},l.attributeName))})})}function Te({colour:e,attributesDefinition:t,attributes:o,setAttributes:a}){const[l,r,s,c,d]=(0,_.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),p=()=>t[e.attributeName]?.default!==o[e.attributeName],u=()=>{a({[e.attributeName]:t[e.attributeName]?.default??void 0})},g=(0,x.useRef)(null);return(0,n.jsx)(h.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:u,hasValue:p,onDeselect:u,label:e.label,isShownByDefault:!0,children:(0,n.jsx)(h.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:v})=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(h.Button,{ref:g,__next40pxDefaultSize:!0,onClick:v,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,n.jsx)(h.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,n.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,n.jsx)(h.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,n.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,n.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,n.jsx)(h.ColorPalette,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...c&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:o[e.attributeName],onChange:i=>{a({[e.attributeName]:i})},disableCustomColors:!d})})})})})},e.attributeName)}function ot({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:a}){const[l,r,s]=V("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=r?.map(({name:i,ratio:v})=>({label:i,value:v}))??[],d=l?.map(({name:i,ratio:v})=>({label:i,value:v}))??[],p=[{label:W("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?d:[],...c||[],{label:W("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[u,g]=F(p.map(i=>i.value).includes(e)?e:"custom");return j($,{children:[m(se,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:w("Aspect ratio","launchpad-blocks"),options:p,value:u,onChange:i=>{g(i),i!=="custom"&&t(i)}}),u==="custom"?m(E,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:w("Custom aspect ratio","launchpad-blocks"),help:w("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&a!==void 0?j(ie,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:w("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&a(i)},value:o,children:[m(L,{label:"Cover",value:"cover"}),m(L,{label:"Contain",value:"contain"})]}):null]})}const Ie=(e,t,o,a)=>{const{getBlocksByName:l,getBlockAttributes:r,getBlockParentsByBlockName:s}=de(z);return l(a).some(d=>{if(s(d,"core/template-part",!0).length)return!1;const{[o]:p}=r(d);return e!==d&&t===p})};function at(e,t,o,a,l){const{[t]:r}=e,s=ve(d=>Ie(o,d,t,l),[o,t,l]);return ke(()=>{if(r===""){const d=o.slice(0,o.indexOf("-"));a({[t]:d})}if(s(r)){const d=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${d}`),a({[t]:d})}},[r,o,a,s,t]),T(()=>function({label:p,help:u,onValidChange:g,idAttribute:i}){const[v,R]=F(i);return m(E,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:p,help:typeof u=="function"?u(!s(v)):u,value:v,onChange:C=>{R(C),s(C)||g(C)}})},[s])}function lt({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return m(ce,{label:w("Change title heading element","launchpad-blocks"),icon:J(t),controls:e.map(a=>{{const l=a===t;return{icon:J(a),title:Be(a),isDisabled:l,onClick:()=>o(a)}}})})}function Be(e){switch(e){case"h2":return w("Heading 2","launchpad-blocks");case"h3":return w("Heading 3","launchpad-blocks");case"h4":return w("Heading 4","launchpad-blocks");case"h5":return w("Heading 5","launchpad-blocks");case"h6":return w("Heading 6","launchpad-blocks");case"p":return w("Paragraph","launchpad-blocks")}}function J(e){switch(e){case"h2":return me;case"h3":return he;case"h4":return ge;case"h5":return fe;case"h6":return be;case"p":return xe}}function rt(e){const{hasChildren:t}=D(o=>{const{getBlocks:a}=o(z);return{hasChildren:a(e).length>0}},[e]);return t}function st({clientId:e,blockInfo:t,variations:o,allowSkip:a}){const{replaceInnerBlocks:l,updateBlockAttributes:r}=pe(z);return j(ue,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[m("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":w("Block variations"),children:o.map(s=>j("li",{children:[m(G,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?m(Se,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&r(e,s.attributes),s.innerBlocks&&l(e,le(s.innerBlocks),!1)}}),m("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),a&&m("div",{className:"block-editor-block-variation-picker__skip",children:m(G,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:w("Skip")})})]})}function it({imageId:e,className:t="",size:o="full"}){const a=D(r=>typeof e=="number"&&e>0?r(U).getEntityRecord?.("postType","attachment",e):void 0,[e]);return a?m($,{children:m("img",{...(()=>{const r={src:a.source_url,className:`attachment-${o} size-${o} ${t}`,width:a.media_details.width,height:a.media_details.height,srcSet:""};return a.media_details?.sizes?.[o]&&(r.src=a.media_details.sizes[o].source_url,r.width=a.media_details.sizes[o].width,r.height=a.media_details.sizes[o].height),r.srcSet=Object.entries(a.media_details.sizes??{}).map(([s,c])=>`${c.source_url} ${c.width}w`).join(", "),r})(),alt:a.alt_text||""})}):null}function Pe(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Pe(o))):t.push([]),t}function ct(e){const t=we(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}const $e=window.wp.hooks,K=window.wp.element;function ze({icon:e,size:t=24,...o},a){return(0,K.cloneElement)(e,{width:t,height:t,...o,ref:a})}const De=(0,K.forwardRef)(ze),I=window.wp.primitives,Ae=(0,n.jsx)(I.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(I.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),Re=(0,n.jsx)(I.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(I.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),Oe={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,y.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,y.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,y.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,y.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0},lightbox:{title:(0,y.__)("Lightbox","launchpad-blocks")}},He={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,t)=>(0,n.jsx)(H,{iconName:e,isEditorMode:!0,...t}),availableIcons:Object.fromEntries(Object.entries(Oe).filter(([e,t])=>t.makeAvailableToUser===!0))}};function X(){return(0,$e.applyFilters)("launchpadBlocks.icons",{...He})}function Q({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:t,onIconSelect:o,onReset:a}){const l=X(),[r,s]=(0,x.useState)("");return(0,n.jsxs)(h.Panel,{children:[(0,n.jsxs)(h.PanelHeader,{children:[e," ",a?(0,n.jsx)(h.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{a()},size:"small",children:"Reset"}):null]}),(0,n.jsxs)(h.PanelBody,{children:[(0,n.jsx)(h.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:r,onChange:c=>{s(c)}}),(0,n.jsx)("div",{children:Object.entries(l).map(([c,d])=>{if(Object.keys(d.availableIcons).length===0)return null;const p=Object.entries(d.availableIcons).filter(([u,{title:g}])=>!!(u.includes(r)||g.includes(r)));return(0,n.jsx)(Me,{name:d.name,iconCount:p.length,children:(0,n.jsx)("div",{className:`icon-select ${c}-icon-select`,children:p.map(([u,{title:g}])=>{const i=t.iconName===u&&t.library===c;return(0,n.jsx)("button",{className:`icon-select-icon ${c}-icon-select-icon ${c}-icon-select-icon-${u}${i?" is-selected":""}`,onClick:()=>{o({iconName:u,library:c})},title:g,children:d.renderIcon(u)},u)})})},c)})})]})]})}function Me({name:e,iconCount:t,children:o}){const[a,l]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{t===0&&a&&l(!1)},[a,t]),(0,n.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,n.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,n.jsxs)(h.Button,{type:"button","aria-expanded":a,onClick:()=>{t>0&&l(!a)},disabled:t===0,className:"icon-select-group-accordion-header-button",children:[(0,n.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,n.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:t}),(0,n.jsx)(De,{className:"icon-select-group-accordion-arrow",icon:a?Ae:Re})]})}),a?o:null]})}const A={prevText:{type:"string",default:"Go to previous slide"},nextText:{type:"string",default:"Go to next slide"},prevVisualText:{type:"string",default:"Previous"},nextVisualText:{type:"string",default:"Next"},shouldShowTextVisually:{type:"boolean",default:!0},backgroundColour:{type:"string",default:"black"},iconColour:{type:"string",default:"white"},prevIcon:{type:"object",default:{iconName:"chevron-left",library:"launchpad-blocks"}},nextIcon:{type:"object",default:{iconName:"chevron-right",library:"launchpad-blocks"}}};function Y({clientId:e,attributes:t,setAttributes:o,context:a,isSelected:l}){const{prevText:r,nextText:s,prevVisualText:c,nextVisualText:d,shouldShowTextVisually:p,backgroundColour:u,iconColour:g,prevIcon:i,nextIcon:v,className:R}=t,C=a["launchpad-blocks/currentlySelectedSlide"],Z=a["launchpad-blocks/carouselSlides"]!==void 0&&a["launchpad-blocks/carouselSlides"].length>0?a["launchpad-blocks/carouselSlides"].length:a["launchpad-blocks/carouselImages"].length,We=(0,P.useSelect)(f=>f(_.store).hasSelectedInnerBlock(e,!0),[e]),{updateBlockAttributes:ee}=(0,P.useDispatch)(_.store),{parentCarouselClientId:B}=(0,P.useSelect)(f=>{const{getBlockParentsByBlockName:Xe}=f(_.store);return{parentCarouselClientId:Xe(e,"launchpad-blocks/carousel").at(-1)}},[e]),Fe=(0,_.useBlockProps)({style:{"--background-colour":u,"--icon-colour":g}}),qe=!R?.includes("is-style-overlay")&&(l||We),{children:Je,...Ke}=(0,_.useInnerBlocksProps)(Fe,{orientation:"horizontal",renderAppender:qe?_.InnerBlocks.ButtonBlockAppender:()=>null}),te=X();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_.InspectorControls,{group:"styles",children:(0,n.jsx)(Ne,{colours:[{attributeName:"backgroundColour",label:"Background colour"},{attributeName:"iconColour",label:"Icon colour"}],attributes:t,attributesDefinition:A,setAttributes:o})}),(0,n.jsxs)(_.InspectorControls,{children:[(0,n.jsxs)(h.Panel,{children:[(0,n.jsx)(h.PanelBody,{children:(0,n.jsx)(h.ToggleControl,{__nextHasNoMarginBottom:!0,label:"Show text labels in buttons",onChange:f=>{o({shouldShowTextVisually:f})},checked:p})}),(0,n.jsxs)(h.PanelBody,{title:"Accessibility",children:[(0,n.jsx)(h.TextControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Previous button screen reader label",onChange:f=>{o({prevText:f})},value:r}),(0,n.jsx)(h.TextControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Next button screen reader label",onChange:f=>{o({nextText:f})},value:s})]})]}),(0,n.jsx)(Q,{iconSelectHeader:"Previous icon",dataOnSelectedIcon:i,onIconSelect:f=>{o({prevIcon:f})},onReset:()=>{o({prevIcon:A.prevIcon.default})}}),(0,n.jsx)(Q,{iconSelectHeader:"Next icon",dataOnSelectedIcon:v,onIconSelect:f=>{o({nextIcon:f})},onReset:()=>{o({nextIcon:A.nextIcon.default})}})]}),(0,n.jsx)("div",{...Ke,children:(0,n.jsxs)("div",{className:"carousel-navigation-arrows-container",children:[(0,n.jsxs)("button",{className:`carousel-navigation-button${p?" has-text":""}`,onClick:()=>{B&&ee(B,{currentlySelectedSlide:C>0?C-1:Z-1})},children:[te[i.library]?.renderIcon(i.iconName,{className:"carousel-navigation-button-icon"}),p?(0,n.jsx)(_.RichText,{identifier:"prevVisualText",tagName:"span",onChange:f=>{o({prevVisualText:f})},value:c,placeholder:(0,y.__)("Previous","launchpad-blocks")}):null]}),(0,n.jsx)("div",{className:"carousel-navigation-inner-area",children:Je}),(0,n.jsxs)("button",{className:`carousel-navigation-button${p?" has-text":""}`,onClick:()=>{B&&ee(B,{currentlySelectedSlide:C<Z-1?C+1:0})},children:[p?(0,n.jsx)(_.RichText,{identifier:"nextVisualText",tagName:"span",onChange:f=>{o({nextVisualText:f})},value:d,placeholder:(0,y.__)("Next","launchpad-blocks")}):null,te[v.library]?.renderIcon(v.iconName,{className:"carousel-navigation-button-icon"})]})]})})]})}Y.displayName="CarouselNavigationArrowsEdit";function Ve({hasInnerBlocks:e}){return e?Le:Ee}function Ee(){return null}function Le(){return(0,n.jsx)(_.InnerBlocks.Content,{})}const Ge={from:[],to:[]},Ue=[],pt={},mt=null;(0,b.registerBlockType)(M().name,{icon:(0,n.jsx)(H,{iconName:"carousel-navigation-arrows"}),deprecated:ae,edit:Y,save:Ve({hasInnerBlocks:!0}),transforms:Ge}),Ue.forEach(e=>{(0,b.registerBlockVariation)(M().name,e)})})(),N})());
