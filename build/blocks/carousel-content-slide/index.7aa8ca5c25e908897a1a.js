(function(y,b){if(typeof exports=="object"&&typeof module=="object")module.exports=b();else if(typeof define=="function"&&define.amd)define([],b);else{var j=b();for(var d in j)(typeof exports=="object"?exports:y)[d]=j[d]}})(globalThis,()=>(()=>{var z={4351:(d=>{d.exports={apiVersion:3,name:"launchpad-blocks/carousel-content-slide",title:"Carousel content slide",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel-content-slides"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{backgroundOrOverlayColour:{type:"string"},overlayOpacity:{type:"number",default:50}},providesContext:{},usesContext:["launchpad-blocks/template","launchpad-blocks/shouldLockChildSlidesToTemplate","launchpad-blocks/currentlySelectedSlide","launchpad-blocks/isInTemplateEditMode"],supports:{background:{backgroundImage:!0,backgroundSize:!0},spacing:{padding:["vertical"]},layout:{default:{type:"flex",justifyContent:"center"},allowCustomContentAndWideSize:!1,allowOrientation:!1,allowJustification:!1}}}})},y={};function b(d){var g=y[d];if(g!==void 0)return g.exports;var r=y[d]={exports:{}};return z[d](r,r.exports,b),r.exports}b.n=d=>{var g=d&&d.__esModule?()=>d.default:()=>d;return b.d(g,{a:g}),g},b.d=(d,g)=>{for(var r in g)b.o(g,r)&&!b.o(d,r)&&Object.defineProperty(d,r,{enumerable:!0,get:g[r]})},b.o=(d,g)=>Object.prototype.hasOwnProperty.call(d,g);var j={};return(()=>{"use strict";const d=window.wp.blocks,g=window.wp.primitives,r=window.ReactJSXRuntime,M=(0,r.jsx)(g.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)(g.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})}),_=window.wp.blockEditor,x=window.wp.components,he=window.wp.coreData,O=window.wp.data,A=window.wp.i18n,C=window.React;function fe(e){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:jsx("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function E(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,r.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,r.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,r.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const H=(0,C.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:l,isEditorMode:s=!1,...a}=o;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...a,children:(0,r.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function ge(e){return jsx(Suspense,{fallback:null,children:jsx(H,{...e})})}function L(){(0,d.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:E})}function T(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function be(e,t,o){const n=t.spacing?.blockGap;let l="none";if(n===!0)l="both";else if(Array.isArray(n)){const a=n.includes("horizontal"),p=n.includes("vertical");a&&p?l="both":a?l="horizontal":p&&(l="vertical")}const s={columnGap:l==="both"||l==="horizontal"?T(o?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?T(o?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function V(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const l=V(n.innerBlocks,t);l&&o.push(...l)}return o},[])}const xe=()=>{const e=useMemo(()=>({per_page:-1}),[]),t=useMemo(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=useMemo(()=>({}),[]),{postTypes:n,taxonomies:l}=useSelect(m=>{const{getEntityRecords:u}=m(coreStore),h=u("root","postType",e),i=u("root","taxonomy",t);if(!i)return{postTypes:h,taxonomies:i};for(const f of i)o[f.slug]=u("taxonomy",f.slug);return{postTypes:h,taxonomies:i}},[e,t,o]),s=["attachment"],a=[],p=n?.filter(({viewable:m,slug:u})=>m&&!s.includes(u));if(!p||p.length===0)return{postTypes:p,taxonomies:void 0};const c={};for(const m of p){const u=l?.filter(({types:h,slug:i})=>h.includes(m.slug)&&!a.includes(i));u&&(c[m.slug]=u.map(h=>{const i=o?.[h.slug]??null;return{...h,terms:i}}))}return{filteredPostTypes:p,mappedTaxonomies:c===void 0||Object.values(c).length===0?void 0:c}};function _e({list:e,containerClassName:t,renderItem:o}){return jsxs(Fragment,{children:[jsx("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),jsx("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function G(e){return e.indexOf("data:image/svg+xml,")===0}function W(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function F(e){return e.indexOf("dashicons-")===0}function q({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return jsx("div",{className:"menu-icon","aria-hidden":"true",children:jsx("br",{})});if(G(e))return jsx("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:jsx("br",{})});if(W(e))return jsx("img",{src:new URL(e).toString(),alt:""});if(F(e)){const t=e.replace("dashicons-","");return jsx(DashIcon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ve={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Z(){const[e,t,o,n]=(0,_.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(n&&o&&o.length>0)for(const s of o)l[s.slug]={color:s.color,name:s.name};if(t&&t?.length>0)for(const s of t)l[s.slug]={color:s.color,name:s.name};if(e&&e?.length>0)for(const s of e)l[s.slug]={color:s.color,name:s.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:l}}function U({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return(0,r.jsx)(x.__experimentalToolsPanel,{label:(0,A.__)("Custom colours","launchpad"),resetAll:l=>{if(l)for(const s of l)s()},children:(0,r.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>(0,r.jsx)(J,{colour:l,attributesDefinition:t,attributes:o,setAttributes:n},l.attributeName))})})}function J({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[l,s,a,p,c]=(0,_.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==o[e.attributeName],u=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},h=(0,C.useRef)(null);return(0,r.jsx)(x.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:u,hasValue:m,onDeselect:u,label:e.label,isShownByDefault:!0,children:(0,r.jsx)(x.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:f})=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x.Button,{ref:h,__next40pxDefaultSize:!0,onClick:f,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,r.jsx)(x.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,r.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,r.jsx)(x.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,r.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,r.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,r.jsx)(x.ColorPalette,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...p&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:o[e.attributeName],onChange:i=>{n({[e.attributeName]:i})},disableCustomColors:!c})})})})})},e.attributeName)}function ke({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[l,s,a]=useSettings("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),p=s?.map(({name:i,ratio:f})=>({label:i,value:f}))??[],c=l?.map(({name:i,ratio:f})=>({label:i,value:f}))??[],m=[{label:_x("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?c:[],...p||[],{label:_x("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[u,h]=useState(m.map(i=>i.value).includes(e)?e:"custom");return jsxs(Fragment,{children:[jsx(SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:__("Aspect ratio","launchpad-blocks"),options:m,value:u,onChange:i=>{h(i),i!=="custom"&&t(i)}}),u==="custom"?jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:__("Custom aspect ratio","launchpad-blocks"),help:__("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?jsxs(ToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:__("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&n(i)},value:o,children:[jsx(ToggleGroupControlOption,{label:"Cover",value:"cover"}),jsx(ToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const X=(e,t,o,n)=>{const{getBlocksByName:l,getBlockAttributes:s,getBlockParentsByBlockName:a}=select(blockEditorStore);return l(n).some(c=>{if(a(c,"core/template-part",!0).length)return!1;const{[o]:m}=s(c);return e!==c&&t===m})};function we(e,t,o,n,l){const{[t]:s}=e,a=useCallback(c=>X(o,c,t,l),[o,t,l]);return useEffect(()=>{if(s===""){const c=o.slice(0,o.indexOf("-"));n({[t]:c})}if(a(s)){const c=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${s}. New value: ${c}`),n({[t]:c})}},[s,o,n,a,t]),useMemo(()=>function({label:m,help:u,onValidChange:h,idAttribute:i}){const[f,w]=useState(i);return jsx(TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof u=="function"?u(!a(f)):u,value:f,onChange:k=>{w(k),a(k)||h(k)}})},[a])}function ye({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return jsx(ToolbarDropdownMenu,{label:__("Change title heading element","launchpad-blocks"),icon:P(t),controls:e.map(n=>{{const l=n===t;return{icon:P(n),title:K(n),isDisabled:l,onClick:()=>o(n)}}})})}function K(e){switch(e){case"h2":return __("Heading 2","launchpad-blocks");case"h3":return __("Heading 3","launchpad-blocks");case"h4":return __("Heading 4","launchpad-blocks");case"h5":return __("Heading 5","launchpad-blocks");case"h6":return __("Heading 6","launchpad-blocks");case"p":return __("Paragraph","launchpad-blocks")}}function P(e){switch(e){case"h2":return headingLevel2;case"h3":return headingLevel3;case"h4":return headingLevel4;case"h5":return headingLevel5;case"h6":return headingLevel6;case"p":return paragraph}}function je(e){const{hasChildren:t}=useSelect(o=>{const{getBlocks:n}=o(blockEditorStore);return{hasChildren:n(e).length>0}},[e]);return t}function Ce({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:l,updateBlockAttributes:s}=useDispatch(blockEditorStore);return jsxs(Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[jsx("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":__("Block variations"),children:o.map(a=>jsxs("li",{children:[jsx(Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?jsx(q,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&s(e,a.attributes),a.innerBlocks&&l(e,createBlocksFromInnerBlocksTemplate(a.innerBlocks),!1)}}),jsx("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),n&&jsx("div",{className:"block-editor-block-variation-picker__skip",children:jsx(Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:__("Skip")})})]})}function Se({imageId:e,className:t="",size:o="full"}){const n=useSelect(s=>typeof e=="number"&&e>0?s(coreStore).getEntityRecord?.("postType","attachment",e):void 0,[e]);if(!n)return null;const l=()=>{const s={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(s.src=n.media_details.sizes[o].source_url,s.width=n.media_details.sizes[o].width,s.height=n.media_details.sizes[o].height),s.srcSet=Object.entries(n.media_details.sizes??{}).map(([a,p])=>`${p.source_url} ${p.width}w`).join(", "),s};return jsx(Fragment,{children:jsx("img",{...l(),alt:n.alt_text||""})})}function Q(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Q(o))):t.push([]),t}function Be(e){const t=useRef(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const s=t.current.style;s.minHeight="",t.current.setAttribute("style",`${s.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}var Y=b(4351),$=b.n(Y);const ee=[],te={backgroundOrOverlayColour:{type:"string"},overlayOpacity:{type:"number",default:50}};function N({clientId:e,isSelected:t,context:o,attributes:n,setAttributes:l}){const{style:s,backgroundOrOverlayColour:a,overlayOpacity:p}=n,c=s?.background?.backgroundImage?.url,m=o["launchpad-blocks/isInTemplateEditMode"],u=o["launchpad-blocks/template"],h=o["launchpad-blocks/currentlySelectedSlide"],{isInnerBlockSelected:i,currentSlideOrderNumber:f,parentCarouselClientId:w}=(0,O.useSelect)(v=>{const{hasSelectedInnerBlock:B,getBlockParentsByBlockName:S,getBlockOrder:ce}=v(_.store),R=S(e,"launchpad-blocks/carousel-content-slides").at(-1),ue=S(e,"launchpad-blocks/carousel").at(-1),de=(R?ce(R):[]).findIndex(pe=>e===pe);return{isInnerBlockSelected:B(e,!0),currentSlideOrderNumber:de,parentCarouselClientId:ue}},[e]),{updateBlockAttributes:k}=(0,O.useDispatch)(_.store),{allPalettes:I}=Z(),D=Object.keys(I).find(v=>I[v].color===a),ae=(0,_.useBlockProps)({className:`${h===f?"show-slide-in-editor":""} ${c?"has-bg-image":""} ${D?`has-background-color has-${D}-background-color`:""}`,style:{...c?{"--overlay-opacity":`${p}%`}:{}}}),ie=(0,_.useInnerBlocksProps)(ae,{allowedBlocks:["launchpad-blocks/carousel-content-slide-content"],template:[["launchpad-blocks/carousel-content-slide-content"]],templateLock:"all"});return(0,C.useEffect)(()=>{if(!m&&u.length===1&&u[0].name==="launchpad-blocks/carousel-content-slide"&&u[0].attributes){const v={...n,...u[0].attributes};Object.entries(n).every(([B,S])=>v[B]===S)&&l(v)}},[u,l,m,n]),(0,C.useEffect)(()=>{w&&(t||i)&&h!==f&&k(w,{currentlySelectedSlide:f})},[t,i,f,w,h,k]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(_.InspectorControls,{group:"styles",children:[(0,r.jsx)(U,{colours:[{attributeName:"backgroundOrOverlayColour",label:c?"Overlay":"Background"}],attributes:n,attributesDefinition:te,setAttributes:l}),c&&a?(0,r.jsx)(x.Panel,{children:(0,r.jsx)(x.PanelBody,{children:(0,r.jsx)(x.RangeControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,help:"Please select how transparent you would like the overlay.",label:"Overlay opacity",max:100,min:0,value:p,onChange:v=>{l({overlayOpacity:v})}})})}):null]}),(0,r.jsx)("div",{...ie})]})}N.displayName="CarouselContentSlideEdit";function oe({hasInnerBlocks:e}){return e?le:ne}function ne(){return null}function le(){return(0,r.jsx)(_.InnerBlocks.Content,{})}const se={from:[],to:[]},re=[],ze={},Oe=null;(0,d.registerBlockType)($().name,{icon:M,deprecated:ee,edit:N,save:oe({hasInnerBlocks:!0}),transforms:se}),L(),re.forEach(e=>{(0,d.registerBlockVariation)($().name,e)})})(),j})());
