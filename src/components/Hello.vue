<template>
  <div id="app">
    <div class="buttons">
      <df-button @click="callback">normal</df-button>
      <df-button colorType="danger" plain>danger</df-button>
      <df-button colorType="success" round>
        <i class="fa fa-upload"></i>
        <span>succes</span>
      </df-button>
      <df-button colorType="info" size="big">info</df-button>
      <df-button colorType="primary" size="small">primary</df-button>
      <df-button colorType="warning" loading>loading</df-button>
      <df-button colorType="danger" disabled>disabled</df-button>
    </div>
  </div>
</template>

<script>
  import DfButton from './DfButton'
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