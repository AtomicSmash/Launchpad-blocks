(function(_,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var y=g();for(var t in y)(typeof exports=="object"?exports:_)[t]=y[t]}})(globalThis,()=>(()=>{var B={1173:(t=>{t.exports={apiVersion:3,name:"launchpad-blocks/tabs",title:"Tabs",category:"theme",description:"Multiple sections of content collated together where only one is shown at a time.",textdomain:"launchpad",editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{tabsGroupId:{type:"string",default:""},shouldShowTabSectionTitle:{type:"boolean",default:!0},titleLevel:{type:"string",enum:["1","2","3","4","5","6"],default:"2"},title:{type:"string",default:""},initiallySelectedTab:{type:"string",default:""},hasDismissedVariationsSelector:{type:"boolean",default:!1}},providesContext:{"launchpad/tabsGroupId":"tabsGroupId","launchpad/initiallySelectedTab":"initiallySelectedTab","launchpad/shouldShowTabSectionTitle":"shouldShowTabSectionTitle","launchpad/title":"title"},usesContext:[],supports:{align:!0},example:{attributes:{tabsGroupId:"455684d7",title:"Tabs group heading",initiallySelectedTab:"tab_1"},innerBlocks:[{name:"launchpad-blocks/tab-list",attributes:{selectedTab:"tab_1"}},{name:"launchpad-blocks/tab-panel-group",innerBlocks:[{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_1",tab:{id:"tab_1_trigger",label:"Tab 1"}},innerBlocks:[{name:"core/paragraph",attributes:{content:"Pippin pressed forward as they passed under the lamp beneath the gate-arch, and when he saw the pale face of Faramir he caught his breath. It was the face of one who has been assailed by a great fear or anguish, but has mastered it and now is quiet. Proud and grave he stood for a moment as he spoke to the guard, and Pippin gazing at him saw how closely he resembled his brother Boromir \u2013 whom Pippin had liked from the first, admiring the great man's lordly but kindly manner. Yet suddenly for Faramir his heart was strangely moved with a feeling that he had not known before. Here was one with an air of high nobility such as Aragorn at times revealed, less high perhaps, yet also less incalculable and remote: one of the Kings of Men born into a later time, but touched with the wisdom and sadness of the Elder Race. He knew now why Beregond spoke his name with love. He was a captain that men would follow, that he would follow, even under the shadow of the black wings."}}]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_2",tab:{id:"tab_2_trigger",label:"Tab 2"}},innerBlocks:[]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_3",tab:{id:"tab_3_trigger",label:"Tab 3"}},innerBlocks:[]}]}]}}})},_={};function g(t){var p=_[t];if(p!==void 0)return p.exports;var h=_[t]={exports:{}};return B[t](h,h.exports,g),h.exports}g.n=t=>{var p=t&&t.__esModule?()=>t.default:()=>t;return g.d(p,{a:p}),p},g.d=(t,p)=>{for(var h in p)g.o(p,h)&&!g.o(t,h)&&Object.defineProperty(t,h,{enumerable:!0,get:p[h]})},g.o=(t,p)=>Object.prototype.hasOwnProperty.call(t,p);var y={};return(()=>{"use strict";const t=window.ReactJSXRuntime,p=window.wp.blocks,h=window.wp.blockEditor,x=window.wp.components,ae=window.wp.coreData,j=window.wp.data,z=window.wp.i18n,k=window.React;function ne(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function A(e){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,t.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,t.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,t.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const M=(0,k.lazy)(async()=>{const e=await import("../../assets-manifest.json",{with:{type:"json"}}).then(a=>{if(!a.default["icons/sprite.svg"]||typeof a.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return a.default}).catch(()=>({}));return{default:function(n){const{iconName:l,size:o,isEditorMode:s=!1,...i}=n;return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,...i,children:(0,t.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${l}`})})}}});function C(e){return(0,t.jsx)(k.Suspense,{fallback:null,children:(0,t.jsx)(M,{...e})})}function E(){(0,p.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:A})}function P(e,a){if(e===void 0)return e;let n;if(a==="both")n=e;else if(a==="horizontal")n=e.left;else if(a==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function le(e,a,n){const l=a.spacing?.blockGap;let o="none";if(l===!0)o="both";else if(Array.isArray(l)){const i=l.includes("horizontal"),d=l.includes("vertical");i&&d?o="both":i?o="horizontal":d&&(o="vertical")}const s={columnGap:o==="both"||o==="horizontal"?P(n?.spacing?.blockGap,o):void 0,rowGap:o==="both"||o==="vertical"?P(n?.spacing?.blockGap,o):void 0};if(e===void 0&&typeof a.layout=="object"&&a?.layout?.default&&(e=a.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let i="";return e.minimumColumnWidth?i=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(i=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:i,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function N(e,a){return e.reduce((n,l)=>{if(l.name===a)n.push(l);else if(l.innerBlocks){const o=N(l.innerBlocks,a);o&&n.push(...o)}return n},[])}const oe=()=>{const{postTypes:e,taxonomies:a}=useSelect(n=>{const{getEntityRecords:l}=n(coreStore),o=["attachment"],s=l("root","postType",{per_page:-1})?.filter(({viewable:r,slug:b})=>r&&!o.includes(b));if(!s||s.length===0)return{postTypes:s,taxonomies:void 0};const i={},d=[];for(const r of s){const b=l("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:u,slug:f})=>u.includes(r.slug)&&!d.includes(f));b&&(i[r.slug]=b.map(u=>{const f=l("taxonomy",u.slug);return{...u,terms:f}}))}return{postTypes:s,taxonomies:i}},[]);return{filteredPostTypes:e,mappedTaxonomies:a===void 0||Object.values(a).length===0?void 0:a}};function se({list:e,containerClassName:a,renderItem:n}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${a!==void 0&&a!==""?` ${a}`:""}`,children:e.map(l=>n({listItem:l,buttonProps:{type:"button",className:`custom-multiple-select-list-item${l.isSelected?" is-selected":""}`}}))})]})}function H(e){return e.indexOf("data:image/svg+xml;")===0}function G(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function O(e){return e.indexOf("dashicons-")===0}function L({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return(0,t.jsx)("div",{className:"menu-icon","aria-hidden":"true",children:(0,t.jsx)("br",{})});if(H(e))return(0,t.jsx)("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:(0,t.jsx)("br",{})});if(G(e))return(0,t.jsx)("img",{src:new URL(e).toString(),alt:""});if(O(e)){const a=e.replace("dashicons-","");return(0,t.jsx)(x.Dashicon,{icon:a,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ie={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function re({colours:e,attributesDefinition:a,attributes:n,setAttributes:l}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:o=>{if(o)for(const s of o)s()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(o=>jsx(F,{colour:o,attributesDefinition:a,attributes:n,setAttributes:l},o.attributeName))})})}function F({colour:e,attributesDefinition:a,attributes:n,setAttributes:l}){const[o,s,i,d,r]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),b=()=>a[e.attributeName]?.default!==n[e.attributeName],u=()=>{l({[e.attributeName]:a[e.attributeName]?.default??void 0})},f=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:u,hasValue:b,onDeselect:u,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:w})=>jsx(Fragment,{children:jsx(Button,{ref:f,__next40pxDefaultSize:!0,onClick:w,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:n[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...o&&o?.length>0?[{name:"User",colors:o}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...d&&i&&i.length>0?[{name:"Default",colors:i}]:[]],value:n[e.attributeName],onChange:c=>{l({[e.attributeName]:c})},disableCustomColors:!r})})})})})},e.attributeName)}function ce({ratioValue:e,ratioOnChange:a,imageFitValue:n,imageFitOnChange:l}){const[o,s,i]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=s?.map(({name:c,ratio:w})=>({label:c,value:w}))??[],r=o?.map(({name:c,ratio:w})=>({label:c,value:w}))??[],b=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...i?r:[],...d||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[u,f]=useState(b.map(c=>c.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:b,value:u,onChange:c=>{f(c),c!=="custom"&&a(c)}}),u==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:a,value:e}):null,e!=="auto"&&l!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&l(c)},value:n,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const V=(e,a,n,l)=>{const{getBlocksByName:o,getBlockAttributes:s,getBlockParentsByBlockName:i}=(0,j.select)(h.store);return o(l).some(r=>{if(i(r,"core/template-part",!0).length)return!1;const{[n]:b}=s(r);return e!==r&&a===b})};function U(e,a,n,l,o){const{[a]:s}=e,i=(0,k.useCallback)(r=>V(n,r,a,o),[n,a,o]);return(0,k.useEffect)(()=>{if(s===""){const r=n.slice(0,n.indexOf("-"));l({[a]:r})}if(i(s)){const r=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${a} to make it unique. Old value: ${s}. New value: ${r}`),l({[a]:r})}},[s,n,l,i,a]),(0,k.useMemo)(()=>function({label:b,help:u,onValidChange:f,idAttribute:c}){const[w,S]=(0,k.useState)(c);return(0,t.jsx)(x.TextControl,{label:b,help:typeof u=="function"?u(!i(w)):u,value:w,onChange:v=>{S(v),i(v)||f(v)}})},[i])}function de({levelOptions:e,selectedLevel:a,setSelectedHeadingLevel:n}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:$(a),controls:e.map(l=>{{const o=l===a;return{icon:$(l),title:W(l),isDisabled:o,onClick:()=>n(l)}}})})}function W(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function $(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function q(e){const{hasChildren:a}=(0,j.useSelect)(n=>{const{getBlocks:l}=n(h.store);return{hasChildren:l(e).length>0}},[e]);return a}function J({clientId:e,blockInfo:a,variations:n,allowSkip:l}){const{replaceInnerBlocks:o,updateBlockAttributes:s}=(0,j.useDispatch)(h.store);return(0,t.jsxs)(x.Placeholder,{icon:a.icon,label:a.name,instructions:"Please choose a variation to start with:",children:[(0,t.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,z.__)("Block variations"),children:n.map(i=>(0,t.jsxs)("li",{children:[(0,t.jsx)(x.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof i.icon=="string"?(0,t.jsx)(L,{iconString:i.icon}):i.icon,iconSize:48,onClick:()=>{i.attributes&&s(e,i.attributes),i.innerBlocks&&o(e,(0,p.createBlocksFromInnerBlocksTemplate)(i.innerBlocks),!1)}}),(0,t.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:i.title})]},i.name))}),l&&(0,t.jsx)("div",{className:"block-editor-block-variation-picker__skip",children:(0,t.jsx)(x.Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{o(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:(0,z.__)("Skip")})})]})}function ue({imageId:e,className:a="",size:n="full"}){const l=useSelect(s=>typeof e=="number"&&e>0?s(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!l)return null;const o=()=>{const s={src:l.source_url,className:`attachment-${n} size-${n} ${a}`,width:l.media_details.width,height:l.media_details.height,srcSet:""};return l.media_details?.sizes?.[n]&&(s.src=l.media_details.sizes[n].source_url,s.width=l.media_details.sizes[n].width,s.height=l.media_details.sizes[n].height),s.srcSet=Object.entries(l.media_details.sizes??{}).map(([i,d])=>`${d.source_url} ${d.width}w`).join(", "),s};return jsx(Fragment,{children:jsx("img",{...o(),alt:l.alt_text||""})})}function K(e){const a=[e.name];return e.attributes?a.push(e.attributes):a.push({}),e.innerBlocks?a.push(e.innerBlocks.map(n=>K(n))):a.push([]),a}var X=g(1173),T=g.n(X);const I=[{name:"horizontal-tabs",title:"Horizontal tabs",attributes:{className:"wp-block-launchpad-blocks-tabs--horizontal"},innerBlocks:[["launchpad-blocks/tab-list",{selectedTab:"tab-1"}],["launchpad-blocks/tab-panel-group",{},[["launchpad-blocks/tab-panel",{id:"tab-1",tab:{id:"tab-1_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-2",tab:{id:"tab-2_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-3",tab:{id:"tab-3_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]]]]],icon:(0,t.jsx)(C,{isEditorMode:!0,iconName:"tabs"})},{name:"vertical-tabs",title:"Vertical tabs",attributes:{className:"wp-block-launchpad-blocks-tabs--vertical"},innerBlocks:[["launchpad-blocks/tab-list",{selectedTab:"tab-1",layout:{type:"flex",orientation:"vertical",verticalAlignment:"top",justifyContent:"left",flexWrap:"wrap"}}],["launchpad-blocks/tab-panel-group",{},[["launchpad-blocks/tab-panel",{id:"tab-1",tab:{id:"tab-1_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-2",tab:{id:"tab-2_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]],["launchpad-blocks/tab-panel",{id:"tab-3",tab:{id:"tab-3_trigger",label:""}},[["core/paragraph",{placeholder:"Enter tab content here..."}]]]]]],isDefault:!1,icon:(0,t.jsx)(C,{isEditorMode:!0,iconName:"vertical-tabs"}),example:{attributes:{tabsGroupId:"455684d7",title:"Tabs group heading",initiallySelectedTab:"tab_1",className:"wp-block-launchpad-blocks-tabs--vertical"},innerBlocks:[{name:"launchpad-blocks/tab-list",attributes:{selectedTab:"tab_1",layout:{type:"flex",orientation:"vertical",verticalAlignment:"top",justifyContent:"left",flexWrap:"wrap"}}},{name:"launchpad-blocks/tab-panel-group",innerBlocks:[{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_1",tab:{id:"tab_1_trigger",label:"Tab 1"}},innerBlocks:[{name:"core/paragraph",attributes:{content:"Pippin pressed forward as they passed under the lamp beneath the gate-arch, and when he saw the pale face of Faramir he caught his breath. It was the face of one who has been assailed by a great fear or anguish, but has mastered it and now is quiet. Proud and grave he stood for a moment as he spoke to the guard, and Pippin gazing at him saw how closely he resembled his brother Boromir \u2013 whom Pippin had liked from the first, admiring the great man's lordly but kindly manner. Yet suddenly for Faramir his heart was strangely moved with a feeling that he had not known before. Here was one with an air of high nobility such as Aragorn at times revealed, less high perhaps, yet also less incalculable and remote: one of the Kings of Men born into a later time, but touched with the wisdom and sadness of the Elder Race. He knew now why Beregond spoke his name with love. He was a captain that men would follow, that he would follow, even under the shadow of the black wings."}}]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_2",tab:{id:"tab_2_trigger",label:"Tab 2"}},innerBlocks:[]},{name:"launchpad-blocks/tab-panel",attributes:{id:"tab_3",tab:{id:"tab_3_trigger",label:"Tab 3"}},innerBlocks:[]}]}]}}];function he({tabsGroupId:e,id:a,label:n,onChange:l,tabOrder:o}){return jsx(Fill,{name:`${e}TabList`,children:s=>{const{selectedTab:i,setSelectedTab:d,initiallySelectedTab:r,setInitiallySelectedTab:b}=s;return jsx(RichText,{tagName:"div",className:`tab${i===a?" show-tab-in-editor":""}`,style:{order:o},id:`${a}_trigger`,value:n,onChange:u=>{l(u),d(slugifyHTML(u)),r===a&&b(slugifyHTML(u))},placeholder:"Label",onClick:()=>{d(a)}})}})}function D({clientId:e,attributes:a,setAttributes:n}){const{tabsGroupId:l,title:o,titleLevel:s,shouldShowTabSectionTitle:i,initiallySelectedTab:d,hasDismissedVariationsSelector:r}=a,[b,u]=(0,k.useState)(s),f=(0,j.useSelect)(m=>N(m(h.store).getBlock(e).innerBlocks,"launchpad-blocks/tab-panel"),[e]),c=U(a,"tabsGroupId",e,n,"launchpad-blocks/tabs"),w=(0,h.useBlockProps)({"data-launchpad-tabs-group":"true"}),{children:S,...v}=(0,h.useInnerBlocksProps)(w),ee=`h${s}`,te=q(e);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.InspectorControls,{children:(0,t.jsx)(x.Panel,{children:(0,t.jsxs)(x.PanelBody,{children:[(0,t.jsx)(c,{label:"Unique tab identifier",help:m=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"This will appear in the url when you interact with the tabs. Must be unique on a page."}),m?null:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("br",{}),(0,t.jsxs)("span",{style:{fontWeight:"bold",color:"red"},children:["This value is used by another tab group on the page. Using this value: ",l," "]})]})]}),onValidChange:m=>{n({tabsGroupId:m})},idAttribute:l}),(0,t.jsx)(x.SelectControl,{label:"Initially selected tab",help:"If there's no url parameter, which tab should be open when a page is loaded? Defaults to the first tab.",value:d,onChange:m=>{n({initiallySelectedTab:m})},options:[{value:"",label:"Default"},...f.map(m=>{const R=m.attributes;return{value:R.id,label:R.tab.label}})]}),(0,t.jsx)(x.ToggleControl,{checked:i,label:"Show tabs section title visually",help:"If not shown visually, the title is used as helper text for screen reader users, so a title still needs to be added.",onChange:m=>{n({shouldShowTabSectionTitle:m})}}),i?(0,t.jsx)(x.RadioControl,{label:"Title heading level",selected:b,onChange:m=>{["1","2","3","4","5","6"].includes(m)&&(u(m),n({titleLevel:m}))},options:[{value:"1",label:"Use a H1"},{value:"2",label:"Use a H2"},{value:"3",label:"Use a H3"},{value:"4",label:"Use a H4"},{value:"5",label:"Use a H5"},{value:"6",label:"Use a H6"}]}):null]})})}),(0,t.jsxs)("div",{...v,children:[(0,t.jsx)(h.RichText,{tagName:i?ee:"p",className:`tabs_title${i?"":" is-style-screen-reader-only"}`,id:`${l}_title`,value:o,onChange:m=>{n({title:m})},placeholder:i?"Add a title for this tabs group...":"Add a label for screen readers for this tabs group..."}),(0,t.jsx)("div",{className:"wp-block-launchpad-blocks-tabs-content-wrapper",children:te||r?S:(0,t.jsx)("div",{children:(0,t.jsx)(J,{clientId:e,blockInfo:{name:T().title,icon:(0,t.jsx)(C,{isEditorMode:!0,iconName:"tabs"})},variations:I,allowSkip:!0})})})]})]})}D.displayName="TabsEdit";function Y({hasInnerBlocks:e}){return e?Q:Z}function Z(){return null}function Q(){return(0,t.jsx)(h.InnerBlocks.Content,{})}const pe={"launchpad/tabsGroupId":"tabsGroupId","launchpad/initiallySelectedTab":"initiallySelectedTab","launchpad/shouldShowTabSectionTitle":"shouldShowTabSectionTitle","launchpad/title":"title"},be=null;(0,p.registerBlockType)(T().name,{icon:(0,t.jsx)(C,{iconName:"tabs"}),edit:D,save:Y({hasInnerBlocks:!0})}),E(),I.forEach(e=>{(0,p.registerBlockVariation)(T().name,e)})})(),y})());
