(function(E,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var $=v();for(var c in $)(typeof exports=="object"?exports:E)[c]=$[c]}})(globalThis,()=>(()=>{var L={5656(c){c.exports={apiVersion:3,name:"launchpad-blocks/carousel-content-slides",title:"Carousel content slides",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel"],editorScript:"file:./index.tsx",style:"file:./style.scss",render:"file:./render.php",attributes:{template:{type:"array",default:[{name:"launchpad-blocks/carousel-content-slide",innerBlocks:[{name:"launchpad-blocks/carousel-content-slide-content",innerBlocks:[{name:"core/heading",attributes:{placeholder:"Your template"},innerBlocks:[]},{name:"core/paragraph",attributes:{placeholder:'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.'},innerBlocks:[]}]}]}]},tempInnerBlocksStorage:{type:"array",default:[]},shouldLockChildSlidesToTemplate:{type:"boolean",default:!1},hasDismissedVariationsSelector:{type:"boolean",default:!1},isInTemplateEditMode:{type:"boolean",default:!1},aspectRatio:{type:"string",default:"auto"}},providesContext:{"launchpad-blocks/template":"template","launchpad-blocks/isInTemplateEditMode":"isInTemplateEditMode","launchpad-blocks/shouldLockChildSlidesToTemplate":"shouldLockChildSlidesToTemplate"},usesContext:[],supports:{color:{link:!0}}}}},E={};function v(c){var f=E[c];if(f!==void 0)return f.exports;var o=E[c]={exports:{}};return L[c](o,o.exports,v),o.exports}v.n=c=>{var f=c&&c.__esModule?()=>c.default:()=>c;return v.d(f,{a:f}),f},v.d=(c,f)=>{for(var o in f)v.o(f,o)&&!v.o(c,o)&&Object.defineProperty(c,o,{enumerable:!0,get:f[o]})},v.o=(c,f)=>Object.prototype.hasOwnProperty.call(c,f);var $={};return(()=>{"use strict";const c=window.wp.blocks,f=window.wp.primitives,o=window.ReactJSXRuntime,oe=(0,o.jsx)(f.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(f.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})});var se=v(5656),S=v.n(se);const re=[],w=window.wp.blockEditor,m=window.wp.components,T=window.wp.data,ae=window.wp.editor,M=window.wp.hooks,_=window.wp.i18n,le=window.wp.notices,C=window.React;function tt(e){if(e===void 0)throw new Error(`Pixel value ${e} is undefined`);if(!e.endsWith("px"))throw new Error(`Pixel value ${e} is not a pixel value`);if(e.includes(" "))throw new Error(`Pixel value ${e} contains multiple values`);return Number(e.replace("px",""))}function nt(e){let t="";const n=document.createElement("div");return n.innerHTML=e,t=n.innerText,ie(t)}function ie(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|(?<!-)-+$/g,"")}function ce(e,t=()=>!0){const n=e.parentElement;return n===null?null:t(n)?n:ce(n,t)}function ot(e){if(new RegExp("ms$","ig").test(e))return Number(e.substring(0,e.length-2));if(new RegExp("s$","ig").test(e))return Number(e.substring(0,e.length-1))*1e3;throw new Error("Time didn't end with ms or s so was not correctly parsed.")}function st(){if(typeof document>"u")return"unknown";const e=window.navigator.userAgent;let t="unknown";return e.search("Windows")!==-1?t="Windows":e.search("Mac")!==-1?t="MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?t="UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1&&(t="Linux"),t}function W(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!Object.entries(e[n]).every(([a,r])=>Array.isArray(r)?W(r,t[n]?.[a]):t[n]?.[a]===r))return!1;return!0}const rt=window.wp.coreData;var F,D,h,G,q,de,ue,pe,me,he,fe,ge,be,ve,V,R,xe,y,ke,we,_e,ye,Ce,je,N,U,Se,Te,Be;function X(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function at(e,t,n){const s=t.spacing?.blockGap;let a="none";if(s===!0)a="both";else if(Array.isArray(s)){const l=s.includes("horizontal"),d=s.includes("vertical");l&&d?a="both":l?a="horizontal":d&&(a="vertical")}const r={columnGap:a==="both"||a==="horizontal"?X(n?.spacing?.blockGap,a):void 0,rowGap:a==="both"||a==="vertical"?X(n?.spacing?.blockGap,a):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function Pe(e,t){return e.reduce((n,s)=>{if(s.name===t)n.push(s);else if(s.innerBlocks){const a=Pe(s.innerBlocks,t);a&&n.push(...a)}return n},[])}const lt=()=>{const e=N(()=>({per_page:-1}),[]),t=N(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=N(()=>({}),[]),{postTypes:s,taxonomies:a}=R(g=>{const{getEntityRecords:p}=g(V),b=p("root","postType",e),i=p("root","taxonomy",t);if(!i)return{postTypes:b,taxonomies:i};for(const x of i)n[x.slug]=p("taxonomy",x.slug);return{postTypes:b,taxonomies:i}},[e,t,n]),r=["attachment"],l=[],d=s?.filter(({viewable:g,slug:p})=>g&&!r.includes(p));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const g of d){const p=a?.filter(({types:b,slug:i})=>b.includes(g.slug)&&!l.includes(i));p&&(u[g.slug]=p.map(b=>{const i=n?.[b.slug]??null;return{...b,terms:i}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function it({list:e,containerClassName:t,renderItem:n}){return F(D,{children:[h("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),h("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(s=>n({listItem:s,buttonProps:{type:"button",className:`custom-multiple-select-list-item${s.isSelected?" is-selected":""}`}}))})]})}function Ee(e){return e.indexOf("data:image/svg+xml,")===0}function $e(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function Ne(e){return e.indexOf("dashicons-")===0}function Ie({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return(0,o.jsx)("div",{className:"menu-icon","aria-hidden":"true",children:(0,o.jsx)("br",{})});if(Ee(e))return(0,o.jsx)("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:(0,o.jsx)("br",{})});if($e(e))return(0,o.jsx)("img",{src:new URL(e).toString(),alt:""});if(Ne(e)){const t=e.replace("dashicons-","");return(0,o.jsx)(m.Dashicon,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const ct={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function dt(){const[e,t,n,s]=G("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),a={};if(s&&n&&n.length>0)for(const r of n)a[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)a[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)a[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:a}}function ut({colours:e,attributesDefinition:t,attributes:n,setAttributes:s}){return h(de,{label:y("Custom colours","launchpad"),resetAll:a=>{if(a)for(const r of a)r()},children:h("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(a=>h(Me,{colour:a,attributesDefinition:t,attributes:n,setAttributes:s},a.attributeName))})})}function Me({colour:e,attributesDefinition:t,attributes:n,setAttributes:s}){const[a,r,l,d,u]=G("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),g=()=>t[e.attributeName]?.default!==n[e.attributeName],p=()=>{s({[e.attributeName]:t[e.attributeName]?.default??void 0})},b=U(null);return h(ue,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:p,hasValue:g,onDeselect:p,label:e.label,isShownByDefault:!0,children:h(pe,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:x})=>h(D,{children:h(me,{ref:b,__next40pxDefaultSize:!0,onClick:x,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:F("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[h(he,{colorValue:n[e.attributeName]})," ",h("span",{children:e.label})]})})}),renderContent:()=>h(fe,{paddingSize:"none",children:h("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:h("div",{className:"block-editor-color-gradient-control__panel",children:h(ge,{colors:[...a&&a?.length>0?[{name:"User",colors:a}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...d&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:n[e.attributeName],onChange:i=>{s({[e.attributeName]:i})},disableCustomColors:!u})})})})})},e.attributeName)}function De({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:s}){const[a,r,l]=(0,w.useSettings)("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=r?.map(({name:i,ratio:x})=>({label:i,value:x}))??[],u=a?.map(({name:i,ratio:x})=>({label:i,value:x}))??[],g=[{label:(0,_._x)("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?u:[],...d||[],{label:(0,_._x)("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[p,b]=(0,C.useState)(g.map(i=>i.value).includes(e)?e:"custom");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,_.__)("Aspect ratio","launchpad-blocks"),options:g,value:p,onChange:i=>{b(i),i!=="custom"&&t(i)}}),p==="custom"?(0,o.jsx)(m.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,_.__)("Custom aspect ratio","launchpad-blocks"),help:(0,_.__)("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&s!==void 0?(0,o.jsxs)(m.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:(0,_.__)("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&s(i)},value:n,children:[(0,o.jsx)(m.__experimentalToggleGroupControlOption,{label:"Cover",value:"cover"}),(0,o.jsx)(m.__experimentalToggleGroupControlOption,{label:"Contain",value:"contain"})]}):null]})}const Re=(e,t,n,s)=>{const{getBlocksByName:a,getBlockAttributes:r,getBlockParentsByBlockName:l}=xe(q);return a(s).some(u=>{if(l(u,"core/template-part",!0).length)return!1;const{[n]:g}=r(u);return e!==u&&t===g})};function pt(e,t,n,s,a){const{[t]:r}=e,l=Se(u=>Re(n,u,t,a),[n,t,a]);return Te(()=>{if(r===""){const u=n.slice(0,n.indexOf("-"));s({[t]:u})}if(l(r)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${u}`),s({[t]:u})}},[r,n,s,l,t]),N(()=>function({label:g,help:p,onValidChange:b,idAttribute:i}){const[x,z]=Be(i);return h(be,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:g,help:typeof p=="function"?p(!l(x)):p,value:x,onChange:B=>{z(B),l(B)||b(B)}})},[l])}function mt({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return h(ve,{label:y("Change title heading element","launchpad-blocks"),icon:Y(t),controls:e.map(s=>{{const a=s===t;return{icon:Y(s),title:ze(s),isDisabled:a,onClick:()=>n(s)}}})})}function ze(e){switch(e){case"h2":return y("Heading 2","launchpad-blocks");case"h3":return y("Heading 3","launchpad-blocks");case"h4":return y("Heading 4","launchpad-blocks");case"h5":return y("Heading 5","launchpad-blocks");case"h6":return y("Heading 6","launchpad-blocks");case"p":return y("Paragraph","launchpad-blocks")}}function Y(e){switch(e){case"h2":return ke;case"h3":return we;case"h4":return _e;case"h5":return ye;case"h6":return Ce;case"p":return je}}function ht(e){const{hasChildren:t}=R(n=>{const{getBlocks:s}=n(q);return{hasChildren:s(e).length>0}},[e]);return t}function Ae({clientId:e,blockInfo:t,variations:n,allowSkip:s}){const{replaceInnerBlocks:a,updateBlockAttributes:r}=(0,T.useDispatch)(w.store);return(0,o.jsxs)(m.Placeholder,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[(0,o.jsx)("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":(0,_.__)("Block variations"),children:n.map(l=>(0,o.jsxs)("li",{children:[(0,o.jsx)(m.Button,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?(0,o.jsx)(Ie,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&r(e,l.attributes),l.innerBlocks&&a(e,(0,c.createBlocksFromInnerBlocksTemplate)(l.innerBlocks),!1)}}),(0,o.jsx)("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),s&&(0,o.jsx)("div",{className:"block-editor-block-variation-picker__skip",children:(0,o.jsx)(m.Button,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{a(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:(0,_.__)("Skip")})})]})}function ft({imageId:e,className:t="",size:n="full"}){const s=R(r=>typeof e=="number"&&e>0?r(V).getEntityRecord?.("postType","attachment",e):void 0,[e]);return s?h(D,{children:h("img",{...(()=>{const r={src:s.source_url,className:`attachment-${n} size-${n} ${t}`,width:s.media_details.width,height:s.media_details.height,srcSet:""};return s.media_details?.sizes?.[n]&&(r.src=s.media_details.sizes[n].source_url,r.width=s.media_details.sizes[n].width,r.height=s.media_details.sizes[n].height),r.srcSet=Object.entries(s.media_details.sizes??{}).map(([l,d])=>`${d.source_url} ${d.width}w`).join(", "),r})(),alt:s.alt_text||""})}):null}function I(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>I(n))):t.push([]),t}function gt(e){const t=U(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const a=e()?.scrollHeight??0;if(a){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${a}px !important`)}else t.current.style.minHeight=""}},1)}}const Oe=(0,C.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:s,size:a,isEditorMode:r=!1,...l}=n;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,...l,children:(0,o.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${s}`})})}}});function He(e){return(0,o.jsx)(C.Suspense,{fallback:null,children:(0,o.jsx)(Oe,{...e})})}const Z=[{name:"heading-and-paragraph",title:"Heading and paragraph",icon:(0,o.jsx)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(f.Path,{d:"m4 5.5h2v6.5h1.5v-6.5h2v-1.5h-5.5zm16 10.5h-16v-1.5h16zm-7 4h-9v-1.5h9z"})}),scope:["block"],innerBlocks:[["launchpad-blocks/carousel-content-slide",{},[["launchpad-blocks/carousel-content-slide-content",{},[["core/heading",{placeholder:"Your template"}],["core/paragraph",{placeholder:'To change this template, select the Carousel Content Slides block and click "Edit Template" in the sidebar.'}]]]]]]}];function J({clientId:e,attributes:t,setAttributes:n}){const{template:s,shouldLockChildSlidesToTemplate:a,hasDismissedVariationsSelector:r,tempInnerBlocksStorage:l,isInTemplateEditMode:d,aspectRatio:u}=t,[g,p]=(0,C.useState)(!1),{lockPostSaving:b,lockPostAutosaving:i,unlockPostSaving:x,unlockPostAutosaving:z}=(0,T.useDispatch)(ae.store),{createNotice:B,removeNotice:qe}=(0,T.useDispatch)(le.store),{replaceInnerBlocks:A,updateBlockAttributes:K}=(0,T.useDispatch)(w.store),{hasChildren:Ve,innerBlocks:Q,parentCarousel:O}=(0,T.useSelect)(k=>{const{getBlock:j,getBlocks:Ze,getBlockParentsByBlockName:Je}=k(w.store),Ke=Je(e,["launchpad-blocks/carousel"])[0],Qe=j(Ke),ne=Ze(e);return{hasChildren:ne.length>0,innerBlocks:ne,parentCarousel:Qe}},[e]),Ue=(0,w.useBlockProps)({className:u!=="auto"?"has-aspect-ratio":"",style:{"--slide-aspect-ratio":u}}),{children:Xe,...ee}=(0,w.useInnerBlocksProps)(Ue,{allowedBlocks:["launchpad-blocks/carousel-content-slide"],renderAppender:d&&Q.length>0?()=>null:void 0});function Ye(){b(`templateEditingMode-${e}`),i(`templateEditingMode-${e}`),B("info",`Currently editing the template of the ${S().title}. Save the template using the sidebar block settings of the ${S().title} block to save the content.`,{id:"template-editing-mode",isDismissible:!1}).catch(()=>{})}function te(){x(`templateEditingMode-${e}`),z(`templateEditingMode-${e}`),qe("template-editing-mode").catch(()=>{})}(0,C.useEffect)(()=>{d?(0,M.addFilter)("editor.preSavePost","launchpadBlocks/carouselContentSlides/preventSaveInEditMode",()=>{throw new Error("You can't save the post while you're still editing the carousel template. Please save or discard the template first.")}):(0,M.hasFilter)("editor.preSavePost","launchpadBlocks/carouselContentSlides/preventSaveInEditMode")&&(0,M.removeFilter)("editor.preSavePost","launchpadBlocks/carouselContentSlides/preventSaveInEditMode")},[d]);const H=(0,C.useCallback)(k=>k.map(j=>({name:j.name,attributes:j.attributes,innerBlocks:j.innerBlocks?H(j.innerBlocks):[]})),[]),P=H(Q);return(0,C.useEffect)(()=>{W(O.attributes?.slides,P)||K(O.clientId,{slides:P})},[P,O,K,H]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w.InspectorControls,{children:(0,o.jsx)(m.Panel,{children:(0,o.jsxs)(m.PanelBody,{title:"Template settings",children:[(0,o.jsx)(De,{ratioValue:u,ratioOnChange:k=>{n({aspectRatio:k})}}),(0,o.jsx)(m.ToggleControl,{__nextHasNoMarginBottom:!0,checked:a,label:"Lock slides to template",onChange:k=>{n({shouldLockChildSlidesToTemplate:k})}}),d?(0,o.jsxs)(m.Flex,{children:[(0,o.jsx)(m.FlexItem,{children:(0,o.jsx)(m.Button,{type:"button",variant:"secondary",isDestructive:!0,onClick:()=>{console.log({tempInnerBlocksStorage:l}),A(e,(0,c.createBlocksFromInnerBlocksTemplate)(l.map(k=>I(k)))),n({isInTemplateEditMode:!1}),te()},children:"Discard changes"})}),(0,o.jsx)(m.FlexItem,{children:(0,o.jsx)(m.Button,{type:"button",variant:"primary",onClick:()=>{n({template:P}),A(e,(0,c.createBlocksFromInnerBlocksTemplate)(l.map(k=>I(k)))),n({isInTemplateEditMode:!1}),te()},children:"Save template"})})]}):(0,o.jsx)(m.Button,{type:"button",variant:"primary",isDestructive:!0,onClick:()=>{p(!0)},children:"Edit template"})]})})}),(0,o.jsxs)(m.__experimentalConfirmDialog,{isOpen:g,cancelButtonText:"No thank you",confirmButtonText:"Yes please",onConfirm:()=>{p(!1),Ye(),n({tempInnerBlocksStorage:P}),A(e,(0,c.createBlocksFromInnerBlocksTemplate)(s.map(k=>I(k)))),n({isInTemplateEditMode:!0})},onCancel:()=>{p(!1)},children:["WARNING: Editing the template may result in loss of content on the existing slides.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"If you need to keep the content, you can duplicate or copy this block before ",(0,o.jsx)("br",{}),"you make any changes to ensure you don't lose any content,",(0,o.jsx)("br",{}),"then you can copy content over once you have your new template set up.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("strong",{children:"Are you sure you want to proceed?"})]}),Ve||r||!d?(0,o.jsx)("ul",{...ee,children:Xe}):(0,o.jsx)("div",{...ee,children:(0,o.jsx)(Ae,{clientId:e,blockInfo:{name:S().title,icon:(0,o.jsx)(He,{isEditorMode:!0,iconName:"manual-post-select"})},variations:Z,allowSkip:!0})})]})}J.displayName="CarouselContentSlidesEdit";function Le({hasInnerBlocks:e}){return e?Fe:We}function We(){return null}function Fe(){return(0,o.jsx)(w.InnerBlocks.Content,{})}const Ge={from:[],to:[]},xt={"launchpad-blocks/template":"template","launchpad-blocks/isInTemplateEditMode":"isInTemplateEditMode","launchpad-blocks/shouldLockChildSlidesToTemplate":"shouldLockChildSlidesToTemplate"},kt=null;(0,c.registerBlockType)(S().name,{icon:oe,deprecated:re,edit:J,save:Le({hasInnerBlocks:!0}),transforms:Ge}),Z.forEach(e=>{(0,c.registerBlockVariation)(S().name,e)})})(),$})());
