(function(E,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var z=v();for(var c in z)(typeof exports=="object"?exports:E)[c]=z[c]}})(globalThis,()=>(()=>{var H={5656(c){c.exports={apiVersion:3,name:"launchpad-blocks/carousel-content-slides",title:"Carousel content slides",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel"],editorScript:"file:./index.tsx",style:"file:./style.scss",render:"file:./render.php",attributes:{template:{type:"array",default:[{name:"launchpad-blocks/carousel-content-slide",innerBlocks:[{name:"launchpad-blocks/carousel-content-slide-content",innerBlocks:[{name:"core/heading",attributes:{placeholder:"Your template"},innerBlocks:[]},{name:"core/paragraph",attributes:{placeholder:'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.'},innerBlocks:[]}]}]}]},tempInnerBlocksStorage:{type:"array",default:[]},shouldLockChildSlidesToTemplate:{type:"boolean",default:!1},hasDismissedVariationsSelector:{type:"boolean",default:!1},isInTemplateEditMode:{type:"boolean",default:!1},aspectRatio:{type:"string",default:"auto"}},providesContext:{"launchpad-blocks/template":"template","launchpad-blocks/isInTemplateEditMode":"isInTemplateEditMode","launchpad-blocks/shouldLockChildSlidesToTemplate":"shouldLockChildSlidesToTemplate"},usesContext:[],supports:{color:{link:!0}}}}},E={};function v(c){var g=E[c];if(g!==void 0)return g.exports;var o=E[c]={exports:{}};return H[c](o,o.exports,v),o.exports}v.n=c=>{var g=c&&c.__esModule?()=>c.default:()=>c;return v.d(g,{a:g}),g},v.d=(c,g)=>{for(var o in g)v.o(g,o)&&!v.o(c,o)&&Object.defineProperty(c,o,{enumerable:!0,get:g[o]})},v.o=(c,g)=>Object.prototype.hasOwnProperty.call(c,g);var z={};return(()=>{"use strict";const c=window.wp.blocks,g=window.wp.primitives,o=window.ReactJSXRuntime,se=(0,o.jsx)(g.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(g.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})}),w=window.wp.blockEditor,m=window.wp.components,st=window.wp.coreData,B=window.wp.data,_=window.wp.i18n,C=window.React;var W;function rt(e){return W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:W("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function re(e){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,o.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,o.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,o.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const le=(0,C.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:s,size:l,isEditorMode:r=!1,...a}=n;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...a,children:(0,o.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${s}`})})}}});function ae(e){return(0,o.jsx)(C.Suspense,{fallback:null,children:(0,o.jsx)(le,{...e})})}var F,N,h,G,V,ie,ce,de,ue,pe,me,he,ge,fe,q,I,be,y,ve,xe,ke,we,_e,ye,$,U,Ce,je,Be;function Se(){(0,c.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:re})}function X(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function lt(e,t,n){const s=t.spacing?.blockGap;let l="none";if(s===!0)l="both";else if(Array.isArray(s)){const a=s.includes("horizontal"),d=s.includes("vertical");a&&d?l="both":a?l="horizontal":d&&(l="vertical")}const r={columnGap:l==="both"||l==="horizontal"?X(n?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?X(n?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function Te(e,t){return e.reduce((n,s)=>{if(s.name===t)n.push(s);else if(s.innerBlocks){const l=Te(s.innerBlocks,t);l&&n.push(...l)}return n},[])}const at=()=>{const e=$(()=>({per_page:-1}),[]),t=$(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=$(()=>({}),[]),{postTypes:s,taxonomies:l}=I(f=>{const{getEntityRecords:p}=f(q),b=p("root","postType",e),i=p("root","taxonomy",t);if(!i)return{postTypes:b,taxonomies:i};for(const x of i)n[x.slug]=p("taxonomy",x.slug);return{postTypes:b,taxonomies:i}},[e,t,n]),r=["attachment"],a=[],d=s?.filter(({viewable:f,slug:p})=>f&&!r.includes(p));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const f of d){const p=l?.filter(({types:b,slug:i})=>b.includes(f.slug)&&!a.includes(i));p&&(u[f.slug]=p.map(b=>{const i=n?.[b.slug]??null;return{...b,terms:i}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function it({list:e,containerClassName:t,renderItem:n}){return F(N,{children:[h("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),h("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(s=>n({listItem:s,buttonProps:{type:"button",className:`custom-multiple-select-list-item${s.isSelected?" is-selected":""}`}}))})]})}function Pe(e){return e.indexOf("data:image/svg+xml,")===0}function Ee(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function ze(e){return e.indexOf("dashicons-")===0}function $e({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return(0,o.jsx)("div",{className:"menu-icon","aria-hidden":"true",children:(0,o.jsx)("br",{})});if(Pe(e))return(0,o.jsx)("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:(0,o.jsx)("br",{})});if(Ee(e))return(0,o.jsx)("img",{src:new URL(e).toString(),alt:""});if(ze(e)){const t=e.replace("dashicons-","");return(0,o.jsx)(m.Dashicon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ct={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function dt(){const[e,t,n,s]=G("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(s&&n&&n.length>0)for(const r of n)l[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)l[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)l[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:l}}function ut({colours:e,attributesDefinition:t,attributes:n,setAttributes:s}){return h(ie,{label:y("Custom colours","launchpad"),resetAll:l=>{if(l)for(const r of l)r()},children:h("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>h(Me,{colour:l,attributesDefinition:t,attributes:n,setAttributes:s},l.attributeName))})})}function Me({colour:e,attributesDefinition:t,attributes:n,setAttributes:s}){const[l,r,a,d,u]=G("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),f=()=>t[e.attributeName]?.default!==n[e.attributeName],p=()=>{s({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=U(null);return h(ce,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:f,onDeselect:p,label:e.label,isShownByDefault:!0,children:h(de,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:x})=>h(N,{children:h(ue,{ref:b,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:F("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[h(pe,{colorValue:n[e.attributeName]})," ",h("span",{children:e.label})]})})}),renderContent:()=>h(me,{paddingSize:"none",children:h("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:h("div",{className:"block-editor-color-gradient-control__panel",children:h(he,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...d&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:n[e.attributeName],onChange:i=>{s({[e.attributeName]:i})},disableCustomColors:!u})})})})})},e.attributeName)}function Ne({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:s}){const[l,r,a]=(0,w.useSettings)("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=r?.map(({name:i,ratio:x})=>({label:i,value:x}))??[],u=l?.map(({name:i,ratio:x})=>({label:i,value:x}))??[],f=[{label:(0,_._x)("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?u:[],...d||[],{label:(0,_._x)("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,b]=(0,C.useState)(f.map(i=>i.value).includes(e)?e:"custom");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,_.__)("Aspect ratio","launchpad-blocks"),options:f,value:p,onChange:i=>{b(i),i!=="custom"&&t(i)}}),p==="custom"?(0,o.jsx)(m.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,_.__)("Custom aspect ratio","launchpad-blocks"),help:(0,_.__)("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&s!==void 0?(0,o.jsxs)(m.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:(0,_.__)("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&s(i)},value:n,children:[(0,o.jsx)(m.__experimentalToggleGroupControlOption,{label:"Cover",value:"cover"}),(0,o.jsx)(m.__experimentalToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const Ie=(e,t,n,s)=>{const{getBlocksByName:l,getBlockAttributes:r,getBlockParentsByBlockName:a}=be(V);return l(s).some(u=>{if(a(u,"core/template-part",!0).length)return!1;const{[n]:f}=r(u);return e!==u&&t===f})};function pt(e,t,n,s,l){const{[t]:r}=e,a=Ce(u=>Ie(n,u,t,l),[n,t,l]);return je(()=>{if(r===""){const u=n.slice(0,n.indexOf("-"));s({[t]:u})}if(a(r)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${u}`),s({[t]:u})}},[r,n,s,a,t]),$(()=>function({label:f,help:p,onValidChange:b,idAttribute:i}){const[x,R]=Be(i);return h(ge,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:f,help:typeof p=="function"?p(!a(x)):p,value:x,onChange:T=>{R(T),a(T)||b(T)}})},[a])}function mt({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return h(fe,{label:y("Change title heading element","launchpad-blocks"),icon:Z(t),controls:e.map(s=>{{const l=s===t;return{icon:Z(s),title:De(s),isDisabled:l,onClick:()=>n(s)}}})})}function De(e){switch(e){case"h2":return y("Heading 2","launchpad-blocks");case"h3":return y("Heading 3","launchpad-blocks");case"h4":return y("Heading 4","launchpad-blocks");case"h5":return y("Heading 5","launchpad-blocks");case"h6":return y("Heading 6","launchpad-blocks");case"p":return y("Paragraph","launchpad-blocks")}}function Z(e){switch(e){case"h2":return ve;case"h3":return xe;case"h4":return ke;case"h5":return we;case"h6":return _e;case"p":return ye}}function ht(e){const{hasChildren:t}=I(n=>{const{getBlocks:s}=n(V);return{hasChildren:s(e).length>0}},[e]);return t}function Re({clientId:e,blockInfo:t,variations:n,allowSkip:s}){const{replaceInnerBlocks:l,updateBlockAttributes:r}=(0,B.useDispatch)(w.store);return(0,o.jsxs)(m.Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[(0,o.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,_.__)("Block variations"),children:n.map(a=>(0,o.jsxs)("li",{children:[(0,o.jsx)(m.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?(0,o.jsx)($e,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&r(e,a.attributes),a.innerBlocks&&l(e,(0,c.createBlocksFromInnerBlocksTemplate)(a.innerBlocks),!1)}}),(0,o.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),s&&(0,o.jsx)("div",{className:"block-editor-block-variation-picker__skip",children:(0,o.jsx)(m.Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:(0,_.__)("Skip")})})]})}function gt({imageId:e,className:t="",size:n="full"}){const s=I(r=>typeof e=="number"&&e>0?r(q).getEntityRecord?.("postType","attachment",e):void 0,[e]);return s?h(N,{children:h("img",{...(()=>{const r={src:s.source_url,className:`attachment-${n} size-${n} ${t}`,width:s.media_details.width,height:s.media_details.height,srcSet:""};return s.media_details?.sizes?.[n]&&(r.src=s.media_details.sizes[n].source_url,r.width=s.media_details.sizes[n].width,r.height=s.media_details.sizes[n].height),r.srcSet=Object.entries(s.media_details.sizes??{}).map(([a,d])=>`${d.source_url} ${d.width}w`).join(", "),r})(),alt:s.alt_text||""})}):null}function M(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>M(n))):t.push([]),t}function ft(e){const t=U(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}var Ae=v(5656),S=v.n(Ae);const Oe=[],Le=window.wp.editor,D=window.wp.hooks,He=window.wp.notices;function bt(e){if(e===void 0)throw new Error(`Pixel value ${e} is undefined`);if(!e.endsWith("px"))throw new Error(`Pixel value ${e} is not a pixel value`);if(e.includes(" "))throw new Error(`Pixel value ${e} contains multiple values`);return Number(e.replace("px",""))}function vt(e){let t="";const n=document.createElement("div");return n.innerHTML=e,t=n.innerText,We(t)}function We(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|(?<!-)-+$/g,"")}function Fe(e,t=()=>!0){const n=e.parentElement;return n===null?null:t(n)?n:Fe(n,t)}function xt(e){if(new RegExp("ms$","ig").test(e))return Number(e.substring(0,e.length-2));if(new RegExp("s$","ig").test(e))return Number(e.substring(0,e.length-1))*1e3;throw new Error("Time didn't end with ms or s so was not correctly parsed.")}function kt(){if(typeof document>"u")return"unknown";const e=window.navigator.userAgent;let t="unknown";return e.search("Windows")!==-1?t="Windows":e.search("Mac")!==-1?t="MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?t="UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1&&(t="Linux"),t}function Y(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!Object.entries(e[n]).every(([l,r])=>Array.isArray(r)?Y(r,t[n]?.[l]):t[n]?.[l]===r))return!1;return!0}const J=[{name:"heading-and-paragraph",title:"Heading and paragraph",icon:(0,o.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(g.Path,{d:"m4 5.5h2v6.5h1.5v-6.5h2v-1.5h-5.5zm16 10.5h-16v-1.5h16zm-7 4h-9v-1.5h9z"})}),scope:["block"],innerBlocks:[["launchpad-blocks/carousel-content-slide",{},[["launchpad-blocks/carousel-content-slide-content",{},[["core/heading",{placeholder:"Your template"}],["core/paragraph",{placeholder:'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.'}]]]]]]}];function K({clientId:e,attributes:t,setAttributes:n}){const{template:s,shouldLockChildSlidesToTemplate:l,hasDismissedVariationsSelector:r,tempInnerBlocksStorage:a,isInTemplateEditMode:d,aspectRatio:u}=t,[f,p]=(0,C.useState)(!1),{lockPostSaving:b,lockPostAutosaving:i,unlockPostSaving:x,unlockPostAutosaving:R}=(0,B.useDispatch)(Le.store),{createNotice:T,removeNotice:Xe}=(0,B.useDispatch)(He.store),{replaceInnerBlocks:A,updateBlockAttributes:Q}=(0,B.useDispatch)(w.store),{hasChildren:Ze,innerBlocks:ee,parentCarousel:O}=(0,B.useSelect)(k=>{const{getBlock:j,getBlocks:Qe,getBlockParentsByBlockName:et}=k(w.store),tt=et(e,["launchpad-blocks/carousel"])[0],nt=j(tt),oe=Qe(e);return{hasChildren:oe.length>0,innerBlocks:oe,parentCarousel:nt}},[e]),Ye=(0,w.useBlockProps)({className:u!=="auto"?"has-aspect-ratio":"",style:{"--slide-aspect-ratio":u}}),{children:Je,...te}=(0,w.useInnerBlocksProps)(Ye,{allowedBlocks:["launchpad-blocks/carousel-content-slide"],renderAppender:d&&ee.length>0?()=>null:void 0});function Ke(){b(`templateEditingMode-${e}`),i(`templateEditingMode-${e}`),T("info",`Currently editing the template of the ${S().title}. Save the template using the sidebar block settings of the ${S().title} block to save the content.`,{id:"template-editing-mode",isDismissible:!1}).catch(()=>{})}function ne(){x(`templateEditingMode-${e}`),R(`templateEditingMode-${e}`),Xe("template-editing-mode").catch(()=>{})}(0,C.useEffect)(()=>{d?(0,D.addFilter)("editor.preSavePost","launchpadBlocks/carouselContentSlides/preventSaveInEditMode",()=>{throw new Error("You can't save the post while you're still editing the carousel template. Please save or discard the template first.")}):(0,D.hasFilter)("editor.preSavePost","launchpadBlocks/carouselContentSlides/preventSaveInEditMode")&&(0,D.removeFilter)("editor.preSavePost","launchpadBlocks/carouselContentSlides/preventSaveInEditMode")},[d]);const L=(0,C.useCallback)(k=>k.map(j=>({name:j.name,attributes:j.attributes,innerBlocks:j.innerBlocks?L(j.innerBlocks):[]})),[]),P=L(ee);return(0,C.useEffect)(()=>{Y(O.attributes?.slides,P)||Q(O.clientId,{slides:P})},[P,O,Q,L]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w.InspectorControls,{children:(0,o.jsx)(m.Panel,{children:(0,o.jsxs)(m.PanelBody,{title:"Template settings",children:[(0,o.jsx)(Ne,{ratioValue:u,ratioOnChange:k=>{n({aspectRatio:k})}}),(0,o.jsx)(m.ToggleControl,{__nextHasNoMarginBottom:!0,checked:l,label:"Lock slides to template",onChange:k=>{n({shouldLockChildSlidesToTemplate:k})}}),d?(0,o.jsxs)(m.Flex,{children:[(0,o.jsx)(m.FlexItem,{children:(0,o.jsx)(m.Button,{type:"button",variant:"secondary",isDestructive:!0,onClick:()=>{console.log({tempInnerBlocksStorage:a}),A(e,(0,c.createBlocksFromInnerBlocksTemplate)(a.map(k=>M(k)))),n({isInTemplateEditMode:!1}),ne()},children:"Discard changes"})}),(0,o.jsx)(m.FlexItem,{children:(0,o.jsx)(m.Button,{type:"button",variant:"primary",onClick:()=>{n({template:P}),A(e,(0,c.createBlocksFromInnerBlocksTemplate)(a.map(k=>M(k)))),n({isInTemplateEditMode:!1}),ne()},children:"Save template"})})]}):(0,o.jsx)(m.Button,{type:"button",variant:"primary",isDestructive:!0,onClick:()=>{p(!0)},children:"Edit template"})]})})}),(0,o.jsxs)(m.__experimentalConfirmDialog,{isOpen:f,cancelButtonText:"No thank you",confirmButtonText:"Yes please",onConfirm:()=>{p(!1),Ke(),n({tempInnerBlocksStorage:P}),A(e,(0,c.createBlocksFromInnerBlocksTemplate)(s.map(k=>M(k)))),n({isInTemplateEditMode:!0})},onCancel:()=>{p(!1)},children:["WARNING: Editing the template may result in loss of content on the existing slides.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"If you need to keep the content, you can duplicate or copy this block before ",(0,o.jsx)("br",{}),"you make any changes to ensure you don't lose any content,",(0,o.jsx)("br",{}),"then you can copy content over once you have your new template set up.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("strong",{children:"Are you sure you want to proceed?"})]}),Ze||r||!d?(0,o.jsx)("ul",{...te,children:Je}):(0,o.jsx)("div",{...te,children:(0,o.jsx)(Re,{clientId:e,blockInfo:{name:S().title,icon:(0,o.jsx)(ae,{isEditorMode:!0,iconName:"manual-post-select"})},variations:J,allowSkip:!0})})]})}K.displayName="CarouselContentSlidesEdit";function Ge({hasInnerBlocks:e}){return e?qe:Ve}function Ve(){return null}function qe(){return(0,o.jsx)(w.InnerBlocks.Content,{})}const Ue={from:[],to:[]},yt={"launchpad-blocks/template":"template","launchpad-blocks/isInTemplateEditMode":"isInTemplateEditMode","launchpad-blocks/shouldLockChildSlidesToTemplate":"shouldLockChildSlidesToTemplate"},Ct=null;(0,c.registerBlockType)(S().name,{icon:se,deprecated:Oe,edit:K,save:Ge({hasInnerBlocks:!0}),transforms:Ue}),Se(),J.forEach(e=>{(0,c.registerBlockVariation)(S().name,e)})})(),z})());
