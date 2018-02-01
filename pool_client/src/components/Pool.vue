<template>
  <section class="page p4">
    <thumb :pool="pool" class="max-width-3 mx-auto"></thumb>
  </section>
</template>

<script>
import store from '@/store'
import Thumb from '@/components/PoolThumb'
import Upload from '@/components/Upload'

export default {
  name: 'Pool',
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
  components: { Thumb, Upload }
}
</script>
