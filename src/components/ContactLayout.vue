<template>
  <section class="section section--contact" id="contact">
    <div class="container content">
      <div class="contact-content">
        <h2 class="title is-spaced">Contact</h2>
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
          data-src="static/img/layout/patrick.jpg"
          alt="drawing of Patrick"
        />
      </div>
    </div><!-- END .container -->
  </section>
</template>

<script>
  import Blazy from 'bLazy';

  export default {
    name: 'contact-layout',

    mounted () {
      setTimeout(function () {
        var bLazy = new Blazy({ // eslint-disable-line
          offset: 0
        });
      }, 1000);
    }
  }

</script>

<style scoped lang="sass">
.container
  display: flex
  flex-wrap: wrap;
  flex-direction: row;

.contact-content
  flex: 1 0 auto

.contact-side
  flex: 1 1 30%
  text-align: center

.contact-photo
  width: 100%
  max-width: 150px
  height: auto

.contact-list
    margin-bottom: 1em

</style>
