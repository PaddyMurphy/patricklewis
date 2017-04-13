<template>
  <div class="container">
    <ul class="nav">
      <li>
        <router-link to="#about" data-scroll>About</router-link>
      </li>
      <li>
        <router-link to="#case-study" data-scroll>Case Study</router-link>
      </li>
      <li>
        <router-link to="#experience" data-scroll>Experience</router-link>
      </li>
      <li>
        <router-link to="#contact" data-scroll>Contact</router-link>
      </li>
    </ul>
    <div class="header">
      <div class="logo">
        <svg viewBox="0 0 112 82" class="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M3,60.9632677 L43.9632677,0 L62.2206811,18.2574134 L75.8066154,4.67147914 L110.99634,59.8612042 L3,60.9632677 Z M45.16,43.26 L48.68,43.26 C50.6933434,43.26 52.4366593,43.0166691 53.91,42.53 C55.3833407,42.0433309 56.5999952,41.366671 57.56,40.5 C58.5200048,39.633329 59.233331,38.5933394 59.7,37.38 C60.166669,36.1666606 60.4,34.8333406 60.4,33.38 C60.4,32.0333266 60.1733356,30.7800058 59.72,29.62 C59.2666644,28.4599942 58.5633381,27.4533376 57.61,26.6 C56.6566619,25.7466624 55.4433407,25.0766691 53.97,24.59 C52.4966593,24.1033309 50.7333436,23.86 48.68,23.86 L38.4,23.86 L38.4,53 L45.16,53 L45.16,43.26 Z M73.68,47.6 L73.68,23.86 L66.92,23.86 L66.92,53 L84.48,53 L84.48,47.6 L73.68,47.6 Z" id="Combined-Shape"></path>
            <path d="M45.16,38.16 L48.68,38.16 C50.4400088,38.16 51.7066628,37.7400042 52.48,36.9 C53.2533372,36.0599958 53.64,34.8866742 53.64,33.38 C53.64,32.71333 53.540001,32.1066694 53.34,31.56 C53.139999,31.0133306 52.8366687,30.5433353 52.43,30.15 C52.0233313,29.7566647 51.5100031,29.4533344 50.89,29.24 C50.2699969,29.0266656 49.5333376,28.92 48.68,28.92 L45.16,28.92 L45.16,38.16 Z" id="Path"></path>
            <text id="UX-DEVELOPER" font-family="Lato-Regular, Lato" font-size="14" font-weight="bold" letter-spacing="1">
                <tspan x="0" y="81">UX DEVELOPER</tspan>
            </text>
        </svg>
      </div>
    </div>

    <div class="hero" style="background-image: url('static/img/bugaboo-spire.jpg')">
      <h1 class="title">Patrick Lewis</h1>
      <span class="tagline">User Experience Developer</span>
      <span class="photo-title">Bugaboo Spire, Canada</span>
    </div>

    <div class="sections">

      <div class="section section--about" id="about">
        <h2>About</h2>
        <p>I am a UX/UI Developer with over 10 years experience.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div class="section section--casestudy" id="case-study">
        <h2>Case Study</h2>
        <h3>HomeAway Onboarding</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div class="Wallop Wallop--slide slideshow-projects">
          <div class="Wallop-list">
            <div class="Wallop-item" v-for="n of 6">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                class="b-lazy"
                :data-src="'static/img/ha-onboarding-' + n + '.png'"
                alt=""
                width="100%"
                height="auto"
              />
            </div>
            <button class="Wallop-buttonPrevious">Previous</button>
            <button class="Wallop-buttonNext">Next</button>
          </div>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div class="Wallop Wallop--slide slideshow-mobile">
          <div class="Wallop-list">
            <div class="Wallop-item" v-for="n of 6">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                class="b-lazy"
                :data-src="'static/img/ha-mobile-' + n + '.jpg'"
                alt=""
              />
            </div>
            <button class="Wallop-buttonPrevious">Previous</button>
            <button class="Wallop-buttonNext">Next</button>
          </div>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <lazy-background
        class="section--photo"
        image-source="static/img/devils-river.jpg"
        loadingImage="static/img/blank.png"
        errorImage="static/img/blank.png">
      </lazy-background>

      <div class="photo-window">
        <span class="photo-title">Devils River, Texas</span>
      </div>

      <div class="section section--experience" id="experience">
        <h2>Experience</h2>
        <h3>UX Developer at HomeAway <small>(2011 - 2016)</small></h3>
        <p>
          desc..
        </p>

        <h3>Front-end Developer at BancVue <small>(2009 - 2011)</small></h3>
        <ul>
          <li>Create credit union web sites using html, css, Javascript and a content management system.</li>
          <li>Introduced the use of SASS, css3 and methods to ensure cross browser consistency.</li>
          <li>Improved the efficiency, quality and speed of sites created.</li>
        </ul>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div class="section section--contact" id="contact">
        <div class="contact-content">
          <h2>Contact</h2>
          <p>
            Email me at <span style="unicode-bidi:bidi-override; direction: rtl;"> moc.liamg@siwelbkcirtap</span>
          </p>
          <ul class="contact-list">
            <li><a href="https://www.linkedin.com/in/patrick-lewis-4b71484/">LinkedIn</a></li>
            <li><a href="https://www.flickr.com/photos/paddymurphy">Flickr</a></li>
            <li><a href="https://dribbble.com/paddymurphy">Dribbble</a></li>
            <li><a href="https://vimeo.com/paddymurphy">Vimeo</a></li>
          </ul>
        </div>
        <div class="contact-side">
          <img class="b-lazy contact-photo"
            src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
            width="150" height="195"
            data-src="static/img/patrick.jpg"
            alt="drawing of Patrick"
          />
        </div>
      </div>

    </div><!-- END .sections -->

    <footer>
      <svg class="svg-mountains" viewBox="0 0 78 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M66.6605656,36.6542958 L65.5026649,42 L73.1301837,42 L70.5028819,36.6542958 L77.2353516,36.6542958 L65.6220703,10 L60,36.6542958 L66.6605656,36.6542958 Z" id="Combined-Shape-Copy"></path>
        <path d="M32,42 L48.0947266,22 L61.9858398,42 L32,42 Z M38.5556641,41.1205474 L50.2522381,41.0467904 L44.8624445,31.2734957 L38.5556641,41.1205474 Z" id="Combined-Shape"></path>
        <path d="M23.9510131,35.9025137 L22.5026649,42 L30.1301837,42 L28.1930637,35.3999763 L36.2460938,34.4459685 L26.6230469,0.275390625 L17,36.7259703 L23.9510131,35.9025137 Z" id="Combined-Shape"></path>
        <path d="M5.04362045,38.172106 L2.11914062,42.0888672 L10.5302734,42.0888672 L9.69876136,38.3261376 L14.0087891,38.46875 L11.0673828,10.0390625 L0.580078125,38.0244141 L5.04362045,38.172106 Z" id="Combined-Shape"></path>
      </svg>
      copyright © 2017
    </footer>
  </div>
</template>

<script>
import LazyBackgroundImages from '@/components/VueLazyBackgroundImage';
import scrollBreakpoint from 'scroll-breakpoint'; // eslint-disable-line
import Smoothscroll from 'smooth-scroll';
import Blazy from 'bLazy';
import Wallop from 'wallop';

export default {
  name: 'container',
  data () {
    return {
      title: 'what'
    }
  },
  computed: {},
  mounted: function () {
    // animate scrollto
    Smoothscroll.init({
      'easing': 'easeOutQuad',
      'offset': 10
    });

    setTimeout(function () {
      var bLazy = new Blazy({ // eslint-disable-line
        offset: 0
      });
    }, 1000);

    // ha desktop slideshow
    var wallopElProject = document.querySelector('.slideshow-projects');
    this.wallopProject = new Wallop(wallopElProject); // eslint-disable-line

    var wallopElMobile = document.querySelector('.slideshow-mobile');
    this.wallopElMobile = new Wallop(wallopElMobile); // eslint-disable-line

    // show / hide the top nav
    window.scrollBreakpoint(function () {
      return this.scrollY > 100;
    }, function (isTrue) {
      // This code will be executed exactly once when you'll reach the breakpoint.
      document.body.classList[isTrue ? 'add' : 'remove']('sticky-header');
    });
  },
  components: {
    'lazy-background': LazyBackgroundImages
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/main.scss';
</style>
