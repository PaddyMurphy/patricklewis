<template>
  <div class="container">
    <div class="photo">
      <div class="hero">
        <h1 class="title">Patrick Lewis</h1>
        <span class="tagline">User Experience Developer</span>
      </div>

      <ul class="photo-slideshow">
        <li class="photo-slide photo-slide--start">
          <span class="photo-slideshow-img" :style="{ backgroundImage: 'url(' + startPhoto.src + ')' }"></span>
          <div class="photo-title-container">
            <h3>{{startPhoto.title}}</h3>
          </div>
        </li>

        <lazy-background v-for="photo in photos"
          class="photo-slide"
          :image-source="photo.src"
          :image-title="photo.title"
          :key="photo.src"
          loadingImage="static/img/blank.png"
          errorImage="static/img/blank.png">
        </lazy-background>
      </ul>

    </div>

    <div class="content">

      <svg class="svg-mountains" viewBox="0 0 78 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M66.6605656,36.6542958 L65.5026649,42 L73.1301837,42 L70.5028819,36.6542958 L77.2353516,36.6542958 L65.6220703,10 L60,36.6542958 L66.6605656,36.6542958 Z"></path>
        <path d="M32,42 L48.0947266,22 L61.9858398,42 L32,42 Z M38.5556641,41.1205474 L50.2522381,41.0467904 L44.8624445,31.2734957 L38.5556641,41.1205474 Z"></path>
        <path d="M23.9510131,35.9025137 L22.5026649,42 L30.1301837,42 L28.1930637,35.3999763 L36.2460938,34.4459685 L26.6230469,0.275390625 L17,36.7259703 L23.9510131,35.9025137 Z"></path>
        <path d="M5.04362045,38.172106 L2.11914062,42.0888672 L10.5302734,42.0888672 L9.69876136,38.3261376 L14.0087891,38.46875 L17.7207031,10.2939453 L0.580078125,38.0244141 L5.04362045,38.172106 Z"></path>
      </svg>

      <div class="nav-container">
        <ul class="nav">
          <li>
            <router-link to="#about" data-scroll>About</router-link>
          </li>
          <li>
            <router-link to="#experience" data-scroll>Experience</router-link>
          </li>
          <li>
            <router-link to="#projects" data-scroll>Projects</router-link>
          </li>
        </ul>
      </div>

      <div class="sections">

        <div class="section section--about" id="about">
          <h2>About</h2>
          <p>I am a UX/UI Developer with over 10 years experience.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div class="section section--experience" id="experience">
          <h2>Experience</h2>
          <h3>UX Developer at HomeAway <small>(2011 - 2016)</small></h3>
          <p>
            desc..
          </p>

          <h3>UX Developer at BancVue <small>(2009 - 2011)</small></h3>
          <ul>
            <li>Create Bank and Credit Union web sites using html, css, Javascript and a content management system.</li>
            <li>Introduced the use of SASS, css3 and methods to ensure cross browser consistency.</li>
            <li>Improved the efficiency, quality and speed of sites created.</li>
          </ul>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div class="section section--projects" id="projects">
          <h2>Projects</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

      </div><!-- END .sections -->

    </div><!-- END .content -->

    <footer>copyright © 2017</footer>
  </div>
</template>

<script>
import Stickyheader from 'sticky-header';
import Smoothscroll from 'smooth-scroll';
import LazyBackgroundImages from '@/components/VueLazyBackgroundImage';

export default {
  name: 'container',
  data () {
    return {
      startPhoto: {
        'title': 'Mt Shuksan, Washington',
        'src': 'static/img/mt-shuksan.jpg'
      },
      photos: [
        {
          'title': 'Jacobs Well, Texas',
          'src': 'static/img/jacobs-well.jpg'
        },
        {
          'title': 'Bugaboo Spire, Canada',
          'src': 'static/img/bugaboo-spire.jpg'
        },
        {
          'title': 'Snowpatch Spire, Canada',
          'src': 'static/img/bugaboo-spire-2.jpg'
        },
        {
          'title': 'Devils River, Texas',
          'src': 'static/img/devils-river.jpg'
        },
        {
          'title': 'America!, USA',
          'src': 'static/img/america.jpg'
        }
      ]
    }
  },
  mounted: function () {
    // var that = this;
    var hero = this.$el.querySelector('.hero');
    var nav = this.$el.querySelector('.nav');
    // stick header to top on scroll up
    Stickyheader(hero);
    // stick nav to top on scroll up
    Stickyheader(nav, 80);
    // animate scrollto
    Smoothscroll.init({
      'easing': 'easeOutQuad',
      'offset': 200
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
@import url('https://fonts.googleapis.com/css?family=Merriweather');
@import '../assets/scss/main.scss';
</style>
