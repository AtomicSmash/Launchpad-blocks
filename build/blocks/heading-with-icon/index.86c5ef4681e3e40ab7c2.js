(function(C,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var S=x();for(var n in S)(typeof exports=="object"?exports:C)[n]=S[n]}})(globalThis,()=>(()=>{var I={7390(n){n.exports={apiVersion:3,name:"launchpad-blocks/heading-with-icon",title:"Heading with icon",category:"theme",description:"Select an icon to display inline with a heading",textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",style:"file:./style.scss",render:"file:./render.php",attributes:{iconName:{type:"string",role:"content"},library:{type:"string",role:"content"},size:{type:"string",default:"2rem"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},iconColour:{type:"string"}},providesContext:{},usesContext:[],example:{viewportWidth:280,attributes:{library:"launchpad-blocks",iconName:"heading-with-icon",size:"2rem",headerContent:"Heading"}},supports:{},styles:[{name:"default",label:"Default",isDefault:!0},{name:"t-1",label:"T1"},{name:"t-2",label:"T2"},{name:"t-3",label:"T3"},{name:"t-4",label:"T4"},{name:"t-5",label:"T5"},{name:"t-6",label:"T6"}]}}},C={};function x(n){var b=C[n];if(b!==void 0)return b.exports;var v=C[n]={exports:{}};return I[n](v,v.exports,x),v.exports}x.n=n=>{var b=n&&n.__esModule?()=>n.default:()=>n;return x.d(b,{a:b}),b},x.d=(n,b)=>{for(var v in b)x.o(b,v)&&!x.o(n,v)&&Object.defineProperty(n,v,{enumerable:!0,get:b[v]})},x.o=(n,b)=>Object.prototype.hasOwnProperty.call(n,b);var S={};return(()=>{"use strict";const n=window.ReactJSXRuntime,b=window.wp.blocks,v=window.React,J=(0,v.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:i,size:a,isEditorMode:r=!1,...l}=o;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,...l,children:(0,n.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${i}`})})}}});function H(e){return(0,n.jsx)(v.Suspense,{fallback:null,children:(0,n.jsx)(J,{...e})})}var K=x(7390),$=x.n(K);const X=[],k=window.wp.blockEditor,p=window.wp.components,Oe=window.wp.coreData,Le=window.wp.data,w=window.wp.i18n,f=window.wp.primitives,Q=(0,n.jsx)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(f.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})}),Y=(0,n.jsx)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(f.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})}),Z=(0,n.jsx)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(f.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),ee=(0,n.jsx)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(f.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})}),te=(0,n.jsx)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(f.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),ne=(0,n.jsx)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(f.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})});var y,B,h,D,z,oe,ie,ae,A,re,R,le,M,O,T,se,ce,L,j,N,V,de,ue,he;function E(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function qe(e,t,o){const i=t.spacing?.blockGap;let a="none";if(i===!0)a="both";else if(Array.isArray(i)){const l=i.includes("horizontal"),d=i.includes("vertical");l&&d?a="both":l?a="horizontal":d&&(a="vertical")}const r={columnGap:a==="both"||a==="horizontal"?E(o?.spacing?.blockGap,a):void 0,rowGap:a==="both"||a==="vertical"?E(o?.spacing?.blockGap,a):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function me(e,t){return e.reduce((o,i)=>{if(i.name===t)o.push(i);else if(i.innerBlocks){const a=me(i.innerBlocks,t);a&&o.push(...a)}return o},[])}const Je=()=>{const e=N(()=>({per_page:-1}),[]),t=N(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=N(()=>({}),[]),{postTypes:i,taxonomies:a}=T(m=>{const{getEntityRecords:s}=m(O),g=s("root","postType",e),c=s("root","taxonomy",t);if(!c)return{postTypes:g,taxonomies:c};for(const _ of c)o[_.slug]=s("taxonomy",_.slug);return{postTypes:g,taxonomies:c}},[e,t,o]),r=["attachment"],l=[],d=i?.filter(({viewable:m,slug:s})=>m&&!r.includes(s));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const m of d){const s=a?.filter(({types:g,slug:c})=>g.includes(m.slug)&&!l.includes(c));s&&(u[m.slug]=s.map(g=>{const c=o?.[g.slug]??null;return{...g,terms:c}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ke({list:e,containerClassName:t,renderItem:o}){return y(B,{children:[h("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),h("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(i=>o({listItem:i,buttonProps:{type:"button",className:`custom-multiple-select-list-item${i.isSelected?" is-selected":""}`}}))})]})}function pe(e){return e.indexOf("data:image/svg+xml,")===0}function ge(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function fe(e){return e.indexOf("dashicons-")===0}function be({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return h("div",{className:"menu-icon","aria-hidden":"true",children:h("br",{})});if(pe(e))return h("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:h("br",{})});if(ge(e))return h("img",{src:new URL(e).toString(),alt:""});if(fe(e)){const t=e.replace("dashicons-","");return h(ie,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Xe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Qe(){const[e,t,o,i]=D("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),a={};if(i&&o&&o.length>0)for(const r of o)a[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)a[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)a[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:a}}function ve({colours:e,attributesDefinition:t,attributes:o,setAttributes:i}){return(0,n.jsx)(p.__experimentalToolsPanel,{label:(0,w.__)("Custom colours","launchpad"),resetAll:a=>{if(a)for(const r of a)r()},children:(0,n.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(a=>(0,n.jsx)(xe,{colour:a,attributesDefinition:t,attributes:o,setAttributes:i},a.attributeName))})})}function xe({colour:e,attributesDefinition:t,attributes:o,setAttributes:i}){const[a,r,l,d,u]=(0,k.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==o[e.attributeName],s=()=>{i({[e.attributeName]:t[e.attributeName]?.default??void 0})},g=(0,v.useRef)(null);return(0,n.jsx)(p.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:s,hasValue:m,onDeselect:s,label:e.label,isShownByDefault:!0,children:(0,n.jsx)(p.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:_})=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p.Button,{ref:g,__next40pxDefaultSize:!0,onClick:_,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,n.jsx)(p.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,n.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,n.jsx)(p.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,n.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,n.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,n.jsx)(p.ColorPalette,{colors:[...a&&a?.length>0?[{name:"User",colors:a}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...d&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:o[e.attributeName],onChange:c=>{i({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function Ye({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:i}){const[a,r,l]=D("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=r?.map(({name:c,ratio:_})=>({label:c,value:_}))??[],u=a?.map(({name:c,ratio:_})=>({label:c,value:_}))??[],m=[{label:L("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?u:[],...d||[],{label:L("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[s,g]=V(m.map(c=>c.value).includes(e)?e:"custom");return y(B,{children:[h(ae,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:j("Aspect ratio","launchpad-blocks"),options:m,value:s,onChange:c=>{g(c),c!=="custom"&&t(c)}}),s==="custom"?h(A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:j("Custom aspect ratio","launchpad-blocks"),help:j("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&i!==void 0?y(re,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:j("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&i(c)},value:o,children:[h(R,{label:"Cover",value:"cover"}),h(R,{label:"Contain",value:"contain"})]}):null]})}const we=(e,t,o,i)=>{const{getBlocksByName:a,getBlockAttributes:r,getBlockParentsByBlockName:l}=se(z);return a(i).some(u=>{if(l(u,"core/template-part",!0).length)return!1;const{[o]:m}=r(u);return e!==u&&t===m})};function Ze(e,t,o,i,a){const{[t]:r}=e,l=de(u=>we(o,u,t,a),[o,t,a]);return ue(()=>{if(r===""){const u=o.slice(0,o.indexOf("-"));i({[t]:u})}if(l(r)){const u=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${u}`),i({[t]:u})}},[r,o,i,l,t]),N(()=>function({label:m,help:s,onValidChange:g,idAttribute:c}){const[_,Me]=V(c);return h(A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof s=="function"?s(!l(_)):s,value:_,onChange:P=>{Me(P),l(P)||g(P)}})},[l])}function _e({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return(0,n.jsx)(p.ToolbarDropdownMenu,{label:(0,w.__)("Change title heading element","launchpad-blocks"),icon:G(t),controls:e.map(i=>{{const a=i===t;return{icon:G(i),title:ke(i),isDisabled:a,onClick:()=>o(i)}}})})}function ke(e){switch(e){case"h2":return(0,w.__)("Heading 2","launchpad-blocks");case"h3":return(0,w.__)("Heading 3","launchpad-blocks");case"h4":return(0,w.__)("Heading 4","launchpad-blocks");case"h5":return(0,w.__)("Heading 5","launchpad-blocks");case"h6":return(0,w.__)("Heading 6","launchpad-blocks");case"p":return(0,w.__)("Paragraph","launchpad-blocks")}}function G(e){switch(e){case"h2":return Q;case"h3":return Y;case"h4":return Z;case"h5":return ee;case"h6":return te;case"p":return ne}}function et(e){const{hasChildren:t}=T(o=>{const{getBlocks:i}=o(z);return{hasChildren:i(e).length>0}},[e]);return t}function tt({clientId:e,blockInfo:t,variations:o,allowSkip:i}){const{replaceInnerBlocks:a,updateBlockAttributes:r}=ce(z);return y(le,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[h("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":j("Block variations"),children:o.map(l=>y("li",{children:[h(M,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?h(be,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&r(e,l.attributes),l.innerBlocks&&a(e,oe(l.innerBlocks),!1)}}),h("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),i&&h("div",{className:"block-editor-block-variation-picker__skip",children:h(M,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{a(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:j("Skip")})})]})}function nt({imageId:e,className:t="",size:o="full"}){const i=T(r=>typeof e=="number"&&e>0?r(O).getEntityRecord?.("postType","attachment",e):void 0,[e]);return i?h(B,{children:h("img",{...(()=>{const r={src:i.source_url,className:`attachment-${o} size-${o} ${t}`,width:i.media_details.width,height:i.media_details.height,srcSet:""};return i.media_details?.sizes?.[o]&&(r.src=i.media_details.sizes[o].source_url,r.width=i.media_details.sizes[o].width,r.height=i.media_details.sizes[o].height),r.srcSet=Object.entries(i.media_details.sizes??{}).map(([l,d])=>`${d.source_url} ${d.width}w`).join(", "),r})(),alt:i.alt_text||""})}):null}function je(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>je(o))):t.push([]),t}function ot(e){const t=he(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const a=e()?.scrollHeight??0;if(a){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${a}px !important`)}else t.current.style.minHeight=""}},1)}}const ye=window.wp.hooks,U=window.wp.element;function Ce({icon:e,size:t=24,...o},i){return(0,U.cloneElement)(e,{width:t,height:t,...o,ref:i})}const Se=(0,U.forwardRef)(Ce),Ne=(0,n.jsx)(f.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(f.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),Be=(0,n.jsx)(f.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(f.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),ze={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,w.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,w.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,w.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,w.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0},lightbox:{title:(0,w.__)("Lightbox","launchpad-blocks")}},Te={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,t)=>(0,n.jsx)(H,{iconName:e,isEditorMode:!0,...t}),availableIcons:Object.fromEntries(Object.entries(ze).filter(([e,t])=>t.makeAvailableToUser===!0))}};function W(){return(0,ye.applyFilters)("launchpadBlocks.icons",{...Te})}function Pe({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:t,onIconSelect:o,onReset:i}){const a=W(),[r,l]=(0,v.useState)("");return(0,n.jsxs)(p.Panel,{children:[(0,n.jsxs)(p.PanelHeader,{children:[e," ",i?(0,n.jsx)(p.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{i()},size:"small",children:"Reset"}):null]}),(0,n.jsxs)(p.PanelBody,{children:[(0,n.jsx)(p.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:r,onChange:d=>{l(d)}}),(0,n.jsx)("div",{children:Object.entries(a).map(([d,u])=>{if(Object.keys(u.availableIcons).length===0)return null;const m=Object.entries(u.availableIcons).filter(([s,{title:g}])=>!!(s.includes(r)||g.includes(r)));return(0,n.jsx)(Ie,{name:u.name,iconCount:m.length,children:(0,n.jsx)("div",{className:`icon-select ${d}-icon-select`,children:m.map(([s,{title:g}])=>{const c=t.iconName===s&&t.library===d;return(0,n.jsx)("button",{className:`icon-select-icon ${d}-icon-select-icon ${d}-icon-select-icon-${s}${c?" is-selected":""}`,onClick:()=>{o({iconName:s,library:d})},title:g,children:u.renderIcon(s)},s)})})},d)})})]})]})}function Ie({name:e,iconCount:t,children:o}){const[i,a]=(0,v.useState)(!1);return(0,v.useEffect)(()=>{t===0&&i&&a(!1)},[i,t]),(0,n.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,n.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,n.jsxs)(p.Button,{type:"button","aria-expanded":i,onClick:()=>{t>0&&a(!i)},disabled:t===0,className:"icon-select-group-accordion-header-button",children:[(0,n.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,n.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:t}),(0,n.jsx)(Se,{className:"icon-select-group-accordion-arrow",icon:i?Ne:Be})]})}),i?o:null]})}const F={iconName:{type:"string",role:"content"},library:{type:"string",role:"content"},size:{type:"string",default:"2rem"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},iconColour:{type:"string"}};function q({attributes:e,setAttributes:t}){const{headerElement:o,headerContent:i,iconName:a,library:r,size:l,iconColour:d}=e,u=(0,k.useBlockProps)({style:{"--icon-size":l,"--icon-colour":d}}),m=W();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.BlockControls,{children:(0,n.jsx)(p.ToolbarGroup,{children:(0,n.jsx)(_e,{levelOptions:F.headerElement.enum,selectedLevel:o,setSelectedHeadingLevel:s=>{t({headerElement:s})}})})}),(0,n.jsxs)(k.InspectorControls,{children:[(0,n.jsx)(p.Panel,{children:(0,n.jsx)(p.PanelBody,{children:(0,n.jsx)(p.__experimentalUnitControl,{__next40pxDefaultSize:!0,label:"Icon size",value:l,onChange:s=>{t({size:s})}})})}),(0,n.jsx)(Pe,{dataOnSelectedIcon:{iconName:a,library:r},onIconSelect:s=>{t({iconName:s.iconName,library:s.library})}})]}),(0,n.jsx)(k.InspectorControls,{group:"styles",children:(0,n.jsx)(ve,{colours:[{attributeName:"iconColour",label:"Icon"}],attributes:e,attributesDefinition:F,setAttributes:t})}),(0,n.jsxs)("div",{...u,children:[(0,n.jsx)("div",{className:"icon",children:m[r]?.renderIcon(a)}),(0,n.jsx)(k.RichText,{tagName:o,value:i,onChange:s=>{t({headerContent:s})},placeholder:"Heading"})]})]})}q.displayName="HeadingWithIconBlock";function He({hasInnerBlocks:e}){return e?De:$e}function $e(){return null}function De(){return(0,n.jsx)(k.InnerBlocks.Content,{})}const Ae={from:[],to:[]},Re=[],rt={},lt=null;(0,b.registerBlockType)($().name,{icon:(0,n.jsx)(H,{iconName:"heading-with-icon"}),deprecated:X,edit:q,save:He({hasInnerBlocks:!0}),transforms:Ae}),Re.forEach(e=>{(0,b.registerBlockVariation)($().name,e)})})(),S})());
