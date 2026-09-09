(function(T,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var j=v();for(var n in j)(typeof exports=="object"?exports:T)[n]=j[n]}})(globalThis,()=>(()=>{var D={1173(n){n.exports={apiVersion:3,name:"launchpad-blocks/tabs",title:"Tabs",category:"theme",description:"Multiple sections of content collated together where only one is shown at a time.",textdomain:"launchpad",editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{tabsGroupId:{type:"string",default:""},shouldShowTabSectionTitle:{type:"boolean",default:!0},titleLevel:{type:"string",enum:["1","2","3","4","5","6"],default:"2"},title:{type:"string",default:""},initiallySelectedTab:{type:"string",default:""},hasDismissedVariationsSelector:{type:"boolean",default:!1}},providesContext:{"launchpad/tabsGroupId":"tabsGroupId","launchpad/initiallySelectedTab":"initiallySelectedTab","launchpad/shouldShowTabSectionTitle":"shouldShowTabSectionTitle","launchpad/title":"title"},usesContext:[],supports:{align:!0},example:{attributes:{tabsGroupId:"455684d7",title:"Tabs group heading",initiallySelectedTab:"tab_1"},innerBlocks:[{name:"launchpad-blocks/tab-list",attributes:{selectedTab:"tab_1"}},{name:"launchpad-blocks/tab-panel-group",innerBlocks:[{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_1",tab:{id:"tab_1_trigger",label:"Tab 1"}},innerBlocks:[{name:"core/paragraph",attributes:{content:"Pippin pressed forward as they passed under the lamp beneath the gate-arch, and when he saw the pale face of Faramir he caught his breath. It was the face of one who has been assailed by a great fear or anguish, but has mastered it and now is quiet. Proud and grave he stood for a moment as he spoke to the guard, and Pippin gazing at him saw how closely he resembled his brother Boromir \u2013 whom Pippin had liked from the first, admiring the great man's lordly but kindly manner. Yet suddenly for Faramir his heart was strangely moved with a feeling that he had not known before. Here was one with an air of high nobility such as Aragorn at times revealed, less high perhaps, yet also less incalculable and remote: one of the Kings of Men born into a later time, but touched with the wisdom and sadness of the Elder Race. He knew now why Beregond spoke his name with love. He was a captain that men would follow, that he would follow, even under the shadow of the black wings."}}]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_2",tab:{id:"tab_2_trigger",label:"Tab 2"}},innerBlocks:[]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_3",tab:{id:"tab_3_trigger",label:"Tab 3"}},innerBlocks:[]}]}]}}}},T={};function v(n){var m=T[n];if(m!==void 0)return m.exports;var g=T[n]={exports:{}};return D[n](g,g.exports,v),g.exports}v.n=n=>{var m=n&&n.__esModule?()=>n.default:()=>n;return v.d(m,{a:m}),m},v.d=(n,m)=>{for(var g in m)v.o(m,g)&&!v.o(n,g)&&Object.defineProperty(n,g,{enumerable:!0,get:m[g]})},v.o=(n,m)=>Object.prototype.hasOwnProperty.call(n,m);var j={};return(()=>{"use strict";const n=window.ReactJSXRuntime,m=window.wp.blocks,g=window.React,K=(0,g.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(a){const{iconName:o,size:r,isEditorMode:l=!1,...i}=a;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...i,children:(0,n.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function C(e){return(0,n.jsx)(g.Suspense,{fallback:null,children:(0,n.jsx)(K,{...e})})}var X=v(1173),N=v.n(X);const _=window.wp.blockEditor,k=window.wp.components,S=window.wp.data,ze=window.wp.coreData,H=window.wp.i18n;var B,P,h,$,Y,Q,Z,ee,te,ae,ne,oe,le,re,R,ie,A,E,w,M,se,ce,de,ue,he,pe,I,G,be;function O(e,t){if(e===void 0)return e;let a;if(t==="both")a=e;else if(t==="horizontal")a=e.left;else if(t==="vertical")a=e.top;else return;return a.startsWith("var:")?`var(--wp--${a.replace("var:","").split("|").join("--")})`:a}function De(e,t,a){const o=t.spacing?.blockGap;let r="none";if(o===!0)r="both";else if(Array.isArray(o)){const i=o.includes("horizontal"),c=o.includes("vertical");i&&c?r="both":i?r="horizontal":c&&(r="vertical")}const l={columnGap:r==="both"||r==="horizontal"?O(a?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?O(a?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let i="";return e.minimumColumnWidth?i=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(i=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:i,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function F(e,t){return e.reduce((a,o)=>{if(o.name===t)a.push(o);else if(o.innerBlocks){const r=F(o.innerBlocks,t);r&&a.push(...r)}return a},[])}const He=()=>{const e=I(()=>({per_page:-1}),[]),t=I(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),a=I(()=>({}),[]),{postTypes:o,taxonomies:r}=E(p=>{const{getEntityRecords:u}=p(A),f=u("root","postType",e),s=u("root","taxonomy",t);if(!s)return{postTypes:f,taxonomies:s};for(const x of s)a[x.slug]=u("taxonomy",x.slug);return{postTypes:f,taxonomies:s}},[e,t,a]),l=["attachment"],i=[],c=o?.filter(({viewable:p,slug:u})=>p&&!l.includes(u));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const d={};for(const p of c){const u=r?.filter(({types:f,slug:s})=>f.includes(p.slug)&&!i.includes(s));u&&(d[p.slug]=u.map(f=>{const s=a?.[f.slug]??null;return{...f,terms:s}}))}return{filteredPostTypes:c,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Re({list:e,containerClassName:t,renderItem:a}){return B(P,{children:[h("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),h("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>a({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function me(e){return e.indexOf("data:image/svg+xml,")===0}function ge(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function fe(e){return e.indexOf("dashicons-")===0}function ve({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return(0,n.jsx)("div",{className:"menu-icon","aria-hidden":"true",children:(0,n.jsx)("br",{})});if(me(e))return(0,n.jsx)("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:(0,n.jsx)("br",{})});if(ge(e))return(0,n.jsx)("img",{src:new URL(e).toString(),alt:""});if(fe(e)){const t=e.replace("dashicons-","");return(0,n.jsx)(k.Dashicon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Ae={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ee(){const[e,t,a,o]=$("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(o&&a&&a.length>0)for(const l of a)r[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)r[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)r[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:a,allPalettes:r}}function Me({colours:e,attributesDefinition:t,attributes:a,setAttributes:o}){return h(Y,{label:w("Custom colours","launchpad"),resetAll:r=>{if(r)for(const l of r)l()},children:h("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>h(xe,{colour:r,attributesDefinition:t,attributes:a,setAttributes:o},r.attributeName))})})}function xe({colour:e,attributesDefinition:t,attributes:a,setAttributes:o}){const[r,l,i,c,d]=$("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),p=()=>t[e.attributeName]?.default!==a[e.attributeName],u=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=G(null);return h(Q,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:u,hasValue:p,onDeselect:u,label:e.label,isShownByDefault:!0,children:h(Z,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:s,onToggle:x})=>h(P,{children:h(ee,{ref:f,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":s,className:`block-editor-panel-color-gradient-settings__dropdown${s?" is-open":""}`,children:B("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[h(te,{colorValue:a[e.attributeName]})," ",h("span",{children:e.label})]})})}),renderContent:()=>h(ae,{paddingSize:"none",children:h("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:h("div",{className:"block-editor-color-gradient-control__panel",children:h(ne,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...c&&i&&i.length>0?[{name:"Default",colors:i}]:[]],value:a[e.attributeName],onChange:s=>{o({[e.attributeName]:s})},disableCustomColors:!d})})})})})},e.attributeName)}function Ge({ratioValue:e,ratioOnChange:t,imageFitValue:a,imageFitOnChange:o}){const[r,l,i]=$("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=l?.map(({name:s,ratio:x})=>({label:s,value:x}))??[],d=r?.map(({name:s,ratio:x})=>({label:s,value:x}))??[],p=[{label:M("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...i?d:[],...c||[],{label:M("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[u,f]=be(p.map(s=>s.value).includes(e)?e:"custom");return B(P,{children:[h(oe,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:w("Aspect ratio","launchpad-blocks"),options:p,value:u,onChange:s=>{f(s),s!=="custom"&&t(s)}}),u==="custom"?h(le,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:w("Custom aspect ratio","launchpad-blocks"),help:w("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?B(re,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:w("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:s=>{typeof s=="string"&&["contain","cover"].includes(s)&&o(s)},value:a,children:[h(R,{label:"Cover",value:"cover"}),h(R,{label:"Contain",value:"contain"})]}):null]})}const we=(e,t,a,o)=>{const{getBlocksByName:r,getBlockAttributes:l,getBlockParentsByBlockName:i}=(0,S.select)(_.store);return r(o).some(d=>{if(i(d,"core/template-part",!0).length)return!1;const{[a]:p}=l(d);return e!==d&&t===p})};function ke(e,t,a,o,r){const{[t]:l}=e,i=(0,g.useCallback)(d=>we(a,d,t,r),[a,t,r]);return(0,g.useEffect)(()=>{if(l===""){const d=a.slice(0,a.indexOf("-"));o({[t]:d})}if(i(l)){const d=a.slice(0,a.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${d}`),o({[t]:d})}},[l,a,o,i,t]),(0,g.useMemo)(()=>function({label:p,help:u,onValidChange:f,idAttribute:s}){const[x,z]=(0,g.useState)(s);return(0,n.jsx)(k.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:p,help:typeof u=="function"?u(!i(x)):u,value:x,onChange:y=>{z(y),i(y)||f(y)}})},[i])}function Oe({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:a}){return h(ie,{label:w("Change title heading element","launchpad-blocks"),icon:U(t),controls:e.map(o=>{{const r=o===t;return{icon:U(o),title:_e(o),isDisabled:r,onClick:()=>a(o)}}})})}function _e(e){switch(e){case"h2":return w("Heading 2","launchpad-blocks");case"h3":return w("Heading 3","launchpad-blocks");case"h4":return w("Heading 4","launchpad-blocks");case"h5":return w("Heading 5","launchpad-blocks");case"h6":return w("Heading 6","launchpad-blocks");case"p":return w("Paragraph","launchpad-blocks")}}function U(e){switch(e){case"h2":return se;case"h3":return ce;case"h4":return de;case"h5":return ue;case"h6":return he;case"p":return pe}}function ye(e){const{hasChildren:t}=(0,S.useSelect)(a=>{const{getBlocks:o}=a(_.store);return{hasChildren:o(e).length>0}},[e]);return t}function Te({clientId:e,blockInfo:t,variations:a,allowSkip:o}){const{replaceInnerBlocks:r,updateBlockAttributes:l}=(0,S.useDispatch)(_.store);return(0,n.jsxs)(k.Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[(0,n.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,H.__)("Block variations"),children:a.map(i=>(0,n.jsxs)("li",{children:[(0,n.jsx)(k.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof i.icon=="string"?(0,n.jsx)(ve,{iconString:i.icon}):i.icon,iconSize:48,onClick:()=>{i.attributes&&l(e,i.attributes),i.innerBlocks&&r(e,(0,m.createBlocksFromInnerBlocksTemplate)(i.innerBlocks),!1)}}),(0,n.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:i.title})]},i.name))}),o&&(0,n.jsx)("div",{className:"block-editor-block-variation-picker__skip",children:(0,n.jsx)(k.Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:(0,H.__)("Skip")})})]})}function Fe({imageId:e,className:t="",size:a="full"}){const o=E(l=>typeof e=="number"&&e>0?l(A).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?h(P,{children:h("img",{...(()=>{const l={src:o.source_url,className:`attachment-${a} size-${a} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[a]&&(l.src=o.media_details.sizes[a].source_url,l.width=o.media_details.sizes[a].width,l.height=o.media_details.sizes[a].height),l.srcSet=Object.entries(o.media_details.sizes??{}).map(([i,c])=>`${c.source_url} ${c.width}w`).join(", "),l})(),alt:o.alt_text||""})}):null}function je(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(a=>je(a))):t.push([]),t}function Ue(e){const t=G(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}const V=[{name:"horizontal-tabs",title:"Horizontal tabs",attributes:{className:"wp-block-launchpad-blocks-tabs--horizontal"},innerBlocks:[["launchpad-blocks/tab-list",{selectedTab:"tab-1"}],["launchpad-blocks/tab-panel-group",{},[["launchpad-blocks/tab-panel",{id:"tab-1",tab:{id:"tab-1_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-2",tab:{id:"tab-2_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-3",tab:{id:"tab-3_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]]]]],icon:(0,n.jsx)(C,{isEditorMode:!0,iconName:"tabs"})},{name:"vertical-tabs",title:"Vertical tabs",attributes:{className:"wp-block-launchpad-blocks-tabs--vertical"},innerBlocks:[["launchpad-blocks/tab-list",{selectedTab:"tab-1",layout:{type:"flex",orientation:"vertical",verticalAlignment:"top",justifyContent:"left",flexWrap:"wrap"}}],["launchpad-blocks/tab-panel-group",{},[["launchpad-blocks/tab-panel",{id:"tab-1",tab:{id:"tab-1_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-2",tab:{id:"tab-2_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-3",tab:{id:"tab-3_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]]]]],isDefault:!1,icon:(0,n.jsx)(C,{isEditorMode:!0,iconName:"vertical-tabs"}),example:{attributes:{tabsGroupId:"455684d7",title:"Tabs group heading",initiallySelectedTab:"tab_1",className:"wp-block-launchpad-blocks-tabs--vertical"},innerBlocks:[{name:"launchpad-blocks/tab-list",attributes:{selectedTab:"tab_1",layout:{type:"flex",orientation:"vertical",verticalAlignment:"top",justifyContent:"left",flexWrap:"wrap"}}},{name:"launchpad-blocks/tab-panel-group",innerBlocks:[{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_1",tab:{id:"tab_1_trigger",label:"Tab 1"}},innerBlocks:[{name:"core/paragraph",attributes:{content:"Pippin pressed forward as they passed under the lamp beneath the gate-arch, and when he saw the pale face of Faramir he caught his breath. It was the face of one who has been assailed by a great fear or anguish, but has mastered it and now is quiet. Proud and grave he stood for a moment as he spoke to the guard, and Pippin gazing at him saw how closely he resembled his brother Boromir \u2013 whom Pippin had liked from the first, admiring the great man's lordly but kindly manner. Yet suddenly for Faramir his heart was strangely moved with a feeling that he had not known before. Here was one with an air of high nobility such as Aragorn at times revealed, less high perhaps, yet also less incalculable and remote: one of the Kings of Men born into a later time, but touched with the wisdom and sadness of the Elder Race. He knew now why Beregond spoke his name with love. He was a captain that men would follow, that he would follow, even under the shadow of the black wings."}}]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_2",tab:{id:"tab_2_trigger",label:"Tab 2"}},innerBlocks:[]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_3",tab:{id:"tab_3_trigger",label:"Tab 3"}},innerBlocks:[]}]}]}}];var W,Ce,Se,q;function Ve({tabsGroupId:e,id:t,label:a,onChange:o,tabOrder:r}){return W(Se,{name:`${e}TabList`,children:l=>{const{selectedTab:i,setSelectedTab:c,initiallySelectedTab:d,setInitiallySelectedTab:p}=l;return W(Ce,{tagName:"div",className:`tab${i===t?" show-tab-in-editor":""}`,style:{order:r},id:`${t}_trigger`,value:a,onChange:u=>{o(u),c(q(u)),d===t&&p(q(u))},placeholder:"Label",onClick:()=>{c(t)}})}})}function L({clientId:e,attributes:t,setAttributes:a}){const{tabsGroupId:o,title:r,titleLevel:l,shouldShowTabSectionTitle:i,initiallySelectedTab:c,hasDismissedVariationsSelector:d}=t,[p,u]=(0,g.useState)(l),f=(0,S.useSelect)(b=>F(b(_.store).getBlock(e).innerBlocks,"launchpad-blocks/tab-panel"),[e]),s=ke(t,"tabsGroupId",e,a,"launchpad-blocks/tabs"),x=(0,_.useBlockProps)({"data-launchpad-tabs-group":"true"}),{children:z,...y}=(0,_.useInnerBlocksProps)(x),$e=`h${l}`,Ie=ye(e);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_.InspectorControls,{children:(0,n.jsx)(k.Panel,{children:(0,n.jsxs)(k.PanelBody,{children:[(0,n.jsx)(s,{label:"Unique tab identifier",help:b=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:"This will appear in the url when you interact with the tabs. Must be unique on a page."}),b?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsxs)("span",{style:{fontWeight:"bold",color:"red"},children:["This value is used by another tab group on the page. Using this value: ",o," "]})]})]}),onValidChange:b=>{a({tabsGroupId:b})},idAttribute:o}),(0,n.jsx)(k.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Initially selected tab",help:"If there's no url parameter, which tab should be open when a page is loaded? Defaults to the first tab.",value:c,onChange:b=>{a({initiallySelectedTab:b})},options:[{value:"",label:"Default"},...f.map(b=>{const J=b.attributes;return{value:J.id,label:J.tab.label}})]}),(0,n.jsx)(k.ToggleControl,{__nextHasNoMarginBottom:!0,checked:i,label:"Show tabs section title visually",help:"If not shown visually, the title is used as helper text for screen reader users, so a title still needs to be added.",onChange:b=>{a({shouldShowTabSectionTitle:b})}}),i?(0,n.jsx)(k.RadioControl,{label:"Title heading level",selected:p,onChange:b=>{["1","2","3","4","5","6"].includes(b)&&(u(b),a({titleLevel:b}))},options:[{value:"1",label:"Use a H1"},{value:"2",label:"Use a H2"},{value:"3",label:"Use a H3"},{value:"4",label:"Use a H4"},{value:"5",label:"Use a H5"},{value:"6",label:"Use a H6"}]}):null]})})}),(0,n.jsxs)("div",{...y,children:[(0,n.jsx)(_.RichText,{tagName:i?$e:"p",className:`tabs_title${i?"":" is-style-screen-reader-only"}`,id:`${o}_title`,value:r,onChange:b=>{a({title:b})},placeholder:i?"Add a title for this tabs group...":"Add a label for screen readers for this tabs group..."}),(0,n.jsx)("div",{className:"wp-block-launchpad-blocks-tabs-content-wrapper",children:Ie||d?z:(0,n.jsx)("div",{children:(0,n.jsx)(Te,{clientId:e,blockInfo:{name:N().title,icon:(0,n.jsx)(C,{isEditorMode:!0,iconName:"tabs"})},variations:V,allowSkip:!0})})})]})]})}L.displayName="TabsEdit";function Be({hasInnerBlocks:e}){return e?Ne:Pe}function Pe(){return null}function Ne(){return(0,n.jsx)(_.InnerBlocks.Content,{})}const We={"launchpad/tabsGroupId":"tabsGroupId","launchpad/initiallySelectedTab":"initiallySelectedTab","launchpad/shouldShowTabSectionTitle":"shouldShowTabSectionTitle","launchpad/title":"title"},qe=null;(0,m.registerBlockType)(N().name,{icon:(0,n.jsx)(C,{iconName:"tabs"}),edit:L,save:Be({hasInnerBlocks:!0})}),V.forEach(e=>{(0,m.registerBlockVariation)(N().name,e)})})(),j})());
