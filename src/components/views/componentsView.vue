<template lang="pug">
  #app
    .buttons
      rh-button(@click='callback') normal
      rh-button(color-type='danger', plain, loading) danger plain loading
      rh-button(color-type='success', round)
        i.fas.fa-upload
        span succes round
      rh-button(color-type='info', size='big', round, cta, loading)
        i.fas.fa-plus
      rh-button(color-type='primary', size='small', loading)
        i.fas.fa-upload
        span small primary loading
      rh-button(color-type='warning', loading) loading
      rh-button(loading) just loading
</template>

<script>
  import RhButton from '../elements/RhButton'
	export default {
    data () {
      return {}
    },
    methods: {
      callback() {
        alert('kliknięty');
      }
    },
    components: {RhButton}
  }

</script>

<style lang="sass" scoped>
  #app
    padding: 50px
    .buttons
      display: inline-flex
      flex-wrap: wrap

</style>