(function(j,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var y=x();for(var n in y)(typeof exports=="object"?exports:j)[n]=y[n]}})(globalThis,()=>(()=>{var S={1688:(n=>{n.exports={apiVersion:3,name:"launchpad-blocks/button-with-icon",title:"Button with icon",ancestor:["core/buttons"],category:"theme",description:"A button with selectable icon",textdomain:"launchpad-blocks",keywords:["button","link","icon"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{iconName:{type:"string",role:"content"},library:{type:"string",role:"content"},size:{type:"string",default:"1rem"},iconPosition:{type:"string",enum:["start","end"],default:"start"},linkId:{type:"number"},linkKind:{type:"string"},linkType:{type:"string"},linkHref:{type:"string"},linkTarget:{type:"string",enum:["_self","_blank"],default:"_self"},linkText:{type:"string"}},providesContext:{},usesContext:[],example:{attributes:{library:"launchpad-blocks",iconName:"button-with-icon",size:"1rem",iconPosition:"start",linkText:"button"}},supports:{}}})},j={};function x(n){var m=j[n];if(m!==void 0)return m.exports;var f=j[n]={exports:{}};return S[n](f,f.exports,x),f.exports}x.n=n=>{var m=n&&n.__esModule?()=>n.default:()=>n;return x.d(m,{a:m}),m},x.d=(n,m)=>{for(var f in m)x.o(m,f)&&!x.o(n,f)&&Object.defineProperty(n,f,{enumerable:!0,get:m[f]})},x.o=(n,m)=>Object.prototype.hasOwnProperty.call(n,m);var y={};return(()=>{"use strict";const n=window.ReactJSXRuntime,m=window.wp.blocks,f=window.wp.blockEditor,b=window.wp.components,ue=window.wp.coreData,pe=window.wp.data,_=window.wp.i18n,k=window.React;function me(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function $(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,n.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,n.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,n.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const M=(0,k.lazy)(async()=>{const e=await import("/wp-content/plugins/launchpad-blocks/build/assets-manifest.json",{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(i){const{iconName:o,size:s,isEditorMode:l=!1,...r}=i;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...r,children:(0,n.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function T(e){return(0,n.jsx)(k.Suspense,{fallback:null,children:(0,n.jsx)(M,{...e})})}function R(){(0,m.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:$})}function B(e,t){if(e===void 0)return e;let i;if(t==="both")i=e;else if(t==="horizontal")i=e.left;else if(t==="vertical")i=e.top;else return;return i.startsWith("var:")?`var(--wp--${i.replace("var:","").split("|").join("--")})`:i}function he(e,t,i){const o=t.spacing?.blockGap;let s="none";if(o===!0)s="both";else if(Array.isArray(o)){const r=o.includes("horizontal"),c=o.includes("vertical");r&&c?s="both":r?s="horizontal":c&&(s="vertical")}const l={columnGap:s==="both"||s==="horizontal"?B(i?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?B(i?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function H(e,t){return e.reduce((i,o)=>{if(o.name===t)i.push(o);else if(o.innerBlocks){const s=H(o.innerBlocks,t);s&&i.push(...s)}return i},[])}const ge=()=>{const{postTypes:e,taxonomies:t}=useSelect(i=>{const{getEntityRecords:o}=i(coreStore),s=["attachment"],l=o("root","postType",{per_page:-1})?.filter(({viewable:a,slug:u})=>a&&!s.includes(u));if(!l||l.length===0)return{postTypes:l,taxonomies:void 0};const r={},c=[];for(const a of l){const u=o("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:d,slug:h})=>d.includes(a.slug)&&!c.includes(h));u&&(r[a.slug]=u.map(d=>{const h=o("taxonomy",d.slug);return{...d,terms:h}}))}return{postTypes:l,taxonomies:r}},[]);return{filteredPostTypes:e,mappedTaxonomies:t===void 0||Object.values(t).length===0?void 0:t}};function fe({list:e,containerClassName:t,renderItem:i}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>i({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function L(e){return e.indexOf("data:image/svg+xml;")===0}function D(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function O(e){return e.indexOf("dashicons-")===0}function E({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(L(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(D(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(O(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const be={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function xe({colours:e,attributesDefinition:t,attributes:i,setAttributes:o}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:s=>{if(s)for(const l of s)l()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>jsx(V,{colour:s,attributesDefinition:t,attributes:i,setAttributes:o},s.attributeName))})})}function V({colour:e,attributesDefinition:t,attributes:i,setAttributes:o}){const[s,l,r,c,a]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),u=()=>t[e.attributeName]?.default!==i[e.attributeName],d=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},h=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:u,onDeselect:d,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:p,onToggle:w})=>jsx(Fragment,{children:jsx(Button,{ref:h,__next40pxDefaultSize:!0,onClick:w,"aria-expanded":p,className:`block-editor-panel-color-gradient-settings__dropdown${p?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:i[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...c&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:i[e.attributeName],onChange:p=>{o({[e.attributeName]:p})},disableCustomColors:!a})})})})})},e.attributeName)}function ve({ratioValue:e,ratioOnChange:t,imageFitValue:i,imageFitOnChange:o}){const[s,l,r]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=l?.map(({name:p,ratio:w})=>({label:p,value:w}))??[],a=s?.map(({name:p,ratio:w})=>({label:p,value:w}))??[],u=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?a:[],...c||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,h]=useState(u.map(p=>p.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:u,value:d,onChange:p=>{h(p),p!=="custom"&&t(p)}}),d==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:p=>{typeof p=="string"&&["contain","cover"].includes(p)&&o(p)},value:i,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const G=(e,t,i,o)=>{const{getBlocksByName:s,getBlockAttributes:l,getBlockParentsByBlockName:r}=select(blockEditorStore);return s(o).some(a=>{if(r(a,"core/template-part",!0).length)return!1;const{[i]:u}=l(a);return e!==a&&t===u})};function we(e,t,i,o,s){const{[t]:l}=e,r=useCallback(a=>G(i,a,t,s),[i,t,s]);return useEffect(()=>{if(l===""){const a=i.slice(0,i.indexOf("-"));o({[t]:a})}if(r(l)){const a=i.slice(0,i.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${a}`),o({[t]:a})}},[l,i,o,r,t]),useMemo(()=>function({label:u,help:d,onValidChange:h,idAttribute:p}){const[w,C]=useState(p);return jsx(TextControl,{label:u,help:typeof d=="function"?d(!r(w)):d,value:w,onChange:g=>{C(g),r(g)||h(g)}})},[r])}function ke({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:i}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:z(t),controls:e.map(o=>{{const s=o===t;return{icon:z(o),title:U(o),isDisabled:s,onClick:()=>i(o)}}})})}function U(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function z(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function _e(e){const{hasChildren:t}=useSelect(i=>{const{getBlocks:o}=i(blockEditorStore);return{hasChildren:o(e).length>0}},[e]);return t}function je({clientId:e,blockInfo:t,variations:i,allowSkip:o}){const{replaceInnerBlocks:s,updateBlockAttributes:l}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:i.map(r=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?jsx(E,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&l(e,r.attributes),r.innerBlocks&&s(e,createBlocksFromInnerBlocksTemplate(r.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),o&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function ye({imageId:e,className:t="",size:i="full"}){const o=useSelect(l=>typeof e=="number"&&e>0?l(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!o)return null;const s=()=>{const l={src:o.source_url,className:`attachment-${i} size-${i} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[i]&&(l.src=o.media_details.sizes[i].source_url,l.width=o.media_details.sizes[i].width,l.height=o.media_details.sizes[i].height),l.srcSet=Object.entries(o.media_details.sizes??{}).map(([r,c])=>`${c.source_url} ${c.width}w`).join(", "),l};return jsx(Fragment,{children:jsx("img",{...s(),alt:o.alt_text||""})})}function F(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(i=>F(i))):t.push([]),t}function Ce(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const s=e()?.scrollHeight??0;if(s){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${s}px !important`)}else t.current.style.minHeight=""}},1)}}var W=x(1688),N=x.n(W);const q=[],v=window.wp.primitives,K=(0,n.jsx)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(v.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),Z=(0,n.jsx)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(v.Path,{d:"M4 18h6V6H4v12zm9-9.5V10h7V8.5h-7zm0 7h7V14h-7v1.5z"})}),J=(0,n.jsx)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(v.Path,{d:"M14 6v12h6V6h-6zM4 10h7V8.5H4V10zm0 5.5h7V14H4v1.5z"})}),X=window.wp.hooks,I=window.wp.element;function Q({icon:e,size:t=24,...i},o){return(0,I.cloneElement)(e,{width:t,height:t,...i,ref:o})}const Y=(0,I.forwardRef)(Q),ee=(0,n.jsx)(v.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(v.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),te=(0,n.jsx)(v.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(v.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),ne={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,_.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,_.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,_.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,_.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0}},oe={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,t)=>(0,n.jsx)(T,{iconName:e,isEditorMode:!0,...t}),availableIcons:Object.fromEntries(Object.entries(ne).filter(([e,t])=>t.makeAvailableToUser===!0))}};function P(){return(0,X.applyFilters)("launchpadBlocks.icons",{...oe})}function ie({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:t,onIconSelect:i,onReset:o}){const s=P(),[l,r]=(0,k.useState)("");return(0,n.jsxs)(b.Panel,{children:[(0,n.jsxs)(b.PanelHeader,{children:[e," ",o?(0,n.jsx)(b.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{o()},size:"small",children:"Reset"}):null]}),(0,n.jsxs)(b.PanelBody,{children:[(0,n.jsx)(b.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:l,onChange:c=>{r(c)}}),(0,n.jsx)("div",{children:Object.entries(s).map(([c,a])=>{if(Object.keys(a.availableIcons).length===0)return null;const u=Object.entries(a.availableIcons).filter(([d,{title:h}])=>!!(d.includes(l)||h.includes(l)));return(0,n.jsx)(se,{name:a.name,iconCount:u.length,children:(0,n.jsx)("div",{className:`icon-select ${c}-icon-select`,children:u.map(([d,{title:h}])=>{const p=t.iconName===d&&t.library===c;return(0,n.jsx)("button",{className:`icon-select-icon ${c}-icon-select-icon ${c}-icon-select-icon-${d}${p?" is-selected":""}`,onClick:()=>{i({iconName:d,library:c})},title:h,children:a.renderIcon(d)},d)})})},c)})})]})]})}function se({name:e,iconCount:t,children:i}){const[o,s]=(0,k.useState)(!1);return(0,k.useEffect)(()=>{t===0&&o&&s(!1)},[o,t]),(0,n.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,n.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,n.jsxs)(b.Button,{type:"button","aria-expanded":o,onClick:()=>{t>0&&s(!o)},disabled:t===0,className:"icon-select-group-accordion-header-button",children:[(0,n.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,n.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:t}),(0,n.jsx)(Y,{className:"icon-select-group-accordion-arrow",icon:o?ee:te})]})}),o?i:null]})}function A({clientId:e,isSelected:t,attributes:{linkText:i,linkHref:o,linkTarget:s,iconName:l,library:r,size:c,iconPosition:a},setAttributes:u}){const[d,h]=(0,k.useState)(!1);(0,k.useEffect)(()=>{t||h(!1)},[t]);const p=(0,f.useBlockProps)({style:{"--icon-size":c}}),w=(0,k.useMemo)(()=>({url:o,opensInNewTab:s==="_blank",title:i}),[o,s,i]),C=P();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(f.BlockControls,{children:[(0,n.jsx)(b.ToolbarGroup,{children:(0,n.jsx)(b.ToolbarButton,{icon:K,label:(0,_.__)("Link"),isPressed:d,onClick:()=>{h(!d)}})}),(0,n.jsxs)(b.ToolbarGroup,{children:[(0,n.jsx)(b.ToolbarButton,{icon:Z,title:(0,_.__)("Show icon on left","launchpad-blocks"),isActive:a==="start",onClick:()=>u({iconPosition:"start"})}),(0,n.jsx)(b.ToolbarButton,{icon:J,title:(0,_.__)("Show icon on right","launchpad-blocks"),isActive:a==="end",onClick:()=>u({iconPosition:"end"})})]})]}),(0,n.jsxs)(f.InspectorControls,{children:[(0,n.jsx)(b.Panel,{children:(0,n.jsx)(b.PanelBody,{children:(0,n.jsx)(b.__experimentalUnitControl,{__next40pxDefaultSize:!0,label:"Icon size",value:c,onChange:g=>{u({size:g})}})})}),(0,n.jsx)(ie,{dataOnSelectedIcon:{iconName:l,library:r},onIconSelect:g=>{u({iconName:g.iconName,library:g.library})}})]}),(0,n.jsxs)("button",{...p,children:[a==="start"&&(0,n.jsx)("div",{className:"icon",children:C[r]?.renderIcon(l)}),(0,n.jsx)(f.RichText,{tagName:"span",className:"menu-group-list-item-link",onChange:g=>{u({linkText:g})},allowedFormats:["core/bold","core/italic"],value:i,placeholder:"Add text..."}),a==="end"&&(0,n.jsx)("div",{className:"icon",children:C[r]?.renderIcon(l)}),d?(0,n.jsx)(b.Popover,{position:"bottom",noArrow:!1,shift:!0,offset:10,children:(0,n.jsx)(f.LinkControl,{value:w,showInitialSuggestions:!0,onChange:g=>{u({linkId:g.id,linkKind:g.kind,linkType:g.type,linkHref:g.url,linkText:g.title,linkTarget:g.opensInNewTab?"_blank":"_self"}),h(!1)},onRemove:()=>{u({linkId:void 0,linkKind:void 0,linkType:void 0,linkHref:void 0,linkText:void 0})}},`${e}-link-edit`)}):null]})]})}A.displayName="ButtonWithIcon";function le({hasInnerBlocks:e}){return e?ae:re}function re(){return null}function ae(){return(0,n.jsx)(f.InnerBlocks.Content,{})}const ce={from:[{type:"block",blocks:["core/button"],transform:e=>{const{text:t,url:i,linkTarget:o,className:s}=e;return(0,m.createBlock)("launchpad-blocks/button-with-icon",{linkHref:i,linkText:t,linkTarget:o,className:s})}}],to:[{type:"block",blocks:["core/button"],transform:e=>{const{linkText:t,linkHref:i,linkTarget:o,className:s}=e;return(0,m.createBlock)("core/button",{url:i,text:t,linkTarget:o,className:s})}}]},de=[],Ie={},Pe=null;(0,m.registerBlockType)(N().name,{icon:(0,n.jsx)(T,{iconName:"button-with-icon",isEditorMode:!0}),deprecated:q,edit:A,save:le({hasInnerBlocks:!0}),transforms:ce}),R(),de.forEach(e=>{(0,m.registerBlockVariation)(N().name,e)})})(),y})());
