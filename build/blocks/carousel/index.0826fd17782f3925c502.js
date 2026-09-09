(function(S,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var B=v();for(var s in B)(typeof exports=="object"?exports:S)[s]=B[s]}})(globalThis,()=>(()=>{var M={4615(s){s.exports={apiVersion:3,name:"launchpad-blocks/carousel",title:"Carousel",category:"theme",description:"",textdomain:"launchpad-blocks",allowedBlocks:["launchpad-blocks/carousel-slides","launchpad-blocks/carousel-content-slides","launchpad-blocks/carousel-thumbnails","launchpad-blocks/carousel-navigation-arrows","launchpad-blocks/carousel-dots","launchpad-blocks/carousel-slide-count","launchpad-blocks/lightbox"],keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{images:{type:"array",default:[]},shouldLoop:{type:"boolean",default:!0},shouldLinkSlidesToLightbox:{type:"boolean",default:!1},slides:{type:"array",default:[]},currentlySelectedSlide:{type:"number",default:0,role:"local"},externallyControlledCarousel:{type:"boolean",default:!1}},providesContext:{"launchpad-blocks/carouselImages":"images","launchpad-blocks/carouselSlides":"slides","launchpad-blocks/shouldLinkSlidesToLightbox":"shouldLinkSlidesToLightbox","launchpad-blocks/currentlySelectedSlide":"currentlySelectedSlide"},usesContext:["launchpad-blocks/carouselImages","launchpad-blocks/carouselSlides","launchpad-blocks/externallyControlledCarousel"],supports:{align:!0}}}},S={};function v(s){var m=S[s];if(m!==void 0)return m.exports;var x=S[s]={exports:{}};return M[s](x,x.exports,v),x.exports}v.n=s=>{var m=s&&s.__esModule?()=>s.default:()=>s;return v.d(m,{a:m}),m},v.d=(s,m)=>{for(var x in m)v.o(m,x)&&!v.o(s,x)&&Object.defineProperty(s,x,{enumerable:!0,get:m[x]})},v.o=(s,m)=>Object.prototype.hasOwnProperty.call(s,m);var B={};return(()=>{"use strict";const s=window.ReactJSXRuntime,m=window.wp.blocks,x=window.React,ee=(0,x.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:l,isEditorMode:a=!1,...r}=o;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...r,children:(0,s.jsx)("use",{href:`${a?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function w(e){return(0,s.jsx)(x.Suspense,{fallback:null,children:(0,s.jsx)(ee,{...e})})}var te=v(4615),L=v.n(te);const oe=[],y=window.wp.blockEditor,_=window.wp.components,I=window.wp.data,ne=window.wp.hooks,$=window.wp.i18n;function qe(e){if(e===void 0)throw new Error(`Pixel value ${e} is undefined`);if(!e.endsWith("px"))throw new Error(`Pixel value ${e} is not a pixel value`);if(e.includes(" "))throw new Error(`Pixel value ${e} contains multiple values`);return Number(e.replace("px",""))}function Ue(e){let t="";const o=document.createElement("div");return o.innerHTML=e,t=o.innerText,se(t)}function se(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|(?<!-)-+$/g,"")}function le(e,t=()=>!0){const o=e.parentElement;return o===null?null:t(o)?o:le(o,t)}function Xe(e){if(new RegExp("ms$","ig").test(e))return Number(e.substring(0,e.length-2));if(new RegExp("s$","ig").test(e))return Number(e.substring(0,e.length-1))*1e3;throw new Error("Time didn't end with ms or s so was not correctly parsed.")}function Ze(){if(typeof document>"u")return"unknown";const e=window.navigator.userAgent;let t="unknown";return e.search("Windows")!==-1?t="Windows":e.search("Mac")!==-1?t="MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?t="UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1&&(t="Linux"),t}function E(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(!Object.entries(e[o]).every(([l,a])=>Array.isArray(a)?E(a,t[o]?.[l]):t[o]?.[l]===a))return!1;return!0}const Je=window.wp.coreData;var j,N,c,A,O,ae,re,ie,ce,z,ue,de,pe,he,H,me,F,fe,ge,W,G,be,ke,b,V,ve,xe,we,_e,ye,Ce,P,q,U,je,Se;function X(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Ye(e,t,o){const n=t.spacing?.blockGap;let l="none";if(n===!0)l="both";else if(Array.isArray(n)){const r=n.includes("horizontal"),p=n.includes("vertical");r&&p?l="both":r?l="horizontal":p&&(l="vertical")}const a={columnGap:l==="both"||l==="horizontal"?X(o?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?X(o?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:a};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...a}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...a}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...a}};default:return{className:`is-layout-${e.type}`,style:{...a}}}}function Be(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const l=Be(n.innerBlocks,t);l&&o.push(...l)}return o},[])}const Ke=()=>{const e=P(()=>({per_page:-1}),[]),t=P(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=P(()=>({}),[]),{postTypes:n,taxonomies:l}=G(f=>{const{getEntityRecords:h}=f(W),g=h("root","postType",e),i=h("root","taxonomy",t);if(!i)return{postTypes:g,taxonomies:i};for(const k of i)o[k.slug]=h("taxonomy",k.slug);return{postTypes:g,taxonomies:i}},[e,t,o]),a=["attachment"],r=[],p=n?.filter(({viewable:f,slug:h})=>f&&!a.includes(h));if(!p||p.length===0)return{postTypes:p,taxonomies:void 0};const d={};for(const f of p){const h=l?.filter(({types:g,slug:i})=>g.includes(f.slug)&&!r.includes(i));h&&(d[f.slug]=h.map(g=>{const i=o?.[g.slug]??null;return{...g,terms:i}}))}return{filteredPostTypes:p,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Qe({list:e,containerClassName:t,renderItem:o}){return j(N,{children:[c("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),c("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function Ne(e){return e.indexOf("data:image/svg+xml,")===0}function Pe(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function Te(e){return e.indexOf("dashicons-")===0}function Z({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return(0,s.jsx)("div",{className:"menu-icon","aria-hidden":"true",children:(0,s.jsx)("br",{})});if(Ne(e))return(0,s.jsx)("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:(0,s.jsx)("br",{})});if(Pe(e))return(0,s.jsx)("img",{src:new URL(e).toString(),alt:""});if(Te(e)){const t=e.replace("dashicons-","");return(0,s.jsx)(_.Dashicon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const et={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function tt(){const[e,t,o,n]=A("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(n&&o&&o.length>0)for(const a of o)l[a.slug]={color:a.color,name:a.name};if(t&&t?.length>0)for(const a of t)l[a.slug]={color:a.color,name:a.name};if(e&&e?.length>0)for(const a of e)l[a.slug]={color:a.color,name:a.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:l}}function ot({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return c(re,{label:b("Custom colours","launchpad"),resetAll:l=>{if(l)for(const a of l)a()},children:c("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>c(Ie,{colour:l,attributesDefinition:t,attributes:o,setAttributes:n},l.attributeName))})})}function Ie({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[l,a,r,p,d]=A("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),f=()=>t[e.attributeName]?.default!==o[e.attributeName],h=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},g=q(null);return c(ie,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:h,hasValue:f,onDeselect:h,label:e.label,isShownByDefault:!0,children:c(ce,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:k})=>c(N,{children:c(z,{ref:g,__next40pxDefaultSize:!0,onClick:k,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:j("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[c(ue,{colorValue:o[e.attributeName]})," ",c("span",{children:e.label})]})})}),renderContent:()=>c(de,{paddingSize:"none",children:c("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:c("div",{className:"block-editor-color-gradient-control__panel",children:c(pe,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...a&&a?.length>0?[{name:"Theme",colors:a}]:[],...p&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:o[e.attributeName],onChange:i=>{n({[e.attributeName]:i})},disableCustomColors:!d})})})})})},e.attributeName)}function nt({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[l,a,r]=A("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),p=a?.map(({name:i,ratio:k})=>({label:i,value:k}))??[],d=l?.map(({name:i,ratio:k})=>({label:i,value:k}))??[],f=[{label:V("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?d:[],...p||[],{label:V("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[h,g]=U(f.map(i=>i.value).includes(e)?e:"custom");return j(N,{children:[c(he,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:b("Aspect ratio","launchpad-blocks"),options:f,value:h,onChange:i=>{g(i),i!=="custom"&&t(i)}}),h==="custom"?c(H,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:b("Custom aspect ratio","launchpad-blocks"),help:b("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?j(me,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:b("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&n(i)},value:o,children:[c(F,{label:"Cover",value:"cover"}),c(F,{label:"Contain",value:"contain"})]}):null]})}const $e=(e,t,o,n)=>{const{getBlocksByName:l,getBlockAttributes:a,getBlockParentsByBlockName:r}=be(O);return l(n).some(d=>{if(r(d,"core/template-part",!0).length)return!1;const{[o]:f}=a(d);return e!==d&&t===f})};function st(e,t,o,n,l){const{[t]:a}=e,r=je(d=>$e(o,d,t,l),[o,t,l]);return Se(()=>{if(a===""){const d=o.slice(0,o.indexOf("-"));n({[t]:d})}if(r(a)){const d=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${a}. New value: ${d}`),n({[t]:d})}},[a,o,n,r,t]),P(()=>function({label:f,help:h,onValidChange:g,idAttribute:i}){const[k,T]=U(i);return c(H,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:f,help:typeof h=="function"?h(!r(k)):h,value:k,onChange:C=>{T(C),r(C)||g(C)}})},[r])}function lt({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return c(fe,{label:b("Change title heading element","launchpad-blocks"),icon:J(t),controls:e.map(n=>{{const l=n===t;return{icon:J(n),title:Ee(n),isDisabled:l,onClick:()=>o(n)}}})})}function Ee(e){switch(e){case"h2":return b("Heading 2","launchpad-blocks");case"h3":return b("Heading 3","launchpad-blocks");case"h4":return b("Heading 4","launchpad-blocks");case"h5":return b("Heading 5","launchpad-blocks");case"h6":return b("Heading 6","launchpad-blocks");case"p":return b("Paragraph","launchpad-blocks")}}function J(e){switch(e){case"h2":return ve;case"h3":return xe;case"h4":return we;case"h5":return _e;case"h6":return ye;case"p":return Ce}}function Ae(e){const{hasChildren:t}=(0,I.useSelect)(o=>{const{getBlocks:n}=o(y.store);return{hasChildren:n(e).length>0}},[e]);return t}function at({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:l,updateBlockAttributes:a}=ke(O);return j(ge,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[c("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":b("Block variations"),children:o.map(r=>j("li",{children:[c(z,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?c(Z,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&a(e,r.attributes),r.innerBlocks&&l(e,ae(r.innerBlocks),!1)}}),c("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),n&&c("div",{className:"block-editor-block-variation-picker__skip",children:c(z,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),a(e,{hasDismissedVariationsSelector:!0})},children:b("Skip")})})]})}function rt({imageId:e,className:t="",size:o="full"}){const n=G(a=>typeof e=="number"&&e>0?a(W).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?c(N,{children:c("img",{...(()=>{const a={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(a.src=n.media_details.sizes[o].source_url,a.width=n.media_details.sizes[o].width,a.height=n.media_details.sizes[o].height),a.srcSet=Object.entries(n.media_details.sizes??{}).map(([r,p])=>`${p.source_url} ${p.width}w`).join(", "),a})(),alt:n.alt_text||""})}):null}function ze(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>ze(o))):t.push([]),t}function it(e){const t=q(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const a=t.current.style;a.minHeight="",t.current.setAttribute("style",`${a.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}const Y=window.wp.primitives,Re=(0,s.jsx)(Y.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(Y.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})}),ut=[{name:"core/image",attributes:{id:237,url:"https://picsum.photos/id/237/260/180"}},{name:"core/image",attributes:{id:433,url:"https://picsum.photos/id/433/260/180"}},{name:"core/image",attributes:{id:582,url:"https://picsum.photos/id/582/260/180"}},{name:"core/image",attributes:{id:593,url:"https://picsum.photos/id/593/260/180"}},{name:"core/image",attributes:{id:943,url:"https://picsum.photos/id/943/260/180"}},{name:"core/image",attributes:{id:1024,url:"https://picsum.photos/id/1024/260/180"}}],K=[{name:"basic",title:"Simple carousel",icon:(0,s.jsx)(w,{isEditorMode:!0,iconName:"carousel"}),description:"A basic carousel for viewing images.",attributes:null,baseInnerBlocks:[["launchpad-blocks/carousel-slides"]],addFunctionalInnerBlocks:null},{name:"image-pop-up",title:"Expandable image carousel",icon:(0,s.jsx)(w,{isEditorMode:!0,iconName:"lightbox"}),description:"A carousel which opens in a full screen pop-up on click.",attributes:{shouldLinkSlidesToLightbox:!0},baseInnerBlocks:[["launchpad-blocks/carousel-slides"]],addFunctionalInnerBlocks:e=>[...e,["launchpad-blocks/lightbox",{},[["launchpad-blocks/carousel",{lock:{move:!0,remove:!0}},[["launchpad-blocks/carousel-slides",{shouldPullImagesFromContext:!0,lock:{move:!0,remove:!0}}],["launchpad-blocks/carousel-navigation-arrows",{className:"is-style-overlay",shouldShowTextVisually:!1,lock:{move:!1,remove:!0}}]]]]]]},{name:"block-slides",title:"Block based slides",icon:Re,description:"Advanced users only. Create slides out of blocks.",attributes:null,baseInnerBlocks:[["launchpad-blocks/carousel-content-slides",{aspectRatio:"16/9"},[["launchpad-blocks/carousel-content-slide",{backgroundOrOverlayColour:"rgb(0 0 0)",style:{background:{backgroundImage:{url:"https://picsum.photos/id/237/1600/900"},backgroundSize:"cover"}}},[["launchpad-blocks/carousel-content-slide-content",{},[["core/heading",{placeholder:"Your template"}],["core/paragraph",{placeholder:'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.'}]]]]]]]],addFunctionalInnerBlocks:null}],De=[{name:"skip",title:"This variation is set when you hit skip. this title is not seen.",icon:null,addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows"]]},{name:"overlay",title:"Overlaid arrows",icon:(0,s.jsx)(w,{isEditorMode:!0,iconName:"carousel-navigation-arrows"}),addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows",{shouldShowTextVisually:!1,className:"is-style-overlay"}]]},{name:"with-dots",title:"Arrows and dots",icon:(0,s.jsx)(w,{isEditorMode:!0,iconName:"carousel-dots"}),addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows",{},[["launchpad-blocks/carousel-dots"]]]]},{name:"with-slide-count",title:"Arrows and slide count",icon:(0,s.jsx)(w,{isEditorMode:!0,iconName:"carousel-slide-count"}),addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows",{},[["launchpad-blocks/carousel-slide-count",{layout:{type:"flex",flexWrap:"wrap",justifyContent:"center"}}]]]]},{name:"with-thumbnails",title:"Arrows and thumbnails",icon:(0,s.jsx)(w,{isEditorMode:!0,iconName:"carousel-thumbnails"}),addNavigationInnerBlocks:e=>[...e,["launchpad-blocks/carousel-navigation-arrows",{},[["launchpad-blocks/carousel-thumbnails"]]]]}],R=[...K.map(e=>{const t=[];for(const o of De){let n=o.addNavigationInnerBlocks(e.baseInnerBlocks);e.addFunctionalInnerBlocks&&(n=e.addFunctionalInnerBlocks(n));const l={name:`${e.name}-${o.name}`,title:`${e.title} - ${o.title}`,icon:o.icon??void 0,scope:[],innerBlocks:n};e.attributes&&(l.attributes=e.attributes),t.push(l)}return t}).flat()];function Q({clientId:e,attributes:t,setAttributes:o,context:n}){const{shouldLoop:l,images:a,slides:r,shouldLinkSlidesToLightbox:p}=t,d=(0,y.useBlockProps)({"data-launchpad-carousel":"","data-loop":l?"true":"false","data-has-lightbox":p?"true":"false"}),{children:f,...h}=(0,y.useInnerBlocksProps)(d,{template:[["launchpad-blocks/carousel-slides"]]}),{shouldGetSlidesFromContext:g}=(0,I.useSelect)(u=>{const{getBlocks:D}=u(y.store);return{shouldGetSlidesFromContext:D(e).find(Ve=>Ve.name==="launchpad-blocks/carousel-slides")?.attributes?.shouldPullImagesFromContext??!1}},[e]),{replaceInnerBlocks:i,updateBlockAttributes:k}=(0,I.useDispatch)(y.store);(0,x.useEffect)(()=>{g&&(n["launchpad-blocks/carouselImages"]!==void 0&&!E(n["launchpad-blocks/carouselImages"],a)&&o({images:n["launchpad-blocks/carouselImages"]}),n["launchpad-blocks/carouselSlides"]!==void 0&&!E(n["launchpad-blocks/carouselSlides"],r)&&o({slides:n["launchpad-blocks/carouselSlides"]}))},[n,a,r,o,g]);const T=(0,ne.applyFilters)("launchpadBlocks.carouselFunctionalityVariations",K);if(!Me(T))throw new Error("Filtering of functionality variations has broken the variations. Please fix the filters to continue.");const[C,We]=(0,x.useState)(null),Ge=Ae(e);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y.InspectorControls,{children:(0,s.jsx)(_.Panel,{children:(0,s.jsx)(_.PanelBody,{children:(0,s.jsx)(_.ToggleControl,{__nextHasNoMarginBottom:!0,checked:l,label:"Should your carousel loop round if you are at the end and you navigate the slide again.",onChange:u=>{o({shouldLoop:u})}})})})}),(0,s.jsx)("div",{...h,children:Ge?f:C===null?(0,s.jsx)(_.Placeholder,{icon:(0,s.jsx)(w,{isEditorMode:!0,iconName:"carousel"}),label:"Carousel - Pick functionality",instructions:"Please choose the core functionality of the carousel.",children:(0,s.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,$.__)("Carousel functionality variations","launchpad-blocks"),children:T.map(u=>(0,s.jsx)("li",{children:(0,s.jsx)(_.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation block-editor-block-variation-picker__variation--wide",icon:u.icon,iconSize:48,onClick:()=>{We(u.name)},children:(0,s.jsxs)("div",{className:"block-editor-block-variation-picker__variation-text-group",children:[(0,s.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:(0,s.jsx)("strong",{children:u.title})}),(0,s.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:u.description})]})})},u.name))})}):(0,s.jsxs)(_.Placeholder,{icon:(0,s.jsx)(w,{isEditorMode:!0,iconName:"carousel"}),label:"Carousel - Pick navigation",instructions:"Please choose how you'd like to navigate between different slides.",children:[(0,s.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,$.__)("Block variations"),children:R.filter(u=>u.name.startsWith(C)&&!u.name.endsWith("skip")).map(u=>(0,s.jsxs)("li",{children:[(0,s.jsx)(_.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof u.icon=="string"?(0,s.jsx)(Z,{iconString:u.icon}):u.icon,iconSize:48,onClick:()=>{u.attributes&&k(e,u.attributes),u.innerBlocks&&i(e,(0,m.createBlocksFromInnerBlocksTemplate)(u.innerBlocks),!1)}}),(0,s.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:u.title.split(" - ").at(-1)})]},u.name))}),(0,s.jsx)("div",{className:"block-editor-block-variation-picker__skip",children:(0,s.jsx)(_.Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{const u=R.find(D=>D.name===`${C}-skip`);u?.attributes&&k(e,u.attributes),u?.innerBlocks&&i(e,(0,m.createBlocksFromInnerBlocksTemplate)(u.innerBlocks),!1)},children:(0,$.__)("Skip")})})]})})]})}Q.displayName="CarouselEdit";function Me(e){return Array.isArray(e)&&e.every(t=>typeof t=="object"&&t!==null&&"name"in t&&"title"in t&&"icon"in t&&"description"in t&&"attributes"in t&&"baseInnerBlocks"in t&&"addFunctionalInnerBlocks"in t)}function Le({hasInnerBlocks:e}){return e?He:Oe}function Oe(){return null}function He(){return(0,s.jsx)(y.InnerBlocks.Content,{})}const Fe={from:[],to:[]},dt={"launchpad-blocks/carouselImages":"images","launchpad-blocks/carouselSlides":"slides","launchpad-blocks/shouldLinkSlidesToLightbox":"shouldLinkSlidesToLightbox","launchpad-blocks/currentlySelectedSlide":"currentlySelectedSlide"},pt=null;(0,m.registerBlockType)(L().name,{icon:(0,s.jsx)(w,{iconName:"carousel"}),deprecated:oe,edit:Q,save:Le({hasInnerBlocks:!0}),transforms:Fe}),R.forEach(e=>{(0,m.registerBlockVariation)(L().name,e)})})(),B})());
