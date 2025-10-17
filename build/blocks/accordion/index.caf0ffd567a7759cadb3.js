(function(w,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var _=g();for(var o in _)(typeof exports=="object"?exports:w)[o]=_[o]}})(globalThis,()=>(()=>{var y={8147:(o=>{o.exports={apiVersion:3,name:"launchpad-blocks/accordion",parent:["launchpad-blocks/accordion-group"],title:"Accordion",category:"theme",description:"A block which has a header and collapsible content.",textdomain:"launchpad-blocks",keywords:["accordion"],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{isInitiallyOpen:{type:"boolean",default:!1},accordionId:{type:"string",default:""},headerContent:{type:"string"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"}},supports:{color:!0,typography:{fontSize:!0,lineHeight:!0,textAlign:!0},shadow:!0,spacing:{padding:!0,margin:!0}},providesContext:{},usesContext:["launchpad-blocks/accordion-heading-level"],example:{attributes:{isInitiallyOpen:!1,accordionId:"123",headerElement:"h2",headerContent:"Joke 1"},innerBlocks:[{name:"core/paragraph",attributes:{content:"I was going to sail around the globe in the world\u2019s smallest ship but I bottled it."}}]}}})},w={};function g(o){var h=w[o];if(h!==void 0)return h.exports;var d=w[o]={exports:{}};return y[o](d,d.exports,g),d.exports}g.n=o=>{var h=o&&o.__esModule?()=>o.default:()=>o;return g.d(h,{a:h}),h},g.d=(o,h)=>{for(var d in h)g.o(h,d)&&!g.o(o,d)&&Object.defineProperty(o,d,{enumerable:!0,get:h[d]})},g.o=(o,h)=>Object.prototype.hasOwnProperty.call(o,h);var _={};return(()=>{"use strict";const o=window.ReactJSXRuntime,h=window.wp.blocks,d=window.wp.blockEditor,x=window.wp.components,oe=window.wp.coreData,C=window.wp.data,I=window.wp.i18n,v=window.React;function ie(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function A(e){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,o.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,o.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,o.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const P=(0,v.lazy)(async()=>{const e=await import("../../assets-manifest.json").then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:i,size:a,isEditorMode:r=!1,...s}=n;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,...s,children:(0,o.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${i}`})})}}});function k(e){return(0,o.jsx)(v.Suspense,{fallback:null,children:(0,o.jsx)(P,{...e})})}function $(){(0,h.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:A})}function B(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function ae(e,t,n){const i=t.spacing?.blockGap;let a="none";if(i===!0)a="both";else if(Array.isArray(i)){const s=i.includes("horizontal"),u=i.includes("vertical");s&&u?a="both":s?a="horizontal":u&&(a="vertical")}const r={columnGap:a==="both"||a==="horizontal"?B(n?.spacing?.blockGap,a):void 0,rowGap:a==="both"||a==="vertical"?B(n?.spacing?.blockGap,a):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function T(e,t){return e.reduce((n,i)=>{if(i.name===t)n.push(i);else if(i.innerBlocks){const a=T(i.innerBlocks,t);a&&n.push(...a)}return n},[])}const re=()=>{const{postTypes:e,taxonomies:t}=useSelect(n=>{const{getEntityRecords:i}=n(coreStore),a=["attachment"],r=i("root","postType",{per_page:-1})?.filter(({viewable:c,slug:m})=>c&&!a.includes(m));if(!r||r.length===0)return{postTypes:r,taxonomies:void 0};const s={},u=[];for(const c of r){const m=i("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:p,slug:f})=>p.includes(c.slug)&&!u.includes(f));m&&(s[c.slug]=m.map(p=>{const f=i("taxonomy",p.slug);return{...p,terms:f}}))}return{postTypes:r,taxonomies:s}},[]);return{filteredPostTypes:e,mappedTaxonomies:t===void 0||Object.values(t).length===0?void 0:t}};function se({list:e,containerClassName:t,renderItem:n}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(i=>n({listItem:i,buttonProps:{type:"button",className:`custom-multiple-select-list-item${i.isSelected?" is-selected":""}`}}))})]})}function O(e){return e.indexOf("data:image/svg+xml;")===0}function R(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function D(e){return e.indexOf("dashicons-")===0}function E({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(O(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(R(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(D(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const le={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function ce({colours:e,attributesDefinition:t,attributes:n,setAttributes:i}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:a=>{if(a)for(const r of a)r()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(a=>jsx(M,{colour:a,attributesDefinition:t,attributes:n,setAttributes:i},a.attributeName))})})}function M({colour:e,attributesDefinition:t,attributes:n,setAttributes:i}){const[a,r,s,u,c]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==n[e.attributeName],p=()=>{i({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:m,onDeselect:p,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:l,onToggle:b})=>jsx(Fragment,{children:jsx(Button,{ref:f,__next40pxDefaultSize:!0,onClick:b,"aria-expanded":l,className:`block-editor-panel-color-gradient-settings__dropdown${l?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:n[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...a&&a?.length>0?[{name:"User",colors:a}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...u&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:n[e.attributeName],onChange:l=>{i({[e.attributeName]:l})},disableCustomColors:!c})})})})})},e.attributeName)}function de({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:i}){const[a,r,s]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=r?.map(({name:l,ratio:b})=>({label:l,value:b}))??[],c=a?.map(({name:l,ratio:b})=>({label:l,value:b}))??[],m=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?c:[],...u||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,f]=useState(m.map(l=>l.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:m,value:p,onChange:l=>{f(l),l!=="custom"&&t(l)}}),p==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&i!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:l=>{typeof l=="string"&&["contain","cover"].includes(l)&&i(l)},value:n,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const H=(e,t,n,i)=>{const{getBlocksByName:a,getBlockAttributes:r,getBlockParentsByBlockName:s}=(0,C.select)(d.store);return a(i).some(c=>{if(s(c,"core/template-part",!0).length)return!1;const{[n]:m}=r(c);return e!==c&&t===m})};function L(e,t,n,i,a){const{[t]:r}=e,s=(0,v.useCallback)(c=>H(n,c,t,a),[n,t,a]);return(0,v.useEffect)(()=>{if(r===""){const c=n.slice(0,n.indexOf("-"));i({[t]:c})}if(s(r)){const c=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${c}`),i({[t]:c})}},[r,n,i,s,t]),(0,v.useMemo)(()=>function({label:m,help:p,onValidChange:f,idAttribute:l}){const[b,ne]=(0,v.useState)(l);return(0,o.jsx)(x.TextControl,{label:m,help:typeof p=="function"?p(!s(b)):p,value:b,onChange:j=>{ne(j),s(j)||f(j)}})},[s])}function ue({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:S(t),controls:e.map(i=>{{const a=i===t;return{icon:S(i),title:G(i),isDisabled:a,onClick:()=>n(i)}}})})}function G(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function S(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function pe(e){const{hasChildren:t}=useSelect(n=>{const{getBlocks:i}=n(blockEditorStore);return{hasChildren:i(e).length>0}},[e]);return t}function he({clientId:e,blockInfo:t,variations:n,allowSkip:i}){const{replaceInnerBlocks:a,updateBlockAttributes:r}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:n.map(s=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?jsx(E,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&r(e,s.attributes),s.innerBlocks&&a(e,createBlocksFromInnerBlocksTemplate(s.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),i&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{a(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function me({imageId:e,className:t="",size:n="full"}){const i=useSelect(r=>typeof e=="number"&&e>0?r(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!i)return null;const a=()=>{const r={src:i.source_url,className:`attachment-${n} size-${n} ${t}`,width:i.media_details.width,height:i.media_details.height,srcSet:""};return i.media_details?.sizes?.[n]&&(r.src=i.media_details.sizes[n].source_url,r.width=i.media_details.sizes[n].width,r.height=i.media_details.sizes[n].height),r.srcSet=Object.entries(i.media_details.sizes??{}).map(([s,u])=>`${u.source_url} ${u.width}w`).join(", "),r};return jsx(Fragment,{children:jsx("img",{...a(),alt:i.alt_text||""})})}function F(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>F(n))):t.push([]),t}var V=g(8147),W=g.n(V);const q={isInitiallyOpen:{type:"boolean",default:!1},accordionId:{type:"string",default:""},headerContent:{type:"string"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"}},U={color:!0,typography:{fontSize:!0,lineHeight:!0,textAlign:!0},shadow:!0,spacing:{padding:!0,margin:!0}},Z={...q},J={...U},X=[{fixture:[`<!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"9f29b837-b0ea-414b-8675-84fa2503dc61","headerContent":"Accordion that is open by default","fontSize":"t-2"} -->
<div data-accordion="" data-is-initially-open="true" id="9f29b837-b0ea-414b-8675-84fa2503dc61" class="wp-block-launchpad-blocks-accordion has-t-2-font-size"><h2><button aria-expanded="true" aria-controls="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" data-state="open" id="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" id="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->`],object:{attributes:Z,supports:J,save:function({attributes:e}){const{isInitiallyOpen:t,accordionId:n,headerContent:i,headerElement:a}=e,r=a,s=d.useBlockProps.save({"data-accordion":"","data-is-initially-open":t,id:n});return(0,o.jsxs)("div",{...s,children:[(0,o.jsx)(r,{children:(0,o.jsxs)("button",{"aria-expanded":"true","aria-controls":`${n}-panel`,"data-state":"open",id:`${n}-trigger`,className:"accordion-header-button",children:[(0,o.jsx)(d.RichText.Content,{tagName:"span",className:"accordion-header-button-text",value:i}),(0,o.jsx)(k,{iconName:"accordion-arrow",className:"accordion-header-button-icon",isEditorMode:!0,size:"32"})]})}),(0,o.jsx)("div",{role:"region","data-state":"open","aria-labelledby":`${n}-trigger`,id:`${n}-panel`,className:"accordion-panel",children:(0,o.jsx)("div",{className:"accordion-panel-inner-wrapper",children:(0,o.jsx)(d.InnerBlocks.Content,{})})})]})},migrate:(e,t)=>[e,[...t]],isEligible:()=>!0}}.object],K=window.wp.hooks,N=window.wp.primitives,Q=(0,o.jsx)(N.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(N.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M7.404 16.596a6.5 6.5 0 1 0 9.192-9.192 6.5 6.5 0 0 0-9.192 9.192ZM6.344 6.343a8 8 0 1 0 11.313 11.314A8 8 0 0 0 6.343 6.343Zm4.906 9.407v-3h-3v-1.5h3v-3h1.5v3h3v1.5h-3v3h-1.5Z"})});function z({clientId:e,attributes:t,setAttributes:n,isSelected:i,context:a}){const{isInitiallyOpen:r,headerContent:s}=t,u=a["launchpad-blocks/accordion-heading-level"],c=(0,d.useBlockProps)(),m=(0,d.useInnerBlocksProps)({className:"accordion-panel-inner-wrapper"},{renderAppender:()=>(0,o.jsx)(d.Inserter,{rootClientId:e,renderToggle:({onToggle:l})=>!i&&!f?null:(0,o.jsx)(x.ButtonGroup,{children:(0,o.jsxs)(x.Button,{className:"accordion-inserter-button is-primary",onClick:l,children:[Q," Add block inside the accordion"]})}),isAppender:!0})});L(t,"accordionId",e,n,"launchpad-blocks/accordion");const p=(0,K.applyFilters)("launchpadBlocks.accordionIcon",l=>(0,o.jsx)(k,{iconName:"accordion-arrow",...l})),f=(0,C.useSelect)(l=>l(d.store).hasSelectedInnerBlock(e,!0),[e]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.InspectorControls,{children:(0,o.jsx)(x.Panel,{children:(0,o.jsx)(x.PanelBody,{title:"Block settings",children:(0,o.jsx)(x.CheckboxControl,{__nextHasNoMarginBottom:!0,label:"Is accordion open by default?",help:"Allows you to set the initial state for the accordion. If only one accordion is allowed to be open at a time in the group, this setting will only apply to the first accordion with this setting enabled.",checked:r,onChange:l=>{n({isInitiallyOpen:l})}})})})}),(0,o.jsxs)("div",{...c,children:[(0,o.jsx)(u,{children:(0,o.jsxs)("div",{className:"accordion-header-button",children:[(0,o.jsx)(d.RichText,{tagName:"span",className:"accordion-header-button-text",onChange:l=>{n({headerContent:l})},value:s,allowedFormats:["core/bold","core/code","core/italic","core/keyboard","core/strikethrough","core/subscript","core/superscript","core/underline"],placeholder:(0,I.__)("Write your accordion header\u2026","launchpad-blocks")}),(0,o.jsx)("div",{className:"accordion-header-button-icon-wrapper",children:(0,o.jsx)(p,{className:"accordion-header-button-icon",isEditorMode:!0})})]})}),(0,o.jsx)("div",{className:"accordion-panel",children:(0,o.jsx)("div",{...m})})]})]})}z.displayName="AccordionEdit";function Y({hasInnerBlocks:e}){return e?te:ee}function ee(){return null}function te(){return(0,o.jsx)(d.InnerBlocks.Content,{})}const be={},xe=null;(0,h.registerBlockType)(W().name,{icon:(0,o.jsx)(k,{iconName:"accordion"}),edit:z,save:Y({hasInnerBlocks:!0}),deprecated:X}),$()})(),_})());
