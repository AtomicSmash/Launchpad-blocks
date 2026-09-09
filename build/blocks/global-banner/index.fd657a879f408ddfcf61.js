(function(y,b){if(typeof exports=="object"&&typeof module=="object")module.exports=b();else if(typeof define=="function"&&define.amd)define([],b);else{var C=b();for(var a in C)(typeof exports=="object"?exports:y)[a]=C[a]}})(globalThis,()=>(()=>{var z={7869(a){a.exports={apiVersion:3,name:"launchpad-blocks/global-banner",title:"Global banner",category:"theme",textdomain:"launchpad",editorScript:"file:./index.tsx",viewScript:"file:./view.ts",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{align:{type:"string",default:"full"},text:{type:"string"},isDismissible:{type:"boolean",default:!0},backgroundColor:{type:"string",default:"elevation-high"},textColor:{type:"string",default:"black"}},supports:{align:["full"],color:!0,layout:{default:{type:"constrained"}}},example:{attributes:{text:"This is a banner",isDismissible:!0}}}}},y={};function b(a){var f=y[a];if(f!==void 0)return f.exports;var x=y[a]={exports:{}};return z[a](x,x.exports,b),x.exports}b.n=a=>{var f=a&&a.__esModule?()=>a.default:()=>a;return b.d(f,{a:f}),f},b.d=(a,f)=>{for(var x in f)b.o(f,x)&&!b.o(a,x)&&Object.defineProperty(a,x,{enumerable:!0,get:f[x]})},b.o=(a,f)=>Object.prototype.hasOwnProperty.call(a,f);var C={};return(()=>{"use strict";const a=window.ReactJSXRuntime,f=window.wp.blocks,x=window.React,q=(0,x.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:r,isEditorMode:s=!1,...i}=n;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,...i,children:(0,a.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function R(e){return(0,a.jsx)(x.Suspense,{fallback:null,children:(0,a.jsx)(q,{...e})})}var F=b(7869),U=b.n(F);const w=window.wp.blockEditor,B=window.wp.components,J=window.wp.coreData,A=window.wp.data,X=window.wp.hooks,$e=window.wp.i18n;var k,j,l,N,P,Y,K,Q,Z,ee,T,te,ne,oe,re,I,se,O,ae,ie,H,D,le,ce,g,M,ue,de,pe,me,he,fe,S,E,G,ge,be;function L(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function ve(e,t,n){const o=t.spacing?.blockGap;let r="none";if(o===!0)r="both";else if(Array.isArray(o)){const i=o.includes("horizontal"),d=o.includes("vertical");i&&d?r="both":i?r="horizontal":d&&(r="vertical")}const s={columnGap:r==="both"||r==="horizontal"?L(n?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?L(n?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let i="";return e.minimumColumnWidth?i=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(i=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:i,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function xe(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const r=xe(o.innerBlocks,t);r&&n.push(...r)}return n},[])}const ze=()=>{const e=S(()=>({per_page:-1}),[]),t=S(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=S(()=>({}),[]),{postTypes:o,taxonomies:r}=D(m=>{const{getEntityRecords:p}=m(H),h=p("root","postType",e),c=p("root","taxonomy",t);if(!c)return{postTypes:h,taxonomies:c};for(const v of c)n[v.slug]=p("taxonomy",v.slug);return{postTypes:h,taxonomies:c}},[e,t,n]),s=["attachment"],i=[],d=o?.filter(({viewable:m,slug:p})=>m&&!s.includes(p));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const m of d){const p=r?.filter(({types:h,slug:c})=>h.includes(m.slug)&&!i.includes(c));p&&(u[m.slug]=p.map(h=>{const c=n?.[h.slug]??null;return{...h,terms:c}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Re({list:e,containerClassName:t,renderItem:n}){return k(j,{children:[l("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),l("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function _e(e){return e.indexOf("data:image/svg+xml,")===0}function ke(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function we(e){return e.indexOf("dashicons-")===0}function ye({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return l("div",{className:"menu-icon","aria-hidden":"true",children:l("br",{})});if(_e(e))return l("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:l("br",{})});if(ke(e))return l("img",{src:new URL(e).toString(),alt:""});if(we(e)){const t=e.replace("dashicons-","");return l(K,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Ae={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ie(){const[e,t,n,o]=N("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(o&&n&&n.length>0)for(const s of n)r[s.slug]={color:s.color,name:s.name};if(t&&t?.length>0)for(const s of t)r[s.slug]={color:s.color,name:s.name};if(e&&e?.length>0)for(const s of e)r[s.slug]={color:s.color,name:s.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:r}}function Oe({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return l(Q,{label:g("Custom colours","launchpad"),resetAll:r=>{if(r)for(const s of r)s()},children:l("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>l(Ce,{colour:r,attributesDefinition:t,attributes:n,setAttributes:o},r.attributeName))})})}function Ce({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[r,s,i,d,u]=N("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),m=()=>t[e.attributeName]?.default!==n[e.attributeName],p=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},h=E(null);return l(Z,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:m,onDeselect:p,label:e.label,isShownByDefault:!0,children:l(ee,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:v})=>l(j,{children:l(T,{ref:h,__next40pxDefaultSize:!0,onClick:v,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:k("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[l(te,{colorValue:n[e.attributeName]})," ",l("span",{children:e.label})]})})}),renderContent:()=>l(ne,{paddingSize:"none",children:l("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:l("div",{className:"block-editor-color-gradient-control__panel",children:l(oe,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...d&&i&&i.length>0?[{name:"Default",colors:i}]:[]],value:n[e.attributeName],onChange:c=>{o({[e.attributeName]:c})},disableCustomColors:!u})})})})})},e.attributeName)}function He({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[r,s,i]=N("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=s?.map(({name:c,ratio:v})=>({label:c,value:v}))??[],u=r?.map(({name:c,ratio:v})=>({label:c,value:v}))??[],m=[{label:M("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...i?u:[],...d||[],{label:M("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,h]=G(m.map(c=>c.value).includes(e)?e:"custom");return k(j,{children:[l(re,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:g("Aspect ratio","launchpad-blocks"),options:m,value:p,onChange:c=>{h(c),c!=="custom"&&t(c)}}),p==="custom"?l(I,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:g("Custom aspect ratio","launchpad-blocks"),help:g("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?k(se,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:g("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&o(c)},value:n,children:[l(O,{label:"Cover",value:"cover"}),l(O,{label:"Contain",value:"contain"})]}):null]})}const je=(e,t,n,o)=>{const{getBlocksByName:r,getBlockAttributes:s,getBlockParentsByBlockName:i}=le(P);return r(o).some(u=>{if(i(u,"core/template-part",!0).length)return!1;const{[n]:m}=s(u);return e!==u&&t===m})};function Me(e,t,n,o,r){const{[t]:s}=e,i=ge(u=>je(n,u,t,r),[n,t,r]);return be(()=>{if(s===""){const u=n.slice(0,n.indexOf("-"));o({[t]:u})}if(i(s)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${s}. New value: ${u}`),o({[t]:u})}},[s,n,o,i,t]),S(()=>function({label:m,help:p,onValidChange:h,idAttribute:c}){const[v,_]=G(c);return l(I,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:m,help:typeof p=="function"?p(!i(v)):p,value:v,onChange:$=>{_($),i($)||h($)}})},[i])}function Ee({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return l(ae,{label:g("Change title heading element","launchpad-blocks"),icon:W(t),controls:e.map(o=>{{const r=o===t;return{icon:W(o),title:Se(o),isDisabled:r,onClick:()=>n(o)}}})})}function Se(e){switch(e){case"h2":return g("Heading 2","launchpad-blocks");case"h3":return g("Heading 3","launchpad-blocks");case"h4":return g("Heading 4","launchpad-blocks");case"h5":return g("Heading 5","launchpad-blocks");case"h6":return g("Heading 6","launchpad-blocks");case"p":return g("Paragraph","launchpad-blocks")}}function W(e){switch(e){case"h2":return ue;case"h3":return de;case"h4":return pe;case"h5":return me;case"h6":return he;case"p":return fe}}function Ge(e){const{hasChildren:t}=D(n=>{const{getBlocks:o}=n(P);return{hasChildren:o(e).length>0}},[e]);return t}function Le({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:r,updateBlockAttributes:s}=ce(P);return k(ie,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[l("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":g("Block variations"),children:n.map(i=>k("li",{children:[l(T,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof i.icon=="string"?l(ye,{iconString:i.icon}):i.icon,iconSize:48,onClick:()=>{i.attributes&&s(e,i.attributes),i.innerBlocks&&r(e,Y(i.innerBlocks),!1)}}),l("span",{className:"block-editor-block-variation-picker__variation-label",children:i.title})]},i.name))}),o&&l("div",{className:"block-editor-block-variation-picker__skip",children:l(T,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:g("Skip")})})]})}function We({imageId:e,className:t="",size:n="full"}){const o=D(s=>typeof e=="number"&&e>0?s(H).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?l(j,{children:l("img",{...(()=>{const s={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(s.src=o.media_details.sizes[n].source_url,s.width=o.media_details.sizes[n].width,s.height=o.media_details.sizes[n].height),s.srcSet=Object.entries(o.media_details.sizes??{}).map(([i,d])=>`${d.source_url} ${d.width}w`).join(", "),s})(),alt:o.alt_text||""})}):null}function Be(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>Be(n))):t.push([]),t}function Ve(e){const t=E(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const s=t.current.style;s.minHeight="",t.current.setAttribute("style",`${s.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}const Ne={align:["full"],color:!0,layout:{default:{type:"constrained"}}};function V({attributes:e,setAttributes:t}){const{isDismissible:n,layout:o,style:r}=e,{className:s,style:i}=ve(o,Ne,r),d=(0,w.useBlockProps)({className:s,style:i}),{children:u,...m}=(0,w.useInnerBlocksProps)({className:"info-banner-inner-content"},{orientation:"horizontal",__unstableDisableLayoutClassNames:!0,allowedBlocks:["core/buttons","core/button","core/paragraph"],template:[["core/paragraph",{placeholder:"Add some text here...",style:{layout:{selfStretch:"fill",flexSize:null}}}]],templateLock:!1}),{setTemplateValidity:p}=(0,A.useDispatch)(w.store);p&&p(!0).catch(()=>{});const h=(0,X.applyFilters)("launchpadBlocks.globalBannerDismissIcon",_=>(0,a.jsx)(R,{iconName:"menu-close-icon",..._})),v=`${(0,A.useSelect)(_=>_(J.store).getSite()?.url,[])??""}/wp-admin/themes.php?page=global-banner`;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.InspectorControls,{children:(0,a.jsx)(B.Panel,{children:(0,a.jsx)(B.PanelBody,{title:"Banner settings",children:(0,a.jsx)(B.ToggleControl,{checked:n,label:"Should the banner be dismissible?",onChange:_=>{t({isDismissible:_})}})})})}),(0,a.jsx)("div",{...d,children:(0,a.jsxs)("div",{...m,children:[u,n?(0,a.jsx)("button",{className:"dismiss-button",children:(0,a.jsx)(h,{isEditorMode:!0})}):null]})}),(0,a.jsxs)("div",{className:"global-banner-edit-instructions",children:[(0,a.jsxs)("p",{children:["After saving your changes,"," ",(0,a.jsx)("a",{href:v,target:"_blank",rel:"noreferrer",children:"click here to select which banners appear globally."})]}),(0,a.jsx)("p",{children:'You can select these banners at a later point in the WordPress backend, from the sidebar, under the "Appearance" menu in the "Global Banner" section.'})]})]})}V.displayName="GlobalBannerEdit";function Pe({hasInnerBlocks:e}){return e?De:Te}function Te(){return null}function De(){return(0,a.jsx)(w.InnerBlocks.Content,{})}(0,f.registerBlockType)(U().name,{icon:(0,a.jsx)(R,{iconName:"information"}),edit:V,save:Pe({hasInnerBlocks:!0})})})(),C})());
