<!-- https://github.com/darrynten/vue-lazy-background-images -->
<template>
  <li>
    <span
      class="photo-slideshow-img"
      :class="[imageClass, imageState]"
      :style="computedStyle"
      :data-width="imageWidth"
      :data-height="imageHeight"
      :data-state="imageState">
    </span>
    <div class="photo-title-container">
      <h3>{{imageTitle}}</h3>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    imageSource: {
      type: String,
      required: true
    },
    imageClass: {
      type: String,
      required: false,
      default: ''
    },
    loadingImage: {
      type: String,
      required: true
    },
    errorImage: {
      type: String,
      required: true
    },
    imageErrorCallback: {
      type: Function,
      required: false,
      default: function () {}
    },
    imageSuccessCallback: {
      type: Function,
      required: false,
      default: function () {}
    },
    backgroundSize: {
      type: String,
      required: false,
      default: 'cover'
    },
    imageTitle: {
      type: String,
      required: false,
      default: ''
    },
    delay: {
      type: Number,
      required: false,
      default: 2000
    }
  },
  data () {
    return {
      imageWidth: 0,
      imageHeight: 0,
      imageState: 'loading',
      asyncImage: new Image()
    }
  },
  computed: {
    computedStyle () {
      if (this.imageState === 'loading') {
        return 'background-image: url(' + this.loadingImage + ');'
      }

      if (this.imageState === 'error') {
        return 'background-image: url(' + this.errorImage + ');'
      }

      if (this.imageState === 'loaded') {
        return 'background-image: url(' + this.asyncImage.src + '); background-size: ' + this.backgroundSize
      }

      return '';
    }
  },
  methods: {
    fetchImage (url) {
      this.asyncImage.onload = this.imageOnLoad
      this.asyncImage.onerror = this.imageOnError
      this.imageState = 'loading'
      this.asyncImage.src = this.imageSource
    },
    imageOnLoad (success) {
      this.imageState = 'loaded'
      this.imageWidth = this.asyncImage.naturalWidth
      this.imageHeight = this.asyncImage.naturalHeight
      this.imageSuccessCallback()
    },
    imageOnError () {
      this.imageState = 'error'
      this.imageErrorCallback()
    }
  },
  mounted () {
    var that = this;
    window.setTimeout(function () {
      that.$nextTick(() => {
        that.fetchImage();
      })
    }, this.delay);
  }
}
</script>
