(function(w,b){if(typeof exports=="object"&&typeof module=="object")module.exports=b();else if(typeof define=="function"&&define.amd)define([],b);else{var j=b();for(var n in j)(typeof exports=="object"?exports:w)[n]=j[n]}})(globalThis,()=>(()=>{var D={9589(n){n.exports={apiVersion:3,name:"launchpad-blocks/fancy-list",title:"Fancy list",category:"theme",description:"A block to display a semantic list of content.",allowedBlocks:["launchpad-blocks/fancy-list-item"],textdomain:"launchpad-blocks",keywords:[],editorScript:"file:./index.tsx",render:"file:./render.php",attributes:{columnCount:{type:"integer",default:1},type:{type:"string",enum:["ul","ol"],default:"ul"},markerType:{type:"string",enum:["normal","icon"],default:"normal"},markerColour:{type:"string"},markerInnerColour:{type:"string"}},providesContext:{"launchpad-blocks/fancyListType":"type","launchpad-blocks/fancyListMarkerType":"markerType"},usesContext:[],supports:{typography:{fontSize:!0}},example:{attributes:{columnCount:1,type:"ul",markerType:"normal",markerInnerColour:"#ff0000",markerColour:"#ff0000"},innerBlocks:[{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"Alice."}},{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"The White Rabbit."}},{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"The Cheshire Cat."}},{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"The Mad Hatter."}},{name:"launchpad-blocks/fancy-list-item",attributes:{textContent:"The Queen of Hearts."}}]}}}},w={};function b(n){var g=w[n];if(g!==void 0)return g.exports;var k=w[n]={exports:{}};return D[n](k,k.exports,b),k.exports}b.n=n=>{var g=n&&n.__esModule?()=>n.default:()=>n;return b.d(g,{a:g}),g},b.d=(n,g)=>{for(var k in g)b.o(g,k)&&!b.o(n,k)&&Object.defineProperty(n,k,{enumerable:!0,get:g[k]})},b.o=(n,g)=>Object.prototype.hasOwnProperty.call(n,g);var j={};return(()=>{"use strict";const n=window.ReactJSXRuntime,g=window.wp.blocks,k=window.React,W=(0,k.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:r,size:a,isEditorMode:l=!1,...s}=o;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,...s,children:(0,n.jsx)("use",{href:`${l?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${r}`})})}}});function q(e){return(0,n.jsx)(k.Suspense,{fallback:null,children:(0,n.jsx)(W,{...e})})}var U=b(9589),V=b.n(U);const y=window.wp.blockEditor,f=window.wp.components,we=window.wp.coreData,je=window.wp.data,J=window.wp.i18n;var C,B,c,$,N,X,Q,K,R,Y,M,Z,ee,H,A,S,te,oe,O,x,ne,re,ae,le,se,ie,T,G,ce,ue,de;function E(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Te(e,t,o){const r=t.spacing?.blockGap;let a="none";if(r===!0)a="both";else if(Array.isArray(r)){const s=r.includes("horizontal"),d=r.includes("vertical");s&&d?a="both":s?a="horizontal":d&&(a="vertical")}const l={columnGap:a==="both"||a==="horizontal"?E(o?.spacing?.blockGap,a):void 0,rowGap:a==="both"||a==="vertical"?E(o?.spacing?.blockGap,a):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:l};switch(e.type){case"grid":{let s="";return e.minimumColumnWidth?s=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(s=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:s,...l}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...l}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...l}};default:return{className:`is-layout-${e.type}`,style:{...l}}}}function me(e,t){return e.reduce((o,r)=>{if(r.name===t)o.push(r);else if(r.innerBlocks){const a=me(r.innerBlocks,t);a&&o.push(...a)}return o},[])}const Be=()=>{const e=T(()=>({per_page:-1}),[]),t=T(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=T(()=>({}),[]),{postTypes:r,taxonomies:a}=S(p=>{const{getEntityRecords:m}=p(A),h=m("root","postType",e),i=m("root","taxonomy",t);if(!i)return{postTypes:h,taxonomies:i};for(const v of i)o[v.slug]=m("taxonomy",v.slug);return{postTypes:h,taxonomies:i}},[e,t,o]),l=["attachment"],s=[],d=r?.filter(({viewable:p,slug:m})=>p&&!l.includes(m));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const p of d){const m=a?.filter(({types:h,slug:i})=>h.includes(p.slug)&&!s.includes(i));m&&(u[p.slug]=m.map(h=>{const i=o?.[h.slug]??null;return{...h,terms:i}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ne({list:e,containerClassName:t,renderItem:o}){return C(B,{children:[c("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),c("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(r=>o({listItem:r,buttonProps:{type:"button",className:`custom-multiple-select-list-item${r.isSelected?" is-selected":""}`}}))})]})}function pe(e){return e.indexOf("data:image/svg+xml,")===0}function fe(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function he(e){return e.indexOf("dashicons-")===0}function ge({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return c("div",{className:"menu-icon","aria-hidden":"true",children:c("br",{})});if(pe(e))return c("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:c("br",{})});if(fe(e))return c("img",{src:new URL(e).toString(),alt:""});if(he(e)){const t=e.replace("dashicons-","");return c(Q,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Se={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Pe(){const[e,t,o,r]=$("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),a={};if(r&&o&&o.length>0)for(const l of o)a[l.slug]={color:l.color,name:l.name};if(t&&t?.length>0)for(const l of t)a[l.slug]={color:l.color,name:l.name};if(e&&e?.length>0)for(const l of e)a[l.slug]={color:l.color,name:l.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:a}}function P({colours:e,attributesDefinition:t,attributes:o,setAttributes:r}){return(0,n.jsx)(f.__experimentalToolsPanel,{label:(0,J.__)("Custom colours","launchpad"),resetAll:a=>{if(a)for(const l of a)l()},children:(0,n.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(a=>(0,n.jsx)(be,{colour:a,attributesDefinition:t,attributes:o,setAttributes:r},a.attributeName))})})}function be({colour:e,attributesDefinition:t,attributes:o,setAttributes:r}){const[a,l,s,d,u]=(0,y.useSettings)("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),p=()=>t[e.attributeName]?.default!==o[e.attributeName],m=()=>{r({[e.attributeName]:t[e.attributeName]?.default??void 0})},h=(0,k.useRef)(null);return(0,n.jsx)(f.__experimentalToolsPanelItem,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:m,hasValue:p,onDeselect:m,label:e.label,isShownByDefault:!0,children:(0,n.jsx)(f.Dropdown,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:i,onToggle:v})=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(f.Button,{ref:h,__next40pxDefaultSize:!0,onClick:v,"aria-expanded":i,className:`block-editor-panel-color-gradient-settings__dropdown${i?" is-open":""}`,children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[(0,n.jsx)(f.ColorIndicator,{colorValue:o[e.attributeName]})," ",(0,n.jsx)("span",{children:e.label})]})})}),renderContent:()=>(0,n.jsx)(f.__experimentalDropdownContentWrapper,{paddingSize:"none",children:(0,n.jsx)("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:(0,n.jsx)("div",{className:"block-editor-color-gradient-control__panel",children:(0,n.jsx)(f.ColorPalette,{colors:[...a&&a?.length>0?[{name:"User",colors:a}]:[],...l&&l?.length>0?[{name:"Theme",colors:l}]:[],...d&&s&&s.length>0?[{name:"Default",colors:s}]:[]],value:o[e.attributeName],onChange:i=>{r({[e.attributeName]:i})},disableCustomColors:!u})})})})})},e.attributeName)}function Ie({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:r}){const[a,l,s]=$("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=l?.map(({name:i,ratio:v})=>({label:i,value:v}))??[],u=a?.map(({name:i,ratio:v})=>({label:i,value:v}))??[],p=[{label:O("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...s?u:[],...d||[],{label:O("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[m,h]=G(p.map(i=>i.value).includes(e)?e:"custom");return C(B,{children:[c(K,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:x("Aspect ratio","launchpad-blocks"),options:p,value:m,onChange:i=>{h(i),i!=="custom"&&t(i)}}),m==="custom"?c(R,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:x("Custom aspect ratio","launchpad-blocks"),help:x("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&r!==void 0?C(Y,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:x("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:i=>{typeof i=="string"&&["contain","cover"].includes(i)&&r(i)},value:o,children:[c(M,{label:"Cover",value:"cover"}),c(M,{label:"Contain",value:"contain"})]}):null]})}const xe=(e,t,o,r)=>{const{getBlocksByName:a,getBlockAttributes:l,getBlockParentsByBlockName:s}=te(N);return a(r).some(u=>{if(s(u,"core/template-part",!0).length)return!1;const{[o]:p}=l(u);return e!==u&&t===p})};function ze(e,t,o,r,a){const{[t]:l}=e,s=ce(u=>xe(o,u,t,a),[o,t,a]);return ue(()=>{if(l===""){const u=o.slice(0,o.indexOf("-"));r({[t]:u})}if(s(l)){const u=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${l}. New value: ${u}`),r({[t]:u})}},[l,o,r,s,t]),T(()=>function({label:p,help:m,onValidChange:h,idAttribute:i}){const[v,_]=G(i);return c(R,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:p,help:typeof m=="function"?m(!s(v)):m,value:v,onChange:z=>{_(z),s(z)||h(z)}})},[s])}function De({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return c(Z,{label:x("Change title heading element","launchpad-blocks"),icon:L(t),controls:e.map(r=>{{const a=r===t;return{icon:L(r),title:ve(r),isDisabled:a,onClick:()=>o(r)}}})})}function ve(e){switch(e){case"h2":return x("Heading 2","launchpad-blocks");case"h3":return x("Heading 3","launchpad-blocks");case"h4":return x("Heading 4","launchpad-blocks");case"h5":return x("Heading 5","launchpad-blocks");case"h6":return x("Heading 6","launchpad-blocks");case"p":return x("Paragraph","launchpad-blocks")}}function L(e){switch(e){case"h2":return ne;case"h3":return re;case"h4":return ae;case"h5":return le;case"h6":return se;case"p":return ie}}function $e(e){const{hasChildren:t}=S(o=>{const{getBlocks:r}=o(N);return{hasChildren:r(e).length>0}},[e]);return t}function Re({clientId:e,blockInfo:t,variations:o,allowSkip:r}){const{replaceInnerBlocks:a,updateBlockAttributes:l}=oe(N);return C(ee,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[c("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":x("Block variations"),children:o.map(s=>C("li",{children:[c(H,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof s.icon=="string"?c(ge,{iconString:s.icon}):s.icon,iconSize:48,onClick:()=>{s.attributes&&l(e,s.attributes),s.innerBlocks&&a(e,X(s.innerBlocks),!1)}}),c("span",{className:"block-editor-block-variation-picker__variation-label",children:s.title})]},s.name))}),r&&c("div",{className:"block-editor-block-variation-picker__skip",children:c(H,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{a(e,[],!1),l(e,{hasDismissedVariationsSelector:!0})},children:x("Skip")})})]})}function Me({imageId:e,className:t="",size:o="full"}){const r=S(l=>typeof e=="number"&&e>0?l(A).getEntityRecord?.("postType","attachment",e):void 0,[e]);return r?c(B,{children:c("img",{...(()=>{const l={src:r.source_url,className:`attachment-${o} size-${o} ${t}`,width:r.media_details.width,height:r.media_details.height,srcSet:""};return r.media_details?.sizes?.[o]&&(l.src=r.media_details.sizes[o].source_url,l.width=r.media_details.sizes[o].width,l.height=r.media_details.sizes[o].height),l.srcSet=Object.entries(r.media_details.sizes??{}).map(([s,d])=>`${d.source_url} ${d.width}w`).join(", "),l})(),alt:r.alt_text||""})}):null}function ke(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>ke(o))):t.push([]),t}function He(e){const t=de(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const a=e()?.scrollHeight??0;if(a){const l=t.current.style;l.minHeight="",t.current.setAttribute("style",`${l.cssText}min-height: ${a}px !important`)}else t.current.style.minHeight=""}},1)}}const I={columnCount:{type:"integer",default:1},type:{type:"string",enum:["ul","ol"],default:"ul"},markerType:{type:"string",enum:["normal","icon"],default:"normal"},markerColour:{type:"string"},markerInnerColour:{type:"string"}};function F({attributes:e,setAttributes:t}){const{type:o,markerColour:r,markerType:a,markerInnerColour:l,columnCount:s}=e,d=o=="ul"?"ul":"ol",u=o==="ul"&&a==="normal",p=!!r,m=!!l&&!u,h=o==="ul"&&a==="icon",i=(0,y.useBlockProps)({style:{"--column-count":s,...p?{"--marker-colour":r}:{},...m?{"--marker-inner-colour":l}:{}},className:[p?"has-marker-colour":void 0,m?"has-marker-inner-colour":void 0,h?"should-have-icon":void 0].filter(Boolean).join(" ")}),v=(0,y.useInnerBlocksProps)(i,{template:[["launchpad-blocks/fancy-list-item"]],templateLock:!1});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.InspectorControls,{children:(0,n.jsx)(f.Panel,{children:(0,n.jsxs)(f.PanelBody,{title:"List options",children:[(0,n.jsx)(f.RangeControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,help:"Please select how many list items you want to show on a single row. It may be less than your selected value if there are space constraints.",initialPosition:1,label:"Max columns",max:10,min:1,onChange:_=>{t({columnCount:_})},allowReset:!0,value:s}),(0,n.jsxs)(f.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Type of list",onChange:_=>{typeof _=="string"&&["ul","ol"].includes(_)&&t({type:_})},value:o,children:[(0,n.jsx)(f.__experimentalToggleGroupControlOption,{label:"Bullet list",value:"ul"}),(0,n.jsx)(f.__experimentalToggleGroupControlOption,{label:"Numbered list",value:"ol"})]}),o==="ul"?(0,n.jsxs)(f.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Type of list marker",onChange:_=>{typeof _=="string"&&["normal","icon"].includes(_)&&t({markerType:_})},value:a,children:[(0,n.jsx)(f.__experimentalToggleGroupControlOption,{label:"Normal",value:"normal"}),(0,n.jsx)(f.__experimentalToggleGroupControlOption,{label:"Icon",value:"icon"})]}):null]})})}),(0,n.jsx)(y.InspectorControls,{group:"styles",children:o==="ul"?a==="normal"?(0,n.jsx)(P,{colours:[{attributeName:"markerColour",label:"Marker colour"}],attributes:e,attributesDefinition:I,setAttributes:t}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P,{colours:[{attributeName:"markerColour",label:"Background colour"},{attributeName:"markerInnerColour",label:"Icon colour"}],attributes:e,attributesDefinition:I,setAttributes:t}),(0,n.jsx)(y.ContrastChecker,{backgroundColor:r,textColor:l})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P,{colours:[{attributeName:"markerColour",label:"Background colour"},{attributeName:"markerInnerColour",label:"Number colour"}],attributes:e,attributesDefinition:I,setAttributes:t}),(0,n.jsx)(y.ContrastChecker,{backgroundColor:r,textColor:l})]})}),(0,n.jsx)(d,{...v})]})}F.displayName="FancyListEdit";function _e({hasInnerBlocks:e}){return e?Ce:ye}function ye(){return null}function Ce(){return(0,n.jsx)(y.InnerBlocks.Content,{})}const Ae={"launchpad-blocks/fancyListType":"type","launchpad-blocks/fancyListMarkerType":"markerType"},Oe=null;(0,g.registerBlockType)(V().name,{icon:(0,n.jsx)(q,{iconName:"list"}),edit:F,save:_e({hasInnerBlocks:!0})})})(),j})());
