(function(_,b){if(typeof exports=="object"&&typeof module=="object")module.exports=b();else if(typeof define=="function"&&define.amd)define([],b);else{var w=b();for(var d in w)(typeof exports=="object"?exports:_)[d]=w[d]}})(globalThis,()=>(()=>{var R={8111(d){d.exports={apiVersion:3,name:"launchpad-blocks/carousel-content-slide-content",title:"Carousel content slide content",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel-content-slide"],editorScript:"file:./index.tsx",style:"file:./style.scss",render:"file:./render.php",attributes:{},providesContext:{},usesContext:["launchpad-blocks/template","launchpad-blocks/shouldLockChildSlidesToTemplate","launchpad-blocks/currentlySelectedSlide","launchpad-blocks/isInTemplateEditMode"],supports:{layout:{default:{type:"constrained"},allowCustomContentAndWideSize:!1,allowJustification:!1},spacing:{padding:["left","right"]}}}}},_={};function b(d){var m=_[d];if(m!==void 0)return m.exports;var h=_[d]={exports:{}};return R[d](h,h.exports,b),h.exports}b.n=d=>{var m=d&&d.__esModule?()=>d.default:()=>d;return b.d(m,{a:m}),m},b.d=(d,m)=>{for(var h in m)b.o(m,h)&&!b.o(d,h)&&Object.defineProperty(d,h,{enumerable:!0,get:m[h]})},b.o=(d,m)=>Object.prototype.hasOwnProperty.call(d,m);var w={};return(()=>{"use strict";const d=window.wp.blocks,m=window.wp.primitives,h=window.ReactJSXRuntime,V=(0,h.jsx)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)(m.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})});var W=b(8111),z=b.n(W);const q=[],S=window.wp.blockEditor,Pe=window.wp.i18n,Ne=window.wp.components,Re=window.wp.coreData,ze=window.wp.data,Ae=window.React;var k,y,a,T,B,F,U,Z,J,X,j,K,Q,Y,ee,A,te,$,oe,ne,D,P,re,le,g,I,ae,se,ie,ce,de,ue,C,H,O,pe,me;function M(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function $e(e,t,o){const n=t.spacing?.blockGap;let r="none";if(n===!0)r="both";else if(Array.isArray(n)){const s=n.includes("horizontal"),u=n.includes("vertical");s&&u?r="both":s?r="horizontal":u&&(r="vertical")}const l={columnGap:r==="both"||r==="horizontal"?M(o?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?M(o?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function he(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const r=he(n.innerBlocks,t);r&&o.push(...r)}return o},[])}const De=()=>{const e=C(()=>({per_page:-1}),[]),t=C(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=C(()=>({}),[]),{postTypes:n,taxonomies:r}=P(f=>{const{getEntityRecords:p}=f(D),v=p("root","postType",e),i=p("root","taxonomy",t);if(!i)return{postTypes:v,taxonomies:i};for(const x of i)o[x.slug]=p("taxonomy",x.slug);return{postTypes:v,taxonomies:i}},[e,t,o]),l=["attachment"],s=[],u=n?.filter(({viewable:f,slug:p})=>f&&!l.includes(p));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const c={};for(const f of u){const p=r?.filter(({types:v,slug:i})=>v.includes(f.slug)&&!s.includes(i));p&&(c[f.slug]=p.map(v=>{const i=o?.[v.slug]??null;return{...v,terms:i}}))}return{filteredPostTypes:u,mappedTaxonomies:c===void 0||Object.values(c).length===0?void 0:c}};function Ie({list:e,containerClassName:t,renderItem:o}){return k(y,{children:[a("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),a("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function fe(e){return e.indexOf("data:image/svg+xml,")===0}function ge(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function be(e){return e.indexOf("dashicons-")===0}function ve({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return a("div",{className:"menu-icon","aria-hidden":"true",children:a("br",{})});if(fe(e))return a("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:a("br",{})});if(ge(e))return a("img",{src:new URL(e).toString(),alt:""});if(be(e)){const t=e.replace("dashicons-","");return a(U,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const He={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Oe(){const[e,t,o,n]=T("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(n&&o&&o.length>0)for(const l of o)r[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)r[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)r[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:r}}function Me({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return a(Z,{label:g("Custom colours","launchpad"),resetAll:r=>{if(r)for(const l of r)l()},children:a("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>a(xe,{colour:r,attributesDefinition:t,attributes:o,setAttributes:n},r.attributeName))})})}function xe({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[r,l,s,u,c]=T("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),f=()=>t[e.attributeName]?.default!==o[e.attributeName],p=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},v=H(null);return a(J,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:f,onDeselect:p,label:e.label,isShownByDefault:!0,children:a(X,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:x})=>a(y,{children:a(j,{ref:v,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:k("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[a(K,{colorValue:o[e.attributeName]})," ",a("span",{children:e.label})]})})}),renderContent:()=>a(Q,{paddingSize:"none",children:a("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:a("div",{className:"block-editor-color-gradient-control__panel",children:a(Y,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...u&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:o[e.attributeName],onChange:i=>{n({[e.attributeName]:i})},disableCustomColors:!c})})})})})},e.attributeName)}function Ee({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[r,l,s]=T("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=l?.map(({name:i,ratio:x})=>({label:i,value:x}))??[],c=r?.map(({name:i,ratio:x})=>({label:i,value:x}))??[],f=[{label:I("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?c:[],...u||[],{label:I("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,v]=O(f.map(i=>i.value).includes(e)?e:"custom");return k(y,{children:[a(ee,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:g("Aspect ratio","launchpad-blocks"),options:f,value:p,onChange:i=>{v(i),i!=="custom"&&t(i)}}),p==="custom"?a(A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:g("Custom aspect ratio","launchpad-blocks"),help:g("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?k(te,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:g("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&n(i)},value:o,children:[a($,{label:"Cover",value:"cover"}),a($,{label:"Contain",value:"contain"})]}):null]})}const ke=(e,t,o,n)=>{const{getBlocksByName:r,getBlockAttributes:l,getBlockParentsByBlockName:s}=re(B);return r(n).some(c=>{if(s(c,"core/template-part",!0).length)return!1;const{[o]:f}=l(c);return e!==c&&t===f})};function Le(e,t,o,n,r){const{[t]:l}=e,s=pe(c=>ke(o,c,t,r),[o,t,r]);return me(()=>{if(l===""){const c=o.slice(0,o.indexOf("-"));n({[t]:c})}if(s(l)){const c=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${c}`),n({[t]:c})}},[l,o,n,s,t]),C(()=>function({label:f,help:p,onValidChange:v,idAttribute:i}){const[x,Be]=O(i);return a(A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:f,help:typeof p=="function"?p(!s(x)):p,value:x,onChange:N=>{Be(N),s(N)||v(N)}})},[s])}function Ge({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return a(oe,{label:g("Change title heading element","launchpad-blocks"),icon:E(t),controls:e.map(n=>{{const r=n===t;return{icon:E(n),title:_e(n),isDisabled:r,onClick:()=>o(n)}}})})}function _e(e){switch(e){case"h2":return g("Heading 2","launchpad-blocks");case"h3":return g("Heading 3","launchpad-blocks");case"h4":return g("Heading 4","launchpad-blocks");case"h5":return g("Heading 5","launchpad-blocks");case"h6":return g("Heading 6","launchpad-blocks");case"p":return g("Paragraph","launchpad-blocks")}}function E(e){switch(e){case"h2":return ae;case"h3":return se;case"h4":return ie;case"h5":return ce;case"h6":return de;case"p":return ue}}function Ve(e){const{hasChildren:t}=P(o=>{const{getBlocks:n}=o(B);return{hasChildren:n(e).length>0}},[e]);return t}function We({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:r,updateBlockAttributes:l}=le(B);return k(ne,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[a("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":g("Block variations"),children:o.map(s=>k("li",{children:[a(j,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?a(ve,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&l(e,s.attributes),s.innerBlocks&&r(e,F(s.innerBlocks),!1)}}),a("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),n&&a("div",{className:"block-editor-block-variation-picker__skip",children:a(j,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:g("Skip")})})]})}function qe({imageId:e,className:t="",size:o="full"}){const n=P(l=>typeof e=="number"&&e>0?l(D).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?a(y,{children:a("img",{...(()=>{const l={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(l.src=n.media_details.sizes[o].source_url,l.width=n.media_details.sizes[o].width,l.height=n.media_details.sizes[o].height),l.srcSet=Object.entries(n.media_details.sizes??{}).map(([s,u])=>`${u.source_url} ${u.width}w`).join(", "),l})(),alt:n.alt_text||""})}):null}function L(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>L(o))):t.push([]),t}function Fe(e){const t=H(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}function G({context:e}){const t=e["launchpad-blocks/shouldLockChildSlidesToTemplate"],o=e["launchpad-blocks/template"],n=t&&!e["launchpad-blocks/isInTemplateEditMode"]?"contentOnly":!1,r=[];o.length===1&&o[0].name==="launchpad-blocks/carousel-content-slide"&&o[0].innerBlocks?.length===1&&o[0].innerBlocks[0].name==="launchpad-blocks/carousel-content-slide-content"&&o[0].innerBlocks[0].innerBlocks?r.push(...o[0].innerBlocks[0].innerBlocks):r.push(...o);const l=r.map(c=>L(c)),s=(0,S.useBlockProps)(),u=(0,S.useInnerBlocksProps)(s,{template:l,templateLock:n});return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{...u})})}G.displayName="CarouselContentSlideContentEdit";function we({hasInnerBlocks:e}){return e?Ce:ye}function ye(){return null}function Ce(){return(0,h.jsx)(S.InnerBlocks.Content,{})}const Se={from:[],to:[]},Te=[],Ue={},Ze=null;(0,d.registerBlockType)(z().name,{icon:V,deprecated:q,edit:G,save:we({hasInnerBlocks:!0}),transforms:Se}),Te.forEach(e=>{(0,d.registerBlockVariation)(z().name,e)})})(),w})());
