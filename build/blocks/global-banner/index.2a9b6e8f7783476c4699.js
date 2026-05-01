(function(k,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var y=v();for(var s in y)(typeof exports=="object"?exports:k)[s]=y[s]}})(globalThis,()=>(()=>{var T={7869(s){s.exports={apiVersion:3,name:"launchpad-blocks/global-banner",title:"Global banner",category:"theme",textdomain:"launchpad",editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{align:{type:"string",default:"full"},text:{type:"string"},isDismissible:{type:"boolean",default:!0},backgroundColor:{type:"string",default:"elevation-high"},textColor:{type:"string",default:"black"}},supports:{align:["full"],color:!0,layout:{default:{type:"constrained"}}},example:{attributes:{text:"This is a banner",isDismissible:!0}}}}},k={};function v(s){var h=k[s];if(h!==void 0)return h.exports;var g=k[s]={exports:{}};return T[s](g,g.exports,v),g.exports}v.n=s=>{var h=s&&s.__esModule?()=>s.default:()=>s;return v.d(h,{a:h}),h},v.d=(s,h)=>{for(var g in h)v.o(h,g)&&!v.o(s,g)&&Object.defineProperty(s,g,{enumerable:!0,get:h[g]})},v.o=(s,h)=>Object.prototype.hasOwnProperty.call(s,h);var y={};return(()=>{"use strict";const s=window.ReactJSXRuntime,h=window.wp.blocks,g=window.wp.blockEditor,S=window.wp.components,F=window.wp.coreData,$=window.wp.data,Re=window.wp.i18n,A=window.React;var R;function Ie(e){return R("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:R("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function U(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,s.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,s.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,s.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const J=(0,A.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:r,isEditorMode:l=!1,...a}=n;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...a,children:(0,s.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function I(e){return(0,s.jsx)(A.Suspense,{fallback:null,children:(0,s.jsx)(J,{...e})})}var w,C,i,B,z,X,Y,Z,K,Q,N,ee,te,ne,oe,M,re,O,le,se,L,P,ae,ie,b,H,ce,ue,de,pe,me,he,j,E,G,fe,ge;function be(){(0,h.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:U})}function V(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function ve(e,t,n){const o=t.spacing?.blockGap;let r="none";if(o===!0)r="both";else if(Array.isArray(o)){const a=o.includes("horizontal"),d=o.includes("vertical");a&&d?r="both":a?r="horizontal":d&&(r="vertical")}const l={columnGap:r==="both"||r==="horizontal"?V(n?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?V(n?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function xe(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const r=xe(o.innerBlocks,t);r&&n.push(...r)}return n},[])}const Me=()=>{const e=j(()=>({per_page:-1}),[]),t=j(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=j(()=>({}),[]),{postTypes:o,taxonomies:r}=P(m=>{const{getEntityRecords:p}=m(L),f=p("root","postType",e),c=p("root","taxonomy",t);if(!c)return{postTypes:f,taxonomies:c};for(const x of c)n[x.slug]=p("taxonomy",x.slug);return{postTypes:f,taxonomies:c}},[e,t,n]),l=["attachment"],a=[],d=o?.filter(({viewable:m,slug:p})=>m&&!l.includes(p));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const m of d){const p=r?.filter(({types:f,slug:c})=>f.includes(m.slug)&&!a.includes(c));p&&(u[m.slug]=p.map(f=>{const c=n?.[f.slug]??null;return{...f,terms:c}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Oe({list:e,containerClassName:t,renderItem:n}){return w(C,{children:[i("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),i("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function _e(e){return e.indexOf("data:image/svg+xml,")===0}function we(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function ke(e){return e.indexOf("dashicons-")===0}function ye({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return i("div",{className:"menu-icon","aria-hidden":"true",children:i("br",{})});if(_e(e))return i("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:i("br",{})});if(we(e))return i("img",{src:new URL(e).toString(),alt:""});if(ke(e)){const t=e.replace("dashicons-","");return i(Y,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Le={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function He(){const[e,t,n,o]=B("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(o&&n&&n.length>0)for(const l of n)r[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)r[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)r[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:r}}function Ee({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return i(Z,{label:b("Custom colours","launchpad"),resetAll:r=>{if(r)for(const l of r)l()},children:i("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>i(Ce,{colour:r,attributesDefinition:t,attributes:n,setAttributes:o},r.attributeName))})})}function Ce({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[r,l,a,d,u]=B("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==n[e.attributeName],p=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=E(null);return i(K,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:m,onDeselect:p,label:e.label,isShownByDefault:!0,children:i(Q,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:x})=>i(C,{children:i(N,{ref:f,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:w("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[i(ee,{colorValue:n[e.attributeName]})," ",i("span",{children:e.label})]})})}),renderContent:()=>i(te,{paddingSize:"none",children:i("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:i("div",{className:"block-editor-color-gradient-control__panel",children:i(ne,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...d&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:n[e.attributeName],onChange:c=>{o({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function Ge({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[r,l,a]=B("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=l?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],u=r?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],m=[{label:H("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?u:[],...d||[],{label:H("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,f]=G(m.map(c=>c.value).includes(e)?e:"custom");return w(C,{children:[i(oe,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:b("Aspect ratio","launchpad-blocks"),options:m,value:p,onChange:c=>{f(c),c!=="custom"&&t(c)}}),p==="custom"?i(M,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:b("Custom aspect ratio","launchpad-blocks"),help:b("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?w(re,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:b("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&o(c)},value:n,children:[i(O,{label:"Cover",value:"cover"}),i(O,{label:"Contain",value:"contain"})]}):null]})}const je=(e,t,n,o)=>{const{getBlocksByName:r,getBlockAttributes:l,getBlockParentsByBlockName:a}=ae(z);return r(o).some(u=>{if(a(u,"core/template-part",!0).length)return!1;const{[n]:m}=l(u);return e!==u&&t===m})};function Ve(e,t,n,o,r){const{[t]:l}=e,a=fe(u=>je(n,u,t,r),[n,t,r]);return ge(()=>{if(l===""){const u=n.slice(0,n.indexOf("-"));o({[t]:u})}if(a(l)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${u}`),o({[t]:u})}},[l,n,o,a,t]),j(()=>function({label:m,help:p,onValidChange:f,idAttribute:c}){const[x,_]=G(c);return i(M,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof p=="function"?p(!a(x)):p,value:x,onChange:D=>{_(D),a(D)||f(D)}})},[a])}function We({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return i(le,{label:b("Change title heading element","launchpad-blocks"),icon:W(t),controls:e.map(o=>{{const r=o===t;return{icon:W(o),title:Se(o),isDisabled:r,onClick:()=>n(o)}}})})}function Se(e){switch(e){case"h2":return b("Heading 2","launchpad-blocks");case"h3":return b("Heading 3","launchpad-blocks");case"h4":return b("Heading 4","launchpad-blocks");case"h5":return b("Heading 5","launchpad-blocks");case"h6":return b("Heading 6","launchpad-blocks");case"p":return b("Paragraph","launchpad-blocks")}}function W(e){switch(e){case"h2":return ce;case"h3":return ue;case"h4":return de;case"h5":return pe;case"h6":return me;case"p":return he}}function qe(e){const{hasChildren:t}=P(n=>{const{getBlocks:o}=n(z);return{hasChildren:o(e).length>0}},[e]);return t}function Fe({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:r,updateBlockAttributes:l}=ie(z);return w(se,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[i("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":b("Block variations"),children:n.map(a=>w("li",{children:[i(N,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?i(ye,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&l(e,a.attributes),a.innerBlocks&&r(e,X(a.innerBlocks),!1)}}),i("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),o&&i("div",{className:"block-editor-block-variation-picker__skip",children:i(N,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:b("Skip")})})]})}function Ue({imageId:e,className:t="",size:n="full"}){const o=P(l=>typeof e=="number"&&e>0?l(L).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?i(C,{children:i("img",{...(()=>{const l={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(l.src=o.media_details.sizes[n].source_url,l.width=o.media_details.sizes[n].width,l.height=o.media_details.sizes[n].height),l.srcSet=Object.entries(o.media_details.sizes??{}).map(([a,d])=>`${d.source_url} ${d.width}w`).join(", "),l})(),alt:o.alt_text||""})}):null}function Be(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>Be(n))):t.push([]),t}function Je(e){const t=E(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var ze=v(7869),Ne=v.n(ze);const Pe=window.wp.hooks,De={align:["full"],color:!0,layout:{default:{type:"constrained"}}};function q({attributes:e,setAttributes:t}){const{isDismissible:n,layout:o,style:r}=e,{className:l,style:a}=ve(o,De,r),d=(0,g.useBlockProps)({className:l,style:a}),{children:u,...m}=(0,g.useInnerBlocksProps)({className:"info-banner-inner-content"},{orientation:"horizontal",__unstableDisableLayoutClassNames:!0,allowedBlocks:["core/buttons","core/button","core/paragraph"],template:[["core/paragraph",{placeholder:"Add some text here...",style:{layout:{selfStretch:"fill",flexSize:null}}}]],templateLock:!1}),{setTemplateValidity:p}=(0,$.useDispatch)(g.store);p&&p(!0).catch(()=>{});const f=(0,Pe.applyFilters)("launchpadBlocks.globalBannerDismissIcon",_=>(0,s.jsx)(I,{iconName:"menu-close-icon",..._})),x=`${(0,$.useSelect)(_=>_(F.store).getSite()?.url,[])??""}/wp-admin/themes.php?page=global-banner`;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.InspectorControls,{children:(0,s.jsx)(S.Panel,{children:(0,s.jsx)(S.PanelBody,{title:"Banner settings",children:(0,s.jsx)(S.ToggleControl,{checked:n,label:"Should the banner be dismissible?",onChange:_=>{t({isDismissible:_})}})})})}),(0,s.jsx)("div",{...d,children:(0,s.jsxs)("div",{...m,children:[u,n?(0,s.jsx)("button",{className:"dismiss-button",children:(0,s.jsx)(f,{isEditorMode:!0})}):null]})}),(0,s.jsxs)("div",{className:"global-banner-edit-instructions",children:[(0,s.jsxs)("p",{children:["After saving your changes,"," ",(0,s.jsx)("a",{href:x,target:"_blank",rel:"noreferrer",children:"click here to select which banners appear globally."})]}),(0,s.jsx)("p",{children:'You can select these banners at a later point in the WordPress backend, from the sidebar, under the "Appearance" menu in the "Global Banner" section.'})]})]})}q.displayName="GlobalBannerEdit";function Te({hasInnerBlocks:e}){return e?Ae:$e}function $e(){return null}function Ae(){return(0,s.jsx)(g.InnerBlocks.Content,{})}(0,h.registerBlockType)(Ne().name,{icon:(0,s.jsx)(I,{iconName:"information"}),edit:q,save:Te({hasInnerBlocks:!0})}),be()})(),y})());
