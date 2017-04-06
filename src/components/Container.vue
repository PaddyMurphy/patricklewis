<template>
  <div class="container">

    <div class="header">
      <div class="logo"></div>
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
    </div>

    <div class="hero" style="background-image: url('/static/img/bugaboo-spire.jpg')">
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

        <!-- <div class="Wallop Wallop--slide slideshow-projects">
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
        </div> -->

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <!-- <div class="Wallop Wallop--slide slideshow-mobile">
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
        </div> -->

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <lazy-background
        class="section section--photo"
        image-source="static/img/devils-river.jpg"
        image-title="Devils River, Texas"
        loadingImage="static/img/blank.png"
        errorImage="static/img/blank.png">
      </lazy-background>

      <div class="section section--experience" id="experience">
        <h2>Experience</h2>
        <h3>UX Developer at HomeAway <small>(2011 - 2016)</small></h3>
        <p>
          desc..
        </p>

        <h3>UX Developer at BancVue <small>(2009 - 2011)</small></h3>
        <ul>
          <li>Create credit union web sites using html, css, Javascript and a content management system.</li>
          <li>Introduced the use of SASS, css3 and methods to ensure cross browser consistency.</li>
          <li>Improved the efficiency, quality and speed of sites created.</li>
        </ul>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div class="section section--contact" id="contact">
        <h2>Contact</h2>
        <p>Email me</p>
        <img class="b-lazy photo-footer"
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src="static/img/patrick.jpg"
          alt="drawing of Patrick"
        />
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
import Parallax from '@/assets/parallax'
import Smoothscroll from 'smooth-scroll';
import Blazy from 'bLazy';
// import Wallop from 'wallop';

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
      'offset': 180
    });

    setTimeout(function () {
      var bLazy = new Blazy({ // eslint-disable-line
        offset: 0
      });
    }, 1000);

    console.log(Parallax);
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
