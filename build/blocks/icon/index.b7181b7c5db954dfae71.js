(()=>{"use strict";const e=window.wp.blocks,n=window.wp.blockEditor,c=window.wp.components,o=(window.wp.coreData,window.wp.data,window.wp.i18n,window.React),l=window.ReactJSXRuntime;function i(e){const{iconName:n,size:c,isEditorMode:o=!1,...i}=e;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:c,height:c,...i,children:(0,l.jsx)("use",{href:`${o?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#${n}`})})}const t=window.wp.hooks,s=window.wp.element,r=(0,s.forwardRef)((function({icon:e,size:n=24,...c},o){return(0,s.cloneElement)(e,{width:n,height:n,...c,ref:o})})),a=window.wp.primitives,d=(0,l.jsx)(a.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(a.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),u=(0,l.jsx)(a.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(a.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),p={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(e,n)=>(0,l.jsx)(i,{iconName:e,isEditorMode:!0,...n}),availableIcons:Object.fromEntries(Object.entries({"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},"accordion-single":{title:"Accordion single"},"back-arrow":{title:"Back Arrow"},"tab-group":{title:"Tab group"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0}}).filter((([e,n])=>!0===n.makeAvailableToUser)))}};function w(){return(0,t.applyFilters)("launchpadBlocks.icons",{...p})}function h({iconSelectHeader:e="Icon Select",dataOnSelectedIcon:n,onIconSelect:i,onReset:t}){const s=w(),[r,a]=(0,o.useState)("");return(0,l.jsxs)(c.Panel,{children:[(0,l.jsxs)(c.PanelHeader,{children:[e," ",t?(0,l.jsx)(c.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{t()},size:"small",children:"Reset"}):null]}),(0,l.jsxs)(c.PanelBody,{children:[(0,l.jsx)(c.SearchControl,{label:"Search icons",value:r,onChange:e=>{a(e)}}),(0,l.jsx)("div",{children:Object.entries(s).map((([e,c])=>{if(0===Object.keys(c.availableIcons).length)return null;const o=Object.entries(c.availableIcons).filter((([e,{title:n}])=>!(!e.includes(r)&&!n.includes(r))));return(0,l.jsx)(m,{name:c.name,iconCount:o.length,children:(0,l.jsx)("div",{className:`icon-select ${e}-icon-select`,children:o.map((([o,{title:t}])=>{const s=n.iconName===o&&n.library===e;return(0,l.jsx)("button",{className:`icon-select-icon ${e}-icon-select-icon ${e}-icon-select-icon-${o}${s?" is-selected":""}`,onClick:()=>{i({iconName:o,library:e})},title:t,children:c.renderIcon(o)},o)}))})},e)}))})]})]})}function m({name:e,iconCount:n,children:i}){const[t,s]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{0===n&&t&&s(!1)}),[t,n]),(0,l.jsxs)("div",{className:"icon-select-group-accordion",children:[(0,l.jsx)("h3",{className:"icon-select-group-accordion-header",children:(0,l.jsxs)(c.Button,{type:"button","aria-expanded":t,onClick:()=>{n>0&&s(!t)},disabled:0===n,className:"icon-select-group-accordion-header-button",children:[(0,l.jsxs)("span",{className:"icon-select-group-accordion-title",children:[e," icons"]}),(0,l.jsx)("span",{className:"icon-select-group-accordion-icon-count",children:n}),(0,l.jsx)(r,{className:"icon-select-group-accordion-arrow",icon:t?d:u})]})}),t?i:null]})}function x({attributes:e,setAttributes:o}){const{iconName:i,library:t,size:s}=e,r=(0,n.useBlockProps)({style:{"--icon-size":s}}),a=w();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.InspectorControls,{children:[(0,l.jsx)(c.Panel,{children:(0,l.jsx)(c.PanelBody,{children:(0,l.jsx)(c.__experimentalUnitControl,{__next40pxDefaultSize:!0,label:"Icon size",value:s,onChange:e=>{o({size:e})}})})}),(0,l.jsx)(h,{dataOnSelectedIcon:{iconName:i,library:t},onIconSelect:e=>{o({iconName:e.iconName,library:e.library})}})]}),(0,l.jsx)("div",{...r,children:a[t]?.renderIcon(i)})]})}function b(){return null}function j(){return(0,l.jsx)(n.InnerBlocks.Content,{})}var g;x.displayName="IconEdit",g={edit:x,save:function({hasInnerBlocks:e}){return e?j:b}({hasInnerBlocks:!1})},(0,e.registerBlockType)("launchpad-blocks/icon",g),(0,e.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:function(e){return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,l.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,l.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,l.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}})})();