<template lang="pug">
  .buttons-view
    rh-button(@click='callback') normal
    rh-button(color-type='danger', plain) danger plain
    rh-button(color-type='success', round) succes round
    rh-button(color-type='warning', size="tiny") warning tiny
    rh-button(size="big") big
    rh-button(size="large", plain) large
</template>

<script>
import RhButton from "../../../components/elements/RhButton";
export default {
  data() {
    return {};
  },
  methods: {
    callback() {
      alert("kliknięty");
    }
  },
  components: { RhButton }
};
</script>

<style lang="sass" scoped>
  .buttons-view
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))
    grid-gap: 10px
    .rh-button
      justify-self: center

</style>