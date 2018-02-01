export default {
  GET_POOLS (state, pools) {
    state.pools = pools
  },
  GET_POOL_DB (state, pool) {
    state.pool = pool
    state.currentPool = pool.address
  },
  UPDATE_NETWORK (state, network) {
    state.network = network
  },
  UPDATE_UNLOCKED (state, unlocked) {
    state.unlocked = unlocked
  },
  UPDATE_ACCOUNT (state, account) {
    state.account = account
  },
  LOGGED_IN (state) {
    state.loggedIn = true
  },
  LOGGED_OUT (state) {
    state.loggedIn = false
  },
  INC_DEPLOY_STEP (state, step) {
    state.deploySteps[step]++
  },
  SET_DEPLOY_STEP (state, { step, val }) {
    state.deploySteps[step] = val
  },
  UPDATE_CURRENT_POOL (state, currentPool) {
    state.currentPool = currentPool
  }
}
