export default {
  name: 'app-image',
  data () {
    return {
      sizes: {
        icon: '',
        hero: 'w_1200,h_800,c_lfill'
      },
      refreshing: false,
      currentSrc: null
    }
  },
  props: {
    src: String,
    size: String,
    bg: {
      type: Boolean,
      default: true
    },
    changes: Boolean
  },
  computed: {
    bgSized () {
      let parts = this.src.split('/')
      if (parts.length === 8) {
        parts[6] = this.sizes.hero
      } else {
        parts.splice(6, 0, this.sizes.hero)
      }
      return parts.join('/')
    }
  },
  render (createElement) {
    if (!this.src) return
    // let query = this.src && this.sizes[this.size]
    if (this.bg) {
      return createElement('div', {
        attrs: {
          style: `background-image: url(${this.bgSized});`
        },
        'class': 'bg-img-cover bg-img'
      })
    }

    return createElement('img', {
      attrs: {
        // src: this.src + (query || '')
        src: this.bgSized
      },
      'class': { refreshing: this.refreshing },
      ref: 'imgEl'
    })
  },
  mounted () {
    this.currentSrc = this.src
  },
  methods: {
    refresh () {
      if (this.currentSrc === this.src) return
      this.refreshing = true
      this.$refs.imgEl.addEventListener('load', (e) => {
        this.refreshing = false
        this.currentSrc = this.src
      }, { once: true })
    }
  },
  watch: {
    src (val) {
      if (this.changes) {
        this.refresh()
      }
    }
  }
}
