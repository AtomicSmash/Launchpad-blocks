(function(x,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var v=g();for(var i in v)(typeof exports=="object"?exports:x)[i]=v[i]}})(globalThis,()=>(()=>{var y={4781:(i=>{i.exports={apiVersion:3,name:"launchpad-blocks/nav-list",title:"Nav list",category:"theme",description:"The collection of the actual menu items for your navigation.",allowedBlocks:["launchpad-blocks/nav-submenu","launchpad-blocks/nav-menu-item","launchpad-blocks/nav-links-group"],textdomain:"launchpad-blocks",keywords:["menu","links"],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{isNestedInAnotherNavLink:{type:"boolean",default:!1},ariaLabel:{type:"string",default:"Primary navigation"},linkOrientation:{type:"string",enum:["horizontal","vertical"],default:"horizontal"}},supports:{},example:{viewportWidth:400,attributes:{isNestedInAnotherNavLink:!1},innerBlocks:[{name:"launchpad-blocks/nav-submenu",attributes:{linkText:"Sub menu",isPreview:!0},innerBlocks:[{name:"launchpad-blocks/nav-list",attributes:{isNestedInAnotherNavLink:!0},innerBlocks:[]}]},{name:"launchpad-blocks/nav-submenu",attributes:{linkText:"Sub menu",isPreview:!0},innerBlocks:[{name:"launchpad-blocks/nav-list",attributes:{isNestedInAnotherNavLink:!0},innerBlocks:[]}]},{name:"launchpad-blocks/nav-menu-item",attributes:{linkText:"Menu link",linkHref:"#"}},{name:"launchpad-blocks/nav-menu-item",attributes:{linkText:"Menu link",linkHref:"#"}}]},providesContext:{},usesContext:["launchpad-blocks/isInSubMenu"]}})},x={};function g(i){var h=x[i];if(h!==void 0)return h.exports;var m=x[i]={exports:{}};return y[i](m,m.exports,g),m.exports}g.n=i=>{var h=i&&i.__esModule?()=>i.default:()=>i;return g.d(h,{a:h}),h},g.d=(i,h)=>{for(var m in h)g.o(h,m)&&!g.o(i,m)&&Object.defineProperty(i,m,{enumerable:!0,get:h[m]})},g.o=(i,h)=>Object.prototype.hasOwnProperty.call(i,h);var v={};return(()=>{"use strict";const i=window.ReactJSXRuntime,h=window.wp.blocks,m=window.wp.blockEditor,k=window.wp.components,K=window.wp.coreData,N=window.wp.data,C=window.wp.i18n,_=window.React;function Q(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function P(e){return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,i.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,i.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,i.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const T=(0,_.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:l,isEditorMode:s=!1,...r}=n;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...r,children:(0,i.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function $(e){return(0,i.jsx)(_.Suspense,{fallback:null,children:(0,i.jsx)(T,{...e})})}function D(){(0,h.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:P})}function z(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Y(e,t,n){const o=t.spacing?.blockGap;let l="none";if(o===!0)l="both";else if(Array.isArray(o)){const r=o.includes("horizontal"),d=o.includes("vertical");r&&d?l="both":r?l="horizontal":d&&(l="vertical")}const s={columnGap:l==="both"||l==="horizontal"?z(n?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?z(n?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function R(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const l=R(o.innerBlocks,t);l&&n.push(...l)}return n},[])}const ee=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=useMemo(()=>({}),[]),{postTypes:o,taxonomies:l}=useSelect(p=>{const{getEntityRecords:u}=p(coreStore),f=u("root","postType",e),a=u("root","taxonomy",t);if(!a)return{postTypes:f,taxonomies:a};for(const b of a)n[b.slug]=u("taxonomy",b.slug);return{postTypes:f,taxonomies:a}},[e,t,n]),s=["attachment"],r=[],d=o?.filter(({viewable:p,slug:u})=>p&&!s.includes(u));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const c={};for(const p of d){const u=l?.filter(({types:f,slug:a})=>f.includes(p.slug)&&!r.includes(a));u&&(c[p.slug]=u.map(f=>{const a=n?.[f.slug]??null;return{...f,terms:a}}))}return{filteredPostTypes:d,mappedTaxonomies:c===void 0||Object.values(c).length===0?void 0:c}};function te({list:e,containerClassName:t,renderItem:n}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function A(e){return e.indexOf("data:image/svg+xml,")===0}function M(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function I(e){return e.indexOf("dashicons-")===0}function H({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(A(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:jsx("br",{})});if(M(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(I(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ne={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function oe(){const[e,t,n,o]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(o&&n&&n.length>0)for(const s of n)l[s.slug]={color:s.color,name:s.name};if(t&&t?.length>0)for(const s of t)l[s.slug]={color:s.color,name:s.name};if(e&&e?.length>0)for(const s of e)l[s.slug]={color:s.color,name:s.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:l}}function se({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:l=>{if(l)for(const s of l)s()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>jsx(L,{colour:l,attributesDefinition:t,attributes:n,setAttributes:o},l.attributeName))})})}function L({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[l,s,r,d,c]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),p=()=>t[e.attributeName]?.default!==n[e.attributeName],u=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:u,hasValue:p,onDeselect:u,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:a,onToggle:b})=>jsx(Fragment,{children:jsx(Button,{ref:f,__next40pxDefaultSize:!0,onClick:b,"aria-expanded":a,className:`block-editor-panel-color-gradient-settings__dropdown${a?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:n[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...d&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:n[e.attributeName],onChange:a=>{o({[e.attributeName]:a})},disableCustomColors:!c})})})})})},e.attributeName)}function le({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[l,s,r]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=s?.map(({name:a,ratio:b})=>({label:a,value:b}))??[],c=l?.map(({name:a,ratio:b})=>({label:a,value:b}))??[],p=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?c:[],...d||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[u,f]=useState(p.map(a=>a.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:p,value:u,onChange:a=>{f(a),a!=="custom"&&t(a)}}),u==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:a=>{typeof a=="string"&&["contain","cover"].includes(a)&&o(a)},value:n,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const O=(e,t,n,o)=>{const{getBlocksByName:l,getBlockAttributes:s,getBlockParentsByBlockName:r}=select(blockEditorStore);return l(o).some(c=>{if(r(c,"core/template-part",!0).length)return!1;const{[n]:p}=s(c);return e!==c&&t===p})};function ie(e,t,n,o,l){const{[t]:s}=e,r=useCallback(c=>O(n,c,t,l),[n,t,l]);return useEffect(()=>{if(s===""){const c=n.slice(0,n.indexOf("-"));o({[t]:c})}if(r(s)){const c=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${s}. New value: ${c}`),o({[t]:c})}},[s,n,o,r,t]),useMemo(()=>function({label:p,help:u,onValidChange:f,idAttribute:a}){const[b,Z]=useState(a);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:p,help:typeof u=="function"?u(!r(b)):u,value:b,onChange:j=>{Z(j),r(j)||f(j)}})},[r])}function re({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:B(t),controls:e.map(o=>{{const l=o===t;return{icon:B(o),title:E(o),isDisabled:l,onClick:()=>n(o)}}})})}function E(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function B(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function ae(e){const{hasChildren:t}=useSelect(n=>{const{getBlocks:o}=n(blockEditorStore);return{hasChildren:o(e).length>0}},[e]);return t}function ce({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:l,updateBlockAttributes:s}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:n.map(r=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?jsx(H,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&s(e,r.attributes),r.innerBlocks&&l(e,createBlocksFromInnerBlocksTemplate(r.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),o&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function ue({imageId:e,className:t="",size:n="full"}){const o=useSelect(s=>typeof e=="number"&&e>0?s(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!o)return null;const l=()=>{const s={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(s.src=o.media_details.sizes[n].source_url,s.width=o.media_details.sizes[n].width,s.height=o.media_details.sizes[n].height),s.srcSet=Object.entries(o.media_details.sizes??{}).map(([r,d])=>`${d.source_url} ${d.width}w`).join(", "),s};return jsx(Fragment,{children:jsx("img",{...l(),alt:o.alt_text||""})})}function G(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>G(n))):t.push([]),t}function de(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const s=t.current.style;s.minHeight="",t.current.setAttribute("style",`${s.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}var V=g(4781),W=g.n(V);const w=window.wp.primitives,F=(0,i.jsx)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,i.jsx)(w.Path,{fillRule:"evenodd",d:"M5 11.25h3v1.5H5v-1.5zm5.5 0h3v1.5h-3v-1.5zm8.5 0h-3v1.5h3v-1.5z",clipRule:"evenodd"})}),q=(0,i.jsx)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,i.jsx)(w.Path,{d:"M4 12.8h16v-1.5H4v1.5zm0 7h12.4v-1.5H4v1.5zM4 4.3v1.5h16V4.3H4z"})});function S({clientId:e,attributes:{isNestedInAnotherNavLink:t,ariaLabel:n,linkOrientation:o},context:{"launchpad-blocks/isInSubMenu":l},setAttributes:s}){const r=(0,N.useSelect)(u=>{const{getBlockParentsByBlockName:f}=u(m.store);return f(e,"launchpad-blocks/nav-list").length>0},[e]),d=(0,m.useBlockProps)({"data-navigation-nav-list":!0,className:o==="horizontal"?"is-horizontal":"is-vertical"}),c=(0,m.useInnerBlocksProps)({className:"navigation-nav-list"},{orientation:r?"vertical":"horizontal",templateLock:!1,renderAppender:l?void 0:m.InnerBlocks.ButtonBlockAppender});(0,_.useEffect)(()=>{t!==r&&s({isNestedInAnotherNavLink:r})},[e,t,r,s]),(0,_.useEffect)(()=>{l&&o!=="vertical"&&s({linkOrientation:"vertical"})},[e,l,o,s]);const p=r?"div":"nav";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.BlockControls,{children:l?null:(0,i.jsxs)(k.ToolbarGroup,{children:[(0,i.jsx)(k.ToolbarButton,{icon:F,label:(0,C.__)("Align links horizontally","launchpad-blocks"),isPressed:o==="horizontal",onClick:()=>{s({linkOrientation:"horizontal"})}}),(0,i.jsx)(k.ToolbarButton,{icon:q,label:(0,C.__)("Align links vertically","launchpad-blocks"),isPressed:o==="vertical",onClick:()=>{s({linkOrientation:"vertical"})}})]})}),(0,i.jsx)(m.InspectorAdvancedControls,{children:(0,i.jsx)(k.TextControl,{label:"Screen reader label",help:"Define how this navigation block will be described for users who can't see.",value:n,onChange:u=>{s({ariaLabel:u})}})}),(0,i.jsx)(p,{...d,children:(0,i.jsx)("ul",{...c})})]})}S.displayName="NavListEdit";function J({hasInnerBlocks:e}){return e?X:U}function U(){return null}function X(){return(0,i.jsx)(m.InnerBlocks.Content,{})}(0,h.registerBlockType)(W().name,{icon:(0,i.jsx)($,{iconName:"nav-list"}),edit:S,save:J({hasInnerBlocks:!0})}),D()})(),v})());
