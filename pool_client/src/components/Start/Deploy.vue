<template>
  <div class="fixed z2 top-0 bottom-0 left-0 right-0 bg-white p4 overflow-scroll">
    <header>
      <figure class="pt4 pb2 mx-auto center">
        <img class="max-width-1" src="../../assets/art/deploy-contract.svg">
      </figure>
      <p class="h3 mt4 center">
        <b>We're Preparing Your Pool</b><br>
        Please be patient while we set up your pool. This may take some time as we deploy and confirm everything with the blockchain!
      </p>
    </header>
    <section class="border my4">
      <status-row :status="deploySteps.one">Write Transaction</status-row>
      <status-row :status="deploySteps.two" class="border-top">Transaction Signed</status-row>
      <status-row :status="deploySteps.three" class="border-top">Transaction Submitted</status-row>
      <status-row :status="deploySteps.four" class="border-top">Transaction Complete</status-row>
    </section>
    <footer>
      <button @click.self="viewPool()" class="btn rounded block col-12 bg-blue white">{{actionButton}}</button>
    </footer>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import StatusRow from '../StatusRow'
export default {
  name: 'Deploy',
  props: {
    pool: Object
  },
  computed: {
    ...mapState(['currentPool']),
    actionButton () {
      return this.deploySteps.four === 2 ? 'Edit Pool 🎉' : 'Please Wait'
    },
    deploySteps () {
      return this.$store.state.deploySteps
    }
  },
  methods: {
    ...mapActions([
      'deploy'
    ]),
    viewPool () {
      if (this.deploySteps.four === 2) {
        this.$router.push('/edit/' + this.currentPool)
      }
    }
  },
  mounted () {
    this.deploy(this.pool)
  },
  components: { StatusRow }
}
</script>
