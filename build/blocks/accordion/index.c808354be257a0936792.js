(function(y,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var C=v();for(var a in C)(typeof exports=="object"?exports:y)[a]=C[a]}})(globalThis,()=>(()=>{var T={8147(a){a.exports={apiVersion:3,name:"launchpad-blocks/accordion",parent:["launchpad-blocks/accordion-group"],title:"Accordion",category:"theme",description:"A block which has a header and collapsible content.",textdomain:"launchpad-blocks",keywords:["accordion"],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{isInitiallyOpen:{type:"boolean",default:!1},accordionId:{type:"string",default:""},headerContent:{type:"string"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"}},supports:{color:!0,typography:{fontSize:!0,lineHeight:!0,textAlign:!0},shadow:!0,spacing:{padding:!0,margin:!0}},providesContext:{},usesContext:["launchpad-blocks/accordion-heading-level"],example:{attributes:{isInitiallyOpen:!1,accordionId:"123",headerElement:"h2",headerContent:"Joke 1"},innerBlocks:[{name:"core/paragraph",attributes:{content:"I was going to sail around the globe in the world\u2019s smallest ship but I bottled it."}}]}}}},y={};function v(a){var g=y[a];if(g!==void 0)return g.exports;var m=y[a]={exports:{}};return T[a](m,m.exports,v),m.exports}v.n=a=>{var g=a&&a.__esModule?()=>a.default:()=>a;return v.d(g,{a:g}),g},v.d=(a,g)=>{for(var m in g)v.o(g,m)&&!v.o(a,m)&&Object.defineProperty(a,m,{enumerable:!0,get:g[m]})},v.o=(a,g)=>Object.prototype.hasOwnProperty.call(a,g);var C={};return(()=>{"use strict";const a=window.ReactJSXRuntime,g=window.wp.blocks,m=window.React,V=(0,m.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:r,isEditorMode:i=!1,...s}=o;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...s,children:(0,a.jsx)("use",{href:`${i?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function N(e){return(0,a.jsx)(m.Suspense,{fallback:null,children:(0,a.jsx)(V,{...e})})}var W=v(8147),F=v.n(W);const x=window.wp.blockEditor,L={isInitiallyOpen:{type:"boolean",default:!1},accordionId:{type:"string",default:""},headerContent:{type:"string"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"}},U={color:!0,typography:{fontSize:!0,lineHeight:!0,textAlign:!0},shadow:!0,spacing:{padding:!0,margin:!0}},J={...L},X={...U},K=[{fixture:[`<!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"9f29b837-b0ea-414b-8675-84fa2503dc61","headerContent":"Accordion that is open by default","fontSize":"t-2"} -->
<div data-accordion="" data-is-initially-open="true" id="9f29b837-b0ea-414b-8675-84fa2503dc61" class="wp-block-launchpad-blocks-accordion has-t-2-font-size"><h2><button aria-expanded="true" aria-controls="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" data-state="open" id="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" id="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->`],object:{attributes:J,supports:X,save:function({attributes:e}){const{isInitiallyOpen:t,accordionId:o,headerContent:n,headerElement:r}=e,i=r,s=x.useBlockProps.save({"data-accordion":"","data-is-initially-open":t,id:o});return(0,a.jsxs)("div",{...s,children:[(0,a.jsx)(i,{children:(0,a.jsxs)("button",{"aria-expanded":"true","aria-controls":`${o}-panel`,"data-state":"open",id:`${o}-trigger`,className:"accordion-header-button",children:[(0,a.jsx)(x.RichText.Content,{tagName:"span",className:"accordion-header-button-text",value:n}),(0,a.jsx)(N,{iconName:"accordion-arrow",className:"accordion-header-button-icon",isEditorMode:!0,size:"32"})]})}),(0,a.jsx)("div",{role:"region","data-state":"open","aria-labelledby":`${o}-trigger`,id:`${o}-panel`,className:"accordion-panel",children:(0,a.jsx)("div",{className:"accordion-panel-inner-wrapper",children:(0,a.jsx)(x.InnerBlocks.Content,{})})})]})},migrate:(e,t)=>[e,[...t]],isEligible:()=>!0}}.object],k=window.wp.components,$=window.wp.data,Q=window.wp.hooks,Y=window.wp.i18n,A=window.wp.primitives,Z=(0,a.jsx)(A.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,a.jsx)(A.Path,{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"})}),Oe=window.wp.coreData;var _,j,c,S,R,ee,te,oe,ne,ae,B,re,ie,se,le,ce,de,D,ue,pe,O,I,he,b,H,me,fe,ge,be,ve,xe,P,E,we;function M(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function He(e,t,o){const n=t.spacing?.blockGap;let r="none";if(n===!0)r="both";else if(Array.isArray(n)){const s=n.includes("horizontal"),u=n.includes("vertical");s&&u?r="both":s?r="horizontal":u&&(r="vertical")}const i={columnGap:r==="both"||r==="horizontal"?M(o?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?M(o?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:i};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...i}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...i}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...i}};default:return{className:`is-layout-${e.type}`,style:{...i}}}}function ke(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const r=ke(n.innerBlocks,t);r&&o.push(...r)}return o},[])}const Ee=()=>{const e=P(()=>({per_page:-1}),[]),t=P(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=P(()=>({}),[]),{postTypes:n,taxonomies:r}=I(h=>{const{getEntityRecords:p}=h(O),f=p("root","postType",e),l=p("root","taxonomy",t);if(!l)return{postTypes:f,taxonomies:l};for(const w of l)o[w.slug]=p("taxonomy",w.slug);return{postTypes:f,taxonomies:l}},[e,t,o]),i=["attachment"],s=[],u=n?.filter(({viewable:h,slug:p})=>h&&!i.includes(p));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const d={};for(const h of u){const p=r?.filter(({types:f,slug:l})=>f.includes(h.slug)&&!s.includes(l));p&&(d[h.slug]=p.map(f=>{const l=o?.[f.slug]??null;return{...f,terms:l}}))}return{filteredPostTypes:u,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Me({list:e,containerClassName:t,renderItem:o}){return _(j,{children:[c("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),c("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function _e(e){return e.indexOf("data:image/svg+xml,")===0}function ye(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function Ce(e){return e.indexOf("dashicons-")===0}function je({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return c("div",{className:"menu-icon","aria-hidden":"true",children:c("br",{})});if(_e(e))return c("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:c("br",{})});if(ye(e))return c("img",{src:new URL(e).toString(),alt:""});if(Ce(e)){const t=e.replace("dashicons-","");return c(te,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Ge={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function qe(){const[e,t,o,n]=S("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(n&&o&&o.length>0)for(const i of o)r[i.slug]={color:i.color,name:i.name};if(t&&t?.length>0)for(const i of t)r[i.slug]={color:i.color,name:i.name};if(e&&e?.length>0)for(const i of e)r[i.slug]={color:i.color,name:i.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:r}}function Ve({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return c(oe,{label:b("Custom colours","launchpad"),resetAll:r=>{if(r)for(const i of r)i()},children:c("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>c(Ne,{colour:r,attributesDefinition:t,attributes:o,setAttributes:n},r.attributeName))})})}function Ne({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[r,i,s,u,d]=S("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==o[e.attributeName],p=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=E(null);return c(ne,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:h,onDeselect:p,label:e.label,isShownByDefault:!0,children:c(ae,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:l,onToggle:w})=>c(j,{children:c(B,{ref:f,__next40pxDefaultSize:!0,onClick:w,"aria-expanded":l,className:`block-editor-panel-color-gradient-settings__dropdown${l?" is-open":""}`,children:_("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[c(re,{colorValue:o[e.attributeName]})," ",c("span",{children:e.label})]})})}),renderContent:()=>c(ie,{paddingSize:"none",children:c("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:c("div",{className:"block-editor-color-gradient-control__panel",children:c(se,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...i&&i?.length>0?[{name:"Theme",colors:i}]:[],...u&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:o[e.attributeName],onChange:l=>{n({[e.attributeName]:l})},disableCustomColors:!d})})})})})},e.attributeName)}function We({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[r,i,s]=S("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=i?.map(({name:l,ratio:w})=>({label:l,value:w}))??[],d=r?.map(({name:l,ratio:w})=>({label:l,value:w}))??[],h=[{label:H("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?d:[],...u||[],{label:H("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,f]=we(h.map(l=>l.value).includes(e)?e:"custom");return _(j,{children:[c(le,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:b("Aspect ratio","launchpad-blocks"),options:h,value:p,onChange:l=>{f(l),l!=="custom"&&t(l)}}),p==="custom"?c(ce,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:b("Custom aspect ratio","launchpad-blocks"),help:b("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?_(de,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:b("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:l=>{typeof l=="string"&&["contain","cover"].includes(l)&&n(l)},value:o,children:[c(D,{label:"Cover",value:"cover"}),c(D,{label:"Contain",value:"contain"})]}):null]})}const Se=(e,t,o,n)=>{const{getBlocksByName:r,getBlockAttributes:i,getBlockParentsByBlockName:s}=(0,$.select)(x.store);return r(n).some(d=>{if(s(d,"core/template-part",!0).length)return!1;const{[o]:h}=i(d);return e!==d&&t===h})};function Be(e,t,o,n,r){const{[t]:i}=e,s=(0,m.useCallback)(d=>Se(o,d,t,r),[o,t,r]);return(0,m.useEffect)(()=>{if(i===""){const d=o.slice(0,o.indexOf("-"));n({[t]:d})}if(s(i)){const d=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${i}. New value: ${d}`),n({[t]:d})}},[i,o,n,s,t]),(0,m.useMemo)(()=>function({label:h,help:p,onValidChange:f,idAttribute:l}){const[w,Ae]=(0,m.useState)(l);return(0,a.jsx)(k.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof p=="function"?p(!s(w)):p,value:w,onChange:z=>{Ae(z),s(z)||f(z)}})},[s])}function Fe({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return c(ue,{label:b("Change title heading element","launchpad-blocks"),icon:G(t),controls:e.map(n=>{{const r=n===t;return{icon:G(n),title:Ie(n),isDisabled:r,onClick:()=>o(n)}}})})}function Ie(e){switch(e){case"h2":return b("Heading 2","launchpad-blocks");case"h3":return b("Heading 3","launchpad-blocks");case"h4":return b("Heading 4","launchpad-blocks");case"h5":return b("Heading 5","launchpad-blocks");case"h6":return b("Heading 6","launchpad-blocks");case"p":return b("Paragraph","launchpad-blocks")}}function G(e){switch(e){case"h2":return me;case"h3":return fe;case"h4":return ge;case"h5":return be;case"h6":return ve;case"p":return xe}}function Le(e){const{hasChildren:t}=I(o=>{const{getBlocks:n}=o(R);return{hasChildren:n(e).length>0}},[e]);return t}function Ue({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:r,updateBlockAttributes:i}=he(R);return _(pe,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[c("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":b("Block variations"),children:o.map(s=>_("li",{children:[c(B,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?c(je,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&i(e,s.attributes),s.innerBlocks&&r(e,ee(s.innerBlocks),!1)}}),c("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),n&&c("div",{className:"block-editor-block-variation-picker__skip",children:c(B,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),i(e,{hasDismissedVariationsSelector:!0})},children:b("Skip")})})]})}function Je({imageId:e,className:t="",size:o="full"}){const n=I(i=>typeof e=="number"&&e>0?i(O).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?c(j,{children:c("img",{...(()=>{const i={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(i.src=n.media_details.sizes[o].source_url,i.width=n.media_details.sizes[o].width,i.height=n.media_details.sizes[o].height),i.srcSet=Object.entries(n.media_details.sizes??{}).map(([s,u])=>`${u.source_url} ${u.width}w`).join(", "),i})(),alt:n.alt_text||""})}):null}function Pe(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Pe(o))):t.push([]),t}function Xe(e){const t=E(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const i=t.current.style;i.minHeight="",t.current.setAttribute("style",`${i.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}function q({clientId:e,attributes:t,setAttributes:o,isSelected:n,context:r}){const{isInitiallyOpen:i,headerContent:s}=t,u=r["launchpad-blocks/accordion-heading-level"],d=(0,x.useBlockProps)(),h=(0,x.useInnerBlocksProps)({className:"accordion-panel-inner-wrapper"},{renderAppender:()=>(0,a.jsx)(x.Inserter,{rootClientId:e,renderToggle:({onToggle:l})=>!n&&!f?null:(0,a.jsx)(k.ButtonGroup,{children:(0,a.jsxs)(k.Button,{className:"accordion-inserter-button is-primary",onClick:l,children:[Z," Add block inside the accordion"]})}),isAppender:!0})});Be(t,"accordionId",e,o,"launchpad-blocks/accordion");const p=(0,Q.applyFilters)("launchpadBlocks.accordionIcon",l=>(0,a.jsx)(N,{iconName:"accordion-arrow",...l})),f=(0,$.useSelect)(l=>l(x.store).hasSelectedInnerBlock(e,!0),[e]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.InspectorControls,{children:(0,a.jsx)(k.Panel,{children:(0,a.jsx)(k.PanelBody,{title:"Block settings",children:(0,a.jsx)(k.CheckboxControl,{__nextHasNoMarginBottom:!0,label:"Is accordion open by default?",help:"Allows you to set the initial state for the accordion. If only one accordion is allowed to be open at a time in the group, this setting will only apply to the first accordion with this setting enabled.",checked:i,onChange:l=>{o({isInitiallyOpen:l})}})})})}),(0,a.jsxs)("div",{...d,children:[(0,a.jsx)(u,{children:(0,a.jsxs)("div",{className:"accordion-header-button",children:[(0,a.jsx)(x.RichText,{tagName:"span",className:"accordion-header-button-text",onChange:l=>{o({headerContent:l})},value:s,allowedFormats:["core/bold","core/code","core/italic","core/keyboard","core/strikethrough","core/subscript","core/superscript","core/underline"],placeholder:(0,Y.__)("Write your accordion header\u2026","launchpad-blocks")}),(0,a.jsx)("div",{className:"accordion-header-button-icon-wrapper",children:(0,a.jsx)(p,{className:"accordion-header-button-icon",isEditorMode:!0})})]})}),(0,a.jsx)("div",{className:"accordion-panel",children:(0,a.jsx)("div",{...h})})]})]})}q.displayName="AccordionEdit";function ze({hasInnerBlocks:e}){return e?$e:Te}function Te(){return null}function $e(){return(0,a.jsx)(x.InnerBlocks.Content,{})}const Ke={},Qe=null;(0,g.registerBlockType)(F().name,{icon:(0,a.jsx)(N,{iconName:"accordion"}),edit:q,save:ze({hasInnerBlocks:!0}),deprecated:K})})(),C})());
