<template lang="pug">
  .buttons-view
    rh-button(@click='callback') normal
    rh-button(color-type='danger', plain, loading) danger plain loading
    rh-button(color-type='success', round) succes round
    rh-button(color-type='warning', loading, size="tiny") warning loading tiny
    rh-button(loading size="big") loading big
    rh-button(loading size="large", plain) loading large
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
    .rh-button
      margin: 10px

</style>