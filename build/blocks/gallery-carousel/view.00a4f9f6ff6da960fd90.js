(()=>{"use strict";var e={981:(e,t,o)=>{o.d(t,{F:()=>r});var s=o(490),i=o.n(s);const l=window.wp.hooks;class r{constructor(e){this.carousel=e,this.loop="true"===this.carousel.dataset.loop,this.currentSlide=0;const t=e.querySelector("div[data-carousel-live-region]");if(!t)throw new Error("Carousels must have a live region for accessibility.");this.carouselLiveRegion=t;const o=e.querySelector("ul[data-carousel-slides]");if(!o)throw new Error("Carousels must have a slides element.");this.carouselSlides=o,this.carouselSlides.style.width=`${this.carouselSlides.clientWidth}px`,this.slideCount=o.querySelectorAll(".wp-block-image").length;const s=this.carouselSlides.querySelector(".wp-block-image")?.clientWidth;if(!s)throw new Error("Unable to get the slide width for the carousel.");this.slideWidth=s,(0,l.doAction)("launchpadBlocks.carousel.registerFunctionality",this),(0,l.addAction)("hookAdded","launchpadBlocks.carousel",((e,t,o,s)=>{"launchpadBlocks.carousel.registerFunctionality"===e&&o(this)}))}goToSlide(e,t=!1){if(this.currentSlide===e)return;if(e<0)throw new Error("The slide number must be more than zero.");if(e>this.slideCount)throw new Error("The slide number must less than the total number of slides.");const o=this.carouselSlides.scrollLeft,s=e*this.slideWidth;this.currentSlide=e,this.carouselSlides.scrollBy({left:s-o,behavior:t?"instant":"auto"}),(0,l.doAction)("launchpadBlocks.carousel.updateActiveSlide")}goToPreviousSlide(e=!1){let t=this.currentSlide-1;if(t<0){if(!this.loop)return;t=this.slideCount-1}this.goToSlide(t,e),this.carouselLiveRegion.textContent=`Slide ${this.currentSlide} of ${this.slideCount}`}goToNextSlide(e=!1){let t=this.currentSlide+1;if(t>=this.slideCount){if(!this.loop)return;t=0}this.goToSlide(t,e),this.carouselLiveRegion.textContent=`Slide ${this.currentSlide} of ${this.slideCount}`}}i()((()=>{const e=document.querySelectorAll("[data-carousel]");for(const t of e)""!==t.parentElement?.dataset.lightbox&&new r(t)}))},969:(e,t,o)=>{o.d(t,{Y:()=>i});var s=o(981);class i{carousel=null;constructor(e){this.lightbox=e;const t=this.lightbox.querySelector("button[data-lightbox-close-button]");if(!t)throw new Error("The lightbox must have a close button.");t.addEventListener("click",(()=>{this.close()}))}initCarousel(){this.lightbox.style.opacity="0";const e=this.lightbox.querySelector("div[data-carousel]");if(!e)throw new Error("Expected to initialise a carousel in the gallery lightbox, but one wasn't found.");this.carousel=new s.F(e),this.lightbox.style.opacity=""}open(){this.lightbox.showModal()}close(){this.lightbox.close()}}},490:e=>{e.exports=window.wp.domReady}},t={};function o(s){var i=t[s];if(void 0!==i)return i.exports;var l=t[s]={exports:{}};return e[s](l,l.exports,o),l.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s=o(490),i=o.n(s),l=o(969);class r{carouselSlides=null;lightbox=null;constructor(e){this.carousel=e;const t=e.querySelector("dialog[data-lightbox]");if(!t)return;this.lightbox=new l.Y(t);const o=e.querySelector("ul[data-carousel-slides]");if(!o)throw new Error("Carousels must have a slides element.");this.carouselSlides=o;const s=this.carouselSlides.querySelectorAll("button[data-lightbox-open-button]");for(const e of s)e.addEventListener("click",(()=>{this.lightbox&&(this.lightbox.open(),this.lightbox.carousel||this.lightbox.initCarousel(),this.lightbox.carousel.goToSlide(Number(e.dataset.jumpToSlide),!0))}))}}i()((()=>{const e=document.querySelectorAll("[data-gallery-carousel]");for(const t of e)new r(t)}))})();