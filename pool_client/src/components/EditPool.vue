<template>
  <article class="page p4">
    <div class="max-width-3 mx-auto border">
      <header class="bold clearfix">
        <div class="col col-4 px2 py1 line-height-3">{{pool.symbol}}&nbsp;</div>
        <div class="col col-4 px2 py1 border-left line-height-3 capitalize">{{pool.type}}&nbsp;</div>
        <div class="col col-4 px2 py1 border-left line-height-3">{{pool.base}}&nbsp;</div>
      </header>
      <section class="px2 py3 border-top">
        <div>
          <input type="text" v-model="newPool.name">
        </div>
        <div>
          <textarea class="block mt2" rows="3" v-model="newPool.description"></textarea>
        </div>
      </section>
      <!-- links -->
      <section>
        <div v-for="(link, index) in newPool.links" :key="index" class="tbl-row flex justify-between items-stretch border-top">
          <div class="relative col col-4 px2 py1">
            <div>Link Title</div>
            <div class="bold mt2"><input class="col-12 block" type="text" v-model="link.text"></div>
          </div>
          <div class="relative col col-8 px2 py1 border-left">
            <div>URL</div>
            <div class="bold mt2"><input class="col-12 block" type="url" v-model="link.url"></div>
            <div class="absolute top-0 right-0 py1 px2 pointer" @click="removeLink(index)">Remove</div>
          </div>
        </div>
        <div class="border-top">
          <button class="tbl-row col-12 btn block center" @click="addLink">Add Link</button>
        </div>
      </section>
      <!-- image -->
      <section class="px2 py3 border-top">
        <upload :contract="newPool" image-type="heroImage"></upload>
        <pool-image :src="newPool.heroImage" :bg="false" size="hero" class="block mx-auto"></pool-image>
      </section>
      <!-- save -->
      <footer>
        <div class="clearfix border-top">
          <button class="btn block col col-6" @click="$router.go(-1)">Cancel</button>
          <button class="btn block col col-6 bg-blue white" @click="submit">{{ saveText }}</button>
        </div>
      </footer>
    </div>
  </article>
</template>

<script>
import store from '@/store'
import Upload from '@/components/Upload'
import PoolImage from '@/components/Image'

export default {
  name: 'EditPool',
  data () {
    return {
      newPool: {},
      saveText: 'Save'
    }
  },
  computed: {
    pool () {
      return this.$store.state.pool
    }
  },
  beforeRouteEnter (to, from, next) {
    const { address } = to.params
    store.dispatch('getPoolDb', address).then(() => {
      next()
    })
  },
  watch: {
    pool () {
      this.clonePool()
    }
  },
  methods: {
    clonePool () {
      this.newPool = JSON.parse(JSON.stringify(this.pool))
    },
    addLink () {
      this.newPool.links.push({text: '', url: ''})
    },
    removeLink (index) {
      this.newPool.links.splice(index, 1)
    },
    submit () {
      this.saveText = 'Saving...'
      this.$store.dispatch('updateContract', this.newPool).then(() => {
        this.saveText = 'Done!'
        this.$router.push('/pools/' + this.pool.address)
        setTimeout(() => {
          this.saveText = 'Save'
        }, 2000)
      })
    }
  },
  created () {
    this.clonePool()
  },
  components: { Upload, PoolImage }
}
</script>

<style lang="css" scoped>
</style>
