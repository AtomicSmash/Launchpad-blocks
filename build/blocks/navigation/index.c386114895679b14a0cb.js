(function(w,g){if(typeof exports=="object"&&typeof module=="object")module.exports=g();else if(typeof define=="function"&&define.amd)define([],g);else{var _=g();for(var l in _)(typeof exports=="object"?exports:w)[l]=_[l]}})(globalThis,()=>(()=>{var T={8435(l){l.exports={apiVersion:3,name:"launchpad-blocks/navigation",title:"Navigation",category:"theme",description:"A collection of blocks that allow visitors to get around your site.",allowedBlocks:["core/search","core/social-links","core/loginout","core/buttons","launchpad-blocks/nav-list"],textdomain:"launchpad-blocks",keywords:["menu","nav","links"],editorScript:"file:./index.tsx",viewScript:"file:./view.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{navId:{type:"string"}},supports:{},example:{viewportWidth:500,innerBlocks:[{name:"launchpad-blocks/nav-list",attributes:{isNestedInAnotherNavLink:!1},innerBlocks:[{name:"launchpad-blocks/nav-submenu",attributes:{linkText:"Sub menu",isPreview:!0},innerBlocks:[{name:"launchpad-blocks/nav-list",attributes:{isNestedInAnotherNavLink:!0},innerBlocks:[]}]},{name:"launchpad-blocks/nav-submenu",attributes:{linkText:"Sub menu",isPreview:!0},innerBlocks:[{name:"launchpad-blocks/nav-list",attributes:{isNestedInAnotherNavLink:!0},innerBlocks:[]}]},{name:"launchpad-blocks/nav-menu-item",attributes:{linkText:"Menu link",linkHref:"#"}},{name:"launchpad-blocks/nav-menu-item",attributes:{linkText:"Menu link",linkHref:"#"}}]},{name:"core/buttons",innerBlocks:[{name:"core/button",attributes:{text:"Example button"}}]}]},providesContext:{},usesContext:[]}}},w={};function g(l){var m=w[l];if(m!==void 0)return m.exports;var v=w[l]={exports:{}};return T[l](v,v.exports,g),v.exports}g.n=l=>{var m=l&&l.__esModule?()=>l.default:()=>l;return g.d(m,{a:m}),m},g.d=(l,m)=>{for(var v in m)g.o(m,v)&&!g.o(l,v)&&Object.defineProperty(l,v,{enumerable:!0,get:m[v]})},g.o=(l,m)=>Object.prototype.hasOwnProperty.call(l,m);var _={};return(()=>{"use strict";const l=window.ReactJSXRuntime,m=window.wp.blocks,v=window.wp.blockEditor,Ne=window.wp.components,Pe=window.wp.coreData,Te=window.wp.data,$e=window.wp.i18n,j=window.React;var $;function De(e){return $("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:$("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function G(e){return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,l.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,l.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,l.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const W=(0,j.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:r,isEditorMode:a=!1,...s}=n;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...s,children:(0,l.jsx)("use",{href:`${a?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function V(e){return(0,l.jsx)(j.Suspense,{fallback:null,children:(0,l.jsx)(W,{...e})})}var k,y,i,B,z,q,F,U,J,X,S,Z,K,Q,Y,D,ee,A,te,ne,R,N,oe,re,f,I,ae,ie,se,le,ce,ue,C,M,H,de,pe;function me(){(0,m.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:G})}function O(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Ae(e,t,n){const o=t.spacing?.blockGap;let r="none";if(o===!0)r="both";else if(Array.isArray(o)){const s=o.includes("horizontal"),d=o.includes("vertical");s&&d?r="both":s?r="horizontal":d&&(r="vertical")}const a={columnGap:r==="both"||r==="horizontal"?O(n?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?O(n?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:a};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...a}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...a}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...a}};default:return{className:`is-layout-${e.type}`,style:{...a}}}}function he(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const r=he(o.innerBlocks,t);r&&n.push(...r)}return n},[])}const Re=()=>{const e=C(()=>({per_page:-1}),[]),t=C(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=C(()=>({}),[]),{postTypes:o,taxonomies:r}=N(h=>{const{getEntityRecords:p}=h(R),b=p("root","postType",e),c=p("root","taxonomy",t);if(!c)return{postTypes:b,taxonomies:c};for(const x of c)n[x.slug]=p("taxonomy",x.slug);return{postTypes:b,taxonomies:c}},[e,t,n]),a=["attachment"],s=[],d=o?.filter(({viewable:h,slug:p})=>h&&!a.includes(p));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const h of d){const p=r?.filter(({types:b,slug:c})=>b.includes(h.slug)&&!s.includes(c));p&&(u[h.slug]=p.map(b=>{const c=n?.[b.slug]??null;return{...b,terms:c}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ie({list:e,containerClassName:t,renderItem:n}){return k(y,{children:[i("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),i("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function fe(e){return e.indexOf("data:image/svg+xml,")===0}function ge(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function be(e){return e.indexOf("dashicons-")===0}function ve({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return i("div",{className:"menu-icon","aria-hidden":"true",children:i("br",{})});if(fe(e))return i("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:i("br",{})});if(ge(e))return i("img",{src:new URL(e).toString(),alt:""});if(be(e)){const t=e.replace("dashicons-","");return i(F,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Me={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function He(){const[e,t,n,o]=B("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(o&&n&&n.length>0)for(const a of n)r[a.slug]={color:a.color,name:a.name};if(t&&t?.length>0)for(const a of t)r[a.slug]={color:a.color,name:a.name};if(e&&e?.length>0)for(const a of e)r[a.slug]={color:a.color,name:a.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:r}}function Oe({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return i(U,{label:f("Custom colours","launchpad"),resetAll:r=>{if(r)for(const a of r)a()},children:i("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>i(xe,{colour:r,attributesDefinition:t,attributes:n,setAttributes:o},r.attributeName))})})}function xe({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[r,a,s,d,u]=B("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==n[e.attributeName],p=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=M(null);return i(J,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:h,onDeselect:p,label:e.label,isShownByDefault:!0,children:i(X,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:x})=>i(y,{children:i(S,{ref:b,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:k("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[i(Z,{colorValue:n[e.attributeName]})," ",i("span",{children:e.label})]})})}),renderContent:()=>i(K,{paddingSize:"none",children:i("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:i("div",{className:"block-editor-color-gradient-control__panel",children:i(Q,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...a&&a?.length>0?[{name:"Theme",colors:a}]:[],...d&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:n[e.attributeName],onChange:c=>{o({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function Ee({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[r,a,s]=B("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=a?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],u=r?.map(({name:c,ratio:x})=>({label:c,value:x}))??[],h=[{label:I("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?u:[],...d||[],{label:I("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,b]=H(h.map(c=>c.value).includes(e)?e:"custom");return k(y,{children:[i(Y,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:f("Aspect ratio","launchpad-blocks"),options:h,value:p,onChange:c=>{b(c),c!=="custom"&&t(c)}}),p==="custom"?i(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:f("Custom aspect ratio","launchpad-blocks"),help:f("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?k(ee,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:f("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&o(c)},value:n,children:[i(A,{label:"Cover",value:"cover"}),i(A,{label:"Contain",value:"contain"})]}):null]})}const ke=(e,t,n,o)=>{const{getBlocksByName:r,getBlockAttributes:a,getBlockParentsByBlockName:s}=oe(z);return r(o).some(u=>{if(s(u,"core/template-part",!0).length)return!1;const{[n]:h}=a(u);return e!==u&&t===h})};function Le(e,t,n,o,r){const{[t]:a}=e,s=de(u=>ke(n,u,t,r),[n,t,r]);return pe(()=>{if(a===""){const u=n.slice(0,n.indexOf("-"));o({[t]:u})}if(s(a)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${a}. New value: ${u}`),o({[t]:u})}},[a,n,o,s,t]),C(()=>function({label:h,help:p,onValidChange:b,idAttribute:c}){const[x,Se]=H(c);return i(D,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof p=="function"?p(!s(x)):p,value:x,onChange:P=>{Se(P),s(P)||b(P)}})},[s])}function Ge({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return i(te,{label:f("Change title heading element","launchpad-blocks"),icon:E(t),controls:e.map(o=>{{const r=o===t;return{icon:E(o),title:we(o),isDisabled:r,onClick:()=>n(o)}}})})}function we(e){switch(e){case"h2":return f("Heading 2","launchpad-blocks");case"h3":return f("Heading 3","launchpad-blocks");case"h4":return f("Heading 4","launchpad-blocks");case"h5":return f("Heading 5","launchpad-blocks");case"h6":return f("Heading 6","launchpad-blocks");case"p":return f("Paragraph","launchpad-blocks")}}function E(e){switch(e){case"h2":return ae;case"h3":return ie;case"h4":return se;case"h5":return le;case"h6":return ce;case"p":return ue}}function We(e){const{hasChildren:t}=N(n=>{const{getBlocks:o}=n(z);return{hasChildren:o(e).length>0}},[e]);return t}function Ve({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:r,updateBlockAttributes:a}=re(z);return k(ne,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[i("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":f("Block variations"),children:n.map(s=>k("li",{children:[i(S,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?i(ve,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&a(e,s.attributes),s.innerBlocks&&r(e,q(s.innerBlocks),!1)}}),i("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),o&&i("div",{className:"block-editor-block-variation-picker__skip",children:i(S,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),a(e,{hasDismissedVariationsSelector:!0})},children:f("Skip")})})]})}function qe({imageId:e,className:t="",size:n="full"}){const o=N(a=>typeof e=="number"&&e>0?a(R).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?i(y,{children:i("img",{...(()=>{const a={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(a.src=o.media_details.sizes[n].source_url,a.width=o.media_details.sizes[n].width,a.height=o.media_details.sizes[n].height),a.srcSet=Object.entries(o.media_details.sizes??{}).map(([s,d])=>`${d.source_url} ${d.width}w`).join(", "),a})(),alt:o.alt_text||""})}):null}function _e(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>_e(n))):t.push([]),t}function Fe(e){const t=M(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const a=t.current.style;a.minHeight="",t.current.setAttribute("style",`${a.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}var ye=g(8435),Ce=g.n(ye);function L({clientId:e,attributes:{navId:t},setAttributes:n}){const o=t??`nav-${e}`,r=(0,v.useBlockProps)({"data-launchpad-navigation":!0,"data-nav-id":o,"data-state":"closed","data-is-menu-collapsed":"expanded"}),a=(0,v.useInnerBlocksProps)({className:"navigation-content","data-navigation-content":!0,"data-state":"closed"},{orientation:"horizontal"});return(0,j.useEffect)(()=>{t!==o&&n({navId:`nav-${e}`})},[e,t,o,n]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{...r,children:(0,l.jsx)("div",{...a})})})}L.displayName="NavigationEdit";function je({hasInnerBlocks:e}){return e?ze:Be}function Be(){return null}function ze(){return(0,l.jsx)(v.InnerBlocks.Content,{})}const Ue={},Je=null;(0,m.registerBlockType)(Ce().name,{icon:(0,l.jsx)(V,{iconName:"navigation"}),edit:L,save:je({hasInnerBlocks:!0})}),me()})(),_})());
