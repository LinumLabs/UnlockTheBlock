<template>
  <div class="menu-icon border-top border-bottom flex items-center" @click="$emit('click')">
    <div class="border-top col-12"></div>
  </div>
</template>

<script>
export default {
  name: 'MenuIcon'
}
</script>

<style lang="css" scoped>
.menu-icon{
  width:42px;
  height:16px;
  border-width:2px;
}
.menu-icon div{
  border-width:inherit;
}
</style>
