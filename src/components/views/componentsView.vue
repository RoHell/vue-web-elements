<template lang="pug">
  #app
    .buttons
      rh-button(@click='callback') normal
      rh-button(color-type='danger', plain, loading) danger plain loading
      rh-button(color-type='success', round)
        i.fas.fa-upload
        span succes round
      .cta-wrapper
        rh-floating-button(color-type='success', top, right, plain)
          i.fas.fa-plus
      .cta-wrapper
        rh-floating-button(loading)
          i.fas.fa-plus
      .cta-wrapper
        rh-floating-button(color-type='primary',left, top, disabled, size="small")
          i.fas.fa-plus
      .cta-wrapper
        rh-floating-button(color-type='warning', bottom, right)
          i.fas.fa-plus
      .cta-wrapper
        rh-floating-button(color-type='danger', bottom, left, size="big")
          i.fas.fa-plus
      rh-button(color-type='primary', size='small', loading)
        i.fas.fa-upload
        span small primary loading
      rh-button(color-type='warning', loading) loading
      rh-button(loading) just loading
</template>

<script>
  import RhButton from '../elements/RhButton'
  import RhFloatingButton from '../elements/RhFloatingButton'
	export default {
    data () {
      return {}
    },
    methods: {
      callback() {
        alert('kliknięty');
      }
    },
    components: {RhButton, RhFloatingButton}
  }

</script>

<style lang="sass" scoped>
  #app
    padding: 50px
    .buttons
      display: flex
      flex-wrap: wrap
      .cta-wrapper
        position: relative
        width: 300px
        height: 100px
        border: 1px solid #ccc

</style>