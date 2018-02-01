<template>
  <div>
    <div class="flex items-center justify-between pb2">
      <div>Image</div>
      <div>
        <label for="imageUploader" class="pointer">Upload New</label>
        <input class="display-none" @change="upload" ref="upload" type="file" id="imageUploader">
      </div>
    </div>
    <div :style="progressWidth" class="bg-blue"></div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Upload',
  data () {
    return {
      cloudname: 'pool',
      uploadPreset: 'wftoacg2',
      uploading: false,
      progress: 0,
      config: {
        onUploadProgress: (progressEvent) => {
          this.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        }
      }
    }
  },
  props: {
    contract: { type: Object, required: true },
    imageType: { type: String, default: 'coinImage' }
  },
  computed: {
    progressWidth () {
      return `width: ${this.progress}%; height: 4px;`
    },
    url () {
      return `https://api.cloudinary.com/v1_1/${this.cloudname}/upload`
    }
  },
  methods: {
    upload () {
      this.uploading = true
      let data = new FormData()
      const file = this.$refs.upload.files[0]
      if (!file) return
      data.append('file', this.$refs.upload.files[0])
      data.append('upload_preset', this.uploadPreset)
      axios.post(this.url, data, this.config).then(({ data }) => {
        // save image upstairs
        this.contract[this.imageType] = data.secure_url
        this.uploading = false
        this.progress = 0
      }).catch((err) => {
        console.log(err)
        this.uploading = false
        this.progress = 0
      })
    },

    ...mapActions([
      'updateContract'
    ])
  },
  mounted () {
    this.$refs.upload.addEventListener('select', this.upload)
  }
}
</script>
