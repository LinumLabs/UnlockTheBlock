<template>
  <article class="relative flex flex-column justify-between">
    <transition name="quickfade">
      <div v-show="loading" class="absolute-fill bg-white z3 flex items-center justify-center">
        <div class="icon icon-loading-1"></div>
      </div>
    </transition>
    <header class="border-bottom bold">
      <div class="col col-4 py1 px2 uppercase">{{pool.symbol}}&nbsp;</div>
      <div class="col col-4 py1 px2 border-left capitalize">{{pool.type}}&nbsp;</div>
      <div class="col col-4 py1 px2 border-left">{{pool.base}}&nbsp;</div>
    </header>
    <figure class="trade__figure relative flex-item-fill">
      <div class="absolute top-0 left-0 py1 px2 z2">Supply {{totalSupply}} of {{totalEverMinted}}</div>
      <div class="absolute-fill z1 bg-dots">
        <div class="absolute-fill bg-img bg-graph"></div>
      </div>
    </figure>
    <footer class="border-top">
      <div class="clearfix">
        <div class="trade__row flex flex-column justify-between col col-4 p2">
          <div>Price (USD)</div>
          <div class="bold mt1">${{price}} <span class="red">-3%</span></div>
        </div>
        <div class="trade__row flex flex-column justify-between col col-4 p2 border-left">
          <div>Supporters</div>
          <div class="bold mt1">{{supporters}}</div>
        </div>
        <div class="trade__row flex flex-column justify-between col col-4 p2 border-left">
          <div>Launched</div>
          <div class="bold mt1">{{age}}</div>
        </div>
      </div>
      <div class="bg-yellow border-top clearfix">
        <div class="trade__row flex flex-column justify-between col col-4 p2">
          <div>Buy Price Avg</div>
          <div class="bold mt1">$299 <span class="red">-12%</span></div>
        </div>
        <div class="trade__row flex flex-column justify-between col col-4 p2 border-left">
          <div>Holding</div>
          <div class="bold mt1">{{yourBalance}} {{pool.symbol}}</div>
        </div>
        <div class="trade__row flex flex-column justify-between col col-4 p2 border-left">
          <div>Value</div>
          <div class="bold mt1">${{poolBalance}}</div>
        </div>
      </div>
      <!-- buy / sell btns -->
      <nav class="flex justify-between border-top">
        <div class="flex-item-fill trade__row flex items-center justify-center pointer" @click="tab('buy')" :class="{'bg-blue white': mode === 'buy'}"><span>Buy</span></div>
        <div class="flex-item-fill trade__row flex items-center justify-center border-left pointer" @click="tab('sell')" :class="{'bg-blue white': mode === 'sell'}"><span>Sell</span></div>
      </nav>
      <!-- buy -->
      <div v-show="mode === 'buy'">
        <div class="flex justify-between border-top">
          <div class="trade__row p2 flex-item-fill col col-4 flex flex-column justify-between">
            <div class="bold">{{pool.base}}</div>
            <div class="bold"><input type="number" class="input-number" v-model="buyAmount"></div>
          </div>
          <div class="trade__row p2 flex-item-fill col col-4 flex flex-column justify-between">
            <div class="flex justify-between items-center"><span>Receive {{pool.symbol}}</span></div>
            <div class="bold" v-text="buyEstimate"></div>
          </div>
        </div>
        <vue-slider class="no-pop" ref="sliderBuy" v-bind="sliders.buy" v-model="buyAmount"></vue-slider>
      </div>
      <!-- sell -->
      <div v-show="mode === 'sell'">
        <div class="flex justify-between border-top">
          <div class="trade__row p2 flex-item-fill col col-4 flex flex-column justify-between">
            <div class="flex justify-between items-center"><span class="bold">{{pool.symbol}}</span></div>
            <div class="bold"><input type="number" class="input-number" v-model="sellAmount"></div>
          </div>
          <div class="trade__row p2 flex-item-fill col col-4 flex flex-column justify-between">
            <div>Receive {{pool.base}}</div>
            <div class="bold" v-text="sellEstimate"></div>
          </div>
        </div>
        <vue-slider class="no-pop" ref="sliderSell" v-bind="sliders.sell" v-model="sellAmount"></vue-slider>
      </div>
      <button v-if="mode" @click="confirm()" class="btn block trade__row bg-blue white col-12">Confirm</button>
    </footer>
  </article>
</template>

<script>
import moment from 'moment'
import vueSlider from 'vue-slider-component'
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Trade',
  props: ['address'],
  data () {
    return {
      loading: true,
      mode: null,
      buyAmount: 1,
      sellAmount: 1,
      totalSupply: 230,
      totalEverMinted: 2500,
      supporters: 323120,
      price: 130,
      yourBalance: 230,
      poolBalance: 1000,
      currentDAI: 210, // get from chain
      currentTokens: 20, // get from chain
      sliders: {
        buy: {
          tooltip: 'never',
          min: 1,
          max: 210
        },
        sell: {
          tooltip: 'never',
          min: 1,
          max: 20
        }

      }
    }
  },
  computed: {
    ...mapState(['pool']),
    age () {
      return moment(this.pool.createdAt).fromNow()
    },
    buyEstimate () {
      return this.convertFromDAI(this.buyAmount) - this.currentTokens
    },
    sellEstimate () {
      return this.convertToDAI(this.sellAmount)
    }
  },
  methods: {
    ...mapActions([
      'mint',
      'unmint',
      'deployContract'
    ]),
    convertToDAI (amount) {
      var t = this.currentTokens - amount
      return this.currentDAI - (t * (t + 1)) / 2
    },
    convertFromDAI (amount) {
      return ((-1 + Math.sqrt(1 + 8 * (this.currentDAI + amount))) / 2)
    },
    confirm () {
      if (this.mode === 'buy') {
        this.mint(this.buyAmount)
      } else if (this.mode === 'sell') {
        this.unmint(this.sellAmount)
      }
    },
    tab (tab) {
      this.mode = this.mode === tab ? null : tab
      this.$nextTick(() => {
        this.$refs.sliderBuy.refresh()
        this.$refs.sliderSell.refresh()
      })
    }
  },
  components: { vueSlider },
  created () {
    this.$store.dispatch('getPoolDb', this.address).then(() => {
      this.deployContract(this.address)
      setTimeout(() => { this.loading = false }, 200)
    })
  }
}
</script>

<style lang="css" scoped>
.trade__figure{
  padding-bottom:36.6%;
}
.trade__row{
  height:4.66rem;
}
.bg-graph{
  background-image:url(../assets/graph-mask.svg);
  background-size:100% auto;
  background-position:bottom center;
}
</style>
