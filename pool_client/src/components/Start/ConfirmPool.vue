<template>
  <section>
    <div class="line-height-3">
      <h1>Step 2 of 2</h1>
      <p>Confirm your Pool's setup and confirm below. The cost to open your pool is an estimate.</p>
    </div>
    <div class="border mt3">
      <div class="tbl-row pt1 px2 pb2">
        <div>Name</div>
        <div class="h3 bold mt1">{{pool.name}}</div>
      </div>
      <div class="tbl-row border-top flex justify-between items-stretch left-align">
        <div class="flex-item-fill border-right pt1 px2 pb2">
          <div>Symbol</div>
          <div class="h3 mt1 bold">{{pool.symbol}}</div>
        </div>
        <div class="flex-item-fill border-right pt1 px2 pb2">
          <div>Type</div>
          <div class="h3 mt1 bold capitalize">{{pool.graph}}</div>
        </div>
        <div class="flex-item-fill pt1 px2 pb2">
          <div>Type</div>
          <div class="h3 mt1 bold">{{pool.baseToken}}</div>
        </div>
      </div>
      <div class="tbl-row border-top pt1 px2 pb2">
        <div>Estimated Cost (USD)</div>
        <div class="est-price h00 right-align line-height-1">$70</div>
      </div>
      <status-row class="border-top" :status="ready ? 2 : 0" @check-click="ready = !ready">
        Everything looks good {{punc}}
      </status-row>
    </div>
    <footer class="mt4">
      <button @click="submit" class="btn col-12 block center rounded bg-blue white" :class="{'opacity-qrtr': !ready}">
        Open the Pool
      </button>
    </footer>
  </section>
</template>

<script>
import StatusRow from '../StatusRow'
export default {
  name: 'ConfirmPool',
  props: ['pool'],
  components: {
    StatusRow
  },
  data () {
    return {
      ready: false
    }
  },
  computed: {
    punc () {
      return this.ready ? '!' : '?'
    }
  },
  methods: {
    submit () {
      if (this.ready) this.$emit('submit')
    }
  }
}
</script>

<style lang="css" scoped>
.est-price{
  margin-top: calc(72/55*1em);
}
</style>
