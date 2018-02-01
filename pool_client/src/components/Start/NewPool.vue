<template>
  <section>
    <div class="line-height-3">
      <h1>Step 1 of 2</h1>
      <p>The price rates allow you to choose the growth model for your token. 'Flat' provides a donation-like model, whereas 'Linear' and 'Exponential' allow for value growth as your token rises in popularity.</p>
    </div>
    <div class="border mt3">
      <!-- name -->
      <div class="tbl-row pt1 px2 pb1">
        <label class="block" for="name">Name</label>
        <input id="nameInput" class="h3 bold block col-12 mt1" name="name" type="text" v-model="pool.name">
      </div>
      <!-- symbol -->
      <div class="tbl-row pt1 px2 pb1 border-top">
        <label class="block" for="symbolInput">Symbol <span class="red" v-show="pool.symbol.length > 7">too long!</span></label>
        <input id="symbolInput" class="h3 uppercase bold block col-12 mt1" name="symbol" type="text" v-model="pool.symbol" min="1" max="7">
      </div>
      <!-- graph types -->
      <div class="tbl-row pt1 px2 pb1 border-top">
        <label class="block" for="graph">Price Rate</label>
        <div class="clearfix center mt4">
          <!-- disabled -->
          <div class="col col-4 px1 opacity-qrtr">
            <img src="./graph--flat.svg" alt="Graph: Flat">
            <label class="block mt1 mb2" for="graphChoice1">Flat</label>
            <input class="radio-btn" type="radio" value="flat" v-model="pool.graph" id="graphChoice1" disabled>
          </div>
          <div class="col col-4 px1" @click="$emit('graph', 'linear')">
            <img src="./graph--linear.svg" alt="Graph: Slow">
            <label class="block mt1 mb2" for="graphChoice1">Linear</label>
            <input class="radio-btn" type="radio" value="linear" v-model="pool.graph" id="graphChoice2">
          </div>
          <!-- disabled -->
          <div class="col col-4 px1 opacity-qrtr">
            <img src="./graph--exponential.svg" alt="Graph: Exponential">
            <label class="block mt1 mb2" for="graphChoice1">Exponential</label>
            <input class="radio-btn" type="radio" value="exponential" v-model="pool.graph" id="graphChoice3" disabled>
          </div>
        </div>
      </div>
      <!-- select -->
      <div class="tbl-row pt1 px2 pb1 border-top" @click="baseOptionsOpen = !baseOptionsOpen">
        <label class="block"  for="baseTokenSelect">Select Base Token</label>
        <div class="h3 mt1 bold">{{pool.baseToken}}</div>
      </div>
      <div v-show="baseOptionsOpen">
        <div v-for="option in baseOptions" :key="option" class="tbl-row border-top px2 flex items-center" :class="{'bg-blue white': pool.baseToken === option}" @click="pool.baseToken = option; baseOptionsOpen = false">
          <div class="h3 bold">{{option}}</div>
        </div>
      </div>
      <!-- select: custom addr -->
      <div v-show="showCustomAddr" class="tbl-row pt1 px2 pb1 border-top">
        <label class="block" for="customAddressInput">Base Token Address</label>
        <input class="h3 bold mt1" type="text" id="customAddressInput" v-model="pool.customBaseTokenAddress" placeholder="0x0">
      </div>
    </div>
    <footer>
      <router-link to="/start/confirm">
        <div class="border-top border-bottom center mt4" :class="{'opacity-qrtr': !canProceed}">
          <div class="btn block">Next</div>
        </div>
      </router-link>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'NewPool',
  props: ['pool'],
  data () {
    return {
      value: 30,
      baseOptionsOpen: false,
      baseOptions: ['DAI', 'Custom']
    }
  },
  computed: {
    showCustomAddr () {
      return this.pool.baseToken === 'Custom' && !this.baseOptionsOpen
    },
    canProceed () {
      const hasName = this.pool.name.length > 0
      const hasSymbol = this.pool.symbol.length > 0 && this.pool.symbol.length < 8
      const basePasses = this.pool.baseToken !== 'Custom' || (this.pool.baseToken === 'Custom' && this.pool.customBaseTokenAddress.length === 40)
      return hasName && hasSymbol && basePasses
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.name !== 'ConfirmPool') return next()
    if (this.canProceed) return next()
  }
}
</script>
