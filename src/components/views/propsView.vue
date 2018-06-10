<template lang="pug">
.props-view
  .props-view__title Props:
  .props-view__props(
    v-for="(value, key, index) in code"
    :key="key")
    label(:for="key") {{key}}
    input(type="text" :id="key" v-model.number="propsValues[key]" @change="onPropsChange")
</template>

<script>

export default {
  props: {
    code: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {
      propsValues: this.code
    }
  },
  computed: {},
  watch: {},
  methods: {
    onPropsChange () {
      this.$emit('onPropsChange', this.propsValues)
    }
  }
}
</script>

<style lang="sass" scoped>
  .props-view
    padding: 20px 0
    color: #666
    .props-view__title
      font-weight: 600
    .props-view__props
      display: flex
      margin: 10px 0
      label
        flex-basis: 20%
      input
        flex-basis: 20%
</style>