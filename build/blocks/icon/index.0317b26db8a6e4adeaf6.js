(()=>{"use strict";const c=window.wp.blocks,e=window.wp.blockEditor,n=window.wp.components,o=(window.wp.coreData,window.wp.data,window.wp.i18n,window.React),l=window.ReactJSXRuntime;function t(c){const{iconName:e,size:n,isEditorMode:o=!1,...t}=c;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,...t,children:(0,l.jsx)("use",{href:`${o?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#${e}`})})}const i=window.wp.hooks,s={"launchpad-blocks":{name:"Launchpad blocks",renderIcon:(c,e)=>(0,l.jsx)(t,{iconName:c,isEditorMode:!0,...e}),availableIcons:Object.fromEntries(Object.entries({"accordion-arrow":{title:"Accordion arrow"},"accordion-group":{title:"Accordion group"},"accordion-single":{title:"Accordion single"},"back-arrow":{title:"Back Arrow"},"tab-group":{title:"Tab group"},"tab-list":{title:"Tab list"},"tab-panel-group":{title:"Tab panel group"},"tab-panel":{title:"Tab panel"},"menu-open-icon":{title:"Menu Open Icon"},"menu-close-icon":{title:"Menu Close Icon"},"manual-post-select":{title:"Manual post select"},plus:{title:"Plus",makeAvailableToUser:!0},minus:{title:"Minus",makeAvailableToUser:!0}}).filter((([c,e])=>!0===e.makeAvailableToUser)))}};function r(){return(0,i.applyFilters)("launchpadBlocks.icons",{...s})}function a({dataOnSelectedIcon:c,onIconSelect:e}){const t=r();return(0,l.jsx)(n.BaseControl,{__nextHasNoMarginBottom:!0,label:"Icon Select",children:Object.entries(t).map((([n,t])=>0===Object.keys(t.availableIcons).length?null:(0,l.jsxs)(o.Fragment,{children:[(0,l.jsxs)("p",{children:[t.name," icons"]}),(0,l.jsx)("div",{className:`icon-select ${n}-icon-select`,children:Object.entries(t.availableIcons).map((([o,{title:i}])=>{const s=c.iconName===o&&c.library===n;return(0,l.jsx)("button",{className:`icon-select-icon ${n}-icon-select-icon ${n}-icon-select-icon-${o}${s?" is-selected":""}`,onClick:()=>{e({iconName:o,library:n})},title:i,children:t.renderIcon(o)},o)}))})]},n)))})}function d({attributes:c,setAttributes:o}){const{iconName:t,library:i}=c,s=(0,e.useBlockProps)(),d=r();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.InspectorControls,{children:(0,l.jsx)(n.Panel,{children:(0,l.jsx)(n.PanelBody,{children:(0,l.jsx)(a,{dataOnSelectedIcon:{iconName:t,library:i},onIconSelect:c=>{o({iconName:c.iconName,library:c.library})}})})})}),(0,l.jsx)("div",{...s,children:d[i]?.renderIcon(t)})]})}function u(){return null}function p(){return(0,l.jsx)(e.InnerBlocks.Content,{})}var w;d.displayName="IconEdit",w={edit:d,save:function({hasInnerBlocks:c}){return c?p:u}({hasInnerBlocks:!1})},(0,c.registerBlockType)("launchpad-blocks/icon",w),(0,c.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:function(c){return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...c,children:[(0,l.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,l.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,l.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}})})();