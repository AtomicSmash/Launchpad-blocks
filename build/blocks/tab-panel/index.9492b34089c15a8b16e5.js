(function(j,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var T=x();for(var n in T)(typeof exports=="object"?exports:j)[n]=T[n]}})(globalThis,()=>(()=>{var N={1173:(n=>{n.exports={apiVersion:3,name:"launchpad-blocks/tabs",title:"Tabs",category:"theme",description:"Multiple sections of content collated together where only one is shown at a time.",textdomain:"launchpad",editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{tabsGroupId:{type:"string",default:""},shouldShowTabSectionTitle:{type:"boolean",default:!0},titleLevel:{type:"string",enum:["1","2","3","4","5","6"],default:"2"},title:{type:"string",default:""},initiallySelectedTab:{type:"string",default:""},hasDismissedVariationsSelector:{type:"boolean",default:!1}},providesContext:{"launchpad/tabsGroupId":"tabsGroupId","launchpad/initiallySelectedTab":"initiallySelectedTab","launchpad/shouldShowTabSectionTitle":"shouldShowTabSectionTitle","launchpad/title":"title"},usesContext:[],supports:{align:!0},example:{attributes:{tabsGroupId:"455684d7",title:"Tabs group heading",initiallySelectedTab:"tab_1"},innerBlocks:[{name:"launchpad-blocks/tab-list",attributes:{selectedTab:"tab_1"}},{name:"launchpad-blocks/tab-panel-group",innerBlocks:[{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_1",tab:{id:"tab_1_trigger",label:"Tab 1"}},innerBlocks:[{name:"core/paragraph",attributes:{content:"Pippin pressed forward as they passed under the lamp beneath the gate-arch, and when he saw the pale face of Faramir he caught his breath. It was the face of one who has been assailed by a great fear or anguish, but has mastered it and now is quiet. Proud and grave he stood for a moment as he spoke to the guard, and Pippin gazing at him saw how closely he resembled his brother Boromir \u2013 whom Pippin had liked from the first, admiring the great man's lordly but kindly manner. Yet suddenly for Faramir his heart was strangely moved with a feeling that he had not known before. Here was one with an air of high nobility such as Aragorn at times revealed, less high perhaps, yet also less incalculable and remote: one of the Kings of Men born into a later time, but touched with the wisdom and sadness of the Elder Race. He knew now why Beregond spoke his name with love. He was a captain that men would follow, that he would follow, even under the shadow of the black wings."}}]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_2",tab:{id:"tab_2_trigger",label:"Tab 2"}},innerBlocks:[]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_3",tab:{id:"tab_3_trigger",label:"Tab 3"}},innerBlocks:[]}]}]}}}),1361:(n=>{n.exports={apiVersion:3,name:"launchpad-blocks/tab-panel",parent:["launchpad-blocks/tab-panel-group"],title:"Tab panel",category:"theme",description:"The panel of content associated with a tab in a Tabs block.",textdomain:"launchpad",editorScript:"file:./index.tsx",render:"file:./render.php",attributes:{id:{type:"string",default:""},tab:{type:"object",default:{id:"",label:""}}},providesContext:{},usesContext:["launchpad/tabsGroupId","launchpad/initiallySelectedTab"],supports:{align:!0,anchor:!1,color:!0,layout:{default:{type:"default"}},spacing:{blockGap:!0}}}})},j={};function x(n){var f=j[n];if(f!==void 0)return f.exports;var p=j[n]={exports:{}};return N[n](p,p.exports,x),p.exports}x.n=n=>{var f=n&&n.__esModule?()=>n.default:()=>n;return x.d(f,{a:f}),f},x.d=(n,f)=>{for(var p in f)x.o(f,p)&&!x.o(n,p)&&Object.defineProperty(n,p,{enumerable:!0,get:f[p]})},x.o=(n,f)=>Object.prototype.hasOwnProperty.call(n,f);var T={};return(()=>{"use strict";const n=window.ReactJSXRuntime,f=window.wp.blocks,p=window.wp.blockEditor,k=window.wp.components,ue=window.wp.coreData,v=window.wp.data,$=window.wp.i18n,_=window.React;function pe(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function M(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,n.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,n.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,n.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const R=(0,_.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(a){const{iconName:o,size:s,isEditorMode:l=!1,...r}=a;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...r,children:(0,n.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function C(e){return(0,n.jsx)(_.Suspense,{fallback:null,children:(0,n.jsx)(R,{...e})})}function D(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:M})}function z(e,t){if(e===void 0)return e;let a;if(t==="both")a=e;else if(t==="horizontal")a=e.left;else if(t==="vertical")a=e.top;else return;return a.startsWith("var:")?`var(--wp--${a.replace("var:","").split("|").join("--")})`:a}function he(e,t,a){const o=t.spacing?.blockGap;let s="none";if(o===!0)s="both";else if(Array.isArray(o)){const r=o.includes("horizontal"),c=o.includes("vertical");r&&c?s="both":r?s="horizontal":c&&(s="vertical")}const l={columnGap:s==="both"||s==="horizontal"?z(a?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?z(a?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function S(e,t){return e.reduce((a,o)=>{if(o.name===t)a.push(o);else if(o.innerBlocks){const s=S(o.innerBlocks,t);s&&a.push(...s)}return a},[])}const be=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),a=useMemo(()=>({}),[]),{postTypes:o,taxonomies:s}=useSelect(h=>{const{getEntityRecords:d}=h(coreStore),b=d("root","postType",e),i=d("root","taxonomy",t);if(!i)return{postTypes:b,taxonomies:i};for(const m of i)a[m.slug]=d("taxonomy",m.slug);return{postTypes:b,taxonomies:i}},[e,t,a]),l=["attachment"],r=[],c=o?.filter(({viewable:h,slug:d})=>h&&!l.includes(d));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const u={};for(const h of c){const d=s?.filter(({types:b,slug:i})=>b.includes(h.slug)&&!r.includes(i));d&&(u[h.slug]=d.map(b=>{const i=a?.[b.slug]??null;return{...b,terms:i}}))}return{filteredPostTypes:c,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function me({list:e,containerClassName:t,renderItem:a}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>a({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function H(e){return e.indexOf("data:image/svg+xml;")===0}function O(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function G(e){return e.indexOf("dashicons-")===0}function L({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return(0,n.jsx)("div",{className:"menu-icon","aria-hidden":"true",children:(0,n.jsx)("br",{})});if(H(e))return(0,n.jsx)("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:(0,n.jsx)("br",{})});if(O(e))return(0,n.jsx)("img",{src:new URL(e).toString(),alt:""});if(G(e)){const t=e.replace("dashicons-","");return(0,n.jsx)(k.Dashicon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ge={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function fe({colours:e,attributesDefinition:t,attributes:a,setAttributes:o}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:s=>{if(s)for(const l of s)l()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>jsx(F,{colour:s,attributesDefinition:t,attributes:a,setAttributes:o},s.attributeName))})})}function F({colour:e,attributesDefinition:t,attributes:a,setAttributes:o}){const[s,l,r,c,u]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==a[e.attributeName],d=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:h,onDeselect:d,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:m})=>jsx(Fragment,{children:jsx(Button,{ref:b,__next40pxDefaultSize:!0,onClick:m,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:a[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...c&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:a[e.attributeName],onChange:i=>{o({[e.attributeName]:i})},disableCustomColors:!u})})})})})},e.attributeName)}function xe({ratioValue:e,ratioOnChange:t,imageFitValue:a,imageFitOnChange:o}){const[s,l,r]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=l?.map(({name:i,ratio:m})=>({label:i,value:m}))??[],u=s?.map(({name:i,ratio:m})=>({label:i,value:m}))??[],h=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?u:[],...c||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,b]=useState(h.map(i=>i.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:h,value:d,onChange:i=>{b(i),i!=="custom"&&t(i)}}),d==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&o(i)},value:a,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const W=(e,t,a,o)=>{const{getBlocksByName:s,getBlockAttributes:l,getBlockParentsByBlockName:r}=(0,v.select)(p.store);return s(o).some(u=>{if(r(u,"core/template-part",!0).length)return!1;const{[a]:h}=l(u);return e!==u&&t===h})};function q(e,t,a,o,s){const{[t]:l}=e,r=(0,_.useCallback)(u=>W(a,u,t,s),[a,t,s]);return(0,_.useEffect)(()=>{if(l===""){const u=a.slice(0,a.indexOf("-"));o({[t]:u})}if(r(l)){const u=a.slice(0,a.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${u}`),o({[t]:u})}},[l,a,o,r,t]),(0,_.useMemo)(()=>function({label:h,help:d,onValidChange:b,idAttribute:i}){const[m,y]=(0,_.useState)(i);return(0,n.jsx)(k.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof d=="function"?d(!r(m)):d,value:m,onChange:w=>{y(w),r(w)||b(w)}})},[r])}function we({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:a}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:I(t),controls:e.map(o=>{{const s=o===t;return{icon:I(o),title:U(o),isDisabled:s,onClick:()=>a(o)}}})})}function U(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function I(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function V(e){const{hasChildren:t}=(0,v.useSelect)(a=>{const{getBlocks:o}=a(p.store);return{hasChildren:o(e).length>0}},[e]);return t}function X({clientId:e,blockInfo:t,variations:a,allowSkip:o}){const{replaceInnerBlocks:s,updateBlockAttributes:l}=(0,v.useDispatch)(p.store);return(0,n.jsxs)(k.Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[(0,n.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,$.__)("Block variations"),children:a.map(r=>(0,n.jsxs)("li",{children:[(0,n.jsx)(k.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?(0,n.jsx)(L,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&l(e,r.attributes),r.innerBlocks&&s(e,(0,f.createBlocksFromInnerBlocksTemplate)(r.innerBlocks),!1)}}),(0,n.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),o&&(0,n.jsx)("div",{className:"block-editor-block-variation-picker__skip",children:(0,n.jsx)(k.Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:(0,$.__)("Skip")})})]})}function ke({imageId:e,className:t="",size:a="full"}){const o=useSelect(l=>typeof e=="number"&&e>0?l(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!o)return null;const s=()=>{const l={src:o.source_url,className:`attachment-${a} size-${a} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[a]&&(l.src=o.media_details.sizes[a].source_url,l.width=o.media_details.sizes[a].width,l.height=o.media_details.sizes[a].height),l.srcSet=Object.entries(o.media_details.sizes??{}).map(([r,c])=>`${c.source_url} ${c.width}w`).join(", "),l};return jsx(Fragment,{children:jsx("img",{...s(),alt:o.alt_text||""})})}function J(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(a=>J(a))):t.push([]),t}function _e(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const s=e()?.scrollHeight??0;if(s){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${s}px !important`)}else t.current.style.minHeight=""}},1)}}var K=x(1361),Y=x.n(K);function ve(e){if(e===void 0)throw new Error(`Pixel value ${e} is undefined`);if(!e.endsWith("px"))throw new Error(`Pixel value ${e} is not a pixel value`);if(e.includes(" "))throw new Error(`Pixel value ${e} contains multiple values`);return Number(e.replace("px",""))}function B(e){let t="";const a=document.createElement("div");return a.innerHTML=e,t=a.innerText,Z(t)}function Z(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|(?<!-)-+$/g,"")}function Q(e,t=()=>!0){const a=e.parentElement;return a===null?null:t(a)?a:Q(a,t)}function ye(e){if(new RegExp("ms$","ig").test(e))return Number(e.substring(0,e.length-2));if(new RegExp("s$","ig").test(e))return Number(e.substring(0,e.length-1))*1e3;throw new Error("Time didn't end with ms or s so was not correctly parsed.")}function je(){if(typeof document>"u")return"unknown";const e=window.navigator.userAgent;let t="unknown";return e.search("Windows")!==-1?t="Windows":e.search("Mac")!==-1?t="MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?t="UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1&&(t="Linux"),t}function ee(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(!Object.entries(e[a]).every(([s,l])=>Array.isArray(l)?ee(l,t[a]?.[s]):t[a]?.[s]===l))return!1;return!0}var te=x(1173),ae=x.n(te);const ne=[{name:"horizontal-tabs",title:"Horizontal tabs",attributes:{className:"wp-block-launchpad-blocks-tabs--horizontal"},innerBlocks:[["launchpad-blocks/tab-list",{selectedTab:"tab-1"}],["launchpad-blocks/tab-panel-group",{},[["launchpad-blocks/tab-panel",{id:"tab-1",tab:{id:"tab-1_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-2",tab:{id:"tab-2_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-3",tab:{id:"tab-3_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]]]]],icon:(0,n.jsx)(C,{isEditorMode:!0,iconName:"tabs"})},{name:"vertical-tabs",title:"Vertical tabs",attributes:{className:"wp-block-launchpad-blocks-tabs--vertical"},innerBlocks:[["launchpad-blocks/tab-list",{selectedTab:"tab-1",layout:{type:"flex",orientation:"vertical",verticalAlignment:"top",justifyContent:"left",flexWrap:"wrap"}}],["launchpad-blocks/tab-panel-group",{},[["launchpad-blocks/tab-panel",{id:"tab-1",tab:{id:"tab-1_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-2",tab:{id:"tab-2_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-3",tab:{id:"tab-3_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]]]]],isDefault:!1,icon:(0,n.jsx)(C,{isEditorMode:!0,iconName:"vertical-tabs"}),example:{attributes:{tabsGroupId:"455684d7",title:"Tabs group heading",initiallySelectedTab:"tab_1",className:"wp-block-launchpad-blocks-tabs--vertical"},innerBlocks:[{name:"launchpad-blocks/tab-list",attributes:{selectedTab:"tab_1",layout:{type:"flex",orientation:"vertical",verticalAlignment:"top",justifyContent:"left",flexWrap:"wrap"}}},{name:"launchpad-blocks/tab-panel-group",innerBlocks:[{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_1",tab:{id:"tab_1_trigger",label:"Tab 1"}},innerBlocks:[{name:"core/paragraph",attributes:{content:"Pippin pressed forward as they passed under the lamp beneath the gate-arch, and when he saw the pale face of Faramir he caught his breath. It was the face of one who has been assailed by a great fear or anguish, but has mastered it and now is quiet. Proud and grave he stood for a moment as he spoke to the guard, and Pippin gazing at him saw how closely he resembled his brother Boromir \u2013 whom Pippin had liked from the first, admiring the great man's lordly but kindly manner. Yet suddenly for Faramir his heart was strangely moved with a feeling that he had not known before. Here was one with an air of high nobility such as Aragorn at times revealed, less high perhaps, yet also less incalculable and remote: one of the Kings of Men born into a later time, but touched with the wisdom and sadness of the Elder Race. He knew now why Beregond spoke his name with love. He was a captain that men would follow, that he would follow, even under the shadow of the black wings."}}]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_2",tab:{id:"tab_2_trigger",label:"Tab 2"}},innerBlocks:[]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_3",tab:{id:"tab_3_trigger",label:"Tab 3"}},innerBlocks:[]}]}]}}];function oe({tabsGroupId:e,id:t,label:a,onChange:o,tabOrder:s}){return(0,n.jsx)(k.Fill,{name:`${e}TabList`,children:l=>{const{selectedTab:r,setSelectedTab:c,initiallySelectedTab:u,setInitiallySelectedTab:h}=l;return(0,n.jsx)(p.RichText,{tagName:"div",className:`tab${r===t?" show-tab-in-editor":""}`,style:{order:s},id:`${t}_trigger`,value:a,onChange:d=>{o(d),c(B(d)),u===t&&h(B(d))},placeholder:"Label",onClick:()=>{c(t)}})}})}function se({clientId:e,attributes:t,setAttributes:a}){const{tabsGroupId:o,title:s,titleLevel:l,shouldShowTabSectionTitle:r,initiallySelectedTab:c,hasDismissedVariationsSelector:u}=t,[h,d]=(0,_.useState)(l),b=(0,v.useSelect)(g=>S(g(p.store).getBlock(e).innerBlocks,"launchpad-blocks/tab-panel"),[e]),i=q(t,"tabsGroupId",e,a,"launchpad-blocks/tabs"),m=(0,p.useBlockProps)({"data-launchpad-tabs-group":"true"}),{children:y,...w}=(0,p.useInnerBlocksProps)(m),P=`h${l}`,de=V(e);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.InspectorControls,{children:(0,n.jsx)(k.Panel,{children:(0,n.jsxs)(k.PanelBody,{children:[(0,n.jsx)(i,{label:"Unique tab identifier",help:g=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:"This will appear in the url when you interact with the tabs. Must be unique on a page."}),g?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsxs)("span",{style:{fontWeight:"bold",color:"red"},children:["This value is used by another tab group on the page. Using this value: ",o," "]})]})]}),onValidChange:g=>{a({tabsGroupId:g})},idAttribute:o}),(0,n.jsx)(k.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Initially selected tab",help:"If there's no url parameter, which tab should be open when a page is loaded? Defaults to the first tab.",value:c,onChange:g=>{a({initiallySelectedTab:g})},options:[{value:"",label:"Default"},...b.map(g=>{const A=g.attributes;return{value:A.id,label:A.tab.label}})]}),(0,n.jsx)(k.ToggleControl,{__nextHasNoMarginBottom:!0,checked:r,label:"Show tabs section title visually",help:"If not shown visually, the title is used as helper text for screen reader users, so a title still needs to be added.",onChange:g=>{a({shouldShowTabSectionTitle:g})}}),r?(0,n.jsx)(k.RadioControl,{label:"Title heading level",selected:h,onChange:g=>{["1","2","3","4","5","6"].includes(g)&&(d(g),a({titleLevel:g}))},options:[{value:"1",label:"Use a H1"},{value:"2",label:"Use a H2"},{value:"3",label:"Use a H3"},{value:"4",label:"Use a H4"},{value:"5",label:"Use a H5"},{value:"6",label:"Use a H6"}]}):null]})})}),(0,n.jsxs)("div",{...w,children:[(0,n.jsx)(p.RichText,{tagName:r?P:"p",className:`tabs_title${r?"":" is-style-screen-reader-only"}`,id:`${o}_title`,value:s,onChange:g=>{a({title:g})},placeholder:r?"Add a title for this tabs group...":"Add a label for screen readers for this tabs group..."}),(0,n.jsx)("div",{className:"wp-block-launchpad-blocks-tabs-content-wrapper",children:de||u?y:(0,n.jsx)("div",{children:(0,n.jsx)(X,{clientId:e,blockInfo:{name:ae().title,icon:(0,n.jsx)(C,{isEditorMode:!0,iconName:"tabs"})},variations:ne,allowSkip:!0})})})]})]})}se.displayName="TabsEdit";function E({clientId:e,isSelected:t,attributes:{id:a,tab:o,metadata:s},context:l,setAttributes:r}){const{tabList:c,isAssociatedTabSelected:u,tabPanelOrderIndex:h}=le(e,a),d=(0,p.useBlockProps)({className:`tab-panel${u?" show-tab-in-editor":""}`,"data-panel-id":a,"data-tab-id":`${a}_trigger`}),{children:b,...i}=(0,p.useInnerBlocksProps)(d,{templateLock:!1}),{updateBlockAttributes:m}=(0,v.useDispatch)(p.store),y=(0,v.useSelect)(w=>w(p.store).hasSelectedInnerBlock(e,!0),[e]);return(0,_.useEffect)(()=>{c&&(t||y)&&m(c.clientId,{selectedTab:a})},[t,y,c,m,a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(oe,{id:a,label:o.label,tabsGroupId:l["launchpad/tabsGroupId"],tabOrder:h,onChange:w=>{r({id:B(w),tab:{id:`${B(w)}_trigger`,label:w},metadata:{...s,name:`Tab panel: ${w}`}})}}),(0,n.jsx)("section",{...i,children:b})]})}E.displayName="TabPanelEdit";function le(e,t){const{tabList:a,currentTabOrder:o}=(0,v.useSelect)(s=>{const{getBlockParentsByBlockName:l,getBlock:r,getBlockOrder:c}=s(p.store),u=l(e,"launchpad-blocks/tabs")[0],h=r(u).innerBlocks,d=S(h,"launchpad-blocks/tab-list"),b=S(h,"launchpad-blocks/tab-panel-group"),i=d?d[0]??null:null,m=b?b[0]??null:null,w=(m?c(m.clientId):[]).findIndex(P=>P===e);return{tabList:i,currentTabOrder:w}},[e]);return{tabList:a,isAssociatedTabSelected:a?.attributes.selectedTab===t,tabPanelOrderIndex:o+1}}function re({hasInnerBlocks:e}){return e?ce:ie}function ie(){return null}function ce(){return(0,n.jsx)(p.InnerBlocks.Content,{})}const Te={},Ce=null;(0,f.registerBlockType)(Y().name,{icon:(0,n.jsx)(C,{iconName:"tab-panel"}),edit:E,save:re({hasInnerBlocks:!0})}),D()})(),T})());
