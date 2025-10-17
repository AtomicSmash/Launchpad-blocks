(function(k,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var v=g();for(var t in v)(typeof exports=="object"?exports:k)[t]=v[t]}})(globalThis,()=>(()=>{var T={9589:(t=>{t.exports={apiVersion:3,name:"launchpad-blocks/fancy-list",title:"Fancy list",category:"theme",description:"A block to display a semantic list of content.",allowedBlocks:["launchpad-blocks/fancy-list-item"],textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{columnCount:{type:"integer",default:1},type:{type:"string",enum:["ul","ol"],default:"ul"},markerType:{type:"string",enum:["normal","icon"],default:"normal"},markerColour:{type:"string"},markerInnerColour:{type:"string"}},providesContext:{"launchpad-blocks/fancyListType":"type","launchpad-blocks/fancyListMarkerType":"markerType"},usesContext:[],supports:{typography:{fontSize:!0}},example:{attributes:{columnCount:1,type:"ul",markerType:"normal",markerInnerColour:"#ff0000",markerColour:"#ff0000"},innerBlocks:[{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"Alice."}},{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"The White Rabbit."}},{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"The Cheshire Cat."}},{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"The Mad Hatter."}},{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"The Queen of Hearts."}}]}}})},k={};function g(t){var f=k[t];if(f!==void 0)return f.exports;var u=k[t]={exports:{}};return T[t](u,u.exports,g),u.exports}g.n=t=>{var f=t&&t.__esModule?()=>t.default:()=>t;return g.d(f,{a:f}),f},g.d=(t,f)=>{for(var u in f)g.o(f,u)&&!g.o(t,u)&&Object.defineProperty(t,u,{enumerable:!0,get:f[u]})},g.o=(t,f)=>Object.prototype.hasOwnProperty.call(t,f);var v={};return(()=>{"use strict";const t=window.ReactJSXRuntime,f=window.wp.blocks,u=window.wp.blockEditor,m=window.wp.components,X=window.wp.coreData,Q=window.wp.data,N=window.wp.i18n,y=window.React;function Z(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function P(e){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,t.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,t.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,t.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const I=(0,y.lazy)(async()=>{const e=await import("../../assets-manifest.json").then(o=>{if(!o.default["icons/sprite.svg"]||typeof o.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return o.default}).catch(()=>({}));return{default:function(n){const{iconName:r,size:l,isEditorMode:s=!1,...a}=n;return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...a,children:(0,t.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${r}`})})}}});function D(e){return(0,t.jsx)(y.Suspense,{fallback:null,children:(0,t.jsx)(I,{...e})})}function $(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:P})}function B(e,o){if(e===void 0)return e;let n;if(o==="both")n=e;else if(o==="horizontal")n=e.left;else if(o==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function K(e,o,n){const r=o.spacing?.blockGap;let l="none";if(r===!0)l="both";else if(Array.isArray(r)){const a=r.includes("horizontal"),d=r.includes("vertical");a&&d?l="both":a?l="horizontal":d&&(l="vertical")}const s={columnGap:l==="both"||l==="horizontal"?B(n?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?B(n?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof o.layout=="object"&&o?.layout?.default&&(e=o.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function M(e,o){return e.reduce((n,r)=>{if(r.name===o)n.push(r);else if(r.innerBlocks){const l=M(r.innerBlocks,o);l&&n.push(...l)}return n},[])}const Y=()=>{const{postTypes:e,taxonomies:o}=useSelect(n=>{const{getEntityRecords:r}=n(coreStore),l=["attachment"],s=r("root","postType",{per_page:-1})?.filter(({viewable:i,slug:h})=>i&&!l.includes(h));if(!s||s.length===0)return{postTypes:s,taxonomies:void 0};const a={},d=[];for(const i of s){const h=r("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:p,slug:b})=>p.includes(i.slug)&&!d.includes(b));h&&(a[i.slug]=h.map(p=>{const b=r("taxonomy",p.slug);return{...p,terms:b}}))}return{postTypes:s,taxonomies:a}},[]);return{filteredPostTypes:e,mappedTaxonomies:o===void 0||Object.values(o).length===0?void 0:o}};function ee({list:e,containerClassName:o,renderItem:n}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${o!==void 0&&o!==""?` ${o}`:""}`,children:e.map(r=>n({listItem:r,buttonProps:{type:"button",className:`custom-multiple-select-list-item${r.isSelected?" is-selected":""}`}}))})]})}function R(e){return e.indexOf("data:image/svg+xml;")===0}function O(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function A(e){return e.indexOf("dashicons-")===0}function L({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(R(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(O(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(A(e)){const o=e.replace("dashicons-","");return jsx(DashIcon,{icon:o,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const te={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function C({colours:e,attributesDefinition:o,attributes:n,setAttributes:r}){return(0,t.jsx)(m.__experimentalToolsPanel,{label:(0,N.__)("Custom colours","launchpad"),resetAll:l=>{if(l)for(const s of l)s()},children:(0,t.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>(0,t.jsx)(H,{colour:l,attributesDefinition:o,attributes:n,setAttributes:r},l.attributeName))})})}function H({colour:e,attributesDefinition:o,attributes:n,setAttributes:r}){const[l,s,a,d,i]=(0,u.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>o[e.attributeName]?.default!==n[e.attributeName],p=()=>{r({[e.attributeName]:o[e.attributeName]?.default??void 0})},b=(0,y.useRef)(null);return(0,t.jsx)(m.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:h,onDeselect:p,label:e.label,isShownByDefault:!0,children:(0,t.jsx)(m.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:_})=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(m.Button,{ref:b,__next40pxDefaultSize:!0,onClick:_,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,t.jsx)(m.ColorIndicator,{colorValue:n[e.attributeName]})," ",(0,t.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,t.jsx)(m.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,t.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,t.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,t.jsx)(m.ColorPalette,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...d&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:n[e.attributeName],onChange:c=>{r({[e.attributeName]:c})},disableCustomColors:!i})})})})})},e.attributeName)}function oe({ratioValue:e,ratioOnChange:o,imageFitValue:n,imageFitOnChange:r}){const[l,s,a]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=s?.map(({name:c,ratio:_})=>({label:c,value:_}))??[],i=l?.map(({name:c,ratio:_})=>({label:c,value:_}))??[],h=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?i:[],...d||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,b]=useState(h.map(c=>c.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:h,value:p,onChange:c=>{b(c),c!=="custom"&&o(c)}}),p==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:o,value:e}):null,e!=="auto"&&r!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&r(c)},value:n,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const E=(e,o,n,r)=>{const{getBlocksByName:l,getBlockAttributes:s,getBlockParentsByBlockName:a}=select(blockEditorStore);return l(r).some(i=>{if(a(i,"core/template-part",!0).length)return!1;const{[n]:h}=s(i);return e!==i&&o===h})};function ne(e,o,n,r,l){const{[o]:s}=e,a=useCallback(i=>E(n,i,o,l),[n,o,l]);return useEffect(()=>{if(s===""){const i=n.slice(0,n.indexOf("-"));r({[o]:i})}if(a(s)){const i=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${o} to make it unique. Old value: ${s}. New value: ${i}`),r({[o]:i})}},[s,n,r,a,o]),useMemo(()=>function({label:h,help:p,onValidChange:b,idAttribute:c}){const[_,x]=useState(c);return jsx(TextControl,{label:h,help:typeof p=="function"?p(!a(_)):p,value:_,onChange:j=>{x(j),a(j)||b(j)}})},[a])}function re({levelOptions:e,selectedLevel:o,setSelectedHeadingLevel:n}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:S(o),controls:e.map(r=>{{const l=r===o;return{icon:S(r),title:G(r),isDisabled:l,onClick:()=>n(r)}}})})}function G(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function S(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function le(e){const{hasChildren:o}=useSelect(n=>{const{getBlocks:r}=n(blockEditorStore);return{hasChildren:r(e).length>0}},[e]);return o}function se({clientId:e,blockInfo:o,variations:n,allowSkip:r}){const{replaceInnerBlocks:l,updateBlockAttributes:s}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:o.icon,label:o.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:n.map(a=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?jsx(L,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&s(e,a.attributes),a.innerBlocks&&l(e,createBlocksFromInnerBlocksTemplate(a.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),r&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function ae({imageId:e,className:o="",size:n="full"}){const r=useSelect(s=>typeof e=="number"&&e>0?s(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!r)return null;const l=()=>{const s={src:r.source_url,className:`attachment-${n} size-${n} ${o}`,width:r.media_details.width,height:r.media_details.height,srcSet:""};return r.media_details?.sizes?.[n]&&(s.src=r.media_details.sizes[n].source_url,s.width=r.media_details.sizes[n].width,s.height=r.media_details.sizes[n].height),s.srcSet=Object.entries(r.media_details.sizes??{}).map(([a,d])=>`${d.source_url} ${d.width}w`).join(", "),s};return jsx(Fragment,{children:jsx("img",{...l(),alt:r.alt_text||""})})}function F(e){const o=[e.name];return e.attributes?o.push(e.attributes):o.push({}),e.innerBlocks?o.push(e.innerBlocks.map(n=>F(n))):o.push([]),o}var W=g(9589),V=g.n(W);const w={columnCount:{type:"integer",default:1},type:{type:"string",enum:["ul","ol"],default:"ul"},markerType:{type:"string",enum:["normal","icon"],default:"normal"},markerColour:{type:"string"},markerInnerColour:{type:"string"}};function z({attributes:e,setAttributes:o}){const{type:n,markerColour:r,markerType:l,markerInnerColour:s,columnCount:a}=e,d=n=="ul"?"ul":"ol",i=n==="ul"&&l==="normal",h=!!r,p=!!s&&!i,b=n==="ul"&&l==="icon",c=(0,u.useBlockProps)({style:{"--column-count":a,...h?{"--marker-colour":r}:{},...p?{"--marker-inner-colour":s}:{}},className:[h?"has-marker-colour":void 0,p?"has-marker-inner-colour":void 0,b?"should-have-icon":void 0].filter(Boolean).join(" ")}),_=(0,u.useInnerBlocksProps)(c,{template:[["launchpad-blocks/fancy-list-item"]]});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.InspectorControls,{children:(0,t.jsx)(m.Panel,{children:(0,t.jsxs)(m.PanelBody,{title:"List options",children:[(0,t.jsx)(m.RangeControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,help:"Please select how many list items you want to show on a single row. It may be less than your selected value if there are space constraints.",initialPosition:1,label:"Max columns",max:10,min:1,onChange:x=>{o({columnCount:x})},allowReset:!0,value:a}),(0,t.jsxs)(m.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Type of list",onChange:x=>{typeof x=="string"&&["ul","ol"].includes(x)&&o({type:x})},value:n,children:[(0,t.jsx)(m.__experimentalToggleGroupControlOption,{label:"Bullet list",value:"ul"}),(0,t.jsx)(m.__experimentalToggleGroupControlOption,{label:"Numbered list",value:"ol"})]}),n==="ul"?(0,t.jsxs)(m.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Type of list marker",onChange:x=>{typeof x=="string"&&["normal","icon"].includes(x)&&o({markerType:x})},value:l,children:[(0,t.jsx)(m.__experimentalToggleGroupControlOption,{label:"Normal",value:"normal"}),(0,t.jsx)(m.__experimentalToggleGroupControlOption,{label:"Icon",value:"icon"})]}):null]})})}),(0,t.jsx)(u.InspectorControls,{group:"styles",children:n==="ul"?l==="normal"?(0,t.jsx)(C,{colours:[{attributeName:"markerColour",label:"Marker colour"}],attributes:e,attributesDefinition:w,setAttributes:o}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{colours:[{attributeName:"markerColour",label:"Background colour"},{attributeName:"markerInnerColour",label:"Icon colour"}],attributes:e,attributesDefinition:w,setAttributes:o}),(0,t.jsx)(u.ContrastChecker,{backgroundColor:r,textColor:s})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{colours:[{attributeName:"markerColour",label:"Background colour"},{attributeName:"markerInnerColour",label:"Number colour"}],attributes:e,attributesDefinition:w,setAttributes:o}),(0,t.jsx)(u.ContrastChecker,{backgroundColor:r,textColor:s})]})}),(0,t.jsx)(d,{..._})]})}z.displayName="FancyListEdit";function U({hasInnerBlocks:e}){return e?J:q}function q(){return null}function J(){return(0,t.jsx)(u.InnerBlocks.Content,{})}const ie={"launchpad-blocks/fancyListType":"type","launchpad-blocks/fancyListMarkerType":"markerType"},ce=null;(0,f.registerBlockType)(V().name,{icon:(0,t.jsx)(D,{iconName:"list"}),edit:z,save:U({hasInnerBlocks:!0})}),$()})(),v})());
