(function(C,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var S=v();for(var n in S)(typeof exports=="object"?exports:C)[n]=S[n]}})(globalThis,()=>(()=>{var D={1361(n){n.exports={apiVersion:3,name:"launchpad-blocks/tab-panel",parent:["launchpad-blocks/tab-panel-group"],title:"Tab panel",category:"theme",description:"The panel of content associated with a tab in a Tabs block.",textdomain:"launchpad",editorScript:"file:./index.tsx",render:"file:./render.php",attributes:{id:{type:"string",default:""},tab:{type:"object",default:{id:"",label:""}}},providesContext:{},usesContext:["launchpad/tabsGroupId","launchpad/initiallySelectedTab"],supports:{align:!0,anchor:!1,color:!0,layout:{default:{type:"default"}},spacing:{blockGap:!0}}}},1173(n){n.exports={apiVersion:3,name:"launchpad-blocks/tabs",title:"Tabs",category:"theme",description:"Multiple sections of content collated together where only one is shown at a time.",textdomain:"launchpad",editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{tabsGroupId:{type:"string",default:""},shouldShowTabSectionTitle:{type:"boolean",default:!0},titleLevel:{type:"string",enum:["1","2","3","4","5","6"],default:"2"},title:{type:"string",default:""},initiallySelectedTab:{type:"string",default:""},hasDismissedVariationsSelector:{type:"boolean",default:!1}},providesContext:{"launchpad/tabsGroupId":"tabsGroupId","launchpad/initiallySelectedTab":"initiallySelectedTab","launchpad/shouldShowTabSectionTitle":"shouldShowTabSectionTitle","launchpad/title":"title"},usesContext:[],supports:{align:!0},example:{attributes:{tabsGroupId:"455684d7",title:"Tabs group heading",initiallySelectedTab:"tab_1"},innerBlocks:[{name:"launchpad-blocks/tab-list",attributes:{selectedTab:"tab_1"}},{name:"launchpad-blocks/tab-panel-group",innerBlocks:[{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_1",tab:{id:"tab_1_trigger",label:"Tab 1"}},innerBlocks:[{name:"core/paragraph",attributes:{content:"Pippin pressed forward as they passed under the lamp beneath the gate-arch, and when he saw the pale face of Faramir he caught his breath. It was the face of one who has been assailed by a great fear or anguish, but has mastered it and now is quiet. Proud and grave he stood for a moment as he spoke to the guard, and Pippin gazing at him saw how closely he resembled his brother Boromir \u2013 whom Pippin had liked from the first, admiring the great man's lordly but kindly manner. Yet suddenly for Faramir his heart was strangely moved with a feeling that he had not known before. Here was one with an air of high nobility such as Aragorn at times revealed, less high perhaps, yet also less incalculable and remote: one of the Kings of Men born into a later time, but touched with the wisdom and sadness of the Elder Race. He knew now why Beregond spoke his name with love. He was a captain that men would follow, that he would follow, even under the shadow of the black wings."}}]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_2",tab:{id:"tab_2_trigger",label:"Tab 2"}},innerBlocks:[]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_3",tab:{id:"tab_3_trigger",label:"Tab 3"}},innerBlocks:[]}]}]}}}},C={};function v(n){var x=C[n];if(x!==void 0)return x.exports;var g=C[n]={exports:{}};return D[n](g,g.exports,v),g.exports}v.n=n=>{var x=n&&n.__esModule?()=>n.default:()=>n;return v.d(x,{a:x}),x},v.d=(n,x)=>{for(var g in x)v.o(x,g)&&!v.o(n,g)&&Object.defineProperty(n,g,{enumerable:!0,get:x[g]})},v.o=(n,x)=>Object.prototype.hasOwnProperty.call(n,x);var S={};return(()=>{"use strict";const n=window.ReactJSXRuntime,x=window.wp.blocks,g=window.React,V=(0,g.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(a){const{iconName:o,size:l,isEditorMode:r=!1,...s}=a;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...s,children:(0,n.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function B(e){return(0,n.jsx)(g.Suspense,{fallback:null,children:(0,n.jsx)(V,{...e})})}var X=v(1361),J=v.n(X);const w=window.wp.blockEditor,T=window.wp.data;function He(e){if(e===void 0)throw new Error(`Pixel value ${e} is undefined`);if(!e.endsWith("px"))throw new Error(`Pixel value ${e} is not a pixel value`);if(e.includes(" "))throw new Error(`Pixel value ${e} contains multiple values`);return Number(e.replace("px",""))}function P(e){let t="";const a=document.createElement("div");return a.innerHTML=e,t=a.innerText,K(t)}function K(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|(?<!-)-+$/g,"")}function Y(e,t=()=>!0){const a=e.parentElement;return a===null?null:t(a)?a:Y(a,t)}function Oe(e){if(new RegExp("ms$","ig").test(e))return Number(e.substring(0,e.length-2));if(new RegExp("s$","ig").test(e))return Number(e.substring(0,e.length-1))*1e3;throw new Error("Time didn't end with ms or s so was not correctly parsed.")}function Me(){if(typeof document>"u")return"unknown";const e=window.navigator.userAgent;let t="unknown";return e.search("Windows")!==-1?t="Windows":e.search("Mac")!==-1?t="MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?t="UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1&&(t="Linux"),t}function Q(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(!Object.entries(e[a]).every(([l,r])=>Array.isArray(r)?Q(r,t[a]?.[l]):t[a]?.[l]===r))return!1;return!0}const y=window.wp.components,Ge=window.wp.coreData,R=window.wp.i18n;var N,$,h,E,Z,ee,te,ae,ne,oe,re,le,se,ie,H,ce,O,M,_,G,de,ue,pe,he,be,me,A,L,ge;function W(e,t){if(e===void 0)return e;let a;if(t==="both")a=e;else if(t==="horizontal")a=e.left;else if(t==="vertical")a=e.top;else return;return a.startsWith("var:")?`var(--wp--${a.replace("var:","").split("|").join("--")})`:a}function Le(e,t,a){const o=t.spacing?.blockGap;let l="none";if(o===!0)l="both";else if(Array.isArray(o)){const s=o.includes("horizontal"),c=o.includes("vertical");s&&c?l="both":s?l="horizontal":c&&(l="vertical")}const r={columnGap:l==="both"||l==="horizontal"?W(a?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?W(a?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function I(e,t){return e.reduce((a,o)=>{if(o.name===t)a.push(o);else if(o.innerBlocks){const l=I(o.innerBlocks,t);l&&a.push(...l)}return a},[])}const We=()=>{const e=A(()=>({per_page:-1}),[]),t=A(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),a=A(()=>({}),[]),{postTypes:o,taxonomies:l}=M(p=>{const{getEntityRecords:d}=p(O),b=d("root","postType",e),i=d("root","taxonomy",t);if(!i)return{postTypes:b,taxonomies:i};for(const m of i)a[m.slug]=d("taxonomy",m.slug);return{postTypes:b,taxonomies:i}},[e,t,a]),r=["attachment"],s=[],c=o?.filter(({viewable:p,slug:d})=>p&&!r.includes(d));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const u={};for(const p of c){const d=l?.filter(({types:b,slug:i})=>b.includes(p.slug)&&!s.includes(i));d&&(u[p.slug]=d.map(b=>{const i=a?.[b.slug]??null;return{...b,terms:i}}))}return{filteredPostTypes:c,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function qe({list:e,containerClassName:t,renderItem:a}){return N($,{children:[h("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),h("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>a({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function fe(e){return e.indexOf("data:image/svg+xml,")===0}function ve(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function xe(e){return e.indexOf("dashicons-")===0}function we({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return(0,n.jsx)("div",{className:"menu-icon","aria-hidden":"true",children:(0,n.jsx)("br",{})});if(fe(e))return(0,n.jsx)("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:(0,n.jsx)("br",{})});if(ve(e))return(0,n.jsx)("img",{src:new URL(e).toString(),alt:""});if(xe(e)){const t=e.replace("dashicons-","");return(0,n.jsx)(y.Dashicon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Fe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ue(){const[e,t,a,o]=E("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(o&&a&&a.length>0)for(const r of a)l[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)l[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)l[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:a,allPalettes:l}}function Ve({colours:e,attributesDefinition:t,attributes:a,setAttributes:o}){return h(Z,{label:_("Custom colours","launchpad"),resetAll:l=>{if(l)for(const r of l)r()},children:h("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>h(ke,{colour:l,attributesDefinition:t,attributes:a,setAttributes:o},l.attributeName))})})}function ke({colour:e,attributesDefinition:t,attributes:a,setAttributes:o}){const[l,r,s,c,u]=E("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),p=()=>t[e.attributeName]?.default!==a[e.attributeName],d=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=L(null);return h(ee,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:p,onDeselect:d,label:e.label,isShownByDefault:!0,children:h(te,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:m})=>h($,{children:h(ae,{ref:b,__next40pxDefaultSize:!0,onClick:m,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:N("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[h(ne,{colorValue:a[e.attributeName]})," ",h("span",{children:e.label})]})})}),renderContent:()=>h(oe,{paddingSize:"none",children:h("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:h("div",{className:"block-editor-color-gradient-control__panel",children:h(re,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...c&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:a[e.attributeName],onChange:i=>{o({[e.attributeName]:i})},disableCustomColors:!u})})})})})},e.attributeName)}function Xe({ratioValue:e,ratioOnChange:t,imageFitValue:a,imageFitOnChange:o}){const[l,r,s]=E("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=r?.map(({name:i,ratio:m})=>({label:i,value:m}))??[],u=l?.map(({name:i,ratio:m})=>({label:i,value:m}))??[],p=[{label:G("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?u:[],...c||[],{label:G("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,b]=ge(p.map(i=>i.value).includes(e)?e:"custom");return N($,{children:[h(le,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:_("Aspect ratio","launchpad-blocks"),options:p,value:d,onChange:i=>{b(i),i!=="custom"&&t(i)}}),d==="custom"?h(se,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:_("Custom aspect ratio","launchpad-blocks"),help:_("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?N(ie,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:_("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&o(i)},value:a,children:[h(H,{label:"Cover",value:"cover"}),h(H,{label:"Contain",value:"contain"})]}):null]})}const _e=(e,t,a,o)=>{const{getBlocksByName:l,getBlockAttributes:r,getBlockParentsByBlockName:s}=(0,T.select)(w.store);return l(o).some(u=>{if(s(u,"core/template-part",!0).length)return!1;const{[a]:p}=r(u);return e!==u&&t===p})};function ye(e,t,a,o,l){const{[t]:r}=e,s=(0,g.useCallback)(u=>_e(a,u,t,l),[a,t,l]);return(0,g.useEffect)(()=>{if(r===""){const u=a.slice(0,a.indexOf("-"));o({[t]:u})}if(s(r)){const u=a.slice(0,a.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${u}`),o({[t]:u})}},[r,a,o,s,t]),(0,g.useMemo)(()=>function({label:p,help:d,onValidChange:b,idAttribute:i}){const[m,j]=(0,g.useState)(i);return(0,n.jsx)(y.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:p,help:typeof d=="function"?d(!s(m)):d,value:m,onChange:k=>{j(k),s(k)||b(k)}})},[s])}function Je({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:a}){return h(ce,{label:_("Change title heading element","launchpad-blocks"),icon:q(t),controls:e.map(o=>{{const l=o===t;return{icon:q(o),title:Te(o),isDisabled:l,onClick:()=>a(o)}}})})}function Te(e){switch(e){case"h2":return _("Heading 2","launchpad-blocks");case"h3":return _("Heading 3","launchpad-blocks");case"h4":return _("Heading 4","launchpad-blocks");case"h5":return _("Heading 5","launchpad-blocks");case"h6":return _("Heading 6","launchpad-blocks");case"p":return _("Paragraph","launchpad-blocks")}}function q(e){switch(e){case"h2":return de;case"h3":return ue;case"h4":return pe;case"h5":return he;case"h6":return be;case"p":return me}}function je(e){const{hasChildren:t}=(0,T.useSelect)(a=>{const{getBlocks:o}=a(w.store);return{hasChildren:o(e).length>0}},[e]);return t}function Ce({clientId:e,blockInfo:t,variations:a,allowSkip:o}){const{replaceInnerBlocks:l,updateBlockAttributes:r}=(0,T.useDispatch)(w.store);return(0,n.jsxs)(y.Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[(0,n.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,R.__)("Block variations"),children:a.map(s=>(0,n.jsxs)("li",{children:[(0,n.jsx)(y.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?(0,n.jsx)(we,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&r(e,s.attributes),s.innerBlocks&&l(e,(0,x.createBlocksFromInnerBlocksTemplate)(s.innerBlocks),!1)}}),(0,n.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),o&&(0,n.jsx)("div",{className:"block-editor-block-variation-picker__skip",children:(0,n.jsx)(y.Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:(0,R.__)("Skip")})})]})}function Ke({imageId:e,className:t="",size:a="full"}){const o=M(r=>typeof e=="number"&&e>0?r(O).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?h($,{children:h("img",{...(()=>{const r={src:o.source_url,className:`attachment-${a} size-${a} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[a]&&(r.src=o.media_details.sizes[a].source_url,r.width=o.media_details.sizes[a].width,r.height=o.media_details.sizes[a].height),r.srcSet=Object.entries(o.media_details.sizes??{}).map(([s,c])=>`${c.source_url} ${c.width}w`).join(", "),r})(),alt:o.alt_text||""})}):null}function Se(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(a=>Se(a))):t.push([]),t}function Ye(e){const t=L(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}var Be=v(1173),Pe=v.n(Be);const Ne=[{name:"horizontal-tabs",title:"Horizontal tabs",attributes:{className:"wp-block-launchpad-blocks-tabs--horizontal"},innerBlocks:[["launchpad-blocks/tab-list",{selectedTab:"tab-1"}],["launchpad-blocks/tab-panel-group",{},[["launchpad-blocks/tab-panel",{id:"tab-1",tab:{id:"tab-1_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-2",tab:{id:"tab-2_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-3",tab:{id:"tab-3_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]]]]],icon:(0,n.jsx)(B,{isEditorMode:!0,iconName:"tabs"})},{name:"vertical-tabs",title:"Vertical tabs",attributes:{className:"wp-block-launchpad-blocks-tabs--vertical"},innerBlocks:[["launchpad-blocks/tab-list",{selectedTab:"tab-1",layout:{type:"flex",orientation:"vertical",verticalAlignment:"top",justifyContent:"left",flexWrap:"wrap"}}],["launchpad-blocks/tab-panel-group",{},[["launchpad-blocks/tab-panel",{id:"tab-1",tab:{id:"tab-1_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-2",tab:{id:"tab-2_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-3",tab:{id:"tab-3_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]]]]],isDefault:!1,icon:(0,n.jsx)(B,{isEditorMode:!0,iconName:"vertical-tabs"}),example:{attributes:{tabsGroupId:"455684d7",title:"Tabs group heading",initiallySelectedTab:"tab_1",className:"wp-block-launchpad-blocks-tabs--vertical"},innerBlocks:[{name:"launchpad-blocks/tab-list",attributes:{selectedTab:"tab_1",layout:{type:"flex",orientation:"vertical",verticalAlignment:"top",justifyContent:"left",flexWrap:"wrap"}}},{name:"launchpad-blocks/tab-panel-group",innerBlocks:[{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_1",tab:{id:"tab_1_trigger",label:"Tab 1"}},innerBlocks:[{name:"core/paragraph",attributes:{content:"Pippin pressed forward as they passed under the lamp beneath the gate-arch, and when he saw the pale face of Faramir he caught his breath. It was the face of one who has been assailed by a great fear or anguish, but has mastered it and now is quiet. Proud and grave he stood for a moment as he spoke to the guard, and Pippin gazing at him saw how closely he resembled his brother Boromir \u2013 whom Pippin had liked from the first, admiring the great man's lordly but kindly manner. Yet suddenly for Faramir his heart was strangely moved with a feeling that he had not known before. Here was one with an air of high nobility such as Aragorn at times revealed, less high perhaps, yet also less incalculable and remote: one of the Kings of Men born into a later time, but touched with the wisdom and sadness of the Elder Race. He knew now why Beregond spoke his name with love. He was a captain that men would follow, that he would follow, even under the shadow of the black wings."}}]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_2",tab:{id:"tab_2_trigger",label:"Tab 2"}},innerBlocks:[]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_3",tab:{id:"tab_3_trigger",label:"Tab 3"}},innerBlocks:[]}]}]}}];function $e({tabsGroupId:e,id:t,label:a,onChange:o,tabOrder:l}){return(0,n.jsx)(y.Fill,{name:`${e}TabList`,children:r=>{const{selectedTab:s,setSelectedTab:c,initiallySelectedTab:u,setInitiallySelectedTab:p}=r;return(0,n.jsx)(w.RichText,{tagName:"div",className:`tab${s===t?" show-tab-in-editor":""}`,style:{order:l},id:`${t}_trigger`,value:a,onChange:d=>{o(d),c(P(d)),u===t&&p(P(d))},placeholder:"Label",onClick:()=>{c(t)}})}})}function Ie({clientId:e,attributes:t,setAttributes:a}){const{tabsGroupId:o,title:l,titleLevel:r,shouldShowTabSectionTitle:s,initiallySelectedTab:c,hasDismissedVariationsSelector:u}=t,[p,d]=(0,g.useState)(r),b=(0,T.useSelect)(f=>I(f(w.store).getBlock(e).innerBlocks,"launchpad-blocks/tab-panel"),[e]),i=ye(t,"tabsGroupId",e,a,"launchpad-blocks/tabs"),m=(0,w.useBlockProps)({"data-launchpad-tabs-group":"true"}),{children:j,...k}=(0,w.useInnerBlocksProps)(m),z=`h${r}`,Re=je(e);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w.InspectorControls,{children:(0,n.jsx)(y.Panel,{children:(0,n.jsxs)(y.PanelBody,{children:[(0,n.jsx)(i,{label:"Unique tab identifier",help:f=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:"This will appear in the url when you interact with the tabs. Must be unique on a page."}),f?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsxs)("span",{style:{fontWeight:"bold",color:"red"},children:["This value is used by another tab group on the page. Using this value: ",o," "]})]})]}),onValidChange:f=>{a({tabsGroupId:f})},idAttribute:o}),(0,n.jsx)(y.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Initially selected tab",help:"If there's no url parameter, which tab should be open when a page is loaded? Defaults to the first tab.",value:c,onChange:f=>{a({initiallySelectedTab:f})},options:[{value:"",label:"Default"},...b.map(f=>{const U=f.attributes;return{value:U.id,label:U.tab.label}})]}),(0,n.jsx)(y.ToggleControl,{__nextHasNoMarginBottom:!0,checked:s,label:"Show tabs section title visually",help:"If not shown visually, the title is used as helper text for screen reader users, so a title still needs to be added.",onChange:f=>{a({shouldShowTabSectionTitle:f})}}),s?(0,n.jsx)(y.RadioControl,{label:"Title heading level",selected:p,onChange:f=>{["1","2","3","4","5","6"].includes(f)&&(d(f),a({titleLevel:f}))},options:[{value:"1",label:"Use a H1"},{value:"2",label:"Use a H2"},{value:"3",label:"Use a H3"},{value:"4",label:"Use a H4"},{value:"5",label:"Use a H5"},{value:"6",label:"Use a H6"}]}):null]})})}),(0,n.jsxs)("div",{...k,children:[(0,n.jsx)(w.RichText,{tagName:s?z:"p",className:`tabs_title${s?"":" is-style-screen-reader-only"}`,id:`${o}_title`,value:l,onChange:f=>{a({title:f})},placeholder:s?"Add a title for this tabs group...":"Add a label for screen readers for this tabs group..."}),(0,n.jsx)("div",{className:"wp-block-launchpad-blocks-tabs-content-wrapper",children:Re||u?j:(0,n.jsx)("div",{children:(0,n.jsx)(Ce,{clientId:e,blockInfo:{name:Pe().title,icon:(0,n.jsx)(B,{isEditorMode:!0,iconName:"tabs"})},variations:Ne,allowSkip:!0})})})]})]})}Ie.displayName="TabsEdit";function F({clientId:e,isSelected:t,attributes:{id:a,tab:o,metadata:l},context:r,setAttributes:s}){const{tabList:c,isAssociatedTabSelected:u,tabPanelOrderIndex:p}=Ee(e,a),d=(0,w.useBlockProps)({className:`tab-panel${u?" show-tab-in-editor":""}`,"data-panel-id":a,"data-tab-id":`${a}_trigger`}),{children:b,...i}=(0,w.useInnerBlocksProps)(d,{templateLock:!1}),{updateBlockAttributes:m}=(0,T.useDispatch)(w.store),j=(0,T.useSelect)(k=>k(w.store).hasSelectedInnerBlock(e,!0),[e]);return(0,g.useEffect)(()=>{c&&(t||j)&&m(c.clientId,{selectedTab:a})},[t,j,c,m,a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)($e,{id:a,label:o.label,tabsGroupId:r["launchpad/tabsGroupId"],tabOrder:p,onChange:k=>{s({id:P(k),tab:{id:`${P(k)}_trigger`,label:k},metadata:{...l,name:`Tab panel: ${k}`}})}}),(0,n.jsx)("section",{...i,children:b})]})}F.displayName="TabPanelEdit";function Ee(e,t){const{tabList:a,currentTabOrder:o}=(0,T.useSelect)(l=>{const{getBlockParentsByBlockName:r,getBlock:s,getBlockOrder:c}=l(w.store),u=r(e,"launchpad-blocks/tabs")[0],p=s(u).innerBlocks,d=I(p,"launchpad-blocks/tab-list"),b=I(p,"launchpad-blocks/tab-panel-group"),i=d?d[0]??null:null,m=b?b[0]??null:null,k=(m?c(m.clientId):[]).findIndex(z=>z===e);return{tabList:i,currentTabOrder:k}},[e]);return{tabList:a,isAssociatedTabSelected:a?.attributes.selectedTab===t,tabPanelOrderIndex:o+1}}function Ae({hasInnerBlocks:e}){return e?De:ze}function ze(){return null}function De(){return(0,n.jsx)(w.InnerBlocks.Content,{})}const Qe={},Ze=null;(0,x.registerBlockType)(J().name,{icon:(0,n.jsx)(B,{iconName:"tab-panel"}),edit:F,save:Ae({hasInnerBlocks:!0})})})(),S})());
