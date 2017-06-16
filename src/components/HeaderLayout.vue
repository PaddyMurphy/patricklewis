<template>
  <div class="header-wrapper">

    <nav class="tabs tabs-menu">
      <ul>
        <li>
          <a href="#about" data-scroll>About</a>
          <!-- <router-link to="#about" data-scroll>About</router-link> -->
        </li>
        <li>
          <a href="#experience" data-scroll>Experience</a>
         <!--  <router-link to="#experience" data-scroll>Experience</router-link> -->
        </li>
        <li>
          <a href="#case-study" data-scroll>Case study</a>
          <!-- <router-link to="#case-study" data-scroll>Case Study</router-link> -->
        </li>
        <li>
          <a href="#contact" data-scroll>Contact</a>
          <!-- <router-link to="#contact" data-scroll>Contact</router-link> -->
        </li>
      </ul>
    </nav>

    <div class="header">
      <div class="logo">
        <svg viewBox="0 0 112 82" class="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M3,60.9632677 L43.9632677,0 L62.2206811,18.2574134 L75.8066154,4.67147914 L110.99634,59.8612042 L3,60.9632677 Z M45.16,43.26 L48.68,43.26 C50.6933434,43.26 52.4366593,43.0166691 53.91,42.53 C55.3833407,42.0433309 56.5999952,41.366671 57.56,40.5 C58.5200048,39.633329 59.233331,38.5933394 59.7,37.38 C60.166669,36.1666606 60.4,34.8333406 60.4,33.38 C60.4,32.0333266 60.1733356,30.7800058 59.72,29.62 C59.2666644,28.4599942 58.5633381,27.4533376 57.61,26.6 C56.6566619,25.7466624 55.4433407,25.0766691 53.97,24.59 C52.4966593,24.1033309 50.7333436,23.86 48.68,23.86 L38.4,23.86 L38.4,53 L45.16,53 L45.16,43.26 Z M73.68,47.6 L73.68,23.86 L66.92,23.86 L66.92,53 L84.48,53 L84.48,47.6 L73.68,47.6 Z"></path>
            <path d="M45.16,38.16 L48.68,38.16 C50.4400088,38.16 51.7066628,37.7400042 52.48,36.9 C53.2533372,36.0599958 53.64,34.8866742 53.64,33.38 C53.64,32.71333 53.540001,32.1066694 53.34,31.56 C53.139999,31.0133306 52.8366687,30.5433353 52.43,30.15 C52.0233313,29.7566647 51.5100031,29.4533344 50.89,29.24 C50.2699969,29.0266656 49.5333376,28.92 48.68,28.92 L45.16,28.92 L45.16,38.16 Z" id="Path"></path>
            <text id="UX-DEVELOPER" font-family="Lato-Regular, Lato" font-size="14" font-weight="bold" letter-spacing="1">
                <tspan x="0" y="81">UX DEVELOPER</tspan>
            </text>
        </svg>
      </div>
    </div> <!-- END header -->

    <div class="hero is-primary" style="background-image: url('static/img/layout/bugaboo-spire.jpg')">
      <div class="hero-body">
        <h1 class="title is-1">Patrick Lewis</h1>
        <h2 class="subtitle is-4">User Experience Developer</h2>
        <span class="photo-title">Bugaboo Spire, Canada</span>
      </div>
    </div>

  </div> <!-- END header-wrapper -->
</template>

<script>
  import MenuSpy from 'menuspy'

  export default {
    name: 'header-layout',

    mounted () {
      const elm = this.$el.querySelector('.tabs-menu');
      // eslint-disable-next-line
      const ms = new MenuSpy(elm, {
        threshold: 50
      });
    }
  }
</script>

<style lang="sass">
// import initial variables
@import '../../node_modules/bulma/sass/utilities/initial-variables'
// // import custom variables
@import '../assets/sass/bulma-styles.sass'

.tabs-menu
  color: $white-ter
  position: fixed
  top: 1em
  right: 2em
  z-index: 99
  ul
    border: none
  .active a
    border-bottom: 2px solid $grey-lighter
    color: $grey-lighter

.tabs a
  border-bottom: 2px solid transparent
  color: $white-ter
  padding: 0.5em
  transition: all $speed $easing
  &:hover
    border-bottom: 2px solid $grey-lighter
    color: $grey-lighter

.header
  background: $color-header
  position: fixed
  height: 4.5em
  width: 100vw
  top: 0
  left: 0
  transition: transform $speed $easing
  z-index: 9
  transform: translateY(-4.5em)
  .sticky-header &
    transform: translateY(0)

.logo
  display: none
  fill: rgba(255,255,255,0.8)
  height: 50px
  width: auto
  transition: transform $speed $easing
  transform: translate(2em, 0.3em)
  @include mquery(small)
    display: inline-block

.hero
  color: #fff
  text-align: center
  height: 80vh
  // background-image set in template
  background-position: top center
  background-repeat: no-repeat
  background-size: cover
  position: relative
  width: 100vw
  &.is-primary
    background-blend-mode: hard-light
    background-color: rgba(0,0,0,0.25)

.hero-body
  padding-top: 26vh

.title
  font-weight: $weight-semibold

.hero-body .title,
.hero-body .subtitle
  opacity: 1
  position: relative
  transition: all 0.3s
  z-index: 1
  .sticky-header &
    opacity: 0
    transform: translateY(-1em)

</style>
