<template lang="pug">
  .arrows-view
    rh-arrows(
      :speed="propsValues.speed",
      :color="propsValues.color",
      :arrowsNumber="propsValues.arrowsNumber",
      :width="propsValues.width")
    props-view(:props="propsValues" @onPropsChange="onPropsChange" @onAdd="onAdd" @onSubtract="onSubtract")
</template>

<script>
import RhArrows from "../../../components/elements/RhArrows";
import propsView from "../../../components/views/propsView"
export default {
  data() {
    return {
      propsValues: {
        speed: 2,
        color: 'green',
        arrowsNumber: 3,
        width: "50"
      }
    };
  },
  computed: {},
  methods: {
    onPropsChange (event) {

    },
    onAdd (key) {
      let value = this.propsValues[key]
      this.propsValues[key] = 0
      this.propsValues[key] = value++
    },
    onSubtract (key) {
      let value = this.propsValues[key]
      this.propsValues[key] = 0
      this.propsValues[key] = value--
    }
  },
  components: { RhArrows, propsView}
};
</script>

<style lang="sass" scoped>
  .arrows-view
    display: flex
    justify-content: space-between
</style>