(function(y,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var C=x();for(var r in C)(typeof exports=="object"?exports:y)[r]=C[r]}})(globalThis,()=>(()=>{var $={8147(r){r.exports={apiVersion:3,name:"launchpad-blocks/accordion",parent:["launchpad-blocks/accordion-group"],title:"Accordion",category:"theme",description:"A block which has a header and collapsible content.",textdomain:"launchpad-blocks",keywords:["accordion"],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{isInitiallyOpen:{type:"boolean",default:!1},accordionId:{type:"string",default:""},headerContent:{type:"string"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"}},supports:{color:!0,typography:{fontSize:!0,lineHeight:!0,textAlign:!0},shadow:!0,spacing:{padding:!0,margin:!0}},providesContext:{},usesContext:["launchpad-blocks/accordion-heading-level"],example:{attributes:{isInitiallyOpen:!1,accordionId:"123",headerElement:"h2",headerContent:"Joke 1"},innerBlocks:[{name:"core/paragraph",attributes:{content:"I was going to sail around the globe in the world\u2019s smallest ship but I bottled it."}}]}}}},y={};function x(r){var b=y[r];if(b!==void 0)return b.exports;var g=y[r]={exports:{}};return $[r](g,g.exports,x),g.exports}x.n=r=>{var b=r&&r.__esModule?()=>r.default:()=>r;return x.d(b,{a:b}),b},x.d=(r,b)=>{for(var g in b)x.o(b,g)&&!x.o(r,g)&&Object.defineProperty(r,g,{enumerable:!0,get:b[g]})},x.o=(r,b)=>Object.prototype.hasOwnProperty.call(r,b);var C={};return(()=>{"use strict";const r=window.ReactJSXRuntime,b=window.wp.blocks,g=window.React,W=(0,g.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:a,isEditorMode:i=!1,...s}=o;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,...s,children:(0,r.jsx)("use",{href:`${i?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function S(e){return(0,r.jsx)(g.Suspense,{fallback:null,children:(0,r.jsx)(W,{...e})})}var F=x(8147),L=x.n(F);const w=window.wp.blockEditor,U={isInitiallyOpen:{type:"boolean",default:!1},accordionId:{type:"string",default:""},headerContent:{type:"string"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"}},J={color:!0,typography:{fontSize:!0,lineHeight:!0,textAlign:!0},shadow:!0,spacing:{padding:!0,margin:!0}},X={...U},K={...J},Q=[{fixture:[`<!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"9f29b837-b0ea-414b-8675-84fa2503dc61","headerContent":"Accordion that is open by default","fontSize":"t-2"} -->
<div data-accordion="" data-is-initially-open="true" id="9f29b837-b0ea-414b-8675-84fa2503dc61" class="wp-block-launchpad-blocks-accordion has-t-2-font-size"><h2><button aria-expanded="true" aria-controls="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" data-state="open" id="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" id="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->`],object:{attributes:X,supports:K,save:function({attributes:e}){const{isInitiallyOpen:t,accordionId:o,headerContent:n,headerElement:a}=e,i=a,s=w.useBlockProps.save({"data-accordion":"","data-is-initially-open":t,id:o});return(0,r.jsxs)("div",{...s,children:[(0,r.jsx)(i,{children:(0,r.jsxs)("button",{"aria-expanded":"true","aria-controls":`${o}-panel`,"data-state":"open",id:`${o}-trigger`,className:"accordion-header-button",children:[(0,r.jsx)(w.RichText.Content,{tagName:"span",className:"accordion-header-button-text",value:n}),(0,r.jsx)(S,{iconName:"accordion-arrow",className:"accordion-header-button-icon",isEditorMode:!0,size:"32"})]})}),(0,r.jsx)("div",{role:"region","data-state":"open","aria-labelledby":`${o}-trigger`,id:`${o}-panel`,className:"accordion-panel",children:(0,r.jsx)("div",{className:"accordion-panel-inner-wrapper",children:(0,r.jsx)(w.InnerBlocks.Content,{})})})]})},migrate:(e,t)=>[e,[...t]],isEligible:()=>!0}}.object],k=window.wp.components,N=window.wp.data,Y=window.wp.editor,Z=window.wp.hooks,ee=window.wp.i18n,A=window.wp.primitives,te=(0,r.jsx)(A.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,r.jsx)(A.Path,{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"})}),He=window.wp.coreData;var _,j,l,B,R,oe,ne,re,ae,ie,I,se,le,ce,de,ue,pe,D,he,me,O,P,ge,v,H,fe,be,ve,xe,we,ke,z,E,_e;function M(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Ee(e,t,o){const n=t.spacing?.blockGap;let a="none";if(n===!0)a="both";else if(Array.isArray(n)){const s=n.includes("horizontal"),p=n.includes("vertical");s&&p?a="both":s?a="horizontal":p&&(a="vertical")}const i={columnGap:a==="both"||a==="horizontal"?M(o?.spacing?.blockGap,a):void 0,rowGap:a==="both"||a==="vertical"?M(o?.spacing?.blockGap,a):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:i};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...i}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...i}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...i}};default:return{className:`is-layout-${e.type}`,style:{...i}}}}function ye(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const a=ye(n.innerBlocks,t);a&&o.push(...a)}return o},[])}const Me=()=>{const e=z(()=>({per_page:-1}),[]),t=z(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=z(()=>({}),[]),{postTypes:n,taxonomies:a}=P(m=>{const{getEntityRecords:h}=m(O),f=h("root","postType",e),c=h("root","taxonomy",t);if(!c)return{postTypes:f,taxonomies:c};for(const d of c)o[d.slug]=h("taxonomy",d.slug);return{postTypes:f,taxonomies:c}},[e,t,o]),i=["attachment"],s=[],p=n?.filter(({viewable:m,slug:h})=>m&&!i.includes(h));if(!p||p.length===0)return{postTypes:p,taxonomies:void 0};const u={};for(const m of p){const h=a?.filter(({types:f,slug:c})=>f.includes(m.slug)&&!s.includes(c));h&&(u[m.slug]=h.map(f=>{const c=o?.[f.slug]??null;return{...f,terms:c}}))}return{filteredPostTypes:p,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ge({list:e,containerClassName:t,renderItem:o}){return _(j,{children:[l("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),l("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function Ce(e){return e.indexOf("data:image/svg+xml,")===0}function je(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function Se(e){return e.indexOf("dashicons-")===0}function Ne({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return l("div",{className:"menu-icon","aria-hidden":"true",children:l("br",{})});if(Ce(e))return l("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:l("br",{})});if(je(e))return l("img",{src:new URL(e).toString(),alt:""});if(Se(e)){const t=e.replace("dashicons-","");return l(ne,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const qe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ve(){const[e,t,o,n]=B("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),a={};if(n&&o&&o.length>0)for(const i of o)a[i.slug]={color:i.color,name:i.name};if(t&&t?.length>0)for(const i of t)a[i.slug]={color:i.color,name:i.name};if(e&&e?.length>0)for(const i of e)a[i.slug]={color:i.color,name:i.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:a}}function We({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return l(re,{label:v("Custom colours","launchpad"),resetAll:a=>{if(a)for(const i of a)i()},children:l("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(a=>l(Be,{colour:a,attributesDefinition:t,attributes:o,setAttributes:n},a.attributeName))})})}function Be({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[a,i,s,p,u]=B("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==o[e.attributeName],h=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=E(null);return l(ae,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:h,hasValue:m,onDeselect:h,label:e.label,isShownByDefault:!0,children:l(ie,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:d})=>l(j,{children:l(I,{ref:f,__next40pxDefaultSize:!0,onClick:d,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:_("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[l(se,{colorValue:o[e.attributeName]})," ",l("span",{children:e.label})]})})}),renderContent:()=>l(le,{paddingSize:"none",children:l("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:l("div",{className:"block-editor-color-gradient-control__panel",children:l(ce,{colors:[...a&&a?.length>0?[{name:"User",colors:a}]:[],...i&&i?.length>0?[{name:"Theme",colors:i}]:[],...p&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:o[e.attributeName],onChange:c=>{n({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function Fe({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[a,i,s]=B("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),p=i?.map(({name:c,ratio:d})=>({label:c,value:d}))??[],u=a?.map(({name:c,ratio:d})=>({label:c,value:d}))??[],m=[{label:H("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?u:[],...p||[],{label:H("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[h,f]=_e(m.map(c=>c.value).includes(e)?e:"custom");return _(j,{children:[l(de,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:v("Aspect ratio","launchpad-blocks"),options:m,value:h,onChange:c=>{f(c),c!=="custom"&&t(c)}}),h==="custom"?l(ue,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:v("Custom aspect ratio","launchpad-blocks"),help:v("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?_(pe,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:v("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&n(c)},value:o,children:[l(D,{label:"Cover",value:"cover"}),l(D,{label:"Contain",value:"contain"})]}):null]})}const Ie=(e,t,o,n)=>{const{getBlocksByName:a,getBlockAttributes:i,getBlockParentsByBlockName:s}=(0,N.select)(w.store);return a(n).some(u=>{if(s(u,"core/template-part",!0).length)return!1;const{[o]:m}=i(u);return e!==u&&t===m})};function Pe(e,t,o,n,a){const{[t]:i}=e,s=(0,g.useCallback)(u=>Ie(o,u,t,a),[o,t,a]);return(0,g.useEffect)(()=>{if(i===""){const u=o.slice(0,o.indexOf("-"));n({[t]:u})}if(s(i)){const u=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${i}. New value: ${u}`),n({[t]:u})}},[i,o,n,s,t]),(0,g.useMemo)(()=>function({label:m,help:h,onValidChange:f,idAttribute:c}){const[d,V]=(0,g.useState)(c);return(0,r.jsx)(k.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof h=="function"?h(!s(d)):h,value:d,onChange:T=>{V(T),s(T)||f(T)}})},[s])}function Le({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return l(he,{label:v("Change title heading element","launchpad-blocks"),icon:G(t),controls:e.map(n=>{{const a=n===t;return{icon:G(n),title:ze(n),isDisabled:a,onClick:()=>o(n)}}})})}function ze(e){switch(e){case"h2":return v("Heading 2","launchpad-blocks");case"h3":return v("Heading 3","launchpad-blocks");case"h4":return v("Heading 4","launchpad-blocks");case"h5":return v("Heading 5","launchpad-blocks");case"h6":return v("Heading 6","launchpad-blocks");case"p":return v("Paragraph","launchpad-blocks")}}function G(e){switch(e){case"h2":return fe;case"h3":return be;case"h4":return ve;case"h5":return xe;case"h6":return we;case"p":return ke}}function Ue(e){const{hasChildren:t}=P(o=>{const{getBlocks:n}=o(R);return{hasChildren:n(e).length>0}},[e]);return t}function Je({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:a,updateBlockAttributes:i}=ge(R);return _(me,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[l("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":v("Block variations"),children:o.map(s=>_("li",{children:[l(I,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?l(Ne,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&i(e,s.attributes),s.innerBlocks&&a(e,oe(s.innerBlocks),!1)}}),l("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),n&&l("div",{className:"block-editor-block-variation-picker__skip",children:l(I,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{a(e,[],!1),i(e,{hasDismissedVariationsSelector:!0})},children:v("Skip")})})]})}function Xe({imageId:e,className:t="",size:o="full"}){const n=P(i=>typeof e=="number"&&e>0?i(O).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?l(j,{children:l("img",{...(()=>{const i={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(i.src=n.media_details.sizes[o].source_url,i.width=n.media_details.sizes[o].width,i.height=n.media_details.sizes[o].height),i.srcSet=Object.entries(n.media_details.sizes??{}).map(([s,p])=>`${p.source_url} ${p.width}w`).join(", "),i})(),alt:n.alt_text||""})}):null}function Te(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Te(o))):t.push([]),t}function Ke(e){const t=E(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const a=e()?.scrollHeight??0;if(a){const i=t.current.style;i.minHeight="",t.current.setAttribute("style",`${i.cssText}min-height: ${a}px !important`)}else t.current.style.minHeight=""}},1)}}function q({clientId:e,attributes:t,setAttributes:o,isSelected:n,context:a}){const{isInitiallyOpen:i,headerContent:s}=t,p=a["launchpad-blocks/accordion-heading-level"],u=(0,w.useBlockProps)(),m=(0,w.useInnerBlocksProps)({className:"accordion-panel-inner-wrapper"},{renderAppender:()=>(0,r.jsx)(w.Inserter,{rootClientId:e,renderToggle:({onToggle:d})=>!n&&!c?null:(0,r.jsx)(k.ButtonGroup,{children:(0,r.jsxs)(k.Button,{className:"accordion-inserter-button is-primary",onClick:d,children:[te," Add block inside the accordion"]})}),isAppender:!0})});Pe(t,"accordionId",e,o,"launchpad-blocks/accordion");const h=(0,N.useSelect)(d=>d(Y.store).getCurrentPost?.()??null,[]),f=(0,Z.applyFilters)("launchpadBlocks.accordionIcon",d=>(0,r.jsx)(S,{iconName:"accordion-arrow",...d}),h),c=(0,N.useSelect)(d=>d(w.store).hasSelectedInnerBlock(e,!0),[e]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.InspectorControls,{children:(0,r.jsx)(k.Panel,{children:(0,r.jsx)(k.PanelBody,{title:"Block settings",children:(0,r.jsx)(k.CheckboxControl,{__nextHasNoMarginBottom:!0,label:"Is accordion open by default?",help:"Allows you to set the initial state for the accordion. If only one accordion is allowed to be open at a time in the group, this setting will only apply to the first accordion with this setting enabled.",checked:i,onChange:d=>{o({isInitiallyOpen:d})}})})})}),(0,r.jsxs)("div",{...u,children:[(0,r.jsx)(p,{children:(0,r.jsxs)("div",{className:"accordion-header-button",children:[(0,r.jsx)(w.RichText,{tagName:"span",className:"accordion-header-button-text",onChange:d=>{o({headerContent:d})},value:s,allowedFormats:["core/bold","core/code","core/italic","core/keyboard","core/strikethrough","core/subscript","core/superscript","core/underline"],placeholder:(0,ee.__)("Write your accordion header\u2026","launchpad-blocks")}),(0,r.jsx)("div",{className:"accordion-header-button-icon-wrapper",children:(0,r.jsx)(f,{className:"accordion-header-button-icon",isEditorMode:!0})})]})}),(0,r.jsx)("div",{className:"accordion-panel",children:(0,r.jsx)("div",{...m})})]})]})}q.displayName="AccordionEdit";function $e({hasInnerBlocks:e}){return e?Re:Ae}function Ae(){return null}function Re(){return(0,r.jsx)(w.InnerBlocks.Content,{})}const Qe={},Ye=null;(0,b.registerBlockType)(L().name,{icon:(0,r.jsx)(S,{iconName:"accordion"}),edit:q,save:$e({hasInnerBlocks:!0}),deprecated:Q})})(),C})());
