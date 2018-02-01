<template>
  <div>
    <header class="border-bottom clearfix">
      <div class="bg-dots col col-4">
        <popout class="tbl-row p2 flex flex-column justify-between" @click="tab('give')" :pop="edit === 'give'">
          <div>Mint</div>
          <div class="relative">
            <span class="absolute left-0 bottom-0">$</span><input class="block col-12 pl2 input-number" type="number" v-model="join.amount" min="1" @focus="tab('give', false)" @click.stop="stopProp">
          </div>
        </popout>
      </div>
      <div class="bg-dots col col-4 border-left">
        <popout class="tbl-row p2 flex flex-column justify-between" @click="tab('duration')" :pop="edit === 'duration'">
          <div>Monthly for</div>
          <div class="nowrap"><input class="input-number input-number--3digits" type="number" min="1" v-model="join.duration" @focus="tab('duration', false)" @click.stop="stopProp"> Month<span v-show="join.duration > 1">s</span></div>
        </popout>
      </div>
      <div class="bg-dots col col-4 border-left">
        <popout class="tbl-row p2 flex flex-column justify-between" @click="tab('share')" :pop="edit === 'share'">
          <div>Donate</div>
          <div><input type="number" class="input-number input-number--3digits" v-model="join.share" @focus="tab('share', false)" @click.stop="stopProp">%</div>
        </popout>
      </div>
    </header>
    <div id="sliders" class="bg-dots">
      <vue-slider v-if="edit === 'give'" ref="sliderGive" v-bind="sliders.give" v-model="join.amount"></vue-slider>
      <vue-slider v-if="edit === 'duration'" ref="sliderDuration" v-bind="sliders.duration" v-model="join.duration"></vue-slider>
      <vue-slider v-if="edit === 'share'" ref="sliderShare" v-bind="sliders.share" v-model="join.share"></vue-slider>
    </div>
    <!-- Slider
    <div class="bg-dots" @click="edit === null ? edit = 'give' : null">
      <popout class="tbl-row bg-yellow" :pop="edit !== null"></popout>
    </div>
    -->
    <footer>
      <button @click="sub" class="btn block col-12 bg-blue white">
        Jump in the Pool
      </button>
    </footer>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component'
import Popout from '@/components/Popout'
import { mapActions } from 'vuex'

export default {
  name: 'PoolJoin',
  data () {
    return {
      edit: null,
      join: {
        amount: 50,
        duration: 6,
        share: 50
      },
      durationInput: false,
      sliders: {
        give: {
          tooltip: 'never',
          min: 1,
          max: 200
        },
        duration: {
          tooltip: 'never',
          min: 1,
          max: 120
        },
        share: {
          tooltip: 'never',
          min: 1,
          max: 100
        }
      }
    }
  },
  props: {
    pool: { type: Object, required: true }
  },
  watch: {
    join: {
      handler: function (val) {
        val.amount = val.amount < 0 ? 0 : val.amount
        val.duration = val.duration < 1 ? 1 : val.duration
        if (val.share < 0) val.share = 0
        if (val.share > 100) val.share = 100
        this.deployContract(this.pool.address)
      },
      deep: true
    }
  },
  methods: {
    tab (tab, toggle = true) {
      // this.$nextTick(() => this.$refs.sliderGive.refresh())
      if (toggle) {
        this.edit = tab === this.edit ? null : tab
      } else {
        this.edit = tab
      }
    },
    stopProp () {},
    sub () {
      this.subscribe(this.join)
    },

    ...mapActions([
      'subscribe',
      'deployContract'
    ])
  },
  components: { Popout, vueSlider }
}
</script>
