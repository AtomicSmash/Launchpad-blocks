(function(w,h){if(typeof exports=="object"&&typeof module=="object")module.exports=h();else if(typeof define=="function"&&define.amd)define([],h);else{var y=h();for(var a in y)(typeof exports=="object"?exports:w)[a]=y[a]}})(globalThis,()=>(()=>{var T={3973(a){a.exports={apiVersion:3,name:"launchpad-blocks/carousel-thumbnails",title:"Carousel thumbnails",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",render:"file:./render.php",styles:[{name:"scroll",label:"Scroll",isDefault:!0},{name:"grid",label:"Grid"}],attributes:{selectedOutlineColour:{type:"string",default:"black"},lock:{type:"boolean",default:!0}},providesContext:{},usesContext:["launchpad-blocks/carouselImages"],example:{viewportWidth:1200},supports:{lock:!1,layout:{default:{type:"constrained"},allowCustomContentAndWideSize:!1}}}}},w={};function h(a){var m=w[a];if(m!==void 0)return m.exports;var x=w[a]={exports:{}};return T[a](x,x.exports,h),x.exports}h.n=a=>{var m=a&&a.__esModule?()=>a.default:()=>a;return h.d(m,{a:m}),m},h.d=(a,m)=>{for(var x in m)h.o(m,x)&&!h.o(a,x)&&Object.defineProperty(a,x,{enumerable:!0,get:m[x]})},h.o=(a,m)=>Object.prototype.hasOwnProperty.call(a,m);var y={};return(()=>{"use strict";const a=window.ReactJSXRuntime,m=window.wp.blocks,x=window.React,W=(0,x.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:r,isEditorMode:s=!1,...l}=o;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...l,children:(0,a.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function V(e){return(0,a.jsx)(x.Suspense,{fallback:null,children:(0,a.jsx)(W,{...e})})}var q=h(3973),$=h.n(q);const F=[],C=window.wp.blockEditor,_=window.wp.components,Be=window.wp.coreData,Ne=window.wp.data,L=window.wp.i18n;var k,S,u,z,B,U,J,X,D,K,R,Q,Y,I,A,N,Z,ee,O,g,te,oe,ne,re,se,ae,j,H,le,ie,ce;function E(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Pe(e,t,o){const n=t.spacing?.blockGap;let r="none";if(n===!0)r="both";else if(Array.isArray(n)){const l=n.includes("horizontal"),c=n.includes("vertical");l&&c?r="both":l?r="horizontal":c&&(r="vertical")}const s={columnGap:r==="both"||r==="horizontal"?E(o?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?E(o?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function ue(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const r=ue(n.innerBlocks,t);r&&o.push(...r)}return o},[])}const Te=()=>{const e=j(()=>({per_page:-1}),[]),t=j(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=j(()=>({}),[]),{postTypes:n,taxonomies:r}=N(f=>{const{getEntityRecords:p}=f(A),b=p("root","postType",e),i=p("root","taxonomy",t);if(!i)return{postTypes:b,taxonomies:i};for(const v of i)o[v.slug]=p("taxonomy",v.slug);return{postTypes:b,taxonomies:i}},[e,t,o]),s=["attachment"],l=[],c=n?.filter(({viewable:f,slug:p})=>f&&!s.includes(p));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const d={};for(const f of c){const p=r?.filter(({types:b,slug:i})=>b.includes(f.slug)&&!l.includes(i));p&&(d[f.slug]=p.map(b=>{const i=o?.[b.slug]??null;return{...b,terms:i}}))}return{filteredPostTypes:c,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function $e({list:e,containerClassName:t,renderItem:o}){return k(S,{children:[u("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),u("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function de(e){return e.indexOf("data:image/svg+xml,")===0}function pe(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function me(e){return e.indexOf("dashicons-")===0}function fe({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return u("div",{className:"menu-icon","aria-hidden":"true",children:u("br",{})});if(de(e))return u("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:u("br",{})});if(pe(e))return u("img",{src:new URL(e).toString(),alt:""});if(me(e)){const t=e.replace("dashicons-","");return u(J,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ze={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function De(){const[e,t,o,n]=z("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(n&&o&&o.length>0)for(const s of o)r[s.slug]={color:s.color,name:s.name};if(t&&t?.length>0)for(const s of t)r[s.slug]={color:s.color,name:s.name};if(e&&e?.length>0)for(const s of e)r[s.slug]={color:s.color,name:s.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:r}}function he({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return(0,a.jsx)(_.__experimentalToolsPanel,{label:(0,L.__)("Custom colours","launchpad"),resetAll:r=>{if(r)for(const s of r)s()},children:(0,a.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>(0,a.jsx)(ge,{colour:r,attributesDefinition:t,attributes:o,setAttributes:n},r.attributeName))})})}function ge({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[r,s,l,c,d]=(0,C.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),f=()=>t[e.attributeName]?.default!==o[e.attributeName],p=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=(0,x.useRef)(null);return(0,a.jsx)(_.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:f,onDeselect:p,label:e.label,isShownByDefault:!0,children:(0,a.jsx)(_.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:v})=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(_.Button,{ref:b,__next40pxDefaultSize:!0,onClick:v,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,a.jsx)(_.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,a.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,a.jsx)(_.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,a.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,a.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,a.jsx)(_.ColorPalette,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...c&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:o[e.attributeName],onChange:i=>{n({[e.attributeName]:i})},disableCustomColors:!d})})})})})},e.attributeName)}function Re({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[r,s,l]=z("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=s?.map(({name:i,ratio:v})=>({label:i,value:v}))??[],d=r?.map(({name:i,ratio:v})=>({label:i,value:v}))??[],f=[{label:O("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?d:[],...c||[],{label:O("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,b]=H(f.map(i=>i.value).includes(e)?e:"custom");return k(S,{children:[u(X,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:g("Aspect ratio","launchpad-blocks"),options:f,value:p,onChange:i=>{b(i),i!=="custom"&&t(i)}}),p==="custom"?u(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:g("Custom aspect ratio","launchpad-blocks"),help:g("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?k(K,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:g("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&n(i)},value:o,children:[u(R,{label:"Cover",value:"cover"}),u(R,{label:"Contain",value:"contain"})]}):null]})}const be=(e,t,o,n)=>{const{getBlocksByName:r,getBlockAttributes:s,getBlockParentsByBlockName:l}=Z(B);return r(n).some(d=>{if(l(d,"core/template-part",!0).length)return!1;const{[o]:f}=s(d);return e!==d&&t===f})};function Ie(e,t,o,n,r){const{[t]:s}=e,l=le(d=>be(o,d,t,r),[o,t,r]);return ie(()=>{if(s===""){const d=o.slice(0,o.indexOf("-"));n({[t]:d})}if(l(s)){const d=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${s}. New value: ${d}`),n({[t]:d})}},[s,o,n,l,t]),j(()=>function({label:f,help:p,onValidChange:b,idAttribute:i}){const[v,Se]=H(i);return u(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:f,help:typeof p=="function"?p(!l(v)):p,value:v,onChange:P=>{Se(P),l(P)||b(P)}})},[l])}function Ae({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return u(Q,{label:g("Change title heading element","launchpad-blocks"),icon:M(t),controls:e.map(n=>{{const r=n===t;return{icon:M(n),title:xe(n),isDisabled:r,onClick:()=>o(n)}}})})}function xe(e){switch(e){case"h2":return g("Heading 2","launchpad-blocks");case"h3":return g("Heading 3","launchpad-blocks");case"h4":return g("Heading 4","launchpad-blocks");case"h5":return g("Heading 5","launchpad-blocks");case"h6":return g("Heading 6","launchpad-blocks");case"p":return g("Paragraph","launchpad-blocks")}}function M(e){switch(e){case"h2":return te;case"h3":return oe;case"h4":return ne;case"h5":return re;case"h6":return se;case"p":return ae}}function Oe(e){const{hasChildren:t}=N(o=>{const{getBlocks:n}=o(B);return{hasChildren:n(e).length>0}},[e]);return t}function He({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:r,updateBlockAttributes:s}=ee(B);return k(Y,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[u("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":g("Block variations"),children:o.map(l=>k("li",{children:[u(I,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?u(fe,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&s(e,l.attributes),l.innerBlocks&&r(e,U(l.innerBlocks),!1)}}),u("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),n&&u("div",{className:"block-editor-block-variation-picker__skip",children:u(I,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:g("Skip")})})]})}function Ee({imageId:e,className:t="",size:o="full"}){const n=N(s=>typeof e=="number"&&e>0?s(A).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?u(S,{children:u("img",{...(()=>{const s={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(s.src=n.media_details.sizes[o].source_url,s.width=n.media_details.sizes[o].width,s.height=n.media_details.sizes[o].height),s.srcSet=Object.entries(n.media_details.sizes??{}).map(([l,c])=>`${c.source_url} ${c.width}w`).join(", "),s})(),alt:n.alt_text||""})}):null}function ve(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>ve(o))):t.push([]),t}function Me(e){const t=ce(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const s=t.current.style;s.minHeight="",t.current.setAttribute("style",`${s.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}const _e={selectedOutlineColour:{type:"string",default:"black"},lock:{type:"boolean",default:!0}};function G({attributes:e,setAttributes:t,context:o}){const{selectedOutlineColour:n}=e,r=(0,C.useBlockProps)({style:{"--selected-outline-colour":n}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C.InspectorControls,{group:"styles",children:(0,a.jsx)(he,{colours:[{attributeName:"selectedOutlineColour",label:"Selected outline colour"}],attributes:e,attributesDefinition:_e,setAttributes:t})}),(0,a.jsx)("div",{...r,children:o["launchpad-blocks/carouselImages"].map(({id:s,url:l},c)=>(0,a.jsx)("button",{type:"button",className:`reset carousel-thumbnail-button${c===1||c===0&&o["launchpad-blocks/carouselImages"].length===1?" is-selected":""}`,"data-carousel-slide":c,children:(0,a.jsx)("img",{width:190,height:132,src:l,alt:"",draggable:!1,className:"carousel-thumbnail"})},s))})]})}G.displayName="CarouselThumbnailsEdit";function ke({hasInnerBlocks:e}){return e?ye:we}function we(){return null}function ye(){return(0,a.jsx)(C.InnerBlocks.Content,{})}const Ce={from:[],to:[]},je=[],Ge={},We=null;(0,m.registerBlockType)($().name,{icon:(0,a.jsx)(V,{iconName:"carousel-thumbnails"}),deprecated:F,edit:G,save:ke({hasInnerBlocks:!1}),transforms:Ce}),je.forEach(e=>{(0,m.registerBlockVariation)($().name,e)})})(),y})());
