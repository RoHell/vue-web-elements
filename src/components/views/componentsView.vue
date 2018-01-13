<template lang="pug">
  #app
    .buttons
      df-button(@click='callback') normal
      df-button(color-type='danger', plain, loading) danger
      df-button(color-type='success', round)
        i.fas.fa-upload
        span succes
      df-button(color-type='info', size='big', round, cta, loading)
        i.fas.fa-plus
      df-button(color-type='primary', size='small', loading)
        i.fas.fa-upload
        span primary
      df-button(color-type='warning', loading) loading
      df-button(loading) disabled
</template>

<script>
  import DfButton from '../elements/DfButton'
	export default {
    data () {
      return {}
    },
    methods: {
      callback() {
        alert('kliknięty');
      }
    },
    components: {DfButton}
  }

</script>

<style lang="sass" scoped>
  #app
    padding: 50px
    .buttons
      display: inline-flex
      flex-wrap: wrap

</style>