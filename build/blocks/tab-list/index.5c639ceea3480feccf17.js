(function(_,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var v=g();for(var a in v)(typeof exports=="object"?exports:_)[a]=v[a]}})(globalThis,()=>(()=>{var y={5471:(a=>{a.exports={apiVersion:3,name:"launchpad-blocks/tab-list",ancestor:["launchpad-blocks/tabs"],title:"Tab list",category:"theme",description:"The tab list associated with a Tabs block.",textdomain:"launchpad",keywords:[],editorScript:"file:./index.tsx",render:"file:./render.php",attributes:{selectedTab:{type:"string",default:""}},providesContext:{},usesContext:["launchpad/tabsGroupId","launchpad/initiallySelectedTab","launchpad/shouldShowTabSectionTitle","launchpad/title"],supports:{align:!0,alignWide:!0,layout:{default:{type:"flex"}},spacing:{blockGap:!0}}}})},_={};function g(a){var f=_[a];if(f!==void 0)return f.exports;var b=_[a]={exports:{}};return y[a](b,b.exports,g),b.exports}g.n=a=>{var f=a&&a.__esModule?()=>a.default:()=>a;return g.d(f,{a:f}),f},g.d=(a,f)=>{for(var b in f)g.o(f,b)&&!g.o(a,b)&&Object.defineProperty(a,b,{enumerable:!0,get:f[b]})},g.o=(a,f)=>Object.prototype.hasOwnProperty.call(a,f);var v={};return(()=>{"use strict";const a=window.ReactJSXRuntime,f=window.wp.blocks,b=window.wp.blockEditor,$=window.wp.components,Y=window.wp.coreData,j=window.wp.data,ee=window.wp.i18n,k=window.React;function te(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function P(e){return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,a.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,a.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,a.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const D=(0,k.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:s,isEditorMode:l=!1,...i}=n;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,...i,children:(0,a.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function I(e){return(0,a.jsx)(k.Suspense,{fallback:null,children:(0,a.jsx)(D,{...e})})}function R(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:P})}function C(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function A(e,t,n){const o=t.spacing?.blockGap;let s="none";if(o===!0)s="both";else if(Array.isArray(o)){const i=o.includes("horizontal"),u=o.includes("vertical");i&&u?s="both":i?s="horizontal":u&&(s="vertical")}const l={columnGap:s==="both"||s==="horizontal"?C(n?.spacing?.blockGap,s):void 0,rowGap:s==="both"||s==="vertical"?C(n?.spacing?.blockGap,s):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let i="";return e.minimumColumnWidth?i=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(i=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:i,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function S(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const s=S(o.innerBlocks,t);s&&n.push(...s)}return n},[])}const ne=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=useMemo(()=>({}),[]),{postTypes:o,taxonomies:s}=useSelect(m=>{const{getEntityRecords:p}=m(coreStore),h=p("root","postType",e),r=p("root","taxonomy",t);if(!r)return{postTypes:h,taxonomies:r};for(const d of r)n[d.slug]=p("taxonomy",d.slug);return{postTypes:h,taxonomies:r}},[e,t,n]),l=["attachment"],i=[],u=o?.filter(({viewable:m,slug:p})=>m&&!l.includes(p));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const c={};for(const m of u){const p=s?.filter(({types:h,slug:r})=>h.includes(m.slug)&&!i.includes(r));p&&(c[m.slug]=p.map(h=>{const r=n?.[h.slug]??null;return{...h,terms:r}}))}return{filteredPostTypes:u,mappedTaxonomies:c===void 0||Object.values(c).length===0?void 0:c}};function oe({list:e,containerClassName:t,renderItem:n}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function M(e){return e.indexOf("data:image/svg+xml;")===0}function G(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function O(e){return e.indexOf("dashicons-")===0}function E({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(M(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(G(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(O(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const se={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function le({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:s=>{if(s)for(const l of s)l()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(s=>jsx(H,{colour:s,attributesDefinition:t,attributes:n,setAttributes:o},s.attributeName))})})}function H({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[s,l,i,u,c]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==n[e.attributeName],p=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},h=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:m,onDeselect:p,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:r,onToggle:d})=>jsx(Fragment,{children:jsx(Button,{ref:h,__next40pxDefaultSize:!0,onClick:d,"aria-expanded":r,className:`block-editor-panel-color-gradient-settings__dropdown${r?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:n[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...s&&s?.length>0?[{name:"User",colors:s}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...u&&i&&i.length>0?[{name:"Default",colors:i}]:[]],value:n[e.attributeName],onChange:r=>{o({[e.attributeName]:r})},disableCustomColors:!c})})})})})},e.attributeName)}function ie({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[s,l,i]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=l?.map(({name:r,ratio:d})=>({label:r,value:d}))??[],c=s?.map(({name:r,ratio:d})=>({label:r,value:d}))??[],m=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...i?c:[],...u||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,h]=useState(m.map(r=>r.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:m,value:p,onChange:r=>{h(r),r!=="custom"&&t(r)}}),p==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:r=>{typeof r=="string"&&["contain","cover"].includes(r)&&o(r)},value:n,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const L=(e,t,n,o)=>{const{getBlocksByName:s,getBlockAttributes:l,getBlockParentsByBlockName:i}=select(blockEditorStore);return s(o).some(c=>{if(i(c,"core/template-part",!0).length)return!1;const{[n]:m}=l(c);return e!==c&&t===m})};function ae(e,t,n,o,s){const{[t]:l}=e,i=useCallback(c=>L(n,c,t,s),[n,t,s]);return useEffect(()=>{if(l===""){const c=n.slice(0,n.indexOf("-"));o({[t]:c})}if(i(l)){const c=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${c}`),o({[t]:c})}},[l,n,o,i,t]),useMemo(()=>function({label:m,help:p,onValidChange:h,idAttribute:r}){const[d,w]=useState(r);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof p=="function"?p(!i(d)):p,value:d,onChange:x=>{w(x),i(x)||h(x)}})},[i])}function re({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:T(t),controls:e.map(o=>{{const s=o===t;return{icon:T(o),title:W(o),isDisabled:s,onClick:()=>n(o)}}})})}function W(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function T(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function ce(e){const{hasChildren:t}=useSelect(n=>{const{getBlocks:o}=n(blockEditorStore);return{hasChildren:o(e).length>0}},[e]);return t}function ue({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:s,updateBlockAttributes:l}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:n.map(i=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof i.icon=="string"?jsx(E,{iconString:i.icon}):i.icon,iconSize:48,onClick:()=>{i.attributes&&l(e,i.attributes),i.innerBlocks&&s(e,createBlocksFromInnerBlocksTemplate(i.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:i.title})]},i.name))}),o&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{s(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function de({imageId:e,className:t="",size:n="full"}){const o=useSelect(l=>typeof e=="number"&&e>0?l(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!o)return null;const s=()=>{const l={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(l.src=o.media_details.sizes[n].source_url,l.width=o.media_details.sizes[n].width,l.height=o.media_details.sizes[n].height),l.srcSet=Object.entries(o.media_details.sizes??{}).map(([i,u])=>`${u.source_url} ${u.width}w`).join(", "),l};return jsx(Fragment,{children:jsx("img",{...s(),alt:o.alt_text||""})})}function F(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>F(n))):t.push([]),t}function pe(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const s=e()?.scrollHeight??0;if(s){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${s}px !important`)}else t.current.style.minHeight=""}},1)}}var V=g(5471),q=g.n(V);const U={align:!0,alignWide:!0,layout:{default:{type:"flex"}},spacing:{blockGap:!0}};function B({clientId:e,context:t,attributes:n,attributes:{selectedTab:o},setAttributes:s}){const{layout:l,style:i}=n,{className:u,style:c}=A(l,U,i),m=(0,b.useBlockProps)({className:u,style:c}),{tabGroupClientId:p,tabPanelGroup:h}=(0,j.useSelect)(d=>{const{getBlockParentsByBlockName:w,getBlock:x}=d(b.store),z=w(e,"launchpad-blocks/tabs")[0],K=x(z).innerBlocks,N=S(K,"launchpad-blocks/tab-panel-group"),Q=N?N[0]??null:null;return{tabGroupClientId:z,tabPanelGroup:Q}},[e]),{updateBlockAttributes:r}=(0,j.useDispatch)(b.store);return(0,k.useEffect)(()=>{if(o===""){const d=t["launchpad/initiallySelectedTab"]===""?t["launchpad/initiallySelectedTab"]:h?.innerBlocks[0]?.attributes.id;d&&d!==""&&s({selectedTab:d})}},[o,t,s,h?.innerBlocks]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{...m,children:(0,a.jsx)($.Slot,{name:`${t["launchpad/tabsGroupId"]}TabList`,fillProps:{selectedTab:o,initiallySelectedTab:t["launchpad/initiallySelectedTab"],setSelectedTab:d=>{s({selectedTab:d})},setInitiallySelectedTab:d=>{r([p],{initiallySelectedTab:d})}}})})})}B.displayName="TabListEdit";function J({hasInnerBlocks:e}){return e?Z:X}function X(){return null}function Z(){return(0,a.jsx)(b.InnerBlocks.Content,{})}const me={},he=null;(0,f.registerBlockType)(q().name,{icon:(0,a.jsx)(I,{iconName:"tab-list"}),edit:B,save:J({hasInnerBlocks:!1})}),R()})(),v})());
