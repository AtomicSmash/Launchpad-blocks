(function(k,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var y=v();for(var i in y)(typeof exports=="object"?exports:k)[i]=y[i]}})(globalThis,()=>(()=>{var R={3177(i){i.exports={apiVersion:3,name:"launchpad-blocks/carousel-slide-count",title:"Carousel slide count",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],ancestor:["launchpad-blocks/carousel"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{prefix:{type:"string",role:"content"},betweenText:{type:"string",default:"/",role:"content"},suffix:{type:"string",role:"content"}},providesContext:{},usesContext:["launchpad-blocks/carouselImages","launchpad-blocks/carouselSlides","launchpad-blocks/currentlySelectedSlide"],example:{viewportWidth:1200},supports:{align:!0,layout:{default:{type:"flex",flexWrap:"wrap",justifyContent:"left"},allowOrientation:!1}}}}},k={};function v(i){var h=k[i];if(h!==void 0)return h.exports;var x=k[i]={exports:{}};return R[i](x,x.exports,v),x.exports}v.n=i=>{var h=i&&i.__esModule?()=>i.default:()=>i;return v.d(h,{a:h}),h},v.d=(i,h)=>{for(var x in h)v.o(h,x)&&!v.o(i,x)&&Object.defineProperty(i,x,{enumerable:!0,get:h[x]})},v.o=(i,h)=>Object.prototype.hasOwnProperty.call(i,h);var y={};return(()=>{"use strict";const i=window.ReactJSXRuntime,h=window.wp.blocks,x=window.React,V=(0,x.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:r,isEditorMode:a=!1,...l}=o;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...l,children:(0,i.jsx)("use",{href:`${a?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function q(e){return(0,i.jsx)(x.Suspense,{fallback:null,children:(0,i.jsx)(V,{...e})})}var L=v(3177),z=v.n(L);const F=[],w=window.wp.blockEditor,$e=window.wp.components,Re=window.wp.coreData,ze=window.wp.data,De=window.wp.i18n;var _,C,s,j,T,U,J,X,K,Q,N,Y,Z,ee,te,D,oe,I,ne,re,A,P,ae,le,b,O,se,ie,ce,ue,de,pe,S,H,E,me,fe;function M(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function he(e,t,o){const n=t.spacing?.blockGap;let r="none";if(n===!0)r="both";else if(Array.isArray(n)){const l=n.includes("horizontal"),d=n.includes("vertical");l&&d?r="both":l?r="horizontal":d&&(r="vertical")}const a={columnGap:r==="both"||r==="horizontal"?M(o?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?M(o?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:a};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...a}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...a}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...a}};default:return{className:`is-layout-${e.type}`,style:{...a}}}}function ge(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const r=ge(n.innerBlocks,t);r&&o.push(...r)}return o},[])}const Ie=()=>{const e=S(()=>({per_page:-1}),[]),t=S(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=S(()=>({}),[]),{postTypes:n,taxonomies:r}=P(f=>{const{getEntityRecords:m}=f(A),g=m("root","postType",e),c=m("root","taxonomy",t);if(!c)return{postTypes:g,taxonomies:c};for(const p of c)o[p.slug]=m("taxonomy",p.slug);return{postTypes:g,taxonomies:c}},[e,t,o]),a=["attachment"],l=[],d=n?.filter(({viewable:f,slug:m})=>f&&!a.includes(m));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const f of d){const m=r?.filter(({types:g,slug:c})=>g.includes(f.slug)&&!l.includes(c));m&&(u[f.slug]=m.map(g=>{const c=o?.[g.slug]??null;return{...g,terms:c}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ae({list:e,containerClassName:t,renderItem:o}){return _(C,{children:[s("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),s("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function be(e){return e.indexOf("data:image/svg+xml,")===0}function ve(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function xe(e){return e.indexOf("dashicons-")===0}function _e({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return s("div",{className:"menu-icon","aria-hidden":"true",children:s("br",{})});if(be(e))return s("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:s("br",{})});if(ve(e))return s("img",{src:new URL(e).toString(),alt:""});if(xe(e)){const t=e.replace("dashicons-","");return s(J,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Oe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function He(){const[e,t,o,n]=j("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(n&&o&&o.length>0)for(const a of o)r[a.slug]={color:a.color,name:a.name};if(t&&t?.length>0)for(const a of t)r[a.slug]={color:a.color,name:a.name};if(e&&e?.length>0)for(const a of e)r[a.slug]={color:a.color,name:a.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:r}}function Ee({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return s(X,{label:b("Custom colours","launchpad"),resetAll:r=>{if(r)for(const a of r)a()},children:s("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>s(we,{colour:r,attributesDefinition:t,attributes:o,setAttributes:n},r.attributeName))})})}function we({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[r,a,l,d,u]=j("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),f=()=>t[e.attributeName]?.default!==o[e.attributeName],m=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},g=H(null);return s(K,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:m,hasValue:f,onDeselect:m,label:e.label,isShownByDefault:!0,children:s(Q,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:p})=>s(C,{children:s(N,{ref:g,__next40pxDefaultSize:!0,onClick:p,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:_("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[s(Y,{colorValue:o[e.attributeName]})," ",s("span",{children:e.label})]})})}),renderContent:()=>s(Z,{paddingSize:"none",children:s("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:s("div",{className:"block-editor-color-gradient-control__panel",children:s(ee,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...a&&a?.length>0?[{name:"Theme",colors:a}]:[],...d&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:o[e.attributeName],onChange:c=>{n({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function Me({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[r,a,l]=j("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=a?.map(({name:c,ratio:p})=>({label:c,value:p}))??[],u=r?.map(({name:c,ratio:p})=>({label:c,value:p}))??[],f=[{label:O("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?u:[],...d||[],{label:O("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[m,g]=E(f.map(c=>c.value).includes(e)?e:"custom");return _(C,{children:[s(te,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:b("Aspect ratio","launchpad-blocks"),options:f,value:m,onChange:c=>{g(c),c!=="custom"&&t(c)}}),m==="custom"?s(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:b("Custom aspect ratio","launchpad-blocks"),help:b("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?_(oe,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:b("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&n(c)},value:o,children:[s(I,{label:"Cover",value:"cover"}),s(I,{label:"Contain",value:"contain"})]}):null]})}const ke=(e,t,o,n)=>{const{getBlocksByName:r,getBlockAttributes:a,getBlockParentsByBlockName:l}=ae(T);return r(n).some(u=>{if(l(u,"core/template-part",!0).length)return!1;const{[o]:f}=a(u);return e!==u&&t===f})};function We(e,t,o,n,r){const{[t]:a}=e,l=me(u=>ke(o,u,t,r),[o,t,r]);return fe(()=>{if(a===""){const u=o.slice(0,o.indexOf("-"));n({[t]:u})}if(l(a)){const u=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${a}. New value: ${u}`),n({[t]:u})}},[a,o,n,l,t]),S(()=>function({label:f,help:m,onValidChange:g,idAttribute:c}){const[p,B]=E(c);return s(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:f,help:typeof m=="function"?m(!l(p)):m,value:p,onChange:$=>{B($),l($)||g($)}})},[l])}function Ge({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return s(ne,{label:b("Change title heading element","launchpad-blocks"),icon:W(t),controls:e.map(n=>{{const r=n===t;return{icon:W(n),title:ye(n),isDisabled:r,onClick:()=>o(n)}}})})}function ye(e){switch(e){case"h2":return b("Heading 2","launchpad-blocks");case"h3":return b("Heading 3","launchpad-blocks");case"h4":return b("Heading 4","launchpad-blocks");case"h5":return b("Heading 5","launchpad-blocks");case"h6":return b("Heading 6","launchpad-blocks");case"p":return b("Paragraph","launchpad-blocks")}}function W(e){switch(e){case"h2":return se;case"h3":return ie;case"h4":return ce;case"h5":return ue;case"h6":return de;case"p":return pe}}function Ve(e){const{hasChildren:t}=P(o=>{const{getBlocks:n}=o(T);return{hasChildren:n(e).length>0}},[e]);return t}function qe({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:r,updateBlockAttributes:a}=le(T);return _(re,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[s("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":b("Block variations"),children:o.map(l=>_("li",{children:[s(N,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?s(_e,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&a(e,l.attributes),l.innerBlocks&&r(e,U(l.innerBlocks),!1)}}),s("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),n&&s("div",{className:"block-editor-block-variation-picker__skip",children:s(N,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),a(e,{hasDismissedVariationsSelector:!0})},children:b("Skip")})})]})}function Le({imageId:e,className:t="",size:o="full"}){const n=P(a=>typeof e=="number"&&e>0?a(A).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?s(C,{children:s("img",{...(()=>{const a={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(a.src=n.media_details.sizes[o].source_url,a.width=n.media_details.sizes[o].width,a.height=n.media_details.sizes[o].height),a.srcSet=Object.entries(n.media_details.sizes??{}).map(([l,d])=>`${d.source_url} ${d.width}w`).join(", "),a})(),alt:n.alt_text||""})}):null}function Ce(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Ce(o))):t.push([]),t}function Fe(e){const t=H(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const a=t.current.style;a.minHeight="",t.current.setAttribute("style",`${a.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}const Se={align:!0,layout:{default:{type:"flex",flexWrap:"wrap",justifyContent:"left"},allowOrientation:!1}};function G({attributes:e,setAttributes:t,context:o}){const{prefix:n,betweenText:r,suffix:a,layout:l,style:d}=e,{className:u,style:f}=he(l,Se,d),m=(0,w.useBlockProps)({className:u,style:f}),g=o["launchpad-blocks/currentlySelectedSlide"],c=o["launchpad-blocks/carouselSlides"]!==void 0&&o["launchpad-blocks/carouselSlides"].length>0?o["launchpad-blocks/carouselSlides"].map((p,B)=>({id:p.attributes?.id??B})):o["launchpad-blocks/carouselImages"].map(p=>({id:p.id}));return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{...m,children:[(0,i.jsx)(w.RichText,{tagName:"span",placeholder:"prefix",value:n,identifier:"prefix",onChange:p=>{t({prefix:p})}}),(0,i.jsx)("span",{children:g+1})," ",(0,i.jsx)(w.RichText,{tagName:"span",placeholder:"betweenText",identifier:"betweenText",value:r,onChange:p=>{t({betweenText:p})}}),(0,i.jsx)("span",{children:c.length}),(0,i.jsx)(w.RichText,{tagName:"span",placeholder:"suffix",identifier:"suffix",value:a,onChange:p=>{t({suffix:p})}})]})})}G.displayName="CarouselSlideCountEdit";function je({hasInnerBlocks:e}){return e?Ne:Te}function Te(){return null}function Ne(){return(0,i.jsx)(w.InnerBlocks.Content,{})}const Pe={from:[],to:[]},Be=[],Ue={},Je=null;(0,h.registerBlockType)(z().name,{icon:(0,i.jsx)(q,{iconName:"carousel-slide-count"}),deprecated:F,edit:G,save:je({hasInnerBlocks:!1}),transforms:Pe}),Be.forEach(e=>{(0,h.registerBlockVariation)(z().name,e)})})(),y})());
