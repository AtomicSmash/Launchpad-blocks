(()=>{"use strict";var e={747:(e,n,c)=>{var o=c(609),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,c){var o,t={},l=null,d=null;for(o in void 0!==c&&(l=""+c),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,o)&&!i.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===t[o]&&(t[o]=n[o]);return{$$typeof:r,type:e,key:l,ref:d,props:t,_owner:a.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},81:(e,n,c)=>{e.exports=c(747)},609:e=>{e.exports=window.React}},n={};const c=window.wp.blocks,o=window.wp.components;window.wp.coreData,window.wp.data;var r=function c(o){var r=n[o];if(void 0!==r)return r.exports;var t=n[o]={exports:{}};return e[o](t,t.exports,c),t.exports}(81);function t(e){const{iconName:n,size:c,isEditorMode:o=!1,...t}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:c,height:c,...t,children:(0,r.jsx)("use",{href:`${o?`${window.location.protocol}//${window.location.host}`:""}/wp-content/plugins/launchpad-blocks/build/icons/sprite.svg#${n}`})})}const s={isInitiallyOpen:{type:"boolean",default:!1},accordionId:{type:"string"},headerContent:{type:"string"},headerElement:{type:"string",enum:["h2","h3","h4","h5","h6","p"],default:"h2"}},a="launchpad-blocks/accordion",i=window.wp.blockEditor,l=window.wp.i18n,d=window.wp.primitives,h=(0,r.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(d.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})}),p=(0,r.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(d.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})}),u=(0,r.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(d.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),w=(0,r.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(d.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})}),v=(0,r.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(d.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})}),x=(0,r.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(d.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})});function m({clientId:e,attributes:n,setAttributes:c}){const{isInitiallyOpen:a,headerContent:d,headerElement:h}=n,p=h,u=(0,i.useBlockProps)();return c({accordionId:e}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.InspectorControls,{children:(0,r.jsx)(o.Panel,{children:(0,r.jsx)(o.PanelBody,{title:"Block settings",children:(0,r.jsx)(o.CheckboxControl,{label:"Is accordion open by default?",help:"Allows you to set the initial state for the accordion. If only one accordion is allowed to be open at a time in the group, this setting will only apply to the first accordion with this setting enabled.",checked:a,onChange:e=>{c({isInitiallyOpen:e})}})})})}),(0,r.jsx)(i.BlockControls,{children:(0,r.jsx)(o.ToolbarGroup,{children:(0,r.jsx)(o.DropdownMenu,{popoverProps:{className:"accordion-heading-element-dropdown"},icon:(0,r.jsx)(j,{elementType:h}),label:(0,l.__)("Change title heading element","launchpad-blocks"),controls:s.headerElement.enum.map((e=>{{const n=e===h;return{icon:(0,r.jsx)(j,{elementType:e}),title:g(e),isDisabled:n,onClick:()=>c({headerElement:e}),role:"menuitemradio"}}}))})})}),(0,r.jsxs)("div",{...u,children:[(0,r.jsx)(p,{children:(0,r.jsxs)("div",{className:"accordion-header-button",children:[(0,r.jsx)(i.RichText,{tagName:"span",className:"accordion-header-button-text",onChange:e=>{c({headerContent:e})},value:d,allowedFormats:["core/bold","core/code","core/italic","core/keyboard","core/strikethrough","core/subscript","core/superscript","core/underline"],placeholder:(0,l.__)("Write your accordion header…","launchpad-blocks")}),(0,r.jsx)(t,{iconName:"accordion-arrow",className:"accordion-header-button-icon",isEditorMode:!0,size:"32"})]})}),(0,r.jsx)("div",{className:"accordion-panel",children:(0,r.jsx)("div",{className:"accordion-panel-inner-wrapper",children:(0,r.jsx)(i.InnerBlocks,{renderAppender:()=>(0,r.jsx)(b,{rootClientId:e})})})})]})]})}function g(e){switch(e){case"h2":return(0,l.__)("Heading 2","launchpad-blocks");case"h3":return(0,l.__)("Heading 3","launchpad-blocks");case"h4":return(0,l.__)("Heading 4","launchpad-blocks");case"h5":return(0,l.__)("Heading 5","launchpad-blocks");case"h6":return(0,l.__)("Heading 6","launchpad-blocks");case"p":return(0,l.__)("Paragraph","launchpad-blocks")}}function j({elementType:e}){switch(e){case"h2":return h;case"h3":return p;case"h4":return u;case"h5":return w;case"h6":return v;case"p":return x;default:return null}}function b({rootClientId:e}){return(0,r.jsx)(i.Inserter,{rootClientId:e,renderToggle:({onToggle:e})=>(0,r.jsx)(o.ButtonGroup,{children:(0,r.jsx)(o.Button,{className:"accordion-inserter-button is-primary",onClick:e,children:"Add a new block"})}),isAppender:!0})}var y,k;m.displayName="AccordionEdit",y=a,k={icon:(0,r.jsx)(t,{iconName:"accordion-single"}),edit:m,save:function({attributes:e}){const{isInitiallyOpen:n,accordionId:c,headerContent:o,headerElement:s}=e,a=s,l=i.useBlockProps.save({"data-accordion":"","data-is-initially-open":n,id:c});return(0,r.jsxs)("div",{...l,children:[(0,r.jsx)(a,{children:(0,r.jsxs)("button",{"aria-expanded":"true","aria-controls":`${c}-panel`,"data-state":"open",id:`${c}-trigger`,className:"accordion-header-button",children:[(0,r.jsx)(i.RichText.Content,{tagName:"span",className:"accordion-header-button-text",value:o}),(0,r.jsx)(t,{iconName:"accordion-arrow",className:"accordion-header-button-icon",isEditorMode:!0,size:"32"})]})}),(0,r.jsx)("div",{role:"region","data-state":"open","aria-labelledby":`${c}-trigger`,id:`${c}-panel`,className:"accordion-panel",children:(0,r.jsx)("div",{className:"accordion-panel-inner-wrapper",children:(0,r.jsx)(i.InnerBlocks.Content,{})})})]})}},(0,c.registerBlockType)(y,k),(0,c.registerBlockCollection)("launchpad-blocks",{title:"Launchpad blocks",icon:function(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",xmlSpace:"preserve",...e,children:[(0,r.jsx)("circle",{cx:2.9,cy:6,r:.6}),(0,r.jsx)("circle",{cx:16.8,cy:14.6,r:.6}),(0,r.jsx)("path",{d:"m4.9 14.2-2.1.1 1.1-1.8c-.1-.2-.2-.4-.2-.7l-2.6 1.4c.1.2.1.3.2.5l1.9-1L2 14.8h2.4L2.6 16c.1.1.2.3.4.4l2.5-1.6-.6-.6zm11-10.6-.6 2.1 2.2-.2-1.7 1.2c.1.3.2.4.3.6l2.4-1.8c-.1-.2-.2-.4-.3-.5l-2.2.2.6-2.1c-.1-.1-.3-.3-.5-.4l-2.1 2c.1.1.3.2.4.3l1.5-1.4zm.7 5.1 2.8-.7c0-.2-.1-.4-.1-.5l-2.8.7c0 .2 0 .4.1.5zM4 2.7l.7 3.5c.1-.3.3-.4.4-.6L5 4.8c.4-.4.9-.8 1.4-1.1l.6.4.6-.3-3.1-1.5c-.2.1-.3.2-.5.4zm1.8.8c-.3.3-.6.5-1 .8l-.2-1.4 1.2.6zm2.8-2.4c.5-.1.9-.2 1.3-.2V.4C8.8.4 7.7.7 6.7 1l.1.4c.4-.1.8-.3 1.3-.3l.5 2.4c.2 0 .4-.1.6-.1l-.6-2.3zM14.3 15l.7 1c-.5.4-1 .7-1.5 1l-.6-1c-.2.1-.3.2-.5.2l1.5 2.5c.2-.1.3-.2.5-.3l-.7-1.1c.5-.3 1.1-.6 1.6-1l.7 1.1c.2-.1.3-.2.4-.4l-1.7-2.4c-.1.2-.2.3-.4.4zm4-5.2c-.9-.2-1.6.3-1.8 1.4-.2.9.1 1.6.8 1.8.1-.2.1-.4.2-.5-.4-.1-.7-.5-.6-1.2.1-.8.6-1 1.2-.9.6.1 1 .5.8 1.3-.1.6-.4.9-.8.9-.1.2-.1.4-.2.6.7.1 1.3-.4 1.5-1.4.3-1.2-.2-1.9-1.1-2zM11 17.9c-.4-.1-1.1-.1-1.4-.2-.3-.1-.4-.1-.4-.3 0-.2.3-.4.8-.4.6 0 .9.2 1 .6.2 0 .4-.1.6-.1-.1-.6-.6-.9-1.5-.9s-1.4.3-1.4.9c0 .4.2.6.7.7.4.1 1 .1 1.4.2.3.1.4.1.4.3 0 .3-.3.4-1 .4-.6 0-1-.2-1.1-.5-.2 0-.4 0-.6-.1 0 .8.7 1.1 1.7 1.1.9 0 1.6-.3 1.6-.9-.2-.5-.4-.7-.8-.8zm-8.9-7.5c.1-.4.2-1.1.3-1.4.1-.3.2-.4.4-.4s.3.3.2.8c0 .6-.2 1-.6 1v.6c.6 0 1-.5 1-1.5.1-.9-.1-1.4-.7-1.5-.4 0-.6.2-.7.6-.2.4-.2 1.1-.3 1.4-.1.3-.2.4-.4.4-.3 0-.4-.4-.3-1 0-.6.2-1.1.6-1.1 0-.2.1-.4.1-.6-.8 0-1.1.6-1.2 1.6-.1 1 .2 1.7.8 1.7.5.1.7-.2.8-.6zm12-7.6c.3-.8 0-1.6-1.1-1.9-1.1-.3-1.8 0-2.1.9-.3.9.1 1.6 1.2 1.9 1.1.4 1.8 0 2-.9zm-1.9.5c-.8-.3-.9-.8-.8-1.3.2-.6.6-.9 1.4-.6.8.3.9.8.8 1.3-.2.5-.6.8-1.4.6zM6.7 15.7 4 17.4c.1.1.3.2.4.3l.7-.4c.4.3 1 .6 1.5.8v.8c.2.1.4.1.6.2V16c-.1-.1-.1-.1-.3-.1-.1-.2-.1-.2-.2-.2zM5.5 17l1.1-.7v1.3c-.3-.2-.8-.4-1.1-.6z"})]})}})})();