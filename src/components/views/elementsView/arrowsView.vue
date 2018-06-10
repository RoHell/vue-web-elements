<template lang="pug">
  .arrows-view
    rh-arrows(
      :speed="propsValues.speed",
      :color="propsValues.color",
      :arrowsNumber="propsValues.arrowsNumber",
      :width="propsValues.width")
    props-view(:code="propsValues" @onPropsChange="propsValues = $event")
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
  methods: {},
  components: { RhArrows, propsView}
};
</script>

<style lang="sass" scoped>
</style>