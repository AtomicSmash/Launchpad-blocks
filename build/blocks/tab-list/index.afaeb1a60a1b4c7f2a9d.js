(function(_,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var y=v();for(var s in y)(typeof exports=="object"?exports:_)[s]=y[s]}})(globalThis,()=>(()=>{var $={5471(s){s.exports={apiVersion:3,name:"launchpad-blocks/tab-list",ancestor:["launchpad-blocks/tabs"],title:"Tab list",category:"theme",description:"The tab list associated with a Tabs block.",textdomain:"launchpad",keywords:[],editorScript:"file:./index.tsx",render:"file:./render.php",attributes:{selectedTab:{type:"string",default:""}},providesContext:{},usesContext:["launchpad/tabsGroupId","launchpad/initiallySelectedTab","launchpad/shouldShowTabSectionTitle","launchpad/title"],supports:{align:!0,alignWide:!0,layout:{default:{type:"flex"}},spacing:{blockGap:!0}}}}},_={};function v(s){var g=_[s];if(g!==void 0)return g.exports;var x=_[s]={exports:{}};return $[s](x,x.exports,v),x.exports}v.n=s=>{var g=s&&s.__esModule?()=>s.default:()=>s;return v.d(g,{a:g}),g},v.d=(s,g)=>{for(var x in g)v.o(g,x)&&!v.o(s,x)&&Object.defineProperty(s,x,{enumerable:!0,get:g[x]})},v.o=(s,g)=>Object.prototype.hasOwnProperty.call(s,g);var y={};return(()=>{"use strict";const s=window.ReactJSXRuntime,g=window.wp.blocks,x=window.wp.blockEditor,U=window.wp.components,Ge=window.wp.coreData,D=window.wp.data,Me=window.wp.i18n,T=window.React;var I;function Oe(e){return I("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e,children:I("path",{d:"m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"})})}function J(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,s.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,s.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,s.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}const X=(0,T.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:a,isEditorMode:l=!1,...r}=n;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,...r,children:(0,s.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function Z(e){return(0,s.jsx)(T.Suspense,{fallback:null,children:(0,s.jsx)(X,{...e})})}var k,C,i,j,B,K,Q,Y,ee,te,z,ne,oe,ae,le,R,re,A,ie,se,G,P,ce,ue,b,M,de,pe,me,he,fe,ge,S,O,H,be,ve;function xe(){(0,g.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:J})}function E(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function ke(e,t,n){const o=t.spacing?.blockGap;let a="none";if(o===!0)a="both";else if(Array.isArray(o)){const r=o.includes("horizontal"),d=o.includes("vertical");r&&d?a="both":r?a="horizontal":d&&(a="vertical")}const l={columnGap:a==="both"||a==="horizontal"?E(n?.spacing?.blockGap,a):void 0,rowGap:a==="both"||a==="vertical"?E(n?.spacing?.blockGap,a):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function L(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const a=L(o.innerBlocks,t);a&&n.push(...a)}return n},[])}const He=()=>{const e=S(()=>({per_page:-1}),[]),t=S(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=S(()=>({}),[]),{postTypes:o,taxonomies:a}=P(h=>{const{getEntityRecords:m}=h(G),f=m("root","postType",e),c=m("root","taxonomy",t);if(!c)return{postTypes:f,taxonomies:c};for(const p of c)n[p.slug]=m("taxonomy",p.slug);return{postTypes:f,taxonomies:c}},[e,t,n]),l=["attachment"],r=[],d=o?.filter(({viewable:h,slug:m})=>h&&!l.includes(m));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const h of d){const m=a?.filter(({types:f,slug:c})=>f.includes(h.slug)&&!r.includes(c));m&&(u[h.slug]=m.map(f=>{const c=n?.[f.slug]??null;return{...f,terms:c}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ee({list:e,containerClassName:t,renderItem:n}){return k(C,{children:[i("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),i("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function we(e){return e.indexOf("data:image/svg+xml,")===0}function _e(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function ye(e){return e.indexOf("dashicons-")===0}function Ce({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return i("div",{className:"menu-icon","aria-hidden":"true",children:i("br",{})});if(we(e))return i("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:i("br",{})});if(_e(e))return i("img",{src:new URL(e).toString(),alt:""});if(ye(e)){const t=e.replace("dashicons-","");return i(Q,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Le={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function We(){const[e,t,n,o]=j("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),a={};if(o&&n&&n.length>0)for(const l of n)a[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)a[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)a[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:a}}function Ve({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return i(Y,{label:b("Custom colours","launchpad"),resetAll:a=>{if(a)for(const l of a)l()},children:i("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(a=>i(Se,{colour:a,attributesDefinition:t,attributes:n,setAttributes:o},a.attributeName))})})}function Se({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[a,l,r,d,u]=j("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==n[e.attributeName],m=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=O(null);return i(ee,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:m,hasValue:h,onDeselect:m,label:e.label,isShownByDefault:!0,children:i(te,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:p})=>i(C,{children:i(z,{ref:f,__next40pxDefaultSize:!0,onClick:p,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:k("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[i(ne,{colorValue:n[e.attributeName]})," ",i("span",{children:e.label})]})})}),renderContent:()=>i(oe,{paddingSize:"none",children:i("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:i("div",{className:"block-editor-color-gradient-control__panel",children:i(ae,{colors:[...a&&a?.length>0?[{name:"User",colors:a}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...d&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:n[e.attributeName],onChange:c=>{o({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function qe({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[a,l,r]=j("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=l?.map(({name:c,ratio:p})=>({label:c,value:p}))??[],u=a?.map(({name:c,ratio:p})=>({label:c,value:p}))??[],h=[{label:M("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?u:[],...d||[],{label:M("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[m,f]=H(h.map(c=>c.value).includes(e)?e:"custom");return k(C,{children:[i(le,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:b("Aspect ratio","launchpad-blocks"),options:h,value:m,onChange:c=>{f(c),c!=="custom"&&t(c)}}),m==="custom"?i(R,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:b("Custom aspect ratio","launchpad-blocks"),help:b("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?k(re,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:b("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&o(c)},value:n,children:[i(A,{label:"Cover",value:"cover"}),i(A,{label:"Contain",value:"contain"})]}):null]})}const Te=(e,t,n,o)=>{const{getBlocksByName:a,getBlockAttributes:l,getBlockParentsByBlockName:r}=ce(B);return a(o).some(u=>{if(r(u,"core/template-part",!0).length)return!1;const{[n]:h}=l(u);return e!==u&&t===h})};function Fe(e,t,n,o,a){const{[t]:l}=e,r=be(u=>Te(n,u,t,a),[n,t,a]);return ve(()=>{if(l===""){const u=n.slice(0,n.indexOf("-"));o({[t]:u})}if(r(l)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${u}`),o({[t]:u})}},[l,n,o,r,t]),S(()=>function({label:h,help:m,onValidChange:f,idAttribute:c}){const[p,N]=H(c);return i(R,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof m=="function"?m(!r(p)):m,value:p,onChange:w=>{N(w),r(w)||f(w)}})},[r])}function Ue({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return i(ie,{label:b("Change title heading element","launchpad-blocks"),icon:W(t),controls:e.map(o=>{{const a=o===t;return{icon:W(o),title:je(o),isDisabled:a,onClick:()=>n(o)}}})})}function je(e){switch(e){case"h2":return b("Heading 2","launchpad-blocks");case"h3":return b("Heading 3","launchpad-blocks");case"h4":return b("Heading 4","launchpad-blocks");case"h5":return b("Heading 5","launchpad-blocks");case"h6":return b("Heading 6","launchpad-blocks");case"p":return b("Paragraph","launchpad-blocks")}}function W(e){switch(e){case"h2":return de;case"h3":return pe;case"h4":return me;case"h5":return he;case"h6":return fe;case"p":return ge}}function Je(e){const{hasChildren:t}=P(n=>{const{getBlocks:o}=n(B);return{hasChildren:o(e).length>0}},[e]);return t}function Xe({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:a,updateBlockAttributes:l}=ue(B);return k(se,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[i("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":b("Block variations"),children:n.map(r=>k("li",{children:[i(z,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?i(Ce,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&l(e,r.attributes),r.innerBlocks&&a(e,K(r.innerBlocks),!1)}}),i("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),o&&i("div",{className:"block-editor-block-variation-picker__skip",children:i(z,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{a(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:b("Skip")})})]})}function Ze({imageId:e,className:t="",size:n="full"}){const o=P(l=>typeof e=="number"&&e>0?l(G).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?i(C,{children:i("img",{...(()=>{const l={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(l.src=o.media_details.sizes[n].source_url,l.width=o.media_details.sizes[n].width,l.height=o.media_details.sizes[n].height),l.srcSet=Object.entries(o.media_details.sizes??{}).map(([r,d])=>`${d.source_url} ${d.width}w`).join(", "),l})(),alt:o.alt_text||""})}):null}function Be(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>Be(n))):t.push([]),t}function Ke(e){const t=O(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const a=e()?.scrollHeight??0;if(a){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${a}px !important`)}else t.current.style.minHeight=""}},1)}}var ze=v(5471),Pe=v.n(ze);const Ne={align:!0,alignWide:!0,layout:{default:{type:"flex"}},spacing:{blockGap:!0}};function V({clientId:e,context:t,attributes:n,attributes:{selectedTab:o},setAttributes:a}){const{layout:l,style:r}=n,{className:d,style:u}=ke(l,Ne,r),h=(0,x.useBlockProps)({className:d,style:u}),{tabGroupClientId:m,tabPanelGroup:f}=(0,D.useSelect)(p=>{const{getBlockParentsByBlockName:N,getBlock:w}=p(x.store),q=N(e,"launchpad-blocks/tabs")[0],Re=w(q).innerBlocks,F=L(Re,"launchpad-blocks/tab-panel-group"),Ae=F?F[0]??null:null;return{tabGroupClientId:q,tabPanelGroup:Ae}},[e]),{updateBlockAttributes:c}=(0,D.useDispatch)(x.store);return(0,T.useEffect)(()=>{if(o===""){const p=t["launchpad/initiallySelectedTab"]===""?t["launchpad/initiallySelectedTab"]:f?.innerBlocks[0]?.attributes.id;p&&p!==""&&a({selectedTab:p})}},[o,t,a,f?.innerBlocks]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{...h,children:(0,s.jsx)(U.Slot,{name:`${t["launchpad/tabsGroupId"]}TabList`,fillProps:{selectedTab:o,initiallySelectedTab:t["launchpad/initiallySelectedTab"],setSelectedTab:p=>{a({selectedTab:p})},setInitiallySelectedTab:p=>{c([m],{initiallySelectedTab:p})}}})})})}V.displayName="TabListEdit";function $e({hasInnerBlocks:e}){return e?Ie:De}function De(){return null}function Ie(){return(0,s.jsx)(x.InnerBlocks.Content,{})}const Qe={},Ye=null;(0,g.registerBlockType)(Pe().name,{icon:(0,s.jsx)(Z,{iconName:"tab-list"}),edit:V,save:$e({hasInnerBlocks:!1})}),xe()})(),y})());
