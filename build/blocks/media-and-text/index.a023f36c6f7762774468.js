(function(v,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var j=g();for(var s in j)(typeof exports=="object"?exports:v)[s]=j[s]}})(globalThis,()=>(()=>{var S={2153:(s=>{s.exports={apiVersion:3,name:"launchpad-blocks/media-and-text",title:"Breakout Media and Text",category:"formatting",description:"A media and text block where the media can be screen width.",textdomain:"launchpad-blocks",keywords:["50/50","image","list","formatting","layout","breakout"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{mediaPosition:{type:"string",enum:["left","right"],default:"left"},imageId:{type:"integer",default:0},shouldBreakOutMedia:{type:"boolean",default:!1},hasBackground:{type:"boolean",default:!1},shouldChildBlocksBeLocked:{type:"boolean",default:!0}},providesContext:{},usesContext:[],example:{attributes:{mediaPosition:"left",imageId:0,shouldBreakOutMedia:!0,hasBackground:!0,shouldChildBlocksBeLocked:!0},innerBlocks:[{name:"core/paragraph",attributes:{className:"wp-block-launchpad-blocks-media-and-text__intro",content:"Part 6"}},{name:"core/heading",attributes:{content:"The Hunchback Trout"}},{name:"core/paragraph",attributes:{content:"The creek was made narrow by little green trees that grew too close together. The creek was like 12, 845 telephone booths in a row with high Victorian ceilings and all the doors taken off and all the backs of the booths knocked out. Sometimes when I went fishing in there, I felt just like a telephone repairman, even though I did not look like one. I was only a kid covered with fishing tackle, but in some strange way by going in there and catching a few trout, I kept the telephones in service. I was an asset to society."}},{name:"core/button",attributes:{text:"Read more"}}]},supports:{}}})},v={};function g(s){var c=v[s];if(c!==void 0)return c.exports;var o=v[s]={exports:{}};return S[s](o,o.exports,g),o.exports}g.n=s=>{var c=s&&s.__esModule?()=>s.default:()=>s;return g.d(c,{a:c}),c},g.d=(s,c)=>{for(var o in c)g.o(c,o)&&!g.o(s,o)&&Object.defineProperty(s,o,{enumerable:!0,get:c[o]})},g.o=(s,c)=>Object.prototype.hasOwnProperty.call(s,c);var j={};return(()=>{"use strict";const s=window.wp.blocks,c=window.wp.primitives,o=window.ReactJSXRuntime,z=(0,o.jsx)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(c.Path,{d:"M3 6v11.5h8V6H3Zm11 3h7V7.5h-7V9Zm7 3.5h-7V11h7v1.5ZM14 16h7v-1.5h-7V16Z"})}),k=window.wp.blockEditor,w=window.wp.components,N=window.wp.coreData,B=window.wp.data,x=window.wp.i18n,T=window.React;function se(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function R(e){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,o.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,o.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,o.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const $=(0,T.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(a){const{iconName:n,size:i,isEditorMode:l=!1,...r}=a;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,...r,children:(0,o.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function _(e){return(0,o.jsx)(T.Suspense,{fallback:null,children:(0,o.jsx)($,{...e})})}function D(){(0,s.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:R})}function P(e,t){if(e===void 0)return e;let a;if(t==="both")a=e;else if(t==="horizontal")a=e.left;else if(t==="vertical")a=e.top;else return;return a.startsWith("var:")?`var(--wp--${a.replace("var:","").split("|").join("--")})`:a}function ce(e,t,a){const n=t.spacing?.blockGap;let i="none";if(n===!0)i="both";else if(Array.isArray(n)){const r=n.includes("horizontal"),p=n.includes("vertical");r&&p?i="both":r?i="horizontal":p&&(i="vertical")}const l={columnGap:i==="both"||i==="horizontal"?P(a?.spacing?.blockGap,i):void 0,rowGap:i==="both"||i==="vertical"?P(a?.spacing?.blockGap,i):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function E(e,t){return e.reduce((a,n)=>{if(n.name===t)a.push(n);else if(n.innerBlocks){const i=E(n.innerBlocks,t);i&&a.push(...i)}return a},[])}const de=()=>{const{postTypes:e,taxonomies:t}=useSelect(a=>{const{getEntityRecords:n}=a(coreStore),i=["attachment"],l=n("root","postType",{per_page:-1})?.filter(({viewable:d,slug:h})=>d&&!i.includes(h));if(!l||l.length===0)return{postTypes:l,taxonomies:void 0};const r={},p=[];for(const d of l){const h=n("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:m,slug:f})=>m.includes(d.slug)&&!p.includes(f));h&&(r[d.slug]=h.map(m=>{const f=n("taxonomy",m.slug);return{...m,terms:f}}))}return{postTypes:l,taxonomies:r}},[]);return{filteredPostTypes:e,mappedTaxonomies:t===void 0||Object.values(t).length===0?void 0:t}};function ue({list:e,containerClassName:t,renderItem:a}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>a({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function O(e){return e.indexOf("data:image/svg+xml;")===0}function V(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function L(e){return e.indexOf("dashicons-")===0}function H({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return(0,o.jsx)("div",{className:"menu-icon","aria-hidden":"true",children:(0,o.jsx)("br",{})});if(O(e))return(0,o.jsx)("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:(0,o.jsx)("br",{})});if(V(e))return(0,o.jsx)("img",{src:new URL(e).toString(),alt:""});if(L(e)){const t=e.replace("dashicons-","");return(0,o.jsx)(w.Dashicon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const pe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function he({colours:e,attributesDefinition:t,attributes:a,setAttributes:n}){return jsx(ToolsPanel,{label:__("Custom colours","launchpad"),resetAll:i=>{if(i)for(const l of i)l()},children:jsx("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(i=>jsx(G,{colour:i,attributesDefinition:t,attributes:a,setAttributes:n},i.attributeName))})})}function G({colour:e,attributesDefinition:t,attributes:a,setAttributes:n}){const[i,l,r,p,d]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==a[e.attributeName],m=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=useRef(null);return jsx(ToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:m,hasValue:h,onDeselect:m,label:e.label,isShownByDefault:!0,children:jsx(Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:u,onToggle:b})=>jsx(Fragment,{children:jsx(Button,{ref:f,__next40pxDefaultSize:!0,onClick:b,"aria-expanded":u,className:`block-editor-panel-color-gradient-settings__dropdown${u?" is-open":""}`,children:jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[jsx(ColorIndicator,{colorValue:a[e.attributeName]})," ",jsx("span",{children:e.label})]})})}),renderContent:()=>jsx(DropdownContentWrapper,{paddingSize:"none",children:jsx("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:jsx("div",{className:"block-editor-color-gradient-control__panel",children:jsx(ColorPalette,{colors:[...i&&i?.length>0?[{name:"User",colors:i}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...p&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:a[e.attributeName],onChange:u=>{n({[e.attributeName]:u})},disableCustomColors:!d})})})})})},e.attributeName)}function me({ratioValue:e,ratioOnChange:t,imageFitValue:a,imageFitOnChange:n}){const[i,l,r]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),p=l?.map(({name:u,ratio:b})=>({label:u,value:b}))??[],d=i?.map(({name:u,ratio:b})=>({label:u,value:b}))??[],h=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?d:[],...p||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[m,f]=useState(h.map(u=>u.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:h,value:m,onChange:u=>{f(u),u!=="custom"&&t(u)}}),m==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:u=>{typeof u=="string"&&["contain","cover"].includes(u)&&n(u)},value:a,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const W=(e,t,a,n)=>{const{getBlocksByName:i,getBlockAttributes:l,getBlockParentsByBlockName:r}=select(blockEditorStore);return i(n).some(d=>{if(r(d,"core/template-part",!0).length)return!1;const{[a]:h}=l(d);return e!==d&&t===h})};function ge(e,t,a,n,i){const{[t]:l}=e,r=useCallback(d=>W(a,d,t,i),[a,t,i]);return useEffect(()=>{if(l===""){const d=a.slice(0,a.indexOf("-"));n({[t]:d})}if(r(l)){const d=a.slice(0,a.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${d}`),n({[t]:d})}},[l,a,n,r,t]),useMemo(()=>function({label:h,help:m,onValidChange:f,idAttribute:u}){const[b,le]=useState(u);return jsx(TextControl,{label:h,help:typeof m=="function"?m(!r(b)):m,value:b,onChange:C=>{le(C),r(C)||f(C)}})},[r])}function fe({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:a}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:M(t),controls:e.map(n=>{{const i=n===t;return{icon:M(n),title:Z(n),isDisabled:i,onClick:()=>a(n)}}})})}function Z(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function M(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function F(e){const{hasChildren:t}=(0,B.useSelect)(a=>{const{getBlocks:n}=a(k.store);return{hasChildren:n(e).length>0}},[e]);return t}function q({clientId:e,blockInfo:t,variations:a,allowSkip:n}){const{replaceInnerBlocks:i,updateBlockAttributes:l}=(0,B.useDispatch)(k.store);return(0,o.jsxs)(w.Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[(0,o.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,x.__)("Block variations"),children:a.map(r=>(0,o.jsxs)("li",{children:[(0,o.jsx)(w.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?(0,o.jsx)(H,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&l(e,r.attributes),r.innerBlocks&&i(e,(0,s.createBlocksFromInnerBlocksTemplate)(r.innerBlocks),!1)}}),(0,o.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),n&&(0,o.jsx)("div",{className:"block-editor-block-variation-picker__skip",children:(0,o.jsx)(w.Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{i(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:(0,x.__)("Skip")})})]})}function U({imageId:e,className:t="",size:a="full"}){const n=(0,B.useSelect)(l=>typeof e=="number"&&e>0?l(N.store).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!n)return null;const i=()=>{const l={src:n.source_url,className:`attachment-${a} size-${a} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[a]&&(l.src=n.media_details.sizes[a].source_url,l.width=n.media_details.sizes[a].width,l.height=n.media_details.sizes[a].height),l.srcSet=Object.entries(n.media_details.sizes??{}).map(([r,p])=>`${p.source_url} ${p.width}w`).join(", "),l};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("img",{...i(),alt:n.alt_text||""})})}function J(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(a=>J(a))):t.push([]),t}function xe(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const i=e()?.scrollHeight??0;if(i){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${i}px !important`)}else t.current.style.minHeight=""}},1)}}var X=g(2153),y=g.n(X);const K=[],Q=(0,o.jsx)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(c.Path,{d:"M4 18h6V6H4v12zm9-9.5V10h7V8.5h-7zm0 7h7V14h-7v1.5z"})}),Y=(0,o.jsx)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(c.Path,{d:"M14 6v12h6V6h-6zM4 10h7V8.5H4V10zm0 5.5h7V14H4v1.5z"})}),ee=(0,o.jsx)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(c.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M11.53 4.47a.75.75 0 1 0-1.06 1.06l8 8a.75.75 0 1 0 1.06-1.06l-8-8Zm5 1a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 1 0 1.06-1.06l-2-2Zm-11.06 10a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06Zm.06-5a.75.75 0 0 0-1.06 1.06l8 8a.75.75 0 1 0 1.06-1.06l-8-8Zm-.06-3a.75.75 0 0 1 1.06 0l10 10a.75.75 0 1 1-1.06 1.06l-10-10a.75.75 0 0 1 0-1.06Zm3.06-2a.75.75 0 0 0-1.06 1.06l10 10a.75.75 0 1 0 1.06-1.06l-10-10Z"})}),te=(0,o.jsx)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(c.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"})}),A=[{name:"media-and-text-just-text",title:"Just text",icon:(0,o.jsx)(_,{isEditorMode:!0,iconName:"media-and-text-just-text"}),innerBlocks:[["core/paragraph",{placeholder:"Add text..."}]],isDefault:!0,scope:["block"],example:{viewportWidth:1200,attributes:{imageId:0,mediaPosition:"left",shouldBreakOutMedia:!1,hasBackground:!0,shouldChildBlocksBeLocked:!0},innerBlocks:[{name:"core/paragraph",attributes:{placeholder:"Example text"}}]}},{name:"media-and-text-heading-and-text",title:"Heading and text",icon:(0,o.jsx)(_,{isEditorMode:!0,iconName:"media-and-text-heading-and-text"}),innerBlocks:[["core/heading",{placeholder:"Add heading..."}],["core/paragraph",{placeholder:"Add text..."}]],isDefault:!0,scope:["block"],example:{viewportWidth:1200,attributes:{imageId:0,mediaPosition:"left",shouldBreakOutMedia:!1,hasBackground:!0,shouldChildBlocksBeLocked:!0},innerBlocks:[{name:"core/heading",attributes:{placeholder:"Example heading"}},{name:"core/paragraph",attributes:{placeholder:"Example text"}}]}},{name:"media-and-text-intro-heading-and-text",title:"Intro, heading and text",icon:(0,o.jsx)(_,{isEditorMode:!0,iconName:"media-and-text-intro-heading-and-text"}),innerBlocks:[["core/paragraph",{placeholder:"Intro",className:"wp-block-launchpad-blocks-media-and-text__intro"}],["core/heading",{placeholder:"Add heading..."}],["core/paragraph",{placeholder:"Add text..."}]],isDefault:!0,scope:["block"],example:{viewportWidth:1200,attributes:{imageId:0,mediaPosition:"left",shouldBreakOutMedia:!1,hasBackground:!0,shouldChildBlocksBeLocked:!0},innerBlocks:[{name:"core/heading",attributes:{placeholder:"Example heading"}},{name:"core/paragraph",attributes:{placeholder:"Example text"}}]}},{name:"media-and-text-heading-text-buttons",title:"Heading, text & buttons",icon:(0,o.jsx)(_,{isEditorMode:!0,iconName:"media-and-text-heading-text-buttons"}),innerBlocks:[["core/heading",{placeholder:"Add heading..."}],["core/paragraph",{placeholder:"Add text..."}],["core/button",{placeholder:"Add button..."}]],isDefault:!0,scope:["block"],example:{viewportWidth:1200,attributes:{imageId:0,mediaPosition:"left",shouldBreakOutMedia:!1,hasBackground:!0,shouldChildBlocksBeLocked:!0},innerBlocks:[{name:"core/heading",attributes:{placeholder:"Example heading"}},{name:"core/paragraph",attributes:{placeholder:"Example text"}},{name:"core/button",attributes:{placeholder:"Example button"}}]}},{name:"media-and-text-intro-heading-text-buttons",title:"Intro, heading, text & buttons",icon:(0,o.jsx)(_,{isEditorMode:!0,iconName:"media-and-text-intro-heading-text-buttons"}),innerBlocks:[["core/paragraph",{placeholder:"Intro",className:"wp-block-launchpad-blocks-media-and-text__intro"}],["core/heading",{placeholder:"Add heading..."}],["core/paragraph",{placeholder:"Add text..."}],["core/button",{placeholder:"Add button..."}]],isDefault:!0,scope:["block"],example:{viewportWidth:1200,attributes:{imageId:0,mediaPosition:"left",shouldBreakOutMedia:!1,hasBackground:!0,shouldChildBlocksBeLocked:!0},innerBlocks:[{name:"core/heading",attributes:{placeholder:"Example heading"}},{name:"core/paragraph",attributes:{placeholder:"Example text"}},{name:"core/button",attributes:{placeholder:"Example button"}}]}}];function I({attributes:e,clientId:t,setAttributes:a}){const{mediaPosition:n,imageId:i,shouldBreakOutMedia:l,hasBackground:r,shouldChildBlocksBeLocked:p}=e,d=(0,k.useBlockProps)({className:`alignfull${r?" has-background":""}${l?" is-breakout is-breakout-"+n:""}`}),{children:h,...m}=(0,k.useInnerBlocksProps)(d,{templateLock:p?"contentOnly":!1}),f=F(t);function u(b){a({imageId:b.id})}return f?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(k.BlockControls,{group:"other",children:[(0,o.jsx)(w.ToolbarButton,{icon:Q,title:(0,x.__)("Show media on left","launchpad-blocks"),isActive:n==="left",onClick:()=>a({mediaPosition:"left"})}),(0,o.jsx)(w.ToolbarButton,{icon:Y,title:(0,x.__)("Show media on right","launchpad-blocks"),isActive:n==="right",onClick:()=>a({mediaPosition:"right"})}),(0,o.jsx)(w.ToolbarButton,{icon:(0,o.jsx)(_,{isEditorMode:!0,iconName:"break-image-out",transform:n==="left"?"rotate(180)":void 0}),title:(0,x.__)("Break media out of container","launchpad-blocks"),isActive:l,onClick:()=>a({shouldBreakOutMedia:!l})}),(0,o.jsx)(w.ToolbarButton,{icon:ee,title:(0,x.__)("Add background to block","launchpad-blocks"),isActive:r,onClick:()=>a({hasBackground:!r})}),(0,o.jsx)(k.MediaReplaceFlow,{allowedTypes:["image"],accept:"image/*",onSelect:u,name:i===0?(0,x.__)("Add","launchpad-blocks"):(0,x.__)("Replace","launchpad-blocks"),mediaId:i,addToGallery:i!==0})]}),(0,o.jsx)("div",{...m,children:(0,o.jsxs)("div",{className:"wp-block-launchpad-blocks-media-and-text__wrapper",children:[n==="right"?(0,o.jsx)("div",{className:"wp-block-launchpad-blocks-media-and-text__content",children:h}):null,(0,o.jsx)("figure",{children:i!==0?(0,o.jsx)(U,{imageId:i,className:"wp-block-launchpad-blocks-media-and-text__image"}):(0,o.jsx)(k.MediaPlaceholder,{icon:te,labels:{title:(0,x.__)("Media area","launchpad-blocks"),instructions:(0,x.__)("Drag and drop an image, upload, or choose from your library.","launchpad-blocks")},onSelect:u,accept:"image/*",allowedTypes:["image"],addToGallery:!1})}),n==="left"?(0,o.jsx)("div",{className:"wp-block-launchpad-blocks-media-and-text__content",children:h}):null]})})]}):(0,o.jsx)("div",{...d,children:(0,o.jsx)(q,{clientId:t,blockInfo:{name:y().title,icon:z},variations:A,allowSkip:!1})})}I.displayName="MediaAndTextEdit";function oe({hasInnerBlocks:e}){return e?ae:ne}function ne(){return null}function ae(){return(0,o.jsx)(k.InnerBlocks.Content,{})}const ie={from:[],to:[]},ve={},je=null;(0,s.registerBlockType)(y().name,{icon:z,deprecated:K,edit:I,save:oe({hasInnerBlocks:!0}),transforms:ie}),D(),A.forEach(e=>{(0,s.registerBlockVariation)(y().name,e)})})(),j})());
