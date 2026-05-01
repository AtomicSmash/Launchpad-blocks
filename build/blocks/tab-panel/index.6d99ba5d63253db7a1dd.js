(function(C,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var S=v();for(var n in S)(typeof exports=="object"?exports:C)[n]=S[n]}})(globalThis,()=>(()=>{var D={1361(n){n.exports={apiVersion:3,name:"launchpad-blocks/tab-panel",parent:["launchpad-blocks/tab-panel-group"],title:"Tab panel",category:"theme",description:"The panel of content associated with a tab in a Tabs block.",textdomain:"launchpad",editorScript:"file:./index.tsx",render:"file:./render.php",attributes:{id:{type:"string",default:""},tab:{type:"object",default:{id:"",label:""}}},providesContext:{},usesContext:["launchpad/tabsGroupId","launchpad/initiallySelectedTab"],supports:{align:!0,anchor:!1,color:!0,layout:{default:{type:"default"}},spacing:{blockGap:!0}}}},1173(n){n.exports={apiVersion:3,name:"launchpad-blocks/tabs",title:"Tabs",category:"theme",description:"Multiple sections of content collated together where only one is shown at a time.",textdomain:"launchpad",editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{tabsGroupId:{type:"string",default:""},shouldShowTabSectionTitle:{type:"boolean",default:!0},titleLevel:{type:"string",enum:["1","2","3","4","5","6"],default:"2"},title:{type:"string",default:""},initiallySelectedTab:{type:"string",default:""},hasDismissedVariationsSelector:{type:"boolean",default:!1}},providesContext:{"launchpad/tabsGroupId":"tabsGroupId","launchpad/initiallySelectedTab":"initiallySelectedTab","launchpad/shouldShowTabSectionTitle":"shouldShowTabSectionTitle","launchpad/title":"title"},usesContext:[],supports:{align:!0},example:{attributes:{tabsGroupId:"455684d7",title:"Tabs group heading",initiallySelectedTab:"tab_1"},innerBlocks:[{name:"launchpad-blocks/tab-list",attributes:{selectedTab:"tab_1"}},{name:"launchpad-blocks/tab-panel-group",innerBlocks:[{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_1",tab:{id:"tab_1_trigger",label:"Tab 1"}},innerBlocks:[{name:"core/paragraph",attributes:{content:"Pippin pressed forward as they passed under the lamp beneath the gate-arch, and when he saw the pale face of Faramir he caught his breath. It was the face of one who has been assailed by a great fear or anguish, but has mastered it and now is quiet. Proud and grave he stood for a moment as he spoke to the guard, and Pippin gazing at him saw how closely he resembled his brother Boromir \u2013 whom Pippin had liked from the first, admiring the great man's lordly but kindly manner. Yet suddenly for Faramir his heart was strangely moved with a feeling that he had not known before. Here was one with an air of high nobility such as Aragorn at times revealed, less high perhaps, yet also less incalculable and remote: one of the Kings of Men born into a later time, but touched with the wisdom and sadness of the Elder Race. He knew now why Beregond spoke his name with love. He was a captain that men would follow, that he would follow, even under the shadow of the black wings."}}]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_2",tab:{id:"tab_2_trigger",label:"Tab 2"}},innerBlocks:[]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_3",tab:{id:"tab_3_trigger",label:"Tab 3"}},innerBlocks:[]}]}]}}}},C={};function v(n){var x=C[n];if(x!==void 0)return x.exports;var p=C[n]={exports:{}};return D[n](p,p.exports,v),p.exports}v.n=n=>{var x=n&&n.__esModule?()=>n.default:()=>n;return v.d(x,{a:x}),x},v.d=(n,x)=>{for(var p in x)v.o(x,p)&&!v.o(n,p)&&Object.defineProperty(n,p,{enumerable:!0,get:x[p]})},v.o=(n,x)=>Object.prototype.hasOwnProperty.call(n,x);var S={};return(()=>{"use strict";const n=window.ReactJSXRuntime,x=window.wp.blocks,p=window.wp.blockEditor,_=window.wp.components,Ge=window.wp.coreData,T=window.wp.data,M=window.wp.i18n,y=window.React;var R;function Le(e){return R("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:R("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function X(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,n.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,n.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,n.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const J=(0,y.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(a){const{iconName:o,size:r,isEditorMode:l=!1,...s}=a;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...s,children:(0,n.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function B(e){return(0,n.jsx)(y.Suspense,{fallback:null,children:(0,n.jsx)(J,{...e})})}var P,N,b,I,K,Y,Z,Q,ee,te,ae,ne,oe,le,H,re,O,G,k,L,se,ie,ce,de,ue,pe,E,W,he;function be(){(0,x.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:X})}function q(e,t){if(e===void 0)return e;let a;if(t==="both")a=e;else if(t==="horizontal")a=e.left;else if(t==="vertical")a=e.top;else return;return a.startsWith("var:")?`var(--wp--${a.replace("var:","").split("|").join("--")})`:a}function We(e,t,a){const o=t.spacing?.blockGap;let r="none";if(o===!0)r="both";else if(Array.isArray(o)){const s=o.includes("horizontal"),c=o.includes("vertical");s&&c?r="both":s?r="horizontal":c&&(r="vertical")}const l={columnGap:r==="both"||r==="horizontal"?q(a?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?q(a?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function $(e,t){return e.reduce((a,o)=>{if(o.name===t)a.push(o);else if(o.innerBlocks){const r=$(o.innerBlocks,t);r&&a.push(...r)}return a},[])}const qe=()=>{const e=E(()=>({per_page:-1}),[]),t=E(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),a=E(()=>({}),[]),{postTypes:o,taxonomies:r}=G(h=>{const{getEntityRecords:d}=h(O),m=d("root","postType",e),i=d("root","taxonomy",t);if(!i)return{postTypes:m,taxonomies:i};for(const g of i)a[g.slug]=d("taxonomy",g.slug);return{postTypes:m,taxonomies:i}},[e,t,a]),l=["attachment"],s=[],c=o?.filter(({viewable:h,slug:d})=>h&&!l.includes(d));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const u={};for(const h of c){const d=r?.filter(({types:m,slug:i})=>m.includes(h.slug)&&!s.includes(i));d&&(u[h.slug]=d.map(m=>{const i=a?.[m.slug]??null;return{...m,terms:i}}))}return{filteredPostTypes:c,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Fe({list:e,containerClassName:t,renderItem:a}){return P(N,{children:[b("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),b("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>a({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function me(e){return e.indexOf("data:image/svg+xml,")===0}function ge(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function fe(e){return e.indexOf("dashicons-")===0}function xe({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return(0,n.jsx)("div",{className:"menu-icon","aria-hidden":"true",children:(0,n.jsx)("br",{})});if(me(e))return(0,n.jsx)("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:(0,n.jsx)("br",{})});if(ge(e))return(0,n.jsx)("img",{src:new URL(e).toString(),alt:""});if(fe(e)){const t=e.replace("dashicons-","");return(0,n.jsx)(_.Dashicon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Ue={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ve(){const[e,t,a,o]=I("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(o&&a&&a.length>0)for(const l of a)r[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)r[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)r[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:a,allPalettes:r}}function Xe({colours:e,attributesDefinition:t,attributes:a,setAttributes:o}){return b(K,{label:k("Custom colours","launchpad"),resetAll:r=>{if(r)for(const l of r)l()},children:b("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>b(ve,{colour:r,attributesDefinition:t,attributes:a,setAttributes:o},r.attributeName))})})}function ve({colour:e,attributesDefinition:t,attributes:a,setAttributes:o}){const[r,l,s,c,u]=I("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==a[e.attributeName],d=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},m=W(null);return b(Y,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:h,onDeselect:d,label:e.label,isShownByDefault:!0,children:b(Z,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:g})=>b(N,{children:b(Q,{ref:m,__next40pxDefaultSize:!0,onClick:g,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:P("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[b(ee,{colorValue:a[e.attributeName]})," ",b("span",{children:e.label})]})})}),renderContent:()=>b(te,{paddingSize:"none",children:b("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:b("div",{className:"block-editor-color-gradient-control__panel",children:b(ae,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...c&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:a[e.attributeName],onChange:i=>{o({[e.attributeName]:i})},disableCustomColors:!u})})})})})},e.attributeName)}function Je({ratioValue:e,ratioOnChange:t,imageFitValue:a,imageFitOnChange:o}){const[r,l,s]=I("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=l?.map(({name:i,ratio:g})=>({label:i,value:g}))??[],u=r?.map(({name:i,ratio:g})=>({label:i,value:g}))??[],h=[{label:L("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?u:[],...c||[],{label:L("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,m]=he(h.map(i=>i.value).includes(e)?e:"custom");return P(N,{children:[b(ne,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:k("Aspect ratio","launchpad-blocks"),options:h,value:d,onChange:i=>{m(i),i!=="custom"&&t(i)}}),d==="custom"?b(oe,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:k("Custom aspect ratio","launchpad-blocks"),help:k("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?P(le,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:k("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&o(i)},value:a,children:[b(H,{label:"Cover",value:"cover"}),b(H,{label:"Contain",value:"contain"})]}):null]})}const we=(e,t,a,o)=>{const{getBlocksByName:r,getBlockAttributes:l,getBlockParentsByBlockName:s}=(0,T.select)(p.store);return r(o).some(u=>{if(s(u,"core/template-part",!0).length)return!1;const{[a]:h}=l(u);return e!==u&&t===h})};function ke(e,t,a,o,r){const{[t]:l}=e,s=(0,y.useCallback)(u=>we(a,u,t,r),[a,t,r]);return(0,y.useEffect)(()=>{if(l===""){const u=a.slice(0,a.indexOf("-"));o({[t]:u})}if(s(l)){const u=a.slice(0,a.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${u}`),o({[t]:u})}},[l,a,o,s,t]),(0,y.useMemo)(()=>function({label:h,help:d,onValidChange:m,idAttribute:i}){const[g,j]=(0,y.useState)(i);return(0,n.jsx)(_.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof d=="function"?d(!s(g)):d,value:g,onChange:w=>{j(w),s(w)||m(w)}})},[s])}function Ke({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:a}){return b(re,{label:k("Change title heading element","launchpad-blocks"),icon:F(t),controls:e.map(o=>{{const r=o===t;return{icon:F(o),title:_e(o),isDisabled:r,onClick:()=>a(o)}}})})}function _e(e){switch(e){case"h2":return k("Heading 2","launchpad-blocks");case"h3":return k("Heading 3","launchpad-blocks");case"h4":return k("Heading 4","launchpad-blocks");case"h5":return k("Heading 5","launchpad-blocks");case"h6":return k("Heading 6","launchpad-blocks");case"p":return k("Paragraph","launchpad-blocks")}}function F(e){switch(e){case"h2":return se;case"h3":return ie;case"h4":return ce;case"h5":return de;case"h6":return ue;case"p":return pe}}function ye(e){const{hasChildren:t}=(0,T.useSelect)(a=>{const{getBlocks:o}=a(p.store);return{hasChildren:o(e).length>0}},[e]);return t}function Te({clientId:e,blockInfo:t,variations:a,allowSkip:o}){const{replaceInnerBlocks:r,updateBlockAttributes:l}=(0,T.useDispatch)(p.store);return(0,n.jsxs)(_.Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[(0,n.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,M.__)("Block variations"),children:a.map(s=>(0,n.jsxs)("li",{children:[(0,n.jsx)(_.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?(0,n.jsx)(xe,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&l(e,s.attributes),s.innerBlocks&&r(e,(0,x.createBlocksFromInnerBlocksTemplate)(s.innerBlocks),!1)}}),(0,n.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),o&&(0,n.jsx)("div",{className:"block-editor-block-variation-picker__skip",children:(0,n.jsx)(_.Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:(0,M.__)("Skip")})})]})}function Ye({imageId:e,className:t="",size:a="full"}){const o=G(l=>typeof e=="number"&&e>0?l(O).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?b(N,{children:b("img",{...(()=>{const l={src:o.source_url,className:`attachment-${a} size-${a} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[a]&&(l.src=o.media_details.sizes[a].source_url,l.width=o.media_details.sizes[a].width,l.height=o.media_details.sizes[a].height),l.srcSet=Object.entries(o.media_details.sizes??{}).map(([s,c])=>`${c.source_url} ${c.width}w`).join(", "),l})(),alt:o.alt_text||""})}):null}function je(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(a=>je(a))):t.push([]),t}function Ze(e){const t=W(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var Ce=v(1361),Se=v.n(Ce);function Qe(e){if(e===void 0)throw new Error(`Pixel value ${e} is undefined`);if(!e.endsWith("px"))throw new Error(`Pixel value ${e} is not a pixel value`);if(e.includes(" "))throw new Error(`Pixel value ${e} contains multiple values`);return Number(e.replace("px",""))}function z(e){let t="";const a=document.createElement("div");return a.innerHTML=e,t=a.innerText,Be(t)}function Be(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|(?<!-)-+$/g,"")}function Pe(e,t=()=>!0){const a=e.parentElement;return a===null?null:t(a)?a:Pe(a,t)}function et(e){if(new RegExp("ms$","ig").test(e))return Number(e.substring(0,e.length-2));if(new RegExp("s$","ig").test(e))return Number(e.substring(0,e.length-1))*1e3;throw new Error("Time didn't end with ms or s so was not correctly parsed.")}function tt(){if(typeof document>"u")return"unknown";const e=window.navigator.userAgent;let t="unknown";return e.search("Windows")!==-1?t="Windows":e.search("Mac")!==-1?t="MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?t="UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1&&(t="Linux"),t}function Ne(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(!Object.entries(e[a]).every(([r,l])=>Array.isArray(l)?Ne(l,t[a]?.[r]):t[a]?.[r]===l))return!1;return!0}var $e=v(1173),ze=v.n($e);const Ie=[{name:"horizontal-tabs",title:"Horizontal tabs",attributes:{className:"wp-block-launchpad-blocks-tabs--horizontal"},innerBlocks:[["launchpad-blocks/tab-list",{selectedTab:"tab-1"}],["launchpad-blocks/tab-panel-group",{},[["launchpad-blocks/tab-panel",{id:"tab-1",tab:{id:"tab-1_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-2",tab:{id:"tab-2_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-3",tab:{id:"tab-3_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]]]]],icon:(0,n.jsx)(B,{isEditorMode:!0,iconName:"tabs"})},{name:"vertical-tabs",title:"Vertical tabs",attributes:{className:"wp-block-launchpad-blocks-tabs--vertical"},innerBlocks:[["launchpad-blocks/tab-list",{selectedTab:"tab-1",layout:{type:"flex",orientation:"vertical",verticalAlignment:"top",justifyContent:"left",flexWrap:"wrap"}}],["launchpad-blocks/tab-panel-group",{},[["launchpad-blocks/tab-panel",{id:"tab-1",tab:{id:"tab-1_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-2",tab:{id:"tab-2_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-3",tab:{id:"tab-3_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]]]]],isDefault:!1,icon:(0,n.jsx)(B,{isEditorMode:!0,iconName:"vertical-tabs"}),example:{attributes:{tabsGroupId:"455684d7",title:"Tabs group heading",initiallySelectedTab:"tab_1",className:"wp-block-launchpad-blocks-tabs--vertical"},innerBlocks:[{name:"launchpad-blocks/tab-list",attributes:{selectedTab:"tab_1",layout:{type:"flex",orientation:"vertical",verticalAlignment:"top",justifyContent:"left",flexWrap:"wrap"}}},{name:"launchpad-blocks/tab-panel-group",innerBlocks:[{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_1",tab:{id:"tab_1_trigger",label:"Tab 1"}},innerBlocks:[{name:"core/paragraph",attributes:{content:"Pippin pressed forward as they passed under the lamp beneath the gate-arch, and when he saw the pale face of Faramir he caught his breath. It was the face of one who has been assailed by a great fear or anguish, but has mastered it and now is quiet. Proud and grave he stood for a moment as he spoke to the guard, and Pippin gazing at him saw how closely he resembled his brother Boromir \u2013 whom Pippin had liked from the first, admiring the great man's lordly but kindly manner. Yet suddenly for Faramir his heart was strangely moved with a feeling that he had not known before. Here was one with an air of high nobility such as Aragorn at times revealed, less high perhaps, yet also less incalculable and remote: one of the Kings of Men born into a later time, but touched with the wisdom and sadness of the Elder Race. He knew now why Beregond spoke his name with love. He was a captain that men would follow, that he would follow, even under the shadow of the black wings."}}]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_2",tab:{id:"tab_2_trigger",label:"Tab 2"}},innerBlocks:[]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_3",tab:{id:"tab_3_trigger",label:"Tab 3"}},innerBlocks:[]}]}]}}];function Ee({tabsGroupId:e,id:t,label:a,onChange:o,tabOrder:r}){return(0,n.jsx)(_.Fill,{name:`${e}TabList`,children:l=>{const{selectedTab:s,setSelectedTab:c,initiallySelectedTab:u,setInitiallySelectedTab:h}=l;return(0,n.jsx)(p.RichText,{tagName:"div",className:`tab${s===t?" show-tab-in-editor":""}`,style:{order:r},id:`${t}_trigger`,value:a,onChange:d=>{o(d),c(z(d)),u===t&&h(z(d))},placeholder:"Label",onClick:()=>{c(t)}})}})}function Ae({clientId:e,attributes:t,setAttributes:a}){const{tabsGroupId:o,title:r,titleLevel:l,shouldShowTabSectionTitle:s,initiallySelectedTab:c,hasDismissedVariationsSelector:u}=t,[h,d]=(0,y.useState)(l),m=(0,T.useSelect)(f=>$(f(p.store).getBlock(e).innerBlocks,"launchpad-blocks/tab-panel"),[e]),i=ke(t,"tabsGroupId",e,a,"launchpad-blocks/tabs"),g=(0,p.useBlockProps)({"data-launchpad-tabs-group":"true"}),{children:j,...w}=(0,p.useInnerBlocksProps)(g),A=`h${l}`,Oe=ye(e);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.InspectorControls,{children:(0,n.jsx)(_.Panel,{children:(0,n.jsxs)(_.PanelBody,{children:[(0,n.jsx)(i,{label:"Unique tab identifier",help:f=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:"This will appear in the url when you interact with the tabs. Must be unique on a page."}),f?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsxs)("span",{style:{fontWeight:"bold",color:"red"},children:["This value is used by another tab group on the page. Using this value: ",o," "]})]})]}),onValidChange:f=>{a({tabsGroupId:f})},idAttribute:o}),(0,n.jsx)(_.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Initially selected tab",help:"If there's no url parameter, which tab should be open when a page is loaded? Defaults to the first tab.",value:c,onChange:f=>{a({initiallySelectedTab:f})},options:[{value:"",label:"Default"},...m.map(f=>{const V=f.attributes;return{value:V.id,label:V.tab.label}})]}),(0,n.jsx)(_.ToggleControl,{__nextHasNoMarginBottom:!0,checked:s,label:"Show tabs section title visually",help:"If not shown visually, the title is used as helper text for screen reader users, so a title still needs to be added.",onChange:f=>{a({shouldShowTabSectionTitle:f})}}),s?(0,n.jsx)(_.RadioControl,{label:"Title heading level",selected:h,onChange:f=>{["1","2","3","4","5","6"].includes(f)&&(d(f),a({titleLevel:f}))},options:[{value:"1",label:"Use a H1"},{value:"2",label:"Use a H2"},{value:"3",label:"Use a H3"},{value:"4",label:"Use a H4"},{value:"5",label:"Use a H5"},{value:"6",label:"Use a H6"}]}):null]})})}),(0,n.jsxs)("div",{...w,children:[(0,n.jsx)(p.RichText,{tagName:s?A:"p",className:`tabs_title${s?"":" is-style-screen-reader-only"}`,id:`${o}_title`,value:r,onChange:f=>{a({title:f})},placeholder:s?"Add a title for this tabs group...":"Add a label for screen readers for this tabs group..."}),(0,n.jsx)("div",{className:"wp-block-launchpad-blocks-tabs-content-wrapper",children:Oe||u?j:(0,n.jsx)("div",{children:(0,n.jsx)(Te,{clientId:e,blockInfo:{name:ze().title,icon:(0,n.jsx)(B,{isEditorMode:!0,iconName:"tabs"})},variations:Ie,allowSkip:!0})})})]})]})}Ae.displayName="TabsEdit";function U({clientId:e,isSelected:t,attributes:{id:a,tab:o,metadata:r},context:l,setAttributes:s}){const{tabList:c,isAssociatedTabSelected:u,tabPanelOrderIndex:h}=De(e,a),d=(0,p.useBlockProps)({className:`tab-panel${u?" show-tab-in-editor":""}`,"data-panel-id":a,"data-tab-id":`${a}_trigger`}),{children:m,...i}=(0,p.useInnerBlocksProps)(d,{templateLock:!1}),{updateBlockAttributes:g}=(0,T.useDispatch)(p.store),j=(0,T.useSelect)(w=>w(p.store).hasSelectedInnerBlock(e,!0),[e]);return(0,y.useEffect)(()=>{c&&(t||j)&&g(c.clientId,{selectedTab:a})},[t,j,c,g,a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ee,{id:a,label:o.label,tabsGroupId:l["launchpad/tabsGroupId"],tabOrder:h,onChange:w=>{s({id:z(w),tab:{id:`${z(w)}_trigger`,label:w},metadata:{...r,name:`Tab panel: ${w}`}})}}),(0,n.jsx)("section",{...i,children:m})]})}U.displayName="TabPanelEdit";function De(e,t){const{tabList:a,currentTabOrder:o}=(0,T.useSelect)(r=>{const{getBlockParentsByBlockName:l,getBlock:s,getBlockOrder:c}=r(p.store),u=l(e,"launchpad-blocks/tabs")[0],h=s(u).innerBlocks,d=$(h,"launchpad-blocks/tab-list"),m=$(h,"launchpad-blocks/tab-panel-group"),i=d?d[0]??null:null,g=m?m[0]??null:null,w=(g?c(g.clientId):[]).findIndex(A=>A===e);return{tabList:i,currentTabOrder:w}},[e]);return{tabList:a,isAssociatedTabSelected:a?.attributes.selectedTab===t,tabPanelOrderIndex:o+1}}function Me({hasInnerBlocks:e}){return e?He:Re}function Re(){return null}function He(){return(0,n.jsx)(p.InnerBlocks.Content,{})}const at={},nt=null;(0,x.registerBlockType)(Se().name,{icon:(0,n.jsx)(B,{iconName:"tab-panel"}),edit:U,save:Me({hasInnerBlocks:!0})}),be()})(),S})());
