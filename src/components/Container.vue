<template>
  <div class="container">
    <div class="photo">
      <div class="hero">
        <h1 class="title">Patrick Lewis</h1>
        <span class="tagline">User Experience Developer</span>
      </div>

      <ul class="photo-slideshow">
        <li class="photo-slide photo-slide--start">
          <span class="photo-slideshow-img" v-bind:style="{ backgroundImage: 'url(' + startPhoto.src + ')' }"></span>
          <div class="photo-title-container">
            <h3>{{startPhoto.title}}</h3>
          </div>
        </li>

        <lazy-background v-for="photo in photos"
          class="photo-slide"
          :image-source="photo.src"
          :image-title="photo.title"
          :key="photo.src"
          loadingImage="/static/img/blank.png"
          errorImage="/static/img/blank.png">
        </lazy-background>
      </ul>

    </div>
    <div class="content">

      <div class="nav-container">
        <ul class="nav">
          <li><a data-scroll href="#about">About</a></li>
          <li><a data-scroll href="#experience">Experience</a></li>
          <li><a data-scroll href="#projects">Projects</a></li>
        </ul>
      </div>

      <div class="sections">

        <div class="section section--about" id="about">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div class="section section--experience" id="experience">
          <h2>Experience</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

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
        'title': 'Mt Shucksan, Washington',
        'src': '/static/img/mt-shuksan.jpg'
      },
      photos: [
        {
          'title': 'Jacobs Well, Texas',
          'src': '/static/img/jacobs-well.jpg'
        },
        {
          'title': 'Bugaboo Spire, Canada',
          'src': '/static/img/bugaboo-spire.jpg'
        },
        {
          'title': 'Snowpatch Spire, Canada',
          'src': '/static/img/bugaboo-spire-2.jpg'
        },
        {
          'title': 'Devils River, Texas',
          'src': '/static/img/devils-river.jpg'
        },
        {
          'title': 'America, USA',
          'src': '/static/img/america.jpg'
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
  methods: {
    cyclePhoto: function () {
      // var img = this.$el.querySelector('.photo');
      // reset currentPhoto at end
      // this.currentPhotoPath = 'url(' + this.photos[this.currentPhoto].src + ')';

      // img.style['background-image'] = 'url(' + this.photos[this.currentPhoto].src + ')';
    }
    // incrementPhoto: function () {
    //   console.log(this.currentPhoto === this.photos.length);
    //   if (this.currentPhoto === this.photos.length) {
    //     this.currentPhoto = 0;
    //   } else {
    //     this.currentPhoto = this.currentPhoto + 1;
    //   }

    //   console.log('currentPhoto ' + this.currentPhoto);
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Merriweather');
@import '../assets/scss/main.scss';
</style>
