<template lang="pug">
.props-view
  .props-view__title Props:
  .props-view__props(
    v-for="(value, key) in props"
    :key="key")
    .props-view__props__key {{key}}
    .props-view__props__value
      div
        span(@click="onSubtract(key)") -
        input(type="text" v-model="propsValues[key]")
        span(@click="onAdd(key)") +
      //- div(v-else)
        input(type="text" v-model="propsValues[key]")
    
</template>

<script>

export default {
  props: {
    props: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {
      propsValues: this.props
    }
  },
  computed: {},
  watch: {
    propsValues () {
      this.$emit('onPropsChange', this.propsValues)
    }
  },
  methods: {
    onAdd (key) {
      this.$emit('onAdd', key)
    },
    onSubtract (key) {
      this.$emit('onSubtract', key)
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
      justify-content: space-between
      align-item: center
      margin: 10px 0
      .props-view__props__key
      .props-view__props__value
        display: flex
        align-items: center
        padding: 0 5px
</style>