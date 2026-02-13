(function(C,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var T=x();for(var o in T)(typeof exports=="object"?exports:C)[o]=T[o]}})(globalThis,()=>(()=>{var S={1688:(o=>{o.exports={apiVersion:3,name:"launchpad-blocks/button-with-icon",title:"Button with icon",ancestor:["core/buttons"],category:"theme",description:"A button with selectable icon",textdomain:"launchpad-blocks",keywords:["button","link","icon"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",styles:[{name:"fill",label:"Fill",isDefault:!0},{name:"outline",label:"Outline"}],attributes:{iconName:{type:"string",role:"content"},library:{type:"string",role:"content"},size:{type:"string",default:"1rem"},iconPosition:{type:"string",enum:["start","end"],default:"start"},linkId:{type:"number"},linkKind:{type:"string"},linkType:{type:"string"},linkHref:{type:"string"},linkTarget:{type:"string",enum:["_self","_blank"],default:"_self"},linkText:{type:"string"},anchor:{type:"string"}},providesContext:{},usesContext:[],example:{attributes:{library:"launchpad-blocks",iconName:"button-with-icon",size:"1rem",iconPosition:"start",linkText:"button"}},supports:{anchor:!0,splitting:!0}}})},C={};function x(o){var h=C[o];if(h!==void 0)return h.exports;var f=C[o]={exports:{}};return S[o](f,f.exports,x),f.exports}x.n=o=>{var h=o&&o.__esModule?()=>o.default:()=>o;return x.d(h,{a:h}),h},x.d=(o,h)=>{for(var f in h)x.o(h,f)&&!x.o(o,f)&&Object.defineProperty(o,f,{enumerable:!0,get:h[f]})},x.o=(o,h)=>Object.prototype.hasOwnProperty.call(o,h);var T={};return(()=>{"use strict";const o=window.ReactJSXRuntime,h=window.wp.blocks,f=window.wp.blockEditor,b=window.wp.components,ge=window.wp.coreData,fe=window.wp.data,_=window.wp.i18n,k=window.React;function be(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function H(e){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,o.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,o.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,o.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const D=(0,k.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(i){const{iconName:n,size:s,isEditorMode:l=!1,...r}=i;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...r,children:(0,o.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function B(e){return(0,o.jsx)(k.Suspense,{fallback:null,children:(0,o.jsx)(D,{...e})})}function R(){(0,h.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:H})}function z(e,t){if(e===void 0)return e;let i;if(t==="both")i=e;else if(t==="horizontal")i=e.left;else if(t==="vertical")i=e.top;else return;return i.startsWith("var:")?`var(--wp--${i.replace("var:","").split("|").join("--")})`:i}function xe(e,t,i){const n=t.spacing?.blockGap;let s="none";if(n===!0)s="both";else if(Array.isArray(n)){const r=n.includes("horizontal"),c=n.includes("vertical");r&&c?s="both":r?s="horizontal":c&&(s="vertical")}const l={columnGap:s==="both"||s==="horizontal"?z(i?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?z(i?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function L(e,t){return e.reduce((i,n)=>{if(n.name===t)i.push(n);else if(n.innerBlocks){const s=L(n.innerBlocks,t);s&&i.push(...s)}return i},[])}const ve=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),i=useMemo(()=>({}),[]),{postTypes:n,taxonomies:s}=useSelect(p=>{const{getEntityRecords:u}=p(coreStore),m=u("root","postType",e),a=u("root","taxonomy",t);if(!a)return{postTypes:m,taxonomies:a};for(const g of a)i[g.slug]=u("taxonomy",g.slug);return{postTypes:m,taxonomies:a}},[e,t,i]),l=["attachment"],r=[],c=n?.filter(({viewable:p,slug:u})=>p&&!l.includes(u));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const d={};for(const p of c){const u=s?.filter(({types:m,slug:a})=>m.includes(p.slug)&&!r.includes(a));u&&(d[p.slug]=u.map(m=>{const a=i?.[m.slug]??null;return{...m,terms:a}}))}return{filteredPostTypes:c,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function we({list:e,containerClassName:t,renderItem:i}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>i({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function O(e){return e.indexOf("data:image/svg+xml;")===0}function E(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function V(e){return e.indexOf("dashicons-")===0}function G({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(O(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(E(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(V(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ke={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function _e({colours:e,attributesDefinition:t,attributes:i,setAttributes:n}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:s=>{if(s)for(const l of s)l()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>jsx(U,{colour:s,attributesDefinition:t,attributes:i,setAttributes:n},s.attributeName))})})}function U({colour:e,attributesDefinition:t,attributes:i,setAttributes:n}){const[s,l,r,c,d]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),p=()=>t[e.attributeName]?.default!==i[e.attributeName],u=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},m=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:u,hasValue:p,onDeselect:u,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:a,onToggle:g})=>jsx(Fragment,{children:jsx(Button,{ref:m,__next40pxDefaultSize:!0,onClick:g,"aria-expanded":a,className:`block-editor-panel-color-gradient-settings__dropdown${a?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:i[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...c&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:i[e.attributeName],onChange:a=>{n({[e.attributeName]:a})},disableCustomColors:!d})})})})})},e.attributeName)}function je({ratioValue:e,ratioOnChange:t,imageFitValue:i,imageFitOnChange:n}){const[s,l,r]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=l?.map(({name:a,ratio:g})=>({label:a,value:g}))??[],d=s?.map(({name:a,ratio:g})=>({label:a,value:g}))??[],p=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?d:[],...c||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[u,m]=useState(p.map(a=>a.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:p,value:u,onChange:a=>{m(a),a!=="custom"&&t(a)}}),u==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:a=>{typeof a=="string"&&["contain","cover"].includes(a)&&n(a)},value:i,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const F=(e,t,i,n)=>{const{getBlocksByName:s,getBlockAttributes:l,getBlockParentsByBlockName:r}=select(blockEditorStore);return s(n).some(d=>{if(r(d,"core/template-part",!0).length)return!1;const{[i]:p}=l(d);return e!==d&&t===p})};function ye(e,t,i,n,s){const{[t]:l}=e,r=useCallback(d=>F(i,d,t,s),[i,t,s]);return useEffect(()=>{if(l===""){const d=i.slice(0,i.indexOf("-"));n({[t]:d})}if(r(l)){const d=i.slice(0,i.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${d}`),n({[t]:d})}},[l,i,n,r,t]),useMemo(()=>function({label:p,help:u,onValidChange:m,idAttribute:a}){const[g,y]=useState(a);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:p,help:typeof u=="function"?u(!r(g)):u,value:g,onChange:j=>{y(j),r(j)||m(j)}})},[r])}function Ce({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:i}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:N(t),controls:e.map(n=>{{const s=n===t;return{icon:N(n),title:W(n),isDisabled:s,onClick:()=>i(n)}}})})}function W(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function N(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function Te(e){const{hasChildren:t}=useSelect(i=>{const{getBlocks:n}=i(blockEditorStore);return{hasChildren:n(e).length>0}},[e]);return t}function Se({clientId:e,blockInfo:t,variations:i,allowSkip:n}){const{replaceInnerBlocks:s,updateBlockAttributes:l}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:i.map(r=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?jsx(G,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&l(e,r.attributes),r.innerBlocks&&s(e,createBlocksFromInnerBlocksTemplate(r.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),n&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function Be({imageId:e,className:t="",size:i="full"}){const n=useSelect(l=>typeof e=="number"&&e>0?l(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!n)return null;const s=()=>{const l={src:n.source_url,className:`attachment-${i} size-${i} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[i]&&(l.src=n.media_details.sizes[i].source_url,l.width=n.media_details.sizes[i].width,l.height=n.media_details.sizes[i].height),l.srcSet=Object.entries(n.media_details.sizes??{}).map(([r,c])=>`${c.source_url} ${c.width}w`).join(", "),l};return jsx(Fragment,{children:jsx("img",{...s(),alt:n.alt_text||""})})}function q(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(i=>q(i))):t.push([]),t}function ze(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const s=e()?.scrollHeight??0;if(s){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${s}px !important`)}else t.current.style.minHeight=""}},1)}}var K=x(1688),I=x.n(K);const Z=[],w=window.wp.primitives,J=(0,o.jsx)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(w.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),X=(0,o.jsx)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(w.Path,{d:"M4 18h6V6H4v12zm9-9.5V10h7V8.5h-7zm0 7h7V14h-7v1.5z"})}),Q=(0,o.jsx)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(w.Path,{d:"M14 6v12h6V6h-6zM4 10h7V8.5H4V10zm0 5.5h7V14H4v1.5z"})}),Y=window.wp.hooks,P=window.wp.element;function ee({icon:e,size:t=24,...i},n){return(0,P.cloneElement)(e,{width:t,height:t,...i,ref:n})}const te=(0,P.forwardRef)(ee),ne=(0,o.jsx)(w.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(w.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),oe=(0,o.jsx)(w.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(w.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),ie={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,_.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,_.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,_.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,_.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0}},se={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,t)=>(0,o.jsx)(B,{iconName:e,isEditorMode:!0,...t}),availableIcons:Object.fromEntries(Object.entries(ie).filter(([e,t])=>t.makeAvailableToUser===!0))}};function M(){return(0,Y.applyFilters)("launchpadBlocks.icons",{...se})}function le({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:t,onIconSelect:i,onReset:n}){const s=M(),[l,r]=(0,k.useState)("");return(0,o.jsxs)(b.Panel,{children:[(0,o.jsxs)(b.PanelHeader,{children:[e," ",n?(0,o.jsx)(b.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{n()},size:"small",children:"Reset"}):null]}),(0,o.jsxs)(b.PanelBody,{children:[(0,o.jsx)(b.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:l,onChange:c=>{r(c)}}),(0,o.jsx)("div",{children:Object.entries(s).map(([c,d])=>{if(Object.keys(d.availableIcons).length===0)return null;const p=Object.entries(d.availableIcons).filter(([u,{title:m}])=>!!(u.includes(l)||m.includes(l)));return(0,o.jsx)(re,{name:d.name,iconCount:p.length,children:(0,o.jsx)("div",{className:`icon-select ${c}-icon-select`,children:p.map(([u,{title:m}])=>{const a=t.iconName===u&&t.library===c;return(0,o.jsx)("button",{className:`icon-select-icon ${c}-icon-select-icon ${c}-icon-select-icon-${u}${a?" is-selected":""}`,onClick:()=>{i({iconName:u,library:c})},title:m,children:d.renderIcon(u)},u)})})},c)})})]})]})}function re({name:e,iconCount:t,children:i}){const[n,s]=(0,k.useState)(!1);return(0,k.useEffect)(()=>{t===0&&n&&s(!1)},[n,t]),(0,o.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,o.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,o.jsxs)(b.Button,{type:"button","aria-expanded":n,onClick:()=>{t>0&&s(!n)},disabled:t===0,className:"icon-select-group-accordion-header-button",children:[(0,o.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,o.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:t}),(0,o.jsx)(te,{className:"icon-select-group-accordion-arrow",icon:n?ne:oe})]})}),n?i:null]})}function $({clientId:e,isSelected:t,attributes:i,setAttributes:n,mergeBlocks:s,onReplace:l,onRemove:r}){const{linkText:c,linkHref:d,linkTarget:p,iconName:u,library:m,size:a,iconPosition:g}=i,[y,j]=(0,k.useState)(!1);(0,k.useEffect)(()=>{t||j(!1)},[t]);const me=(0,f.useBlockProps)({style:{"--icon-size":a}}),he=(0,k.useMemo)(()=>({url:d,opensInNewTab:p==="_blank",title:c}),[d,p,c]),A=M();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(f.BlockControls,{children:[(0,o.jsx)(b.ToolbarGroup,{children:(0,o.jsx)(b.ToolbarButton,{icon:J,label:(0,_.__)("Link"),isPressed:y,onClick:()=>{j(!y)}})}),(0,o.jsxs)(b.ToolbarGroup,{children:[(0,o.jsx)(b.ToolbarButton,{icon:X,title:(0,_.__)("Show icon on left","launchpad-blocks"),isActive:g==="start",onClick:()=>n({iconPosition:"start"})}),(0,o.jsx)(b.ToolbarButton,{icon:Q,title:(0,_.__)("Show icon on right","launchpad-blocks"),isActive:g==="end",onClick:()=>n({iconPosition:"end"})})]})]}),(0,o.jsxs)(f.InspectorControls,{children:[(0,o.jsx)(b.Panel,{children:(0,o.jsx)(b.PanelBody,{children:(0,o.jsx)(b.__experimentalUnitControl,{__next40pxDefaultSize:!0,label:"Icon size",value:a,onChange:v=>{n({size:v})}})})}),(0,o.jsx)(le,{dataOnSelectedIcon:{iconName:u,library:m},onIconSelect:v=>{n({iconName:v.iconName,library:v.library})}})]}),(0,o.jsxs)("button",{...me,children:[g==="start"&&(0,o.jsx)("div",{className:"icon",children:A[m]?.renderIcon(u)}),(0,o.jsx)(f.RichText,{identifier:"linkText",tagName:"span",onChange:v=>{n({linkText:v})},allowedFormats:["core/bold","core/italic"],value:c,placeholder:"Add text...",onMerge:s,onReplace:l,onRemove:r}),g==="end"&&(0,o.jsx)("div",{className:"icon",children:A[m]?.renderIcon(u)}),y?(0,o.jsx)(b.Popover,{position:"bottom",noArrow:!1,shift:!0,offset:10,children:(0,o.jsx)(f.LinkControl,{value:he,showInitialSuggestions:!0,onChange:v=>{n({linkId:v.id,linkKind:v.kind,linkType:v.type,linkHref:v.url,linkText:v.title,linkTarget:v.opensInNewTab?"_blank":"_self"}),j(!1)},onRemove:()=>{n({linkId:void 0,linkKind:void 0,linkType:void 0,linkHref:void 0,linkText:void 0})}},`${e}-link-edit`)}):null]})]})}$.displayName="ButtonWithIcon";function ae({hasInnerBlocks:e}){return e?ue:ce}function ce(){return null}function ue(){return(0,o.jsx)(f.InnerBlocks.Content,{})}const de={from:[{type:"block",blocks:["core/button"],transform:e=>{const{text:t,url:i,linkTarget:n,className:s}=e;return(0,h.createBlock)("launchpad-blocks/button-with-icon",{linkHref:i,linkText:t,linkTarget:n,className:s})}}],to:[{type:"block",blocks:["core/button"],transform:e=>{const{linkText:t,linkHref:i,linkTarget:n,className:s}=e;return(0,h.createBlock)("core/button",{url:i,text:t,linkTarget:n,className:s})}}]},pe=[],Ae={},He=null;(0,h.registerBlockType)(I().name,{icon:(0,o.jsx)(B,{iconName:"button-with-icon",isEditorMode:!0}),deprecated:Z,edit:$,save:ae({hasInnerBlocks:!0}),transforms:de}),R(),pe.forEach(e=>{(0,h.registerBlockVariation)(I().name,e)})})(),T})());
