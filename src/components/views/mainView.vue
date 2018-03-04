<template lang="pug">
  .main-view
    transition(name="slide-in" mode="out-in")
      slot
</template>

<script>

export default {
  components: {},
}
</script>

<style lang="sass" scoped>
  @import '../../sass/transitions/slide-in'
  .main-view
    flex: 1
    margin-left: 220px
    padding: 50px
</style>