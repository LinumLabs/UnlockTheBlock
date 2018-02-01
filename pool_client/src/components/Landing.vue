<template>
  <section class="page p4 flex flex-column justify-between">
    <div class="relative flex-item-fill">
      <div class="absolute top-0 left-0 right-0 bottom-0 icon icon-pool"></div>
    </div>
    <footer>
      <router-link :to="{name: 'NewPool'}">
        <div class="mt4 border-top border-bottom">
          <div class="btn block center" v-if="!loggedIn"><span>Login to Start a Pool</span></div>
          <div class="btn block center" v-else><span>Start a Pool</span></div>
        </div>
      </router-link>
      <router-link :to="{name: 'Explore'}">
        <div class="mt3">
          <div class="btn rounded block center bg-blue white"><span>Explore</span></div>
        </div>
      </router-link>
    </footer>
  </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Landing',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['loggedIn'])
  }
}
</script>
