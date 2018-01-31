<template lang="pug">
  .main-view
    side-menu
    router-view
</template>

<script>
import SideMenu from '../views/SideMenu.vue'

export default {
  components: {
    SideMenu
  },
}
</script>

<style lang="sass" scoped>
  .main-view
    min-height: 100vh
    display: grid
    grid-template-columns: minmax(auto, 200px) 1fr
    grid-auto-rows: 1fr
</style>