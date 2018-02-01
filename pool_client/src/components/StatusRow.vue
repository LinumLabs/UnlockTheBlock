<template>
  <div class="tbl-row relative flex items-center px2">
    <slot></slot>
    <div class="tbl-row__checkbox flex items-center justify-center absolute top-0 bottom-0 right-0 border-left" @click="$emit('check-click')">
      <div class="icon icon-check" v-show="status === 2"></div>
      <div class="icon icon-loading-1" v-show="status === 1"></div>
      <div class="icon icon-check opacity-qrtr" v-show="status === 0"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusRow',
  props: {
    status: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="css" scoped>
.statusrow__icon{
  width:calc(66/12*1rem);
}
</style>
