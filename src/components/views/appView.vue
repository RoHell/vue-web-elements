<template lang="pug">
  .app-view
    side-menu
    main-view
      router-view
</template>

<script>
import sideMenu from '../views/sideMenu.vue'
import mainView from '../views/mainView.vue'

export default {
  components: {
    sideMenu,
    mainView
  },
}
</script>

<style lang="sass" scoped>
  .app-view
    min-height: 100vh
    display: grid
    grid-template-columns: minmax(auto, 200px) 1fr
    grid-auto-rows: 1fr
</style>