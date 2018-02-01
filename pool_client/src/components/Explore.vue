<template>
  <section class="page page-feed p4">
    <nav class="border-bottom mb4 flex justify-between items-center px2">
      <div>Top</div>
      <div>Newest</div>
      <div>Tradeview</div>
      <div>Search</div>
    </nav>
    <section class="mxn2 sm-flex flex-wrap">
      <pool class="px2 col-12 sm-col-6 lg-col-4" v-for="pool in pools" :key="pool.symbol" :pool="pool"></pool>
    </section>
  </section>
</template>

<script>
import PoolThumb from './PoolThumb'
import store from '@/store'

export default {
  name: 'Explore',
  components: {
    Pool: PoolThumb
  },
  computed: {
    pools () {
      return this.$store.state.pools
    }
  },
  beforeRouteEnter (to, from, next) {
    store.dispatch('getPools').then(() => {
      next()
    })
  }
}
</script>

<style lang="css" scoped>
  section > nav{
    height:3.33em;
  }
</style>
