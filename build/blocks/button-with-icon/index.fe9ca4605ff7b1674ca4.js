(function(z,w){if(typeof exports=="object"&&typeof module=="object")module.exports=w();else if(typeof define=="function"&&define.amd)define([],w);else{var B=w();for(var o in B)(typeof exports=="object"?exports:z)[o]=B[o]}})(globalThis,()=>(()=>{var M={1688(o){o.exports={apiVersion:3,name:"launchpad-blocks/button-with-icon",title:"Button with icon",ancestor:["core/buttons"],category:"theme",description:"A button with selectable icon",textdomain:"launchpad-blocks",keywords:["button","link","icon"],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",styles:[{name:"fill",label:"Fill",isDefault:!0},{name:"outline",label:"Outline"}],attributes:{iconName:{type:"string",role:"content"},library:{type:"string",role:"content"},size:{type:"string",default:"1rem"},iconPosition:{type:"string",enum:["start","end"],default:"start"},linkId:{type:"number"},linkKind:{type:"string"},linkType:{type:"string"},linkHref:{type:"string"},linkTarget:{type:"string",enum:["_self","_blank"],default:"_self"},linkText:{type:"string"},anchor:{type:"string"}},providesContext:{},usesContext:[],example:{attributes:{library:"launchpad-blocks",iconName:"button-with-icon",size:"1rem",iconPosition:"start",linkText:"button"}},supports:{anchor:!0,splitting:!0}}}},z={};function w(o){var f=z[o];if(f!==void 0)return f.exports;var b=z[o]={exports:{}};return M[o](b,b.exports,w),b.exports}w.n=o=>{var f=o&&o.__esModule?()=>o.default:()=>o;return w.d(f,{a:f}),f},w.d=(o,f)=>{for(var b in f)w.o(f,b)&&!w.o(o,b)&&Object.defineProperty(o,b,{enumerable:!0,get:f[b]})},w.o=(o,f)=>Object.prototype.hasOwnProperty.call(o,f);var B={};return(()=>{"use strict";const o=window.ReactJSXRuntime,f=window.wp.blocks,b=window.wp.blockEditor,v=window.wp.components,Ye=window.wp.coreData,et=window.wp.data,y=window.wp.i18n,j=window.React;var D;function tt(e){return D("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:D("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function Q(e){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,o.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,o.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,o.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const Y=(0,j.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(i){const{iconName:n,size:l,isEditorMode:r=!1,...a}=i;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...a,children:(0,o.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function L(e){return(0,o.jsx)(j.Suspense,{fallback:null,children:(0,o.jsx)(Y,{...e})})}var T,N,s,I,A,ee,te,ne,oe,ie,$,le,re,ae,se,R,ce,O,ue,de,E,H,pe,me,x,V,he,fe,ge,be,ve,xe,P,G,U,we,ke;function _e(){(0,f.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:Q})}function W(e,t){if(e===void 0)return e;let i;if(t==="both")i=e;else if(t==="horizontal")i=e.left;else if(t==="vertical")i=e.top;else return;return i.startsWith("var:")?`var(--wp--${i.replace("var:","").split("|").join("--")})`:i}function nt(e,t,i){const n=t.spacing?.blockGap;let l="none";if(n===!0)l="both";else if(Array.isArray(n)){const a=n.includes("horizontal"),u=n.includes("vertical");a&&u?l="both":a?l="horizontal":u&&(l="vertical")}const r={columnGap:l==="both"||l==="horizontal"?W(i?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?W(i?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function ye(e,t){return e.reduce((i,n)=>{if(n.name===t)i.push(n);else if(n.innerBlocks){const l=ye(n.innerBlocks,t);l&&i.push(...l)}return i},[])}const ot=()=>{const e=P(()=>({per_page:-1}),[]),t=P(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),i=P(()=>({}),[]),{postTypes:n,taxonomies:l}=H(m=>{const{getEntityRecords:d}=m(E),h=d("root","postType",e),c=d("root","taxonomy",t);if(!c)return{postTypes:h,taxonomies:c};for(const g of c)i[g.slug]=d("taxonomy",g.slug);return{postTypes:h,taxonomies:c}},[e,t,i]),r=["attachment"],a=[],u=n?.filter(({viewable:m,slug:d})=>m&&!r.includes(d));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const p={};for(const m of u){const d=l?.filter(({types:h,slug:c})=>h.includes(m.slug)&&!a.includes(c));d&&(p[m.slug]=d.map(h=>{const c=i?.[h.slug]??null;return{...h,terms:c}}))}return{filteredPostTypes:u,mappedTaxonomies:p===void 0||Object.values(p).length===0?void 0:p}};function it({list:e,containerClassName:t,renderItem:i}){return T(N,{children:[s("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),s("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>i({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function je(e){return e.indexOf("data:image/svg+xml,")===0}function Ce(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function Te(e){return e.indexOf("dashicons-")===0}function Se({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return s("div",{className:"menu-icon","aria-hidden":"true",children:s("br",{})});if(je(e))return s("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:s("br",{})});if(Ce(e))return s("img",{src:new URL(e).toString(),alt:""});if(Te(e)){const t=e.replace("dashicons-","");return s(te,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const lt={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function rt(){const[e,t,i,n]=I("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(n&&i&&i.length>0)for(const r of i)l[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)l[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)l[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:i,allPalettes:l}}function at({colours:e,attributesDefinition:t,attributes:i,setAttributes:n}){return s(ne,{label:x("Custom colours","launchpad"),resetAll:l=>{if(l)for(const r of l)r()},children:s("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>s(ze,{colour:l,attributesDefinition:t,attributes:i,setAttributes:n},l.attributeName))})})}function ze({colour:e,attributesDefinition:t,attributes:i,setAttributes:n}){const[l,r,a,u,p]=I("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==i[e.attributeName],d=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},h=G(null);return s(oe,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:m,onDeselect:d,label:e.label,isShownByDefault:!0,children:s(ie,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:g})=>s(N,{children:s($,{ref:h,__next40pxDefaultSize:!0,onClick:g,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:T("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[s(le,{colorValue:i[e.attributeName]})," ",s("span",{children:e.label})]})})}),renderContent:()=>s(re,{paddingSize:"none",children:s("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:s("div",{className:"block-editor-color-gradient-control__panel",children:s(ae,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...u&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:i[e.attributeName],onChange:c=>{n({[e.attributeName]:c})},disableCustomColors:!p})})})})})},e.attributeName)}function st({ratioValue:e,ratioOnChange:t,imageFitValue:i,imageFitOnChange:n}){const[l,r,a]=I("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=r?.map(({name:c,ratio:g})=>({label:c,value:g}))??[],p=l?.map(({name:c,ratio:g})=>({label:c,value:g}))??[],m=[{label:V("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?p:[],...u||[],{label:V("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,h]=U(m.map(c=>c.value).includes(e)?e:"custom");return T(N,{children:[s(se,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:x("Aspect ratio","launchpad-blocks"),options:m,value:d,onChange:c=>{h(c),c!=="custom"&&t(c)}}),d==="custom"?s(R,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:x("Custom aspect ratio","launchpad-blocks"),help:x("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?T(ce,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:x("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&n(c)},value:i,children:[s(O,{label:"Cover",value:"cover"}),s(O,{label:"Contain",value:"contain"})]}):null]})}const Be=(e,t,i,n)=>{const{getBlocksByName:l,getBlockAttributes:r,getBlockParentsByBlockName:a}=pe(A);return l(n).some(p=>{if(a(p,"core/template-part",!0).length)return!1;const{[i]:m}=r(p);return e!==p&&t===m})};function ct(e,t,i,n,l){const{[t]:r}=e,a=we(p=>Be(i,p,t,l),[i,t,l]);return ke(()=>{if(r===""){const p=i.slice(0,i.indexOf("-"));n({[t]:p})}if(a(r)){const p=i.slice(0,i.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${p}`),n({[t]:p})}},[r,i,n,a,t]),P(()=>function({label:m,help:d,onValidChange:h,idAttribute:c}){const[g,S]=U(c);return s(R,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof d=="function"?d(!a(g)):d,value:g,onChange:C=>{S(C),a(C)||h(C)}})},[a])}function ut({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:i}){return s(ue,{label:x("Change title heading element","launchpad-blocks"),icon:F(t),controls:e.map(n=>{{const l=n===t;return{icon:F(n),title:Ne(n),isDisabled:l,onClick:()=>i(n)}}})})}function Ne(e){switch(e){case"h2":return x("Heading 2","launchpad-blocks");case"h3":return x("Heading 3","launchpad-blocks");case"h4":return x("Heading 4","launchpad-blocks");case"h5":return x("Heading 5","launchpad-blocks");case"h6":return x("Heading 6","launchpad-blocks");case"p":return x("Paragraph","launchpad-blocks")}}function F(e){switch(e){case"h2":return he;case"h3":return fe;case"h4":return ge;case"h5":return be;case"h6":return ve;case"p":return xe}}function dt(e){const{hasChildren:t}=H(i=>{const{getBlocks:n}=i(A);return{hasChildren:n(e).length>0}},[e]);return t}function pt({clientId:e,blockInfo:t,variations:i,allowSkip:n}){const{replaceInnerBlocks:l,updateBlockAttributes:r}=me(A);return T(de,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[s("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":x("Block variations"),children:i.map(a=>T("li",{children:[s($,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?s(Se,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&r(e,a.attributes),a.innerBlocks&&l(e,ee(a.innerBlocks),!1)}}),s("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),n&&s("div",{className:"block-editor-block-variation-picker__skip",children:s($,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:x("Skip")})})]})}function mt({imageId:e,className:t="",size:i="full"}){const n=H(r=>typeof e=="number"&&e>0?r(E).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?s(N,{children:s("img",{...(()=>{const r={src:n.source_url,className:`attachment-${i} size-${i} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[i]&&(r.src=n.media_details.sizes[i].source_url,r.width=n.media_details.sizes[i].width,r.height=n.media_details.sizes[i].height),r.srcSet=Object.entries(n.media_details.sizes??{}).map(([a,u])=>`${u.source_url} ${u.width}w`).join(", "),r})(),alt:n.alt_text||""})}):null}function Pe(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(i=>Pe(i))):t.push([]),t}function ht(e){const t=G(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}var Ie=w(1688),q=w.n(Ie);const Ae=[],_=window.wp.primitives,$e=(0,o.jsx)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(_.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),He=(0,o.jsx)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(_.Path,{d:"M4 18h6V6H4v12zm9-9.5V10h7V8.5h-7zm0 7h7V14h-7v1.5z"})}),Me=(0,o.jsx)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(_.Path,{d:"M14 6v12h6V6h-6zM4 10h7V8.5H4V10zm0 5.5h7V14H4v1.5z"})}),De=window.wp.hooks,K=window.wp.element;function Le({icon:e,size:t=24,...i},n){return(0,K.cloneElement)(e,{width:t,height:t,...i,ref:n})}const Re=(0,K.forwardRef)(Le),Oe=(0,o.jsx)(_.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(_.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),Ee=(0,o.jsx)(_.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(_.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),Ve={"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},accordion:{title:"Accordion"},"back-arrow":{title:"Back Arrow"},"banner-zone":{title:"Banner zone"},"break-image-out":{title:"Break image out of container"},"button-with-icon":{title:"Button with Icon"},carousel:{title:"Carousel"},"carousel-navigation-arrows":{title:"Carousel navigation arrows"},"carousel-thumbnails":{title:"Carousel thumbnails"},"carousel-slides":{title:"Carousel slides"},"carousel-with-thumbnails":{title:"Carousel with thumbnails"},"gallery-carousel":{title:"Gallery carousel"},"gallery-carousel-lightbox":{title:"Lightbox"},"heading-with-icon":{title:"Heading with icon"},icon:{title:"Icon"},information:{title:"Information"},list:{title:"List"},"list-item":{title:"List item"},"media-and-text-heading-and-text":{title:"Heading and text"},"media-and-text-heading-text-buttons":{title:"Heading, text and button"},"media-and-text-intro-heading-and-text":{title:"Intro, heading and text"},"media-and-text-intro-heading-text-buttons":{title:"Intro, heading, text and button"},"media-and-text-just-text":{title:"Text"},navigation:{title:"Navigation"},"nav-list":{title:"Nav list"},"nav-menu-item":{title:"Nav menu item"},"nav-sub-menu":{title:"Nav sub menu"},tabs:{title:"Tabs"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0},"logo-banner":{title:"Logo banner"},"vertical-tabs":{title:"Vertical tabs"},"carousel-dots":{title:"Carousel dots"},"carousel-slide-count":{title:"Carousel slide count"},cta:{title:"CTA"},"numbered-columns":{title:"Numbered columns"},"section-with-title":{title:"Section"},"chevron-down":{title:(0,y.__)("Chevron down","launchpad-blocks"),makeAvailableToUser:!0},"chevron-left":{title:(0,y.__)("Chevron left","launchpad-blocks"),makeAvailableToUser:!0},"chevron-right":{title:(0,y.__)("Chevron right","launchpad-blocks"),makeAvailableToUser:!0},"chevron-up":{title:(0,y.__)("Chevron up","launchpad-blocks"),makeAvailableToUser:!0},lightbox:{title:(0,y.__)("Lightbox","launchpad-blocks")}},Ge={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,t)=>(0,o.jsx)(L,{iconName:e,isEditorMode:!0,...t}),availableIcons:Object.fromEntries(Object.entries(Ve).filter(([e,t])=>t.makeAvailableToUser===!0))}};function Z(){return(0,De.applyFilters)("launchpadBlocks.icons",{...Ge})}function Ue({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:t,onIconSelect:i,onReset:n}){const l=Z(),[r,a]=(0,j.useState)("");return(0,o.jsxs)(v.Panel,{children:[(0,o.jsxs)(v.PanelHeader,{children:[e," ",n?(0,o.jsx)(v.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{n()},size:"small",children:"Reset"}):null]}),(0,o.jsxs)(v.PanelBody,{children:[(0,o.jsx)(v.SearchControl,{__nextHasNoMarginBottom:!0,label:"Search icons",value:r,onChange:u=>{a(u)}}),(0,o.jsx)("div",{children:Object.entries(l).map(([u,p])=>{if(Object.keys(p.availableIcons).length===0)return null;const m=Object.entries(p.availableIcons).filter(([d,{title:h}])=>!!(d.includes(r)||h.includes(r)));return(0,o.jsx)(We,{name:p.name,iconCount:m.length,children:(0,o.jsx)("div",{className:`icon-select ${u}-icon-select`,children:m.map(([d,{title:h}])=>{const c=t.iconName===d&&t.library===u;return(0,o.jsx)("button",{className:`icon-select-icon ${u}-icon-select-icon ${u}-icon-select-icon-${d}${c?" is-selected":""}`,onClick:()=>{i({iconName:d,library:u})},title:h,children:p.renderIcon(d)},d)})})},u)})})]})]})}function We({name:e,iconCount:t,children:i}){const[n,l]=(0,j.useState)(!1);return(0,j.useEffect)(()=>{t===0&&n&&l(!1)},[n,t]),(0,o.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,o.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,o.jsxs)(v.Button,{type:"button","aria-expanded":n,onClick:()=>{t>0&&l(!n)},disabled:t===0,className:"icon-select-group-accordion-header-button",children:[(0,o.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,o.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:t}),(0,o.jsx)(Re,{className:"icon-select-group-accordion-arrow",icon:n?Oe:Ee})]})}),n?i:null]})}function J({clientId:e,isSelected:t,attributes:i,setAttributes:n,mergeBlocks:l,onReplace:r,onRemove:a}){const{linkText:u,linkHref:p,linkTarget:m,iconName:d,library:h,size:c,iconPosition:g}=i,[S,C]=(0,j.useState)(!1);(0,j.useEffect)(()=>{t||C(!1)},[t]);const Xe=(0,b.useBlockProps)({style:{"--icon-size":c}}),Qe=(0,j.useMemo)(()=>({url:p,opensInNewTab:m==="_blank",title:u}),[p,m,u]),X=Z();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(b.BlockControls,{children:[(0,o.jsx)(v.ToolbarGroup,{children:(0,o.jsx)(v.ToolbarButton,{icon:$e,label:(0,y.__)("Link"),isPressed:S,onClick:()=>{C(!S)}})}),(0,o.jsxs)(v.ToolbarGroup,{children:[(0,o.jsx)(v.ToolbarButton,{icon:He,title:(0,y.__)("Show icon on left","launchpad-blocks"),isActive:g==="start",onClick:()=>n({iconPosition:"start"})}),(0,o.jsx)(v.ToolbarButton,{icon:Me,title:(0,y.__)("Show icon on right","launchpad-blocks"),isActive:g==="end",onClick:()=>n({iconPosition:"end"})})]})]}),(0,o.jsxs)(b.InspectorControls,{children:[(0,o.jsx)(v.Panel,{children:(0,o.jsx)(v.PanelBody,{children:(0,o.jsx)(v.__experimentalUnitControl,{__next40pxDefaultSize:!0,label:"Icon size",value:c,onChange:k=>{n({size:k})}})})}),(0,o.jsx)(Ue,{dataOnSelectedIcon:{iconName:d,library:h},onIconSelect:k=>{n({iconName:k.iconName,library:k.library})}})]}),(0,o.jsxs)("button",{...Xe,children:[g==="start"&&(0,o.jsx)("div",{className:"icon",children:X[h]?.renderIcon(d)}),(0,o.jsx)(b.RichText,{identifier:"linkText",tagName:"span",onChange:k=>{n({linkText:k})},allowedFormats:["core/bold","core/italic"],value:u,placeholder:"Add text...",onMerge:l,onReplace:r,onRemove:a}),g==="end"&&(0,o.jsx)("div",{className:"icon",children:X[h]?.renderIcon(d)}),S?(0,o.jsx)(v.Popover,{position:"bottom",noArrow:!1,shift:!0,offset:10,children:(0,o.jsx)(b.LinkControl,{value:Qe,showInitialSuggestions:!0,onChange:k=>{n({linkId:k?.id,linkKind:k?.kind,linkType:k?.type,linkHref:k?.url,linkText:k?.title,linkTarget:k?.opensInNewTab?"_blank":"_self"}),C(!1)},onRemove:()=>{n({linkId:void 0,linkKind:void 0,linkType:void 0,linkHref:void 0,linkText:void 0})}},`${e}-link-edit`)}):null]})]})}J.displayName="ButtonWithIcon";function Fe({hasInnerBlocks:e}){return e?Ke:qe}function qe(){return null}function Ke(){return(0,o.jsx)(b.InnerBlocks.Content,{})}const Ze={from:[{type:"block",blocks:["core/button"],transform:e=>{const{text:t,url:i,linkTarget:n,className:l}=e;return(0,f.createBlock)("launchpad-blocks/button-with-icon",{linkHref:i,linkText:t,linkTarget:n,className:l})}}],to:[{type:"block",blocks:["core/button"],transform:e=>{const{linkText:t,linkHref:i,linkTarget:n,className:l}=e;return(0,f.createBlock)("core/button",{url:i,text:t,linkTarget:n,className:l})}}]},Je=[],wt={},kt=null;(0,f.registerBlockType)(q().name,{icon:(0,o.jsx)(L,{iconName:"button-with-icon",isEditorMode:!0}),deprecated:Ae,edit:J,save:Fe({hasInnerBlocks:!0}),transforms:Ze}),_e(),Je.forEach(e=>{(0,f.registerBlockVariation)(q().name,e)})})(),B})());
