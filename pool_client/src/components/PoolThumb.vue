<template>
  <article class="mb4">
    <section class="border" :class="{'rounded-bottom': !join}">
      <header class="flex justify-between items-stretch border-bottom">
        <div class="col col-6 px2 flex items-center bold uppercase"><span>{{pool.symbol}}</span></div>
        <!-- edit button -->
        <router-link v-if="isOwner" :to="{name: 'Edit Pool', params: {address: pool.address}}" class="block col col-3 flex items-center border-left justify-center">
          <span>Edit</span>
        </router-link>
        <!-- trade button -->
        <div class="col col-3 flex items-stretch bg-dots border-left" @click="trade = !trade">
          <popout :pop="trade" class="col-12 flex items-center justify-center pointer">
            <span>Trade</span>
          </popout>
        </div>
      </header>
      <!-- image / trade view -->
      <figure class="bg-dots relative" :class="{'pool__figure--collapsed': join, 'pool__figure--trade': trade}">
        <div class="absolute top-0 right-0 bottom-0 left-0 overflow-hidden" @click="join = false">
          <pool-image v-show="!trade" :bg="true" :src="pool.heroImage" class="absolute top-0 left-0 col-12"></pool-image>
        </div>
        <popout v-show="trade" :pop="trade" class="bg-white">
          <trade v-if="trade" :address="pool.address"></trade>
        </popout>
      </figure>
      <!-- text -->
      <nav v-if="hasLinks">
        <ul class="list-reset flex flex-wrap m0">
          <li v-for="link in pool.links" :key="link.id" class="flex-fill center border-top">
            <a :href="link.url" class="block p2" target="_blank" rel="nofollow">{{ link.text }}</a>
          </li>
        </ul>
      </nav>
      <footer class="center border-top">
        <div class="p3">
          <router-link :to="{name: 'Pool', params: {address: pool.address}}">
            <h1 class="h4 bold">{{ pool.name }}</h1>
          </router-link>
          <div class="mt1 line-height-3" v-html="pool.description"></div>
        </div>
        <button v-show="!join" class="btn block col-12 bg-blue white" @click="join = true">{{joinLabel}}</button>
      </footer>
    </section>
    <!-- join -->
    <section v-show="join" class="pool__join">
      <div class="border rounded-bottom">
        <pool-join :pool="pool"></pool-join>
      </div>
    </section>
  </article>
</template>

<script>
import Popout from '@/components/Popout'
import Trade from './PoolTrade'
import PoolJoin from './PoolJoin'
import PoolImage from '@/components/Image'
import { mapActions } from 'vuex'
export default {
  name: 'PoolThumb',
  props: {
    pool: { type: Object, required: true }
  },
  data () {
    return {
      trade: false,
      join: false
    }
  },
  computed: {
    isOwner () {
      return this.$store.state.account === this.pool.ownerAddress
    },
    joinLabel () {
      if (this.pool.holders > 0) return `Join ${this.pool.holders} Supporters`
      return 'Support'
    },
    activePoolAddr () {
      return this.$store.state.pool.address
    },
    hasLinks () {
      return this.pool.links && this.pool.links.length > 0
    }
  },
  methods: {
    ...mapActions([
      'deployContract'
    ])
  },
  watch: {
    join () {
      if (this.join) this.trade = false
      if (this.join) this.deployContract(this.pool.address)
    },
    trade () {
      if (this.trade) this.join = false
    },
    activePoolAddr (addr) {
      if (addr !== this.pool.address) this.trade = false
    }
  },
  components: { Popout, Trade, PoolJoin, PoolImage }
}
</script>

<style lang="css" scoped>
header{
  height:3rem;
}
figure{
  padding-bottom:calc(800/1280 * 100%);
  .bg-img-cover{
    height:100%;
  }
  &.pool__figure--collapsed{
    padding-bottom:5.75rem;
    & .bg-img-cover{
      filter:blur(4px);
      height:120%;
      width:104%;
      transform:translateX(-2%) translateY(-10%);
    }
  }
  &.pool__figure--trade{
    padding-bottom:0;
  }
}
.pool__join{
  &:before{
    content:'';
    display:block;
    width:50%;
    height:3rem;
    border-right-style:solid;
    border-width:1px;
  }
}
.flex-fill{
  flex:1 0 25%;
}
.flex-fill + .flex-fill {
  border-left: 1px solid;
}
</style>
