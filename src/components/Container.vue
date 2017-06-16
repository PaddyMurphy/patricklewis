<template>
  <div class="layout">

    <header-layout />

    <section class="section content section--about" id="about">
      <div class="container">
        <h2 class="title is-spaced">About</h2>
        <p>UX/UI Developer with over 10 years experience creating web applications. I enjoy working collaboratively with a team to design, prototype, test and deliver products. When not behind the computer I am usually climbing, kayaking or at Barton Springs.</p>
      </div>
    </section>

    <section class="section content section--experience" id="experience">
      <div class="container">
        <h2 class="title is-spaced">Experience</h2>
        <h3 class="subtitle">UX Developer at HomeAway <small>(2015 - 2016)</small></h3>
        <ul>
          <li>Helped establish the new Design Technologist role within the UX Design team.</li>
          <li>Coloborated with designers and product managers to create testable prototypes.</li>
          <li>Participated in user testing to create new iterations based the results</li>
          <li>Joined team responsible for developing the final product to help with creating the experience</li>
        </ul>

        <h3 class="subtitle">UI Developer at HomeAway <small>(2011 - 2015)</small></h3>
        <ul>
          <li>Lead UI developer on property management team for 3 years.</li>
          <li>Created property management dashboard with tools enabling the management of many properties at once.</li>
          <li>Built early products primarily with backbone, handlebars, and an in-house 'thin-ui' java based system which allows decoupling of the UI and backend applications.</li>
          <li>Adopted React later to replace the UI stack</li>
        </ul>

        <h3 class="subtitle">Front-end Developer at BancVue <small>(2009 - 2011)</small></h3>
        <ul>
          <li>Create credit union web sites using html, css, Javascript and a content management system.</li>
          <li>Introduced the use of SASS, css3 and methods to ensure cross browser consistency.</li>
          <li>Improved the efficiency, quality and speed of sites created.</li>
        </ul>

        <h3 class="subtitle">Additional experience</h3>
        <ul>
          <li>Javascript along with React, Vuejs, and webpack</li>
          <li>css and pre / post processors</li>
          <li>semantic and accessible html5</li>
          <li>UX best practices</li>
          <li>4 years United States Marine Corps</li>
        </ul>
      </div>
    </section>

    <div class="photo-window">
      <span class="photo-title">Devils River, Texas</span>
    </div>

    <section class="section content section--casestudy" id="case-study">
      <div class="container">
        <h2 class="title is-spaced">Case Study</h2>
        <h3 class="subtitle">HomeAway Onboarding</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <!-- TODO: insert image gallery -->
        <div class="Wallop Wallop--slide slideshow-projects">
          <div class="Wallop-list">
            <div class="Wallop-item" v-for="n of 6">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                class="b-lazy"
                :data-src="'static/img/layout/ha-onboarding-' + n + '.png'"
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

        <!-- TODO: insert image gallery -->
        <div class="Wallop Wallop--slide slideshow-mobile">
          <div class="Wallop-list">
            <div class="Wallop-item" v-for="n of 6">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                class="b-lazy"
                :data-src="'static/img/layout/ha-mobile-' + n + '.jpg'"
                alt=""
              />
            </div>
            <button class="Wallop-buttonPrevious">Previous</button>
            <button class="Wallop-buttonNext">Next</button>
          </div>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div> <!-- END container -->
    </section>

    <lazy-background
      class="section section--photo"
      image-source="static/img/layout/devils-river.jpg"
      loadingImage="static/img/layout/blank.png"
      errorImage="static/img/layout/blank.png">
    </lazy-background>

    <contact-layout />

    <footer-layout />
  </div>
</template>

<script>
import ContactLayout from '@/components/ContactLayout';
import HeaderLayout from '@/components/HeaderLayout';
import FooterLayout from '@/components/FooterLayout';
import LazyBackgroundImages from '@/components/VueLazyBackgroundImage';
import scrollBreakpoint from 'scroll-breakpoint'; // eslint-disable-line
import Smoothscroll from 'smooth-scroll';
import Wallop from 'wallop';

export default {
  name: 'layout',

  mounted: function () {
    // animate scrollto
    Smoothscroll.init({
      'easing': 'easeOutQuad',
      'offset': 40
    });

    // ha desktop slideshow
    var wallopElProject = document.querySelector('.slideshow-projects');
    // eslint-disable-next-line
    this.wallopProject = new Wallop(wallopElProject);

    var wallopElMobile = document.querySelector('.slideshow-mobile');
    // eslint-disable-next-line
    this.wallopElMobile = new Wallop(wallopElMobile);

    // show / hide the top nav
    window.scrollBreakpoint(function () {
      return this.scrollY > 100;
    }, function (isTrue) {
      document.body.classList[isTrue ? 'add' : 'remove']('sticky-header');
    });
  },

  components: {
    'lazy-background': LazyBackgroundImages,
    'header-layout': HeaderLayout,
    'contact-layout': ContactLayout,
    'footer-layout': FooterLayout
  }
}
</script>

<style lang="sass">
// import initial variables
@import '../../node_modules/bulma/sass/utilities/initial-variables'
// // import custom variables
@import '../assets/sass/bulma-styles.sass'
// Import the rest of Bulma
// NOTE: only import once here in the container.vue
@import '../../node_modules/bulma/bulma'
@import '../../node_modules/wallop/css/wallop.css';
@import '../../node_modules/wallop/css/wallop--slide.css';

.photo-title
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.3)
  bottom: 1.5em
  color: #fff
  font-size: 0.9em
  font-weight: bold
  position: absolute
  right: 3em
  z-index: 1

.photo-window
  height: 20em
  position: relative
  .photo-title
    opacity: 0.8

.section
  padding: 3em 4em

  .container
    margin-left: auto
    margin-right: auto
    max-width: $tablet

  &.content
    margin-bottom: 0

  &--about
    background: $white

  &--casestudy
    background: $color-section

  &--photo
    background-position: top center
    background-repeat: no-repeat
    background-size: cover
    padding: 0
    height: 100vh
    width: 100vw
    position: fixed
    bottom: 0
    left: 0
    z-index: -1

  &--experience
    background: $color-section

.copyright
  margin: 0 0 0 2em

.contact-photo
  width: 100%
  max-width: 150px
  height: auto

// slideshows
// Wallop slider in case study
.Wallop-buttonNext,
.Wallop-buttonPrevious
  background: rgba(0,0,0,0.1)
  border-radius: 20px
  border: none
  cursor: pointer
  height: 40px
  position: absolute
  text-indent: -9999px
  top: 50%
  transform: translateY(-50%)
  transition: all 0.25s
  width: 40px
  z-index: 9
  &:hover
    background: rgba(0,0,0,0.3)
  &:before
    color: rgba(0,0,0,0.6)

.Wallop-buttonNext:before,
.Wallop-buttonPrevious:before
  color: rgba(0,0,0,0.4)
  font-size: 25px
  left: 0
  line-height: 0
  position: absolute
  text-align: center
  text-indent: 0
  top: 50%
  transition: all 0.25s
  width: 100%

.Wallop-buttonNext:before
  content: "\276F"

.Wallop-buttonPrevious:before
  content: "\276E"

.Wallop-buttonPrevious
  left: 1em

.Wallop-buttonNext
  right: 1em

// this is the .Wallop containe
.slideshow-projects,
.slideshow-mobile
  box-shadow: 0 0 0 2px $color-header
  margin: 2em auto 3em
  max-width: $tablet
  .Wallop-list
    background: #fff

  .Wallop-item
    text-align: center


.slideshow-mobile
  width: 350px
</style>
