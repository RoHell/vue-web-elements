<template lang="pug">
  .loaders-view
    rh-button(color-type='danger', plain, loading) danger plain loading
    .cta-wrapper
      rh-floating-button(loading style="marginLeft: 20px; marginTop: 30px")
        i.fas.fa-plus
    .cta-wrapper
      rh-loader(size="large")
      rh-floating-button(color-type='danger', fixed, bottom, right, loading size="big")
        i.fas.fa-plus
    rh-button(color-type='primary', size='small', loading)
      i.fas.fa-upload
      span small primary loading
    rh-button(color-type='warning', loading, size="tiny") loading
    rh-button(loading size="big") just loading
    rh-button(loading size="large") just loading
</template>

<script>
import RhButton from "../../../components/elements/RhButton";
import RhFloatingButton from "../../../components/elements/RhFloatingButton";
import RhLoader from "../../../components/elements/RhLoader";
export default {
  data() {
    return {};
  },
  methods: {
    callback() {
      alert("kliknięty");
    }
  },
  components: { RhButton, RhFloatingButton, RhLoader }
};
</script>

<style lang="sass" scoped>
  .loaders-view
    .cta-wrapper
      position: relative
      width: 300px
      height: 100px
      border: 1px solid #ccc

</style>