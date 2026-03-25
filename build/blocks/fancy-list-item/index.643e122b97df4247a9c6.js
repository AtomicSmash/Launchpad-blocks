(function(k,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var j=g();for(var l in j)(typeof exports=="object"?exports:k)[l]=j[l]}})(globalThis,()=>(()=>{var S={697:(l=>{l.exports={apiVersion:3,name:"launchpad-blocks/fancy-list-item",title:"Fancy list item",category:"theme",description:"A block to display a semantic list of content.",parent:["launchpad-blocks/fancy-list"],allowedBlocks:["launchpad-blocks/fancy-list"],textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{iconName:{type:"string"},library:{type:"string"},textContent:{type:"string"}},providesContext:{},usesContext:["launchpad-blocks/fancyListType","launchpad-blocks/fancyListMarkerType"],supports:{splitting:!0}}})},k={};function g(l){var h=k[l];if(h!==void 0)return h.exports;var b=k[l]={exports:{}};return S[l](b,b.exports,g),b.exports}g.n=l=>{var h=l&&l.__esModule?()=>l.default:()=>l;return g.d(h,{a:h}),h},g.d=(l,h)=>{for(var b in h)g.o(h,b)&&!g.o(l,b)&&Object.defineProperty(l,b,{enumerable:!0,get:h[b]})},g.o=(l,h)=>Object.prototype.hasOwnProperty.call(l,h);var j={};return(()=>{"use strict";const l=window.ReactJSXRuntime,h=window.wp.blocks,b=window.wp.blockEditor,v=window.wp.components,ae=window.wp.coreData,$=window.wp.data,_=window.wp.i18n,w=window.React;function re(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function A(e){return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,l.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,l.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,l.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const M=(0,w.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:i,isEditorMode:s=!1,...a}=n;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,...a,children:(0,l.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function T(e){return(0,l.jsx)(w.Suspense,{fallback:null,children:(0,l.jsx)(M,{...e})})}function R(){(0,h.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:A})}function N(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function ce(e,t,n){const o=t.spacing?.blockGap;let i="none";if(o===!0)i="both";else if(Array.isArray(o)){const a=o.includes("horizontal"),c=o.includes("vertical");a&&c?i="both":a?i="horizontal":c&&(i="vertical")}const s={columnGap:i==="both"||i==="horizontal"?N(n?.spacing?.blockGap,i):void 0,rowGap:i==="both"||i==="vertical"?N(n?.spacing?.blockGap,i):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function D(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const i=D(o.innerBlocks,t);i&&n.push(...i)}return n},[])}const ue=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=useMemo(()=>({}),[]),{postTypes:o,taxonomies:i}=useSelect(m=>{const{getEntityRecords:d}=m(coreStore),p=d("root","postType",e),r=d("root","taxonomy",t);if(!r)return{postTypes:p,taxonomies:r};for(const x of r)n[x.slug]=d("taxonomy",x.slug);return{postTypes:p,taxonomies:r}},[e,t,n]),s=["attachment"],a=[],c=o?.filter(({viewable:m,slug:d})=>m&&!s.includes(d));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const u={};for(const m of c){const d=i?.filter(({types:p,slug:r})=>p.includes(m.slug)&&!a.includes(r));d&&(u[m.slug]=d.map(p=>{const r=n?.[p.slug]??null;return{...p,terms:r}}))}return{filteredPostTypes:c,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function de({list:e,containerClassName:t,renderItem:n}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function L(e){return e.indexOf("data:image/svg+xml;")===0}function O(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function H(e){return e.indexOf("dashicons-")===0}function E({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(L(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(O(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(H(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const me={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function pe(){const[e,t,n,o]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),i={};if(o&&n&&n.length>0)for(const s of n)i[s.slug]={color:s.color,name:s.name};if(t&&t?.length>0)for(const s of t)i[s.slug]={color:s.color,name:s.name};if(e&&e?.length>0)for(const s of e)i[s.slug]={color:s.color,name:s.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:i}}function he({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:i=>{if(i)for(const s of i)s()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(i=>jsx(G,{colour:i,attributesDefinition:t,attributes:n,setAttributes:o},i.attributeName))})})}function G({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[i,s,a,c,u]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==n[e.attributeName],d=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},p=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:m,onDeselect:d,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:r,onToggle:x})=>jsx(Fragment,{children:jsx(Button,{ref:p,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":r,className:`block-editor-panel-color-gradient-settings__dropdown${r?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:n[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...i&&i?.length>0?[{name:"User",colors:i}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...c&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:n[e.attributeName],onChange:r=>{o({[e.attributeName]:r})},disableCustomColors:!u})})})})})},e.attributeName)}function fe({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[i,s,a]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=s?.map(({name:r,ratio:x})=>({label:r,value:x}))??[],u=i?.map(({name:r,ratio:x})=>({label:r,value:x}))??[],m=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?u:[],...c||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,p]=useState(m.map(r=>r.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:m,value:d,onChange:r=>{p(r),r!=="custom"&&t(r)}}),d==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:r=>{typeof r=="string"&&["contain","cover"].includes(r)&&o(r)},value:n,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const F=(e,t,n,o)=>{const{getBlocksByName:i,getBlockAttributes:s,getBlockParentsByBlockName:a}=select(blockEditorStore);return i(o).some(u=>{if(a(u,"core/template-part",!0).length)return!1;const{[n]:m}=s(u);return e!==u&&t===m})};function ge(e,t,n,o,i){const{[t]:s}=e,a=useCallback(u=>F(n,u,t,i),[n,t,i]);return useEffect(()=>{if(s===""){const u=n.slice(0,n.indexOf("-"));o({[t]:u})}if(a(s)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${s}. New value: ${u}`),o({[t]:u})}},[s,n,o,a,t]),useMemo(()=>function({label:m,help:d,onValidChange:p,idAttribute:r}){const[x,C]=useState(r);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof d=="function"?d(!a(x)):d,value:x,onChange:f=>{C(f),a(f)||p(f)}})},[a])}function be({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:B(t),controls:e.map(o=>{{const i=o===t;return{icon:B(o),title:U(o),isDisabled:i,onClick:()=>n(o)}}})})}function U(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function B(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function xe(e){const{hasChildren:t}=useSelect(n=>{const{getBlocks:o}=n(blockEditorStore);return{hasChildren:o(e).length>0}},[e]);return t}function ve({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:i,updateBlockAttributes:s}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:n.map(a=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?jsx(E,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&s(e,a.attributes),a.innerBlocks&&i(e,createBlocksFromInnerBlocksTemplate(a.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),o&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{i(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function _e({imageId:e,className:t="",size:n="full"}){const o=useSelect(s=>typeof e=="number"&&e>0?s(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!o)return null;const i=()=>{const s={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(s.src=o.media_details.sizes[n].source_url,s.width=o.media_details.sizes[n].width,s.height=o.media_details.sizes[n].height),s.srcSet=Object.entries(o.media_details.sizes??{}).map(([a,c])=>`${c.source_url} ${c.width}w`).join(", "),s};return jsx(Fragment,{children:jsx("img",{...i(),alt:o.alt_text||""})})}function V(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>V(n))):t.push([]),t}function we(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const i=e()?.scrollHeight??0;if(i){const s=t.current.style;s.minHeight="",t.current.setAttribute("style",`${s.cssText}min-height: ${i}px !important`)}else t.current.style.minHeight=""}},1)}}var W=g(697),q=g.n(W);const J=window.wp.richText,K=window.wp.hooks,z=window.wp.element;function X({icon:e,size:t=24,...n},o){return(0,z.cloneElement)(e,{width:t,height:t,...n,ref:o})}const Z=(0,z.forwardRef)(X),y=window.wp.primitives,Q=(0,l.jsx)(y.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(y.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),Y=(0,l.jsx)(y.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(y.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),ee={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,_.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,_.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,_.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,_.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0},lightbox:{title:(0,_.__)("Lightbox","launchpad-blocks")}},te={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,t)=>(0,l.jsx)(T,{iconName:e,isEditorMode:!0,...t}),availableIcons:Object.fromEntries(Object.entries(ee).filter(([e,t])=>t.makeAvailableToUser===!0))}};function I(){return(0,K.applyFilters)("launchpadBlocks.icons",{...te})}function ne({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:t,onIconSelect:n,onReset:o}){const i=I(),[s,a]=(0,w.useState)("");return(0,l.jsxs)(v.Panel,{children:[(0,l.jsxs)(v.PanelHeader,{children:[e," ",o?(0,l.jsx)(v.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{o()},size:"small",children:"Reset"}):null]}),(0,l.jsxs)(v.PanelBody,{children:[(0,l.jsx)(v.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:s,onChange:c=>{a(c)}}),(0,l.jsx)("div",{children:Object.entries(i).map(([c,u])=>{if(Object.keys(u.availableIcons).length===0)return null;const m=Object.entries(u.availableIcons).filter(([d,{title:p}])=>!!(d.includes(s)||p.includes(s)));return(0,l.jsx)(oe,{name:u.name,iconCount:m.length,children:(0,l.jsx)("div",{className:`icon-select ${c}-icon-select`,children:m.map(([d,{title:p}])=>{const r=t.iconName===d&&t.library===c;return(0,l.jsx)("button",{className:`icon-select-icon ${c}-icon-select-icon ${c}-icon-select-icon-${d}${r?" is-selected":""}`,onClick:()=>{n({iconName:d,library:c})},title:p,children:u.renderIcon(d)},d)})})},c)})})]})]})}function oe({name:e,iconCount:t,children:n}){const[o,i]=(0,w.useState)(!1);return(0,w.useEffect)(()=>{t===0&&o&&i(!1)},[o,t]),(0,l.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,l.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,l.jsxs)(v.Button,{type:"button","aria-expanded":o,onClick:()=>{t>0&&i(!o)},disabled:t===0,className:"icon-select-group-accordion-header-button",children:[(0,l.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,l.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:t}),(0,l.jsx)(Z,{className:"icon-select-group-accordion-arrow",icon:o?Q:Y})]})}),o?n:null]})}function P({attributes:e,context:t,setAttributes:n,mergeBlocks:o,onReplace:i,onRemove:s}){const{textContent:a,iconName:c,library:u}=e,m=t["launchpad-blocks/fancyListType"]==="ul"&&t["launchpad-blocks/fancyListMarkerType"]==="icon",d=m&&c&&u,p=(0,b.useBlockProps)({className:`${d?"has-icon":""}`}),r=I(),x=(0,w.useRef)(null),C=(0,$.useSelect)(f=>f(J.store).getFormatTypes(),[]).map(f=>f.name);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.InspectorControls,{children:m?(0,l.jsx)(ne,{dataOnSelectedIcon:{iconName:c,library:u},onIconSelect:f=>{n({iconName:f.iconName,library:f.library})},onReset:()=>{n({iconName:void 0,library:void 0})}}):null}),(0,l.jsxs)("li",{...p,children:[d?r[u]?.renderIcon(c,{className:"list-item-icon"}):null,(0,l.jsx)(b.RichText,{identifier:"textContent",ref:x,tagName:"span",onChange:f=>{n({textContent:f})},onMerge:o,onReplace:i,onRemove:s,value:a,placeholder:(0,_.__)("Write your list item content...","launchpad-blocks"),allowedFormats:[...C.filter(f=>f!=="core/footnote"&&f!=="core/image")]})]})]})}P.displayName="FancyListItemEdit";function ie({hasInnerBlocks:e}){return e?le:se}function se(){return null}function le(){return(0,l.jsx)(b.InnerBlocks.Content,{})}(0,h.registerBlockType)(q().name,{icon:(0,l.jsx)(T,{iconName:"list-item"}),edit:P,save:ie({hasInnerBlocks:!0}),merge:(e,t)=>({...e,textContent:(e.textContent??"")+(t.textContent??"")})}),R()})(),j})());
