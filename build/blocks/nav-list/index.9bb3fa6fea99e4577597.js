(function(w,b){if(typeof exports=="object"&&typeof module=="object")module.exports=b();else if(typeof define=="function"&&define.amd)define([],b);else{var _=b();for(var a in _)(typeof exports=="object"?exports:w)[a]=_[a]}})(globalThis,()=>(()=>{var D={4781(a){a.exports={apiVersion:3,name:"launchpad-blocks/nav-list",title:"Nav list",category:"theme",description:"The collection of the actual menu items for your navigation.",allowedBlocks:["launchpad-blocks/nav-submenu","launchpad-blocks/nav-menu-item","launchpad-blocks/nav-links-group"],textdomain:"launchpad-blocks",keywords:["menu","links"],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{isNestedInAnotherNavLink:{type:"boolean",default:!1},ariaLabel:{type:"string",default:"Primary navigation"},linkOrientation:{type:"string",enum:["horizontal","vertical"],default:"horizontal"}},supports:{},example:{viewportWidth:400,attributes:{isNestedInAnotherNavLink:!1},innerBlocks:[{name:"launchpad-blocks/nav-submenu",attributes:{linkText:"Sub menu",isPreview:!0},innerBlocks:[{name:"launchpad-blocks/nav-list",attributes:{isNestedInAnotherNavLink:!0},innerBlocks:[]}]},{name:"launchpad-blocks/nav-submenu",attributes:{linkText:"Sub menu",isPreview:!0},innerBlocks:[{name:"launchpad-blocks/nav-list",attributes:{isNestedInAnotherNavLink:!0},innerBlocks:[]}]},{name:"launchpad-blocks/nav-menu-item",attributes:{linkText:"Menu link",linkHref:"#"}},{name:"launchpad-blocks/nav-menu-item",attributes:{linkText:"Menu link",linkHref:"#"}}]},providesContext:{},usesContext:["launchpad-blocks/isInSubMenu"]}}},w={};function b(a){var f=w[a];if(f!==void 0)return f.exports;var h=w[a]={exports:{}};return D[a](h,h.exports,b),h.exports}b.n=a=>{var f=a&&a.__esModule?()=>a.default:()=>a;return b.d(f,{a:f}),f},b.d=(a,f)=>{for(var h in f)b.o(f,h)&&!b.o(a,h)&&Object.defineProperty(a,h,{enumerable:!0,get:f[h]})},b.o=(a,f)=>Object.prototype.hasOwnProperty.call(a,f);var _={};return(()=>{"use strict";const a=window.ReactJSXRuntime,f=window.wp.blocks,h=window.wp.blockEditor,y=window.wp.components,Re=window.wp.coreData,q=window.wp.data,A=window.wp.i18n,C=window.React;var R;function Ie(e){return R("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:R("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function F(e){return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,a.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,a.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,a.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const J=(0,C.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:r,isEditorMode:l=!1,...i}=n;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...i,children:(0,a.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function U(e){return(0,a.jsx)(C.Suspense,{fallback:null,children:(0,a.jsx)(J,{...e})})}var k,j,s,N,S,X,Z,K,Q,Y,P,ee,te,ne,oe,I,le,M,re,ae,H,T,ie,se,v,L,ce,ue,de,pe,me,he,z,O,E,fe,ge;function ve(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:F})}function G(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Me(e,t,n){const o=t.spacing?.blockGap;let r="none";if(o===!0)r="both";else if(Array.isArray(o)){const i=o.includes("horizontal"),p=o.includes("vertical");i&&p?r="both":i?r="horizontal":p&&(r="vertical")}const l={columnGap:r==="both"||r==="horizontal"?G(n?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?G(n?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let i="";return e.minimumColumnWidth?i=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(i=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:i,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function be(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const r=be(o.innerBlocks,t);r&&n.push(...r)}return n},[])}const He=()=>{const e=z(()=>({per_page:-1}),[]),t=z(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=z(()=>({}),[]),{postTypes:o,taxonomies:r}=T(m=>{const{getEntityRecords:d}=m(H),g=d("root","postType",e),c=d("root","taxonomy",t);if(!c)return{postTypes:g,taxonomies:c};for(const x of c)n[x.slug]=d("taxonomy",x.slug);return{postTypes:g,taxonomies:c}},[e,t,n]),l=["attachment"],i=[],p=o?.filter(({viewable:m,slug:d})=>m&&!l.includes(d));if(!p||p.length===0)return{postTypes:p,taxonomies:void 0};const u={};for(const m of p){const d=r?.filter(({types:g,slug:c})=>g.includes(m.slug)&&!i.includes(c));d&&(u[m.slug]=d.map(g=>{const c=n?.[g.slug]??null;return{...g,terms:c}}))}return{filteredPostTypes:p,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Le({list:e,containerClassName:t,renderItem:n}){return k(j,{children:[s("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),s("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function xe(e){return e.indexOf("data:image/svg+xml,")===0}function ke(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function we(e){return e.indexOf("dashicons-")===0}function _e({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return s("div",{className:"menu-icon","aria-hidden":"true",children:s("br",{})});if(xe(e))return s("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:s("br",{})});if(ke(e))return s("img",{src:new URL(e).toString(),alt:""});if(we(e)){const t=e.replace("dashicons-","");return s(Z,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Oe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ee(){const[e,t,n,o]=N("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(o&&n&&n.length>0)for(const l of n)r[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)r[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)r[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:r}}function Ge({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return s(K,{label:v("Custom colours","launchpad"),resetAll:r=>{if(r)for(const l of r)l()},children:s("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>s(ye,{colour:r,attributesDefinition:t,attributes:n,setAttributes:o},r.attributeName))})})}function ye({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[r,l,i,p,u]=N("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==n[e.attributeName],d=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},g=O(null);return s(Q,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:m,onDeselect:d,label:e.label,isShownByDefault:!0,children:s(Y,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:x})=>s(j,{children:s(P,{ref:g,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:k("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[s(ee,{colorValue:n[e.attributeName]})," ",s("span",{children:e.label})]})})}),renderContent:()=>s(te,{paddingSize:"none",children:s("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:s("div",{className:"block-editor-color-gradient-control__panel",children:s(ne,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...p&&i&&i.length>0?[{name:"Default",colors:i}]:[]],value:n[e.attributeName],onChange:c=>{o({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function Ve({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[r,l,i]=N("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),p=l?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],u=r?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],m=[{label:L("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...i?u:[],...p||[],{label:L("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,g]=E(m.map(c=>c.value).includes(e)?e:"custom");return k(j,{children:[s(oe,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:v("Aspect ratio","launchpad-blocks"),options:m,value:d,onChange:c=>{g(c),c!=="custom"&&t(c)}}),d==="custom"?s(I,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:v("Custom aspect ratio","launchpad-blocks"),help:v("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?k(le,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:v("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&o(c)},value:n,children:[s(M,{label:"Cover",value:"cover"}),s(M,{label:"Contain",value:"contain"})]}):null]})}const Ce=(e,t,n,o)=>{const{getBlocksByName:r,getBlockAttributes:l,getBlockParentsByBlockName:i}=ie(S);return r(o).some(u=>{if(i(u,"core/template-part",!0).length)return!1;const{[n]:m}=l(u);return e!==u&&t===m})};function We(e,t,n,o,r){const{[t]:l}=e,i=fe(u=>Ce(n,u,t,r),[n,t,r]);return ge(()=>{if(l===""){const u=n.slice(0,n.indexOf("-"));o({[t]:u})}if(i(l)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${u}`),o({[t]:u})}},[l,n,o,i,t]),z(()=>function({label:m,help:d,onValidChange:g,idAttribute:c}){const[x,Ae]=E(c);return s(I,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof d=="function"?d(!i(x)):d,value:x,onChange:$=>{Ae($),i($)||g($)}})},[i])}function qe({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return s(re,{label:v("Change title heading element","launchpad-blocks"),icon:V(t),controls:e.map(o=>{{const r=o===t;return{icon:V(o),title:je(o),isDisabled:r,onClick:()=>n(o)}}})})}function je(e){switch(e){case"h2":return v("Heading 2","launchpad-blocks");case"h3":return v("Heading 3","launchpad-blocks");case"h4":return v("Heading 4","launchpad-blocks");case"h5":return v("Heading 5","launchpad-blocks");case"h6":return v("Heading 6","launchpad-blocks");case"p":return v("Paragraph","launchpad-blocks")}}function V(e){switch(e){case"h2":return ce;case"h3":return ue;case"h4":return de;case"h5":return pe;case"h6":return me;case"p":return he}}function Fe(e){const{hasChildren:t}=T(n=>{const{getBlocks:o}=n(S);return{hasChildren:o(e).length>0}},[e]);return t}function Je({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:r,updateBlockAttributes:l}=se(S);return k(ae,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[s("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":v("Block variations"),children:n.map(i=>k("li",{children:[s(P,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof i.icon=="string"?s(_e,{iconString:i.icon}):i.icon,iconSize:48,onClick:()=>{i.attributes&&l(e,i.attributes),i.innerBlocks&&r(e,X(i.innerBlocks),!1)}}),s("span",{className:"block-editor-block-variation-picker__variation-label",children:i.title})]},i.name))}),o&&s("div",{className:"block-editor-block-variation-picker__skip",children:s(P,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:v("Skip")})})]})}function Ue({imageId:e,className:t="",size:n="full"}){const o=T(l=>typeof e=="number"&&e>0?l(H).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?s(j,{children:s("img",{...(()=>{const l={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(l.src=o.media_details.sizes[n].source_url,l.width=o.media_details.sizes[n].width,l.height=o.media_details.sizes[n].height),l.srcSet=Object.entries(o.media_details.sizes??{}).map(([i,p])=>`${p.source_url} ${p.width}w`).join(", "),l})(),alt:o.alt_text||""})}):null}function ze(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>ze(n))):t.push([]),t}function Xe(e){const t=O(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var Be=b(4781),Ne=b.n(Be);const B=window.wp.primitives,Se=(0,a.jsx)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(B.Path,{fillRule:"evenodd",d:"M5 11.25h3v1.5H5v-1.5zm5.5 0h3v1.5h-3v-1.5zm8.5 0h-3v1.5h3v-1.5z",clipRule:"evenodd"})}),Pe=(0,a.jsx)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(B.Path,{d:"M4 12.8h16v-1.5H4v1.5zm0 7h12.4v-1.5H4v1.5zM4 4.3v1.5h16V4.3H4z"})});function W({clientId:e,attributes:{isNestedInAnotherNavLink:t,ariaLabel:n,linkOrientation:o},context:{"launchpad-blocks/isInSubMenu":r},setAttributes:l}){const i=(0,q.useSelect)(d=>{const{getBlockParentsByBlockName:g}=d(h.store);return g(e,"launchpad-blocks/nav-list").length>0},[e]),p=(0,h.useBlockProps)({"data-navigation-nav-list":!0,className:o==="horizontal"?"is-horizontal":"is-vertical"}),u=(0,h.useInnerBlocksProps)({className:"navigation-nav-list"},{orientation:i?"vertical":"horizontal",templateLock:!1,renderAppender:r?void 0:h.InnerBlocks.ButtonBlockAppender});(0,C.useEffect)(()=>{t!==i&&l({isNestedInAnotherNavLink:i})},[e,t,i,l]),(0,C.useEffect)(()=>{r&&o!=="vertical"&&l({linkOrientation:"vertical"})},[e,r,o,l]);const m=i?"div":"nav";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.BlockControls,{children:r?null:(0,a.jsxs)(y.ToolbarGroup,{children:[(0,a.jsx)(y.ToolbarButton,{icon:Se,label:(0,A.__)("Align links horizontally","launchpad-blocks"),isPressed:o==="horizontal",onClick:()=>{l({linkOrientation:"horizontal"})}}),(0,a.jsx)(y.ToolbarButton,{icon:Pe,label:(0,A.__)("Align links vertically","launchpad-blocks"),isPressed:o==="vertical",onClick:()=>{l({linkOrientation:"vertical"})}})]})}),(0,a.jsx)(h.InspectorAdvancedControls,{children:(0,a.jsx)(y.TextControl,{label:"Screen reader label",help:"Define how this navigation block will be described for users who can't see.",value:n,onChange:d=>{l({ariaLabel:d})}})}),(0,a.jsx)(m,{...p,children:(0,a.jsx)("ul",{...u})})]})}W.displayName="NavListEdit";function Te({hasInnerBlocks:e}){return e?De:$e}function $e(){return null}function De(){return(0,a.jsx)(h.InnerBlocks.Content,{})}(0,f.registerBlockType)(Ne().name,{icon:(0,a.jsx)(U,{iconName:"nav-list"}),edit:W,save:Te({hasInnerBlocks:!0})}),ve()})(),_})());
