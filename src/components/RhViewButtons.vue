<template lang="pug">
  .rh-view-buttons
    .buttons
      rh-button(@click='callback') normal
      rh-button(color-type='danger', plain, loading) danger plain loading
      rh-button(color-type='success', round)
        i.fas.fa-upload
        span succes round
      .cta-wrapper
        rh-floating-button(color-type='success', top, right, plain, size="tiny")
          i.fas.fa-plus
      .cta-wrapper
        rh-floating-button(loading style="marginLeft: 20px; marginTop: 30px")
          i.fas.fa-plus
      .cta-wrapper
        rh-floating-button(color-type='primary', left, top, disabled, size="small")
          i.fas.fa-plus
      .cta-wrapper
        rh-floating-button(color-type='warning', fixed, bottom, right)
          i.fas.fa-plus
        rh-floating-button(color-type='warning', bottom, right size="large" plain)
          i.fas.fa-plus
      .cta-wrapper
        rh-loader(size="large")
        rh-floating-button(color-type='danger', fixed, bottom, left, size="big")
          i.fas.fa-plus
      rh-button(color-type='primary', size='small', loading)
        i.fas.fa-upload
        span small primary loading
      rh-button(color-type='warning', loading, size="tiny") loading
      rh-button(loading size="big") just loading
      rh-button(loading size="large") just loading
</template>

<script>
  import RhButton from '../components/elements/RhButton'
  import RhFloatingButton from '../components/elements/RhFloatingButton'
  import RhLoader from '../components/elements/RhLoader'
	export default {
    data () {
      return {}
    },
    methods: {
      callback() {
        alert('kliknięty');
      }
    },
    components: {RhButton, RhFloatingButton, RhLoader}
  }

</script>

<style lang="sass" scoped>
  .rh-view-buttons
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