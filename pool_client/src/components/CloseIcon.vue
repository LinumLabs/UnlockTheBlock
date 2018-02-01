<template>
  <svg width="48px" height="37px" @click="$emit('click')">
    <line x1="2%" y1="2%" x2="98%" y2="98%" stroke="blue" stroke-width="2"></line>
    <line x1="2%" y1="98%" x2="98%" y2="2%" stroke="blue" stroke-width="2"></line>
  </svg>
</template>

<script>
export default {
  name: 'CloseIcon'
}
</script>

<style lang="css" scoped>
</style>
