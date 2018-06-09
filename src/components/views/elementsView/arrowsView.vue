<template lang="pug">
  .arrows-view
    arrows(speed="1.3", color="green", :arrowsNumber="3")
</template>

<script>
import arrows from "../../../components/elements/arrows";
export default {
  data() {
    return {};
  },
  methods: {},
  components: { arrows }
};
</script>

<style lang="sass" scoped>
  .arrows-view
    display: flex
    justify-content: center
    align-items: center
</style>