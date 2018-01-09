<template>
  <div id="app">
    <div class="buttons">
      <df-button @click="callback" loading>normal</df-button>
      <df-button colorType="danger" plain loading>danger</df-button>
      <df-button colorType="success" round>
        <i class="fas fa-upload"></i>
        <span>succes</span>
      </df-button>
      <df-button colorType="info" size="big" round cta loading>
        <i class="fas fa-plus"></i>
      </df-button>
      <df-button colorType="primary" size="small" loading>
        <i class="fas fa-upload"></i>
        <span>primary</span>
      </df-button>
      <df-button colorType="warning" loading>loading</df-button>
      <df-button colorType="danger" disabled>disabled</df-button>
    </div>
  </div>
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