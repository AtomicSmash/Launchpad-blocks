(function(y,b){if(typeof exports=="object"&&typeof module=="object")module.exports=b();else if(typeof define=="function"&&define.amd)define([],b);else{var C=b();for(var t in C)(typeof exports=="object"?exports:y)[t]=C[t]}})(globalThis,()=>(()=>{var I={7749:(t=>{t.exports={apiVersion:3,name:"launchpad-blocks/carousel-navigation-arrows",title:"Carousel navigation arrows",category:"theme",description:"",textdomain:"launchpad-blocks",allowedBlocks:["launchpad-blocks/carousel-thumbnails","launchpad-blocks/carousel-dots","launchpad-blocks/carousel-slide-count"],parent:["launchpad-blocks/carousel"],keywords:[],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",styles:[{name:"normal",label:"Normal",isDefault:!0},{name:"overlay",label:"Overlay"}],attributes:{prevText:{type:"string",default:"Go to previous slide"},nextText:{type:"string",default:"Go to next slide"},prevVisualText:{type:"string",default:"Previous"},nextVisualText:{type:"string",default:"Next"},shouldShowTextVisually:{type:"boolean",default:!0},backgroundColour:{type:"string",default:"black"},iconColour:{type:"string",default:"white"},prevIcon:{type:"object",default:{iconName:"chevron-left",library:"launchpad-blocks"}},nextIcon:{type:"object",default:{iconName:"chevron-right",library:"launchpad-blocks"}}},providesContext:{},usesContext:["launchpad-blocks/currentlySelectedSlide","launchpad-blocks/carouselSlides","launchpad-blocks/carouselImages"],example:{},supports:{align:!0,layout:{default:{type:"constrained"},allowCustomContentAndWideSize:!1}}}})},y={};function b(t){var f=y[t];if(f!==void 0)return f.exports;var m=y[t]={exports:{}};return I[t](m,m.exports,b),m.exports}b.n=t=>{var f=t&&t.__esModule?()=>t.default:()=>t;return b.d(f,{a:f}),f},b.d=(t,f)=>{for(var m in f)b.o(f,m)&&!b.o(t,m)&&Object.defineProperty(t,m,{enumerable:!0,get:f[m]})},b.o=(t,f)=>Object.prototype.hasOwnProperty.call(t,f);var C={};return(()=>{"use strict";const t=window.ReactJSXRuntime,f=window.wp.blocks,m=window.wp.blockEditor,g=window.wp.components,ve=window.wp.coreData,B=window.wp.data,_=window.wp.i18n,w=window.React;function _e(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function V(e){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,t.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,t.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,t.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const E=(0,w.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(n=>{if(!n.default["icons/sprite.svg"]||typeof n.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return n.default}).catch(()=>({}));return{default:function(o){const{iconName:l,size:a,isEditorMode:s=!1,...i}=o;return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,...i,children:(0,t.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${l}`})})}}});function z(e){return(0,t.jsx)(w.Suspense,{fallback:null,children:(0,t.jsx)(E,{...e})})}function G(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:V})}function P(e,n){if(e===void 0)return e;let o;if(n==="both")o=e;else if(n==="horizontal")o=e.left;else if(n==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function we(e,n,o){const l=n.spacing?.blockGap;let a="none";if(l===!0)a="both";else if(Array.isArray(l)){const i=l.includes("horizontal"),u=l.includes("vertical");i&&u?a="both":i?a="horizontal":u&&(a="vertical")}const s={columnGap:a==="both"||a==="horizontal"?P(o?.spacing?.blockGap,a):void 0,rowGap:a==="both"||a==="vertical"?P(o?.spacing?.blockGap,a):void 0};if(e===void 0&&typeof n.layout=="object"&&n?.layout?.default&&(e=n.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let i="";return e.minimumColumnWidth?i=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(i=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:i,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function U(e,n){return e.reduce((o,l)=>{if(l.name===n)o.push(l);else if(l.innerBlocks){const a=U(l.innerBlocks,n);a&&o.push(...a)}return o},[])}const ke=()=>{const e=useMemo(()=>({per_page:-1}),[]),n=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=useMemo(()=>({}),[]),{postTypes:l,taxonomies:a}=useSelect(h=>{const{getEntityRecords:d}=h(coreStore),p=d("root","postType",e),r=d("root","taxonomy",n);if(!r)return{postTypes:p,taxonomies:r};for(const v of r)o[v.slug]=d("taxonomy",v.slug);return{postTypes:p,taxonomies:r}},[e,n,o]),s=["attachment"],i=[],u=l?.filter(({viewable:h,slug:d})=>h&&!s.includes(d));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const c={};for(const h of u){const d=a?.filter(({types:p,slug:r})=>p.includes(h.slug)&&!i.includes(r));d&&(c[h.slug]=d.map(p=>{const r=o?.[p.slug]??null;return{...p,terms:r}}))}return{filteredPostTypes:u,mappedTaxonomies:c===void 0||Object.values(c).length===0?void 0:c}};function je({list:e,containerClassName:n,renderItem:o}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${n!==void 0&&n!==""?` ${n}`:""}`,children:e.map(l=>o({listItem:l,buttonProps:{type:"button",className:`custom-multiple-select-list-item${l.isSelected?" is-selected":""}`}}))})]})}function F(e){return e.indexOf("data:image/svg+xml;")===0}function W(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function q(e){return e.indexOf("dashicons-")===0}function J({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(F(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url('${e}')`},"aria-hidden":"true",children:jsx("br",{})});if(W(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(q(e)){const n=e.replace("dashicons-","");return jsx(DashIcon,{icon:n,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ye={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function K({colours:e,attributesDefinition:n,attributes:o,setAttributes:l}){return(0,t.jsx)(g.__experimentalToolsPanel,{label:(0,_.__)("Custom colours","launchpad"),resetAll:a=>{if(a)for(const s of a)s()},children:(0,t.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(a=>(0,t.jsx)(X,{colour:a,attributesDefinition:n,attributes:o,setAttributes:l},a.attributeName))})})}function X({colour:e,attributesDefinition:n,attributes:o,setAttributes:l}){const[a,s,i,u,c]=(0,m.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>n[e.attributeName]?.default!==o[e.attributeName],d=()=>{l({[e.attributeName]:n[e.attributeName]?.default??void 0})},p=(0,w.useRef)(null);return(0,t.jsx)(g.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:h,onDeselect:d,label:e.label,isShownByDefault:!0,children:(0,t.jsx)(g.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:r,onToggle:v})=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(g.Button,{ref:p,__next40pxDefaultSize:!0,onClick:v,"aria-expanded":r,className:`block-editor-panel-color-gradient-settings__dropdown${r?" is-open":""}`,children:(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,t.jsx)(g.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,t.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,t.jsx)(g.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,t.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,t.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,t.jsx)(g.ColorPalette,{colors:[...a&&a?.length>0?[{name:"User",colors:a}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...u&&i&&i.length>0?[{name:"Default",colors:i}]:[]],value:o[e.attributeName],onChange:r=>{l({[e.attributeName]:r})},disableCustomColors:!c})})})})})},e.attributeName)}function Ce({ratioValue:e,ratioOnChange:n,imageFitValue:o,imageFitOnChange:l}){const[a,s,i]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=s?.map(({name:r,ratio:v})=>({label:r,value:v}))??[],c=a?.map(({name:r,ratio:v})=>({label:r,value:v}))??[],h=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...i?c:[],...u||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,p]=useState(h.map(r=>r.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:h,value:d,onChange:r=>{p(r),r!=="custom"&&n(r)}}),d==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:n,value:e}):null,e!=="auto"&&l!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:r=>{typeof r=="string"&&["contain","cover"].includes(r)&&l(r)},value:o,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const Z=(e,n,o,l)=>{const{getBlocksByName:a,getBlockAttributes:s,getBlockParentsByBlockName:i}=select(blockEditorStore);return a(l).some(c=>{if(i(c,"core/template-part",!0).length)return!1;const{[o]:h}=s(c);return e!==c&&n===h})};function Se(e,n,o,l,a){const{[n]:s}=e,i=useCallback(c=>Z(o,c,n,a),[o,n,a]);return useEffect(()=>{if(s===""){const c=o.slice(0,o.indexOf("-"));l({[n]:c})}if(i(s)){const c=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${n} to make it unique. Old value: ${s}. New value: ${c}`),l({[n]:c})}},[s,o,l,i,n]),useMemo(()=>function({label:h,help:d,onValidChange:p,idAttribute:r}){const[v,k]=useState(r);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof d=="function"?d(!i(v)):d,value:v,onChange:j=>{k(j),i(j)||p(j)}})},[i])}function Ne({levelOptions:e,selectedLevel:n,setSelectedHeadingLevel:o}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:$(n),controls:e.map(l=>{{const a=l===n;return{icon:$(l),title:Q(l),isDisabled:a,onClick:()=>o(l)}}})})}function Q(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function $(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function Te(e){const{hasChildren:n}=useSelect(o=>{const{getBlocks:l}=o(blockEditorStore);return{hasChildren:l(e).length>0}},[e]);return n}function Ie({clientId:e,blockInfo:n,variations:o,allowSkip:l}){const{replaceInnerBlocks:a,updateBlockAttributes:s}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:n.icon,label:n.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:o.map(i=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof i.icon=="string"?jsx(J,{iconString:i.icon}):i.icon,iconSize:48,onClick:()=>{i.attributes&&s(e,i.attributes),i.innerBlocks&&a(e,createBlocksFromInnerBlocksTemplate(i.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:i.title})]},i.name))}),l&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{a(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function Be({imageId:e,className:n="",size:o="full"}){const l=useSelect(s=>typeof e=="number"&&e>0?s(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!l)return null;const a=()=>{const s={src:l.source_url,className:`attachment-${o} size-${o} ${n}`,width:l.media_details.width,height:l.media_details.height,srcSet:""};return l.media_details?.sizes?.[o]&&(s.src=l.media_details.sizes[o].source_url,s.width=l.media_details.sizes[o].width,s.height=l.media_details.sizes[o].height),s.srcSet=Object.entries(l.media_details.sizes??{}).map(([i,u])=>`${u.source_url} ${u.width}w`).join(", "),s};return jsx(Fragment,{children:jsx("img",{...a(),alt:l.alt_text||""})})}function Y(e){const n=[e.name];return e.attributes?n.push(e.attributes):n.push({}),e.innerBlocks?n.push(e.innerBlocks.map(o=>Y(o))):n.push([]),n}function ze(e){const n=useRef(null);return n.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(n.current){const a=e()?.scrollHeight??0;if(a){const s=n.current.style;s.minHeight="",n.current.setAttribute("style",`${s.cssText}min-height: ${a}px !important`)}else n.current.style.minHeight=""}},1)}}var ee=b(7749),D=b.n(ee);const te=[],ne=window.wp.hooks,A=window.wp.element;function oe({icon:e,size:n=24,...o},l){return(0,A.cloneElement)(e,{width:n,height:n,...o,ref:l})}const le=(0,A.forwardRef)(oe),S=window.wp.primitives,ae=(0,t.jsx)(S.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(S.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),se=(0,t.jsx)(S.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(S.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),ie={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,_.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,_.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,_.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,_.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0}},re={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,n)=>(0,t.jsx)(z,{iconName:e,isEditorMode:!0,...n}),availableIcons:Object.fromEntries(Object.entries(ie).filter(([e,n])=>n.makeAvailableToUser===!0))}};function M(){return(0,ne.applyFilters)("launchpadBlocks.icons",{...re})}function R({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:n,onIconSelect:o,onReset:l}){const a=M(),[s,i]=(0,w.useState)("");return(0,t.jsxs)(g.Panel,{children:[(0,t.jsxs)(g.PanelHeader,{children:[e," ",l?(0,t.jsx)(g.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{l()},size:"small",children:"Reset"}):null]}),(0,t.jsxs)(g.PanelBody,{children:[(0,t.jsx)(g.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:s,onChange:u=>{i(u)}}),(0,t.jsx)("div",{children:Object.entries(a).map(([u,c])=>{if(Object.keys(c.availableIcons).length===0)return null;const h=Object.entries(c.availableIcons).filter(([d,{title:p}])=>!!(d.includes(s)||p.includes(s)));return(0,t.jsx)(ce,{name:c.name,iconCount:h.length,children:(0,t.jsx)("div",{className:`icon-select ${u}-icon-select`,children:h.map(([d,{title:p}])=>{const r=n.iconName===d&&n.library===u;return(0,t.jsx)("button",{className:`icon-select-icon ${u}-icon-select-icon ${u}-icon-select-icon-${d}${r?" is-selected":""}`,onClick:()=>{o({iconName:d,library:u})},title:p,children:c.renderIcon(d)},d)})})},u)})})]})]})}function ce({name:e,iconCount:n,children:o}){const[l,a]=(0,w.useState)(!1);return(0,w.useEffect)(()=>{n===0&&l&&a(!1)},[l,n]),(0,t.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,t.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,t.jsxs)(g.Button,{type:"button","aria-expanded":l,onClick:()=>{n>0&&a(!l)},disabled:n===0,className:"icon-select-group-accordion-header-button",children:[(0,t.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,t.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:n}),(0,t.jsx)(le,{className:"icon-select-group-accordion-arrow",icon:l?ae:se})]})}),l?o:null]})}const T={prevText:{type:"string",default:"Go to previous slide"},nextText:{type:"string",default:"Go to next slide"},prevVisualText:{type:"string",default:"Previous"},nextVisualText:{type:"string",default:"Next"},shouldShowTextVisually:{type:"boolean",default:!0},backgroundColour:{type:"string",default:"black"},iconColour:{type:"string",default:"white"},prevIcon:{type:"object",default:{iconName:"chevron-left",library:"launchpad-blocks"}},nextIcon:{type:"object",default:{iconName:"chevron-right",library:"launchpad-blocks"}}};function O({clientId:e,attributes:n,setAttributes:o,context:l}){const{prevText:a,nextText:s,prevVisualText:i,nextVisualText:u,shouldShowTextVisually:c,backgroundColour:h,iconColour:d,prevIcon:p,nextIcon:r,className:v}=n,k=l["launchpad-blocks/currentlySelectedSlide"],j=l["launchpad-blocks/carouselSlides"]!==void 0&&l["launchpad-blocks/carouselSlides"].length>0?l["launchpad-blocks/carouselSlides"].length:l["launchpad-blocks/carouselImages"].length,{updateBlockAttributes:H}=(0,B.useDispatch)(m.store),{parentCarouselClientId:N}=(0,B.useSelect)(x=>{const{getBlockParentsByBlockName:be}=x(m.store);return{parentCarouselClientId:be(e,"launchpad-blocks/carousel").at(-1)}},[e]),ge=(0,m.useBlockProps)({style:{"--background-colour":h,"--icon-colour":d}}),{children:fe,...xe}=(0,m.useInnerBlocksProps)(ge,{orientation:"horizontal",renderAppender:v?.includes("is-style-overlay")?()=>null:m.InnerBlocks.ButtonBlockAppender}),L=M();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.InspectorControls,{group:"styles",children:(0,t.jsx)(K,{colours:[{attributeName:"backgroundColour",label:"Background colour"},{attributeName:"iconColour",label:"Icon colour"}],attributes:n,attributesDefinition:T,setAttributes:o})}),(0,t.jsxs)(m.InspectorControls,{children:[(0,t.jsxs)(g.Panel,{children:[(0,t.jsx)(g.PanelBody,{children:(0,t.jsx)(g.ToggleControl,{__nextHasNoMarginBottom:!0,label:"Show text labels in buttons",onChange:x=>{o({shouldShowTextVisually:x})},checked:c})}),(0,t.jsxs)(g.PanelBody,{title:"Accessibility",children:[(0,t.jsx)(g.TextControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Previous button screen reader label",onChange:x=>{o({prevText:x})},value:a}),(0,t.jsx)(g.TextControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Next button screen reader label",onChange:x=>{o({nextText:x})},value:s})]})]}),(0,t.jsx)(R,{iconSelectHeader:"Previous icon",dataOnSelectedIcon:p,onIconSelect:x=>{o({prevIcon:x})},onReset:()=>{o({prevIcon:T.prevIcon.default})}}),(0,t.jsx)(R,{iconSelectHeader:"Next icon",dataOnSelectedIcon:r,onIconSelect:x=>{o({nextIcon:x})},onReset:()=>{o({nextIcon:T.nextIcon.default})}})]}),(0,t.jsx)("div",{...xe,children:(0,t.jsxs)("div",{className:"carousel-navigation-arrows-container",children:[(0,t.jsxs)("button",{className:`carousel-navigation-button${c?" has-text":""}`,onClick:()=>{N&&H(N,{currentlySelectedSlide:k>0?k-1:j-1})},children:[L[p.library]?.renderIcon(p.iconName,{className:"carousel-navigation-button-icon"}),c?(0,t.jsx)(m.RichText,{identifier:"prevVisualText",tagName:"span",onChange:x=>{o({prevVisualText:x})},value:i,placeholder:(0,_.__)("Previous","launchpad-blocks")}):null]}),(0,t.jsx)("div",{className:"carousel-navigation-inner-area",children:fe}),(0,t.jsxs)("button",{className:`carousel-navigation-button${c?" has-text":""}`,onClick:()=>{N&&H(N,{currentlySelectedSlide:k<j-1?k+1:0})},children:[c?(0,t.jsx)(m.RichText,{identifier:"nextVisualText",tagName:"span",onChange:x=>{o({nextVisualText:x})},value:u,placeholder:(0,_.__)("Next","launchpad-blocks")}):null,L[r.library]?.renderIcon(r.iconName,{className:"carousel-navigation-button-icon"})]})]})})]})}O.displayName="CarouselNavigationArrowsEdit";function ue({hasInnerBlocks:e}){return e?pe:de}function de(){return null}function pe(){return(0,t.jsx)(m.InnerBlocks.Content,{})}const me={from:[],to:[]},he=[],De={},Ae=null;(0,f.registerBlockType)(D().name,{icon:(0,t.jsx)(z,{iconName:"carousel-navigation-arrows"}),deprecated:te,edit:O,save:ue({hasInnerBlocks:!0}),transforms:me}),G(),he.forEach(e=>{(0,f.registerBlockVariation)(D().name,e)})})(),C})());
