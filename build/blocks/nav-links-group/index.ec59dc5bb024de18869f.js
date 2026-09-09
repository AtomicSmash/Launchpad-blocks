(function(B,x){if(typeof exports=="object"&&typeof module=="object")module.exports=x();else if(typeof define=="function"&&define.amd)define([],x);else{var S=x();for(var o in S)(typeof exports=="object"?exports:B)[o]=S[o]}})(globalThis,()=>(()=>{var $={1016(o){o.exports={apiVersion:3,name:"launchpad-blocks/nav-links-group",title:"Nav links group",category:"theme",description:"A simple list of links, often found in the footer or sidebar of a page.",allowedBlocks:["launchpad-blocks/nav-list"],textdomain:"launchpad",editorScript:"file:./index.tsx",style:"file:./style.scss",render:"file:./render.php",keywords:["menu","links"],attributes:{headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},linkId:{type:"number"},linkKind:{type:"string"},linkType:{type:"string"},linkHref:{type:"string"},linkTarget:{type:"string",enum:["_self","_blank"],default:"_self"},navListContextLabelledBy:{type:"string",default:""}},providesContext:{"launchpad-blocks/navListContextLabelledBy":"navListContextLabelledBy"},usesContext:[],supports:{},example:{}}}},B={};function x(o){var v=B[o];if(v!==void 0)return v.exports;var g=B[o]={exports:{}};return $[o](g,g.exports,x),g.exports}x.n=o=>{var v=o&&o.__esModule?()=>o.default:()=>o;return x.d(v,{a:v}),v},x.d=(o,v)=>{for(var g in v)x.o(v,g)&&!x.o(o,g)&&Object.defineProperty(o,g,{enumerable:!0,get:v[g]})},x.o=(o,v)=>Object.prototype.hasOwnProperty.call(o,v);var S={};return(()=>{"use strict";const o=window.ReactJSXRuntime,v=window.wp.blocks,g=window.React,G=(0,g.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:i,size:l,isEditorMode:s=!1,...r}=n;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,...r,children:(0,o.jsx)("use",{href:`${s?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${i}`})})}}});function W(e){return(0,o.jsx)(g.Suspense,{fallback:null,children:(0,o.jsx)(G,{...e})})}var q=x(1016),F=x.n(q);const _=window.wp.blockEditor,C=window.wp.components,b=window.wp.primitives,U=(0,o.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(b.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),ze=window.wp.coreData,K=window.wp.data,w=window.wp.i18n,Z=(0,o.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(b.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})}),J=(0,o.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(b.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})}),X=(0,o.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(b.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),Q=(0,o.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(b.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})}),Y=(0,o.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(b.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),ee=(0,o.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(b.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})});var j,T,a,P,I,te,ne,oe,ie,le,H,se,re,ae,ce,de,ue,R,pe,D,z,he,y,A,N,M,me;function E(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function Ae(e,t,n){const i=t.spacing?.blockGap;let l="none";if(i===!0)l="both";else if(Array.isArray(i)){const r=i.includes("horizontal"),u=i.includes("vertical");r&&u?l="both":r?l="horizontal":u&&(l="vertical")}const s={columnGap:l==="both"||l==="horizontal"?E(n?.spacing?.blockGap,l):void 0,rowGap:l==="both"||l==="vertical"?E(n?.spacing?.blockGap,l):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:s};switch(e.type){case"grid":{let r="";return e.minimumColumnWidth?r=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(r=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:r,...s}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...s}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...s}};default:return{className:`is-layout-${e.type}`,style:{...s}}}}function ge(e,t){return e.reduce((n,i)=>{if(i.name===t)n.push(i);else if(i.innerBlocks){const l=ge(i.innerBlocks,t);l&&n.push(...l)}return n},[])}const Me=()=>{const e=N(()=>({per_page:-1}),[]),t=N(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=N(()=>({}),[]),{postTypes:i,taxonomies:l}=z(h=>{const{getEntityRecords:p}=h(D),f=p("root","postType",e),c=p("root","taxonomy",t);if(!c)return{postTypes:f,taxonomies:c};for(const k of c)n[k.slug]=p("taxonomy",k.slug);return{postTypes:f,taxonomies:c}},[e,t,n]),s=["attachment"],r=[],u=i?.filter(({viewable:h,slug:p})=>h&&!s.includes(p));if(!u||u.length===0)return{postTypes:u,taxonomies:void 0};const d={};for(const h of u){const p=l?.filter(({types:f,slug:c})=>f.includes(h.slug)&&!r.includes(c));p&&(d[h.slug]=p.map(f=>{const c=n?.[f.slug]??null;return{...f,terms:c}}))}return{filteredPostTypes:u,mappedTaxonomies:d===void 0||Object.values(d).length===0?void 0:d}};function Ee({list:e,containerClassName:t,renderItem:n}){return j(T,{children:[a("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),a("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(i=>n({listItem:i,buttonProps:{type:"button",className:`custom-multiple-select-list-item${i.isSelected?" is-selected":""}`}}))})]})}function fe(e){return e.indexOf("data:image/svg+xml,")===0}function ve(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function be(e){return e.indexOf("dashicons-")===0}function xe({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return a("div",{className:"menu-icon","aria-hidden":"true",children:a("br",{})});if(fe(e))return a("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:a("br",{})});if(ve(e))return a("img",{src:new URL(e).toString(),alt:""});if(be(e)){const t=e.replace("dashicons-","");return a(ne,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Oe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Ve(){const[e,t,n,i]=P("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),l={};if(i&&n&&n.length>0)for(const s of n)l[s.slug]={color:s.color,name:s.name};if(t&&t?.length>0)for(const s of t)l[s.slug]={color:s.color,name:s.name};if(e&&e?.length>0)for(const s of e)l[s.slug]={color:s.color,name:s.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:l}}function Ge({colours:e,attributesDefinition:t,attributes:n,setAttributes:i}){return a(oe,{label:y("Custom colours","launchpad"),resetAll:l=>{if(l)for(const s of l)s()},children:a("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(l=>a(ke,{colour:l,attributesDefinition:t,attributes:n,setAttributes:i},l.attributeName))})})}function ke({colour:e,attributesDefinition:t,attributes:n,setAttributes:i}){const[l,s,r,u,d]=P("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==n[e.attributeName],p=()=>{i({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=M(null);return a(ie,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:h,onDeselect:p,label:e.label,isShownByDefault:!0,children:a(le,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:c,onToggle:k})=>a(T,{children:a(H,{ref:f,__next40pxDefaultSize:!0,onClick:k,"aria-expanded":c,className:`block-editor-panel-color-gradient-settings__dropdown${c?" is-open":""}`,children:j("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[a(se,{colorValue:n[e.attributeName]})," ",a("span",{children:e.label})]})})}),renderContent:()=>a(re,{paddingSize:"none",children:a("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:a("div",{className:"block-editor-color-gradient-control__panel",children:a(ae,{colors:[...l&&l?.length>0?[{name:"User",colors:l}]:[],...s&&s?.length>0?[{name:"Theme",colors:s}]:[],...u&&r&&r.length>0?[{name:"Default",colors:r}]:[]],value:n[e.attributeName],onChange:c=>{i({[e.attributeName]:c})},disableCustomColors:!d})})})})})},e.attributeName)}function We({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:i}){const[l,s,r]=P("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),u=s?.map(({name:c,ratio:k})=>({label:c,value:k}))??[],d=l?.map(({name:c,ratio:k})=>({label:c,value:k}))??[],h=[{label:A("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...r?d:[],...u||[],{label:A("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,f]=me(h.map(c=>c.value).includes(e)?e:"custom");return j(T,{children:[a(ce,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:y("Aspect ratio","launchpad-blocks"),options:h,value:p,onChange:c=>{f(c),c!=="custom"&&t(c)}}),p==="custom"?a(de,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:y("Custom aspect ratio","launchpad-blocks"),help:y("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&i!==void 0?j(ue,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:y("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:c=>{typeof c=="string"&&["contain","cover"].includes(c)&&i(c)},value:n,children:[a(R,{label:"Cover",value:"cover"}),a(R,{label:"Contain",value:"contain"})]}):null]})}const _e=(e,t,n,i)=>{const{getBlocksByName:l,getBlockAttributes:s,getBlockParentsByBlockName:r}=(0,K.select)(_.store);return l(i).some(d=>{if(r(d,"core/template-part",!0).length)return!1;const{[n]:h}=s(d);return e!==d&&t===h})};function we(e,t,n,i,l){const{[t]:s}=e,r=(0,g.useCallback)(d=>_e(n,d,t,l),[n,t,l]);return(0,g.useEffect)(()=>{if(s===""){const d=n.slice(0,n.indexOf("-"));i({[t]:d})}if(r(s)){const d=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${s}. New value: ${d}`),i({[t]:d})}},[s,n,i,r,t]),(0,g.useMemo)(()=>function({label:h,help:p,onValidChange:f,idAttribute:c}){const[k,L]=(0,g.useState)(c);return(0,o.jsx)(C.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof p=="function"?p(!r(k)):p,value:k,onChange:m=>{L(m),r(m)||f(m)}})},[r])}function ye({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return(0,o.jsx)(C.ToolbarDropdownMenu,{label:(0,w.__)("Change title heading element","launchpad-blocks"),icon:O(t),controls:e.map(i=>{{const l=i===t;return{icon:O(i),title:Ce(i),isDisabled:l,onClick:()=>n(i)}}})})}function Ce(e){switch(e){case"h2":return(0,w.__)("Heading 2","launchpad-blocks");case"h3":return(0,w.__)("Heading 3","launchpad-blocks");case"h4":return(0,w.__)("Heading 4","launchpad-blocks");case"h5":return(0,w.__)("Heading 5","launchpad-blocks");case"h6":return(0,w.__)("Heading 6","launchpad-blocks");case"p":return(0,w.__)("Paragraph","launchpad-blocks")}}function O(e){switch(e){case"h2":return Z;case"h3":return J;case"h4":return X;case"h5":return Q;case"h6":return Y;case"p":return ee}}function qe(e){const{hasChildren:t}=z(n=>{const{getBlocks:i}=n(I);return{hasChildren:i(e).length>0}},[e]);return t}function Fe({clientId:e,blockInfo:t,variations:n,allowSkip:i}){const{replaceInnerBlocks:l,updateBlockAttributes:s}=he(I);return j(pe,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[a("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":y("Block variations"),children:n.map(r=>j("li",{children:[a(H,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof r.icon=="string"?a(xe,{iconString:r.icon}):r.icon,iconSize:48,onClick:()=>{r.attributes&&s(e,r.attributes),r.innerBlocks&&l(e,te(r.innerBlocks),!1)}}),a("span",{className:"block-editor-block-variation-picker__variation-label",children:r.title})]},r.name))}),i&&a("div",{className:"block-editor-block-variation-picker__skip",children:a(H,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{l(e,[],!1),s(e,{hasDismissedVariationsSelector:!0})},children:y("Skip")})})]})}function Ue({imageId:e,className:t="",size:n="full"}){const i=z(s=>typeof e=="number"&&e>0?s(D).getEntityRecord?.("postType","attachment",e):void 0,[e]);return i?a(T,{children:a("img",{...(()=>{const s={src:i.source_url,className:`attachment-${n} size-${n} ${t}`,width:i.media_details.width,height:i.media_details.height,srcSet:""};return i.media_details?.sizes?.[n]&&(s.src=i.media_details.sizes[n].source_url,s.width=i.media_details.sizes[n].width,s.height=i.media_details.sizes[n].height),s.srcSet=Object.entries(i.media_details.sizes??{}).map(([r,u])=>`${u.source_url} ${u.width}w`).join(", "),s})(),alt:i.alt_text||""})}):null}function je(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>je(n))):t.push([]),t}function Ke(e){const t=M(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const l=e()?.scrollHeight??0;if(l){const s=t.current.style;s.minHeight="",t.current.setAttribute("style",`${s.cssText}min-height: ${l}px !important`)}else t.current.style.minHeight=""}},1)}}const Be={headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},headerContent:{type:"string"},linkId:{type:"number"},linkKind:{type:"string"},linkType:{type:"string"},linkHref:{type:"string"},linkTarget:{type:"string",enum:["_self","_blank"],default:"_self"},navListContextLabelledBy:{type:"string",default:""}};function V({attributes:e,setAttributes:t,clientId:n}){const{linkHref:i,linkTarget:l,headerElement:s,headerContent:r,navListContextLabelledBy:u}=e,[d,h]=(0,g.useState)(!1),p=(0,_.useBlockProps)(),{children:f,...c}=(0,_.useInnerBlocksProps)(p,{template:[["launchpad-blocks/nav-list",{linkOrientation:"vertical"},[["launchpad-blocks/nav-menu-item"]]]],renderAppender:()=>null}),k=(0,g.useMemo)(()=>({url:i,opensInNewTab:l==="_blank",title:r}),[i,l,r]),L=we(e,"navListContextLabelledBy",n,t,"launchpad-blocks/nav-links-group");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(_.BlockControls,{children:[(0,o.jsx)(C.ToolbarGroup,{children:(0,o.jsx)(ye,{levelOptions:Be.headerElement.enum,selectedLevel:s,setSelectedHeadingLevel:m=>{t({headerElement:m})}})}),(0,o.jsxs)(C.ToolbarGroup,{children:[(0,o.jsx)(C.ToolbarButton,{icon:U,label:"Edit",onClick:()=>h(!d)}),d?(0,o.jsx)(C.Popover,{position:"bottom",noArrow:!1,shift:!0,offset:10,children:(0,o.jsx)(_.LinkControl,{value:k,showInitialSuggestions:!0,onChange:m=>{t({linkId:m?.id,linkKind:m?.kind,linkType:m?.type,linkHref:m?.url,linkTarget:m?.opensInNewTab?"_blank":"_self",headerContent:m?.title}),h(!1)},onRemove:()=>{t({linkId:void 0,linkKind:void 0,linkType:void 0,linkHref:void 0})}},`${n}-link-edit`)}):null]})]}),(0,o.jsx)(_.InspectorAdvancedControls,{children:(0,o.jsx)(L,{label:"Unique Nav list identifier",help:m=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{children:"This is used to differentiate the nav link groups from each other for accessibility. Must be unique on a page."}),m?null:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("br",{}),(0,o.jsxs)("span",{style:{fontWeight:"bold",color:"red"},children:["This value is used by another nav links group on the page. Using this value: ",u," "]})]})]}),onValidChange:m=>{t({navListContextLabelledBy:m})},idAttribute:u})}),(0,o.jsxs)("div",{...c,children:[(0,o.jsx)(_.RichText,{tagName:s,value:r,onChange:m=>{t({headerContent:m})},allowedFormats:["core/bold","core/italic"],placeholder:"Add a title for this nav links group...",className:`nav-links-group-heading is-style-reset${i?" hyperlink":""}`}),f]})]})}V.displayName="NavLinksGroupEdit";function Se({hasInnerBlocks:e}){return e?Pe:Te}function Te(){return null}function Pe(){return(0,o.jsx)(_.InnerBlocks.Content,{})}const Ze={"launchpad-blocks/navListContextLabelledBy":"navListContextLabelledBy"},Je=null;(0,v.registerBlockType)(F().name,{icon:(0,o.jsx)(W,{iconName:"tabs"}),edit:V,save:Se({hasInnerBlocks:!0})})})(),S})());
