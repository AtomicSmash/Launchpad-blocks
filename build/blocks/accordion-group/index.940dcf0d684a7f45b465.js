(function(j,f){if(typeof exports=="object"&&typeof module=="object")module.exports=f();else if(typeof define=="function"&&define.amd)define([],f);else{var S=f();for(var a in S)(typeof exports=="object"?exports:j)[a]=S[a]}})(globalThis,()=>(()=>{var H={3069(a){a.exports={apiVersion:3,name:"launchpad-blocks/accordion-group",title:"Accordion group",category:"theme",description:"A group of accordions.",textdomain:"launchpad-blocks",keywords:["accordion"],editorScript:"file:./index.tsx",viewScript:"file:./view.ts",editorStyle:"file:./editor-style.scss",render:"file:./render.php",attributes:{isMultiple:{type:"boolean",default:!1},accordionGroupId:{type:"string",default:""},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},loadPrioritisation:{type:"string",enum:["cls","bot-traffic"],default:"cls"}},example:{attributes:{isMultiple:!0,accordionGroupId:"group-123",headerElement:"h3"},innerBlocks:[{name:"launchpad-blocks/accordion",attributes:{isInitiallyOpen:!0,accordionId:"single-123",headerContent:"Joke 1"},innerBlocks:[{name:"core/paragraph",attributes:{content:"I was going to sail around the globe in the world\u2019s smallest ship but I bottled it."}}]},{name:"launchpad-blocks/accordion",attributes:{isInitiallyOpen:!0,accordionId:"single-456",headerContent:"Joke 2"},innerBlocks:[{name:"core/paragraph",attributes:{content:"I sailed through my driving test. That\u2019s why I failed it."}}]},{name:"launchpad-blocks/accordion",attributes:{isInitiallyOpen:!0,accordionId:"single-789",headerContent:"Joke 3"},innerBlocks:[{name:"core/paragraph",attributes:{content:"I love the Olympics. My friend and I invented a new type of relay baton: well, he came up with the idea, I ran with it."}}]}]},supports:{color:!0,typography:{fontSize:!0,lineHeight:!0,textAlign:!0},shadow:!0,spacing:{padding:!0,margin:!0}},providesContext:{"launchpad-blocks/accordion-heading-level":"headerElement"},usesContext:[],allowedBlocks:["launchpad-blocks/accordion"]}}},j={};function f(a){var b=j[a];if(b!==void 0)return b.exports;var m=j[a]={exports:{}};return H[a](m,m.exports,f),m.exports}f.n=a=>{var b=a&&a.__esModule?()=>a.default:()=>a;return f.d(b,{a:b}),b},f.d=(a,b)=>{for(var m in b)f.o(b,m)&&!f.o(a,m)&&Object.defineProperty(a,m,{enumerable:!0,get:b[m]})},f.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b);var S={};return(()=>{"use strict";const a=window.ReactJSXRuntime,b=window.wp.blocks,m=window.React,L=(0,m.lazy)(async()=>{const e=await import(`/wp-content/plugins/launchpad-blocks/build/assets-manifest.json?no_cache=${Date.now()}`,{with:{type:"json"}}).then(t=>{if(!t.default["icons/sprite.svg"]||typeof t.default["icons/sprite.svg"]!="string")throw new Error("Icon sprite missing from manifest.");return t.default}).catch(()=>({}));return{default:function(o){const{iconName:n,size:i,isEditorMode:r=!1,...c}=o;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,...c,children:(0,a.jsx)("use",{href:`${r?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/${e["icons/sprite.svg"]}#${n}`})})}}});function U(e){return(0,a.jsx)(m.Suspense,{fallback:null,children:(0,a.jsx)(L,{...e})})}var W=f(3069),F=f.n(W);const w=window.wp.blockEditor,D={isMultiple:{type:"boolean",default:!1},accordionGroupId:{type:"string",default:""},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"},loadPrioritisation:{type:"string",enum:["cls","bot-traffic"],default:"cls"}},J={color:!0,typography:{fontSize:!0,lineHeight:!0,textAlign:!0},shadow:!0,spacing:{padding:!0,margin:!0}},X={...D},K={...J},Q=[{fixture:[`<!-- wp:launchpad-blocks/accordion-group {"isMultiple":true,"accordionGroupId":"7b6bb610-df4d-48c8-afaa-1c88a416658a"} -->
<div id="7b6bb610-df4d-48c8-afaa-1c88a416658a" data-accordion-group="" data-is-multiple="true" class="wp-block-launchpad-blocks-accordion-group"><!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"9f29b837-b0ea-414b-8675-84fa2503dc61","headerContent":"Accordion that is open by default","fontSize":"t-2"} -->
<div data-accordion="" data-is-initially-open="true" id="9f29b837-b0ea-414b-8675-84fa2503dc61" class="wp-block-launchpad-blocks-accordion has-t-2-font-size"><h2><button aria-expanded="true" aria-controls="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" data-state="open" id="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9f29b837-b0ea-414b-8675-84fa2503dc61-trigger" id="9f29b837-b0ea-414b-8675-84fa2503dc61-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->

<!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"544422c1-4e96-4256-9b60-c6c6d18702b7","headerContent":"Accordion that is open by default if multiple accordions allowed","fontSize":"t-3"} -->
<div data-accordion="" data-is-initially-open="true" id="544422c1-4e96-4256-9b60-c6c6d18702b7" class="wp-block-launchpad-blocks-accordion has-t-3-font-size"><h2><button aria-expanded="true" aria-controls="544422c1-4e96-4256-9b60-c6c6d18702b7-panel" data-state="open" id="544422c1-4e96-4256-9b60-c6c6d18702b7-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default if multiple accordions allowed</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="544422c1-4e96-4256-9b60-c6c6d18702b7-trigger" id="544422c1-4e96-4256-9b60-c6c6d18702b7-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->

<!-- wp:launchpad-blocks/accordion {"accordionId":"9ce0f36b-d22c-4b36-9b34-53750bb19b5c","headerContent":"Accordion that is closed by default"} -->
<div data-accordion="" data-is-initially-open="false" id="9ce0f36b-d22c-4b36-9b34-53750bb19b5c" class="wp-block-launchpad-blocks-accordion"><h2><button aria-expanded="true" aria-controls="9ce0f36b-d22c-4b36-9b34-53750bb19b5c-panel" data-state="open" id="9ce0f36b-d22c-4b36-9b34-53750bb19b5c-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is closed by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9ce0f36b-d22c-4b36-9b34-53750bb19b5c-trigger" id="9ce0f36b-d22c-4b36-9b34-53750bb19b5c-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion --></div>
<!-- /wp:launchpad-blocks/accordion-group -->`,`<!-- wp:launchpad-blocks/accordion-group {"accordionGroupId":"0253d25a-e23c-488f-b2e2-73cd5f700a67"} -->
<div id="0253d25a-e23c-488f-b2e2-73cd5f700a67" data-accordion-group="" data-is-multiple="false" class="wp-block-launchpad-blocks-accordion-group"><!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"9111fdaf-0a30-4d45-aa6e-644e430f45a4","headerContent":"Accordion that is open by default","fontSize":"t-2"} -->
<div data-accordion="" data-is-initially-open="true" id="9111fdaf-0a30-4d45-aa6e-644e430f45a4" class="wp-block-launchpad-blocks-accordion has-t-2-font-size"><h2><button aria-expanded="true" aria-controls="9111fdaf-0a30-4d45-aa6e-644e430f45a4-panel" data-state="open" id="9111fdaf-0a30-4d45-aa6e-644e430f45a4-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="9111fdaf-0a30-4d45-aa6e-644e430f45a4-trigger" id="9111fdaf-0a30-4d45-aa6e-644e430f45a4-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->

<!-- wp:launchpad-blocks/accordion {"isInitiallyOpen":true,"accordionId":"2ca8d19c-2ab3-46ce-b2ef-5c3655390da6","headerContent":"Accordion that is open by default if multiple accordions allowed","fontSize":"t-3"} -->
<div data-accordion="" data-is-initially-open="true" id="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6" class="wp-block-launchpad-blocks-accordion has-t-3-font-size"><h2><button aria-expanded="true" aria-controls="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6-panel" data-state="open" id="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is open by default if multiple accordions allowed</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6-trigger" id="2ca8d19c-2ab3-46ce-b2ef-5c3655390da6-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion -->

<!-- wp:launchpad-blocks/accordion {"accordionId":"0c458a68-91f1-46e9-a3d6-05083dbfc397","headerContent":"Accordion that is closed by default"} -->
<div data-accordion="" data-is-initially-open="false" id="0c458a68-91f1-46e9-a3d6-05083dbfc397" class="wp-block-launchpad-blocks-accordion"><h2><button aria-expanded="true" aria-controls="0c458a68-91f1-46e9-a3d6-05083dbfc397-panel" data-state="open" id="0c458a68-91f1-46e9-a3d6-05083dbfc397-trigger" class="accordion-header-button"><span class="accordion-header-button-text">Accordion that is closed by default</span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="accordion-header-button-icon"><use href="https://launchpad.test/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#accordion-arrow"></use></svg></button></h2><div role="region" data-state="open" aria-labelledby="0c458a68-91f1-46e9-a3d6-05083dbfc397-trigger" id="0c458a68-91f1-46e9-a3d6-05083dbfc397-panel" class="accordion-panel"><div class="accordion-panel-inner-wrapper"><!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:launchpad-blocks/accordion --></div>
<!-- /wp:launchpad-blocks/accordion-group -->`],object:{attributes:X,supports:K,save:function({attributes:e}){const{isMultiple:t,accordionGroupId:o}=e,n=w.useBlockProps.save({id:o,"data-accordion-group":"","data-is-multiple":String(t)});return(0,a.jsx)("div",{...n,children:(0,a.jsx)(w.InnerBlocks.Content,{})})},migrate:(e,t)=>[{...e,headerElement:t.at(0)?.attributes?.headerElement??"h2"},[...t]],isEligible:()=>!0}}.object],x=window.wp.components,$=window.wp.data,g=window.wp.primitives,Y=(0,a.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(g.Path,{d:"M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"})}),qe=window.wp.coreData,_=window.wp.i18n,Z=(0,a.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(g.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})}),ee=(0,a.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(g.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})}),te=(0,a.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(g.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),oe=(0,a.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(g.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})}),ae=(0,a.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(g.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),ne=(0,a.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(g.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})});var C,B,l,I,q,ie,re,ce,le,se,z,de,ue,pe,he,me,be,N,ge,M,P,fe,y,E,A,O,ve;function G(e,t){if(e===void 0)return e;let o;if(t==="both")o=e;else if(t==="horizontal")o=e.left;else if(t==="vertical")o=e.top;else return;return o.startsWith("var:")?`var(--wp--${o.replace("var:","").split("|").join("--")})`:o}function Ve(e,t,o){const n=t.spacing?.blockGap;let i="none";if(n===!0)i="both";else if(Array.isArray(n)){const c=n.includes("horizontal"),p=n.includes("vertical");c&&p?i="both":c?i="horizontal":p&&(i="vertical")}const r={columnGap:i==="both"||i==="horizontal"?G(o?.spacing?.blockGap,i):void 0,rowGap:i==="both"||i==="vertical"?G(o?.spacing?.blockGap,i):void 0};if(e===void 0&&typeof t.layout=="object"&&t?.layout?.default&&(e=t.layout.default),!e)return{className:"",style:r};switch(e.type){case"grid":{let c="";return e.minimumColumnWidth?c=`repeat(auto-fill, minmax(min(${e.minimumColumnWidth}, 100%), 1fr))`:e.columnCount&&(c=`repeat(${e.columnCount}, minmax(0, 1fr))`),{className:`is-layout-${e.type}${e.columnCount?` columns-${e.columnCount}`:""}`,style:{gridTemplateColumns:c,...r}}}case"flex":return{className:`is-layout-${e.type} is-${e.orientation??"horizontal"}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}${e.flexWrap==="nowrap"?" is-nowrap":""}`,style:{flexDirection:e.orientation==="vertical"?"column":"row",alignItems:e.orientation==="vertical"?e.justifyContent==="left"||e.justifyContent===void 0?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent:e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment,justifyContent:e.orientation==="vertical"?e.verticalAlignment==="top"?"flex-start":e.verticalAlignment==="bottom"?"flex-end":e.verticalAlignment??"center":e.justifyContent==="left"?"flex-start":e.justifyContent==="right"?"flex-end":e.justifyContent,flexWrap:e.flexWrap??"wrap",...r}};case"constrained":return{className:`is-layout-${e.type}${e.justifyContent?` is-content-justification-${e.justifyContent}`:""}`,style:{...r}};default:return{className:`is-layout-${e.type}`,style:{...r}}}}function we(e,t){return e.reduce((o,n)=>{if(n.name===t)o.push(n);else if(n.innerBlocks){const i=we(n.innerBlocks,t);i&&o.push(...i)}return o},[])}const Le=()=>{const e=A(()=>({per_page:-1}),[]),t=A(()=>({per_page:-1,orderby:"name",context:"edit"}),[]),o=A(()=>({}),[]),{postTypes:n,taxonomies:i}=P(h=>{const{getEntityRecords:s}=h(M),v=s("root","postType",e),d=s("root","taxonomy",t);if(!d)return{postTypes:v,taxonomies:d};for(const k of d)o[k.slug]=s("taxonomy",k.slug);return{postTypes:v,taxonomies:d}},[e,t,o]),r=["attachment"],c=[],p=n?.filter(({viewable:h,slug:s})=>h&&!r.includes(s));if(!p||p.length===0)return{postTypes:p,taxonomies:void 0};const u={};for(const h of p){const s=i?.filter(({types:v,slug:d})=>v.includes(h.slug)&&!c.includes(d));s&&(u[h.slug]=s.map(v=>{const d=o?.[v.slug]??null;return{...v,terms:d}}))}return{filteredPostTypes:p,mappedTaxonomies:u===void 0||Object.values(u).length===0?void 0:u}};function Ue({list:e,containerClassName:t,renderItem:o}){return C(B,{children:[l("style",{dangerouslySetInnerHTML:{__html:`.draggable-list {
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
}`}}),l("section",{className:`custom-multiple-select-list${t!==void 0&&t!==""?` ${t}`:""}`,children:e.map(n=>o({listItem:n,buttonProps:{type:"button",className:`custom-multiple-select-list-item${n.isSelected?" is-selected":""}`}}))})]})}function xe(e){return e.indexOf("data:image/svg+xml,")===0}function ke(e){return e.indexOf("https://")===0||e.indexOf("http://")===0}function _e(e){return e.indexOf("dashicons-")===0}function ye({iconString:e}){if(typeof e!="string")return null;if(e==="none"||e==="div")return l("div",{className:"menu-icon","aria-hidden":"true",children:l("br",{})});if(xe(e))return l("div",{className:"menu-icon svg",style:{backgroundImage:`url("${e}")`},"aria-hidden":"true",children:l("br",{})});if(ke(e))return l("img",{src:new URL(e).toString(),alt:""});if(_e(e)){const t=e.replace("dashicons-","");return l(re,{icon:t,className:"menu-icon"})}throw new Error("The icon string provided is not any of the valid formats.")}const We={author:"Author Id",date:"Date",id:"Id",include:"Included posts by Id",modified:"Date Modified",parent:"Parent by Id",relevance:"Relevance",slug:"Post slug",include_slugs:"Included posts by slug",title:"Title"};function Fe(){const[e,t,o,n]=I("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette"),i={};if(n&&o&&o.length>0)for(const r of o)i[r.slug]={color:r.color,name:r.name};if(t&&t?.length>0)for(const r of t)i[r.slug]={color:r.color,name:r.name};if(e&&e?.length>0)for(const r of e)i[r.slug]={color:r.color,name:r.name};return{userPalette:e,themePalette:t,defaultPalette:o,allPalettes:i}}function Je({colours:e,attributesDefinition:t,attributes:o,setAttributes:n}){return l(ce,{label:y("Custom colours","launchpad"),resetAll:i=>{if(i)for(const r of i)r()},children:l("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:e.map(i=>l(Ce,{colour:i,attributesDefinition:t,attributes:o,setAttributes:n},i.attributeName))})})}function Ce({colour:e,attributesDefinition:t,attributes:o,setAttributes:n}){const[i,r,c,p,u]=I("color.palette.custom","color.palette.theme","color.palette.default","color.defaultPalette","color.custom"),h=()=>t[e.attributeName]?.default!==o[e.attributeName],s=()=>{n({[e.attributeName]:t[e.attributeName]?.default??void 0})},v=O(null);return l(le,{className:"block-editor-tools-panel-color-gradient-settings__item",style:{marginBlockStart:"0"},resetAllFilter:s,hasValue:h,onDeselect:s,label:e.label,isShownByDefault:!0,children:l(se,{className:"block-editor-tools-panel-color-gradient-settings__dropdown",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:d,onToggle:k})=>l(B,{children:l(z,{ref:v,__next40pxDefaultSize:!0,onClick:k,"aria-expanded":d,className:`block-editor-panel-color-gradient-settings__dropdown${d?" is-open":""}`,children:C("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"8px"},children:[l(de,{colorValue:o[e.attributeName]})," ",l("span",{children:e.label})]})})}),renderContent:()=>l(ue,{paddingSize:"none",children:l("div",{className:"block-editor-panel-color-gradient-settings__dropdown-content",children:l("div",{className:"block-editor-color-gradient-control__panel",children:l(pe,{colors:[...i&&i?.length>0?[{name:"User",colors:i}]:[],...r&&r?.length>0?[{name:"Theme",colors:r}]:[],...p&&c&&c.length>0?[{name:"Default",colors:c}]:[]],value:o[e.attributeName],onChange:d=>{n({[e.attributeName]:d})},disableCustomColors:!u})})})})})},e.attributeName)}function Xe({ratioValue:e,ratioOnChange:t,imageFitValue:o,imageFitOnChange:n}){const[i,r,c]=I("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),p=r?.map(({name:d,ratio:k})=>({label:d,value:k}))??[],u=i?.map(({name:d,ratio:k})=>({label:d,value:k}))??[],h=[{label:E("Original","Aspect ratio option for dimensions control","launchpad-blocks"),value:"auto"},...c?u:[],...p||[],{label:E("Custom","Aspect ratio option for dimensions control","launchpad-blocks"),value:"custom"}],[s,v]=ve(h.map(d=>d.value).includes(e)?e:"custom");return C(B,{children:[l(he,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:y("Aspect ratio","launchpad-blocks"),options:h,value:s,onChange:d=>{v(d),d!=="custom"&&t(d)}}),s==="custom"?l(me,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:y("Custom aspect ratio","launchpad-blocks"),help:y("Please enter a custom aspect ratio in the format `width/height`."),onChange:t,value:e}):null,e!=="auto"&&n!==void 0?C(be,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:"Image fit",help:y("If your image doesn't match the selected aspect ratio, should we make the image `cover` the whole area (cutting off parts on the edge) or should we `contain` it (show the whole image in its correct aspect ratio, within a box of the aspect ratio you selected).","launchpad-blocks"),onChange:d=>{typeof d=="string"&&["contain","cover"].includes(d)&&n(d)},value:o,children:[l(N,{label:"Cover",value:"cover"}),l(N,{label:"Contain",value:"contain"})]}):null]})}const je=(e,t,o,n)=>{const{getBlocksByName:i,getBlockAttributes:r,getBlockParentsByBlockName:c}=(0,$.select)(w.store);return i(n).some(u=>{if(c(u,"core/template-part",!0).length)return!1;const{[o]:h}=r(u);return e!==u&&t===h})};function Se(e,t,o,n,i){const{[t]:r}=e,c=(0,m.useCallback)(u=>je(o,u,t,i),[o,t,i]);return(0,m.useEffect)(()=>{if(r===""){const u=o.slice(0,o.indexOf("-"));n({[t]:u})}if(c(r)){const u=o.slice(0,o.indexOf("-"));console.log(`Regenerated ${t} to make it unique. Old value: ${r}. New value: ${u}`),n({[t]:u})}},[r,o,n,c,t]),(0,m.useMemo)(()=>function({label:h,help:s,onValidChange:v,idAttribute:d}){const[k,He]=(0,m.useState)(d);return(0,a.jsx)(x.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:h,help:typeof s=="function"?s(!c(k)):s,value:k,onChange:T=>{He(T),c(T)||v(T)}})},[c])}function Be({levelOptions:e,selectedLevel:t,setSelectedHeadingLevel:o}){return(0,a.jsx)(x.ToolbarDropdownMenu,{label:(0,_.__)("Change title heading element","launchpad-blocks"),icon:R(t),controls:e.map(n=>{{const i=n===t;return{icon:R(n),title:Ie(n),isDisabled:i,onClick:()=>o(n)}}})})}function Ie(e){switch(e){case"h2":return(0,_.__)("Heading 2","launchpad-blocks");case"h3":return(0,_.__)("Heading 3","launchpad-blocks");case"h4":return(0,_.__)("Heading 4","launchpad-blocks");case"h5":return(0,_.__)("Heading 5","launchpad-blocks");case"h6":return(0,_.__)("Heading 6","launchpad-blocks");case"p":return(0,_.__)("Paragraph","launchpad-blocks")}}function R(e){switch(e){case"h2":return Z;case"h3":return ee;case"h4":return te;case"h5":return oe;case"h6":return ae;case"p":return ne}}function Ke(e){const{hasChildren:t}=P(o=>{const{getBlocks:n}=o(q);return{hasChildren:n(e).length>0}},[e]);return t}function Qe({clientId:e,blockInfo:t,variations:o,allowSkip:n}){const{replaceInnerBlocks:i,updateBlockAttributes:r}=fe(q);return C(ge,{icon:t.icon,label:t.name,instructions:"Please choose a variation to start with:",children:[l("ul",{className:"block-editor-block-variation-picker__variations",role:"list","aria-label":y("Block variations"),children:o.map(c=>C("li",{children:[l(z,{__next40pxDefaultSize:!0,variant:"tertiary",className:"block-editor-block-variation-picker__variation",icon:typeof c.icon=="string"?l(ye,{iconString:c.icon}):c.icon,iconSize:48,onClick:()=>{c.attributes&&r(e,c.attributes),c.innerBlocks&&i(e,ie(c.innerBlocks),!1)}}),l("span",{className:"block-editor-block-variation-picker__variation-label",children:c.title})]},c.name))}),n&&l("div",{className:"block-editor-block-variation-picker__skip",children:l(z,{__next40pxDefaultSize:!0,variant:"link",onClick:()=>{i(e,[],!1),r(e,{hasDismissedVariationsSelector:!0})},children:y("Skip")})})]})}function Ye({imageId:e,className:t="",size:o="full"}){const n=P(r=>typeof e=="number"&&e>0?r(M).getEntityRecord?.("postType","attachment",e):void 0,[e]);return n?l(B,{children:l("img",{...(()=>{const r={src:n.source_url,className:`attachment-${o} size-${o} ${t}`,width:n.media_details.width,height:n.media_details.height,srcSet:""};return n.media_details?.sizes?.[o]&&(r.src=n.media_details.sizes[o].source_url,r.width=n.media_details.sizes[o].width,r.height=n.media_details.sizes[o].height),r.srcSet=Object.entries(n.media_details.sizes??{}).map(([c,p])=>`${p.source_url} ${p.width}w`).join(", "),r})(),alt:n.alt_text||""})}):null}function ze(e){const t=[e.name];return e.attributes?t.push(e.attributes):t.push({}),e.innerBlocks?t.push(e.innerBlocks.map(o=>ze(o))):t.push([]),t}function Ze(e){const t=O(null);return t.current=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow?.document.querySelector(".is-root-container")??null,function(){setTimeout(()=>{if(t.current){const i=e()?.scrollHeight??0;if(i){const r=t.current.style;r.minHeight="",t.current.setAttribute("style",`${r.cssText}min-height: ${i}px !important`)}else t.current.style.minHeight=""}},1)}}function V({clientId:e,attributes:t,setAttributes:o,isSelected:n}){const{isMultiple:i,headerElement:r,loadPrioritisation:c}=t,p=(0,w.useBlockProps)({className:`load-prioritise-${c??"cls"}`}),u=(0,w.useInnerBlocksProps)(p,{template:[["launchpad-blocks/accordion",{},[["core/paragraph",{placeholder:"Add accordion content here. Type / to choose a block."}]]]],renderAppender:()=>(0,a.jsx)(w.Inserter,{rootClientId:e,renderToggle:({onToggle:s})=>!n&&!h?null:(0,a.jsx)(x.ButtonGroup,{children:(0,a.jsxs)(x.Button,{className:"accordion-inserter-button is-primary",onClick:s,children:[Y," Add new accordion to this group"]})}),isAppender:!0})});Se(t,"accordionGroupId",e,o,"launchpad-blocks/accordion-group");const h=(0,$.useSelect)(s=>s(w.store).hasSelectedInnerBlock(e,!0),[e]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.InspectorControls,{children:(0,a.jsx)(x.Panel,{children:(0,a.jsx)(x.PanelBody,{title:"Block settings",children:(0,a.jsx)(x.CheckboxControl,{__nextHasNoMarginBottom:!0,label:"Multiple open accordions",help:"Allow multiple accordions in the same group to be open at the same time.",checked:i,onChange:s=>{o({isMultiple:s})}})})})}),(0,a.jsx)(w.InspectorAdvancedControls,{children:(0,a.jsxs)(x.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,help:"Accordions on initial load can either optimise for CLS or Bot traffic, if you're not sure, you should talk to a developer.",isBlock:!0,label:"Initial load prioritisation",onChange:s=>{["cls","bot-traffic"].includes(`${s??""}`)&&o({loadPrioritisation:s})},value:c,children:[(0,a.jsx)(x.__experimentalToggleGroupControlOption,{label:"CLS",value:"cls"}),(0,a.jsx)(x.__experimentalToggleGroupControlOption,{label:"Bots",value:"bot-traffic"})]})}),(0,a.jsx)(w.BlockControls,{children:(0,a.jsx)(x.ToolbarGroup,{children:(0,a.jsx)(Be,{levelOptions:D.headerElement.enum,selectedLevel:r,setSelectedHeadingLevel:s=>{o({headerElement:s})}})})}),(0,a.jsx)("div",{...u})]})}V.displayName="AccordionGroupEdit";function Pe({hasInnerBlocks:e}){return e?Te:Ae}function Ae(){return null}function Te(){return(0,a.jsx)(w.InnerBlocks.Content,{})}const et={"launchpad-blocks/accordion-heading-level":"headerElement"},tt=null;(0,b.registerBlockType)(F().name,{icon:(0,a.jsx)(U,{iconName:"accordion-group"}),edit:V,save:Pe({hasInnerBlocks:!0}),deprecated:Q})})(),S})());
