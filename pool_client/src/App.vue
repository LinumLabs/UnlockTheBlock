<template>
  <div id="app" class="blue">
    <header class="fixed z1 top-0 left-0 right-0 pt4 px4 pb0 bg-white border-box">
      <div class="flex flex-wrap items-center border-top border-bottom">
        <div class="col-12 flex justify-between items-center p1">
          <template v-if="$route.name == 'Landing'">
            <h1 class="h00 regular">Pool</h1>
          </template>
          <template v-else>
            <div class="col col-2">
              <router-link v-if="backLink" :to="backLink" class="icon icon-back block pointer"></router-link>
              <a v-else class="icon icon-back block pointer" @click="$router.go(-1)"></a>
            </div>
            <div class="col col-8 center h1">{{$route.meta.title}}</div>
          </template>
          <div class="col col-2 flex justify-end">
            <menu-icon class="pointer" @click="menu = true"></menu-icon>
          </div>
        </div>
      </div>
      <nav v-show="menu" class="fixed top-0 left-0 right-0 bottom-0 bg-white z1 flex items-center justify-center p4 h0">
        <close-icon class="absolute close-icon" @click="menu = false"></close-icon>
        <div class="center">
          <router-link class="block" :to="{name: 'NewPool'}">Start a Pool</router-link>
          <router-link class="block mt4" :to="{name: 'Explore'}">Explore Pools</router-link>
        </div>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MenuIcon from '@/components/MenuIcon'
import CloseIcon from '@/components/CloseIcon'

export default {
  name: 'App',
  components: { MenuIcon, CloseIcon },
  data () {
    return {
      menu: false
    }
  },
  computed: {
    backLink () {
      return this.$route.meta.back
    }
  },
  watch: {
    '$route' () {
      this.menu = false
    }
  },
  methods: {
    ...mapActions([
      'initWeb3'
    ])
  },
  mounted () {
    this.initWeb3()
  }
}
</script>

<style>
  @import 'style/imports';
  @import 'style/global';

  #app > header > div{
    height:5rem;
  }

  #app .page{
    box-sizing: border-box;
    min-height: 100vh;
    padding-top: 8.5rem;
  }
  #app .page-feed{
    padding-top: 7rem;
  }
</style>
