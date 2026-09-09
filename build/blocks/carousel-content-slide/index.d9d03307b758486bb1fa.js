(function(j,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var B=v();for(var m in B)(typeof exports=="object"?exports:j)[m]=B[m]}})(globalThis,()=>(()=>{var I={4351(m){m.exports={apiVersion:3,name:"launchpad-blocks/carousel-content-slide",title:"Carousel content slide",category:"theme",description:"",textdomain:"launchpad-blocks",keywords:[],parent:["launchpad-blocks/carousel-content-slides"],editorScript:"file:./index.tsx",style:"file:./style.scss",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{backgroundOrOverlayColour:{type:"string"},overlayOpacity:{type:"number",default:50}},providesContext:{},usesContext:["launchpad-blocks/template","launchpad-blocks/shouldLockChildSlidesToTemplate","launchpad-blocks/currentlySelectedSlide","launchpad-blocks/isInTemplateEditMode"],supports:{background:{backgroundImage:!0,backgroundSize:!0},spacing:{padding:["vertical"]},layout:{default:{type:"flex",justifyContent:"center"},allowCustomContentAndWideSize:!1,allowOrientation:!1,allowJustification:!1}}}}},j={};function v(m){var b=j[m];if(b!==void 0)return b.exports;var s=j[m]={exports:{}};return I[m](s,s.exports,v),s.exports}v.n=m=>{var b=m&&m.__esModule?()=>m.default:()=>m;return v.d(b,{a:b}),b},v.d=(m,b)=>{for(var s in b)v.o(b,s)&&!v.o(m,s)&&Object.defineProperty(m,s,{enumerable:!0,get:b[s]})},v.o=(m,b)=>Object.prototype.hasOwnProperty.call(m,b);var B={};return(()=>{"use strict";const m=window.wp.blocks,b=window.wp.primitives,s=window.ReactJSXRuntime,X=(0,s.jsx)(b.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(b.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})});var K=v(4351),D=v.n(K);const Q=[],_=window.wp.blockEditor,k=window.wp.components,A=window.wp.data,Y=window.wp.i18n,P=window.React,Ve=window.wp.coreData;var C,N,u,ee,$,te,oe,ne,H,re,E,le,ae,M,G,R,se,ie,V,x,ce,de,ue,pe,me,he,O,L,fe,ge,be;function W(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Le(e,t,o){const n=t.spacing?.blockGap;let r="none";if(n===!0)r="both";else if(Array.isArray(n)){const a=n.includes("horizontal"),p=n.includes("vertical");a&&p?r="both":a?r="horizontal":p&&(r="vertical")}const l={columnGap:r==="both"||r==="horizontal"?W(o?.spacing?.blockGap,r):void 0,rowGap:r==="both"||r==="vertical"?W(o?.spacing?.blockGap,r):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let a="";return e.minimumColumnWidth?a=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(a=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:a,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function ve(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const r=ve(n.innerBlocks,t);r&&o.push(...r)}return o},[])}const We=()=>{const e=O(()=>({per_page:-1}),[]),t=O(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=O(()=>({}),[]),{postTypes:n,taxonomies:r}=R(h=>{const{getEntityRecords:d}=h(G),f=d("root","postType",e),i=d("root","taxonomy",t);if(!i)return{postTypes:f,taxonomies:i};for(const g of i)o[g.slug]=d("taxonomy",g.slug);return{postTypes:f,taxonomies:i}},[e,t,o]),l=["attachment"],a=[],p=n?.filter(({viewable:h,slug:d})=>h&&!l.includes(d));if(!p||p.length===0)return{postTypes:p,taxonomies:void 0};const c={};for(const h of p){const d=r?.filter(({types:f,slug:i})=>f.includes(h.slug)&&!a.includes(i));d&&(c[h.slug]=d.map(f=>{const i=o?.[f.slug]??null;return{...f,terms:i}}))}return{filteredPostTypes:p,mappedTaxonomies:c===void 0||Object.values(c).length===0?void 0:c}};function qe({list:e,containerClassName:t,renderItem:o}){return C(N,{children:[u("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),u("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function xe(e){return e.indexOf("data:image/svg+xml,")===0}function ke(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function _e(e){return e.indexOf("dashicons-")===0}function ye({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return u("div",{className:"menu-icon","aria-hidden":"true",children:u("br",{})});if(xe(e))return u("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:u("br",{})});if(ke(e))return u("img",{src:new URL(e).toString(),alt:""});if(_e(e)){const t=e.replace("dashicons-","");return u(oe,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Fe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function we(){const[e,t,o,n]=(0,_.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),r={};if(n&&o&&o.length>0)for(const l of o)r[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)r[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)r[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:r}}function Ce({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return(0,s.jsx)(k.__experimentalToolsPanel,{label:(0,Y.__)("Custom colours","launchpad"),resetAll:r=>{if(r)for(const l of r)l()},children:(0,s.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(r=>(0,s.jsx)(Se,{colour:r,attributesDefinition:t,attributes:o,setAttributes:n},r.attributeName))})})}function Se({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[r,l,a,p,c]=(0,_.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==o[e.attributeName],d=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=(0,P.useRef)(null);return(0,s.jsx)(k.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:d,hasValue:h,onDeselect:d,label:e.label,isShownByDefault:!0,children:(0,s.jsx)(k.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:g})=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(k.Button,{ref:f,__next40pxDefaultSize:!0,onClick:g,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,s.jsx)(k.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,s.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,s.jsx)(k.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,s.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,s.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,s.jsx)(k.ColorPalette,{colors:[...r&&r?.length>0?[{name:"User",colors:r}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...p&&a&&a.length>0?[{name:"Default",colors:a}]:[]],value:o[e.attributeName],onChange:i=>{n({[e.attributeName]:i})},disableCustomColors:!c})})})})})},e.attributeName)}function Ue({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[r,l,a]=ee("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),p=l?.map(({name:i,ratio:g})=>({label:i,value:g}))??[],c=r?.map(({name:i,ratio:g})=>({label:i,value:g}))??[],h=[{label:V("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...a?c:[],...p||[],{label:V("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[d,f]=L(h.map(i=>i.value).includes(e)?e:"custom");return C(N,{children:[u(ne,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:x("Aspect ratio","launchpad-blocks"),options:h,value:d,onChange:i=>{f(i),i!=="custom"&&t(i)}}),d==="custom"?u(H,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:x("Custom aspect ratio","launchpad-blocks"),help:x("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?C(re,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:x("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&n(i)},value:o,children:[u(E,{label:"Cover",value:"cover"}),u(E,{label:"Contain",value:"contain"})]}):null]})}const je=(e,t,o,n)=>{const{getBlocksByName:r,getBlockAttributes:l,getBlockParentsByBlockName:a}=se($);return r(n).some(c=>{if(a(c,"core/template-part",!0).length)return!1;const{[o]:h}=l(c);return e!==c&&t===h})};function Ze(e,t,o,n,r){const{[t]:l}=e,a=fe(c=>je(o,c,t,r),[o,t,r]);return ge(()=>{if(l===""){const c=o.slice(0,o.indexOf("-"));n({[t]:c})}if(a(l)){const c=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${c}`),n({[t]:c})}},[l,o,n,a,t]),O(()=>function({label:h,help:d,onValidChange:f,idAttribute:i}){const[g,S]=L(i);return u(H,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof d=="function"?d(!a(g)):d,value:g,onChange:w=>{S(w),a(w)||f(w)}})},[a])}function Je({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return u(le,{label:x("Change title heading element","launchpad-blocks"),icon:q(t),controls:e.map(n=>{{const r=n===t;return{icon:q(n),title:Be(n),isDisabled:r,onClick:()=>o(n)}}})})}function Be(e){switch(e){case"h2":return x("Heading 2","launchpad-blocks");case"h3":return x("Heading 3","launchpad-blocks");case"h4":return x("Heading 4","launchpad-blocks");case"h5":return x("Heading 5","launchpad-blocks");case"h6":return x("Heading 6","launchpad-blocks");case"p":return x("Paragraph","launchpad-blocks")}}function q(e){switch(e){case"h2":return ce;case"h3":return de;case"h4":return ue;case"h5":return pe;case"h6":return me;case"p":return he}}function Xe(e){const{hasChildren:t}=R(o=>{const{getBlocks:n}=o($);return{hasChildren:n(e).length>0}},[e]);return t}function Ke({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:r,updateBlockAttributes:l}=ie($);return C(ae,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[u("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":x("Block variations"),children:o.map(a=>C("li",{children:[u(M,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof a.icon=="string"?u(ye,{iconString:a.icon}):a.icon,iconSize:48,onClick:()=>{a.attributes&&l(e,a.attributes),a.innerBlocks&&r(e,te(a.innerBlocks),!1)}}),u("span",{className:"block-editor-block-variation-picker__variation-label",children:a.title})]},a.name))}),n&&u("div",{className:"block-editor-block-variation-picker__skip",children:u(M,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{r(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:x("Skip")})})]})}function Qe({imageId:e,className:t="",size:o="full"}){const n=R(l=>typeof e=="number"&&e>0?l(G).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?u(N,{children:u("img",{...(()=>{const l={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(l.src=n.media_details.sizes[o].source_url,l.width=n.media_details.sizes[o].width,l.height=n.media_details.sizes[o].height),l.srcSet=Object.entries(n.media_details.sizes??{}).map(([a,p])=>`${p.source_url} ${p.width}w`).join(", "),l})(),alt:n.alt_text||""})}):null}function Oe(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>Oe(o))):t.push([]),t}function Ye(e){const t=be(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const r=e()?.scrollHeight??0;if(r){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${r}px !important`)}else t.current.style.minHeight=""}},1)}}const Te={backgroundOrOverlayColour:{type:"string"},overlayOpacity:{type:"number",default:50}};function F({clientId:e,isSelected:t,context:o,attributes:n,setAttributes:r}){const{style:l,backgroundOrOverlayColour:a,overlayOpacity:p}=n,c=l?.background?.backgroundImage?.url,h=o["launchpad-blocks/isInTemplateEditMode"],d=o["launchpad-blocks/template"],f=o["launchpad-blocks/currentlySelectedSlide"],{isInnerBlockSelected:i,currentSlideOrderNumber:g,parentCarouselClientId:S}=(0,A.useSelect)(y=>{const{hasSelectedInnerBlock:z,getBlockParentsByBlockName:T,getBlockOrder:Ae}=y(_.store),J=T(e,"launchpad-blocks/carousel-content-slides").at(-1),He=T(e,"launchpad-blocks/carousel").at(-1),Ee=(J?Ae(J):[]).findIndex(Me=>e===Me);return{isInnerBlockSelected:z(e,!0),currentSlideOrderNumber:Ee,parentCarouselClientId:He}},[e]),{updateBlockAttributes:w}=(0,A.useDispatch)(_.store),{allPalettes:U}=we(),Z=Object.keys(U).find(y=>U[y].color===a),Ie=(0,_.useBlockProps)({className:`${f===g?"show-slide-in-editor":""} ${c?"has-bg-image":""} ${Z?`has-background-color has-${Z}-background-color`:""}`,style:{...c?{"--overlay-opacity":`${p}%`}:{}}}),De=(0,_.useInnerBlocksProps)(Ie,{allowedBlocks:["launchpad-blocks/carousel-content-slide-content"],template:[["launchpad-blocks/carousel-content-slide-content"]],templateLock:"all"});return(0,P.useEffect)(()=>{if(!h&&d.length===1&&d[0].name==="launchpad-blocks/carousel-content-slide"&&d[0].attributes){const y={...n,...d[0].attributes};Object.entries(n).every(([z,T])=>y[z]===T)&&r(y)}},[d,r,h,n]),(0,P.useEffect)(()=>{S&&(t||i)&&f!==g&&w(S,{currentlySelectedSlide:g})},[t,i,g,S,f,w]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(_.InspectorControls,{group:"styles",children:[(0,s.jsx)(Ce,{colours:[{attributeName:"backgroundOrOverlayColour",label:c?"Overlay":"Background"}],attributes:n,attributesDefinition:Te,setAttributes:r}),c&&a?(0,s.jsx)(k.Panel,{children:(0,s.jsx)(k.PanelBody,{children:(0,s.jsx)(k.RangeControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,help:"Please select how transparent you would like the overlay.",label:"Overlay opacity",max:100,min:0,value:p,onChange:y=>{r({overlayOpacity:y})}})})}):null]}),(0,s.jsx)("div",{...De})]})}F.displayName="CarouselContentSlideEdit";function Pe({hasInnerBlocks:e}){return e?$e:Ne}function Ne(){return null}function $e(){return(0,s.jsx)(_.InnerBlocks.Content,{})}const Re={from:[],to:[]},ze=[],et={},tt=null;(0,m.registerBlockType)(D().name,{icon:X,deprecated:Q,edit:F,save:Pe({hasInnerBlocks:!0}),transforms:Re}),ze.forEach(e=>{(0,m.registerBlockVariation)(D().name,e)})})(),B})());
