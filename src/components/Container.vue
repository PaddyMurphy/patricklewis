<template>
  <div class="container">
    <div class="photo">
      <div class="hero">
        <h1 class="title">Patrick Lewis</h1>
        <span class="tagline">User Experience Developer</span>
      </div>
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

export default {
  name: 'container',
  data () {
    return {
      msg: 'Portfolio'
    }
  },
  mounted: function () {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Merriweather');
@import '../assets/scss/main.scss';
</style>
