(function(j,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var y=v();for(var n in y)(typeof exports=="object"?exports:j)[n]=y[n]}})(globalThis,()=>(()=>{var I={7749:(n=>{n.exports={apiVersion:3,name:"launchpad-blocks/carousel-navigation-arrows",title:"Carousel navigation arrows",category:"theme",description:"",textdomain:"launchpad-blocks",allowedBlocks:["launchpad-blocks/carousel-thumbnails","launchpad-blocks/carousel-dots","launchpad-blocks/carousel-slide-count"],parent:["launchpad-blocks/carousel"],keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",styles:[{name:"normal",label:"Normal",isDefault:!0},{name:"overlay",label:"Overlay"}],attributes:{prevText:{type:"string",default:"Go to previous slide"},nextText:{type:"string",default:"Go to next slide"},prevVisualText:{type:"string",default:"Previous"},nextVisualText:{type:"string",default:"Next"},shouldShowTextVisually:{type:"boolean",default:!0},backgroundColour:{type:"string",default:"black"},iconColour:{type:"string",default:"white"},prevIcon:{type:"object",default:{iconName:"chevron-left",library:"launchpad-blocks"}},nextIcon:{type:"object",default:{iconName:"chevron-right",library:"launchpad-blocks"}}},providesContext:{},usesContext:["launchpad-blocks/currentlySelectedSlide","launchpad-blocks/carouselSlides","launchpad-blocks/carouselImages"],example:{},supports:{align:!0,layout:{default:{type:"constrained"},allowCustomContentAndWideSize:!1}}}})},j={};function v(n){var x=j[n];if(x!==void 0)return x.exports;var m=j[n]={exports:{}};return I[n](m,m.exports,v),m.exports}v.n=n=>{var x=n&&n.__esModule?()=>n.default:()=>n;return v.d(x,{a:x}),x},v.d=(n,x)=>{for(var m in x)v.o(x,m)&&!v.o(n,m)&&Object.defineProperty(n,m,{enumerable:!0,get:x[m]})},v.o=(n,x)=>Object.prototype.hasOwnProperty.call(n,x);var y={};return(()=>{"use strict";const n=window.ReactJSXRuntime,x=window.wp.blocks,m=window.wp.blockEditor,h=window.wp.components,ke=window.wp.coreData,N=window.wp.data,w=window.wp.i18n,k=window.React;function je(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function E(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,n.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,n.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,n.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const G=(0,k.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:l,size:a,isEditorMode:s=!1,...r}=o;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,...r,children:(0,n.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${l}`})})}}});function z(e){return(0,n.jsx)(k.Suspense,{fallback:null,children:(0,n.jsx)(G,{...e})})}function U(){(0,x.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:E})}function P(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function ye(e,t,o){const l=t.spacing?.blockGap;let a="none";if(l===!0)a="both";else if(Array.isArray(l)){const r=l.includes("horizontal"),c=l.includes("vertical");r&&c?a="both":r?a="horizontal":c&&(a="vertical")}const s={columnGap:a==="both"||a==="horizontal"?P(o?.spacing?.blockGap,a):void 0,rowGap:a==="both"||a==="vertical"?P(o?.spacing?.blockGap,a):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function F(e,t){return e.reduce((o,l)=>{if(l.name===t)o.push(l);else if(l.innerBlocks){const a=F(l.innerBlocks,t);a&&o.push(...a)}return o},[])}const Ce=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=useMemo(()=>({}),[]),{postTypes:l,taxonomies:a}=useSelect(p=>{const{getEntityRecords:u}=p(coreStore),g=u("root","postType",e),i=u("root","taxonomy",t);if(!i)return{postTypes:g,taxonomies:i};for(const b of i)o[b.slug]=u("taxonomy",b.slug);return{postTypes:g,taxonomies:i}},[e,t,o]),s=["attachment"],r=[],c=l?.filter(({viewable:p,slug:u})=>p&&!s.includes(u));if(!c||c.length===0)return{postTypes:c,taxonomies:void 0};const d={};for(const p of c){const u=a?.filter(({types:g,slug:i})=>g.includes(p.slug)&&!r.includes(i));u&&(d[p.slug]=u.map(g=>{const i=o?.[g.slug]??null;return{...g,terms:i}}))}return{filteredPostTypes:c,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Se({list:e,containerClassName:t,renderItem:o}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(l=>o({listItem:l,buttonProps:{type:"button",className:`custom-multiple-select-list-item${l.isSelected?" is-selected":""}`}}))})]})}function W(e){return e.indexOf("data:image/svg+xml;")===0}function q(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function J(e){return e.indexOf("dashicons-")===0}function K({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(W(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(q(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(J(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Ne={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Te(){const[e,t,o,l]=useSettings("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),a={};if(l&&o&&o.length>0)for(const s of o)a[s.slug]={color:s.color,name:s.name};if(t&&t?.length>0)for(const s of t)a[s.slug]={color:s.color,name:s.name};if(e&&e?.length>0)for(const s of e)a[s.slug]={color:s.color,name:s.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:a}}function X({colours:e,attributesDefinition:t,attributes:o,setAttributes:l}){return(0,n.jsx)(h.__experimentalToolsPanel,{label:(0,w.__)("Custom colours","launchpad"),resetAll:a=>{if(a)for(const s of a)s()},children:(0,n.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(a=>(0,n.jsx)(Z,{colour:a,attributesDefinition:t,attributes:o,setAttributes:l},a.attributeName))})})}function Z({colour:e,attributesDefinition:t,attributes:o,setAttributes:l}){const[a,s,r,c,d]=(0,m.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),p=()=>t[e.attributeName]?.default!==o[e.attributeName],u=()=>{l({[e.attributeName]:t[e.attributeName]?.default??void 0})},g=(0,k.useRef)(null);return(0,n.jsx)(h.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:u,hasValue:p,onDeselect:u,label:e.label,isShownByDefault:!0,children:(0,n.jsx)(h.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:b})=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(h.Button,{ref:g,__next40pxDefaultSize:!0,onClick:b,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,n.jsx)(h.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,n.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,n.jsx)(h.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,n.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,n.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,n.jsx)(h.ColorPalette,{colors:[...a&&a?.length>0?[{name:"User",colors:a}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...c&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:o[e.attributeName],onChange:i=>{l({[e.attributeName]:i})},disableCustomColors:!d})})})})})},e.attributeName)}function Be({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:l}){const[a,s,r]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),c=s?.map(({name:i,ratio:b})=>({label:i,value:b}))??[],d=a?.map(({name:i,ratio:b})=>({label:i,value:b}))??[],p=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?d:[],...c||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[u,g]=useState(p.map(i=>i.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:p,value:u,onChange:i=>{g(i),i!=="custom"&&t(i)}}),u==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&l!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&l(i)},value:o,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const Q=(e,t,o,l)=>{const{getBlocksByName:a,getBlockAttributes:s,getBlockParentsByBlockName:r}=select(blockEditorStore);return a(l).some(d=>{if(r(d,"core/template-part",!0).length)return!1;const{[o]:p}=s(d);return e!==d&&t===p})};function Ie(e,t,o,l,a){const{[t]:s}=e,r=useCallback(d=>Q(o,d,t,a),[o,t,a]);return useEffect(()=>{if(s===""){const d=o.slice(0,o.indexOf("-"));l({[t]:d})}if(r(s)){const d=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${s}. New value: ${d}`),l({[t]:d})}},[s,o,l,r,t]),useMemo(()=>function({label:p,help:u,onValidChange:g,idAttribute:i}){const[b,B]=useState(i);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:p,help:typeof u=="function"?u(!r(b)):u,value:b,onChange:_=>{B(_),r(_)||g(_)}})},[r])}function ze({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:$(t),controls:e.map(l=>{{const a=l===t;return{icon:$(l),title:Y(l),isDisabled:a,onClick:()=>o(l)}}})})}function Y(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function $(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function Pe(e){const{hasChildren:t}=useSelect(o=>{const{getBlocks:l}=o(blockEditorStore);return{hasChildren:l(e).length>0}},[e]);return t}function $e({clientId:e,blockInfo:t,variations:o,allowSkip:l}){const{replaceInnerBlocks:a,updateBlockAttributes:s}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:o.map(r=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?jsx(K,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&s(e,r.attributes),r.innerBlocks&&a(e,createBlocksFromInnerBlocksTemplate(r.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),l&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{a(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function De({imageId:e,className:t="",size:o="full"}){const l=useSelect(s=>typeof e=="number"&&e>0?s(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!l)return null;const a=()=>{const s={src:l.source_url,className:`attachment-${o} size-${o} ${t}`,width:l.media_details.width,height:l.media_details.height,srcSet:""};return l.media_details?.sizes?.[o]&&(s.src=l.media_details.sizes[o].source_url,s.width=l.media_details.sizes[o].width,s.height=l.media_details.sizes[o].height),s.srcSet=Object.entries(l.media_details.sizes??{}).map(([r,c])=>`${c.source_url} ${c.width}w`).join(", "),s};return jsx(Fragment,{children:jsx("img",{...a(),alt:l.alt_text||""})})}function ee(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>ee(o))):t.push([]),t}function Ae(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const a=e()?.scrollHeight??0;if(a){const s=t.current.style;s.minHeight="",t.current.setAttribute("style",`${s.cssText}min-height: ${a}px !important`)}else t.current.style.minHeight=""}},1)}}var te=v(7749),D=v.n(te);const ne=[],oe=window.wp.hooks,A=window.wp.element;function le({icon:e,size:t=24,...o},l){return(0,A.cloneElement)(e,{width:t,height:t,...o,ref:l})}const ae=(0,A.forwardRef)(le),C=window.wp.primitives,se=(0,n.jsx)(C.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(C.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),re=(0,n.jsx)(C.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(C.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),ie={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,w.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,w.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,w.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,w.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0}},ce={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,t)=>(0,n.jsx)(z,{iconName:e,isEditorMode:!0,...t}),availableIcons:Object.fromEntries(Object.entries(ie).filter(([e,t])=>t.makeAvailableToUser===!0))}};function M(){return(0,oe.applyFilters)("launchpadBlocks.icons",{...ce})}function R({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:t,onIconSelect:o,onReset:l}){const a=M(),[s,r]=(0,k.useState)("");return(0,n.jsxs)(h.Panel,{children:[(0,n.jsxs)(h.PanelHeader,{children:[e," ",l?(0,n.jsx)(h.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{l()},size:"small",children:"Reset"}):null]}),(0,n.jsxs)(h.PanelBody,{children:[(0,n.jsx)(h.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:s,onChange:c=>{r(c)}}),(0,n.jsx)("div",{children:Object.entries(a).map(([c,d])=>{if(Object.keys(d.availableIcons).length===0)return null;const p=Object.entries(d.availableIcons).filter(([u,{title:g}])=>!!(u.includes(s)||g.includes(s)));return(0,n.jsx)(ue,{name:d.name,iconCount:p.length,children:(0,n.jsx)("div",{className:`icon-select ${c}-icon-select`,children:p.map(([u,{title:g}])=>{const i=t.iconName===u&&t.library===c;return(0,n.jsx)("button",{className:`icon-select-icon ${c}-icon-select-icon ${c}-icon-select-icon-${u}${i?" is-selected":""}`,onClick:()=>{o({iconName:u,library:c})},title:g,children:d.renderIcon(u)},u)})})},c)})})]})]})}function ue({name:e,iconCount:t,children:o}){const[l,a]=(0,k.useState)(!1);return(0,k.useEffect)(()=>{t===0&&l&&a(!1)},[l,t]),(0,n.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,n.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,n.jsxs)(h.Button,{type:"button","aria-expanded":l,onClick:()=>{t>0&&a(!l)},disabled:t===0,className:"icon-select-group-accordion-header-button",children:[(0,n.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,n.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:t}),(0,n.jsx)(ae,{className:"icon-select-group-accordion-arrow",icon:l?se:re})]})}),l?o:null]})}const T={prevText:{type:"string",default:"Go to previous slide"},nextText:{type:"string",default:"Go to next slide"},prevVisualText:{type:"string",default:"Previous"},nextVisualText:{type:"string",default:"Next"},shouldShowTextVisually:{type:"boolean",default:!0},backgroundColour:{type:"string",default:"black"},iconColour:{type:"string",default:"white"},prevIcon:{type:"object",default:{iconName:"chevron-left",library:"launchpad-blocks"}},nextIcon:{type:"object",default:{iconName:"chevron-right",library:"launchpad-blocks"}}};function O({clientId:e,attributes:t,setAttributes:o,context:l,isSelected:a}){const{prevText:s,nextText:r,prevVisualText:c,nextVisualText:d,shouldShowTextVisually:p,backgroundColour:u,iconColour:g,prevIcon:i,nextIcon:b,className:B}=t,_=l["launchpad-blocks/currentlySelectedSlide"],H=l["launchpad-blocks/carouselSlides"]!==void 0&&l["launchpad-blocks/carouselSlides"].length>0?l["launchpad-blocks/carouselSlides"].length:l["launchpad-blocks/carouselImages"].length,fe=(0,N.useSelect)(f=>f(m.store).hasSelectedInnerBlock(e,!0),[e]),{updateBlockAttributes:L}=(0,N.useDispatch)(m.store),{parentCarouselClientId:S}=(0,N.useSelect)(f=>{const{getBlockParentsByBlockName:we}=f(m.store);return{parentCarouselClientId:we(e,"launchpad-blocks/carousel").at(-1)}},[e]),xe=(0,m.useBlockProps)({style:{"--background-colour":u,"--icon-colour":g}}),be=!B?.includes("is-style-overlay")&&(a||fe),{children:ve,..._e}=(0,m.useInnerBlocksProps)(xe,{orientation:"horizontal",renderAppender:be?m.InnerBlocks.ButtonBlockAppender:()=>null}),V=M();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.InspectorControls,{group:"styles",children:(0,n.jsx)(X,{colours:[{attributeName:"backgroundColour",label:"Background colour"},{attributeName:"iconColour",label:"Icon colour"}],attributes:t,attributesDefinition:T,setAttributes:o})}),(0,n.jsxs)(m.InspectorControls,{children:[(0,n.jsxs)(h.Panel,{children:[(0,n.jsx)(h.PanelBody,{children:(0,n.jsx)(h.ToggleControl,{__nextHasNoMarginBottom:!0,label:"Show text labels in buttons",onChange:f=>{o({shouldShowTextVisually:f})},checked:p})}),(0,n.jsxs)(h.PanelBody,{title:"Accessibility",children:[(0,n.jsx)(h.TextControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Previous button screen reader label",onChange:f=>{o({prevText:f})},value:s}),(0,n.jsx)(h.TextControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Next button screen reader label",onChange:f=>{o({nextText:f})},value:r})]})]}),(0,n.jsx)(R,{iconSelectHeader:"Previous icon",dataOnSelectedIcon:i,onIconSelect:f=>{o({prevIcon:f})},onReset:()=>{o({prevIcon:T.prevIcon.default})}}),(0,n.jsx)(R,{iconSelectHeader:"Next icon",dataOnSelectedIcon:b,onIconSelect:f=>{o({nextIcon:f})},onReset:()=>{o({nextIcon:T.nextIcon.default})}})]}),(0,n.jsx)("div",{..._e,children:(0,n.jsxs)("div",{className:"carousel-navigation-arrows-container",children:[(0,n.jsxs)("button",{className:`carousel-navigation-button${p?" has-text":""}`,onClick:()=>{S&&L(S,{currentlySelectedSlide:_>0?_-1:H-1})},children:[V[i.library]?.renderIcon(i.iconName,{className:"carousel-navigation-button-icon"}),p?(0,n.jsx)(m.RichText,{identifier:"prevVisualText",tagName:"span",onChange:f=>{o({prevVisualText:f})},value:c,placeholder:(0,w.__)("Previous","launchpad-blocks")}):null]}),(0,n.jsx)("div",{className:"carousel-navigation-inner-area",children:ve}),(0,n.jsxs)("button",{className:`carousel-navigation-button${p?" has-text":""}`,onClick:()=>{S&&L(S,{currentlySelectedSlide:_<H-1?_+1:0})},children:[p?(0,n.jsx)(m.RichText,{identifier:"nextVisualText",tagName:"span",onChange:f=>{o({nextVisualText:f})},value:d,placeholder:(0,w.__)("Next","launchpad-blocks")}):null,V[b.library]?.renderIcon(b.iconName,{className:"carousel-navigation-button-icon"})]})]})})]})}O.displayName="CarouselNavigationArrowsEdit";function de({hasInnerBlocks:e}){return e?me:pe}function pe(){return null}function me(){return(0,n.jsx)(m.InnerBlocks.Content,{})}const he={from:[],to:[]},ge=[],Oe={},He=null;(0,x.registerBlockType)(D().name,{icon:(0,n.jsx)(z,{iconName:"carousel-navigation-arrows"}),deprecated:ne,edit:O,save:de({hasInnerBlocks:!0}),transforms:he}),U(),ge.forEach(e=>{(0,x.registerBlockVariation)(D().name,e)})})(),y})());
