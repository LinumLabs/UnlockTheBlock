<template>
  <article class="page p4">
    <router-view :pool="pool" v-model="pool" @submit="submit = true" @graph="changeGraph"></router-view>
    <deploy :pool="pool" v-if="submit"></deploy>
  </article>
</template>

<script>
import Deploy from './Deploy'
export default {
  name: 'Start',
  props: ['step'],
  components: {
    Deploy
  },
  data () {
    return {
      submit: false,
      pool: {
        name: '',
        symbol: '',
        graph: 'linear',
        baseToken: 'DAI',
        customBaseTokenAddress: ''
      }
    }
  },
  methods: {
    changeGraph (value) {
      this.pool.graph = value
    }
  }
}
</script>

<style lang="css" scoped>
</style>
