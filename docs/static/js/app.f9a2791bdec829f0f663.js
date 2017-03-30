webpackJsonp([0],[,,,function(t,e,i){"use strict";var a=i(1),s=i(18),o=i(13),n=i.n(o);a.a.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"/",name:"Container",component:n.a},{path:"/:section",name:"ContainerSection",component:n.a}],scrollBehavior:function(t,e,i){}})},function(t,e,i){i(10);var a=i(0)(i(6),i(16),null,null);t.exports=a.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(1),s=i(4),o=i.n(s),n=i(3);a.a.config.productionTip=!1,new a.a({el:"#app",router:n.a,template:"<App/>",components:{App:o.a}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(12),s=i.n(a),o=i(11),n=i.n(o),r=i(14),c=i.n(r);e.default={name:"container",data:function(){return{startPhoto:{title:"Mt Shuksan, Washington",src:"static/img/mt-shuksan.jpg"},photos:[{title:"Jacobs Well, Texas",src:"static/img/jacobs-well.jpg"},{title:"Bugaboo Spire, Canada",src:"static/img/bugaboo-spire.jpg"},{title:"Snowpatch Spire, Canada",src:"static/img/bugaboo-spire-2.jpg"},{title:"Devils River, Texas",src:"static/img/devils-river.jpg"},{title:"America!, USA",src:"static/img/america.jpg"}]}},mounted:function(){var t=this.$el.querySelector(".hero"),e=this.$el.querySelector(".nav");s()(t),s()(e,80),n.a.init({easing:"easeOutQuad",offset:200})},components:{"lazy-background":c.a},methods:{}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{imageSource:{type:String,required:!0},imageClass:{type:String,required:!1,default:""},loadingImage:{type:String,required:!0},errorImage:{type:String,required:!0},imageErrorCallback:{type:Function,required:!1,default:function(){}},imageSuccessCallback:{type:Function,required:!1,default:function(){}},backgroundSize:{type:String,required:!1,default:"cover"},imageTitle:{type:String,required:!1,default:""},delay:{type:Number,required:!1,default:2e3}},data:function(){return{imageWidth:0,imageHeight:0,imageState:"loading",asyncImage:new Image}},computed:{computedStyle:function(){return"loading"===this.imageState?"background-image: url("+this.loadingImage+");":"error"===this.imageState?"background-image: url("+this.errorImage+");":"loaded"===this.imageState?"background-image: url("+this.asyncImage.src+"); background-size: "+this.backgroundSize:""}},methods:{fetchImage:function(t){this.asyncImage.onload=this.imageOnLoad,this.asyncImage.onerror=this.imageOnError,this.imageState="loading",this.asyncImage.src=this.imageSource},imageOnLoad:function(t){this.imageState="loaded",this.imageWidth=this.asyncImage.naturalWidth,this.imageHeight=this.asyncImage.naturalHeight,this.imageSuccessCallback()},imageOnError:function(){this.imageState="error",this.imageErrorCallback()}},mounted:function(){var t=this,e=this;this.$nextTick(function(){window.setTimeout(function(){e.fetchImage()},t.delay)})}}},function(t,e){},function(t,e){},,,function(t,e,i){i(9);var a=i(0)(i(7),i(15),null,null);t.exports=a.exports},function(t,e,i){var a=i(0)(i(8),i(17),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"photo"},[t._m(0),t._v(" "),i("ul",{staticClass:"photo-slideshow"},[i("li",{staticClass:"photo-slide photo-slide--start"},[i("span",{staticClass:"photo-slideshow-img",style:{backgroundImage:"url("+t.startPhoto.src+")"}}),t._v(" "),i("div",{staticClass:"photo-title-container"},[i("h3",[t._v(t._s(t.startPhoto.title))])])]),t._v(" "),t._l(t.photos,function(t){return i("lazy-background",{key:t.src,staticClass:"photo-slide",attrs:{"image-source":t.src,"image-title":t.title,loadingImage:"static/img/blank.png",errorImage:"static/img/blank.png"}})})],2)]),t._v(" "),i("div",{staticClass:"content"},[i("svg",{staticClass:"svg-mountains",attrs:{viewBox:"0 0 78 43",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[i("path",{attrs:{d:"M66.6605656,36.6542958 L65.5026649,42 L73.1301837,42 L70.5028819,36.6542958 L77.2353516,36.6542958 L65.6220703,10 L60,36.6542958 L66.6605656,36.6542958 Z"}}),t._v(" "),i("path",{attrs:{d:"M32,42 L48.0947266,22 L61.9858398,42 L32,42 Z M38.5556641,41.1205474 L50.2522381,41.0467904 L44.8624445,31.2734957 L38.5556641,41.1205474 Z"}}),t._v(" "),i("path",{attrs:{d:"M23.9510131,35.9025137 L22.5026649,42 L30.1301837,42 L28.1930637,35.3999763 L36.2460938,34.4459685 L26.6230469,0.275390625 L17,36.7259703 L23.9510131,35.9025137 Z"}}),t._v(" "),i("path",{attrs:{d:"M5.04362045,38.172106 L2.11914062,42.0888672 L10.5302734,42.0888672 L9.69876136,38.3261376 L14.0087891,38.46875 L17.7207031,10.2939453 L0.580078125,38.0244141 L5.04362045,38.172106 Z"}})]),t._v(" "),i("div",{staticClass:"nav-container"},[i("ul",{staticClass:"nav"},[i("li",[i("router-link",{attrs:{to:"#about","data-scroll":""}},[t._v("About")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"#experience","data-scroll":""}},[t._v("Experience")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"#projects","data-scroll":""}},[t._v("Projects")])],1)])]),t._v(" "),t._m(1)]),t._v(" "),i("footer",[t._v("copyright © 2017")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero"},[i("h1",{staticClass:"title"},[t._v("Patrick Lewis")]),t._v(" "),i("span",{staticClass:"tagline"},[t._v("User Experience Developer")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sections"},[i("div",{staticClass:"section section--about",attrs:{id:"about"}},[i("h2",[t._v("About")]),t._v(" "),i("p",[t._v("I am a UX/UI Developer with over 10 years experience.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])]),t._v(" "),i("div",{staticClass:"section section--experience",attrs:{id:"experience"}},[i("h2",[t._v("Experience")]),t._v(" "),i("h3",[t._v("UX Developer at HomeAway "),i("small",[t._v("(2011 - 2016)")])]),t._v(" "),i("p",[t._v("\n          desc..\n        ")]),t._v(" "),i("h3",[t._v("UX Developer at BancVue "),i("small",[t._v("(2009 - 2011)")])]),t._v(" "),i("ul",[i("li",[t._v("Create Bank and Credit Union web sites using html, css, Javascript and a content management system.")]),t._v(" "),i("li",[t._v("Introduced the use of SASS, css3 and methods to ensure cross browser consistency.")]),t._v(" "),i("li",[t._v("Improved the efficiency, quality and speed of sites created.")])]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])]),t._v(" "),i("div",{staticClass:"section section--projects",attrs:{id:"projects"}},[i("h2",[t._v("Projects")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("span",{staticClass:"photo-slideshow-img",class:[t.imageClass,t.imageState],style:t.computedStyle,attrs:{"data-width":t.imageWidth,"data-height":t.imageHeight,"data-state":t.imageState}}),t._v(" "),i("div",{staticClass:"photo-title-container"},[i("h3",[t._v(t._s(t.imageTitle))])])])},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.f9a2791bdec829f0f663.js.map