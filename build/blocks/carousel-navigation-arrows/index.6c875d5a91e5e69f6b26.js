(function(j,b){if(typeof exports=="object"&&typeof module=="object")module.exports=b();else if(typeof define=="function"&&define.amd)define([],b);else{var y=b();for(var t in y)(typeof exports=="object"?exports:j)[t]=y[t]}})(globalThis,()=>(()=>{var I={7749:(t=>{t.exports={apiVersion:3,name:"launchpad-blocks/carousel-navigation-arrows",title:"Carousel navigation arrows",category:"theme",description:"",textdomain:"launchpad-blocks",allowedBlocks:["launchpad-blocks/carousel-thumbnails","launchpad-blocks/carousel-dots","launchpad-blocks/carousel-slide-count"],parent:["launchpad-blocks/carousel"],keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",styles:[{name:"normal",label:"Normal",isDefault:!0},{name:"overlay",label:"Overlay"}],attributes:{prevText:{type:"string",default:"Go to previous slide"},nextText:{type:"string",default:"Go to next slide"},prevVisualText:{type:"string",default:"Previous"},nextVisualText:{type:"string",default:"Next"},shouldShowTextVisually:{type:"boolean",default:!0},backgroundColour:{type:"string",default:"black"},iconColour:{type:"string",default:"white"},prevIcon:{type:"object",default:{iconName:"chevron-left",library:"launchpad-blocks"}},nextIcon:{type:"object",default:{iconName:"chevron-right",library:"launchpad-blocks"}}},providesContext:{},usesContext:["launchpad-blocks/currentlySelectedSlide","launchpad-blocks/carouselSlides","launchpad-blocks/carouselImages"],example:{},supports:{align:!0,layout:{default:{type:"constrained"},allowCustomContentAndWideSize:!1}}}})},j={};function b(t){var f=j[t];if(f!==void 0)return f.exports;var p=j[t]={exports:{}};return I[t](p,p.exports,b),p.exports}b.n=t=>{var f=t&&t.__esModule?()=>t.default:()=>t;return b.d(f,{a:f}),f},b.d=(t,f)=>{for(var p in f)b.o(f,p)&&!b.o(t,p)&&Object.defineProperty(t,p,{enumerable:!0,get:f[p]})},b.o=(t,f)=>Object.prototype.hasOwnProperty.call(t,f);var y={};return(()=>{"use strict";const t=window.ReactJSXRuntime,f=window.wp.blocks,p=window.wp.blockEditor,m=window.wp.components,xe=window.wp.coreData,T=window.wp.data,N=window.wp.i18n,_=window.React;function be(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function E(e){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,t.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,t.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,t.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const H=(0,_.lazy)(async()=>{const e=await import("../../assets-manifest.json").then(n=>{if(!n.default["icons/sprite.svg"]||typeof n.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return n.default}).catch(()=>({}));return{default:function(l){const{iconName:o,size:a,isEditorMode:s=!1,...i}=l;return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,...i,children:(0,t.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function z(e){return(0,t.jsx)(_.Suspense,{fallback:null,children:(0,t.jsx)(H,{...e})})}function G(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:E})}function P(e,n){if(e===void 0)return e;let l;if(n==="both")l=e;else if(n==="horizontal")l=e.left;else if(n==="vertical")l=e.top;else return;return l.startsWith("var:")?`var(--wp--${l.replace("var:","").split("|").join("--")})`:l}function ve(e,n,l){const o=n.spacing?.blockGap;let a="none";if(o===!0)a="both";else if(Array.isArray(o)){const i=o.includes("horizontal"),c=o.includes("vertical");i&&c?a="both":i?a="horizontal":c&&(a="vertical")}const s={columnGap:a==="both"||a==="horizontal"?P(l?.spacing?.blockGap,a):void 0,rowGap:a==="both"||a==="vertical"?P(l?.spacing?.blockGap,a):void 0};if(e===void 0&&typeof n.layout=="object"&&n?.layout?.default&&(e=n.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let i="";return e.minimumColumnWidth?i=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(i=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:i,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function F(e,n){return e.reduce((l,o)=>{if(o.name===n)l.push(o);else if(o.innerBlocks){const a=F(o.innerBlocks,n);a&&l.push(...a)}return l},[])}const _e=()=>{const{postTypes:e,taxonomies:n}=useSelect(l=>{const{getEntityRecords:o}=l(coreStore),a=["attachment"],s=o("root","postType",{per_page:-1})?.filter(({viewable:r,slug:h})=>r&&!a.includes(h));if(!s||s.length===0)return{postTypes:s,taxonomies:void 0};const i={},c=[];for(const r of s){const h=o("root","taxonomy",{per_page:-1,orderby:"name",context:"edit"})?.filter(({types:d,slug:g})=>d.includes(r.slug)&&!c.includes(g));h&&(i[r.slug]=h.map(d=>{const g=o("taxonomy",d.slug);return{...d,terms:g}}))}return{postTypes:s,taxonomies:i}},[]);return{filteredPostTypes:e,mappedTaxonomies:n===void 0||Object.values(n).length===0?void 0:n}};function we({list:e,containerClassName:n,renderItem:l}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${n!==void 0&&n!==""?` ${n}`:""}`,children:e.map(o=>l({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function U(e){return e.indexOf("data:image/svg+xml;")===0}function W(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function q(e){return e.indexOf("dashicons-")===0}function J({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(U(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(W(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(q(e)){const n=e.replace("dashicons-","");return jsx(DashIcon,{icon:n,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ke={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function K({colours:e,attributesDefinition:n,attributes:l,setAttributes:o}){return(0,t.jsx)(m.__experimentalToolsPanel,{label:(0,N.__)("Custom colours","launchpad"),resetAll:a=>{if(a)for(const s of a)s()},children:(0,t.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(a=>(0,t.jsx)(X,{colour:a,attributesDefinition:n,attributes:l,setAttributes:o},a.attributeName))})})}function X({colour:e,attributesDefinition:n,attributes:l,setAttributes:o}){const[a,s,i,c,r]=(0,p.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>n[e.attributeName]?.default!==l[e.attributeName],d=()=>{o({[e.attributeName]:n[e.attributeName]?.default??void 0})},g=(0,_.useRef)(null);return(0,t.jsx)(m.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:h,onDeselect:d,label:e.label,isShownByDefault:!0,children:(0,t.jsx)(m.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:u,onToggle:v})=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(m.Button,{ref:g,__next40pxDefaultSize:!0,onClick:v,"aria-expanded":u,className:`block-editor-panel-color-gradient-settings__dropdown${u?" is-open":""}`,children:(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,t.jsx)(m.ColorIndicator,{colorValue:l[e.attributeName]})," ",(0,t.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,t.jsx)(m.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,t.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,t.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,t.jsx)(m.ColorPalette,{colors:[...a&&a?.length>0?[{name:"User",colors:a}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...c&&i&&i.length>0?[{name:"Default",colors:i}]:[]],value:l[e.attributeName],onChange:u=>{o({[e.attributeName]:u})},disableCustomColors:!r})})})})})},e.attributeName)}function je({ratioValue:e,ratioOnChange:n,imageFitValue:l,imageFitOnChange:o}){const[a,s,i]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=s?.map(({name:u,ratio:v})=>({label:u,value:v}))??[],r=a?.map(({name:u,ratio:v})=>({label:u,value:v}))??[],h=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...i?r:[],...c||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,g]=useState(h.map(u=>u.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:h,value:d,onChange:u=>{g(u),u!=="custom"&&n(u)}}),d==="custom"?jsx(TextControl,{label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:n,value:e}):null,e!=="auto"&&o!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:u=>{typeof u=="string"&&["contain","cover"].includes(u)&&o(u)},value:l,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const Z=(e,n,l,o)=>{const{getBlocksByName:a,getBlockAttributes:s,getBlockParentsByBlockName:i}=select(blockEditorStore);return a(o).some(r=>{if(i(r,"core/template-part",!0).length)return!1;const{[l]:h}=s(r);return e!==r&&n===h})};function ye(e,n,l,o,a){const{[n]:s}=e,i=useCallback(r=>Z(l,r,n,a),[l,n,a]);return useEffect(()=>{if(s===""){const r=l.slice(0,l.indexOf("-"));o({[n]:r})}if(i(s)){const r=l.slice(0,l.indexOf("-"));console.log(`Regenerated ${n} to make it unique. Old value: ${s}. New value: ${r}`),o({[n]:r})}},[s,l,o,i,n]),useMemo(()=>function({label:h,help:d,onValidChange:g,idAttribute:u}){const[v,w]=useState(u);return jsx(TextControl,{label:h,help:typeof d=="function"?d(!i(v)):d,value:v,onChange:k=>{w(k),i(k)||g(k)}})},[i])}function Ce({levelOptions:e,selectedLevel:n,setSelectedHeadingLevel:l}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:$(n),controls:e.map(o=>{{const a=o===n;return{icon:$(o),title:Q(o),isDisabled:a,onClick:()=>l(o)}}})})}function Q(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function $(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function Se(e){const{hasChildren:n}=useSelect(l=>{const{getBlocks:o}=l(blockEditorStore);return{hasChildren:o(e).length>0}},[e]);return n}function Ne({clientId:e,blockInfo:n,variations:l,allowSkip:o}){const{replaceInnerBlocks:a,updateBlockAttributes:s}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:n.icon,label:n.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:l.map(i=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof i.icon=="string"?jsx(J,{iconString:i.icon}):i.icon,iconSize:48,onClick:()=>{i.attributes&&s(e,i.attributes),i.innerBlocks&&a(e,createBlocksFromInnerBlocksTemplate(i.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:i.title})]},i.name))}),o&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{a(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function Be({imageId:e,className:n="",size:l="full"}){const o=useSelect(s=>typeof e=="number"&&e>0?s(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!o)return null;const a=()=>{const s={src:o.source_url,className:`attachment-${l} size-${l} ${n}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[l]&&(s.src=o.media_details.sizes[l].source_url,s.width=o.media_details.sizes[l].width,s.height=o.media_details.sizes[l].height),s.srcSet=Object.entries(o.media_details.sizes??{}).map(([i,c])=>`${c.source_url} ${c.width}w`).join(", "),s};return jsx(Fragment,{children:jsx("img",{...a(),alt:o.alt_text||""})})}function Y(e){const n=[e.name];return e.attributes?n.push(e.attributes):n.push({}),e.innerBlocks?n.push(e.innerBlocks.map(l=>Y(l))):n.push([]),n}var ee=b(7749),D=b.n(ee);const te=[],ne=window.wp.hooks,O=window.wp.element,oe=(0,O.forwardRef)(({icon:e,size:n=24,...l},o)=>(0,O.cloneElement)(e,{width:n,height:n,...l,ref:o})),C=window.wp.primitives,le=(0,t.jsx)(C.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(C.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),ae=(0,t.jsx)(C.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(C.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),se={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,n)=>(0,t.jsx)(z,{iconName:e,isEditorMode:!0,...n}),availableIcons:Object.fromEntries(Object.entries({"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"}}).filter(([e,n])=>n.makeAvailableToUser===!0))}};function A(){return(0,ne.applyFilters)("launchpadBlocks.icons",{...se})}function M({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:n,onIconSelect:l,onReset:o}){const a=A(),[s,i]=(0,_.useState)("");return(0,t.jsxs)(m.Panel,{children:[(0,t.jsxs)(m.PanelHeader,{children:[e," ",o?(0,t.jsx)(m.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{o()},size:"small",children:"Reset"}):null]}),(0,t.jsxs)(m.PanelBody,{children:[(0,t.jsx)(m.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:s,onChange:c=>{i(c)}}),(0,t.jsx)("div",{children:Object.entries(a).map(([c,r])=>{if(Object.keys(r.availableIcons).length===0)return null;const h=Object.entries(r.availableIcons).filter(([d,{title:g}])=>!!(d.includes(s)||g.includes(s)));return(0,t.jsx)(ie,{name:r.name,iconCount:h.length,children:(0,t.jsx)("div",{className:`icon-select ${c}-icon-select`,children:h.map(([d,{title:g}])=>{const u=n.iconName===d&&n.library===c;return(0,t.jsx)("button",{className:`icon-select-icon ${c}-icon-select-icon ${c}-icon-select-icon-${d}${u?" is-selected":""}`,onClick:()=>{l({iconName:d,library:c})},title:g,children:r.renderIcon(d)},d)})})},c)})})]})]})}function ie({name:e,iconCount:n,children:l}){const[o,a]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{n===0&&o&&a(!1)},[o,n]),(0,t.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,t.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,t.jsxs)(m.Button,{type:"button","aria-expanded":o,onClick:()=>{n>0&&a(!o)},disabled:n===0,className:"icon-select-group-accordion-header-button",children:[(0,t.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,t.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:n}),(0,t.jsx)(oe,{className:"icon-select-group-accordion-arrow",icon:o?le:ae})]})}),o?l:null]})}const B={prevText:{type:"string",default:"Go to previous slide"},nextText:{type:"string",default:"Go to next slide"},prevVisualText:{type:"string",default:"Previous"},nextVisualText:{type:"string",default:"Next"},shouldShowTextVisually:{type:"boolean",default:!0},backgroundColour:{type:"string",default:"black"},iconColour:{type:"string",default:"white"},prevIcon:{type:"object",default:{iconName:"chevron-left",library:"launchpad-blocks"}},nextIcon:{type:"object",default:{iconName:"chevron-right",library:"launchpad-blocks"}}};function R({clientId:e,attributes:n,setAttributes:l,context:o}){const{prevText:a,nextText:s,prevVisualText:i,nextVisualText:c,shouldShowTextVisually:r,backgroundColour:h,iconColour:d,prevIcon:g,nextIcon:u,className:v}=n,w=o["launchpad-blocks/currentlySelectedSlide"],k=o["launchpad-blocks/carouselSlides"]!==void 0&&o["launchpad-blocks/carouselSlides"].length>0?o["launchpad-blocks/carouselSlides"].length:o["launchpad-blocks/carouselImages"].length,{updateBlockAttributes:L}=(0,T.useDispatch)(p.store),{parentCarouselClientId:S}=(0,T.useSelect)(x=>{const{getBlockParentsByBlockName:fe}=x(p.store);return{parentCarouselClientId:fe(e,"launchpad-blocks/carousel").at(-1)}},[e]),me=(0,p.useBlockProps)({style:{"--background-colour":h,"--icon-colour":d}}),{children:he,...ge}=(0,p.useInnerBlocksProps)(me,{orientation:"horizontal",renderAppender:v?.includes("is-style-overlay")?()=>null:p.InnerBlocks.ButtonBlockAppender}),V=A();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.InspectorControls,{group:"styles",children:(0,t.jsx)(K,{colours:[{attributeName:"backgroundColour",label:"Background colour"},{attributeName:"iconColour",label:"Icon colour"}],attributes:n,attributesDefinition:B,setAttributes:l})}),(0,t.jsxs)(p.InspectorControls,{children:[(0,t.jsxs)(m.Panel,{children:[(0,t.jsx)(m.PanelBody,{children:(0,t.jsx)(m.ToggleControl,{__nextHasNoMarginBottom:!0,label:"Show text labels in buttons",onChange:x=>{l({shouldShowTextVisually:x})},checked:r})}),(0,t.jsxs)(m.PanelBody,{title:"Accessibility",children:[(0,t.jsx)(m.TextControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Previous button screen reader label",onChange:x=>{l({prevText:x})},value:a}),(0,t.jsx)(m.TextControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Next button screen reader label",onChange:x=>{l({nextText:x})},value:s})]})]}),(0,t.jsx)(M,{iconSelectHeader:"Previous icon",dataOnSelectedIcon:g,onIconSelect:x=>{l({prevIcon:x})},onReset:()=>{l({prevIcon:B.prevIcon.default})}}),(0,t.jsx)(M,{iconSelectHeader:"Next icon",dataOnSelectedIcon:u,onIconSelect:x=>{l({nextIcon:x})},onReset:()=>{l({nextIcon:B.nextIcon.default})}})]}),(0,t.jsx)("div",{...ge,children:(0,t.jsxs)("div",{className:"carousel-navigation-arrows-container",children:[(0,t.jsxs)("button",{className:`carousel-navigation-button${r?" has-text":""}`,onClick:()=>{S&&L(S,{currentlySelectedSlide:w>0?w-1:k-1})},children:[V[g.library]?.renderIcon(g.iconName,{className:"carousel-navigation-button-icon"}),r?(0,t.jsx)(p.RichText,{identifier:"prevVisualText",tagName:"span",onChange:x=>{l({prevVisualText:x})},value:i,placeholder:(0,N.__)("Previous","launchpad-blocks")}):null]}),(0,t.jsx)("div",{className:"carousel-navigation-inner-area",children:he}),(0,t.jsxs)("button",{className:`carousel-navigation-button${r?" has-text":""}`,onClick:()=>{S&&L(S,{currentlySelectedSlide:w<k-1?w+1:0})},children:[r?(0,t.jsx)(p.RichText,{identifier:"nextVisualText",tagName:"span",onChange:x=>{l({nextVisualText:x})},value:c,placeholder:(0,N.__)("Next","launchpad-blocks")}):null,V[u.library]?.renderIcon(u.iconName,{className:"carousel-navigation-button-icon"})]})]})})]})}R.displayName="CarouselNavigationArrowsEdit";function re({hasInnerBlocks:e}){return e?ue:ce}function ce(){return null}function ue(){return(0,t.jsx)(p.InnerBlocks.Content,{})}const de={from:[],to:[]},pe=[],Pe={},$e=null;(0,f.registerBlockType)(D().name,{icon:(0,t.jsx)(z,{iconName:"carousel-navigation-arrows"}),deprecated:te,edit:R,save:re({hasInnerBlocks:!0}),transforms:de}),G(),pe.forEach(e=>{(0,f.registerBlockVariation)(D().name,e)})})(),y})());
