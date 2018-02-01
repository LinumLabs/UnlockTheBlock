<template>
  <div class="popout bg-white" :class="{'popout--pop': pop}" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Popout',
  props: {
    pop: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.$emit('mounted')
  }
}
</script>

<style lang="css" scoped>
.popout--pop{
  outline:1px solid blue;
  transform: translateX(7px) translateY(-7px);
}
</style>
