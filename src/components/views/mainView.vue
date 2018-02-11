<template lang="pug">
  .main-view
    slot
</template>

<script>

export default {
  components: {},
}
</script>

<style lang="sass" scoped>
  .main-view
    padding: 50px
    .header
      font-size: 24px
      borde-bottom: 1px solid #ccc
      padding-bottom: 2px
</style>