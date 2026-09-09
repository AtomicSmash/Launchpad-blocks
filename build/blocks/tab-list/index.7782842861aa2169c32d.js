(function(w,v){if(typeof exports=="object"&&typeof module=="object")module.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var y=v();for(var c in y)(typeof exports=="object"?exports:w)[c]=y[c]}})(globalThis,()=>(()=>{var z={5471(c){c.exports={apiVersion:3,name:"launchpad-blocks/tab-list",ancestor:["launchpad-blocks/tabs"],title:"Tab list",category:"theme",description:"The tab list associated with a Tabs block.",textdomain:"launchpad",keywords:[],editorScript:"file:./index.tsx",render:"file:./render.php",attributes:{selectedTab:{type:"string",default:""}},providesContext:{},usesContext:["launchpad/tabsGroupId","launchpad/initiallySelectedTab","launchpad/shouldShowTabSectionTitle","launchpad/title"],supports:{align:!0,alignWide:!0,layout:{default:{type:"flex"}},spacing:{blockGap:!0}}}}},w={};function v(c){var g=w[c];if(g!==void 0)return g.exports;var x=w[c]={exports:{}};return z[c](x,x.exports,v),x.exports}v.n=c=>{var g=c&&c.__esModule?()=>c.default:()=>c;return v.d(g,{a:g}),g},v.d=(c,g)=>{for(var x in g)v.o(g,x)&&!v.o(c,x)&&Object.defineProperty(c,x,{enumerable:!0,get:g[x]})},v.o=(c,g)=>Object.prototype.hasOwnProperty.call(c,g);var y={};return(()=>{"use strict";const c=window.ReactJSXRuntime,g=window.wp.blocks,x=window.React,F=(0,x.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(n){const{iconName:o,size:a,isEditorMode:r=!1,...l}=n;return(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,...l,children:(0,c.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${o}`})})}}});function U(e){return(0,c.jsx)(x.Suspense,{fallback:null,children:(0,c.jsx)(F,{...e})})}var J=v(5471),X=v.n(J);const C=window.wp.blockEditor,K=window.wp.components,D=window.wp.data,Ie=window.wp.coreData,Re=window.wp.i18n;var _,S,i,j,B,Q,Y,Z,ee,te,P,ne,oe,ae,re,I,le,R,ie,se,A,N,ce,ue,b,G,de,pe,me,he,fe,ge,T,O,H,be,ve;function E(e,t){if(e===void 0)return e;let n;if(t==="both")n=e;else if(t==="horizontal")n=e.left;else if(t==="vertical")n=e.top;else return;return n.startsWith("var:")?`var(--wp--${n.replace("var:","").split("|").join("--")})`:n}function xe(e,t,n){const o=t.spacing?.blockGap;let a="none";if(o===!0)a="both";else if(Array.isArray(o)){const l=o.includes("horizontal"),d=o.includes("vertical");l&&d?a="both":l?a="horizontal":d&&(a="vertical")}const r={columnGap:a==="both"||a==="horizontal"?E(n?.spacing?.blockGap,a):void 0,rowGap:a==="both"||a==="vertical"?E(n?.spacing?.blockGap,a):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let l="";return e.minimumColumnWidth?l=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(l=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:l,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function M(e,t){return e.reduce((n,o)=>{if(o.name===t)n.push(o);else if(o.innerBlocks){const a=M(o.innerBlocks,t);a&&n.push(...a)}return n},[])}const Ae=()=>{const e=T(()=>({per_page:-1}),[]),t=T(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),n=T(()=>({}),[]),{postTypes:o,taxonomies:a}=N(h=>{const{getEntityRecords:m}=h(A),f=m("root","postType",e),s=m("root","taxonomy",t);if(!s)return{postTypes:f,taxonomies:s};for(const p of s)n[p.slug]=m("taxonomy",p.slug);return{postTypes:f,taxonomies:s}},[e,t,n]),r=["attachment"],l=[],d=o?.filter(({viewable:h,slug:m})=>h&&!r.includes(m));if(!d||d.length===0)return{postTypes:d,taxonomies:void 0};const u={};for(const h of d){const m=a?.filter(({types:f,slug:s})=>f.includes(h.slug)&&!l.includes(s));m&&(u[h.slug]=m.map(f=>{const s=n?.[f.slug]??null;return{...f,terms:s}}))}return{filteredPostTypes:d,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ge({list:e,containerClassName:t,renderItem:n}){return _(S,{children:[i("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),i("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(o=>n({listItem:o,buttonProps:{type:"button",className:`custom-multiple-select-list-item${o.isSelected?" is-selected":""}`}}))})]})}function _e(e){return e.indexOf("data:image/svg+xml,")===0}function ke(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function we(e){return e.indexOf("dashicons-")===0}function ye({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return i("div",{className:"menu-icon","aria-hidden":"true",children:i("br",{})});if(_e(e))return i("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:i("br",{})});if(ke(e))return i("img",{src:new URL(e).toString(),alt:""});if(we(e)){const t=e.replace("dashicons-","");return i(Y,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const Oe={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function He(){const[e,t,n,o]=j("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),a={};if(o&&n&&n.length>0)for(const r of n)a[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)a[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)a[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:n,allPalettes:a}}function Ee({colours:e,attributesDefinition:t,attributes:n,setAttributes:o}){return i(Z,{label:b("Custom colours","launchpad"),resetAll:a=>{if(a)for(const r of a)r()},children:i("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(a=>i(Ce,{colour:a,attributesDefinition:t,attributes:n,setAttributes:o},a.attributeName))})})}function Ce({colour:e,attributesDefinition:t,attributes:n,setAttributes:o}){const[a,r,l,d,u]=j("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==n[e.attributeName],m=()=>{o({[e.attributeName]:t[e.attributeName]?.default??void 0})},f=O(null);return i(ee,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:m,hasValue:h,onDeselect:m,label:e.label,isShownByDefault:!0,children:i(te,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:s,onToggle:p})=>i(S,{children:i(P,{ref:f,__next40pxDefaultSize:!0,onClick:p,"aria-expanded":s,className:`block-editor-panel-color-gradient-settings__dropdown${s?" is-open":""}`,children:_("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[i(ne,{colorValue:n[e.attributeName]})," ",i("span",{children:e.label})]})})}),renderContent:()=>i(oe,{paddingSize:"none",children:i("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:i("div",{className:"block-editor-color-gradient-control__panel",children:i(ae,{colors:[...a&&a?.length>0?[{name:"User",colors:a}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...d&&l&&l.length>0?[{name:"Default",colors:l}]:[]],value:n[e.attributeName],onChange:s=>{o({[e.attributeName]:s})},disableCustomColors:!u})})})})})},e.attributeName)}function Me({ratioValue:e,ratioOnChange:t,imageFitValue:n,imageFitOnChange:o}){const[a,r,l]=j("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),d=r?.map(({name:s,ratio:p})=>({label:s,value:p}))??[],u=a?.map(({name:s,ratio:p})=>({label:s,value:p}))??[],h=[{label:G("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...l?u:[],...d||[],{label:G("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[m,f]=H(h.map(s=>s.value).includes(e)?e:"custom");return _(S,{children:[i(re,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:b("Aspect ratio","launchpad-blocks"),options:h,value:m,onChange:s=>{f(s),s!=="custom"&&t(s)}}),m==="custom"?i(I,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:b("Custom aspect ratio","launchpad-blocks"),help:b("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&o!==void 0?_(le,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:b("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:s=>{typeof s=="string"&&["contain","cover"].includes(s)&&o(s)},value:n,children:[i(R,{label:"Cover",value:"cover"}),i(R,{label:"Contain",value:"contain"})]}):null]})}const Se=(e,t,n,o)=>{const{getBlocksByName:a,getBlockAttributes:r,getBlockParentsByBlockName:l}=ce(B);return a(o).some(u=>{if(l(u,"core/template-part",!0).length)return!1;const{[n]:h}=r(u);return e!==u&&t===h})};function We(e,t,n,o,a){const{[t]:r}=e,l=be(u=>Se(n,u,t,a),[n,t,a]);return ve(()=>{if(r===""){const u=n.slice(0,n.indexOf("-"));o({[t]:u})}if(l(r)){const u=n.slice(0,n.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${u}`),o({[t]:u})}},[r,n,o,l,t]),T(()=>function({label:h,help:m,onValidChange:f,idAttribute:s}){const[p,$]=H(s);return i(I,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof m=="function"?m(!l(p)):m,value:p,onChange:k=>{$(k),l(k)||f(k)}})},[l])}function Le({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:n}){return i(ie,{label:b("Change title heading element","launchpad-blocks"),icon:W(t),controls:e.map(o=>{{const a=o===t;return{icon:W(o),title:Te(o),isDisabled:a,onClick:()=>n(o)}}})})}function Te(e){switch(e){case"h2":return b("Heading 2","launchpad-blocks");case"h3":return b("Heading 3","launchpad-blocks");case"h4":return b("Heading 4","launchpad-blocks");case"h5":return b("Heading 5","launchpad-blocks");case"h6":return b("Heading 6","launchpad-blocks");case"p":return b("Paragraph","launchpad-blocks")}}function W(e){switch(e){case"h2":return de;case"h3":return pe;case"h4":return me;case"h5":return he;case"h6":return fe;case"p":return ge}}function qe(e){const{hasChildren:t}=N(n=>{const{getBlocks:o}=n(B);return{hasChildren:o(e).length>0}},[e]);return t}function Ve({clientId:e,blockInfo:t,variations:n,allowSkip:o}){const{replaceInnerBlocks:a,updateBlockAttributes:r}=ue(B);return _(se,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[i("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":b("Block variations"),children:n.map(l=>_("li",{children:[i(P,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof l.icon=="string"?i(ye,{iconString:l.icon}):l.icon,iconSize:48,onClick:()=>{l.attributes&&r(e,l.attributes),l.innerBlocks&&a(e,Q(l.innerBlocks),!1)}}),i("span",{className:"block-editor-block-variation-picker__variation-label",children:l.title})]},l.name))}),o&&i("div",{className:"block-editor-block-variation-picker__skip",children:i(P,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{a(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:b("Skip")})})]})}function Fe({imageId:e,className:t="",size:n="full"}){const o=N(r=>typeof e=="number"&&e>0?r(A).getEntityRecord?.("postType","attachment",e):void 0,[e]);return o?i(S,{children:i("img",{...(()=>{const r={src:o.source_url,className:`attachment-${n} size-${n} ${t}`,width:o.media_details.width,height:o.media_details.height,srcSet:""};return o.media_details?.sizes?.[n]&&(r.src=o.media_details.sizes[n].source_url,r.width=o.media_details.sizes[n].width,r.height=o.media_details.sizes[n].height),r.srcSet=Object.entries(o.media_details.sizes??{}).map(([l,d])=>`${d.source_url} ${d.width}w`).join(", "),r})(),alt:o.alt_text||""})}):null}function je(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(n=>je(n))):t.push([]),t}function Ue(e){const t=O(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const a=e()?.scrollHeight??0;if(a){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${a}px !important`)}else t.current.style.minHeight=""}},1)}}const Be={align:!0,alignWide:!0,layout:{default:{type:"flex"}},spacing:{blockGap:!0}};function L({clientId:e,context:t,attributes:n,attributes:{selectedTab:o},setAttributes:a}){const{layout:r,style:l}=n,{className:d,style:u}=xe(r,Be,l),h=(0,C.useBlockProps)({className:d,style:u}),{tabGroupClientId:m,tabPanelGroup:f}=(0,D.useSelect)(p=>{const{getBlockParentsByBlockName:$,getBlock:k}=p(C.store),q=$(e,"launchpad-blocks/tabs")[0],ze=k(q).innerBlocks,V=M(ze,"launchpad-blocks/tab-panel-group"),De=V?V[0]??null:null;return{tabGroupClientId:q,tabPanelGroup:De}},[e]),{updateBlockAttributes:s}=(0,D.useDispatch)(C.store);return(0,x.useEffect)(()=>{if(o===""){const p=t["launchpad/initiallySelectedTab"]===""?t["launchpad/initiallySelectedTab"]:f?.innerBlocks[0]?.attributes.id;p&&p!==""&&a({selectedTab:p})}},[o,t,a,f?.innerBlocks]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{...h,children:(0,c.jsx)(K.Slot,{name:`${t["launchpad/tabsGroupId"]}TabList`,fillProps:{selectedTab:o,initiallySelectedTab:t["launchpad/initiallySelectedTab"],setSelectedTab:p=>{a({selectedTab:p})},setInitiallySelectedTab:p=>{s([m],{initiallySelectedTab:p})}}})})})}L.displayName="TabListEdit";function Pe({hasInnerBlocks:e}){return e?$e:Ne}function Ne(){return null}function $e(){return(0,c.jsx)(C.InnerBlocks.Content,{})}const Je={},Xe=null;(0,g.registerBlockType)(X().name,{icon:(0,c.jsx)(U,{iconName:"tab-list"}),edit:L,save:Pe({hasInnerBlocks:!1})})})(),y})());
