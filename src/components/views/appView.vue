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
    display: flex
    min-height: 100vh
    overflow: hidden
</style>