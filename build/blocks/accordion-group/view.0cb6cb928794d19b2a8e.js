(()=>{"use strict";var t={n:e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},d:(e,i)=>{for(var o in i)t.o(i,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:i[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=window.wp.domReady;var i=t.n(e);function o(t,e=()=>!0){const i=t.parentElement;return null===i?null:e(i)?i:o(i,e)}class s{childAccordions=[];constructor(t){var e;this.accordionGroup=t;const i=t.id;if(void 0===i||""===i)throw new Error("Failed to get ID of accordion.");this.id=i,this.allowMultipleOpenAccordions="true"===t.dataset.isMultiple,this.initialiseAccordions(),this.scrollParent=null!==(e=o(this.accordionGroup,(t=>t.scrollHeight>t.clientHeight)))&&void 0!==e?e:document.body}getId(){return this.id}closeAllAccordions(){for(const t of this.childAccordions)t.close()}initialiseAccordions(){const t=document.querySelectorAll(`[id='${this.accordionGroup.id}'] > [data-accordion]`);let e=!0;for(const i of t){const t="true"===i.dataset.isInitiallyOpen;let o;this.allowMultipleOpenAccordions?o=t:e&&t?(o=!0,e=!1):o=!1;const s=new r(i,this);o||s.close(),this.childAccordions.push(s)}}}class r{closeTimeout=null;constructor(t,e){const i=t.id;if(void 0===i||""===i)throw new Error("Failed to get ID of accordion.");this.id=i,this.state="open";const o=document.getElementById(`${i}-trigger`);if(!o)throw new Error("Unable to determine the accordions trigger button.");this.trigger=o;const s=document.getElementById(`${i}-panel`);if(!s)throw new Error("Unable to determine the accordions content panel.");this.panel=s,this.accordionGroup=e,this.trigger.addEventListener("click",(()=>{this.toggle()})),this.panel.style.height=getComputedStyle(this.panel).getPropertyValue("height")}getId(){return this.id}getState(){return this.state}open(){if(!this.accordionGroup.allowMultipleOpenAccordions){const t=this.accordionGroup.childAccordions.findIndex((t=>t===this)),e=this.accordionGroup.childAccordions.findIndex((t=>"open"===t.state));if(t>e&&-1!==e){let t;try{t=function(t){if(void 0===t)throw new Error(`Pixel value ${t} is undefined`);if(!t.endsWith("px"))throw new Error(`Pixel value ${t} is not a pixel value`);if(t.includes(" "))throw new Error(`Pixel value ${t} contains multiple values`);return Number(t.replace("px",""))}(document.querySelector('.accordion-panel[data-state="open"]')?.style.height)}catch{t=0}const i=-1*t;this.accordionGroup.childAccordions[e].close({instant:!0}),this.accordionGroup.scrollParent.scrollBy({top:i,behavior:"instant"})}else this.accordionGroup.closeAllAccordions();this.closeTimeout&&clearTimeout(this.closeTimeout)}this.panel.style.display="",setTimeout((()=>{this.state="open",this.panel.removeAttribute("aria-hidden"),this.panel.setAttribute("data-state","open"),this.trigger.setAttribute("aria-expanded","true"),this.trigger.setAttribute("data-state","open")}),1)}close({instant:t}={instant:!1}){if(t)this.panel.style.display="none",this.state="collapsed",this.panel.setAttribute("aria-hidden","true"),this.panel.setAttribute("data-state","collapsed"),this.trigger.setAttribute("aria-expanded","false"),this.trigger.setAttribute("data-state","collapsed");else{const t=function(t){if(new RegExp("ms$","ig").test(t))return Number(t.substring(0,t.length-2));if(new RegExp("s$","ig").test(t))return 1e3*Number(t.substring(0,t.length-1));throw new Error("Time didn't end with ms or s so was not correctly parsed.")}(getComputedStyle(this.panel).getPropertyValue("--launchpad-accordion-open-close-timing"));this.state="collapsed",this.panel.setAttribute("aria-hidden","true"),this.panel.setAttribute("data-state","collapsed"),this.trigger.setAttribute("aria-expanded","false"),this.trigger.setAttribute("data-state","collapsed"),this.closeTimeout=setTimeout((()=>{this.panel.style.display="none"}),t)}}toggle(){"open"===this.state?this.close():this.open()}debug(){console.log({id:this.id,state:this.state,groupId:this.accordionGroup.getId(),isInitiallyOpen:"true"===this.panel.parentElement?.dataset.isInitiallyOpen})}}i()((()=>{!function(){const t=document.querySelectorAll("[data-accordion-group]");for(const e of t)new s(e)}()}))})();