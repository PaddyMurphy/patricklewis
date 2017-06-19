webpackJsonp([0],[,,,function(t,e,a){"use strict";var i=a(1),s=a(31),n=a(21),r=a.n(n);i.a.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"/",name:"Container",component:r.a},{path:"/:section",name:"ContainerSection",component:r.a},{path:"*",redirect:"/"}]})},function(t,e,a){var i=a(0)(a(7),a(27),null,null,null);t.exports=i.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(1),s=a(4),n=a.n(s),r=a(3);i.a.config.productionTip=!1,new i.a({el:"#app",router:r.a,template:"<App/>",components:{App:n.a}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(5),s=a.n(i);e.default={name:"contact-layout",mounted:function(){setTimeout(function(){new s.a({offset:0})},1e3)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(20),s=a.n(i),n=a(23),r=a.n(n),o=a(22),l=a.n(o),c=a(24),u=a.n(c),d=a(18),v=(a.n(d),a(19)),p=a.n(v),h=a(33),m=a.n(h);e.default={name:"layout",mounted:function(){p.a.init({easing:"easeOutQuad",offset:40});var t=document.querySelector(".slideshow-projects");this.wallopProject=new m.a(t);var e=document.querySelector(".slideshow-mobile");this.wallopElMobile=new m.a(e),window.scrollBreakpoint(function(){return this.scrollY>100},function(t){document.body.classList[t?"add":"remove"]("sticky-header")})},components:{"lazy-background":u.a,"header-layout":r.a,"contact-layout":s.a,"footer-layout":l.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footer-layout"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(17),s=a.n(i);e.default={name:"header-layout",mounted:function(){var t=this.$el.querySelector(".tabs-menu");new s.a(t,{threshold:50})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{imageSource:{type:String,required:!0},imageClass:{type:String,required:!1,default:""},loadingImage:{type:String,required:!0},errorImage:{type:String,required:!0},imageErrorCallback:{type:Function,required:!1,default:function(){}},imageSuccessCallback:{type:Function,required:!1,default:function(){}},backgroundSize:{type:String,required:!1,default:"cover"},imageTitle:{type:String,required:!1,default:""},delay:{type:Number,required:!1,default:0}},data:function(){return{imageWidth:0,imageHeight:0,imageState:"loading",asyncImage:new Image}},computed:{computedStyle:function(){return"loading"===this.imageState?"background-image: url("+this.loadingImage+");":"error"===this.imageState?"background-image: url("+this.errorImage+");":"loaded"===this.imageState?"background-image: url("+this.asyncImage.src+"); background-size: "+this.backgroundSize:""}},methods:{fetchImage:function(t){this.asyncImage.onload=this.imageOnLoad,this.asyncImage.onerror=this.imageOnError,this.imageState="loading",this.asyncImage.src=this.imageSource},imageOnLoad:function(t){this.imageState="loaded",this.imageWidth=this.asyncImage.naturalWidth,this.imageHeight=this.asyncImage.naturalHeight,this.imageSuccessCallback()},imageOnError:function(){this.imageState="error",this.imageErrorCallback()}},mounted:function(){var t=this;window.setTimeout(function(){t.$nextTick(function(){t.fetchImage()})},this.delay)}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,a){function i(t){a(13)}var s=a(0)(a(8),a(25),i,"data-v-028ae627",null);t.exports=s.exports},function(t,e,a){function i(t){a(14)}var s=a(0)(a(9),a(26),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(15)}var s=a(0)(a(10),a(29),i,"data-v-7edb5210",null);t.exports=s.exports},function(t,e,a){function i(t){a(16)}var s=a(0)(a(11),a(30),i,null,null);t.exports=s.exports},function(t,e,a){var i=a(0)(a(12),a(28),null,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section section--contact",attrs:{id:"contact"}},[a("div",{staticClass:"container content"},[a("div",{staticClass:"contact-content"},[a("h2",{staticClass:"title is-spaced"},[t._v("Contact")]),t._v(" "),a("p",[t._v("\n        Email me at "),a("span",{staticStyle:{"unicode-bidi":"bidi-override",direction:"rtl"}},[t._v(" moc.liamg@siwelbkcirtap")])]),t._v(" "),a("ul",{staticClass:"contact-list"},[a("li",[a("a",{attrs:{href:"static/patrick-lewis-resume.pdf",target:"_blank"}},[t._v("Resume PDF")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/patrick-lewis-4b71484/"}},[t._v("LinkedIn")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mountaindrawn.com/riverflow",target:"_blank"}},[t._v("Riverflow app")]),t._v(" (built with vue-pwa and bulma)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.flickr.com/photos/paddymurphy"}},[t._v("Flickr")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://dribbble.com/paddymurphy"}},[t._v("Dribbble")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vimeo.com/paddymurphy"}},[t._v("Vimeo")])])])]),t._v(" "),a("div",{staticClass:"contact-side"},[a("img",{staticClass:"b-lazy contact-photo",attrs:{src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",width:"150",height:"195","data-src":"static/img/layout/patrick.jpg",alt:"drawing of Patrick"}})])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("header-layout"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("section",{staticClass:"section content section--casestudy",attrs:{id:"case-study"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"title is-spaced"},[t._v("Case Study")]),t._v(" "),a("h3",{staticClass:"subtitle"},[t._v("HomeAway Onboarding")]),t._v(" "),a("p",[t._v("The last project I worked on was the new HomeAway onboarding experience. With a goal of increasing owner onboarding we user tested and iterated on the design to reach the final product.")]),t._v(" "),a("p",[t._v("The new onboarding flow was created with React to be responsive and work on both desktop and mobile. Below is what the desktop onboarding flow.")]),t._v(" "),a("div",{staticClass:"Wallop Wallop--slide slideshow-projects"},[a("div",{staticClass:"Wallop-list"},[t._l(6,function(t){return a("div",{staticClass:"Wallop-item"},[a("img",{staticClass:"b-lazy",attrs:{src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-src":"static/img/layout/ha-onboarding-"+t+".png",alt:"",width:"100%",height:"auto"}})])}),t._v(" "),a("button",{staticClass:"Wallop-buttonPrevious"},[t._v("Previous")]),t._v(" "),a("button",{staticClass:"Wallop-buttonNext"},[t._v("Next")])],2)]),t._v(" "),a("p",[t._v("The HomeAway onboarding flow on mobile.")]),t._v(" "),a("div",{staticClass:"Wallop Wallop--slide slideshow-mobile"},[a("div",{staticClass:"Wallop-list"},[t._l(6,function(t){return a("div",{staticClass:"Wallop-item"},[a("img",{staticClass:"b-lazy",attrs:{src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-src":"static/img/layout/ha-mobile-"+t+".jpg",alt:""}})])}),t._v(" "),a("button",{staticClass:"Wallop-buttonPrevious"},[t._v("Previous")]),t._v(" "),a("button",{staticClass:"Wallop-buttonNext"},[t._v("Next")])],2)])])]),t._v(" "),a("lazy-background",{staticClass:"section section--photo",attrs:{"image-source":"static/img/layout/devils-river.jpg",loadingImage:"static/img/layout/blank.png",errorImage:"static/img/layout/blank.png"}}),t._v(" "),a("contact-layout"),t._v(" "),a("footer-layout")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section content section--about",attrs:{id:"about"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"title is-spaced"},[t._v("About")]),t._v(" "),a("p",[t._v("UX/UI Developer with over 10 years experience creating web applications. I enjoy working collaboratively with a team to design, prototype, test and deliver products. When not behind the computer I am usually climbing, kayaking or at Barton Springs.")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section content section--experience",attrs:{id:"experience"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"title is-spaced"},[t._v("Experience")]),t._v(" "),a("h3",{staticClass:"subtitle"},[t._v("UX Developer at HomeAway "),a("small",[t._v("(2015 - 2016)")])]),t._v(" "),a("ul",[a("li",[t._v("Helped establish the new Design Technologist role within the UX Design team.")]),t._v(" "),a("li",[t._v("Colloborated with designers and product managers to create testable prototypes.")]),t._v(" "),a("li",[t._v("Participated in user testing to create new iterations based the results.")]),t._v(" "),a("li",[t._v("Joined team responsible for developing the final product to help with creating the experience.")])]),t._v(" "),a("h3",{staticClass:"subtitle"},[t._v("UI Developer at HomeAway "),a("small",[t._v("(2011 - 2015)")])]),t._v(" "),a("ul",[a("li",[t._v("Lead UI developer on property management team for 3 years.")]),t._v(" "),a("li",[t._v("Created property management dashboard with tools enabling the management of many properties at once.")]),t._v(" "),a("li",[t._v("Built early products primarily with backbone, handlebars, and an in-house 'thin-ui' java based system which allows decoupling of the UI and backend applications.")]),t._v(" "),a("li",[t._v("Adopted React later to replace the UI stack.")])]),t._v(" "),a("h3",{staticClass:"subtitle"},[t._v("Front-end Developer at BancVue "),a("small",[t._v("(2009 - 2011)")])]),t._v(" "),a("ul",[a("li",[t._v("Created credit union web sites using html, css, Javascript and a content management system.")]),t._v(" "),a("li",[t._v("Introduced the use of SASS and methods to ensure cross browser consistency.")]),t._v(" "),a("li",[t._v("Improved the efficiency, quality and speed of sites created.")])]),t._v(" "),a("h3",{staticClass:"subtitle"},[t._v("Additional experience")]),t._v(" "),a("ul",[a("li",[t._v("Javascript along with React, Vuejs, and webpack")]),t._v(" "),a("li",[t._v("css and pre / post processors")]),t._v(" "),a("li",[t._v("semantic and accessible html5")]),t._v(" "),a("li",[t._v("UX/UI best practices")]),t._v(" "),a("li",[t._v("Currently playing with Vuejs "),a("a",{attrs:{href:"https://cordova.apache.org/",target:"_blank"}},[t._v("Cordova")]),t._v(" apps")]),t._v(" "),a("li",[t._v("4 years United States Marine Corps")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photo-window"},[a("span",{staticClass:"photo-title"},[t._v("Devils River, Texas")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("main",[a("router-view")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:[t.imageClass,t.imageState],style:t.computedStyle,attrs:{"data-width":t.imageWidth,"data-height":t.imageHeight,"data-state":t.imageState}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("svg",{staticClass:"svg-mountains",attrs:{viewBox:"0 0 78 43",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("path",{attrs:{d:"M66.6605656,36.6542958 L65.5026649,42 L73.1301837,42 L70.5028819,36.6542958 L77.2353516,36.6542958 L65.6220703,10 L60,36.6542958 L66.6605656,36.6542958 Z",id:"Combined-Shape-Copy"}}),t._v(" "),a("path",{attrs:{d:"M32,42 L48.0947266,22 L61.9858398,42 L32,42 Z M38.5556641,41.1205474 L50.2522381,41.0467904 L44.8624445,31.2734957 L38.5556641,41.1205474 Z"}}),t._v(" "),a("path",{attrs:{d:"M23.9510131,35.9025137 L22.5026649,42 L30.1301837,42 L28.1930637,35.3999763 L36.2460938,34.4459685 L26.6230469,0.275390625 L17,36.7259703 L23.9510131,35.9025137 Z"}}),t._v(" "),a("path",{attrs:{d:"M5.04362045,38.172106 L2.11914062,42.0888672 L10.5302734,42.0888672 L9.69876136,38.3261376 L14.0087891,38.46875 L11.0673828,10.0390625 L0.580078125,38.0244141 L5.04362045,38.172106 Z"}})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("span",{staticClass:"github"},[t._v("Created with "),a("a",{attrs:{href:"https://github.com/vuejs-templates/pwa",target:"_blank"}},[t._v("Vuejs pwa")]),t._v(" and "),a("a",{attrs:{href:"http://bulma.io/",target:"_blank"}},[t._v("bulma")]),t._v(". git it on "),a("a",{attrs:{href:"https://github.com/PaddyMurphy/patricklewis",target:"_blank"}},[t._v("github")])]),t._v(" "),a("span",{staticClass:"copyright"},[t._v("copyright © 2017")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-wrapper"},[t._m(0),t._v(" "),a("div",{staticClass:"header"},[a("div",{staticClass:"logo"},[a("svg",{staticClass:"logo",attrs:{viewBox:"0 0 112 82",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("path",{attrs:{d:"M3,60.9632677 L43.9632677,0 L62.2206811,18.2574134 L75.8066154,4.67147914 L110.99634,59.8612042 L3,60.9632677 Z M45.16,43.26 L48.68,43.26 C50.6933434,43.26 52.4366593,43.0166691 53.91,42.53 C55.3833407,42.0433309 56.5999952,41.366671 57.56,40.5 C58.5200048,39.633329 59.233331,38.5933394 59.7,37.38 C60.166669,36.1666606 60.4,34.8333406 60.4,33.38 C60.4,32.0333266 60.1733356,30.7800058 59.72,29.62 C59.2666644,28.4599942 58.5633381,27.4533376 57.61,26.6 C56.6566619,25.7466624 55.4433407,25.0766691 53.97,24.59 C52.4966593,24.1033309 50.7333436,23.86 48.68,23.86 L38.4,23.86 L38.4,53 L45.16,53 L45.16,43.26 Z M73.68,47.6 L73.68,23.86 L66.92,23.86 L66.92,53 L84.48,53 L84.48,47.6 L73.68,47.6 Z"}}),t._v(" "),a("path",{attrs:{d:"M45.16,38.16 L48.68,38.16 C50.4400088,38.16 51.7066628,37.7400042 52.48,36.9 C53.2533372,36.0599958 53.64,34.8866742 53.64,33.38 C53.64,32.71333 53.540001,32.1066694 53.34,31.56 C53.139999,31.0133306 52.8366687,30.5433353 52.43,30.15 C52.0233313,29.7566647 51.5100031,29.4533344 50.89,29.24 C50.2699969,29.0266656 49.5333376,28.92 48.68,28.92 L45.16,28.92 L45.16,38.16 Z",id:"Path"}}),t._v(" "),a("text",{attrs:{id:"UX-DEVELOPER","font-family":"Lato-Regular, Lato","font-size":"14","font-weight":"bold","letter-spacing":"1"}},[a("tspan",{attrs:{x:"0",y:"81"}},[t._v("UX DEVELOPER")])])])])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"tabs tabs-menu"},[a("ul",[a("li",[a("a",{attrs:{href:"#about","data-scroll":""}},[t._v("About")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#experience","data-scroll":""}},[t._v("Experience")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#case-study","data-scroll":""}},[t._v("Case study")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#contact","data-scroll":""}},[t._v("Contact")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero is-primary",staticStyle:{"background-image":"url('static/img/layout/bugaboo-spire.jpg')"}},[a("div",{staticClass:"hero-body"},[a("h1",{staticClass:"title is-1"},[t._v("Patrick Lewis")]),t._v(" "),a("h2",{staticClass:"subtitle is-4"},[t._v("User Experience Developer")]),t._v(" "),a("span",{staticClass:"photo-title"},[t._v("Bugaboo Spire, Canada")])])])}]}}],[6]);
//# sourceMappingURL=app.bbf1a1337aa03914abb4.js.map